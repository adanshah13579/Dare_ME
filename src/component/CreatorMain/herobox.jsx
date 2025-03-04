import React from "react";
import { Box, Typography, Card, Button } from "@mui/material";
import { AccessTime, PersonAdd, Visibility } from "@mui/icons-material";
import SmallStar from "../../assets/images/SmallStar.png";
import colors from "../../style/color";
import DashboardLayout from "../ChannelAnalyticsNav/channelanalyticshero";
import AnalyticsDashboard from "./bar";
import FooterSummary from "./footer.jsx"


const StreamSummary = () => {
  return (
    <Box sx={{ backgroundColor: colors.background, padding: { xs: "5%",md:"2%" } }}>
      <Box
        sx={{
          backgroundColor: "#1E2342",
          width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" },
          borderRadius: "20px",
          textAlign: "center",
          position: "relative",
          padding: { xs: "5%", sm: "4%", md: "3%" },
        }}
      >
        {/* Stars Decoration */}
        <Box sx={{ position: "absolute", left: "5%", top: "10%", display: { xs: "none", md: "block" } }}>
          <img src={SmallStar} alt="Star" style={{ width: "30px" }} />
        </Box>
        <Box sx={{ position: "absolute", right: "5%", top: "10%", display: { xs: "none", md: "block" } }}>
          <img src={SmallStar} alt="Star" style={{ width: "30px" }} />
        </Box>

        <Typography variant="h4" sx={{ fontWeight: "bold", color: "white", fontSize: { xs: "20px", md: "30px", lg: "40px" } }}>
          Welcome back, <span style={{ textDecoration: "underline dotted" }}>ShroudTV</span>
        </Typography>

        <Card
  sx={{
    backgroundColor: "#111428",
    color: "white",
    marginTop: { xs: "10%", md: "3%" },
    borderRadius: "15px",
    padding: { xs: "8%", sm: "6%", md: "3%" },
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    maxWidth: { xs: "90%", sm: "90%", md: "80%" }, // Adjusted width
    marginX: "auto", // Centers the card
  }}
>
  <Typography 
    sx={{ 
      fontSize: { xs: "14px", sm: "14px", md: "14px" }, 
      textAlign: "center", 
      marginBottom: { xs: "5%", sm: "3%", md: "2%" } 
    }}
  >
    Latest Stream Summary for the past 7 days
  </Typography>

  <Box 
    display="flex" 
    flexDirection={{ xs: "column", sm: "column", md: "column", lg: "row" }} // Column layout for xs, sm, md, row for lg
    justifyContent={{ xs: "center", sm: "center", md: "center", lg: "space-evenly" }}
    alignItems="center"
    gap={{ xs: 3, sm: 3, md: 3, lg: 5 }}
    paddingX={{ xs: "2%", sm: "5%", md: "5%", lg: "8%" }}
  >
    {[ 
      { icon: <AccessTime />, label: "Average Duration", value: "7h 30m" },
      { icon: <PersonAdd />, label: "New Follows", value: "1.8k" },
      { icon: <Visibility />, label: "Average Viewers", value: "13.5k" }
    ].map((item, index) => (
      <Box 
        key={index} 
        textAlign="center" 
        sx={{ 
          flex: "1 1 auto", 
          width: { xs: "100%", sm: "100%", md: "100%", lg: "auto" }, // Full width for xs, sm, md; auto for lg
          marginBottom: { xs: "3%", sm: "3%", md: "3%", lg: "0%" }
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
          {item.icon}
          <Typography fontSize={{ xs: "12px", sm: "14px", md: "16px", lg: "16px" }}>{item.label}</Typography>
        </Box>
        <Typography fontWeight="bold" fontSize={{ xs: "20px", sm: "24px", md: "26px", lg: "28px" }}>
          {item.value}
        </Typography>
      </Box>
    ))}
  </Box>
</Card>





        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6C5CD3",
            color: "white",
            marginTop: "3%",
            borderRadius: "10px",
            padding: {xs:"12px 40px",sm:"12px 80px",md:"12px 140px", lg:"12px 140px"},
            fontSize: "12px",
            paddingX:"10%",
            textTransform: "none",
          }}
        >
          View Stream Summary
        </Button>
      </Box>
      <AnalyticsDashboard/>
      <FooterSummary/>
    </Box>
  );
};

export default StreamSummary;