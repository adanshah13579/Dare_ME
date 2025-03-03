import React from "react";
import { Box, Typography, IconButton,  } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import ModernCard from "../Maincard/maincard";
import colors from "../../style/color";


const RecommendedVideos = () => {
  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 4 },
        backgroundColor: colors.background, // Light background color
      }}
    >
      {/* Top Section: Heading and Category Box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between", // Space between heading and category box
          alignItems: "center",
          marginBottom: "24px", // Space below this section
        }}
      >
        {/* Heading */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "white",
          }}
        >
          Recommended Videos
        </Typography>

        {/* Category Box */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer", // Indicates interactivity
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "white",
              marginRight: "4px", // Space between text and icon
            }}
          >
            Most Recent
          </Typography>
          <IconButton size="small">
            <ArrowDropDown sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>

      {/* Cards Section */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap", // Allow wrapping on smaller screens
          gap: { xs: 1, sm: 2 }, // Space between cards
          justifyContent: { xs: "center", sm: "flex-start" }, // Centered on small screens, left-aligned on larger screens
        }}
      >
        {/* Render 4 Cards */}
        <ModernCard />
        <ModernCard />
        <ModernCard />
        <ModernCard />
      </Box>
    </Box>
  );
};

export default RecommendedVideos;
