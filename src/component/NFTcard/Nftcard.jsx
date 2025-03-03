import React from "react";
import { Box, Typography, Card, CardMedia, Avatar, useMediaQuery, useTheme } from "@mui/material";
import nftimage from "../../assets/images/nft.png";
import nftlogo from "../../assets/images/nftlogo.svg";
import verified from "../../assets/images/verified.svg";

const NFTCard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card
      sx={{
        width: isSmallScreen ? "100%" : isMediumScreen ? "48%" : "32%",
        maxWidth: "500px",
        backgroundColor: "#181425",
        color: "white",
        borderRadius: "15px",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        height: isSmallScreen ? "380px" : "380px",
      }}
    >
      {/* NFT Image */}
      <CardMedia
        component="img"
        image={nftimage}
        alt="NFT"
        sx={{
          width: "100%",
          height: isSmallScreen ? "100%" : "100%",
          objectFit: "cover",
        }}
      />

      {/* Floating Badge (Top G) */}
      <Box
  sx={{
    position: "absolute",
    bottom: {
      xs: "36%", // Adjust for extra small screens
      sm: "30%", // Adjust for small screens
      md: "37%", // Adjust for medium screens
      lg: "39%", // Adjust for large screens
    },
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#14121E",
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    px: 1.5,
    py: 1.5,
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
    zIndex: 2,
    transition: "bottom 0.3s ease-in-out",
  }}
>
  <Avatar
    src={nftimage}
    variant="square"
    sx={{
      width: 20,
      height: 20,
      border: "1px solid #00FFF0",
      borderRadius: "2px",
    }}
  />
  <Avatar src={verified} sx={{ width: 18, height: 18 }} />
  <Typography sx={{ fontSize: "0.8rem", fontWeight: 400 }} color="white">
    Top G
  </Typography>
</Box>


      {/* Overlay Content */}
    {/* Overlay Content */}
<Box
  sx={{
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: {
      xs: "40%", // Extra small screens
      sm: "40%", // Small screens
      md: "43%", // Medium screens
      lg: "43%", // Large screens
    },
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: {
      xs: "8px",
      sm: "10px",
      md: "12px",
      lg: "14px",
    },
    borderRadius: "0px 0px 15px 15px",
  }}
>

        {/* First Row */}
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, mb: 0.5, mt: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Avatar src={verified} sx={{ width: 16, height: 16 }} />
            <Typography sx={{ fontSize: "0.8rem" }} color="white">
              Bottom G
            </Typography>
          </Box>
          <Typography sx={{ fontSize: "0.8rem" }} color="white">
            Floor price:
          </Typography>
          <Typography sx={{ fontSize: "0.8rem" }} color="white">
            Volume traded:
          </Typography>
        </Box>

        {/* Second Row */}
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, mb: 1 }}>
          <Typography sx={{ fontSize: "0.8rem" }} color="white">
            Items: <b>1</b>
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.2 }}>
            <Avatar src={nftlogo} sx={{ width: 16, height: 16 }} />
            <Typography sx={{ fontSize: "0.8rem" }} color="white">
              <b>1500.25</b>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.2 }}>
            <Avatar src={nftlogo} sx={{ width: 16, height: 16 }} />
            <Typography sx={{ fontSize: "0.8rem" }} color="white">
              <b>1228.13</b>
            </Typography>
          </Box>
        </Box>

        {/* Description */}
        <Typography color="white" sx={{ fontSize: "0.75rem", fontWeight: 300 }}>
          Investing in NFTs is not just about owning digital art, but also capturing impactful moments of the digitized era.
          Bottom G gives you an opportunity to hold ownership over major influential milestones of popular celebrities.
        </Typography>
      </Box>
    </Card>
  );
};

export default NFTCard;
