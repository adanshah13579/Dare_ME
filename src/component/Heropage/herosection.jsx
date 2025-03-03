import React from "react";
import { Box, Button, Typography, Avatar } from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi";
import strImage from "../../assets/images/str2.png";
import colors from "../../style/color"; 


const HeroSection = () => {
  return (
    <Box
      sx={{
        
        position: "relative",
        height: { xs: "60vh", md: "80vh" },
        backgroundImage: `url(${strImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: { xs: "20px", md: "40px" },
        color: "white",
        
        
      }}
    >
      {/* Content Section */}
      <Box
        sx={{
          maxWidth: "800px",
          backgroundColor: "rgba(0, 0, 0, 0)",
          padding: { xs: "20px", md: "30px" },
          borderRadius: "10px",
        }}
      >
        {/* Live Demo Icon and Text */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <Button
          variant="contained"
          sx={{
            backgroundColor: "#E85B5B", // Red background for the button
            color: "white",
            fontWeight: "bold",
            borderRadius:"10px",
            fontSize: { xs: "12px", sm: "14px" },
            textTransform: "uppercase",
            padding: "8px 19px",
            marginBottom: "10px",
            "&:hover": {
              backgroundColor: "#E85B5B",
            },
            display: "flex",
            alignItems: "center",
          }}
        >
          <WifiIcon sx={{ marginRight: "5px" }} />
          Doing a Live Dare
        </Button>
        </Box>

        {/* Small Heading */}
        <Typography
          variant="caption"
          sx={{ marginBottom: "10px", fontSize: { xs: "16px", sm: "18px" } }}
        >
Current Dare: $500 USD        </Typography>

        {/* Large Heading */}
        <Typography
  variant="h3"
  sx={{
    fontWeight: "bold",
    fontSize: { xs: "24px", sm: "32px", md: "40px" },
    marginBottom: "20px",
  }}
>
  Get a girl’s number in{" "}
  <span style={{ color: "#FFB800" }}>10 minutes</span>
</Typography>


        {/* Avatar and Name */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "25px",
          }}
        >
          <Avatar
            src="https://via.placeholder.com/60"
            alt="John Doe"
            sx={{ marginRight: "10px", width: "40px", height: "40px" }}
          />
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "16px", sm: "18px" } }}
          >
            John Doe
          </Typography>
        </Box>

        {/* Watch Now Button */}
        <Button
          variant="contained"
          sx={{
            borderRadius:"10px",
            backgroundColor: colors.buttoncolor,
            
            "&:hover": { backgroundColor: "orange" },
          }}
        >
          Watch Now
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
