import React, { useState } from "react";
import { Box, List, ListItem, ListItemAvatar, ListItemText, Typography, IconButton, Avatar, Stack, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; 
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import colors from "../../style/color";
import { chatList, groupChats, moreChats, moreGroupChats } from "../../data/dummydata";

const dummyAvatar = "https://example.com/dummy-avatar.jpg"; 


const ChatDrawer = ({setChatState}) => {
    const [expandDirect, setExpandDirect] = useState(false);
    const [expandGroup, setExpandGroup] = useState(false);
    const [activeChat, setActiveChat] = useState("Adan Shah"); // To track the active chat
  
    return (
      <Box
        sx={{
          width: {
            xs: "100%", // Full width on small screens
            sm: 320, // Fixed width for larger screens
          },
          height: "92vh",
          borderRadius: "10px",
          backgroundColor: "#1A1F3D",
          color: "white",
          padding: "16px",
          overflowY: "auto",
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)",
          "&::-webkit-scrollbar": {
            display: "none", // Hides the scrollbar
          },
        }}
      >
        {/* Header with Close Button */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <Typography variant="h6" sx={{ fontSize: { xs: "18px", sm: "20px" } }}>Chats</Typography>
        </Box>
  
        {/* Direct Messages Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle1" sx={{ color: "gray", flex: 1, fontSize: { xs: "14px", sm: "16px" } }}>
            Direct Messages
          </Typography>
          <IconButton size="small" onClick={() => setExpandDirect(!expandDirect)} sx={{ color: "white" }}>
            {expandDirect ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Box>
  
        <List sx={{ marginTop: "8px" }}>
          {chatList.map((chat, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: activeChat === chat.name ? colors.buttoncolor : "F0F3F61A", // Apply purple for active chat
                margin: "10px 0",
                borderRadius: "12px",
                "&:hover": {
                  backgroundColor: "#E4E4E41A", // Hover color for all items
                },
              }}
              onClick={() => {setActiveChat(chat.name)
                setChatState();
              }} // Set active chat on click
            >
              <Avatar src={dummyAvatar} sx={{ width: 35, height: 35, marginRight: 1 }} />
              <ListItemText primary={chat.name} secondary={chat.time} />
              <ListItemAvatar>
                <Stack direction="row" spacing={-1}>
                  <Avatar src={chat.avatar} sx={{ width: 35, height: 35, border: "2px solid white" }} />
                  <Avatar src={chat.groupAvatar} sx={{ width: 25, height: 25, border: "2px solid white" }} />
                </Stack>
              </ListItemAvatar>
            </ListItem>
          ))}
  
          {expandDirect && moreChats.map((chat, index) => (
            <ListItem key={index} sx={{ display: "flex", alignItems: "center" }}>
              <Avatar src={dummyAvatar} sx={{ width: 35, height: 35, marginRight: 1 }} />
              <ListItemText primary={chat.name} secondary={chat.time} />
              <ListItemAvatar>
                <Stack direction="row" spacing={-1}>
                  <Avatar src={chat.avatar} sx={{ width: 35, height: 35, border: "2px solid white" }} />
                  <Avatar src={chat.groupAvatar} sx={{ width: 25, height: 25, border: "2px solid white" }} />
                </Stack>
              </ListItemAvatar>
            </ListItem>
          ))}
        </List>
  
        {/* Group Messages Section */}
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "16px" }}>
          <Typography variant="subtitle1" sx={{ color: "gray", flex: 1, fontSize: { xs: "14px", sm: "16px" } }}>
            Group Messages
          </Typography>
          <IconButton size="small" onClick={() => setExpandGroup(!expandGroup)} sx={{ color: "white" }}>
            {expandGroup ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Box>
  
        <List sx={{ marginTop: "8px" }}>
          {groupChats.map((group, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: activeChat === group.name ? colors.buttoncolor : "F0F3F61A", // Apply purple for active group
                margin: "10px 0",
                borderRadius: "12px",
                "&:hover": {
                  backgroundColor: "#E4E4E41A", // Hover color for all items
                },
              }}
              onClick={() => setActiveChat(group.name)} // Set active group on click
            >
              <Avatar src={dummyAvatar} sx={{ width: 35, height: 35, marginRight: 1 }} />
              <ListItemText primary={group.name} secondary={group.time} />
              <ListItemAvatar>
                <Stack direction="row" spacing={-1}>
                  <Avatar src={group.groupAvatar} sx={{ width: 35, height: 35, border: "2px solid white" }} />
                  <Avatar src={group.avatar} sx={{ width: 25, height: 25, border: "2px solid white" }} />
                </Stack>
              </ListItemAvatar>
            </ListItem>
          ))}
  
          {expandGroup && moreGroupChats.map((group, index) => (
            <ListItem key={index} sx={{ display: "flex", alignItems: "center" }}>
              <Avatar src={dummyAvatar} sx={{ width: 35, height: 35, marginRight: 1 }} />
              <ListItemText primary={group.name} secondary={group.time} />
              <ListItemAvatar>
                <Stack direction="row" spacing={-1}>
                  <Avatar src={group.groupAvatar} sx={{ width: 35, height: 35, border: "2px solid white" }} />
                  <Avatar src={group.avatar} sx={{ width: 25, height: 25, border: "2px solid white" }} />
                </Stack>
              </ListItemAvatar>
            </ListItem>
          ))}
        </List>
  
        {/* Create Group Button */}
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "24px" }}>
          <Button
            variant="contained"
            sx={{
              width: "70%",
              color: "white",
              backgroundColor: "#E4E4E41A",
              padding: "10px",
              fontSize: { xs: "10px", sm: "12px" }, // Smaller font on mobile
              height: "44px",
            }}
            onClick={() => alert("Create Group Clicked!")}
          >
            Create New Group Chat
          </Button>
        </Box>
      </Box>
    );
  };
  
  export default ChatDrawer;