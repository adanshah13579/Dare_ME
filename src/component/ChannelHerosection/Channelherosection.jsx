import React from "react";
import { Box, Button, Typography } from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi"; // Import the Wifi icon
import str4 from "../../assets/images/str4.png"; // Default image
import colors from "../../style/color";

const Channelherosection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "400px", // Adjust as needed
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "transparent",
        backgroundImage: `url(${str4})`, // Background image
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "5%", // Position content on the left-center
          top: "50%",
          transform: "translateY(-50%)",
          textAlign: "left", // Align content to the left
          backgroundColor: "transparent", // Transparent background
          padding: "10px 20px",
          borderRadius: "8px", // Rounded corners
          zIndex: 1,
          width: "300px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
            fontSize: "16px",
          }}
        >
          <Button
  sx={{
    backgroundColor: "#FF754C", // Orange background for button
    color: "white", // Button text color
    padding: "2px 10px", // Smaller padding for a compact button
    display: "flex",
    alignItems: "center",
    borderRadius: "5px", // Rounded button
    minWidth: "auto", 
    fontSize: "10px",
     // Minimize width for a small button
    gap: "5px", // Add space between icon and text
  }}
  variant="contained"
>
  <WifiIcon sx={{ fontSize: "15px" }} /> {/* Wi-Fi icon inside button */}
  live
</Button>

          
        </Box>
        <Typography
          variant="h6"
          paragraph
          sx={{
            fontSize: "18px",
            color: "white",
            fontFamily: "Poppins",
            marginBottom: "5px",
          }}
        >
          1 White Goy Gets Help, Busy 10 Blssack Dudsss
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px", // Space between the texts
          }}
        >
          <Typography
            variant="body2"
            paragraph
            sx={{
              fontSize: "12px",
              color: "white",
              fontFamily: "Poppins",
            }}
          >
            😎 Just Chilling
          </Typography>
          <Typography
            variant="body2"
            paragraph
            sx={{
              fontSize: "12px",
              color: "white",
              fontFamily: "Poppins",
            }}
          >
            🇺🇸 English
          </Typography>
        </Box>
        <Button
          sx={{
            backgroundColor: colors.buttoncolor, // Button color
            color: "white", // Text color inside button
            padding: "8px 16px",
            fontSize: "14px",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          variant="contained"
        >
          Watch Now
        </Button>
      </Box>
    </Box>
  );
};

export default Channelherosection;
