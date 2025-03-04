
import React from "react";
import { Box, Typography, Card, CardContent, Avatar, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GameCard from "../../assets/images/cod.png"
export const TrendingGamesCard = () => {
  return (
   <>

      {/* Box for Cards */}
      <Box sx={{ display: "flex", justifyContent: {xs:"flex-start",sm:"flex-start",md:"flex-start",lg:"center"}, gap: "20px", flexWrap: "wrap" ,paddingBottom:'10%'}}>
        <Card
          sx={{
            width: "300px",
            height: "80px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#111428",
            boxShadow: "none",
            overflow: "hidden",
            gap: "10px",
            borderRadius: "12px",
          }}
        >
          {/* Box 1: Avatar */}
          <Box>
            <Avatar
              src={GameCard}
              alt="Streamer"
              sx={{
                width: 60,
                height: 100,
                borderRadius: "0%",
                position: "relative",
                left: "10px",
                bottom: "4px",
              }}
            />
          </Box>

          {/* Box 2: Content */}
          <CardContent
            sx={{
              padding: 2,
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "12px",
                  // fontWeight: 500,
                  lineHeight: "16px",
                  textAlign: "left",
                  color: "white",
                }}
              >
                Call of Duty®
              </Typography>
            </Box>

            {/* Category */}
            <Typography
              variant="caption"
              sx={{
                fontFamily: "Poppins",
                fontSize: "10px",
                fontWeight: 300,
                lineHeight: "16px",
                textAlign: "left",
                color: "grey",
              }}
            >
              The massive free-to-play experience from the world of Modern Warfare.
            </Typography>
  
          </CardContent>
        </Card>
        {/* You can duplicate the above Card for multiple streamers */}
      </Box>

      </>
  );
};