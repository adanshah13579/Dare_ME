import React from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddIcon from "@mui/icons-material/Add";
import DiscordIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import colors from "../../style/color";

const LiveVideoProfile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 1,
        justifyContent: "space-between",
        width: { lg: "90%" },
        backgroundColor: colors.background,
        alignItems: "center",
        padding: 2,
      }}
    >
      {/* Left Section: Avatar, Name, and Details */}
      <Box
        sx={{
          display: "flex",
          alignItems: "self-start",
          gap: 3,
          width: "100%",
        }}
      >
        {/* Avatar with Blue Border and Green Dot */}
        <Box
          sx={{
            position: "relative",
            width: { xs: 56, sm: 68 },
            height: { xs: 56, sm: 68 },
            borderRadius: "50%",
            border: "4px solid blue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            src="/path-to-avatar-image.jpg" // Replace with the avatar image URL
            alt="The Pebble"
            sx={{
              width: { xs: 50, sm: 60 },
              height: { xs: 50, sm: 60 },
            }}
          />
          {/* Green Dot */}
          <Box
            sx={{
              position: "absolute",
              bottom: 2,
              right: 2,
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "green",
              border: "2px solid white",
            }}
          />
        </Box>

        {/* Name, Followers, and Description */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: { md: "70%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {/* Text */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "18px", sm: "24px" },
                color: "white",
                fontFamily: "poppins",
                lineHeight: 1.2, // Ensures consistent spacing between lines
              }}
            >
              The Pebble
            </Typography>

            {/* Fixed Tick Icon */}
            <CheckCircleIcon
              sx={{
                color: "green",
                fontSize: "24px", // Matches better with the font size
                verticalAlign: "middle", // Aligns vertically with text
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              fontFamily: "poppins",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "12px", sm: "14px" },
                color: "white",
              }}
            >
              536K followers
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "12px", sm: "14px" },
                color: "white",
              }}
            >
              120 videos
            </Typography>
            <Typography
              variant="caption"
              sx={{
                fontSize: { xs: "10px", sm: "12px" },
                color: "grey",
                width: "100%",
              }}
            >
              I’M LIVE EVERY DAY, I HOPE YOU ENJOY THIS STREAM, LEAVE A COMMENT
              IF YOU WANNA SEE SOMETHING EVEN COOLER
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          width: "100%",
          alignItems: { sm: "self-start" },
          marginTop: { xm: "20px" },
        }}
      >
        {/* Row 1: Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center", 
            gap: 2,
          }}
        >
          <Button
            sx={{
              backgroundColor: "#6C5DD3",
              fontSize: { xs: "10px", sm: "12px" },
              width: { xs: "80px", md: "120px" },
              padding: { xs: "5px 10px", sm: "8px 20px" },
              borderRadius: "15px",
              boxShadow: 2,
              color: "white",
            }}
          >
            Message
          </Button>
          <Button
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "10%",
              backgroundColor: "#F0F3F61A",
            }}
          >
            <AddIcon sx={{ color: "white" }} />
          </Button>
        </Box>

        {/* Row 2: Follow Me Text and Icons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Align to the top-right
            gap: 0.5,
          }}
        >
          {/* Follow Me Text */}
          <Typography
            variant="caption"
            sx={{
              color: "gray",
              fontSize: { xs: "10px", sm: "12px" },
              left: "0px",
            }}
          >
            Follow me on
          </Typography>

          {/* Icons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1,
            }}
          >
            <IconButton sx={{ color: "white" }}>
              <DiscordIcon /> {/* Replace with actual DiscordIcon */}
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <TwitterIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <YouTubeIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LiveVideoProfile;
