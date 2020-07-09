module Who exposing (content)

import Element exposing (..)


content : List (Element msg)
content =
    List.map
        (\p -> paragraph [] [ text p ])
        paragraphs


paragraphs : List String
paragraphs =
    [ """I am Willy Unterkoefler. Unless otherwise noted, I write the things on here, which explains their high quality. I also designed this website, which explains its... quality. If you want to know more about me, please read everything I post here and psychoanalyze it. To help you get started, the giraffe is really a metaphor for my healthy relationship with my father and the lightning is a stand-in for my three horrible years of speech therapy in elementary school. Despite my years speech therapy, you should know that I still pronounce water as "woodder". The rest of my life and personality can be derived."""
    ]
