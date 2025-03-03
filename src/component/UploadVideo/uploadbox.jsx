import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import UploadIcon from "@mui/icons-material/CloudUpload";

const UploadBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#373A43", // Glass effect background
        borderRadius: "12px",
        width: { xs: "100%", sm: "100%", md: "100%" }, // Responsive width
        padding: "32px",
        minHeight: "45vh",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Drag and Drop Text */}
      <Typography
        variant="h6"
        sx={{
          color: "#fff",
          textAlign: "center",
          fontFamily: "Poppins",
          marginBottom: "10px",
          fontSize: { xs: "10px", sm: "13px", md: "18px" },
        }}
      >
        Drag and drop a video file
      </Typography>

      {/* Caption Text */}
      <Typography
        variant="body2"
        sx={{
          color: "#777887", // Light grey for caption
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
          backgroundColor: "#3F8CFF",
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
        Choose your file
      </Button>
    </Box>
  );
};

export default UploadBox;
