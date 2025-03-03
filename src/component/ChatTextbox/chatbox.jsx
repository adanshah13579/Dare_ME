import React from "react";
import { Box, Typography, IconButton,  } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Import Go Back Icon
import ChatMessage from "../Chatmessage/chatpage";
import Commentbox from "../CommentBox/CommentBox";
import { messages } from "../../data/dummydata.js";
import colors from "../../style/color.js";

const Chatbox = ({ setChatState }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh", // Full viewport height
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "16px",
          borderBottom: "1px solid grey",
          height: "auto",
          backgroundColor: colors.background, // Adjust background color as needed
        }}
      >
        <Box sx={{ display: { xs: "flex", sm: "none" }, marginRight: "10px" }}>
          <IconButton sx={{ color: "white" }} onClick={() => setChatState()}>
            <ArrowBackIcon />
          </IconButton>
        </Box>

        <Typography
          sx={{
            flex: 1,
            color: "white",
            fontFamily: "Poppins",
            fontSize: {
              xs: "12px",
              sm: "25px",
              md: "20px",
              lg: "25px",
            },
            fontWeight: "bold",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          Heading Text
        </Typography>

        {/* Icons on the right */}
        <Box sx={{ display: "flex", gap: "16px" }}>
          <IconButton sx={{ color: "white" }} onClick={() => setChatState()}>
            <HomeIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <SearchIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <NotificationsIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Chat Messages Section - Scrollable */}
      <Box
        sx={{
          flex: 1, // Takes remaining space
          padding: "20px 10px",
          overflowY: "auto",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            avatar={msg.avatar}
            name={msg.name}
            time={msg.time}
            message={msg.message}
            isHighlighted={msg.isHighlighted}
          />
        ))}
      </Box>

      {/* Fixed Comment Box at Bottom */}
      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          

          padding: "10px 5px",
        }}
      >
        <Commentbox />
      </Box>
    </Box>
  );
};

export default Chatbox;
