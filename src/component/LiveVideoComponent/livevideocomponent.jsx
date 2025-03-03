import React from "react";
import { Box } from "@mui/material";

const Livevideobox = () => {
  return (
    <Box
  sx={{
    backgroundColor: "black",
    color: "white",
    width: { xs: "90%", sm: "80%", md: "70%px", lg: "75%" },
    height: { xs: "400px", sm: "250px", md: "380px", lg: "450px" }, // Increased height
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    boxShadow: 3,
  }}
>
  Square Card
</Box>

  );
};

export default Livevideobox;
