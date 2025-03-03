import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import colors from "../../style/color"; // Import colors from your global color file

const Stories = ({ grey_color =colors.cardbackground}) => {
  const userStories = [
    { avatar: "https://via.placeholder.com/60", name: "John Doe", timeAgo: "10 m ago", dotColor: "blue" },
    { avatar: "https://via.placeholder.com/60", name: "Jane Smith", timeAgo: "15 m ago", dotColor: "red" },
    {
      avatar: "https://via.placeholder.com/60",
      name: "Alexander Theodore Johnson",
      timeAgo: "20 m ago",
      dotColor: "green",
    },
    { avatar: "https://via.placeholder.com/60", name: "Emily Davis", timeAgo: "30 m ago", dotColor: "orange" },
    {
      avatar: "https://via.placeholder.com/60",
      name: "Christopher Liam Sebastian",
      timeAgo: "1 hr ago",
      dotColor: "blue",
    },
  ];

  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: 4, backgroundColor: colors.background }}>
      <Box
        sx={{
          backgroundColor:grey_color,
         
          borderRadius: "16px",
          padding: { xs: 2, sm: 4 },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "white",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        >
          <span style={{ color: "red" }}>Live Dares</span> from Channel You Follow
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "nowrap",
            gap: 2,
            overflowX: "auto",
            paddingBottom: "16px",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {/* Story Upload */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              borderRadius: "10px",
              padding: "8px",
            }}
          >
            <Avatar sx={{ bgcolor: colors.buttoncolor, width: 60, height: 60 }}>+</Avatar>
            <Typography variant="body2" sx={{ color: "white", textAlign: "center", mt: "8px" }}>
              Add Story
            </Typography>
          </Box>

          {/* User Stories */}
          {userStories.map((story, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "8px",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "50%",
                  padding: "3px",
                  border: "3px solid skyblue",
                }}
              >
                <Avatar src={story.avatar} alt={story.name} sx={{ width: 60, height: 60 }} />
                {/* Dot on the border */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "2px",
                    right: "2px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: story.dotColor,
                    border: "2px solid #fff",
                  }}
                />
              </Box>
              {/* Name with Ellipsis */}
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  textAlign: "center",
                  mt: 1,
                  whiteSpace: "nowrap", // Prevent text wrapping
                  overflow: "hidden", // Hide overflowed text
                  textOverflow: "ellipsis", // Add ellipsis for overflowed text
                  maxWidth: "80px", // Adjust the max width as needed
                }}
              >
                {story.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "grey", textAlign: "center", mt: 0.5 }}>
                {story.timeAgo}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Stories;
