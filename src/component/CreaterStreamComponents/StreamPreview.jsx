import React from "react";
import { Box, Button, Typography } from "@mui/material";
import sp from "../../assets/images/streampreview.png"

const StreamPreview = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#161A36",
        color: "white",
        padding: { xs: "0,5rem", sm: "0.5rem", md: "1rem", lg: "1rem" },
        borderRadius: "16px",
        textAlign: "center",
        margin: "auto",
        maxWidth: "100%",
        height:"100%"
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1.2rem" },
          fontWeight: "500",
          mb: 2,
        }}
      >
        Stream Preview
      </Typography>

      {/* Video Preview */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <img
          src={sp} // Replace with actual stream preview
          alt="Stream Preview"
          style={{ width: "100%", borderRadius: "12px" }}
        />

        {/* Live Dare Badge & Small Preview */}
        <Box
          sx={{
            position: "absolute",
            top: "1px",
            right: "10px",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#FF5C5C",
              color: "white",
              padding: "2px 10px",
              borderRadius: "8px",
              fontSize: "0.7rem",
              fontWeight: "500",
            }}
          >
            🔴 Live Dare
          </Box>
     
        </Box>
      </Box>

      {/* Run Ads Button */}
      <Button
        sx={{
          backgroundColor: "#6C5DD3",
          color: "white",
          width:"85%",
          borderRadius: "8px",
          padding: { xs: "8px 12px", sm: "10px 16px" },
          fontSize: { xs: "0.5rem", sm: "0.7rem" },
          textTransform: "none",
          mt: 2,
          "&:hover": { backgroundColor: "#5A4FCF" },
        }}
      >
        Run Ads ▼
      </Button>
    </Box>
  );
};

export default StreamPreview;
