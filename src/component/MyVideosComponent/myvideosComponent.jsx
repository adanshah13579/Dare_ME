import React from 'react';
import { Box, Typography } from '@mui/material';
import colors from "../../style/color"; // Import colors from your global color file
import UploadComponent from '../UploadVideo/uploadvideo';

const VideosComponent = () => {
  return (
    <Box
      sx={{
        padding: { xs: '16px', sm: '32px' }, // Adjust padding based on screen size
        display: 'flex',
        flexDirection: 'column',
        gap: '8px', // Space between elements
        backgroundColor: colors.background, // Apply the background color from your global colors file
        minHeight: '100vh', // Ensure the box takes the full height of the viewport
      }}
    >
      {/* First Line: Hi James, Welcome back */}
      <Typography
        variant="h6"
        sx={{
          color: '#fff',
          
           fontFamily:'Poppins',
                fontWeight:'500',
          
          fontSize: { xs: '12px', sm: '14px', md: '15px' }, // Responsive font size
        }}
      >
        Hi James, Welcome back
      </Typography>

      {/* Second Line: Your Videos */}
      <Typography
        variant="h6"
        sx={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: { xs: '15px', sm: '22px', md: '28px' }, // Responsive font size
        }}
      >
        Your Videos
      </Typography>
      <UploadComponent/>
    
      
    </Box>
  );
};

export default VideosComponent;
