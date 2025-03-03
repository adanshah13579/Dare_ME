import React from "react";
import { Box } from "@mui/material";
import NFTViewCard from "../../component/NFTcard/Nftviewcard";
import MainLayout from "../../layouts/Mainlayout";
import colors from "../../style/color";
import BottomG from "../../component/BottomG/Bottomg";
import BottomG2 from "../../component/BottomG/Bottomg2";
import BottomGDescription from "../../component/BottomG/BottomGdeceription";
import Component4 from "../../component/BottomG/BottomG4";

const NFTView = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          py: 4,
          width: "100%",
          backgroundColor: colors.background,
          minHeight: "100vh",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <NFTViewCard />
        </Box>

        {/* Second Row: Two Components in a Row (BottomG & BottomG2) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            width: "90%",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ flex: 1, minWidth: "45%" }}>
            <BottomG />
          </Box>
          <Box sx={{ flex: 1, minWidth: "45%" }}>
            <BottomG2 />
          </Box>
        </Box>

        {/* Third Row: Two Components in a Row (Description & Component4) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "start",
            gap: 4,
            width: "90%",
            maxWidth: "1400px",
          }}
        >
          {/* Left Side: Text Content */}
          <Box sx={{ flex: 1, minWidth: "45%" }}>
            <BottomGDescription />
          </Box>

          {/* Right Side: Price History & Listings */}
          <Box sx={{ flex: 1, minWidth: "45%" }}>
            <Component4 />
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default NFTView;
