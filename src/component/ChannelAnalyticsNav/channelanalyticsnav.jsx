import React from "react";
import { TextField, InputAdornment, Button, Box, Typography, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import colors from "../../style/color";

const SearchNavbar = () => {
  const isSmallScreen = useMediaQuery("(max-width:900px)"); // Hide on xs & sm

  return (
    <Box sx={{ backgroundColor: colors.background }}>
      <Box sx={{ marginLeft: "3%" }}>
        <Typography
          sx={{
            mb: 2,
            color: "white",
            textAlign: "left",
            fontSize: "30px",
          }}
        >
          Channel Analytics
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "5px 10px",
            borderRadius: "8px",
            maxWidth: "90%",
          }}
        >
          <TextField
            variant="outlined"
            placeholder={isSmallScreen ? "" : "Based on my previous videos, what type of dares should I do next?"} // ✅ Hide placeholder on xs, sm
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "white" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#6C5DD3",
                      color: "white",
                      borderRadius: "10px",
                      fontSize: "10px",
                      textTransform: "none",
                      px: 2,
                      py: 1,
                      "&:hover": { backgroundColor: "#5B4ED0" },
                    }}
                  >
                    AI Channel Assistant
                  </Button>
                </InputAdornment>
              ),
              style: { color: "white" },
            }}
            sx={{
              backgroundColor: "#1C1E31",
              borderRadius: "10px",
              "& fieldset": { border: "none" },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchNavbar;
