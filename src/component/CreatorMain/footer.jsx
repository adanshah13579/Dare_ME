import React from "react";
import { Box, Typography, Button } from "@mui/material";

const FooterSummary = () => {
  return (
    <Box
      sx={{
        marginTop: { xs: "10%", sm: "5%", md: "3%", lg: "2%", xl: "1%" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingX: { xs: "5%", sm: "5%", md: "5%",lg: "0%" },
      }}
    >
      <Box
        sx={{
          backgroundColor: "#1E2342",
          width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" },
          padding: { xs: "5%", sm: "4%", md: "3%", lg: "2.5%" },
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#FFFF",
            fontSize: { xs: "14px", sm: "14px", md: "14px" },
            // fontWeight: "bold",
          }}
        >
          Let your Viewers Know when you will be Live
        </Typography>

        <Typography
          sx={{
            color: "grey",
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
            marginTop: 2,
          }}
        >
          The more consistent you are with your schedule, the more the algorithm will help you gain more viewers.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", marginTop: { xs: "8%", sm: "6%", md: "4%" } }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6C5CD3",
              color: "white",
              fontSize: { xs: "10px", sm: "10px", md: "12px" },
              borderRadius: "10px",
              padding: { xs: "8px 40px", sm: "10px 40px", md: "12px 80px",xl:"20px 180px" },
              textTransform: "none",
              "&:hover": { backgroundColor: "#5a4db8" },
            }}
          >
            Schedule Your Next Stream
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterSummary;
