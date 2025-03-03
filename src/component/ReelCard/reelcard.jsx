import React from "react";
import { Box } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircleOutline";

const ReelCard = ({ imageSrc }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: 200, // Adjust as needed
        height: 350, // Adjust as needed
        borderRadius: 2,
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={imageSrc}
        alt="Reel Thumbnail"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Overlay & Play Icon */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.3)", // Dark overlay
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PlayCircleIcon sx={{ fontSize: 50, color: "#fff" }} />
      </Box>
    </Box>
  );
};

export default ReelCard;
