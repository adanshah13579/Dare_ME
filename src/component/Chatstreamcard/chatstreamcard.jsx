import React from "react";
import { Box, Typography, IconButton, Chip, Button } from "@mui/material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import WifiIcon from "@mui/icons-material/Wifi";
import str4 from "../../assets/images/str4.png"; // Default image

const StreamCard = ({ image, title, channelName, language, live }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#1e1e2f",
        borderRadius: 2,
        overflow: "hidden",
        width: 350,
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 200,
          backgroundImage: `url(${image || str4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 10,
            left: 10,
            display: "flex",
            gap: 1,
          }}
        >
          <IconButton sx={{ bgcolor: "rgba(0,0,0,0.5)", color: "white" }}>
            <PlayArrowIcon />
          </IconButton>
          <IconButton sx={{ bgcolor: "rgba(0,0,0,0.5)", color: "white" }}>
            <SettingsIcon />
          </IconButton>
        </Box>

        {live && (
          <Chip
            label="Live"
            color="error"
            size="small"
            sx={{
              position: "absolute",
              bottom: 10,
              left: 10,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              px: 1.5,
              borderRadius: "16px",
            }}
            icon={<WifiIcon />}
          />
        )}
      </Box>

      <Box sx={{ p: 2 }}>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: "bold",
            color: "white",
            mb: 1,
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Stack button and text vertically
            alignItems: "flex-start", // Align to the start of the card
            gap: 0.5, // Small gap between button and text
          }}
        >
          <Button
            sx={{
              backgroundColor: "#FF754C", // Orange background
              color: "white", // Text color
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px", // Rounded button
              minWidth: "auto",
              fontSize: "10px",
              px: 1.5, // Padding for compact size
              py: 0.5, // Adjust vertical padding
              textTransform: "capitalize", // Capitalize text
            }}
            variant="contained"
          >
            <WifiIcon sx={{ fontSize: "15px", mr: 0.5 }} /> {/* Icon */}
            Live
          </Button>
          <Typography
            variant="h6"
            sx={{
              fontSize: "14px", // Adjusted font size
              color: "white",
              fontFamily: "Poppins",
              lineHeight: 1.2, // Compact line height
            }}
          >
            1 white guy gets help by 10 black dudes
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: 12,
            color: "gray",
            mt: 1,
            textAlign: "left",
          }}
        >
          Just Chillin - English
        </Typography>
      </Box>
    </Box>
  );
};

export default StreamCard;
