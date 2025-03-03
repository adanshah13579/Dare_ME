import React from "react";
import MainLayout from "../../layouts/Mainlayout";
import { Box, Typography } from "@mui/material";
import colors from "../../style/color";
import PublicSquareCard from "../../component/PublicDareIndex/PublicdareCard";

const PublicDarePage = () => {
  return (
    <>
      <MainLayout>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          
            alignItems: "center",
            padding: "18px 10px",
            backgroundColor: colors.background,
          }}
        >
          <Typography
            variant="h5"
            component="h1"
            sx={{
              color: "white",
              fontFamily: "poppins",
            }}
          >
            Public Dare
          </Typography>
        </Box>

        {/* Card Section */}
        <Box
  sx={{
    padding: "16px",
    display: "flex",
    justifyContent: { xs: "center", sm: "center", md:"start" },  // Center for xs, start for sm
    alignItems: { xs: "center", sm: "center" },  // Center for both xs and sm
    backgroundColor: colors.background,
    maxHeight: "auto",
    minHeight: "100%",
    flexWrap: "wrap", // Ensure the cards wrap
    flexDirection: { xs: "row", sm: "row" },
    gap: 2, // Adds spacing between the cards
  }}
>
  <PublicSquareCard />
  <PublicSquareCard />
  <PublicSquareCard />
  <PublicSquareCard />
  <PublicSquareCard />
  <PublicSquareCard />
  <PublicSquareCard />
  <PublicSquareCard />
</Box>

      </MainLayout>
    </>
  );
};

export default PublicDarePage;
