module Post exposing (Post, all, fromUrl, preview, view)

import AssocList as Dict exposing (Dict)
import Element exposing (..)
import Element.Font as Font
import Element.Region as Region
import Url as Url exposing (Url)
import Vulture
import WayOut
import What
import Who



-- MODEL


type alias Post =
    { title : String
    , description : String
    , content : List String
    , showOnHomePage : Bool
    }



-- INIT


all : Dict String Post
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
            , content = [ "Please don't" ]
            , showOnHomePage = False
            }
          )
        ]



-- UPDATE


fromUrl : Url -> Dict String Post -> Maybe Post
fromUrl url posts =
    let
        slug =
            String.dropLeft 1 url.path
    in
    Dict.get slug posts



-- VIEW


view : Post -> Element msg
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


viewContent : List String -> Element msg
viewContent content =
    textColumn
        [ paddingEach { directions0 | left = 48 }
        , spacing 18
        ]
    <|
        List.map (\p -> paragraph [] [ text p ]) content


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
