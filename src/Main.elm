module Main exposing (main)

import Browser exposing (Document)
import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Region as Region



-- MAIN


main =
    Browser.document
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


init : () -> ( Model, Cmd Msg )
init _ =
    ( { posts = samplePosts }, Cmd.none )



-- MODEL


type alias Model =
    { posts : List Post
    }


type alias Post =
    { title : String
    , description : String
    }


samplePosts =
    [ { title = "Vultures Envision a Toaster"
      , description = "A story about a giraffe"
      }
    , { title = "Two Ways Out"
      , description = "There was no way out"
      }
    ]



-- UPDATE


type Msg
    = None


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- VIEW


view : Model -> Document Msg
view model =
    { title = "Blog"
    , body =
        [ layout [] <|
            column
                [ width fill, spacing 24 ]
                [ column [ width fill ]
                    [ header
                    , subheader
                    ]
                , body model.posts
                ]
        ]
    }


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
    el
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
    <|
        text "Unanswered"


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


body : List Post -> Element Msg
body posts =
    column
        [ paddingXY 96 24
        , spacing 48
        , Border.widthEach { directions0 | left = 1, right = 1 }
        , centerX
        ]
    <|
        List.map post posts


post : Post -> Element Msg
post p =
    column
        [ spacing 12 ]
        [ postTitle p.title
        , postDescription p.description
        ]


postTitle : String -> Element Msg
postTitle title =
    el
        [ Font.size 24 ]
    <|
        text title


postDescription : String -> Element Msg
postDescription description =
    el
        [ Font.size 14
        , Font.italic
        ]
    <|
        text description
