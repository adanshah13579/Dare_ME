import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import nftlogo from "../../assets/images/nftlogo.svg";

const BottomG2 = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#201A29",
        backdropFilter: "blur(8px)",
        borderRadius: "12px",
        padding: "12px", // Reduced padding for compactness
        color: "white",
        width: "100%",

        display: "flex",
        flexDirection: "column",
        gap: 2,
        height: "100%",
      }}
    >
      {/* Sale End Date */}
      <Typography color="white" sx={{ opacity: 0.7, fontSize: "12px" }}>
        Sale ends June 29, 2024 at 4:34pm CET
      </Typography>

      {/* Price Section */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.3 }}>
        <Typography
          variant="body2"
          color="white"
          sx={{ opacity: 0.7, fontSize: "12px" }}
        >
          Current price:
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Avatar src={nftlogo} sx={{ width: 25, height: 25 }} />
          <Typography sx={{ fontWeight: 700, fontSize: "20px" }}>
            1500.5
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.6, fontSize: "12px" }}>
            ($95,000.25)
          </Typography>
        </Box>
      </Box>

      {/* Buttons */}
      <Box sx={{ display: "flex", gap: 0.5, mt: 0.5 }}>
        <Button
          sx={{
            flex: 1,
            background: "linear-gradient(90deg, #A020F0, #00BFFF)",
            color: "white",
            fontWeight: "bold",
            borderRadius: "6px", // Smaller border radius
            textTransform: "none",
            fontSize: "15px", // Reduced text size
            padding: "4px 0", // Adjusted height
            minWidth: "auto",
            "&:hover": {
              opacity: 0.9,
            },
          }}
        >
          Buy now
        </Button>
        <Button
          sx={{
            flex: 1,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            border: "1px solid linear-gradient(90deg, #A020F0, #00BFFF)",
            color: "white",
            fontWeight: "bold",
            borderRadius: "6px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            textTransform: "none",
            fontSize: "15px",
            padding: "4px 0",
            minWidth: "auto",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
          }}
        >
          Make offer
        </Button>
      </Box>
    </Box>
  );
};

export default BottomG2;
