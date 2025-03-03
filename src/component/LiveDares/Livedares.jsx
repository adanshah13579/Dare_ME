import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import colors from "../../style/color"; // Import colors from your global color file
import ModernCard from "../Maincard/maincard";

const LiveDares = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: 4, backgroundColor: colors.background }}>
  
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h5" sx={{ color: "white", fontWeight: "bold" }}>
          Live Dares
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
            Popular
          </Typography>
          <IconButton sx={{ color: "white", ml: 1 }}>
            <KeyboardArrowDownIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "space-between", lg:"start" }, 
          flexWrap: "wrap",  // Wraps cards on smaller screens
          gap: { xs: 1, sm: 2 , }, // Smaller gap on small screens
          alignItems: "center", // Align cards to the center vertically
        }}
      >
        <ModernCard />
        <ModernCard />
        <ModernCard />
        <ModernCard />
      </Box>
    </Box>
  );
};

export default LiveDares;
