module Post exposing
    ( Post
    , SearchOptions
    , all
    , fromSlug
    , matchesSearch
    , preview
    , view
    )

import AssocList as Dict exposing (Dict)
import Date exposing (Date)
import Element exposing (..)
import Element.Font as Font
import Element.Region as Region
import Env exposing (rootUrl)
import InternalPost exposing (InternalPost)
import PostList
import Renderer exposing (renderPost)
import Utils exposing (directions0)



-- MODEL


type alias Post =
    { title : String
    , description : String
    , content : String
    , showOnHomePage : Bool
    , date : Maybe Date
    }


type alias SearchOptions =
    { searchFullText : Bool }


matchesSearch : String -> Post -> SearchOptions -> Bool
matchesSearch searchTerm post { searchFullText } =
    let
        needle =
            searchTerm |> String.trim |> String.toLower

        haystack =
            (if searchFullText then
                post.title ++ " " ++ post.description ++ post.content

             else
                post.title ++ " " ++ post.description
            )
                |> String.trim
                |> String.toLower
    in
    case searchTerm of
        "" ->
            True

        _ ->
            String.contains needle haystack



-- INIT


all : Dict String Post
all =
    PostList.all
        |> List.map internalPostToPost
        |> Dict.fromList


internalPostToPost : ( String, InternalPost ) -> ( String, Post )
internalPostToPost ( slug, { title, description, content, showOnHomePage, date } ) =
    let
        newDate : Maybe Date
        newDate =
            Maybe.map
                (\d -> Date.fromCalendarDate d.year (Date.numberToMonth d.month) d.day)
                date
    in
    ( slug
    , { title = title
      , description = description
      , content = content
      , showOnHomePage = showOnHomePage
      , date = newDate
      }
    )



-- UPDATE


fromSlug : String -> Dict String Post -> Maybe Post
fromSlug slug posts =
    Dict.get slug posts



-- VIEW


view : Length -> Post -> Element msg
view w post =
    column [ centerX, spacingXY 0 24, width w, paddingXY 0 48, alignTop ]
        [ viewTitle post.title
        , viewDate post.date
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


viewDate : Maybe Date -> Element msg
viewDate date =
    case date of
        Nothing ->
            Element.none

        Just d ->
            paragraph
                [ Font.italic
                , Font.size 14
                ]
                [ text <| Date.format "EEEE, MMMM d, yyyy" d ]


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
    paragraph
        [ Font.size 14
        , Font.italic
        ]
    <|
        [ text description ]
