module Main exposing (main)

import AssocList as Dict exposing (Dict)
import Browser exposing (Document)
import Browser.Dom as Dom
import Browser.Events exposing (onResize)
import Browser.Navigation as Nav
import Categories
import Colors
import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Element.Region as Region
import Env exposing (rootUrl)
import FeatherIcons
import Post
import Task
import Url as Url exposing (Url)
import Url.Builder
import Url.Parser as Parser exposing ((</>), (<?>))
import Url.Parser.Query as Query
import Utils exposing (borderBetween, directions0, relativePath)



-- MAIN


main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        , onUrlRequest = LinkClicked
        , onUrlChange = UrlChanged
        }



-- INIT


init : { width : Int } -> Url -> Nav.Key -> ( Model, Cmd Msg )
init { width } url key =
    ( { posts = Post.all
      , key = key
      , showMenu = False
      , showSearch = False
      , searchTerm = ""
      , searchFullText = False
      , width = width
      , route = routeFromUrl url
      , colorScheme = Colors.Light
      }
    , Cmd.none
    )



-- MODEL


type alias Model =
    { posts : Dict String Post.Post
    , key : Nav.Key
    , showMenu : Bool
    , showSearch : Bool
    , searchTerm : String
    , searchFullText : Bool
    , width : Int
    , route : Route
    , colorScheme : Colors.ColorScheme
    }


type Route
    = HomeRoute (Maybe Int)
    | ArticleRoute String
    | CategoriesRoute
    | CategoryRoute String
    | NotFound


route : Parser.Parser (Route -> a) a
route =
    Parser.oneOf
        [ Parser.map HomeRoute (Parser.query <| Query.int "page")
        , Parser.map CategoriesRoute (Parser.s "categories")
        , Parser.map CategoryRoute (Parser.s "category" </> Parser.string)
        , Parser.map ArticleRoute Parser.string
        ]


routeFromString : String -> Route
routeFromString string =
    case Url.fromString string of
        Nothing ->
            NotFound

        Just url ->
            routeFromUrl url


routeFromUrl : Url -> Route
routeFromUrl url =
    Maybe.withDefault NotFound (Parser.parse route url)



-- UPDATE


type Msg
    = UrlChanged Url
    | LinkClicked Browser.UrlRequest
    | MenuToggled
    | WindowResized Int
    | ResetViewport
    | ShowSearch
    | SearchChanged String
    | ToggleFullTextSearch Bool
    | ChangeColorScheme Colors.ColorScheme
    | NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        LinkClicked urlRequest ->
            case urlRequest of
                Browser.Internal url ->
                    ( model
                    , Nav.pushUrl model.key (Url.toString url)
                    )

                Browser.External url ->
                    ( model
                    , Nav.load url
                    )

        UrlChanged url ->
            update ResetViewport <| handleUrlChange model url

        MenuToggled ->
            ( { model | showMenu = not model.showMenu }
            , Cmd.none
            )

        ResetViewport ->
            ( model
            , resetViewport
            )

        WindowResized newWidth ->
            ( { model | width = newWidth }
            , Cmd.none
            )

        ShowSearch ->
            ( { model | showSearch = True, showMenu = False }
            , Cmd.none
            )

        SearchChanged term ->
            ( { model | searchTerm = term }
            , Nav.replaceUrl model.key (Url.Builder.absolute [] [])
            )

        ToggleFullTextSearch val ->
            ( { model | searchFullText = val }
            , Cmd.none
            )

        ChangeColorScheme colorScheme ->
            ( { model | colorScheme = colorScheme }
            , Cmd.none
            )

        NoOp ->
            ( model, Cmd.none )


resetViewport : Cmd Msg
resetViewport =
    Task.perform (\_ -> NoOp) (Dom.setViewport 0 0)


handleUrlChange : Model -> Url -> Model
handleUrlChange model url =
    { model
        | showMenu = False
        , route = routeFromUrl url
    }


subscriptions : Model -> Sub Msg
subscriptions model =
    onResize (\w h -> WindowResized w)



-- VIEW


