import React from "react";
import { Box, Typography, Card, CardContent, Avatar, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const TrenidngSubStreamCard = () => {
  return (
   <>

      {/* Box for Cards */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" ,paddingBottom:'2%'}}>
        {/* Trending Streamer Card */}
        <Card
          sx={{
            width: "260px",
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
              src="https://via.placeholder.com/70"
              alt="Streamer"
              sx={{
                width: 62,
                height: 62,
                borderRadius: "50%",
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
                  fontSize: "15px",
                  fontWeight: 500,
                  lineHeight: "16px",
                  textAlign: "left",
                  color: "white",
                }}
              >
                Extreme Dares
              </Typography>
              <CheckCircleIcon sx={{ color: "green", fontSize: "16px", marginLeft: "5px" }} />
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
              online game
            </Typography>

            {/* Viewers Count */}
            <Box sx={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 117, 76, 1)",
                  marginRight: "5px",
                }}
              ></span>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "11px",
                  fontWeight: 300,
                  lineHeight: "16px",
                  textAlign: "left",
                  color: "grey",
                }}
              >
                2.8K viewers
              </Typography>
            </Box>
          </CardContent>
        </Card>
        {/* You can duplicate the above Card for multiple streamers */}
      </Box>

      </>
  );
};
