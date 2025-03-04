import React, { useState } from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import WifiIcon from "@mui/icons-material/Wifi";
import Hero1 from "../../assets/images/hero1.png";
import Hero2 from "../../assets/images/hero2.png";
import Emoji from "../../assets/images/emoji.png";
import colors from "../../style/color";
import "swiper/css";
import "swiper/css/pagination";

const videoData = [
  { id: 1, title: "I'll do any tattoo you dare me to", category: "Just Chilling", language: "English", image: Hero1 },
  { id: 2, title: "Do the WAP in public", category: "Just Chilling", language: "English", image: Hero2 },
  { id: 3, title: "Try Not to Laugh Challenge", category: "Comedy", language: "English", image: Hero1 },
];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const isSmallScreen = useMediaQuery("(max-width:900px)");

  return (
    <Box sx={{ width: "100%", padding: "20px", backgroundColor: colors.background }}>
      <Box sx={{marginLeft:{xs:"5px",sm:"5px",md:"30px"}}}>

      <Typography sx={{fontFamily:"poppins",color:"#ffff"}}>
      Unity Gaming
      </Typography>

      <Typography sx={{fontFamily:"poppins",color:"#ffff",fontSize:"26px",fontWeight:"bold"}}>
      Trending
      </Typography>
      <Swiper
        spaceBetween={10}
        slidesPerView={isSmallScreen ? 1 : 1.9} 
        pagination={{ clickable: true, el: ".custom-pagination" }}
        modules={[Pagination]}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
        style={{ paddingBottom: "20px" }}
      >
        {videoData.map((video, index) => (
         <SwiperSlide key={index}>
         <Box
           sx={{
             position: "relative",
             borderRadius: "25px",
             overflow: "hidden",
             backgroundColor: "#222",
             width: "100%",
             height: {xs:"40vh",sm:"30vh",md:"50vh",lg:"60vh"}, 
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
             marginTop: "20px",
           }}
         >
           <img
             src={video.image}
             alt={video.title}
             style={{
               width: "100%",
               height: "100%",
              //  objectFit: "cover",
               borderRadius: "15px",
             }}
           />
       
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  // background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8))",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "15px",
                  paddingTop: "50px",
                  paddingLeft: { xs: "10px", sm: "10px", md: "50px", lg: "50px", xl: "50px" },
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<WifiIcon sx={{ height: "12px", marginRight: "-10px" }} />}
                  sx={{
                    backgroundColor: "#FF774C",
                    color: "white",
                    width: "fit-content",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textTransform: "none",
                    borderRadius: "6px",
                    padding: "1px 12px",
                    minWidth: "unset",
                    "&:hover": { backgroundColor: "#FF5A2A" },
                  }}
                >
                  Live
                </Button>
                <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold", marginBottom: "5px" }}>
                  {video.title}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ color: "#ccc", fontSize: "10px", display: "flex", alignItems: "center" }}>
                    <img
                      src={Emoji}
                      alt="Emoji"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "5px",
                        verticalAlign: "middle",
                      }}
                    />
                    <Box>{video.category}</Box>
                    <Box sx={{ marginLeft: "60px" }}>🚩 {video.language}</Box>
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: "10px",
                    backgroundColor: "#6C63FF",
                    "&:hover": { backgroundColor: "#6C5DD3" },
                    width: "fit-content",
                    paddingX: "25px",
                    paddingY: "10px",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontSize: "10px",
                  }}
                >
                  Watch
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "10px",
          width: "100%",
          gap: "20px",
        }}
      >
        <Typography sx={{ textAlign: "left", color: "#808191", fontSize: "12px",marginLeft:{xs:"50px",sm:"50px",md:"0px"} }}>
          {"0"}
          {currentIndex}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Box
            className="custom-pagination"
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: { sm: "50px", xs: "10px", md: "150px", lg: "200px", xl: "350px" },
              gap: "10px",
              cursor: "pointer",
            }}
          />
          <Box>
          <Typography sx={{ color: "#808191", fontSize: "12px", fontWeight: "bold", whiteSpace: "nowrap",marginLeft:{md:"70px",lg:"140px"} }}>
            Showing {currentIndex} / {videoData.length}
          </Typography>

          </Box>
        </Box>
      </Box>
      </Box>
    </Box>
  );
};

export default VideoCarousel;
