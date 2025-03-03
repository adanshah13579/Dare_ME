import React from "react";
import { Box, Grid } from "@mui/material";
import MainLayout from "../../layouts/Mainlayout";
import colors from "../../style/color";
import CurrentStats from "../../component/CreaterStreamComponents/CurrentStatus";
import StreamerInformation from "../../component/CreaterStreamComponents/StreamerInformation";
import StreamTestCard from "../../component/CreaterStreamComponents/StreamTestCard";
import StreamRaid from "../../component/CreaterStreamComponents/StreamRaid";
import StreamPreview from "../../component/CreaterStreamComponents/StreamPreview";
import StreamChat from "../../component/CreaterStreamComponents/StreamChat";
import StreamDares from "../../component/CreaterStreamComponents/StreamDares";
import StreamActivity from "../../component/CreaterStreamComponents/StreamActivity";
import ScheduleStream from "../../component/CreaterStreamComponents/bottomsection";

const CreatorStream = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          py: 4,
          width: "100%",
          backgroundColor: colors.background,
          minHeight: "100%",
        }}
      >
        {/* Main Grid Layout */}
        <Grid container spacing={2} sx={{ width: "100%", maxWidth: "100%",          minHeight: "100%",
 }}>
          {/* Left Sidebar */}
          <Grid item xs={12} md={3.8}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box
                sx={{
                  backgroundColor: "#1E1E2E",
                  height: "15%",
                  width: "100%",
                  borderRadius: 2,
                }}
              >
                <CurrentStats />
              </Box>
              <Box
                sx={{
                  backgroundColor: "#2A2A3C",
                  height: "50%",
                  width: "100%",
                  borderRadius: 2,
                }}
              >
<StreamerInformation/>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#1E1E2E",
                  height: "15%",
                  width: "100%",
                  borderRadius: 3,
                }}
              >
             <StreamTestCard/>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#2A2A3C",
                  height: "15%",
                  width: "100%",
                  borderRadius: 3,
                }}
              >
                <StreamRaid/>
              </Box>
            </Box>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={4.2}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box
                sx={{
                  backgroundColor: "#29293F",
                  height: "40%",
                  width: "100%",
                  borderRadius: 2,
                }}
              >
                <StreamPreview/>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#1E1E2E",
                  height: "65%",
                  width: "100%",
                  borderRadius: 2,
                }}
              >
                <StreamChat/>
              </Box>
            </Box>
          </Grid>

          {/* Right Sidebar */}
          <Grid item xs={12} md={3.8}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box
                sx={{
                  backgroundColor: "#2A2A3C",
                  height: "50%",
                  width: "100%",
                  borderRadius: 2,
                }}
              >
                <StreamDares/>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#1E1E2E",
                  height: "50%",
                  width: "100%",
                  borderRadius: 2,
                }}
              >
               <StreamActivity/>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "97%",
            backgroundColor: "#29293F",
            height: "20%",
            borderRadius: 2,
          }}
        >
          <ScheduleStream/>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default CreatorStream;