view : Model -> Document Msg
view model =
    let
        body =
            case model.route of
                HomeRoute pageNumber ->
                    homeBody model.posts (Maybe.withDefault 0 pageNumber) model

                NotFound ->
                    notFound model

                CategoriesRoute ->
                    homeFrame model
                        [ content model.width 90 <|
                            Categories.view model.colorScheme
                        ]

                CategoryRoute slug ->
                    case Categories.fromSlug slug of
                        Nothing ->
                            notFound model

                        Just category ->
                            homeFrame model
                                [ content model.width 90 <|
                                    Categories.viewCategory model.colorScheme category
                                ]

                ArticleRoute slug ->
                    case Post.fromSlug slug model.posts of
                        Nothing ->
                            notFound model

                        Just post ->
                            articleBody post model
    in
    { title = "Unanswered"
    , body =
        [ layout
            [ montserrat
            , Font.color (Colors.primary model.colorScheme)
            , Background.color (Colors.secondary model.colorScheme)
            ]
            body
        ]
    }


homeBody : Dict String Post.Post -> Int -> Model -> Element Msg
homeBody posts pageNumber model =
    let
        search : Element Msg
        search =
            case model.showSearch of
                False ->
                    Element.none

                True ->
                    content model.width 70 <| searchUI model
    in
    homeFrame model
        [ search
        , content model.width 90 <|
            homeContent model.colorScheme model.width posts pageNumber model.searchTerm { searchFullText = model.searchFullText }
        ]


homeFrame : Model -> List (Element Msg) -> Element Msg
homeFrame model innerContents =
    column
        [ width fill
        , spacing 24
        , paddingEach { left = 0, right = 0, top = 0, bottom = 36 }
        ]
        ([ column [ width fill ]
            [ header model Nothing
            , subheader model.colorScheme
            ]
         ]
            ++ innerContents
        )


articleBody : Post.Post -> Model -> Element Msg
articleBody post model =
    column
        [ width fill
        , height fill
        ]
        [ row [ width fill, height fill ]
            [ el [ width fill, alignTop ] <|
                content model.width 70 <|
                    Post.view
                        model.colorScheme
                        (pct model.width 70 |> maximum 800)
                        post
            , sideBar model.colorScheme model.width
            ]
        , el [ width fill, alignBottom ] <| header model (Just post)
        ]


notFound : Model -> Element Msg
notFound model =
    column
        [ width fill
        , spacing 24
        , paddingEach { left = 0, right = 0, top = 0, bottom = 36 }
        ]
        [ column [ width fill ]
            [ header model Nothing
            , subheader model.colorScheme
            ]
        , content model.width 70 <|
            paragraph
                [ width fill ]
                [ text "Hmm. What you're looking for does not exist. "
                , text "Maybe someone sent you the wrong link. "
                , link [ Font.color <| Colors.link model.colorScheme ]
                    { label = text "Let's go back home."
                    , url = Url.Builder.absolute [] []
                    }
                ]
        ]


content : Int -> Int -> Element Msg -> Element Msg
content w percent =
    el
        [ centerX
        , width (pct w percent)
        ]


sideBar : Colors.ColorScheme -> Int -> Element Msg
sideBar colorScheme w =
    el
        [ width <| px (sidebarWidth w)
        , Background.color <| Colors.accent colorScheme
        , alignRight
        , height fill
        ]
    <|
        text ""


sidebarWidth : Int -> Int
sidebarWidth w =
    w * 5 // 100 |> min 96


arrowRight : Model -> Post.Post -> Element Msg
arrowRight =
    arrow FeatherIcons.arrowRight nextSlug


arrowLeft : Model -> Post.Post -> Element Msg
arrowLeft =
    arrow FeatherIcons.arrowLeft prevSlug


arrow : FeatherIcons.Icon -> (Model -> Post.Post -> Maybe String) -> Model -> Post.Post -> Element Msg
arrow ic slugf model post =
    let
        next =
            slugf model post
    in
    case next of
        Nothing ->
            icon [ Font.color <| Colors.disabled model.colorScheme ] ic

        Just s ->
            link []
                { url = s
                , label = icon [] ic
                }


nextSlug : Model -> Post.Post -> Maybe String
nextSlug model post =
    nextSlugHelp (Dict.toList (Dict.filter (\_ p -> p.showOnHomePage) model.posts)) post


prevSlug : Model -> Post.Post -> Maybe String
prevSlug model post =
    nextSlugHelp (List.reverse (Dict.toList (Dict.filter (\_ p -> p.showOnHomePage) model.posts))) post


