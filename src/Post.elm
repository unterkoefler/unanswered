module Post exposing (Post, all, fromUrl, preview, view)

import AssocList as Dict exposing (Dict)
import Element exposing (..)
import Element.Font as Font
import Element.Region as Region
import Fedex
import FourStars
import Url as Url exposing (Url)
import Utils exposing (directions0)
import Vulture
import WayOut
import What
import Who



-- MODEL


type alias Post msg =
    { title : String
    , description : String
    , content : Length -> List (Element msg)
    , showOnHomePage : Bool
    }



-- INIT


all : Dict String (Post msg)
all =
    Dict.fromList
        [ ( "fedex"
          , { title = "Incorrect Address"
            , description = "A post-modern Odyssey"
            , content = Fedex.content
            , showOnHomePage = True
            }
          )
        , ( "vultures-envision-a-toaster"
          , { title = "Vultures Envision a Toaster"
            , description = "A story about a giraffe"
            , content = \_ -> Vulture.content
            , showOnHomePage = True
            }
          )
        , ( "two-ways-out"
          , { title = "Two Ways Out"
            , description = "There was no way out"
            , content = \_ -> WayOut.content
            , showOnHomePage = True
            }
          )
        , ( "four-stars"
          , { title = "4 Stars"
            , description = "A review of reviews"
            , content = \_ -> FourStars.content
            , showOnHomePage = True
            }
          )
        , ( "what-is-this"
          , { title = "What is this?"
            , description = ""
            , content = \_ -> What.content
            , showOnHomePage = False
            }
          )
        , ( "who-am-i"
          , { title = "Who am I?"
            , description = ""
            , content = \_ -> Who.content
            , showOnHomePage = False
            }
          )
        , ( "contact-me"
          , { title = "Contact me"
            , description = ""
            , content = \_ -> [ paragraph [] [ text "Please don't" ] ]
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


view : Length -> Post msg -> Element msg
view w post =
    column [ spacingXY 0 24, width w, paddingXY 0 48, alignTop ]
        [ viewTitle post.title
        , viewContent w post.content
        ]


viewTitle : String -> Element msg
viewTitle title =
    paragraph
        [ Region.heading 1
        , Font.size 36
        , Font.underline
        , paddingXY 0 24
        ]
        [ text title ]


viewContent : Length -> (Length -> List (Element msg)) -> Element msg
viewContent w content =
    textColumn
        [ spacingXY 0 18
        , Font.size 16
        , width w
        ]
    <|
        content w


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
        [ Font.size 18 ]
        { label = paragraph [] [ text title ]
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
