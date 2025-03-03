import React, { useState } from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import MicIcon from '@mui/icons-material/Mic';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import colors from "../../style/color"; // Import colors from your global color file

const StreamingScreen = () => {
    const [activeIcons, setActiveIcons] = useState({
        videocam: false,
        mic: false,
        screenShare: false,
        more: false,
      });
    
      // Handle icon click, toggle active state
      const handleIconClick = (icon) => {
        setActiveIcons((prevState) => ({
          ...prevState,
          [icon]: !prevState[icon],
        }));
      };

 

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: colors.background,
        overflow: 'hidden',
      }}
    >
      {/* Glass Effect Box */}
      <Box
        sx={{
          width: { xs: '95%', sm: '85%', md: '85%', lg: '70%' },
          height: { xs: '65%', sm: '75%', md: '80%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#6262621A',
         
          borderRadius: '16px',
          
          padding: '16px',
          color: '#fff',
          textAlign: 'center',
          position: 'relative', 
        }}
      >
        {/* Centered Buttons */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
  <Button
    variant="contained"
    sx={{
        borderRadius: "15px",
        fontWeight: 250, 

        
      background: 'linear-gradient(to right, #9b59b6, #e91e63)', // Purple to Pink gradient
      color: '#fff',
      '&:hover': { 
        background: 'linear-gradient(to right, #8e44ad, #c2185b)', // Darker gradient on hover
      },
    }}
  >
    Start Streaming
  </Button>
  <Typography
    variant="body2"
    sx={{
      color: 'rgba(255, 255, 255, 0.7)',
      cursor: 'pointer',
      textDecorationThickness: '2px',
      '&:hover': {
        color: 'rgba(255, 255, 255, 0.9)',
      },
    }}
  >
    Cancel
  </Typography>
</Box>


         {/* Bottom Center Icons - Inside Glass Container */}
         <Box
        sx={{
          position: 'absolute',
          bottom: '20px', // Positioning icons at the bottom
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <IconButton
          onClick={() => handleIconClick('videocam')}
          sx={{
            color: '#fff',
            backgroundColor: activeIcons.videocam ? '#760000A6' : 'rgba(255, 255, 255, 0.2)',
            textDecoration: activeIcons.videocam ? 'line-through' : 'none', // Apply line-through when active
            '&:hover': {
              backgroundColor: activeIcons.videocam ? 'darkred' : 'rgba(255, 255, 255, 0.4)',
            },
          }}
        >
          <VideocamIcon fontSize="medium" />
        </IconButton>
        <IconButton
          onClick={() => handleIconClick('mic')}
          sx={{
            color: '#fff',
            backgroundColor: activeIcons.mic ? '#760000A6' : 'rgba(255, 255, 255, 0.2)',
            textDecoration: activeIcons.mic ? 'line-through' : 'none', // Apply line-through when active
            '&:hover': {
              backgroundColor: activeIcons.mic ? 'darkred' : 'rgba(255, 255, 255, 0.4)',
            },
          }}
        >
          <MicIcon fontSize="medium" />
        </IconButton>
        <IconButton
          onClick={() => handleIconClick('screenShare')}
          sx={{
            color: '#fff',
            backgroundColor: activeIcons.screenShare ? '#760000A6' : 'rgba(255, 255, 255, 0.2)',
            textDecoration: activeIcons.screenShare ? 'line-through' : 'none', // Apply line-through when active
            '&:hover': {
              backgroundColor: activeIcons.screenShare ? 'darkred' : 'rgba(255, 255, 255, 0.4)',
            },
          }}
        >
          <ScreenShareIcon fontSize="medium" />
        </IconButton>
        <IconButton
          onClick={() => handleIconClick('more')}
          sx={{
            color: '#fff',
            backgroundColor: activeIcons.more ? '#760000A6' : 'rgba(255, 255, 255, 0.2)',
            textDecoration: activeIcons.more ? 'line-through' : 'none', // Apply line-through when active
            '&:hover': {
              backgroundColor: activeIcons.more ? 'darkred' : 'rgba(255, 255, 255, 0.4)',
            },
          }}
        >
          <MoreHorizIcon fontSize="medium" />
        </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default StreamingScreen;
