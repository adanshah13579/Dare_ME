import React, { useState } from "react";
import { Box, Typography, TextField, Button, InputAdornment } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import colors from "../../style/color";

const messages = [
  { username: "DamonVanz", text: "Are you going back to CS pro scene?", color: "#FF5C5C" },
  { username: "ImT22", text: "yes", color: "#FFAA33" },
  { username: "G4merX24", text: "I told you he is in the right of that door", color: "#FFD700" },
  { username: "RandyGG", text: "Don’t 322 broo", color: "#8A2BE2" },
  { username: "Phasmos1X", text: "WKC", color: "#FF69B4" },
  { username: "SuctionHasker", text: "WKC", color: "#FF69B4" },
  { username: "MariaTheeN", text: "WKC", color: "#FFFFFF" },
  { username: "PapiVic", text: "🔥", color: "#FFD700" },
  { username: "JohnnySilverBullets", text: "Sent you a Dare for $500", color: "#32CD32", highlight: true },
  { username: "ChrisP.Bacon", text: "$500 for a knife kill?? Shoooosh", color: "#00FFFF" },
  { username: "Phasmos1X", text: "Reddit king gone do it for $500?", color: "#FF69B4" },
  { username: "G4merX24", text: "$500 sheeeesh 🤑🤑", color: "#FFD700" },
  { username: "GottiXtrm", text: "$5000?????", color: "#32CD32" },
  { username: "Gavin2K", text: "Shoooooooooooooooeshhhhhh", color: "#32CD32" },
  { username: "MariaTheeN", text: "WKC", color: "#FFFFFF" },
  { username: "PapiVic", text: "🔥", color: "#FFD700" },
  { username: "JohnnySilverBullets", text: "Sent you a Dare for $500", color: "#32CD32", highlight: true },
  { username: "ChrisP.Bacon", text: "$500 for a knife kill?? Shoooosh", color: "#00FFFF" },
  
];

const StreamChat = () => {
  const [inputMessage, setInputMessage] = useState("");

  return (
    <Box
      sx={{
        backgroundColor: "#161A36",
        color: "white",
        padding: 2,
        borderRadius: "16px",
        py:3,
        textAlign: "center",
        margin: "auto",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Header */}
      <Typography
        sx={{
          fontSize: { xs: "1rem", sm: "1.2rem" },
          fontWeight: "400",
          mb: 1,
        }}
      >
        Stream Chat
      </Typography>

      {/* Chat Messages */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "#161A36",
          borderRadius: "10px",
          padding: "10px",
          alignItems:"start"
        }}
      >
        {messages.map((msg, index) => (
          <Typography
            key={index}
            sx={{
              fontSize: "0.7rem",
              color: msg.color,
              backgroundColor: msg.highlight ? "#3B3F6C" : "transparent",
              padding: msg.highlight ? "5px 10px" : "0px",
              borderRadius: "8px",
              display: "inline-block",
            }}
          >
            <b>{msg.username}:</b> {msg.text}
          </Typography>
        ))}
      </Box>

      {/* Input Field */}
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Type your text here..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          sx={{
            input: { color: "white" },
            backgroundColor: colors.background,
            borderRadius: "8px",
            "& fieldset": { border: "none" },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  sx={{
                    backgroundColor: "#6C5DD3",
                    color: "white",
                    borderRadius: "8px",
                    textTransform: "none",
                    padding: "5px 15px",
                    "&:hover": { backgroundColor: "#5A4FCF" },
                  }}
                >
                  Chat
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default StreamChat;
