import React from "react";
import { Box, Typography, Avatar, IconButton, Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ReplyIcon from "@mui/icons-material/Reply";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import colors from "../../style/color";
import StarIcon from '@mui/icons-material/Star';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

// Sample comments data
const comments = [
  {
    id: 1,
    name: "John Doe",
    avatar: "J",
    time: "12 h ago",
    content: "This is a sample comment.",
  },
  {
    id: 2,
    name: "Alice Smith",
    avatar: "A",
    time: "8 h ago",
    content: "Great content, really helpful!",
  },
  {
    id: 3,
    name: "Bob Johnson",
    avatar: "B",
    time: "5 h ago",
    content: "Nice video, thanks for sharing!",
  },
  {
    id: 4,
    name: "Emma Williams",
    avatar: "E",
    time: "2 h ago",
    content: "Amazing insights, loved it!",
  },
];

const CommentItem = React.memo(({ name, avatar, time, content }) => (
  <Box
    sx={{
      display: "flex",
      backgroundColor: colors.greycardcolor,
      flexDirection: "row",
      gap: 3,
      alignItems: "flex-start",
      borderRadius: "10px",
      width: "100%",
      padding: "18px 10px",

      transition: "all 0.3s ease-in-out", 
      "&:hover": { boxShadow: 6, backgroundColor: "#E4E4E41A" }, 
    }}
  >
    {/* Avatar */}
    <Avatar sx={{ width: 40, height: 40, backgroundColor: "#1976d2" }}>
      {avatar}
    </Avatar>

    {/* Content Box */}
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
      }}
    >
      {/* Name & Timestamp */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography sx={{ color: "#3F8CFF", fontSize: "14px" }}>
          {name}
        </Typography>
        <Typography sx={{ color: "#aaa", fontSize: "11px" }}>{time}</Typography>
      </Box>

      {/* Comment Content */}
      <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.5 }}>
        {content}
      </Typography>

      {/* Action Buttons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          justifyContent: "flex-start",
        }}
      >
        <IconButton>
          <StarIcon sx={{ fontSize: 25, color: "#666" }} />
        </IconButton>
        <IconButton>
          <ModeCommentIcon sx={{ fontSize: 25, color: "#666" }} />
        </IconButton>
        <IconButton>
          <MoreHorizIcon sx={{ fontSize: 25, color: "#666", borderRadius:"50%", borderLeftColor:"black"}} />
        </IconButton>
      </Box>
    </Box>
  </Box>
));


const Normalvideocommentbox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3, 
        width: { xs: "100%", sm: "90%", md: "60%" },
        backgroundColor: colors.greycardcolor,
        padding: 2,
        borderRadius: 2,
        boxShadow: 3,
       marginLeft:'3%',
       minWidth:"55%"
       
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography variant="h6" sx={{ fontFamily: "poppins", color: "white" }}>
          Comments
        </Typography>
        <Button
          endIcon={
            <KeyboardArrowDownIcon
              sx={{ fontFamily: "poppins", color: "white" ,marginLeft:"10px" }}
            />
          }
          sx={{
            textTransform: "none",
            fontSize: "14px",
            width:"100px",
            padding: "4px 0px",
            
            borderColor: "none",
            color: "grey",
            backgroundColor: "#E4E4E41A",
            transition: "all 0.3s ease-in-out", // Smooth transition for hover effect
            "&:hover": { backgroundColor: "#E4E4E41A" },
          }}
        >
          Now
        </Button>
      </Box>

     
      {comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </Box>
  );
};

export default Normalvideocommentbox;
