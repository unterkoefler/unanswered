module PostList exposing (all)

import Generated.Bell
import Generated.Colonial
import Generated.Contact
import Generated.Fedex
import Generated.Flicker
import Generated.FourStars
import Generated.Hell
import Generated.Lost
import Generated.Metaphor
import Generated.Raspberry
import Generated.Recipe
import Generated.Vulture
import Generated.WayOut
import Generated.What
import Generated.Who
import Generated.Zip


all =
    [ ( "hell"
      , { title = "Circle Three and One Half"
        , description = "My personal Dantean hell"
        , content = Generated.Hell.content
        , showOnHomePage = True
        }
      )
    , ( "four-stars"
      , { title = "4 Stars"
        , description = "A review of reviews"
        , content = Generated.FourStars.content
        , showOnHomePage = True
        }
      )
    , ( "vultures-envision-a-toaster"
      , { title = "Vultures Envision a Toaster"
        , description = "A story about a giraffe"
        , content = Generated.Vulture.content
        , showOnHomePage = True
        }
      )
    , ( "fedex"
      , { title = "Incorrect Address"
        , description = "A post-modern Odyssey"
        , content = Generated.Fedex.content
        , showOnHomePage = True
        }
      )
    , ( "two-ways-out"
      , { title = "Two Ways Out"
        , description = "There was no way out"
        , content = Generated.WayOut.content
        , showOnHomePage = True
        }
      )
    , ( "colonial-woman"
      , { title = "Getting in Touch with My Inner Colonial Housewife"
        , description = "... or househusband"
        , content = Generated.Colonial.content
        , showOnHomePage = True
        }
      )
    , ( "raspberries"
      , { title = "Raspberries"
        , description = "It's about a box of raspberries"
        , content = Generated.Raspberry.content
        , showOnHomePage = True
        }
      )
    , ( "lost-and-not-found"
      , { title = "How to get lost and not find yourself"
        , description = "A scientific approach"
        , content = Generated.Lost.content
        , showOnHomePage = True
        }
      )
    , ( "flicker"
      , { title = "The Importance of A Well Made Bed"
        , description = "Cleanliness is next to godliness"
        , content = Generated.Flicker.content
        , showOnHomePage = True
        }
      )
    , ( "metaphor"
      , { title = "There's Other Metaphors in the Sea"
        , description = "A love story"
        , content = Generated.Metaphor.content
        , showOnHomePage = True
        }
      )
    , ( "bells"
      , { title = "For Who Tolls the Bell"
        , description = "A parable of sorts"
        , content = Generated.Bell.content
        , showOnHomePage = True
        }
      )
    , ( "zip"
      , { title = "Zip"
        , description = "A scary story to read with your brightness all the way down"
        , content = Generated.Zip.content
        , showOnHomePage = True
        }
      )
    , ( "recipe"
      , { title = "A Family Recipe"
        , description = "Yum"
        , content = Generated.Recipe.content
        , showOnHomePage = True
        }
      )
    , ( "contact-me"
      , { title = "Contact me"
        , description = ""
        , content = Generated.Contact.content
        , showOnHomePage = False
        }
      )
    , ( "what-is-this"
      , { title = "What is this?"
        , description = ""
        , content = Generated.What.content
        , showOnHomePage = False
        }
      )
    , ( "who-am-i"
      , { title = "Who am I?"
        , description = ""
        , content = Generated.Who.content
        , showOnHomePage = False
        }
      )
    ]
