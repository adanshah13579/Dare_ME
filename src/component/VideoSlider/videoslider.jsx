import React from "react";
import { Box, Typography, Card, CardMedia, Button, IconButton } from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi";
import FlagIcon from "@mui/icons-material/Flag";
import FaceIcon from "@mui/icons-material/Face"; // Smile emoji icon
import v1 from "../../assets/images/v1.png";
import tn from "../../assets/images/tn.png";
import colors from "../../style/color";
import FollowerUploaded from "../Followersrecently/followersrecently";

const VideoSlider = () => {
  return (
    <>
    <Box
      sx={{
        padding: { xs: 2, sm: 4 },
        height: "100%",
        backgroundColor: colors.background,
        maxHeight:"100%",
        // Use your background color from the colors file
        
      }}
    >
      {/* Heading Outside the Grey Box */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "white",
          marginBottom: 2, // Space between heading and grey box
        }}
      >
        Live Streaming
      </Typography>

      {/* Main Section with Grey Background */}
      <Box
        sx={{
          backgroundColor: "#F0F3F61A", // Grey background color
          padding: { xs: 1, sm: 2 },
          borderRadius: "12px",
          overflow: "hidden", // Prevent overflow of content
        }}
      >
        {/* Video Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Responsive layout
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap", // Prevent content overflow
          }}
        >
          {/* Left Side: Video Player */}
          <Box
            sx={{
              flex: { xs: "100%", md: "1" }, // Make the video player take full width on small screens
              display: "flex",
              flexDirection: "column",
              gap: 2,
              
              padding: "2px", // Add padding to create space between the grey box and the video player
              overflow: "hidden", // Prevent overflow of the video content
            }}
          >
            {/* Video Player Box */}
            <Box
              sx={{
                aspectRatio: "16 / 9",
                borderRadius: "12px",
                overflow: "hidden",
                backgroundColor: "#000", // Placeholder for video background
                position: "relative",
                height: { xs: "40%", sm: "50%", md: "80%" }, // Adjust for various screens
                width: {xs: "100%", sm: "100%", md: "100%" ,}, // Ensure full width
                maxWidth: "95%", // Ensure the video fits within the parent container
              }}
            >
               {/* Strip Box */}
               <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
                  padding: "5px 15px",
                  borderRadius: "8px",
                  zIndex: 10, // Ensure it sits above the video player
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  24k Watching
                </Typography>
              </Box>
              <CardMedia
                component="img"
                src={v1} // Your video image as placeholder
                controls
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>

            {/* Box for Live Button and Text */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: 1,
              }}
            >
              {/* Live Button */}
              <Button
                variant="contained"
                startIcon={<WifiIcon />}
                sx={{
                  backgroundColor: "#FF4500",
                  color: "#fff",
                  fontSize: "10px",
                  padding: "4px 12px",
                  textTransform: "uppercase",
                  borderRadius: "20px",
                  "&:hover": { backgroundColor: "#e03d00" },
                }}
              >
                Live
              </Button>

              {/* Heading Below Video */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  marginTop: 2,
                }}
              >
                Hack into the McDonald's Drive Thru & make fun of people’s orders
              </Typography>

              {/* "Just Chilling" Text and "English" in One Line */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: 1,
                }}
              >
                <FaceIcon sx={{ color: "#FFD700", fontSize: "20px", marginRight: "8px" }} />
                <Typography variant="body2" sx={{ color: "white", marginRight: "8px" }}>
                  Just Chilling
                </Typography>
                <FlagIcon sx={{ color: "#555", fontSize: "20px", marginRight: "8px" }} />
                <Typography variant="body2" sx={{ color: "white" }}>
                  English
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Right Side: Thumbnail Cards */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "center" },
              alignItems:  { xs: "center", sm: "center" },
              flexDirection: "column",
              gap: 2,
              flex: { xs: "100%", sm: "0.5" },
              
              overflow: "hidden", // Prevent overflow of the cards
              maxWidth: "60%",
              maxHeight: "100",
              minWidth:"30%",
            }}
          >
            {/* Card 1 - Thumbnail Only with Border Radius */}
            <Card
              sx={{
                display: "flex",
                borderRadius: "12px", // Border radius for the card
                overflow: "hidden",
                boxShadow: 2,
                backgroundColor: "#fff",
                height: { xs: "50%", sm: "50%", md: "20%" }, // Adjust height responsively
                width: { xs: "90%", sm: "80%", md: "60%" },
                // Make sure cards take full width on small screens
                
              }}
            >
              <CardMedia
                component="img"
                src={tn}
                alt="Card 1"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Card>
 {/* Card 1 - Thumbnail Only with Border Radius */}
 <Card
              sx={{
                display: "flex",
                borderRadius: "12px", // Border radius for the card
                overflow: "hidden",
                boxShadow: 2,
                backgroundColor: "#fff",
                height: { xs: "50%", sm: "50%", md: "20%" }, // Adjust height responsively
                width: { xs: "90%", sm: "80%", md: "60%" }, // Make sure cards take full width on small screens
                justifyContent: "center", // Center the image
                alignItems: "center", // Align the image in the center
              }}
            >
              <CardMedia
                component="img"
                src={tn}
                alt="Card 1"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Card>
             {/* Card 1 - Thumbnail Only with Border Radius */}
             <Card
              sx={{
                display: "flex",
                borderRadius: "12px", // Border radius for the card
                overflow: "hidden",
                boxShadow: 2,
                backgroundColor: "#fff",
                height: { xs: "50%", sm: "50%", md: "20%" }, // Adjust height responsively
                width: { xs: "90%", sm: "80%", md: "60%" }, // Make sure cards take full width on small screens
                justifyContent: "center", // Center the image
                alignItems: "center", // Align the image in the center
              }}
            >
              <CardMedia
                component="img"
                src={tn}
                alt="Card 1"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Card>
             {/* Card 1 - Thumbnail Only with Border Radius */}
             <Card
              sx={{
                display: "flex",
                borderRadius: "12px", // Border radius for the card
                overflow: "hidden",
                boxShadow: 2,
                backgroundColor: "#fff",
                height: { xs: "50%", sm: "50%", md: "20%" }, // Adjust height responsively
                width: { xs: "90%", sm: "80%", md: "60%" }, // Make sure cards take full width on small screens
                justifyContent: "center", // Center the image
                alignItems: "center", // Align the image in the center
              }}
            >
              <CardMedia
                component="img"
                src={tn}
                alt="Card 1"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Card>
          </Box>
        </Box>
     
      </Box>
      
    </Box>
    
       
       </>
  );
};

export default VideoSlider;
