module Main exposing (main)

import AssocList as Dict exposing (Dict)
import Browser exposing (Document)
import Browser.Navigation as Nav
import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Region as Region
import Url as Url exposing (Url)
import Vulture



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



-- NAVIGATION
-- INIT


init : () -> Url -> Nav.Key -> ( Model, Cmd Msg )
init _ url key =
    ( { posts = samplePosts
      , post = postFromUrl url samplePosts
      , key = key
      }
    , Cmd.none
    )



-- MODEL


type alias Model =
    { posts : Dict String Post
    , post : Maybe Post
    , key : Nav.Key
    }


type alias Post =
    { title : String
    , description : String
    , content : List String
    }


samplePosts =
    Dict.fromList
        [ ( "vultures-envision-a-toaster"
          , { title = "Vultures Envision a Toaster"
            , description = "A story about a giraffe"
            , content = Vulture.content
            }
          )
        , ( "two-ways-out"
          , { title = "Two Ways Out"
            , description = "There was no way out"
            , content = [ "p1", "p3" ]
            }
          )
        ]



-- UPDATE


type Msg
    = UrlChanged Url
    | LinkClicked Browser.UrlRequest


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


handleUrlChange : Model -> Url -> ( Model, Cmd Msg )
handleUrlChange model url =
    ( { model | post = postFromUrl url model.posts }
    , Cmd.none
    )


postFromUrl : Url -> Dict String Post -> Maybe Post
postFromUrl url posts =
    let
        slug =
            String.dropLeft 1 url.path
    in
    Dict.get slug posts


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
                    homeBody model.posts

                Just post ->
                    articleBody post
    in
    { title = "Blog"
    , body =
        [ layout [] <| body
        ]
    }


homeBody : Dict String Post -> Element Msg
homeBody posts =
    column
        [ width fill, spacing 24 ]
        [ column [ width fill ]
            [ header
            , subheader
            ]
        , homeContent posts
        ]


articleBody : Post -> Element Msg
articleBody post =
    column
        [ width fill
        , spacing 24
        , height fill
        ]
        [ articleTitle post.title
        , articleContent post.content
        , el [ width fill, alignBottom ] header
        ]


articleTitle : String -> Element Msg
articleTitle title =
    el
        [ Region.heading 1
        , Font.size 36
        , Font.underline
        , padding 24
        ]
    <|
        text title


articleContent : List String -> Element Msg
articleContent content =
    textColumn
        [ paddingEach { directions0 | left = 24 }
        , spacing 18
        ]
    <|
        List.map (\p -> paragraph [] [ text p ]) content


header =
    row
        [ Background.color <| rgb255 103 201 207
        , padding 24
        , width fill
        , Font.color <| rgb255 250 250 250
        ]
        [ heading
        , menu
        ]


heading =
    link
        [ Region.heading 1
        , Font.size 36
        , Font.family
            [ Font.external
                { name = "Source Serif Pro"
                , url = "https://fonts.googleapis.com/css2?family=Montserrat&family=Source+Serif+Pro&display=swap"
                }
            , Font.serif
            ]
        ]
        { label = text "Unanswered"
        , url = "/"
        }


menu =
    el
        [ Font.size 30
        , alignRight
        ]
    <|
        text "⋮"


subheader =
    el
        [ Region.heading 2
        , Font.size 18
        , width fill
        , paddingXY 24 12
        , Background.color <| rgb255 80 80 80
        , Font.color <| rgb255 255 255 255
        ]
    <|
        text "Not a blog"


directions0 =
    { left = 0, top = 0, right = 0, bottom = 0 }


homeContent : Dict String Post -> Element Msg
homeContent posts =
    column
        [ paddingXY 96 24
        , spacing 48
        , Border.widthEach { directions0 | left = 1, right = 1 }
        , centerX
        ]
    <|
        Dict.values <|
            Dict.map viewPost posts


viewPost : String -> Post -> Element Msg
viewPost slug p =
    column
        [ spacing 12 ]
        [ postTitle p.title slug
        , postDescription p.description
        ]


postTitle : String -> String -> Element Msg
postTitle title slug =
    link
        [ Font.size 24 ]
        { label = text title
        , url = "/" ++ slug
        }


postDescription : String -> Element Msg
postDescription description =
    el
        [ Font.size 14
        , Font.italic
        ]
    <|
        text description
