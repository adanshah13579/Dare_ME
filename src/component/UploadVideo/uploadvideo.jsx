import React from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import colors from "../../style/color"; // Import colors from your global color file
import UploadIcon from '@mui/icons-material/Upload'; // Import Upload Icon from Material UI
import OtherWaysToUpload from '../OtherwayUpload/otherwayupload';
import ThreeVideoButton from '../ThreeVideosButton/ThreeVideoButton';
import VideoUploadControls from '../VideoUploadControls/videouploadcontrols';
import VideoPageCard from '../VideoPageCard/videopageCard';


const UploadComponent = () => {
  return (
    <>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        gap: '8px', // Space between the elements
        backgroundColor: colors.background, 
        minHeight: '40vh', // Take full height of the viewport
        padding: { xs: '8px', sm: '16px' },
        width:"100%"
        
      }}
    >
      {/* Glass Effect Box */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass effect background color
          // Apply blur for the glass effect
          borderRadius: '12px',
          width: { xs: '75%', sm: '60%', md: '70%' }, // Responsive width
          padding: '32px',
          minHeight: '30vh',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Drag files here to upload */}
        <Typography
          variant="h6"
          sx={{
            color: '#fff',
            textAlign: 'center',
            fontFamily:'Poppins',
            marginBottom: '15px', // Space below the text
            fontSize: { xs: '8px', sm: '11px', md: '14px' },
          }}
        >
          Drag files here to upload
        </Typography>

   {/* Button with Icon and Text */}
<Button
  variant="contained"
  sx={{
    backgroundColor: '#3F8CFF', // Button background color
   
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '8px', // Reduced font size for text on all screens
    borderRadius: '8px', // Apply border radius to button
  }}
>
<IconButton
    sx={{
      color: '#fff',
      padding: 0,
      '&:hover': {
        backgroundColor: 'transparent',
      },
      fontSize: '10px', // Adjust icon size
    }}
  >
    <UploadIcon sx={{ fontSize: '13px' }} /> 
  </IconButton>
  Choose your file
</Button>


      </Box>
      <OtherWaysToUpload/>
      
    </Box>
    <ThreeVideoButton/>
  
    <VideoUploadControls/>
    <Box
  sx={{
    padding: '30px',
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' }, // Column for xs and sm, row for larger screens
    gap: '15px',
    flexWrap: 'wrap', // Allow items to wrap to the next line
    justifyContent: { xs: 'center', sm: 'flex-start' }, // Center for small screens, left-aligned for larger screens
    alignItems: { xs: 'center', sm: 'flex-start' }, // Center vertically for small screens, top-aligned for larger screens
  }}
>
  <VideoPageCard />
  <VideoPageCard />
  <VideoPageCard />
  <VideoPageCard />
</Box>

<Box
  sx={{
    padding: '30px',
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' }, // Column for xs and sm, row for larger screens
    gap: '15px',
    flexWrap: 'wrap', // Allow items to wrap to the next line
    justifyContent: { xs: 'center', sm: 'flex-start' }, // Center for small screens, left-aligned for larger screens
    alignItems: { xs: 'center', sm: 'flex-start' }, // Center vertically for small screens, top-aligned for larger screens
  }}
>
  <VideoPageCard />
  <VideoPageCard />
  <VideoPageCard />
  <VideoPageCard />
</Box>

<Box
  sx={{
    padding: '30px',
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' }, // Column for xs and sm, row for larger screens
    gap: '15px',
    flexWrap: 'wrap', // Allow items to wrap to the next line
    justifyContent: { xs: 'center', sm: 'flex-start' }, // Center for small screens, left-aligned for larger screens
    alignItems: { xs: 'center', sm: 'flex-start' }, // Center vertically for small screens, top-aligned for larger screens
  }}
>
  <VideoPageCard />
  <VideoPageCard />
  <VideoPageCard />
  <VideoPageCard />
</Box>

    </>
  );
};

export default UploadComponent;
