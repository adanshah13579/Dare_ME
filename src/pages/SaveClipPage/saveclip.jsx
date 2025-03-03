import React from "react";
import { Box, Button, Typography } from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MainLayout from "../../layouts/Mainlayout";
import ModernCard from "../../component/Maincard/maincard";
import ReelCard from "../../component/ReelCard/reelcard";
import girlpic from "../../assets/images/str1.png"
import colors from "../../style/color";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const Saveclips = () => {
  return (
    <MainLayout>
      <Box sx={{ width: "100%", padding: "20px", backgroundColor:colors.background }}>
        {/* Save Clips Heading */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          <Typography variant="h6" fontWeight="bold" sx={{color:"white"}}>
            Saveclips
          </Typography>
          <BookmarkBorderIcon  sx={{color:"white"}} />

        </Box>

    
        <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", sm: "center", md: "flex-start" }, // Center on small screens, align left on medium+
        alignItems: "center",
        flexWrap: "wrap", // Ensure responsiveness
        gap: 2, // Add spacing between cards
        p: 2, // Add padding for better spacing
      }}
    >
        <ModernCard
   
      customButton={
        <Button
        variant="contained"
        startIcon={< DensityMediumIcon  sx={{ fontSize: "18px   !important" }} />}
        sx={{
          backgroundColor: "#5FCCEF",
          fontSize:"12px",
          borderRadius:"10px",
          "&:hover": { backgroundColor: "#5FCCEF" },
          textTransform: "none",
        }}
      >
        Mini Clip
      </Button>
      }
    />
             <ModernCard
   
   customButton={
     <Button
     variant="contained"
     startIcon={< DensityMediumIcon  sx={{ fontSize: "18px   !important" }} />}
     sx={{
       backgroundColor: "#5FCCEF",
       fontSize:"12px",
       borderRadius:"10px",
       "&:hover": { backgroundColor: "#5FCCEF" },
       textTransform: "none",
     }}
   >
     Mini Clip
   </Button>
   }
 />
    
        </Box>

        {/* Save Reels Heading */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 4, mb: 2 }}>
         
          <Typography variant="h6" fontWeight="bold"  sx={{color:"white"}}>
            Save Reels
          </Typography>
          <BookmarkBorderIcon  sx={{color:"white"}}/>
        </Box>

        {/* Save Reels Cards */}
        <Box sx={{  p: 2,display: "flex", flexWrap: "wrap", gap: 2, justifyContent: { xs: "center", sm: "center", md: "flex-start" }, }}>
        <ReelCard imageSrc={girlpic} />
        <ReelCard imageSrc={girlpic} />     
        <ReelCard imageSrc={girlpic} />
        <ReelCard imageSrc={girlpic} />
        <ReelCard imageSrc={girlpic} />   
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Saveclips;
