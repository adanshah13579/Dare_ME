import React, { useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  ArrowDropDown,
  CabinOutlined,
  DashboardOutlined,
  JoinFullOutlined,
  ViewList,
  ViewListOutlined,
} from "@mui/icons-material";

const VideoUploadControls = () => {
  const [anchorEl, setAnchorEl] = useState(null); // State for category dropdown
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category

  const handleCategoryClick = (event) => {
    setAnchorEl(event.currentTarget); // Open category dropdown
  };

  const handleCategoryClose = () => {
    setAnchorEl(null); // Close category dropdown
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // Set selected category
    handleCategoryClose(); // Close the dropdown
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: { xs: "16px", sm: "24px", md: "32px" }, // Adjust padding for responsive design
      }}
    >
      {/* Heading in the top left corner */}
      <Typography
        sx={{
          fontSize: { xs: "10px", sm: "14px", md: "16px" }, // Adjust font size for responsiveness
          fontFamily: "Poppins",
          color: "white", // Dark color for the heading
          marginBottom: "16px",
        }}
      >
        You uploaded 16 videos
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack on smaller screens, row on larger screens
          alignItems: "center",
          gap: { xs: "8px", sm: "16px" }, // Adjust space between items
        }}
      >
        <Checkbox sx={{ color: "#242731" }} />

        <Button
          sx={{
            backgroundColor: "#242731", // Use the specified color
            color: "#fff",
            "&:hover": {
              backgroundColor: "#242731", // Keep the same color on hover
            },
            fontSize: { xs: "8px", sm: "10px", md: "12px" }, // Adjust font size for responsiveness
            padding: "8px 16px",
            borderRadius: "8px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // Slight shadow for glass effect
            backdropFilter: "blur(5px)", // Glass effect blur
            minHeight: "40px", // Set a consistent height
            width: { xs: "100%", sm: "auto" }, // Full width on small screens, auto on larger screens
            display: "flex",
            alignItems: "center", // Align text and icon
            gap: "8px",
          }}
          onClick={handleCategoryClick}
        >
          {selectedCategory || "Select Category"}{" "}
          <ArrowDropDown /> {/* Down arrow icon */}
        </Button>

        <Box sx={{ flexGrow: 1 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end", // Align buttons to the end
            gap: { xs: "8px", sm: "16px" }, // Adjust space between buttons
            alignItems: "center", // Align items vertically
          }}
        >
          <Button
            sx={{
              backgroundColor: "#242731", // Use the specified color
              color: "#fff",
              "&:hover": {
                backgroundColor: "#6C5DD3", // Keep the same color on hover
              },
              fontSize: { xs: "8px", sm: "10px", md: "12px" }, // Adjust font size for responsiveness
              padding: "8px 16px",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // Slight shadow for glass effect
              backdropFilter: "blur(5px)", // Glass effect blur
            }}
          >
            <JoinFullOutlined
              sx={{
                fontSize: { xs: "8px", sm: "10px", md: "14px" }, // Icon font size with responsiveness
                color: "inherit", // Ensure the icon inherits the color of the button
                marginRight: "3px",
              }}
            />
            Move
          </Button>

          <Button
            sx={{
              backgroundColor: "#242731", // Use the specified color
              color: "#fff",
              "&:hover": {
                backgroundColor: "#6C5DD3", // Keep the same color on hover
              },
              fontSize: { xs: "8px", sm: "10px", md: "12px" }, // Adjust font size for responsiveness
              padding: "8px 16px",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // Slight shadow for glass effect
              backdropFilter: "blur(5px)", // Glass effect blur
            }}
          >
            <JoinFullOutlined
              sx={{
                fontSize: { xs: "8px", sm: "10px", md: "14px" }, // Icon font size with responsiveness
                color: "inherit", // Ensure the icon inherits the color of the button
                marginRight: "3px",
              }}
            />
            Delete
          </Button>

          <Button
            sx={{
              backgroundColor: "#242731", // Use the specified color
              color: "#fff",
              "&:hover": {
                backgroundColor: "#6C5DD3", // Keep the same color on hover
              },
              fontSize: { xs: "8px", sm: "10px", md: "12px" }, // Adjust font size for responsiveness
              padding: "8px 16px",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // Slight shadow for glass effect
              backdropFilter: "blur(5px)", // Glass effect blur
            }}
          >
            <JoinFullOutlined
              sx={{
                fontSize: { xs: "8px", sm: "10px", md: "14px" }, // Icon font size with responsiveness
                color: "inherit", // Ensure the icon inherits the color of the button
                marginRight: "3px",
              }}
            />
            Add to Playlist
          </Button>

          {/* Icons in a row */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: "8px", sm: "16px" }, // Adjust space between icons
              justifyContent: "flex-end", // Align to the right
              alignItems: "center", // Align icons vertically
            }}
          >
            <ViewListOutlined sx={{ color: "white", fontSize: "24px" }} />
            <DashboardOutlined
              sx={{
                color: "white",
                fontSize: { xs: "24px", sm: "30px", md: "35px" }, // Adjust icon size for responsiveness
                backgroundColor: "#3F8CFF",
                borderRadius: "10%", // Circular border radius
                padding: "8px",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Category Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCategoryClose}
      >
        <MenuItem onClick={() => handleCategorySelect("Category 1")}>
          Category 1
        </MenuItem>
        <MenuItem onClick={() => handleCategorySelect("Category 2")}>
          Category 2
        </MenuItem>
        <MenuItem onClick={() => handleCategorySelect("Category 3")}>
          Category 3
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default VideoUploadControls;
