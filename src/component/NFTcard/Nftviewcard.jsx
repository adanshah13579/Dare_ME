import React from "react";
import { Box, Card, CardMedia, Typography, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import nftimage from "../../assets/images/nft.png";

const NFTViewCard = () => {
  return (
    <Card
      sx={{
        width: 300,
        backgroundColor: "#1E1B29",
        color: "white",
        borderRadius: "15px",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Top Right Icon Button */}
      <IconButton
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        }}
      >
        <MoreHorizIcon />
      </IconButton>

      {/* NFT Image */}
      <CardMedia
        component="img"
        image={nftimage}
        alt="NFT"
        sx={{
          width: "100%",
          height: 250,
          objectFit: "cover",
        }}
      />

      {/* Frosted Glass Stats Box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 15px",
          backdropFilter: "blur(20px)", // Stronger blur effect
          backgroundColor: "#0C081566", // More transparent
          border: "1px solid rgba(255, 252, 252, 0.1)", // Subtle border for glass effect
          borderRadius: "0px 0px 15px 15px", // Rounded bottom corners
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <VisibilityIcon sx={{ fontSize: 18 }} />
          <Typography sx={{ fontSize: "0.8rem" }}>560k</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <ChatBubbleOutlineIcon sx={{ fontSize: 18 }} />
          <Typography sx={{ fontSize: "0.8rem" }}>290</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <RepeatIcon sx={{ fontSize: 18 }} />
          <Typography sx={{ fontSize: "0.8rem" }}>152</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <FavoriteBorderIcon sx={{ fontSize: 18 }} />
          <Typography sx={{ fontSize: "0.8rem" }}>93k</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default NFTViewCard;
