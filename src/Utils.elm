module Utils exposing (borderBetween, directions0, relativePath, rootUrl)

import Element exposing (..)
import Element.Border as Border
import Url exposing (Url)


directions0 =
    { left = 0, right = 0, top = 0, bottom = 0 }


borderBetween : List (Element msg) -> List (Element msg)
borderBetween elements =
    case elements of
        [] ->
            []

        [ element ] ->
            [ element ]

        element :: rest ->
            el [ Border.widthEach { directions0 | bottom = 1 } ]
                element
                :: borderBetween rest



-- kinda hacky but helpful for github pages since
-- everything is prefixed with /unanswered


rootUrl =
    "/unanswered"


relativePath : Url -> String
relativePath url =
    String.dropLeft (1 + String.length rootUrl) url.path
