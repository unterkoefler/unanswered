module Renderer exposing (renderPost)

import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Region as Region
import Env exposing (rootUrl)
import Markdown.Block as Block exposing (HeadingLevel(..), ListItem(..))
import Markdown.Html
import Markdown.Parser exposing (deadEndToString)
import Markdown.Renderer exposing (..)
import Utils exposing (directions0)


renderPost : String -> Length -> List (Element msg)
renderPost md imageWidth =
    md
        |> Markdown.Parser.parse
        |> Result.mapError (\deadEnds -> deadEnds |> List.map deadEndToString |> String.join "\n")
        |> Result.andThen (\ast -> render (renderer imageWidth) ast)
        |> Result.withDefault [ text "parse failed" ]


renderer : Length -> Renderer (Element msg)
renderer imageWidth =
    { heading = renderHeading
    , paragraph = renderParagraph
    , blockQuote = \els -> row [ width fill ] els
    , html = Markdown.Html.oneOf []
    , text = \t -> text t
    , codeSpan = renderCodeSpan
    , strong = renderStrong
    , emphasis = renderEmphasis
    , hardLineBreak = Element.none
    , link = renderLink
    , image = \args -> renderImage args imageWidth
    , unorderedList = renderUnorderedList
    , orderedList = renderOrderedList
    , codeBlock = renderCodeBlock
    , thematicBreak = hr
    , table = \_ -> Element.none
    , tableHeader = \_ -> Element.none
    , tableBody = \_ -> Element.none
    , tableRow = \_ -> Element.none
    , tableCell = \_ -> Element.none
    , tableHeaderCell = \_ _ -> Element.none
    }


hr : Element msg
hr =
    el
        [ width fill
        , height (px 2)
        , Border.widthEach { directions0 | top = 1 }
        ]
        Element.none


renderHeading : { level : Block.HeadingLevel, rawText : String, children : List (Element msg) } -> Element msg
renderHeading { level, rawText, children } =
    let
        ( levelNumber, fontSize ) =
            case level of
                H1 ->
                    ( 1, 36 )

                H2 ->
                    ( 2, 24 )

                H3 ->
                    ( 3, 18 )

                H4 ->
                    ( 4, 16 )

                H5 ->
                    ( 5, 14 )

                H6 ->
                    ( 6, 12 )
    in
    case level of
        H6 ->
            row [ width fill ] children

        -- HACK to center images
        _ ->
            paragraph [ Region.heading levelNumber, Font.size fontSize ]
                children


renderParagraph : List (Element msg) -> Element msg
renderParagraph =
    paragraph [ spacing 12 ]


renderCodeSpan : String -> Element msg
renderCodeSpan s =
    el
        [ Font.family [ Font.monospace ]
        , Background.color <| rgb255 150 150 150
        ]
    <|
        text s


renderStrong : List (Element msg) -> Element msg
renderStrong =
    row
        [ Font.bold ]


renderEmphasis : List (Element msg) -> Element msg
renderEmphasis =
    row
        [ Font.italic ]


renderUnorderedList : List (ListItem (Element msg)) -> Element msg
renderUnorderedList items =
    column
        [ spacing 18 ]
    <|
        List.map (\(ListItem _ els) -> renderListItem "-" els) items


renderOrderedList : Int -> List (List (Element msg)) -> Element msg
renderOrderedList _ items =
    column
        [ spacing 18 ]
    <|
        List.indexedMap
            (\i -> renderListItem (String.fromInt (i + 1) ++ "."))
            items


renderListItem : String -> List (Element msg) -> Element msg
renderListItem marker els =
    row [ spacing 12 ]
        [ el [ alignTop, Font.bold ] <| text marker
        , paragraph [] els
        ]


renderLink :
    { title : Maybe String
    , destination : String
    }
    -> List (Element msg)
    -> Element msg
renderLink { title, destination } content =
    let
        label =
            case content of
                [ lbl ] ->
                    lbl

                _ ->
                    row [] content
    in
    link
        [ Font.color <| rgb255 0 0 240 ]
        { url = destination
        , label = label
        }


renderImage :
    { alt : String
    , src : String
    , title : Maybe String
    }
    -> Length
    -> Element msg
renderImage { alt, src, title } imageWidth =
    image [ width imageWidth, centerX, paddingXY 0 20 ]
        { description = alt
        , src = rootUrl ++ src
        }


renderCodeBlock : { body : String, language : Maybe String } -> Element msg
renderCodeBlock { body } =
    let
        paragraphs =
            body
                |> String.split "\n"
                |> List.map
                    (\t -> paragraph [] [ text t ])
    in
    column
        [ Font.family [ Font.monospace ] ]
        paragraphs
