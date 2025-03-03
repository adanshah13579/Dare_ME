import React, { useState } from "react";
import { Box, Typography, IconButton, Avatar } from "@mui/material";
import colors from "../../style/color";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MoodIcon from "@mui/icons-material/Mood";

const ChatMessage = ({ avatar, name, time, message }) => {
  const [hover, setHover] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 1.5,
        mb: 2,
        backgroundColor: colors.background,
        flexDirection: {
          xs: "column", 
          sm: "row", 
        },
      }}
    >
      <Avatar src={avatar} sx={{ width: 32, height: 32 }} />

      <Box sx={{ flex: 1 }}>
        <Typography
          sx={{
            fontSize: {
              xs: 10, 
              sm: 12, 
            },
            fontWeight: "bold",
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {name}
          <Typography sx={{ fontSize: { xs: 10, sm: 12 }, color: "white" }}>
            {time}
          </Typography>
        </Typography>

        {/* Message Box */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            marginTop: "10px",
            justifyContent: "space-between",
            bgcolor: "#E4E4E41A",
            p: 1.5,
            borderRadius: 2,
            position: "relative",
            transition: "background 0.3s",
            maxWidth: {
              xs: "100%", // Full width for smaller screens
              sm: "75%", // 75% width for larger screens
            },
            "&:hover": {
              bgcolor: "#3F8CFF", // Light blue hover effect
            },
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* Message Text */}
          <Typography
            sx={{
              fontSize: {
                xs: 12, // Smaller font size for small screens
                sm: 14, // Larger font size for larger screens
              },
              marginTop: "2px",
              color: "#808191",
              "&:hover": {
                color: "white", // Light blue hover effect
              },
              transition: "color 0.3s",
              wordBreak: "break-word", // Ensure long words wrap properly
            }}
          >
            {message}
          </Typography>

          {/* Hover Icons Inside the Box */}
          {hover && (
            <Box
              sx={{
                display: "flex",
                gap: 1,
                backgroundColor: "#1B1D21",
                p: 0.3,
                borderRadius: "5px",
                marginLeft: 1, // Add spacing from the text
              }}
            >
              <IconButton size="small" sx={{ color: "white" }}>
                <MoodIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: "white" }}>
                <BookmarksIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: "white" }}>
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ChatMessage;
