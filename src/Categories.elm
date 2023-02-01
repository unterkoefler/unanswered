module Categories exposing (fromSlug, view, viewCategory)

import Colors
import Element exposing (..)
import Element.Font as Font
import Element.Region as Region
import Post


type alias Category =
    { name : String
    , slug : Slug
    , members : CategoryMembers
    }


type CategoryMembers
    = Slugs { slugs : List Slug }
    | SubCategories { subCategories : List Category }


type alias Slug =
    String


fromSlug : Slug -> Maybe Category
fromSlug slug =
    let
        { result } =
            find categories slug
    in
    result


find : List Category -> Slug -> { result : Maybe Category, path : List Slug }
find cats slug =
    case cats of
        [] ->
            { result = Nothing, path = [] }

        first :: rest ->
            if first.slug == slug then
                { result = Just first, path = [ slug ] }

            else
                case first.members of
                    Slugs _ ->
                        find rest slug

                    SubCategories { subCategories } ->
                        let
                            { result, path } =
                                find subCategories slug
                        in
                        case result of
                            Nothing ->
                                find rest slug

                            Just cat ->
                                { result = Just cat, path = first.slug :: path }


breadcrumbs : Category -> List Slug
breadcrumbs category =
    let
        { path } =
            find categories category.slug
    in
    path


categories : List Category
categories =
    [ { name = "Fiction"
      , slug = "fiction"
      , members =
            SubCategories
                { subCategories =
                    [ { name = "Fables"
                      , slug = "fables"
                      , members =
                            Slugs
                                { slugs =
                                    [ "pete"
                                    , "orange"
                                    , "squirrel"
                                    , "vultures-envision-a-toaster"
                                    ]
                                }
                      }
                    , { name = "Horror"
                      , slug = "horror"
                      , members =
                            Slugs
                                { slugs =
                                    [ "zip"
                                    , "two-ways-out"
                                    , "flicker"
                                    ]
                                }
                      }
                    , { name = "Romance"
                      , slug = "romance"
                      , members =
                            Slugs
                                { slugs =
                                    [ "the-hearse"
                                    , "crust"
                                    , "metaphor"
                                    , "arnold"
                                    ]
                                }
                      }
                    , { name = "Miscellaneous Fiction"
                      , slug = "misc-fiction"
                      , members =
                            Slugs
                                { slugs =
                                    [ "a-dangerous-hobby"
                                    , "bells"
                                    , "hell"
                                    , "hooked-mystery"
                                    , "hooked-solution"
                                    ]
                                }
                      }
                    ]
                }
      }
    , { name = "News"
      , slug = "news"
      , members =
            Slugs
                { slugs =
                    [ "bipartisan"
                    , "hope-and-upsilon"
                    , "kkkfc-chicken"
                    , "helmet-salad"
                    , "cleveland"
                    , "taken4"
                    ]
                }
      }
    , { name = "Life Updates"
      , slug = "life"
      , members =
            Slugs
                { slugs =
                    [ "xcuseme"
                    , "europe"
                    , "stupid-convos-1"
                    , "stupid-convos-2"
                    , "facebook-radicalized-me"
                    , "modern-commerce"
                    , "silly-hat-ceremony"
                    , "rambling-1"
                    , "raspberries"
                    , "colonial-woman"
                    , "fedex"
                    ]
                }
      }
    , { name = "Opinion"
      , slug = "opinion"
      , members =
            Slugs
                { slugs =
                    [ "lost-and-not-found"
                    , "think-like-a-squirrel"
                    , "houseplant"
                    , "beantown"
                    , "the-boys-and-amazon"
                    , "tech-support"
                    , "four-stars"
                    ]
                }
      }
    , { name = "Clickbait"
      , slug = "clickbait"
      , members =
            Slugs
                { slugs =
                    [ "goose-question"
                    , "simple-trick"
                    ]
                }
      }
    , { name = "Recipes"
      , slug = "recipes"
      , members =
            Slugs
                { slugs =
                    [ "recipe"
                    ]
                }
      }
    , { name = "Ads"
      , slug = "ads"
      , members =
            Slugs
                { slugs =
                    [ "room-for-let"
                    ]
                }
      }
    , { name = "Podcasts"
      , slug = "podcasts"
      , members =
            Slugs
                { slugs =
                    [ "silent-podcast"
                    ]
                }
      }
    , { name = "Legal Documents (Private)"
      , slug = "legal"
      , members =
            Slugs
                { slugs =
                    [ "roommate-agreement"
                    ]
                }
      }
    ]


view : Element msg
view =
    column
        [ spacing 24
        ]
        [ heading
        , viewCategories
        ]


heading : Element msg
heading =
    paragraph
        []
        [ text "Browse posts by category"
        ]


viewCategories : Element msg
viewCategories =
    column
        [ spacing 12
        ]
        (List.map
            (\cat -> viewCategoryHelp cat 0 False)
            categories
        )


viewCategory : Category -> Element msg
viewCategory category =
    column
        [ spacing 24 ]
        [ viewBreadcrumbs category
        , viewCategoryHelp category 0 True
        ]


viewBreadcrumbs : Category -> Element msg
viewBreadcrumbs category =
    paragraph
        []
        (viewBreadcrumb "all" "/categories"
            :: (breadcrumbs category
                    |> List.map (\slug -> viewBreadcrumb slug ("/category/" ++ slug))
               )
            |> List.intersperse (text ":: ")
        )


viewBreadcrumb : String -> String -> Element msg
viewBreadcrumb name url =
    row
        [ paddingEach
            { left = 0
            , right = 6
            , top = 0
            , bottom = 0
            }
        ]
        [ link
            [ Font.color Colors.darkTeal ]
            { label = text name
            , url = url
            }
        ]


viewCategoryHelp : Category -> Int -> Bool -> Element msg
viewCategoryHelp category depth showPosts =
    column
        [ spacing 6
        ]
        [ paragraph
            [ Font.size (18 - (depth * 4))
            , Region.heading (2 + depth)
            ]
            [ link
                [ Font.color Colors.darkTeal
                , Font.underline
                ]
                { label = text category.name
                , url = "/category/" ++ category.slug
                }
            ]
        , viewMembers category.members depth showPosts
        ]


viewMembers : CategoryMembers -> Int -> Bool -> Element msg
viewMembers members depth showPosts =
    column
        [ spacing 8
        , paddingEach
            { left = 18
            , right = 0
            , top = 4
            , bottom = 4
            }
        ]
        (case members of
            Slugs { slugs } ->
                if showPosts then
                    List.map viewSlug slugs

                else
                    [ Element.none ]

            SubCategories { subCategories } ->
                List.map
                    (\cat -> viewCategoryHelp cat (depth + 1) showPosts)
                    subCategories
        )


viewSlug : Slug -> Element msg
viewSlug slug =
    case Post.fromSlug slug Post.all of
        Nothing ->
            text ("wrong slug! " ++ slug)

        Just post ->
            el [ paddingXY 0 12 ] <|
                Post.preview slug post