nextSlugHelp : List ( String, Post.Post ) -> Post.Post -> Maybe String
nextSlugHelp posts target =
    case posts of
        [] ->
            Nothing

        _ :: [] ->
            Nothing

        ( _, post ) :: ( nxtSlug, nxtPost ) :: rest ->
            if post == target then
                Just nxtSlug

            else
                nextSlugHelp (( nxtSlug, nxtPost ) :: rest) target


icon attrs i =
    el attrs (i |> FeatherIcons.toHtml [] |> html)


header : Model -> Maybe Post.Post -> Element Msg
header model post =
    let
        maybeMenu =
            case post of
                Nothing ->
                    menu model.colorScheme model.showMenu

                Just p ->
                    navButtons model p
    in
    row
        [ Background.color <| Colors.accent model.colorScheme
        , padding 24
        , width fill
        , Font.color Colors.white
        ]
        [ heading
        , maybeMenu
        ]


heading =
    link
        [ Region.heading 1
        , Font.size 36
        , sourceSerifPro
        , paddingEach { directions0 | right = 12 }
        ]
        { label = text "Unanswered"
        , url = rootUrl
        }


sourceSerifPro =
    Font.family
        [ Font.typeface "SourceSerifPro"
        , Font.serif
        ]


montserrat =
    Font.family
        [ Font.typeface "Montserrat"
        , Font.sansSerif
        ]


menu : Colors.ColorScheme -> Bool -> Element Msg
menu colorScheme showMenu =
    let
        modal =
            if showMenu then
                menuModal colorScheme

            else
                Element.none
    in
    el
        [ alignRight
        , onLeft modal
        ]
    <|
        Input.button [ Font.size 30 ]
            { label = text "⋮"
            , onPress = Just MenuToggled
            }


navButtons : Model -> Post.Post -> Element Msg
navButtons model post =
    row
        [ alignRight
        , paddingEach { directions0 | right = sidebarWidth model.width }
        , spacing 12
        ]
        [ arrowLeft model post
        , arrowRight model post
        ]


menuModal : Colors.ColorScheme -> Element Msg
menuModal colorScheme =
    el
        [ width shrink
        , height shrink
        , Background.color <| Colors.accentDark colorScheme
        , Border.color <| Colors.accent colorScheme
        , Border.width 1
        , Border.rounded 6
        , paddingXY 45 5
        ]
        (menuOptions colorScheme)


menuOptions : Colors.ColorScheme -> Element Msg
menuOptions colorScheme =
    column
        [ Font.size 24
        , sourceSerifPro
        ]
    <|
        borderBetween
            [ menuOption "what-is-this" "What is this?"
            , menuOption "who-am-i" "Who am I?"
            , menuOption "contact-me" "Contact me"
            , menuOption "categories" "Posts by category"
            , showSearch
            , colorSchemeSwitcher colorScheme
            , subscribeLink
            ]


colorSchemeSwitcher : Colors.ColorScheme -> Element Msg
colorSchemeSwitcher colorScheme =
    let
        ( lbl, nextScheme ) =
            case colorScheme of
                Colors.Light ->
                    ( "Switch to dark mode 🌚", Colors.Dark )

                Colors.Dark ->
                    ( "Switch to light mode 🌞", Colors.Light )
    in
    Input.button
        [ paddingEach { directions0 | top = 24, bottom = 24 }
        ]
        { label = text lbl
        , onPress = Just <| ChangeColorScheme nextScheme
        }


menuOption : String -> String -> Element Msg
menuOption slug lbl =
    link
        [ paddingEach { directions0 | top = 24, bottom = 24 }
        ]
        { url = rootUrl ++ slug
        , label = text lbl
        }


subscribeLink : Element msg
subscribeLink =
    newTabLink
        [ paddingEach { directions0 | top = 24, bottom = 24 }
        ]
        { url = "http://eepurl.com/g_Wf8D"
        , label = text "Subscribe"
        }


showSearch : Element Msg
showSearch =
    Input.button
        [ paddingEach { directions0 | top = 24, bottom = 24 }
        ]
        { label = text "Search"
        , onPress = Just ShowSearch
        }


