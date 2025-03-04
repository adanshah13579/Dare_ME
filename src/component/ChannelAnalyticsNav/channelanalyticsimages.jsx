import React from "react";
import { Box, Typography, Avatar,Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Icon1 from "../../assets/images/icon1.png";
import Creator from "../../assets/images/creatorimg.png";
import dot from "../../assets/images/dot.png";
import dot2 from "../../assets/images/dot2.png";
import { Divider } from "@mui/material";

const ChannelAnalyticsCard = ({ image, title, views, time, profilePic }) => {
  return (
    <>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#242731",
        borderRadius: "15px",
        paddingTop: "6px",
        paddingLeft: "6px",
        paddingRight: "12px",
        // marginLeft:{md:"100%"},
        gap: "12px",
        width: {xs:"100%",sm:"80%",md:"100%",lg:"110%",xl:"170%"},
        height: "100%",
        position: "relative",
        flexDirection: { xs: "column", sm: "column",md:"row",lg:"row",xl:"row" } 
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          flex: { xs: 1, sm: 1,md:"none" },
          height: { xs: "20%", sm: "100%",md:"100%" }, 
          width: { xs: "100%", sm: "100%",md:"50%",lg:"20%" },
          borderRadius: "10px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={Creator}
          alt="Thumbnail"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Details Section */}
      <Box sx={{ flex: 1, width: "100%" }}>
        {/* Title and Dots */}
        <Box
          sx={{
            display: "flex",
            flexDirection:{xs:"column",sm:"column" ,md:"row",lg:"row"},
            alignItems: {md:"flex-start",lg:"center"},
            gap: "12px",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              color: "#FFF",
              fontSize: {xs:"18px",sm:"20px",md:"18px",lg:"12px"},
              width: { xs: "100%", sm: "70%", md: "50%" },
              lineHeight: 1.3,
              wordWrap: "break-word",
            }}
          >
            {title}
          </Typography>

          {/* Views and Time */}
          <Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: "5px",
    flexWrap: "wrap",
    flexGrow: 1,
  }}
>

  <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
  {/* First dot and views */}
  <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
    <img src={dot} alt="dot" sx={{ width: { xs: "14px", sm: "12px", md: "6px",lg:"6px" }, height: { xs: "14px", sm: "12px", md: "6px",lg:"6px" }}} />
    <Typography sx={{ color: "#AAA", fontSize: {xs:"20px",sm:"20px",md:"12px",lg:"12px"}  }}>{views}</Typography>
  </Box>

  {/* Pushes the second dot and time further to the right */}
  <Box sx={{ display: "flex", alignItems: "center", gap: "5px", flexGrow: 1, justifyContent: "flex-end" }}>
  <img 
  src={dot2} 
  alt="dot" 
  // style={{ height: "6px" }} 
  sx={{ width: { xs: "14px", sm: "12px", md: "6px",lg:"6px" }, height: { xs: "14px", sm: "12px", md: "6px",lg:"6px" }}} 
/>

    <Typography sx={{ color: "#AAA", fontSize: {xs:"20px",sm:"20px",md:"12px",lg:"12px"} }}>{time}</Typography>
  </Box>
</Box>


</Box>


          {/* More (three dots) Icon */}
          <MoreHorizIcon
            sx={{
              fontSize: "20px",
              color: "#AAA",
              marginLeft: "auto",
              display:{xs:"none",md:"none",lg:"block"}
            }}
          />
        </Box>

        {/* Profile Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px", mt: 1 }}>
          <Avatar src={profilePic} sx={{ width: {xs:"30",sm:"30",md:"20",lg:"20px"}, height: {xs:"30",sm:'30',md:"10",lg:"20px"} }} />
          <Typography sx={{ color: "#AAA", fontSize: {xs:"18px",sm:"18px",md:"18px",lg:"12px"}}}>
            Just Chilling
          </Typography>
        </Box>
      </Box>
    </Box>
    </>

  );
};

const ChannelAnalyticsImages = () => {
  return (
    <Box sx={{ padding: "10px",marginTop:"5%",marginLeft:"3%" }}>
    <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ color: "#fff", fontSize: "12px" }}>
          Your top videos in this period
        </Typography>

        <Box sx={{marginLeft:{xs:"10%",sm:"30%",md:"48%"}}}>
        <Button
        variant="contained"
        sx={{
          backgroundColor: "#242731",
          color: "#AAA",
          textTransform: "none",
          fontSize: "12px",
          borderRadius: "10px",
          padding: "6px 12px",
          display: "flex",
          alignItems: "center",
          "&:hover": { backgroundColor: "#2e3038" },
        }}
      >
        Date uploaded
        <ArrowDropDownIcon sx={{ marginLeft: "6px", fontSize: {xs:"14px",md:"16px"} }} />
      </Button>
        </Box>

      </Box>

      <Box sx={{display:{xs:"none",sm:"none",md:"block"}}}>

      <Box sx={{ display: "flex", mt: 5,marginLeft:"1%" }}>
        <Typography sx={{ color: "#AAA", fontSize: "10px" }}>Video</Typography>
        <Typography sx={{ color: "#AAA", fontSize: "10px",marginLeft:"65%" }}>Views</Typography>
        <Typography sx={{ color: "#AAA", fontSize: "10px",marginLeft:"15%" }}>Average</Typography>
      </Box>
      <Divider sx={{ backgroundColor: "#AAA", opacity: 0.2, mt: 3, width: "100%" }} />
      </Box>

      <Box
        sx={{
            mt:2,
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "column", lg: "column" },
          gap: "20px",
        }}
      >
        <ChannelAnalyticsCard
          image={Creator}
          title="1 white guy gets fucked by 10 black dudes"
          views="8.1M views"
          time="10:42 (9.86%)"
          profilePic={Icon1}
        />

<ChannelAnalyticsCard
          image={Creator}
          title="1 white guy gets fucked by 10 black dudes"
          views="8.1M views"
          time="10:42 (9.86%)"
          profilePic={Icon1}
        />

<ChannelAnalyticsCard
          image={Creator}
          title="1 white guy gets fucked by 10 black dudes"
          views="8.1M views"
          time="10:42 (9.86%)"
          profilePic={Icon1}
        />

<ChannelAnalyticsCard
          image={Creator}
          title="1 white guy gets fucked by 10 black dudes"
          views="8.1M views"
          time="10:42 (9.86%)"
          profilePic={Icon1}
        />

<ChannelAnalyticsCard
          image={Creator}
          title="1 white guy gets fucked by 10 black dudes"
          views="8.1M views"
          time="10:42 (9.86%)"
          profilePic={Icon1}
        />
      </Box>
    </Box>
  );
};

export default ChannelAnalyticsImages;
