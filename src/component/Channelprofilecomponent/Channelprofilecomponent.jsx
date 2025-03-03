import React from "react";
import { Box, Button, Typography, Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const ChannelProfileComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        padding: 3,
        backgroundColor: "#18181B",
        borderRadius: 6,
        width: { xs: "90%", sm: "85%", md: "80%", lg: "75%" },
        height: { xs: "auto", sm: 180 },
        margin: "auto",
        flexWrap: "wrap",
      }}
    >
      {/* Avatar and Name Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
        <Avatar
          src="/path-to-avatar-image.jpg"
          alt="The Pebble"
          sx={{ width: { xs: 70, sm: 80, md: 90 }, height: { xs: 70, sm: 80, md: 90 } }}
        />
        <Box>
          <Typography variant="h5" color="white" display="flex" alignItems="center">
            The Pebble
            <CheckCircleIcon sx={{ color: "#4CAF50", ml: 1, fontSize: 24 }} />
          </Typography>
          <Typography variant="body1" color="gray">
            536K followers • 120 videos
          </Typography>
        </Box>
      </Box>

      {/* Buttons Section */}
      <Box sx={{ display: "flex", gap: { xs: 2, sm: 6 }, ml: "auto", flexWrap: "wrap" }}>
        <Button
          variant="contained"
          
          sx={{
            textTransform: "none",
            backgroundColor:"#6C5DD3",
            fontSize: { xs: 12, sm: 14 },
            padding: { xs: "6px 12px", sm: "8px 18px" },
            minWidth: { xs: "auto", sm: "140px" },
          }}
        >
          Support this Creator
        </Button>
        <Button
         
          
          sx={{
            padding: { xs: "6px 12px", sm: "8px 18px" },
            minWidth: { xs: "auto", sm: "60px" },
            backgroundColor:"#F0F3F61A",

          }}
        >
          <PersonAddIcon fontSize="small" sx={{
           
            color:"white",

          }} />
        </Button>
      </Box>
    </Box>
  );
};

export default ChannelProfileComponent;
