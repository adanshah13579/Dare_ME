import React from 'react';
import { Box, Typography, IconButton, Button, LinearProgress } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Import Arrow icon
import UploadIcon from '@mui/icons-material/Upload'; // Import Upload Icon from Material UI
import Shadow from '../../../public/shadow.svg'

const OtherWaysToUpload = () => {
  return (
    <>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap:"8px",
        backgroundColor: 'rgba(255, 255, 255, 0)', // Transparent background (glass effect)
        width: { xs: '1005', sm: '100', md: '100%' }, // Square shape box
        padding: '16px',
        borderRadius: '8px',
        // Slight shadow for visibility
      }}
    >
      {/* "Other ways to upload" text with Arrow Icon */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Typography
          sx={{
            color: '#888', // Grey text
            fontSize: { xs: '10px', sm: '12px', md: '14px' },
            fontFamily: 'Poppins',
          }}
        >
          Other ways to upload
        </Typography>
        <IconButton
          sx={{
            color: 'white',
            fontSize: { xs: '18px', sm: '20px', md: '24px' }, 
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>

      {/* Second line - Glass Effect Button with Dropbox Icon */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          width: '100%',
          marginTop: '16px',
        }}
      >
        <Button
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.11)', // Glass effect background
            backdropFilter: 'blur(5px)', // Apply blur for the glass effect
            borderRadius: '8px',
            color: '#5F75EE',
            fontSize: { xs: '10px', sm: '12px' },
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 10px rgba(43, 42, 42, 0.1)',
            '&:hover': {
              backgroundColor: 'rgba(26, 25, 25, 0.04)',
            },
          }}
        >
          <UploadIcon sx={{ fontSize: '18px' , color:"white"}} /> {/* Adjust Dropbox Icon size */}
          Dropbox
        </Button>
      </Box>

    
       <Box
        sx={{
          width: '100%',
          marginTop: '30px',
          padding:"10px 0px",
        

          display: 'flex',
          alignItems: 'center', // Aligning percentage box next to the progress bar
          position: 'relative', // Positioning for percentage box
        }}
      >
        <LinearProgress
          variant="determinate"
          value={30} // 30% fill
          sx={{
            height: '6px',
            borderRadius: '4px',
            flexGrow: 1, 
            backgroundColor: '#e0e0e0', 
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#3F8CFF', 
            },
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
            },
          }}
        />
        {/* Percentage Box that appears on hover */}
        <Box
          sx={{
            position: 'absolute',
            top: '-18px', // Position above the progress bar
            left: '30%', // Adjust the position to be at the 30% mark
            backgroundColor: '#4caf50', // Green background for the percentage box
            color: '#fff',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 'bold',
            visibility: 'hidden', // Initially hidden
            opacity: 0, // Initially invisible
            transition: 'visibility 0s, opacity 0.3s linear', // Smooth transition for visibility
            '&:hover': {
              visibility: 'visible', // Make it visible on hover
              opacity: 1, // Make it fully visible
            },
          }}
        >
          30%
        </Box>
      </Box>
      <Typography
        sx={{
          color: '#888', // Grey text
          fontSize: { xs: '6px', sm: '8px', md: '11px' },
          marginTop: '10px',
          fontFamily: 'Poppins',
        }}
      >
        Upgrade for up to 7TB with no weekly limits.
      </Typography>
    </Box>
  
    </>
  );
};

export default OtherWaysToUpload;