subheader colorScheme =
    paragraph
        [ Region.heading 2
        , Font.size 18
        , width fill
        , paddingXY 24 12
        , Background.color <| Colors.neutral colorScheme
        , Font.color <| Colors.white
        ]
        [ text "Where I type and scream my thoughts into the void, unanswered" ]


searchUI : Model -> Element Msg
searchUI model =
    column
        [ width fill
        , spacing 12
        ]
        [ Input.text
            [ width fill
            , Input.focusedOnLoad
            ]
            { label = Input.labelAbove [] <| text "Search the blog:"
            , placeholder = Just <| Input.placeholder [] <| text "What dost thou seeketh?"
            , text = model.searchTerm
            , onChange = SearchChanged
            }
        , Input.checkbox
            []
            { onChange = ToggleFullTextSearch
            , icon = Input.defaultCheckbox
            , checked = model.searchFullText
            , label = Input.labelRight [ Font.size 14 ] <| text "search full text"
            }
        ]


homeContent : Colors.ColorScheme -> Int -> Dict String Post.Post -> Int -> String -> Post.SearchOptions -> Element Msg
homeContent colorScheme w posts pageNumber searchTerm searchOpts =
    let
        postList : List (Element Msg)
        postList =
            posts
                |> Dict.filter (\_ post -> post.showOnHomePage)
                |> Dict.filter (\_ post -> Post.matchesSearch searchTerm post searchOpts)
                |> Dict.map Post.preview
                |> Dict.values
    in
    column
        [ Border.widthEach { directions0 | left = 1, right = 1 }
        , spacing 36
        , width (fill |> maximum 800)
        , paddingXY (w * 6 // 100) 20
        , centerX
        ]
    <|
        case postList of
            [] ->
                [ paragraph [ Font.italic ] [ text "No posts found" ] ]

            _ ->
                itemsForPage
                    { itemsPerPage = postsPerPage
                    , pageNumber = pageNumber
                    }
                    postList
                    ++ [ paginationControls
                            colorScheme
                            { numPosts = List.length postList
                            , currentPage = pageNumber
                            }
                       ]


postsPerPage : Int
postsPerPage =
    15


paginationControls : Colors.ColorScheme -> { numPosts : Int, currentPage : Int } -> Element Msg
paginationControls colorScheme { numPosts, currentPage } =
    let
        numPages : Int
        numPages =
            ceiling (toFloat numPosts / toFloat postsPerPage)

        currentPageInfo : String
        currentPageInfo =
            "Page " ++ String.fromInt (currentPage + 1) ++ " of " ++ String.fromInt numPages

        hasPrevious : Bool
        hasPrevious =
            currentPage > 0

        hasNext : Bool
        hasNext =
            -- (- 1) to account for 0-indexed page numbers
            currentPage < numPages - 1

        previousEl =
            case hasPrevious of
                True ->
                    link
                        [ Font.color <| Colors.link colorScheme ]
                        { label = text "Previous"
                        , url = Url.Builder.absolute [] [ Url.Builder.int "page" (currentPage - 1) ]
                        }

                False ->
                    el [ Font.color <| Colors.disabled colorScheme ] <|
                        text "Previous"

        nextEl =
            case hasNext of
                True ->
                    link
                        [ Font.color <| Colors.link colorScheme ]
                        { label = text "Next"
                        , url = Url.Builder.absolute [] [ Url.Builder.int "page" (currentPage + 1) ]
                        }

                False ->
                    el [ Font.color <| Colors.disabled colorScheme ] <|
                        text "Next"
    in
    row
        [ width fill, Font.size 14 ]
        [ el [ alignLeft ] previousEl
        , el [ centerX ] <|
            text currentPageInfo
        , el [ alignRight ] nextEl
        ]


itemsForPage : { itemsPerPage : Int, pageNumber : Int } -> List a -> List a
itemsForPage { itemsPerPage, pageNumber } items =
    case compare pageNumber 0 of
        LT ->
            List.take itemsPerPage items

        EQ ->
            List.take itemsPerPage items

        GT ->
            itemsForPage
                { itemsPerPage = itemsPerPage
                , pageNumber = pageNumber - 1
                }
                (List.drop itemsPerPage items)


pct : Int -> Int -> Length
pct w percent =
    px (percent * w // 100)
