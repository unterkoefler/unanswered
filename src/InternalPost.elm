module InternalPost exposing (InternalPost)

{- used to transform DateAsInts structs in generated PostList to Date's -}


type alias InternalPost =
    { title : String
    , description : String
    , content : String
    , showOnHomePage : Bool
    , date : Maybe DateAsInts
    }


type alias DateAsInts =
    { year : Int
    , month : Int
    , day : Int
    }
