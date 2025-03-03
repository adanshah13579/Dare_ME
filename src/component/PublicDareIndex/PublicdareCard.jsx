import React from "react";
import { Box, Card, Typography, Divider, LinearProgress } from "@mui/material";
import pb from "../../assets/images/pb.png";
import colors from "../../style/color";

const PublicSquareCard = ({ icon = pb, title = "Tattoo a duck on your face", isLoading = true }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        backgroundColor: colors.background,  // Use the background color defined in colors
        width: '270px',
        height: '270px',
        padding: 2,
        boxShadow: '0 4px 10px rgba(255, 255, 255, 0.69)',  // White box shadow
        borderRadius: '20px',  // Increased border radius for more rounded corners
        border: '5px solid transparent',  // Transparent border to make room for the gradient
        background: 'linear-gradient(45deg, #3437F1,#111428', // Gradient applied as background
        padding: '10px',
         // Adds space between the border and content// Gradient border
        minWidth:{xs:"250px"}
      }}
    >
      {/* Icon and Title */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 3,
          width: '100%',
          marginTop:"5px",
        }}
      >
        {/* Icon */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <img src={icon} alt="icon" style={{ width: '35px', height: '35px' }} />
        </Box>

        {/* Title */}
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 'bold', color: 'white' }}
        >
          {title}
        </Typography>
      </Box>

      {/* Divider */}
      <Divider sx={{ width: '100%',  borderColor: 'white' }} />
      

      {isLoading && (
  <Box sx={{ width: '100%' }}>
   
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
      <Typography 
        variant="caption" 
        sx={{ color: 'white', fontSize: '12px' }}
      >
        people like this idea 
        <span style={{ fontSize: '16px',  }}> 60% </span>
      </Typography>
    </Box>


    <Box sx={{ width: '100%' }}>
      <LinearProgress
        variant="determinate"
        value={60}
        sx={{
          height: "8px",
          borderRadius: "5px",
          backgroundColor: '#FF3535',
          '& .MuiLinearProgress-bar': { backgroundColor: 'white' },
        }}
      />
    </Box>
  </Box>
)}



    </Card>
  );
};

export default PublicSquareCard;
