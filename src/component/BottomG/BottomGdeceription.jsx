import React from "react";
import { Box, Typography, Avatar, Link } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import colors from "../../style/color";

const BottomGDescription = () => {
  return (
    <Box
      sx={{
        backgroundColor: colors.background,
        backdropFilter: "blur(8px)",
        borderRadius: "15px",
        padding: "16px",
        color: "white",
        width: "100%",
        
        display: "flex",
        flexDirection: "column",
        gap: 2, 
        height:"100%",
      
      }}
    >
      {/* Header Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Created by
        </Typography>
        <Avatar
          src="https://i.pravatar.cc/40"
          sx={{ width: 24, height: 24 }}
        />
        <Typography variant="body2" fontWeight={600}>
          Mentalen
        </Typography>
        <VerifiedIcon sx={{ color: "#A97AFF", fontSize: 16 }} />
      </Box>

      {/* Clip NFT Info */}
      <Typography variant="body2">
        <Link href="#" underline="hover" color="#A97AFF" fontWeight={600}>
          Clip NFT - You will own the first 30 seconds
        </Link>{" "}
        of Bottom G’s online appearance as a video (mp4) on a decentralized
        secure blockchain.
      </Typography>

      {/* NFT Explanation */}
      <Typography variant="body2" sx={{ opacity: 0.8 }}>
        This exclusive NFT represents a unique digital snapshot of this
        momentous occasion. The image captures Adin’s reaction, the ambiance of
        the event, and the symbolism of the crowning. This one-of-a-kind
        digital asset is not just a video piece, it’s a landmark of the
        digital age and the combination of popularity and technology.
      </Typography>

      {/* Cultural Value */}
      <Typography variant="body2" sx={{ opacity: 0.8 }}>
        As a digital representation of a significant moment in pop culture,
        Bottom G #0001 carries immense potential for appreciation. By investing
        in this NFT, you are investing in the cultural impact and future
        potential of two influential figures in the digital world - Andrew Tate
        and Adin Ross.
      </Typography>

      {/* NFT Investment Benefits */}
      <Typography variant="body2" sx={{ opacity: 0.8 }}>
        Investing in NFTs is not just about owning digital art, but also
        capturing powerful moments of the digital era. Bottom G #0001 is an
        exclusive token that will be embedded in the blockchain for eternity.
      </Typography>

      {/* Adin Ross Effect */}
      <Typography variant="body2" sx={{ opacity: 0.8 }}>
        Furthermore, as celebrities like Adin Ross continue to shape global
        conversations, increase their influence, the NFT associated with their
        name stands to naturally appreciate with their rising fame.
      </Typography>

      {/* Rarity & Call to Action */}
      <Typography variant="body2" sx={{ opacity: 0.8 }}>
        Additionally, the rarity of Bottom G #0001, being the very first of its
        kind, makes this NFT a rare collectible that could turn into a
        highly-sought asset in the bullish NFT market.
      </Typography>

      {/* Final Call to Action */}
      {/* <Typography
        variant="body2"
        sx={{
          backgroundColor: "#FFC107",
          color: "black",
          fontWeight: "bold",
          textAlign: "center",
          borderRadius: "8px",
          padding: "8px",
          marginTop: "10px",
        }}
      >
        Take it while it’s hot. Own a part of the internet history.
      </Typography> */}
    </Box>
  );
};

export default BottomGDescription;
