import React, { useState } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const FilterButtons = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, padding: 2,marginLeft:"30px" }}>
      <Button
  sx={{
    backgroundColor: "#6C5DD3",
    color: "#FFF",
    borderRadius: "10px",
    textTransform: "none",
    px: "20px", 
    py: "10px", 
    fontSize: "8px",  
    minWidth: "auto",
    "&:hover": { backgroundColor: "#5B4BC7" },
  }}
>
  All
</Button>


      {["Dares", "Gaming"].map((label) => (
        <Button
          key={label}
          variant="contained"
          sx={{
            backgroundColor: "#1E1F29",
            color: "#fff",
            borderRadius: "10px",
            textTransform: "none",
            px: {xs:"20px",sm:"20px",md:"40px"},
    py: "10px", 
    fontSize: "8px", 
    minWidth: "auto",
            backgroundColor: "#26293B",
            "&:hover": { backgroundColor: "#2C2D39" },
          }}
        >
          {label}
        </Button>
      ))}

      {/* Dropdown button */}
      <Button
  onClick={handleClick}
  variant="contained"
  elevation={0}
  sx={{
    backgroundColor: "#1E1F29",
    color: "#FFF",
    borderRadius: "12px",
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    paddingY:"8px",
    justifyContent: "space-between",
    // paddingX: "70px",
    width: "150px",
    // backgroundColor: "#13162A",
    paddingY:{xs:"5px",sm:"5px"},
    paddingX:{xs:"5px",sm:"5px"},
    fontSize:{xs:"8px",sm:"8px",md:"10px"},
    marginLeft:{xs:"0px",sm:"0px",md:"100px",lg:"150px",xl:"200px"},
    fontSize:"10px",
    // "&:hover": { backgroundColor: "#13162A" },
  }}
>
  <span style={{ flexGrow: 1, textAlign: "left",color:"#808191" }}>Now</span>
  <KeyboardArrowDownIcon />
</Button>


      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Today</MenuItem>
        <MenuItem onClick={handleClose}>This Week</MenuItem>
        <MenuItem onClick={handleClose}>This Month</MenuItem>
      </Menu>
    </Box>
  );
};

export default FilterButtons;
