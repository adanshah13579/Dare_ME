import React from "react";
import StreamingScreen from "../../component/StartStreaming/startStreaming";
import MainLayout from "../../layouts/Mainlayout";
import { Box } from "@mui/material";
import Channelherosection from "../../component/ChannelHerosection/Channelherosection";
import Channelprofilecomponent from "../../component/Channelprofilecomponent/Channelprofilecomponent";
import ResponsiveUnderlineNav from "../../component/Videopagenav/videopagenav";
import colors from "../../style/color";
import ThreeVideoButton from "../../component/ThreeVideosButton/ThreeVideoButton";
import VideoPageCard from "../../component/VideoPageCard/videopageCard";
import ChannelPageCardGrid from "../../component/Channelpagecards/channelpagecards";
import AchievementsBadges from "../../component/AchievmentandBadges/AchievementsBadgesbox";

const ChannelProfilePage = () => {
  return (
    <MainLayout>
      <Box sx={{ width: "100%",            backgroundColor: colors.background,
  }}>
        {/* Hero Section with Relative Position */}
        <Box sx={{ width: "100%", position: "relative" }}>
          <Channelherosection />
          {/* Profile Component Positioned Over the Hero Section */}
          <Box
            sx={{
              position: "absolute",
              bottom: "-110px", // Adjust based on design
              left: "42%",
              transform: "translateX(-50%)",
              zIndex: 200,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Channelprofilecomponent />
          </Box>
        </Box>
<Box sx={{            backgroundColor: colors.background,
}}></Box>
        {/* Other Components Below */}
        <Box
          sx={{
            width: "100%",
            marginTop: "100px", // Adjust to ensure proper spacing below profile
            backgroundColor: colors.background,
            padding: "0px 40px",
          }}
        >
          <ResponsiveUnderlineNav />
        </Box>

        <Box sx={{ width: "100%", backgroundColor: colors.background, padding: "0px 35px" }}>
          <ThreeVideoButton isChannelProfilePage={true} />
        </Box>
        <Box sx={{ width: "100%", backgroundColor: colors.background, padding: "10px 0px" }}>
          <ChannelPageCardGrid />
        </Box>
        <Box sx={{ width: "100%", backgroundColor: colors.background, padding: "0px 20px" }}>
          <AchievementsBadges />
        </Box>
      </Box>
    </MainLayout>
  );
};

export default ChannelProfilePage;
