import React from "react";
import { Box, Typography, Button, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ModernCard from "../Maincard/maincard";
import colors from "../../style/color";

const FollowerUploaded = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          py: 1,
          backgroundColor: colors.background, // Background color for contrast
          flexWrap: "wrap", // Ensures responsiveness for small screens
        }}
      >
        {/* Heading on the left */}
        <Typography
          variant="h6"
          sx={{
            color: "white",
            fontFamily:"poppins",
            marginLeft: { xs: 1, sm: 0,md:3 },
            mb: { xs: 1, sm: 0 }, // Adds margin on small screens for stacking
          }}
        >
          Follower’s Uploaded Recently
        </Typography>

        {/* Category select button on the right */}
        <Box>
          <Button
           
            endIcon={<ArrowDropDownIcon />}
            onClick={handleMenuClick}
            sx={{
              color: "#E4E4E4",
              borderColor: "white",
              marginRight: "20px",
            }}
          >
            Sortby:Trending
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Category 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Category 2</MenuItem>
            <MenuItem onClick={handleMenuClose}>Category 3</MenuItem>
          </Menu>
        </Box>
      </Box>

      {/* Card Section */}
      <Box
        sx={{
          display: "flex",
          backgroundColor: colors.background,
          justifyContent: "start", // Space between cards
          alignItems: "space-around",
          flexWrap: "wrap",
          gap: 2, // Space between cards
          px: 4,
          py: 2,
        }}
      >
        <ModernCard />
        <ModernCard />
        <ModernCard />
        <ModernCard />
      </Box>
    </>
  );
};

export default FollowerUploaded;
