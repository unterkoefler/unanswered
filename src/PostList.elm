module PostList exposing (all)

import Colonial
import Contact
import Fedex
import Flicker
import FourStars
import Hell
import Lost
import Raspberry
import Vulture
import WayOut
import What
import Who


all =
    [ ( "flicker"
      , { title = "The Importance of A Well Made Bed"
        , description = "Cleanliness is next to godliness"
        , content = Flicker.content
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
    , ( "four-stars"
      , { title = "4 Stars"
        , description = "A review of reviews"
        , content = FourStars.content
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
    , ( "fedex"
      , { title = "Incorrect Address"
        , description = "A post-modern Odyssey"
        , content = Fedex.content
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
    , ( "colonial-woman"
      , { title = "Getting in Touch with My Inner Colonial Housewife"
        , description = "... or househusband"
        , content = Colonial.content
        , showOnHomePage = True
        }
      )
    , ( "raspberries"
      , { title = "Raspberries"
        , description = "It's about a box of raspberries"
        , content = Raspberry.content
        , showOnHomePage = True
        }
      )
    , ( "lost-and-not-found"
      , { title = "How to get lost and not find yourself"
        , description = "A scientific approach"
        , content = Lost.content
        , showOnHomePage = True
        }
      )
    , ( "flicker"
      , { title = "The Importance of A Well Made Bed"
        , description = "Cleanliness is next to godliness"
        , content = Flicker.content
        , showOnHomePage = True
        }
      )
    , ( "contact-me"
      , { title = "Contact me"
        , description = ""
        , content = Contact.content
        , showOnHomePage = False
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
    ]
