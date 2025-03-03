import React, { useState } from "react";
import {
  Box,
  Divider,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useTheme,
  useMediaQuery,
  CssBaseline,
  AppBar,
  Drawer,
  Menu,
  MenuItem,
} from "@mui/material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import CastIcon from "@mui/icons-material/Cast";
import SaveIcon from "@mui/icons-material/Save";
import MenuIcon from "@mui/icons-material/Menu";
import WifiIcon from "@mui/icons-material/Wifi";
import SegmentIcon from "@mui/icons-material/Segment";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Avatar from "@mui/material/Avatar";
import icon from "../assets/images/icon.png";
import colors from "../style/color";
import CardComponent from "../component/JoinnowCard/component";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BrowseCategoryIcon from "@mui/icons-material/Category"; // Add the icon for categories
import { ExploreOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import girlpic from "../assets/images/str1.png"


const drawerWidth = 260;

const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [newFeedsItemsToShow, setNewFeedsItemsToShow] = useState(4); // Initially show 4 items in new feeds
  const [followingItemsToShow, setFollowingItemsToShow] = useState(4); // Initially show 4 items in following
  const [showMoreFollowing, setShowMoreFollowing] = useState(true); // Flag to toggle Load More button visibility for following
  const [showLessFollowing, setShowLessFollowing] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget); // Opens the menu when avatar is clicked
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Closes the menu
  };

  const handleLogout = () => {
    // Perform logout actions here (e.g., clear session, local storage, etc.)
    navigate("/login"); // Redirect to the login page after logout
    handleMenuClose(); // Close the menu after logout
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  // Flag to toggle Show Less button visibility for following
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLoadMoreFollowing = () => {
    const newItemsToShow = followingItemsToShow + 4;
    setFollowingItemsToShow(newItemsToShow);
    if (newItemsToShow >= listItems.length) setShowMoreFollowing(false);
    setShowLessFollowing(true);
  };

  const handleShowLessFollowing = () => {
    const newItemsToShow = followingItemsToShow - 4;
    setFollowingItemsToShow(newItemsToShow);
    if (newItemsToShow < listItems.length) setShowMoreFollowing(true);
    if (newItemsToShow <= 4) setShowLessFollowing(false);
  };

  const listItemss = [
    { text: "Live Dares", icon: <LiveTvIcon />, onPress: () => navigate("/") },
    {
      text: "Popular Dares",
      icon: <StarIcon />,
      onPress: () => navigate("/publicdare"),
    },
    {
      text: "Following",
      icon: <PeopleIcon />,
      onPress: () => navigate("/following"),
    },
    {
      text: "Start Streaming",
      icon: <CastIcon />,
      onPress: () => navigate("/startstreaming"),
    },
    { text: "Save Clips", icon: <SaveIcon /> },
    { name: "John Doe", avatar: "/path-to-avatar-1.jpg", icon: <WifiIcon /> },
    {
      name: "Jane Smith",
      avatar: "/path-to-avatar-2.jpg",
      icon: <FiberManualRecordIcon />,
    },
    // more items
  ];

  // Dummy data for the list items
  const listItems = [
    { name: "John Doe", avatar: "/path-to-avatar-1.jpg", icon: <WifiIcon /> },
    {
      name: "Jane Smith",
      avatar: "/path-to-avatar-2.jpg",
      icon: (
        <FiberManualRecordIcon sx={{ fontSize: "20px", paddingRight: "5px" }} />
      ),
    },
    {
      name: "Alice Brown",
      avatar: "/path-to-avatar-3.jpg",
      icon: <WifiIcon />,
    },
    {
      name: "Bob Johnson",
      avatar: "/path-to-avatar-4.jpg",
      icon: (
        <FiberManualRecordIcon sx={{ fontSize: "20px", paddingRight: "5px" }} />
      ),
    },
    {
      name: "Charlie White",
      avatar: "/path-to-avatar-5.jpg",
      icon: <WifiIcon />,
    },
    {
      name: "Dave Wilson",
      avatar: "/path-to-avatar-6.jpg",
      icon: (
        <FiberManualRecordIcon sx={{ fontSize: "20px", paddingRight: "5px" }} />
      ),
    },
    { name: "Eve Davis", avatar: "/path-to-avatar-7.jpg", icon: <WifiIcon /> },
    {
      name: "Frank Clark",
      avatar: "/path-to-avatar-8.jpg",
      icon: (
        <FiberManualRecordIcon sx={{ fontSize: "20px", paddingRight: "5px" }} />
      ),
    },
  ];

  const drawerContent = () => {
    return (
      <Box
        sx={{ backgroundColor: colors.background, height: "100%", padding: 2 }}
      >
        {/* Drawer Header with Segment Icon */}
        <Toolbar sx={{ width: "100%", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={icon}
              alt="Logo"
              style={{ height: "40px", marginRight: "5px" }}
            />
            <Typography variant="h5" noWrap sx={{ color: colors.textColor }}>
              Dare<span style={{ color: "#FF4F4F" }}>.Me</span>
            </Typography>
          </Box>
          <SegmentIcon
            color="primary"
            sx={{ color: "grey", cursor: "pointer" }}
            onClick={handleDrawerToggle}
          />
        </Toolbar>

        {/* New Feeds Section */}
        <Box sx={{ padding: "13px 16px" }}>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#B0B0B0",
              textTransform: "uppercase",
              fontSize: "12px",
            }}
          >
            New Feeds
          </Typography>
        </Box>
        <List sx={{ padding: "10px 8px" }}>
          {listItemss.slice(0, newFeedsItemsToShow).map((item, index) => (
            <ListItem key={index} sx={{ padding: "8px 8px" }}>
              <ListItemButton
                sx={{
                  borderRadius: "10px",
                  padding: "10px 8px",
                  "&:hover": {
                    backgroundColor: colors.hoverBackground,
                    color: colors.textColor,
                  },
                  backgroundColor: colors.background,
                  color: colors.textColor,
                }}
                onClick={item?.onPress}
              >
                <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text || item.name}
                  sx={{ color: colors.textColor }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Divider */}
        <Divider sx={{ backgroundColor: colors.textColor, opacity: 0.2 }} />

        {/* Followings Section */}
        <Box sx={{ padding: "15px 16px" }}>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#B0B0B0",
              textTransform: "uppercase",
              fontSize: "12px",
            }}
          >
            Followings
          </Typography>
        </Box>
        <List sx={{ padding: "4px 4px" }}>
          {listItems.slice(0, followingItemsToShow).map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                sx={{
                  padding: "10px 8px",
                  borderRadius: "10px",
                }}
              >
                <ListItemIcon>
                  <Avatar alt={item.name} src={item.avatar} />
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{ color: colors.textColor }}
                />
                {item.icon}
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Load More / Show Less Button */}
        <Box
          sx={{ padding: "8px 16px", display: "flex", alignItems: "center" }}
        >
          {showMoreFollowing && (
            <>
              <IconButton
                onClick={handleLoadMoreFollowing}
                sx={{ color: colors.textColor }}
              >
                <KeyboardArrowDownIcon />
              </IconButton>
              <Typography
                sx={{
                  color: colors.textColor,
                  marginLeft: 1,
                  fontSize: "13px",
                }}
              >
                Load More...
              </Typography>
            </>
          )}
          {showLessFollowing && (
            <>
              <IconButton
                onClick={handleShowLessFollowing}
                sx={{ color: colors.textColor }}
              >
                <KeyboardArrowUpIcon />
              </IconButton>
              <Typography
                sx={{
                  color: colors.textColor,
                  marginLeft: 1,
                  fontSize: "13px",
                }}
              >
                Go Back
              </Typography>
            </>
          )}
        </Box>
        <Divider sx={{ backgroundColor: colors.textColor, opacity: 0.2 }} />
        <CardComponent
          text={"Join & Earn"}
          imageSrc={
            girlpic
          }
        />
      </Box>
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: colors.background,
          boxShadow: "none",
          paddingX: { xs: 1, sm: 3 },
        }}
      >
        <Toolbar>
          {/* Mobile menu icon */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
              
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Browse Categories Icon and Text */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              marginRight: { xs: 1, sm: 3 , },
            }}
            onClick={handleMenuOpen}
          >
            <IconButton
              sx={{
                color: colors.textColor,
                fontSize: { xs: "1rem", sm: "1.25rem" },
              }}
            >
              <ExploreOutlined />
            </IconButton>
            <Typography
              variant="body2"
              sx={{
                color: colors.textColor,
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                display: { xs: "none", sm: "block" }, // Hide on mobile
              }}
            >
              Browse Categories
            </Typography>
            <KeyboardArrowDownIcon
              sx={{
                color: colors.textColor,
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            />
          </Box>

          {/* Menu for Categories */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {/* Replace with actual categories */}
            <MenuItem onClick={handleMenuClose}>Category 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Category 2</MenuItem>
            <MenuItem onClick={handleMenuClose}>Category 3</MenuItem>
          </Menu>

          {/* Search for Anything with Search Icon and Text */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: { xs: 1, sm: 3 },
              flexGrow: 1, // Makes it take available space on mobile
              justifyContent: { xs: "flex-start", sm: "flex-start" }, // Align items well
            }}
          >
            <IconButton
              sx={{
                color: colors.textColor,
                fontSize: "1.25rem",
                marginRight: 1,
              }}
            >
              <SearchIcon />
            </IconButton>
            <Typography
              variant="body2"
              sx={{
                color: colors.textColor,
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                display: { xs: "none", sm: "block" }, // Hide on mobile
              }}
            >
              Search for anything
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
            {/* Add Button Icon */}
            <IconButton
              sx={{
                color: colors.textColor,
                fontSize: "1.5rem",
                marginRight: 2,
              }}
            >
              <AddCircleIcon />
            </IconButton>

            {/* Notification Icon */}
            <IconButton
              sx={{
                color: colors.textColor,
                fontSize: "1.5rem",
                marginRight: 2,
              }}
            >
              <NotificationsIcon />
            </IconButton>

            <Avatar
              sx={{
                width: 32,
                height: 32,
                backgroundColor: colors.primary,
                cursor: "pointer",
              }}
              onClick={handleAvatarClick} // Opens the menu when avatar is clicked
            >
              A
            </Avatar>

            {/* Menu for Logout and other options */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{
                "aria-labelledby": "avatar-button",
              }}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>{" "}
              {/* You can add a Profile menu item */}
              <MenuItem onClick={handleLogout}>Logout</MenuItem>{" "}
              {/* Logout option */}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        
        sx={{

          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            height: "100vh",
            boxSizing: "border-box",
            backgroundColor: colors.background,
            borderRight: "2px solid #474958 !important", // ✅ Force it to appear

          
            color: colors.textColor,
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "0px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "transparent",
            },
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          },
        }}
      >
        {drawerContent()}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: "100vh",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "0px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "transparent",
          },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
