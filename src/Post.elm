module Post exposing (Post, all, fromSlug, preview, view)

import AssocList as Dict exposing (Dict)
import Element exposing (..)
import Element.Font as Font
import Element.Region as Region
import Fedex
import FourStars
import Hell
import MarkdownSample
import Renderer exposing (renderPost)
import Utils exposing (directions0, rootUrl)
import Vulture
import WayOut
import What
import Who



-- MODEL


type alias Post =
    { title : String
    , description : String
    , content : String
    , showOnHomePage : Bool
    }



-- INIT


all : Dict String Post
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
        , ( "hell"
          , { title = "Circle Three and One Half"
            , description = "My personal Dantean hell"
            , content = Hell.content
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
            , content = "Please don't."
            , showOnHomePage = False
            }
          )
        , ( "test"
          , { title = "Test"
            , description = ""
            , content = MarkdownSample.content
            , showOnHomePage = False
            }
          )
        ]



-- UPDATE


fromSlug : String -> Dict String Post -> Maybe Post
fromSlug slug posts =
    Dict.get slug posts



-- VIEW


view : Length -> Post -> Element msg
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


viewContent : Length -> String -> Element msg
viewContent w content =
    textColumn
        [ spacingXY 0 18
        , Font.size 16
        , width w
        ]
    <|
        renderPost content


preview : String -> Post -> Element msg
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
        , url = rootUrl ++ "/" ++ slug
        }


viewDescription : String -> Element msg
viewDescription description =
    el
        [ Font.size 14
        , Font.italic
        ]
    <|
        text description
