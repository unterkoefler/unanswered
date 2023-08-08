module PostList exposing (all)

import Generated.ADangerousHobby
import Generated.Aliens
import Generated.Batman
import Generated.Beantown
import Generated.Bell
import Generated.Bipartisan
import Generated.Chicken
import Generated.Cleveland
import Generated.ClockworkOrange
import Generated.Colonial
import Generated.Contact
import Generated.Crust
import Generated.Europe
import Generated.Fedex
import Generated.Flicker
import Generated.ForArnold
import Generated.FourStars
import Generated.GooseQuestion
import Generated.Hell
import Generated.HelmetSalad
import Generated.Hooked1
import Generated.Hooked2
import Generated.Houseplant
import Generated.Itch
import Generated.Lost
import Generated.Metaphor
import Generated.ModernCommerce
import Generated.Musings
import Generated.Nest
import Generated.Pete
import Generated.Radicalized
import Generated.Rambling1
import Generated.Raspberry
import Generated.Recipe
import Generated.RoomForLet
import Generated.RoommateAgreement
import Generated.SilentPodcast
import Generated.SillyHatCeremony
import Generated.SimpleTrick
import Generated.Squirrel
import Generated.StupidConvo1
import Generated.StupidConvo2
import Generated.Taken4
import Generated.TechSupport
import Generated.TheBoys
import Generated.TheHearse
import Generated.ThinkLikeASquirrel
import Generated.Upsilon
import Generated.Vulture
import Generated.WayOut
import Generated.What
import Generated.Who
import Generated.XcuseMe
import Generated.Zip
import InternalPost exposing (InternalPost)


