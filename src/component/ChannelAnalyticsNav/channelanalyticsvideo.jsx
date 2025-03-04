import React, { useEffect, useState } from "react";
import { Box, Typography, Avatar, Button, IconButton } from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FlagIcon from "@mui/icons-material/Flag";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import VideoThumbnail from "../../assets/images/Video.png";
import Emoji from "../../assets/images/emoji.png";

const videos = [
  { id: 1, title: " 1 white guy gets fucked by 10 black dudes", views: "8.5M", impressions: "137.5%", duration: "4:30" },
  { id: 2, title: "Epic Moment 2", views: "4.3M", impressions: "120.8%", duration: "3:45" },
  { id: 3, title: "Unbelievable Clip 3", views: "6.7M", impressions: "99.2%", duration: "5:12" }
];

const ChannelAnalyticsVideo = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <Box sx={{ width: {xs:"90%",md:"80%",lg:"30%"},  padding: "20px",marginLeft:{sm:"0%",md:"0%",lg:"6%",xl:"24%"},marginTop:"4%" }}>
      {/* Header Section */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
        <Typography sx={{ fontSize: "13px", color: "#FFF" }}>
          Latest Video
        </Typography>

        {/* Navigation Buttons */}
        <Box>
          <IconButton onClick={() => swiperInstance?.slidePrev()} sx={navButtonStyle("#007BFF")}>
            <ArrowBackIosNewIcon sx={{ fontSize: "14px", color: "#FFF" }} />
          </IconButton>
          <IconButton onClick={() => swiperInstance?.slideNext()} sx={navButtonStyle("#2A2D3A")}>
            <ArrowForwardIosIcon sx={{ fontSize: "14px", color: "#FFF" }} />
          </IconButton>
        </Box>
      </Box>

      {/* Swiper Container */}
      <Swiper
        onSwiper={setSwiperInstance}
        modules={[Navigation]}
        slidesPerView={1}
        loop={true}
        navigation={false} // Disable default Swiper navigation to use custom buttons
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#1E1E26",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                paddingBottom: "10px",
              }}
            >
              {/* Video Section */}
              <Box sx={{ position: "relative", width: "100%", height: "400px", backgroundColor: "#242731",borderBottomLeftRadius:"30px",borderBottomRightRadius:"30px" }}>
                <img
                  src={VideoThumbnail}
                  alt="Video Thumbnail"
                  style={{
                    width: "100%",
                    height: "50%",
                    objectFit: "cover",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                />
                <Box sx={{marginLeft:"10%",marginTop:"3%"}}>

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
                <Typography sx={{ fontSize: "14px", marginTop: "5px",color:"#fff" }}>
                  {video.title}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                  <Avatar src={Emoji} sx={{ width: 25, height: 25 }} />
                  <Typography sx={{ fontSize: "12px", color: "#AAA", marginLeft: "8px" }}>
                    Just Chilling
                  </Typography>
                  <FlagIcon sx={{ fontSize: "16px", color: "#AAA", marginLeft: "60px" }} />
                  <Typography sx={{ fontSize: "12px", color: "#AAA", marginLeft: "5px" }}>
                    English
                  </Typography>
                </Box>
                </Box>

              </Box>

              <Box sx={{ padding: "12px", color: "#FFF" }}>
                <Box sx={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "30px" }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography sx={{ fontSize: "12px", color: "#AAA" }}>View</Typography>
                    <Typography sx={{ fontSize: "12px", color: "#FFF" }}>{video.views}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography sx={{ fontSize: "12px", color: "#AAA" }}>Impressions</Typography>
                    <Typography sx={{ fontSize: "12px", color: "#FFF" }}>{video.impressions}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography sx={{ fontSize: "12px", color: "#AAA" }}>Avg. view duration</Typography>
                    <Typography sx={{ fontSize: "12px", color: "#FFF" }}>{video.duration}</Typography>
                  </Box>
                </Box>

                {/* More Details Button */}
                <Button
                  variant="contained"
                  sx={{
                    // width: "80%",
                    marginLeft:"10%",
                    paddingX:"30px",
                    paddingY:"10px",
                    borderRadius:"10px",
                    backgroundColor: "#2A2D3A",
                    color: "#FFF",
                    fontSize: "12px",
                    marginTop: "15px",
                    textTransform: "none",
                    ":hover": { backgroundColor: "#383B48" },
                  }}
                >
                  More Detail
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ChannelAnalyticsVideo;

const navButtonStyle = (bgColor) => ({
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  backgroundColor: bgColor,
  marginLeft: "5px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  "&:hover": { backgroundColor: bgColor, opacity: 0.9 },
});

