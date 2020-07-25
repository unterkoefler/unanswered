module Main exposing (main)

import AssocList as Dict exposing (Dict)
import Browser exposing (Document)
import Browser.Events exposing (onResize)
import Browser.Navigation as Nav
import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Element.Region as Region
import Env exposing (rootUrl)
import Post
import Url as Url exposing (Url)
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
      , post = Post.fromSlug (relativePath url) Post.all
      , key = key
      , showMenu = False
      , width = width
      }
    , Cmd.none
    )



-- MODEL


type alias Model =
    { posts : Dict String Post.Post
    , post : Maybe Post.Post
    , key : Nav.Key
    , showMenu : Bool
    , width : Int
    }


type Page
    = Home
    | Article



-- UPDATE


type Msg
    = UrlChanged Url
    | LinkClicked Browser.UrlRequest
    | MenuToggled
    | WindowResized Int


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
            handleUrlChange model url

        MenuToggled ->
            ( { model | showMenu = not model.showMenu }
            , Cmd.none
            )

        WindowResized newWidth ->
            ( { model | width = newWidth }
            , Cmd.none
            )


handleUrlChange : Model -> Url -> ( Model, Cmd Msg )
handleUrlChange model url =
    ( { model | post = Post.fromSlug (relativePath url) model.posts, showMenu = False }
    , Cmd.none
    )


subscriptions : Model -> Sub Msg
subscriptions model =
    onResize (\w h -> WindowResized w)



-- VIEW


view : Model -> Document Msg
view model =
    let
        body =
            case model.post of
                Nothing ->
                    homeBody model.posts model

                Just post ->
                    articleBody post model
    in
    { title = "Unanswered"
    , body =
        [ layout [ montserrat ] <| body
        ]
    }


homeBody : Dict String Post.Post -> Model -> Element Msg
homeBody posts model =
    column
        [ width fill, spacing 24 ]
        [ column [ width fill ]
            [ header Home model
            , subheader
            ]
        , content model.width 90 <| homeContent model.width posts
        ]


articleBody : Post.Post -> Model -> Element Msg
articleBody post model =
    column
        [ width fill
        , height fill
        ]
        [ row [ width fill, height fill ]
            [ el [ width fill, alignTop ] <| content model.width 70 <| Post.view (pct model.width 70) post
            , sideBar model.width
            ]
        , el [ width fill, alignBottom ] <| header Article model
        ]


content : Int -> Int -> Element Msg -> Element Msg
content w percent l =
    el
        [ centerX
        , width (pct w percent)
        ]
        l


sideBar : Int -> Element Msg
sideBar w =
    el
        [ width (pct w 5 |> maximum 96)
        , Background.color teal
        , alignRight
        , height fill
        ]
    <|
        text ""


teal =
    rgb255 103 201 207


darkTeal =
    rgb255 64 124 128


header : Page -> Model -> Element Msg
header page model =
    let
        maybeMenu =
            case page of
                Home ->
                    menu model.showMenu

                Article ->
                    Element.none
    in
    row
        [ Background.color teal
        , padding 24
        , width fill
        , Font.color <| rgb255 250 250 250
        ]
        [ heading
        , maybeMenu
        ]


heading =
    link
        [ Region.heading 1
        , Font.size 36
        , sourceSerifPro
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


menu : Bool -> Element Msg
menu showMenu =
    let
        modal =
            if showMenu then
                menuModal

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


menuModal : Element Msg
menuModal =
    el
        [ width shrink
        , height shrink
        , Background.color darkTeal
        , Border.color teal
        , Border.width 1
        , Border.rounded 6
        , paddingXY 30 5
        ]
        menuOptions


menuOptions : Element Msg
menuOptions =
    column
        [ Font.size 24
        , sourceSerifPro
        ]
    <|
        borderBetween
            [ menuOption "what-is-this" "What is this?"
            , menuOption "who-am-i" "Who am I?"
            , menuOption "contact-me" "Contact me"
            ]


menuOption : String -> String -> Element Msg
menuOption slug lbl =
    link
        [ paddingEach { directions0 | top = 24, bottom = 24 }
        ]
        { url = rootUrl ++ slug
        , label = text lbl
        }


subheader =
    paragraph
        [ Region.heading 2
        , Font.size 18
        , width fill
        , paddingXY 24 12
        , Background.color <| rgb255 80 80 80
        , Font.color <| rgb255 255 255 255
        ]
        [ text "Where I type and scream my thoughts into the void, unanswered" ]


homeContent : Int -> Dict String Post.Post -> Element Msg
homeContent w posts =
    column
        [ Border.widthEach { directions0 | left = 1, right = 1 }
        , spacing 36
        , width (fill |> maximum 450)
        , padding (w * 3 // 100)
        , centerX
        ]
    <|
        Dict.values <|
            Dict.map Post.preview <|
                Dict.filter (\_ post -> post.showOnHomePage) posts


pct : Int -> Int -> Length
pct w percent =
    px (percent * w // 100)
