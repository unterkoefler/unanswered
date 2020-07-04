module Main exposing (main)

import AssocList as Dict exposing (Dict)
import Browser exposing (Document)
import Browser.Navigation as Nav
import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Element.Region as Region
import Post
import Url as Url exposing (Url)
import Utils exposing (borderBetween, directions0)



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


init : () -> Url -> Nav.Key -> ( Model, Cmd Msg )
init _ url key =
    ( { posts = Post.all
      , post = Post.fromUrl url Post.all
      , key = key
      , showMenu = False
      }
    , Cmd.none
    )



-- MODEL


type alias Model =
    { posts : Dict String (Post.Post Msg)
    , post : Maybe (Post.Post Msg)
    , key : Nav.Key
    , showMenu : Bool
    }


type Page
    = Home
    | Article



-- UPDATE


type Msg
    = UrlChanged Url
    | LinkClicked Browser.UrlRequest
    | MenuToggled


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


handleUrlChange : Model -> Url -> ( Model, Cmd Msg )
handleUrlChange model url =
    ( { model | post = Post.fromUrl url model.posts, showMenu = False }
    , Cmd.none
    )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



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
        [ layout [] <| body
        ]
    }


homeBody : Dict String (Post.Post Msg) -> Model -> Element Msg
homeBody posts model =
    column
        [ width fill, spacing 24 ]
        [ column [ width fill ]
            [ header Home model
            , subheader
            ]
        , homeContent posts
        ]


articleBody : Post.Post Msg -> Model -> Element Msg
articleBody post model =
    column
        [ width fill
        , height fill
        ]
        [ row [ width fill, height fill ]
            [ Post.view post
            , sideBar
            ]
        , el [ width fill, alignBottom ] <| header Article model
        ]


sideBar =
    el
        [ width (px 96)
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
        , url = "/"
        }


sourceSerifPro =
    Font.family
        [ Font.external
            { name = "Source Serif Pro"
            , url = "https://fonts.googleapis.com/css2?family=Montserrat&family=Source+Serif+Pro&display=swap"
            }
        , Font.serif
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
        { url = "/" ++ slug
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


homeContent : Dict String (Post.Post Msg) -> Element Msg
homeContent posts =
    column
        [ paddingXY 96 24
        , spacing 48
        , Border.widthEach { directions0 | left = 1, right = 1 }
        , centerX
        ]
    <|
        Dict.values <|
            Dict.map Post.preview <|
                Dict.filter (\_ post -> post.showOnHomePage) posts
