import React from "react";
import { Box, Typography, Button, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ExtremeDareCard } from "../../component/ExtremeDareCardHorizontal/ExtremeDareCard";
import PopularCategories from "../../component/Popularcategories/popularcategories";
import MainLayout from "../../layouts/Mainlayout";
import colors from "../../style/color";
import LongCard from "../../component/Maincard/Longcard";

const Browse = () => {
  return (
    <MainLayout>
      <Box sx={{ width: "100%", p: 3, backgroundColor: colors.background }}>
        {/* Heading */}
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "white" }}>
          Browse
        </Typography>

        {/* Search Bar with Buttons Inside */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 3,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            p: 0.5,
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search..."
            sx={{
              background: "transparent",
              "& fieldset": { border: "none" },
              "& input": { color: "white" },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "white" }} />
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{ display: "flex", gap: 1, ml: 1 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#6C5DD3",
                "&:hover": { backgroundColor: "#5A4BCF" },
                textTransform: "none",
                padding: "10px 12px",
                fontSize: "14px",
                borderRadius: "12px",
                minWidth: "110px", // Increased width
              }}
            >
              Category
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgba(228, 228, 228, 0.06)",
                "&:hover": { backgroundColor: "#6C5DD3" },
                textTransform: "none",
                padding: "10px 12px",
                fontSize: "14px",
                borderRadius: "12px",
                minWidth: "110px", // Increased width
              }}
            >
              Video
            </Button>
          </Box>
        </Box>

        {/* Cards Section */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
          <ExtremeDareCard />
          <ExtremeDareCard />
          <ExtremeDareCard />
        </Box>

        {/* Another Component */}
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "grey",ml:1.5 }}>
          Gaming-Large-Comps/Category
        </Typography>
        <PopularCategories />

        {/* Explore More Categories */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 4, mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "white", ml: 2 }}>
            Explore More Categories
          </Typography>
          <Button
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              color: "#E4E4E4",
              borderColor: "white",
              marginRight: "20px",
            }}
          >
            Popular
          </Button>
        </Box>

        {/* Long Cards */}
        <Box sx={{  ml:1,display: "flex", justifyContent: { xs: "center", sm: "center", md: "flex-start" }, flexWrap: "wrap", gap: 2 , }}>
          <LongCard />
          <LongCard />
          <LongCard />
          <LongCard />
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Browse;
