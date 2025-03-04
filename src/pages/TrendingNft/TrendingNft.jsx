import React from "react";
import { Box, Typography, Button } from "@mui/material";
import colors from "../../style/color";
import MainLayout from "../../layouts/Mainlayout";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NFTCard from "../../component/NFTcard/Nftcard";
import NFT from "../../assets/images/NFT.svg"

const TrendingNFT = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          width: "100%",
          p: { xs: 2, md: 3 }, // Adjust padding for smaller screens
          backgroundColor: colors.background,
          minHeight: "100vh",
          px: { xs: 2, sm: 4, md: 5 }, // Responsive horizontal padding
        }}
      >
        {/* 1️⃣ Heading Row */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <Typography
            variant="h5" // Smaller font for smaller screens
            sx={{
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, // Responsive font size
            }}
          >
            Trending <span style={{ color: "red" }}>Dare.Me</span> NFTs.
          </Typography>
        </Box>

        {/* 2️⃣ Button Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Stack buttons on small screens
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            gap: 2, // Add spacing when stacked
          }}
        >
          {/* Slim Button at Start */}
          <Button
            variant="outlined"
            sx={{
              backgroundColor: colors.background,
              color: "#7455C9",
              width: { xs: "100%", sm: "40%", md: "20%" }, // Full width on small screens
              fontSize: { xs: "12px", md: "10px" }, // Adjust font size
              borderColor: "#7455C9",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2,
              py: 0.5,
              borderRadius: "6px",
            }}
          >
            All Collections <ChevronRightIcon fontSize="small" />
          </Button>

          {/* Three Filter Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexWrap: "wrap", // Allow wrapping on smaller screens
              justifyContent: { xs: "center", md: "flex-end" }, // Center buttons on small screens
            }}
          >
            {["Last Day", "Last Week", "Last Month"].map((label, index) => (
              <Button
                key={index}
                variant="outlined"
                sx={{
                  borderColor: "#7455C9",
                  color: "#7455C9",
                  backgroundColor: "#F3F3F3",
                  borderRadius: "6px",
                  fontSize: { xs: "12px", md: "11px" }, // Adjust font size
                  px: 2,
                  py: 0.5,
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
        </Box>

        {/* 3️⃣ Cards Section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: { xs: "center", md: "flex-start" }, 
          }}
        >
          <NFTCard />
          <NFTCard />
          <NFTCard />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#9B7DF0",
              color: "white",
              width: { xs: "100%", sm: "50%", md: "27%" }, // Full width on mobile
              fontSize: { xs: "12px", md: "10px" }, // Adjust font size
              borderColor: "#7455C9",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2,
              py: 0.5,
              borderRadius: "6px",
            }}
          >
            Load More <KeyboardArrowDownIcon fontSize="small" />
          </Button>
        </Box>
      </Box>
      <Box sx={{backgroundColor:colors.background}}>
        <img src={NFT} alt="" style={{width:"100%"}}/>
      </Box>
    </MainLayout>
  );
};

export default TrendingNFT;
