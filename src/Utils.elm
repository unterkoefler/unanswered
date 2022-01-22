module Utils exposing (borderBetween, directions0, relativePath)

import Element exposing (..)
import Element.Border as Border
import Env exposing (rootUrl)
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
            el [ Border.widthEach { directions0 | bottom = 1 }, width fill ]
                element
                :: borderBetween rest


relativePath : Url -> String
relativePath url =
    String.dropLeft (String.length rootUrl) url.path
