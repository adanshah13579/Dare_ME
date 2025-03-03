import React from "react";
import { Box } from "@mui/material";
import MainLayout from "../../layouts/Mainlayout";
import colors from "../../style/color";
import Livevideobox from "../../component/LiveVideoComponent/livevideocomponent";
import ChatBox from "../../component/LiveChatBox/chatbox";
import LiveVideoProfile from "../../component/LiveVideoProfile/livevideoprofile";
import Componentfour from "../../component/Livevideocomponent4/livevideocom4";
import VideoPageCard from "../../component/VideoPageCard/videopageCard";
import ResponsiveUnderlineNav from "../../component/Videopagenav/videopagenav";

const LiveVideoPage = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 2,
          width: "100%",
          backgroundColor: colors.background,
          minHeight: "100%",
          maxHeight: "auto",
        }}
      >
        {/* Row 1: Component 1 and Component 2 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" }, // Stack vertically for xs and sm, row for md and above
            gap: 2,
            width: "100%",
            height: "auto",
          }}
        >
          {/* Component 1 */}
          <Box
            sx={{
              backgroundColor: colors.background,
              flex: { xs: "1 1 100%", md: "1 1 50%" }, // Allow it to grow and shrink appropriately
              height: "70%", // Let the content determine height
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
             
              minHeight: "500px",
            }}
          >
            <Livevideobox />
          </Box>

          {/* Component 2 */}
          <Box
            sx={{
              backgroundColor: colors.background,
              flex: { xs: "1 1 100%", md: "1 1 30%" }, // Allow proportional growth/shrink
              height: "auto", // Allow height to adjust dynamically
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              minHeight: "400px", // Ensure a minimum height to avoid excessive shrinking
              maxHeight: "700px",
            }}
          >
            <ChatBox />
          </Box>
        </Box>

        {/* Row 2: Component 3 */}
        <Box
          sx={{
            backgroundColor: colors.background,
            width: "100%", // Use full width initially
            maxWidth: { md: "65%" }, // Restrict max width for medium screens and above
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // Align content to the start
            justifyContent: "start",
            borderRadius: 2,
            padding: 2, // Add padding for better appearance
          }}
        >
          <LiveVideoProfile />
        </Box>

        {/* Row 3: Component 4 */}
        <Box
          sx={{
            backgroundColor: colors.background,
            width: { xs: "100%", sm: "100%" },
            height: "auto",
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            maxWidth: { xs: "100%", sm: "100%", lg: "80%" },
            alignItems: { xs: "center", sm: "center" },
            justifyContent: { xs: "center", sm: "center", md: "center" },
            borderRadius: 2,
          }}
        >
          <Componentfour />
        </Box>
        <Box
          sx={{
            height: "auto",
            display: "flex",
            backgroundColor: colors.background,
            justifyContent: {
              xs: "center", // Center the component for extra-small screens
              sm: "flex-start", // Align to the start for small screens and larger
              md: "flex-start", // Ensures behavior for medium screens
            },
            alignItems: "start", // Align items at the top along the cross-axis
            width: "100%", // Ensure the Box spans the full width of the container
            padding: { xs: 2, sm: 3 },
            boxSizing: "border-box",
            margin: 0,
          }}
        >
          <ResponsiveUnderlineNav />
        </Box>

        <Box
          sx={{
            padding: "30px",
            height: "auto",
            flexDirection: { xs: "column", sm: "row", md: "row" }, // Column for xs, row for sm and md
            maxWidth: { xs: "100%", sm: "100%", lg: "80%" }, // Responsive width
            display: "flex",
            gap: "15px",
            flexWrap: "wrap", // Allows wrapping to the next row
            justifyContent: { xs: "center", sm: "space-around", md: "start" }, // Center or spread components
            alignItems: "center",
          }}
        >
          <VideoPageCard isBelowIcon={false} />
          <VideoPageCard isBelowIcon={false} />
          <VideoPageCard isBelowIcon={false} />
          <VideoPageCard isBelowIcon={false} />
        </Box>
      </Box>
    </MainLayout>
  );
};

export default LiveVideoPage;
