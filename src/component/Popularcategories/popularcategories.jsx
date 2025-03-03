import React from "react";
import { Box, Typography } from "@mui/material";
import SquareCard from "../Squrecard/sqaurecard";
import RectangleCard from "../Rectanglecard/reactanglecard";
import colors from "../../style/color"; // Global color import

const PopularCategories = () => {
  return (
    <Box
      sx={{
        backgroundColor: colors.background,
        padding: { xs: 2, sm: 4 },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          marginBottom: "16px", 
          color: "white",
        }}
      >
        Popular Categories
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between", // Space between the square card and rectangular cards
          flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens, horizontally on larger screens
          gap: 6,
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "45%",lg:"60%" }, // Full width on small screens, 45% on larger screens
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SquareCard />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Stack the rectangular cards vertically
            gap: 4,
            width: { xs: "100%", sm: "50%" ,lg:"40%" }, // Full width on small screens, 50% on larger screens
            alignItems: "flex-start", // Align rectangular cards to the left
          }}
        >
          <RectangleCard />
          <RectangleCard />
          <RectangleCard />
        </Box>
      </Box>
    </Box>
  );
};

export default PopularCategories;
