import React from "react";
import { Box, Typography, Avatar, Tooltip } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const BottomG = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#201A29",
        backdropFilter: "blur(8px)",
        borderRadius: "15px",
        padding: "16px",
        color: "white",
        width: "100%",
        
        display: "flex",
        flexDirection: "column",
        gap: 2, // Reduced gap to avoid too much bottom space
        height:"100%"
      }}
    >
      {/* Collection Name */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <VerifiedIcon sx={{ color: "#A97AFF", fontSize: 25 }} />
        <Typography sx={{ fontWeight: 300, fontSize: 14 }}>
          Bottom G Collection
        </Typography>
      </Box>

      {/* NFT Title */}
      <Typography sx={{ fontWeight: 600, fontSize: 20 }}>
        Bottom G #0001
      </Typography>

      {/* Minted By, Date, and Source in One Row */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 1,
          justifyContent: "space-between",
          mt: 1, // Reduced margin to prevent extra space
        }}
      >
        {/* Minted By Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Minted by
          </Typography>
          <Avatar src="https://i.pravatar.cc/40" sx={{ width: 24, height: 24 }} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#1F1A2B",
              padding: "4px 8px",
              borderRadius: "6px",
              gap: 0.5,
            }}
          >
            <Typography variant="body2">Mentalen</Typography>
            <VerifiedIcon sx={{ color: "#A97AFF", fontSize: 16 }} />
          </Box>
        </Box>

        {/* Date & Source */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          {/* Date */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <InsertLinkIcon sx={{ fontSize: 18, opacity: 0.7 }} />
            <Typography variant="body2">18 Dec, 2023</Typography>
          </Box>

          {/* Source */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Source:
            </Typography>
            <Tooltip title="Download Source">
              <CloudDownloadIcon sx={{ fontSize: 18, cursor: "pointer" }} />
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BottomG;
