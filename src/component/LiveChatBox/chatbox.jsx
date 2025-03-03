import React from "react";
import { Box } from "@mui/material";

const ChatBox = () => {
  return (
    <Box
  sx={{
    backgroundColor: "black",
    color: "white",
    width: { xs: "70%", sm: "80%", md: "70%px", lg: "70%" },
    height: { xs: "350px", sm: "400px", md: "400px", lg: "450px" }, // Increased height
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

export default ChatBox;
