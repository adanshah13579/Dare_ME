import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import UploadIcon from "@mui/icons-material/CloudUpload";

const LiveBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0B0D1A", 
        borderRadius: "12px",
        width: { xs: "100%", sm: "100%", md: "100%" }, // Responsive width
        padding: "32px",
        minHeight: "45vh",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "#fff",
          textAlign: "center",
          fontFamily: "Poppins",
          marginBottom: "15px",
          fontSize: { xs: "8px", sm: "11px", md: "14px" },
        }}
      >
       start the live video
      </Typography>
        <Typography
              variant="body2"
              sx={{
                color: "white", // Light grey for caption
                textAlign: "center",
                fontSize: { xs: "6px", sm: "9px", md: "11px" },
                marginBottom: "15px",
              }}
            >
              Supports MP4, AVI, and MOV formats
            </Typography>

      {/* Upload Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FF754C",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          fontSize: "8px",
          borderRadius: "8px",
        }}
      >
        <IconButton
          sx={{
            color: "#fff",
            padding: 0,
            "&:hover": { backgroundColor: "transparent" },
            fontSize: "10px",
          }}
        >
          <UploadIcon sx={{ fontSize: "13px" }} />
        </IconButton>
        live now 
      </Button>
    </Box>
  );
};

export default LiveBox;
