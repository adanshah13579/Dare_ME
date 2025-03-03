import React from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import colors from "../../style/color";

const CardComponent = ({ imageSrc, text,SideBar = true }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "87%",
        height: "230px",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: 2,marginTop:'10px',
        marginLeft:'10px'
      }}
    >
      <Box
        component="img"
        src={imageSrc}
        alt="Card Image"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity:"0.6"
        }}
      />

      <IconButton
        sx={{
          position: "absolute",
          top: "8px",
          right: "8px",
          color: colors.textColor,
          backgroundColor: "transparent",
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* Main Text */}
      <Box
        sx={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width:"100%"
        }}
      >
        <Typography
          variant="h5"
          sx={{ color: colors.textColor, fontWeight: "bold" }}
        >
          {text}
        </Typography>
      </Box>

      {/* Small Heading Below "Awesome Card" */}
      {SideBar && 
      <Box
        sx={{
          position: "absolute",
          top: "55%", // Adjust to place below main text
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        
          width:'90%'
        }}
      >
        <Typography variant="caption" sx={{ color: "#EFEFEF", fontWeight: "600" }}>
        Take on challenges and make quick cash!
        </Typography>
      </Box>
     }


     

      {/* Join Now Button */}
     
      <Box
        sx={{
          position: "absolute",
          bottom: "13px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          
          textAlign: "center",
        
        }}
      >
        <Button
          variant="contained"
          color="primary"
          
          sx={{
            backgroundColor: "#6C5CD3", // Button color
            "&:hover": {
              backgroundColor: "#5742a1", // Hover effect
            },
            borderRadius: "10px",

          }}
        >
          Join Now
        </Button>
      </Box>
    </Box>
  );
};

export default CardComponent;
