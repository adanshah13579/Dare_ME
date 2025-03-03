import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Typography,
  InputBase,
  Badge,
  Avatar,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
} from "@mui/material";
import icon from "../../assets/images/icon.png";

import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import NotificationsIcon from "@mui/icons-material/Notifications";

const NavbarHeader = ({ toggleSidebar }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Mobile responsiveness
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearchToggle = () => {
    setSearchOpen((prev) => !prev);
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#111428",
          width: "100%",
          zIndex: 1300,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
          }}
        >
          {/* Sidebar Toggle Button */}
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleSidebar}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Website Logo */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: isMobile ? 1 : 0 }}>
            <img
              src={icon}
              alt="Logo"
              style={{ height: "30px", marginRight: "5px" }}
            />
            <Typography variant="h5" noWrap>
              Dare<span style={{ color: "red" }}>.Me</span>
            </Typography>
          </Box>

          {/* Middle Section (Search & Browse Category) */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: 1,
                justifyContent: "center",
                marginLeft: 8,
              }}
            >
              {/* Browse Category Dropdown */}
              <Typography
                onClick={handleMenuClick}
                variant="body1"
                sx={{ cursor: "pointer", display: "flex", alignItems: "center", mr: 4 }}
              >
                Browse Category
                <ArrowDropDownIcon />
              </Typography>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Category 1</MenuItem>
                <MenuItem onClick={handleMenuClose}>Category 2</MenuItem>
                <MenuItem onClick={handleMenuClose}>Category 3</MenuItem>
              </Menu>

              {/* Search Bar */}
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  borderRadius: "20px",
                  px: 1,
                  py: 0.5,
                  transition: "width 0.3s",
                  width: searchOpen ? "200px" : "40px",
                  overflow: "hidden",
                  backgroundColor: searchOpen
                    ? "rgba(255, 255, 255, 0.2)"
                    : "transparent",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <SearchIcon
                  onClick={handleSearchToggle}
                  sx={{ cursor: "pointer", color: "white" }}
                />
                {searchOpen && (
                  <InputBase
                    placeholder="Search…"
                    sx={{
                      ml: 1,
                      flex: 1,
                      color: "white",
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                )}
              </Box>
            </Box>
          )}

          {/* Right Side Icons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexGrow: isMobile ? 1 : 0,
            }}
          >
            <IconButton color="inherit">
              <AddIcon />
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            {!isMobile && (
              <Avatar alt="User" src="/avatar.jpg" sx={{ ml: 2 }} />
            )}

            {/* Mobile Drawer Toggle */}
            {isMobile && (
              <IconButton color="inherit" onClick={() => toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Right-Side Drawer for Mobile */}
      <SwipeableDrawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        <Box sx={{ width: 250, padding: 2 }}>
          <Typography variant="h6" gutterBottom>
            Menu
          </Typography>
          <Divider />
          <List>
            <ListItem button onClick={handleMenuClick}>
              <ListItemText primary="Browse Category" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Profile" />
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default NavbarHeader;
