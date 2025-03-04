import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WifiIcon from "@mui/icons-material/Wifi";
import Mask from "../../assets/images/Mask.png";
import Avatarimg from "../../assets/images/avatar.png";
import TopIcon from "../../assets/images/Top-Icon.png";
import Arrow from "../../assets/images/arrow.png";
import Playlist from "../../assets/images/playlist.png";
import Favorite from "../../assets/images/favorite.png";
import dot from "../../assets/images/dot.png"
import dot2 from "../../assets/images/dot2.png"
import colors from "../../style/color";
import { Trendingstreamerscard } from "../TrendingSreamersbox/trendingstreamerbox";
import FilterButtons from "../Filterbutton/filterbutton";
import { Trendinggamescard } from "../TrendingGames/trendinggamesbox";


const VideoCard = ({ image, title, user, views, time, profilePic }) => {
  return (

    <>
    <Box>
        
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#242731",
        borderRadius: "15px",
        padding: "4px",
        gap: "12px",
        width: {xs:"100%",sm:"100%",md:"100%",lg:"95%",xl:"80%"},
        height: "100%",
        position: "relative",
        flexDirection: { xs: "column", sm: "column",md:"row",lg:"row",xl:"row" } 
      }}
    >
      {/* Thumbnail Section */}
     <Box
        sx={{
          flex: { xs: 1, sm: 1,md:"none" }, // Takes full height on small screens
          height: { xs: "20%", sm: "100%" }, // Fixed height on small screens
          width: { xs: "100%", sm: "100%",md:"30%" }, // Full width on xs, 30% on sm+
          borderRadius: "15px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={TopIcon}
          alt="Top Icon"
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            width: "30px",
            height: "30px",
            zIndex: 2,
          }}
        />
        <img
          src={image}
          alt="Thumbnail"
          style={{
            width: "100%",
            height: "100%",
            // objectFit: "cover",
            // position: "relative",
            // paddingLeft:"-10px",
            zIndex: 1,
          }}
        />
      </Box>

      {/* Content Section */}
      <Box sx={{ flex: 1, marginTop: "10px" }}>
        <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Button
            variant="contained"
            startIcon={<WifiIcon sx={{ height: "12px",marginRight: "-10px" }} />}
            sx={{
              backgroundColor: "#FF774C",
              color: "white",
              fontSize: "10px",
              textTransform: "none",
              borderRadius: "5px",
              padding: "2px 8px",
              minWidth: "unset",
              "&:hover": { backgroundColor: "#FF5A2A" },
            }}
          >
            Live
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6C5DD3",
              color: "#3F8CFF",
              fontSize: "10px",
              textTransform: "none",
              borderRadius: "5px",
              padding: "2px 8px",
              minWidth: "unset",
              "&:hover": { backgroundColor: "#FF5A2A" },
            }}
          >
            Live Dare
          </Button>
        </Box>

        <Typography sx={{ color: "#FFF", mt: 1, fontSize: "14px" }}>
          {title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "15px" }}>
           <img src={dot} alt="dot" style={{ width: "6px", height: "6px" }} />
          <Typography sx={{ color: "#AAA", fontSize: "10px" }}>{views} watching</Typography>
          <img src={dot2} alt="dot" style={{ width: "6px", height: "6px",marginLeft:"10px" }} />
          <Typography sx={{ color: "#AAA", fontSize: "10px" }}>{time}</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "8px", mt: 1 }}>
  {/* Avatar */}
  <Avatar src={profilePic} sx={{ width: 40, height: 40 }} />
  
  {/* Text Container with Flex Column */}
  <Box sx={{ display: "flex", flexDirection: "column" }}>
    {/* Username with Verified Badge */}
    <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <Typography sx={{ color: "#FFF", fontSize: "12px", fontWeight: "bold" }}>
        {user}
      </Typography>
      <CheckCircleIcon sx={{ color: "#4CAF50", fontSize: "14px" }} />
    </Box>
    
    {/* Live Streaming Text */}
    <Typography sx={{ color: "#AAA", fontSize: "10px" }}>
      Live Streaming
    </Typography>
  </Box>
</Box>

      </Box>

      {/* Right Side Button */}
      {/* <Button
        sx={{
          backgroundColor: "#6C5DD3",
          width: "5%",
          height: "90%",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
          position: "absolute",
          right: "10px", // Aligns button to the right inside the card
          top: "50%",
          transform: "translateY(-50%)", // Centers vertically
        }}
      >
        <img src={Arrow} alt="Arrow"  />
        <img src={Playlist} alt="Playlist" style={{ width: "40px", height: "40px" }} />
        <img src={Favorite} alt="Favorite" />
      </Button> */}
    </Box>
    </Box>
    </>

  );
};

const TopTrendingCard = () => {
  return (
    <>
    <Box sx={{width:"100%",background:colors.background}}>
    <FilterButtons></FilterButtons>

<Box sx={{marginLeft:"50px"}}>

    <Typography sx={{color:"#fff",fontFamily:"poppins",fontSize:"12px",marginTop:"10px"}}>
    Top Trending Now
    </Typography>

    <Box sx={{display:"flex",flexDirection:{xs:"column",sm:"column",md:"column",lg:"row",xl:"row"}}}>

    <Box sx={{ display: "flex", justifyContent: "flex-start", flexDirection:"column", gap:"20px",marginTop:"30px",width:"80%"}}>
      <VideoCard
        image={Mask}
        title="POOING IN THE DISPLAY TOILET AT IKEA"
        user="The Pebble"
        views="4.2K"
        time="1 week ago"
        profilePic={Avatarimg}
      />
      <VideoCard
        image={Mask}
        title="POOING IN THE DISPLAY TOILET AT IKEA"
        user="The Pebble"
        views="4.2K"
        time="1 week ago"
        profilePic={Avatarimg}
      />
      <VideoCard
        image={Mask}
        title="POOING IN THE DISPLAY TOILET AT IKEA"
        user="The Pebble"
        views="4.2K"
        time="1 week ago"
        profilePic={Avatarimg}
      />
      <VideoCard
        image={Mask}
        title="POOING IN THE DISPLAY TOILET AT IKEA"
        user="The Pebble"
        views="4.2K"
        time="1 week ago"
        profilePic={Avatarimg}
      />
       <VideoCard
        image={Mask}
        title="POOING IN THE DISPLAY TOILET AT IKEA"
        user="The Pebble"
        views="4.2K"
        time="1 week ago"
        profilePic={Avatarimg}
      />
      <VideoCard
        image={Mask}
        title="POOING IN THE DISPLAY TOILET AT IKEA"
        user="The Pebble"
        views="4.2K"
        time="1 week ago"
        profilePic={Avatarimg}
      />
      <VideoCard
        image={Mask}
        title="POOING IN THE DISPLAY TOILET AT IKEA"
        user="The Pebble"
        views="4.2K"
        time="1 week ago"
        profilePic={Avatarimg}
      />
      
    </Box>

    <Box sx={{width:{xs:"100%",sm:"100%",md:"100%",lg:"30%",xl:"30%"}}}>
    <Trendingstreamerscard/>
    <Trendinggamescard/>
    </Box>
    </Box>
</Box>
    </Box>
    </>
  );
};

export default TopTrendingCard;