all : List ( String, InternalPost )
all =
    [ ( "hell"
      , { title = "Circle Three and One Half"
        , description = "My personal Dantean hell"
        , content = Generated.Hell.content
        , showOnHomePage = True
        , date = Just { year = 2016, month = 9, day = 28 }
        }
      )
    , ( "four-stars"
      , { title = "4 Stars"
        , description = "A review of reviews"
        , content = Generated.FourStars.content
        , showOnHomePage = True
        , date = Just { year = 2019, month = 11, day = 14 }
        }
      )
    , ( "vultures-envision-a-toaster"
      , { title = "Vultures Envision a Toaster"
        , description = "A story about a giraffe"
        , content = Generated.Vulture.content
        , showOnHomePage = True
        , date = Just { year = 2020, month = 2, day = 4 }
        }
      )
    , ( "fedex"
      , { title = "Incorrect Address"
        , description = "A post-modern Odyssey"
        , content = Generated.Fedex.content
        , showOnHomePage = True
        , date = Just { year = 2020, month = 3, day = 6 }
        }
      )
    , ( "two-ways-out"
      , { title = "Two Ways Out"
        , description = "There was no way out"
        , content = Generated.WayOut.content
        , showOnHomePage = True
        , date = Just { year = 2020, month = 7, day = 14 }
        }
      )
    , ( "colonial-woman"
      , { title = "Getting in Touch with My Inner Colonial Housewife"
        , description = "... or househusband"
        , content = Generated.Colonial.content
        , showOnHomePage = True
        , date = Just { year = 2020, month = 7, day = 24 }
        }
      )
    , ( "raspberries"
      , { title = "Raspberries"
        , description = "It's about a box of raspberries"
        , content = Generated.Raspberry.content
        , showOnHomePage = True
        , date = Just { year = 2020, month = 7, day = 27 }
        }
      )
    , ( "lost-and-not-found"
      , { title = "How to get lost and not find yourself"
        , description = "A scientific approach"
        , content = Generated.Lost.content
        , showOnHomePage = True
        , date = Just { year = 2020, month = 8, day = 7 }
        }
      )
    , ( "flicker"
      , { title = "The Importance of A Well Made Bed"
        , description = "Cleanliness is next to godliness"
        , content = Generated.Flicker.content
        , showOnHomePage = True
        , date = Just { year = 2020, month = 8, day = 13 }
        }
      )
    , ( "metaphor"
      , { title = "There's Other Metaphors in the Sea"
        , description = "A love story"
        , content = Generated.Metaphor.content
        , showOnHomePage = True
        , date = Just { year = 2020, month = 8, day = 19 }
        }
      )
    , ( "bells"
      , { title = "For Who Tolls the Bell"
        , description = "A parable of sorts"
        , content = Generated.Bell.content
        , showOnHomePage = True
        , date = Just { year = 2020, month = 8, day = 27 }
        }
      )
    , ( "zip"
      , { title = "Zip"
        , description = "A scary story to read with your brightness all the way down"
        , content = Generated.Zip.content
        , showOnHomePage = True
        , date = Just { year = 2020, month = 10, day = 16 }
        }
      )
    , ( "recipe"
      , { title = "A Family Recipe"
        , description = "Yum"
        , content = Generated.Recipe.content
        , showOnHomePage = True
        , date = Just { year = 2020, month = 10, day = 26 }
        }
      )
    , ( "squirrel"
      , { title = "A Critique of the American Healthcare System"
        , description = "From the perspective of a squirrel"
        , content = Generated.Squirrel.content
        , showOnHomePage = True
        , date = Just { year = 2020, month = 11, day = 10 }
        }
      )
    , ( "arnold"
      , { title = "For Arnold"
        , description = "This one is for Arnold"
        , content = Generated.ForArnold.content
        , showOnHomePage = True
        , date = Just { year = 2020, month = 12, day = 26 }
        }
      )
    , ( "orange"
      , { title = "A Clockwork Orange (Revised and Re-imagined for Younger Audiences)"
        , description = "All rights reserved"
        , content = Generated.ClockworkOrange.content
        , showOnHomePage = True
        , date = Just { year = 2021, month = 1, day = 2 }
        }
      )
    , ( "cleveland"
      , { title = "New Cleveland Mascot More Geographically Accurate, Racist"
        , description = ""
        , content = Generated.Cleveland.content
        , showOnHomePage = True
        , date = Just { year = 2021, month = 1, day = 30 }
        }
      )
    , ( "simple-trick"
      , { title = "Realtors Hate Him! This One Simple Trick Will Make You Think You've Moved, But You Haven't!"
        , description = "You won't believe it!"
        , content = Generated.SimpleTrick.content
        , showOnHomePage = True
        , date = Just { year = 2021, month = 1, day = 31 }
        }
      )
    , ( "crust"
      , { title = "The Importance of Crust"
        , description = "Another love story"
        , content = Generated.Crust.content
        , showOnHomePage = True
        , date = Just { year = 2021, month = 2, day = 7 }
        }
      )
    , ( "helmet-salad"
      , { title = "Eco-Warrior Cyclist Eschews Single-Use Salad Bowls"
        , description = "\"Uh yeah can you just put it in my helmet\""
        , content = Generated.HelmetSalad.content
        , showOnHomePage = True
        , date = Just { year = 2021, month = 4, day = 28 }
        }
      )
    , ( "rambling-1"
      , { title = "Rambling Reflections Part 1"
        , description = "Or why I haven't liked your Instagram photo"
        , content = Generated.Rambling1.content
        , showOnHomePage = True
        , date = Just { year = 2021, month = 5, day = 5 }
        }
      )
    , ( "silly-hat-ceremony"
      , { title = "The Silly Hat Ceremony"
        , description = "Look, Mom! They gave me a hat!"
        , content = Generated.SillyHatCeremony.content
        , showOnHomePage = True
        , date = Just { year = 2021, month = 5, day = 27 }
        }
      )
    , ( "room-for-let"
      , { title = "Room for Let"
        , description = "I'm subletting a room in my apartment"
        , content = Generated.RoomForLet.content
        , showOnHomePage = True
        , date = Just { year = 2021, month = 6, day = 23 }
        }
      )
    , ( "modern-commerce"
      , { title = "Modern Commerce"
        , description = "Adventures in Refurnishing"
        , content = Generated.ModernCommerce.content
        , showOnHomePage = True
        , date = Just { year = 2021, month = 8, day = 22 }
        }
      )
    , ( "facebook-radicalized-me"
      , { title = "I Was Radicalized by Facebook and I Liked It"
        , description = "How Zucc sucked me in"
        , content = Generated.Radicalized.content
        , showOnHomePage = True
        , date = Just { year = 2021, month = 11, day = 4 }
        }
      )
    , ( "kkkfc-chicken"
      , { title = "Vegans Endorse The Colonel's New KKKFC Sandwich"
        , description = "\"It's okay to eat racist chickens\""
        , content = Generated.Chicken.content
        , showOnHomePage = True
        , date = Just { year = 2021, month = 12, day = 1 }
        }
      )
    , ( "think-like-a-squirrel"
      , { title = "Think Like a Squirrel"
        , description = "Wisdom from our tree-dwelling rodent friends"
        , content = Generated.ThinkLikeASquirrel.content
        , showOnHomePage = True
        , date = Just { year = 2021, month = 12, day = 30 }
        }
      )
    , ( "a-dangerous-hobby"
      , { title = "A Dangerous Hobby"
        , description = "Or, Ten First Date Doompadee Do's and Doompadee Don't's"
        , content = Generated.ADangerousHobby.content
        , showOnHomePage = True
        , date = Just { year = 2022, month = 1, day = 13 }
        }
      )
    , ( "stupid-convos-1"
      , { title = "Stupid Conversations Part 1"
        , description = "I struggle to receive a food delivery"
        , content = Generated.StupidConvo1.content
        , showOnHomePage = True
        , date = Just { year = 2022, month = 1, day = 22 }
        }
      )
    , ( "stupid-convos-2"
      , { title = "Stupid Conversations Part 2"
        , description = "I struggle to buy avocados"
        , content = Generated.StupidConvo2.content
        , showOnHomePage = True
        , date = Just { year = 2022, month = 1, day = 28 }
        }
      )
    , ( "hope-and-upsilon"
      , { title = "Long Forgotten Feeling of Optimism and Upsilon Variant Begin to Emerge"
        , description = ""
        , content = Generated.Upsilon.content
        , showOnHomePage = True
        , date = Just { year = 2022, month = 2, day = 10 }
        }
      )
    , ( "bipartisan"
      , { title = "Bipartisan Legislation Criminalizes Abortion, But Exempts EV Drivers"
        , description = "Compromise at last"
        , content = Generated.Bipartisan.content
        , showOnHomePage = True
        , date = Just { year = 2022, month = 3, day = 2 }
        }
      )
    , ( "roommate-agreement"
      , { title = "Roommate Agreement"
        , description = "Attn.: My Roommates"
        , content = Generated.RoommateAgreement.content
        , showOnHomePage = True
        , date = Just { year = 2022, month = 3, day = 18 }
        }
      )
    , ( "tech-support"
      , { title = "On Technology"
        , description = "blah, blah, blah internet bad, or at least, not so good"
        , content = Generated.TechSupport.content
        , showOnHomePage = True
        , date = Just { year = 2022, month = 3, day = 24 }
        }
      )
    , ( "the-hearse"
      , { title = "The Hearse"
        , description = "A story about love, loss and redemption"
        , content = Generated.TheHearse.content
        , showOnHomePage = True
        , date = Just { year = 2022, month = 4, day = 2 }
        }
      )
    , ( "silent-podcast"
      , { title = "Stop Reading This: A Silent Meditation Podcast"
        , description = "A meditation journey for good sleep"
        , content = Generated.SilentPodcast.content
        , showOnHomePage = True
        , date = Just { year = 2022, month = 5, day = 8 }
        }
      )
    , ( "goose-question"
      , { title = "1 question science still can't answer"
        , description = "Unanswered.blog begins its quest for the Truth"
        , content = Generated.GooseQuestion.content
        , showOnHomePage = True
        , date = Just { year = 2022, month = 5, day = 20 }
        }
      )
    , ( "europe"
      , { title = "My Trip to Europe: The Insignificant Details"
        , description = "The parts you didn't think you didn't want to hear about"
        , content = Generated.Europe.content
        , showOnHomePage = True
        , date = Just { year = 2022, month = 6, day = 20 }
        }
      )
    , ( "the-boys-and-amazon"
      , { title = "How \"The Boys\" Captures and then Completely Misses the Danger of Amazon"
        , description = "An amateur analysis"
        , content = Generated.TheBoys.content
        , showOnHomePage = True
        , date = Just { year = 2022, month = 6, day = 20 }
        }
      )
    , ( "beantown"
      , { title = "Building a Better Boston: A 3-Step Plan for Urban Superiority"
        , description = "A political proposal for the prosperity of posterity"
        , content = Generated.Beantown.content
        , showOnHomePage = True
        , date = Just { year = 2022, month = 7, day = 12 }
        }
      )
    , ( "xcuseme"
      , { title = "Notes on Building \"XcuseMe: Exercise tracking for real people\""
        , description = "What I learned from making and re-making an app"
        , content = Generated.XcuseMe.content
        , showOnHomePage = True
        , date = Just { year = 2022, month = 8, day = 14 }
        }
      )
    , ( "houseplant"
      , { title = "My houseplant isn’t dying; it’s right-sizing to better facilitate flexibility in anticipation of future macroeconomic trends"
        , description = "A letter to my shareholders"
        , content = Generated.Houseplant.content
        , showOnHomePage = True
        , date = Just { year = 2022, month = 11, day = 12 }
        }
      )
    , ( "pete"
      , { title = "Pete"
        , description = "A fungal fable"
        , content = Generated.Pete.content
        , showOnHomePage = True
        , date = Just { year = 2022, month = 12, day = 5 }
        }
      )
    , ( "hooked-mystery"
      , { title = "Hooked: A Five Paragraph Essay Outline Murder Mystery"
        , description = "A murder mystery in the form of a five paragraph essay"
        , content = Generated.Hooked1.content
        , showOnHomePage = True
        , date = Just { year = 2023, month = 1, day = 11 }
        }
      )
    , ( "taken4"
      , { title = "\"Taken 4: Your Turn\" opens to empty theaters"
        , description = "The thrilling new installment is out now! You can't watch it!"
        , content = Generated.Taken4.content
        , showOnHomePage = True
        , date = Just { year = 2023, month = 1, day = 29 }
        }
      )
    , ( "hooked-solution"
      , { title = "Hooked: A Narrative Explanation of the Murder Mystery"
        , description = "The good detective's explanation of the evening's events"
        , content = Generated.Hooked2.content
        , showOnHomePage = True
        , date = Just { year = 2023, month = 1, day = 31 }
        }
      )
    , ( "nest"
      , { title = "thank u, nest"
        , description = "technology bad part 2"
        , content = Generated.Nest.content
        , showOnHomePage = True
        , date = Just { year = 2023, month = 2, day = 8 }
        }
      )
    , ( "batman"
      , { title = "Batman’s NJ Transit Problem"
        , description = "Double Deckered Dilemmas"
        , content = Generated.Batman.content
        , showOnHomePage = True
        , date = Just { year = 2023, month = 4, day = 18 }
        }
      )
    , ( "aristotle"
      , { title = "On Aristotle"
        , description = "Philosophical Musings"
        , content = Generated.Musings.content
        , showOnHomePage = True
        , date = Just { year = 2023, month = 4, day = 30 }
        }
      )
    , ( "itch"
      , { title = "An Alternative to Benadryl"
        , description = "A horror story"
        , content = Generated.Itch.content
        , showOnHomePage = True
        , date = Just { year = 2023, month = 5, day = 18 }
        }
      )
    , ( "aliens"
      , { title = "WeComeInPeace"
        , description = "A short story about aliens and software engineering"
        , content = Generated.Aliens.content
        , showOnHomePage = True
        , date = Just { year = 2023, month = 8, day = 7 }
        }
      )
    , ( "contact-me"
      , { title = "Contact me"
        , description = ""
        , content = Generated.Contact.content
        , showOnHomePage = False
        , date = Nothing
        }
      )
    , ( "what-is-this"
      , { title = "What is this?"
        , description = ""
        , content = Generated.What.content
        , showOnHomePage = False
        , date = Nothing
        }
      )
    , ( "who-am-i"
      , { title = "Who am I?"
        , description = ""
        , content = Generated.Who.content
        , showOnHomePage = False
        , date = Nothing
        }
      )
    ]
