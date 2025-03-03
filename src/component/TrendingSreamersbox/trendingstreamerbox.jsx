import React from "react";
import { Box, Typography, Card, CardContent, Avatar, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { TrenidngSubStreamCard } from "./trendingstreamcar";

export const Trendingstreamerscard = () => {
  return (
    <Box sx={{  margin: "20px" }}>
      {/* Heading: "Trending Streamers" */}
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Poppins",
          fontWeight: 300,
          color: "white",
          marginBottom: "20px",
          alignSelf:"start",
          pl:2,
          mb:5
        }}
      >
        Trending Streamers
      </Typography>

      <TrenidngSubStreamCard/>
      <TrenidngSubStreamCard/>
      <TrenidngSubStreamCard/>

      <TrenidngSubStreamCard/>  <TrenidngSubStreamCard/>

      {/* Discover Button */}
      <Box sx={{ marginTop: "20px" ,pl:3}}>
        <Button
          variant="contained"
          sx={{
           
            width:"90%",
            height:"55px",
            backgroundColor: "#E4E4E41A",
            color: "white",
            padding: "12px 20px",
            borderRadius: "10px",
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: 600,
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
