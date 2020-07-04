module Post exposing (Post, all, fromUrl, preview, view)

import AssocList as Dict exposing (Dict)
import Element exposing (..)
import Element.Font as Font
import Element.Region as Region
import FourStars
import Url as Url exposing (Url)
import Vulture
import WayOut
import What
import Who



-- MODEL


type alias Post msg =
    { title : String
    , description : String
    , content : List (Element msg)
    , showOnHomePage : Bool
    }



-- INIT


all : Dict String (Post msg)
all =
    Dict.fromList
        [ ( "vultures-envision-a-toaster"
          , { title = "Vultures Envision a Toaster"
            , description = "A story about a giraffe"
            , content = Vulture.content
            , showOnHomePage = True
            }
          )
        , ( "two-ways-out"
          , { title = "Two Ways Out"
            , description = "There was no way out"
            , content = WayOut.content
            , showOnHomePage = True
            }
          )
        , ( "four-stars"
          , { title = "4 Stars"
            , description = "A review of reviews"
            , content = FourStars.content
            , showOnHomePage = True
            }
          )
        , ( "what-is-this"
          , { title = "What is this?"
            , description = ""
            , content = What.content
            , showOnHomePage = False
            }
          )
        , ( "who-am-i"
          , { title = "Who am I?"
            , description = ""
            , content = Who.content
            , showOnHomePage = False
            }
          )
        , ( "contact-me"
          , { title = "Contact me"
            , description = ""
            , content = [ paragraph [] [ text "Please don't" ] ]
            , showOnHomePage = False
            }
          )
        ]



-- UPDATE


fromUrl : Url -> Dict String (Post msg) -> Maybe (Post msg)
fromUrl url posts =
    let
        slug =
            String.dropLeft 1 url.path
    in
    Dict.get slug posts



-- VIEW


view : Post msg -> Element msg
view post =
    column [ spacing 24, width fill, padding 24, alignTop ]
        [ viewTitle post.title
        , viewContent post.content
        ]


viewTitle : String -> Element msg
viewTitle title =
    el
        [ Region.heading 1
        , Font.size 36
        , Font.underline
        , padding 24
        ]
    <|
        text title


viewContent : List (Element msg) -> Element msg
viewContent content =
    textColumn
        [ paddingEach { directions0 | left = 48 }
        , spacing 18
        ]
    <|
        content


preview : String -> Post msg -> Element msg
preview slug p =
    column
        [ spacing 12 ]
        [ previewTitle p.title slug
        , viewDescription p.description
        ]


previewTitle : String -> String -> Element msg
previewTitle title slug =
    link
        [ Font.size 24 ]
        { label = text title
        , url = "/" ++ slug
        }


viewDescription : String -> Element msg
viewDescription description =
    el
        [ Font.size 14
        , Font.italic
        ]
    <|
        text description


directions0 =
    { left = 0, top = 0, right = 0, bottom = 0 }
