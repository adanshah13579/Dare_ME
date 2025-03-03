import React from "react";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import MainLayout from "../../layouts/Mainlayout";
import colors from "../../style/color";
import Newest from "../../component/CommunityForum/Newestbox";
import PopularTags from "../../component/CommunityForum/TagsBox";
import PinnedGroups from "../../component/CommunityForum/PinnedBox";
import PostBar from "../../component/CommunityForum/PostBar";
import LiveEventsSoon from "../../component/CommunityForum/EventsBox";
import PodcastList from "../../component/CommunityForum/PodcastBox";
import PostCard from "../../component/CommunityForum/PodcastCard";

const CommunityPage = () => {
  return (
    <MainLayout>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, py: 4, width: "100%", px: 2, backgroundColor: colors.background, minHeight: "100vh" }}>
        <Grid container spacing={2} sx={{ height: "100%" }}>
          {/* Left Sidebar */}
          <Grid item xs={12} md={3} sx={{ height: "100%" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, height: "100%" }}>
              <Box sx={{ backgroundColor: "#2A2A3C", borderRadius: 2, flexGrow: 1 }}>
              <Newest/>
              </Box>
              <Box sx={{ backgroundColor: "#1E1E2E",  borderRadius: 2, flexGrow: 1 }}>
               <PopularTags/>
              </Box>
              <Box sx={{ backgroundColor: "#2A2A3C",  borderRadius: 2, flexGrow: 1 }}>
            <PinnedGroups/>         
              </Box>
            </Box>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={6} sx={{ height: "100%" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, height: "100%" }}>
              {/* Search Bar */}
              <Box  sx={{ backgroundColor: "#2A2A3C",  borderRadius: 2, flexGrow: 1 }}>
           <PostBar/>
              </Box>

              {[...Array(5)].map((_, index) => (
                <Box key={index} sx={{ backgroundColor: "#1E1E2E", borderRadius: 2, flexGrow: 1 ,height:"40%"}}>
                  <PostCard/>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Sidebar */}
          <Grid item xs={12} md={3} sx={{ height: "100%" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, height: "100%" }}>
              <Box sx={{ backgroundColor: "#2A2A3C", borderRadius: 2, flexGrow: 1 }}>
                <LiveEventsSoon/>
              </Box>
              <Box sx={{ backgroundColor: "#1E1E2E",  borderRadius: 2, flexGrow: 1 }}>
                <PodcastList/>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default CommunityPage;
