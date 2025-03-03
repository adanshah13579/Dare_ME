// import React from "react";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   IconButton,
//   Box,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";

// const drawerWidth = 240;

// const Sidebar = ({ open, handleDrawerToggle }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const drawerContent = (
//     <Box>
      
//       <Divider />
//       <List>
//         {["Home", "About", "Profile"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index === 0 ? <HomeIcon /> : index === 1 ? <InfoIcon /> : <HomeIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <Drawer
//       variant={isMobile ? "temporary" : "permanent"}
//       open={open}
//       onClose={handleDrawerToggle}
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: drawerWidth,
//           boxSizing: "border-box",
//         },
//       }}
//     >
//       {drawerContent}
//     </Drawer>
//   );
// };

// export default Sidebar;
