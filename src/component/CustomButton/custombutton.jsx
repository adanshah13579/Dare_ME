import React from "react";
import { Box, Button } from "@mui/material";
import Arrow from "../../assets/images/arrow.png"
import Favorite from "../../assets/images/favorite.png"
import Playlist from "../../assets/images/playlist.png"

const CustomButton = () => {
  return (
    <>
    <Box>
   <Button sx={{backgroundColor:"#6C5DD3",width:"10px",height:"200px",borderRadius:"10px",display:"flex",flexDirection:"column",gap:"30px"}}>
    <img src={Arrow} alt="" />
    <img src={Playlist} alt="" style={{height:"40px"}}/>
    <img src={Favorite} alt="" />
   </Button>

    </Box>
    </>
  );
};

export default CustomButton;
