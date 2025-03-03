import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import colors from "../../style/color"; // Global color import
import str4 from "../../assets/images/str4.png"; // Default image

const SquareCard = ({
  imageSrc = str4,
  title = "Just Chilling",
  watchingCount = "1.4K",
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" }, // Larger size for medium and large screens
        height: { xs: "300px", sm: "100%", md: "100%", lg: "100%" }, // Increased height for larger screens
        overflow: "hidden",
        borderRadius: "16px",
        boxShadow: 3,
      }}
    >
      {/* Image Section */}
      <Box
        component="img"
        src={imageSrc}
        alt="Card Image"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

      {/* Overlay for Text */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.4)", // Semi-transparent black overlay
        }}
      >
        {/* Left and Right Arrow Icons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            top: "30px",
            left: "30px",
            right: "10px",
            zIndex: 1,
            gap: "10px", // Adds spacing between icons
          }}
        >
          {/* ArrowBack with circular background */}
          <Box
            sx={{
              width: "40px", // Adjust size for the circle
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(250, 249, 249, 0.94)", // Semi-transparent black background
              borderRadius: "50%", // Makes it circular
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(250, 249, 249, 0.94)", // Darker on hover
              },
            }}
          >
            <ArrowBack sx={{ color: "black", fontSize: 25 }} />
          </Box>

          {/* ArrowForward with circular background */}
          <Box
            sx={{
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(250, 249, 249, 0.94)",
              borderRadius: "50%",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(250, 249, 249, 0.94)",
              },
            }}
          >
            <ArrowForward sx={{ color: "black", fontSize: 25 }} />
          </Box>
        </Box>

        {/* Content Section (Text and Button at the bottom left) */}
        <Box
          sx={{
            position: "absolute",
            bottom: "16px",
            left: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            zIndex: 2,
          }}
        >
          {/* Heading */}
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: "bold",
              marginBottom: "8px",
              fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "24px" },
               fontFamily:'Poppins',
                fontWeight:'500'
             
            }}
          >
            {title}
          </Typography>

          {/* Watching Count with Green Dot */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "8px",
                height: "8px",
                backgroundColor: "green",
                borderRadius: "50%",
                marginRight: "8px",
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "white",
                fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "10px" },
                fontFamily:'Poppins',
                fontWeight:'300'
              }}
            >
              {watchingCount} watching
            </Typography>
          </Box>

          {/* Follow Button */}
          <Button
            variant="contained"
            color="secondary"
            sx={{
              backgroundColor: colors.buttoncolor, // Button color from global colors
              "&:hover": {
                backgroundColor: colors.hoverBackground, // Hover effect from global colors
              },
              marginTop: "8px",
              borderRadius: "16px",
              fontSize: { xs: "10px", sm: "12px", md: "14px", lg: "11px" }, // Smaller font size
              padding: { xs: "8px 16px", sm: "10px 20px" }, // Consistent padding
              minWidth: "131ox", // Maintain width
              minHeight: "46px", // Maintain height
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.6)", // Default shadow (elevation)
              transition: "box-shadow 0.3s ease-in-out", 
            }}
          >
            Follow
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SquareCard;
