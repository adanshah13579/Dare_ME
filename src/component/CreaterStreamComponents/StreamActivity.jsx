import React from "react";
import { Box, Typography, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import MoneyIcon from "@mui/icons-material/AttachMoney";

const dares = [
  { username: "JohnySilverBallz", amount: "$800", time: "1hr. Ago", status:  "success" },
  { username: "John Cena", amount: "$20", time: "1hr. Ago", status: "success" },
  { username: "KappaGaming", amount: "$15", time: "3hrs Ago", status: "failed" },
  { username: "322Gaming", amount: "$35", time: "5hrs Ago", status: "failed" },
  { username: "KappaGaming", amount: "$15", time: "3hrs Ago", status: "failed" },
  { username: "322Gaming", amount: "$35", time: "5hrs Ago", status: "failed" },
  { username: "KappaGaming", amount: "$15", time: "3hrs Ago", status: "failed" },
  { username: "322Gaming", amount: "$35", time: "5hrs Ago", status: "failed" },
  { username: "322Gaming", amount: "$35", time: "5hrs Ago", status: "failed" },
 
  
];

const StreamActivity = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#161A36",
        color: "white",
        padding: 2,
        borderRadius: "16px",
        textAlign: "center",
        maxWidth: "100%",
        height: "100%", // Fixed height to ensure it fits the container
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Typography sx={{ fontSize: "0.9rem", fontWeight: "500", mb: 1 }}>Stream Activity Log</Typography>

      {/* List of Dares with Scrolling */}
      <Box sx={{ overflowY: "auto", flex: 1 }}>
        <List sx={{ padding: 0 }}>
          {dares.map((dare, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: index !== dares.length - 1 ? "1px solid rgba(255, 255, 255, 0.2)" : "none",
                paddingY: "6px",
              }}
            >
              {/* Avatar and Name */}
              <ListItemAvatar>
                <MoneyIcon sx={{ color: "#4CAF50", fontSize: "1rem" }} />
              </ListItemAvatar>

              {/* Text */}
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: "0.75rem", fontWeight: "bold", color: "white" }}>
                    {dare.username}
                  </Typography>
                }
                secondary={
                  <Typography sx={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.6)" }}>
                    Sent a {dare.amount} worth of Dare
                  </Typography>
                }
              />

              {/* Status Icons */}
              {dare.status === "success" && <CheckIcon sx={{ color: "#4CAF50", fontSize: "1rem" }} />}
              {dare.status === "failed" && <CloseIcon sx={{ color: "#FF4C4C", fontSize: "1rem" }} />}

              {/* Time */}
              {dare.time && (
                <Typography sx={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", ml: 1 }}>
                  {dare.time}
                </Typography>
              )}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default StreamActivity;
