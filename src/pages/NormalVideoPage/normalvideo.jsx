import React from "react";
import { Box } from "@mui/material";
import MainLayout from "../../layouts/Mainlayout";
import colors from "../../style/color";
import Livevideobox from "../../component/LiveVideoComponent/livevideocomponent";
import LiveVideoProfile from "../../component/LiveVideoProfile/livevideoprofile";
import Componentfour from "../../component/Livevideocomponent4/livevideocom4";

import Normalvideocard from "../../component/Normalvideocard/normalviedocard";
import Normalvideocommentbox from "../../component/NormalvideoCommentbox/normalvideocommentbox";
import { Trendingstreamerscard } from "../../component/TrendingSreamersbox/trendingstreamerbox";
import GlassEffectBox from "../../component/Normalvideoemptybox/normalvideoemptybox";

const Normalvideopage = () => {
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
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              borderRadius: 2,
              minHeight: "400px", // Ensure a minimum height to avoid excessive shrinking
              maxHeight: "700px",
            }}
          >
            <Normalvideocard />
            <Normalvideocard />

            <Normalvideocard />
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
            maxWidth: { xs: "100%", sm: "100%",md:"85%", lg: "80%" },
            alignItems: { xs: "center", sm: "center" },
            justifyContent: { xs: "center", sm: "center", md: "center" },
            borderRadius: 2,
          }}
        >
          <Componentfour />
          <GlassEffectBox/>
        </Box>

        <Box
  sx={{
    width: "100%",
    height: "auto",
    padding: 1,
    borderRadius: 2,
    boxShadow: 3,
    display: "flex", // Enables flexbox
    flexDirection: { xs: "column-reverse", sm: "column" ,md:"row" }, 
    justifyContent: "flex-start",
    alignItems: "flex-start", 
    gap: 2, 
  }}
><Normalvideocommentbox />
  <Trendingstreamerscard />
  
</Box>

      </Box>
    </MainLayout>
  );
};

export default Normalvideopage;
