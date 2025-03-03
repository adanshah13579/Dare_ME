import React from "react";
import { Box, Typography, Button } from "@mui/material";
import longcardimage from "../../assets/images/longcard.png"
const LongCard = () => {
  return (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#1A1A2E",
        borderRadius: "12px",
        overflow: "hidden",
        p: 1,

      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 250,
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <img
          src={longcardimage} // Replace with actual game image
          alt="Game Thumbnail"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* Category Badge */}
        <Box
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            backgroundColor: "rgba(54, 54, 54, 0.56)",
            color: "white",
            padding: "4px 10px",
            borderRadius: "8px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          Shooter
        </Box>
      </Box>

      {/* Text Content */}
      <Box sx={{ml:3,my:5}}>
      <Typography variant="h6" sx={{ color: "white", }}>
        Fortnite
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "gray", fontSize: "14px", mt: 0.5  }}>
        {/* Green Dot */}
        <Box sx={{ width: 8, height: 8, backgroundColor: "#27AE60", borderRadius: "50%" }} />
        <Typography variant="body2">4.8K Viewers</Typography>
      </Box>

      {/* Follow Button */}
         <Button
                 variant="contained"
                 sx={{
                 mt:1,
                   backgroundColor: "rgba(228, 228, 228, 0.06)",
                   "&:hover": { backgroundColor: "#5742a1" },
                   width: { xs: "60%", sm: "70%" },
                   marginLeft: { xs: "5%", sm: "0" },
                   textTransform: "none",
                   padding: "8px 12px", // Increased padding for a comfortable look
                   fontSize: { xs: "12px", sm: "14px", md: "14px" },
                   borderRadius: "12px", // Increased border radius
                 }}
               >
                 Follow
               </Button>
               </Box>
    </Box>
  );
};

export default LongCard;
