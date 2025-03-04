import React from "react";
import { Box, Typography, Button, useTheme, useMediaQuery,LinearProgress } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
// import { BarChart } from "@mui/x-charts/BarChart";
import colors from "../../style/color";
import SearchNavbar from "./channelanalyticsnav";
import LineBar from "../../assets/images/line.png";
import BarChartIcon from "@mui/icons-material/BarChart";
import ChannelAnalyticsImages from "./channelanalyticsimages";
import ChannelAnalyticsVideo from "./channelanalyticsvideo";
import { BarChart } from '@mui/x-charts/BarChart';
import icon1 from "../../assets/images/icon1.svg"
import icon2 from "../../assets/images/icon2.svg"
import icon3 from "../../assets/images/icon3.svg"
import icon4 from "../../assets/images/icon4.svg"

// Reusable Card Component
const DashboardCard = ({ title, img, value,progress, color }) => (
  <Box
  sx={{
    flex: 1,
    padding: 2,
    borderRadius: "10px",
    textAlign: "center",
    color: "white",
    minWidth: "20%",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#242731",
  }}
>
  {/* Title & Icon */}
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <img src={img} alt="" style={{ width: "15px" }} />
    <Typography sx={{ color, fontSize: "10px" }}>{title}</Typography>
  </Box>

  {/* Value */}
  <Typography variant="h5" fontWeight="bold" textAlign="left">
    {value}
  </Typography>

  {/* Progress Bar */}
  <LinearProgress
    variant="determinate"
    value={progress}
    sx={{
      height: "4px",
      borderRadius: "2px",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      "& .MuiLinearProgress-bar": { backgroundColor: color }, 
    }}
  />
</Box>
);

const DashboardLayout = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box sx={{ backgroundColor: colors.background, minHeight: "100vh", pb: 3 }}>
      <SearchNavbar />

<Box sx={{display:"flex",gap:14,flexDirection: isSmallScreen ? "column" : "row"}}>

      <Box
        sx={{
          padding: 3,
          borderRadius: 3,
          backgroundColor: "#242731",
          width: { xs: "90%", sm: "80%", md: "85%", lg: "50%" }, 
          marginLeft:"4%" ,
          marginTop:"3%"
        }}
      >
        {/* Real-time Users Active */}
        <Typography sx={{ color: "#fff", fontSize: "14px" }}>Real-time Users Active 💡</Typography>

        {/* Analytics Box */}
        <Box sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", gap: 2 }}>
          {/* Left Side */}
          <Box
            sx={{
              paddingTop: 3,
              borderRadius: "10px",
              color: "white",
              width: isSmallScreen ? "100%" : "30%", // Adjust width
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography fontWeight="bold" sx={{ fontSize: "50px",fontFamily:"poppins" }}>687</Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FF9671",
                  color: "#8461C9",
                  borderRadius: "12px",
                  minWidth: "10px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#FF785A" },
                }}
              >
                <AdjustIcon sx={{ color: "white" }} />
              </Button>

              <Typography sx={{ textAlign: "start", color: "#6C5DD3", fontSize: "12px" }}>
                Views per <br /> minute
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
              <Box component="img" src={LineBar} sx={{ width: 80, height: 20 }} />
              <Typography
                variant="body2"
                sx={{
                  backgroundColor: "#6D5DFD",
                  padding: "2px 6px",
                  borderRadius: "12px",
                  fontWeight: "bold",
                }}
              >
                6%
              </Typography>
            </Box>

            <Typography variant="body2" sx={{ color: "gray", mt: 2, fontSize: "12px" }}>
              Update your payout method in Settings
            </Typography>
          </Box>

          {/* Right Side - Bar Chart */}
          <Box
            sx={{
              backgroundColor: "#6C5DD3",
              borderRadius: "10px",
              color: "white",
              display: "flex",
              justifyContent: "center",
              marginTop:"7%",
              alignItems: "center",
              width: isSmallScreen ? "100%" : "70%", // Adjust width
              height: isSmallScreen ? "250px" : "200px", // Adjust height
              
            }}
          >
            <BarChart
              series={[{ data: [1000, 600, 400, 400, 600, 700], color: "#FFFFFF" }]}
              width={isSmallScreen ? 280 : 300} // Adjust width for smaller screens
              height={isSmallScreen ? 250 : 200} // Adjust height for smaller screens
            />
          </Box>
        </Box>

        {/* Footer Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            justifyContent: "space-between",
            gap: isSmallScreen ? 2 : 0,
            mt: 3,
          }}
        >
          <DashboardCard  title="Views" img={icon3} value="1.5m" color="#808191" />
          <DashboardCard  title="Watch Time" img={icon2} value="1m" color="#808191" />
          <DashboardCard  title="Subscribers" img={icon3} value="529k" color="#808191" />
          <DashboardCard  title="Earning" img={icon2} value="478$" color="#808191" />
        </Box>
      </Box>

      <Box
      sx={{
        marginTop:"3%",
        backgroundColor: "#242731", 
        borderRadius: "20px",
        padding: "20px",
        width: { xs: "90%", sm: "80%", md: "85%", lg: "25%" },
        marginLeft:{xs:"4%",sm:"4%",md:"4%",lg:"0%"},
        marginTop:{xs:"-15%",sm:"-15%",md:"3%"},
        textAlign: "center",
        color: "white",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
      }}
    >

      <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100px",
        width: "150px",
      }}
    >
      <BarChart
        series={[
          { data: [200,100,70,50,80], color: "#A0D7E7" }, 
        ]}
        width={120}
        height={80}
        margin={{ top: 0, bottom: 0, left: 0, right: 0 }} 
        disableAxis
      />
    </Box>

      {/* Earnings Text */}
      <Typography variant="body2" sx={{ fontSize: "14px", color: "#ffff" }}>
        Earning this month
      </Typography>

      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#6C5DD3",fontSize:"50px" }}>
        $456
      </Typography>

      <Typography variant="body2" sx={{ fontSize: "12px", color: "gray", mt: 1 }}>
        Update your payout <br />method in Settings
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#6C5DD3",
          color: "white",
          borderRadius: "10px",
          textTransform: "none",
          fontSize: "12px",
          mt: 2,
          "&:hover": { backgroundColor: "#5B4ED0" },
        }}
      >
        Withdraw All Earning
      </Button>
    </Box>

</Box>

<Box sx={{display:'flex',flexDirection:{xs:"column",sm:"column",md:"column",lg:"row"}}}>

    {/* <Box sx={{width:"70%"}}> */}
    <ChannelAnalyticsImages/>
    {/* </Box> */}

    {/* <Box sx={{width:"20%"}}> */}

    <ChannelAnalyticsVideo/>
    {/* </Box> */}
</Box>
    </Box>
  );
};

export default DashboardLayout;
