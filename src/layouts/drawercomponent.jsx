// // src/components/DrawerContent.js
// import React from "react";
// import { Box, Divider, IconButton, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";

// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import Avatar from "@mui/material/Avatar";
// import colors from "../style/color";
// import CardComponent from "../component/JoinnowCard/component";
// import icon from "../assets/images/icon.png";
// import { red } from "@mui/material/colors";
// import str1 from "../assets/images/str1.png";


// const DrawerContent = ({
//   listItemss,
//   listItems,
//   newFeedsItemsToShow,
//   followingItemsToShow,
//   showMoreFollowing,
//   showLessFollowing,
//   handleLoadMoreFollowing,
//   handleShowLessFollowing,
// }) => {
//   return (
//     <Box sx={{ backgroundColor: colors.background, height: "100%", padding: 2 }}>
//       {/* Drawer Header */}
//       <Toolbar sx={{ width: "100%" }}>
//         <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
//           <img
//             src={icon} 
//             alt="Logo"
//             style={{ height: "30px", marginRight: "5px" }}
//           />
//           <Typography variant="h5" noWrap sx={{ color: colors.textColor }}>
//             Dare<span style={{ color: red }}> .Me</span>
//           </Typography>
//         </Box>
//       </Toolbar>

//       {/* New Feeds Heading */}
//       <Box sx={{ padding: "8px 16px" }}>
//         <Typography variant="subtitle2" sx={{ color: "#B0B0B0",  fontSize: "12px" }}>
//           New Feeds
//         </Typography>
//       </Box>

//       {/* New Feeds List Items */}
//       <List>
//         {listItemss.slice(0, newFeedsItemsToShow).map((item, index) => (
//           <ListItem key={index} disablePadding>
//             <ListItemButton
//               sx={{
//                 width: "80%", 
//                 maxWidth: 300, 
//                 padding: 2,
//                 borderRadius: 8, 
//                 backgroundColor: colors.background,
//                 color: colors.textColor,
//                 transition: "all 0.3s ease-in-out", 
//                 "&:hover": {
//                   backgroundColor: colors.hoverBackground,
//                   color: colors.textColor,
//                   borderRadius: 12,
//                   boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", 
//                   cursor: "pointer", 
//                 },
//               }}
//             >
//               <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
//               <ListItemText primary={item.text || item.name} sx={{ color: colors.textColor }} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>

//       {/* Following Heading */}
//       <Box sx={{ padding: "8px 16px" }}>
//         <Typography variant="subtitle2" sx={{ color: "#B0B0B0",  fontSize: "12px" }}>
//           Following
//         </Typography>
//       </Box>

//       {/* Following List Items */}
//       <List>
//         {listItems.slice(0, followingItemsToShow).map((item, index) => (
//           <ListItem key={index} disablePadding>
//             <ListItemButton
//               sx={{
//                 "&:hover": {
//                   backgroundColor: colors.hoverBackground,
//                   color: colors.textColor,
//                 },
//                 backgroundColor: colors.background,
//                 color: colors.textColor,
//               }}
//             >
//               <ListItemIcon>
//                 <Avatar alt={item.name} src={item.avatar} />
//               </ListItemIcon>
//               <ListItemText primary={item.name} sx={{ color: colors.textColor }} />
//               {item.icon}
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>

//       {/* Load More / Show Less Button */}
//       <Box sx={{ padding: "8px 16px", display: "flex", alignItems: "center" }}>
//         {showMoreFollowing && (
//           <>
//             <IconButton onClick={handleLoadMoreFollowing} sx={{ color: colors.textColor }}>
//               <KeyboardArrowDownIcon />
//             </IconButton>
//             <Typography sx={{ color: colors.textColor, marginLeft: 1 }}>Load More...</Typography>
//           </>
//         )}
//         {showLessFollowing && (
//           <>
//             <IconButton onClick={handleShowLessFollowing} sx={{ color: colors.textColor }}>
//               <KeyboardArrowUpIcon />
//             </IconButton>
//             <Typography sx={{ color: colors.textColor, marginLeft: 1 }}>Go Back</Typography>
//           </>
//         )}
//       </Box>
//       <Divider sx={{ backgroundColor: colors.textColor, opacity: 0.2 }} />

//       {/* Join & Earn Card Component */}
//       <CardComponent text={"Join & Earn"} imageSrc = {str1} />
//     </Box>
//   );
// };

// export default DrawerContent;
