module Post exposing (Post, all, fromSlug, preview, view)

import AssocList as Dict exposing (Dict)
import Element exposing (..)
import Element.Font as Font
import Element.Region as Region
import Env exposing (rootUrl)
import PostList
import Renderer exposing (renderPost)
import Utils exposing (directions0)



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
    Dict.fromList PostList.all



-- UPDATE


fromSlug : String -> Dict String Post -> Maybe Post
fromSlug slug posts =
    Dict.get slug posts



-- VIEW


view : Length -> Post -> Element msg
view w post =
    column [ centerX, spacingXY 0 24, width w, paddingXY 0 48, alignTop ]
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
        renderPost content w


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
        , url = rootUrl ++ slug
        }


viewDescription : String -> Element msg
viewDescription description =
    el
        [ Font.size 14
        , Font.italic
        ]
    <|
        text description
