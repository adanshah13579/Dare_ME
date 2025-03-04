import React from "react";
import { Box, Typography, Card, CardContent, Avatar, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { TrendingGamesCard } from "./trendindgamescard";

export const Trendinggamescard = () => {
  return (
    <Box sx={{  marginLeft: "30px",marginTop:"30px" }}>
      {/* Heading: "Trending Streamers" */}
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Poppins",
          fontWeight: 300,
          fontSize:"13px",
          color: "white",
          marginBottom: "20px",
          alignSelf:"start",
          pl:2,
          mb:5
        }}
      >
        Trending Games
      </Typography>

      <TrendingGamesCard/>
      <TrendingGamesCard/>
      <TrendingGamesCard/>

      <TrendingGamesCard/>  <TrendingGamesCard/>

      {/* Discover Button */}
      <Box sx={{ marginTop: "20px" ,pl:3}}>
       <Button
                 variant="contained"
                 sx={{
                  
                   width:{xs:"70%",sm:"70%",md:"30%",lg:"90%"},
                   height:"55px",
                   backgroundColor: "#E4E4E41A",
                   color: "white",
                   padding: "12px 20px",
                   borderRadius: "10px",
                   fontFamily: "Poppins",
                   fontSize: "14px",
                   fontWeight: 600,
                   textTransform:"none",
                   "&:hover": {
                     backgroundColor: "#FF6230",
                   },
                 }}
               >
                 Discover More
               </Button>
      </Box>
    </Box>
  );
};