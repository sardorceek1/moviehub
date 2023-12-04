import React from "react";
import {
     Checkroom, DeveloperMode, FaceRetouchingNatural,
     FitnessCenter,
     GraphicEq,
     Home,
     LiveTv, MusicNote,
     OndemandVideo,
     School,
     SportsEsports,
     TheaterComedy
} from "@mui/icons-material";

export const logo='https://yt3.googleusercontent.com/J_HbAaiOjRd2vYtBGd2fS57uSuYcKqlCMn5fMgTvQld47V9rU19GE1w4Hk-JlpXiK_1Q0Avukg=s900-c-k-c0x00ffffff-no-rj'

export const category=[
     {name:'New', icon:<Home/>},
     {name:'Movie', icon:<OndemandVideo/>},
     {name:'Live', icon:<LiveTv/>},
     {name:'Gaming', icon:<SportsEsports/>},
     {name:'Education', icon:<School/>},
     {name:'Sport', icon:<FitnessCenter/>},
     {name:'Comedy', icon:<TheaterComedy/>},
     {name:'Podcast', icon:<GraphicEq/>},
     {name:'Fashion', icon:<Checkroom/>},
     {name:'Crypto', icon:<DeveloperMode/>},
     {name:'Gym', icon:<FitnessCenter/>},
     {name:'Beauty', icon:<FaceRetouchingNatural/>},
     {name:'Music', icon:<MusicNote/>},
]
