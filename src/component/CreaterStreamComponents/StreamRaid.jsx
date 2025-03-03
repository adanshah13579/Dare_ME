import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Search } from "lucide-react";

const StreamRaid = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#161A36",
        color: "white",
        padding: { xs: "1rem", sm: "1rem", md: "1rem", lg: "1rem" },
        borderRadius: "16px",
        textAlign: "center",
        margin: "auto",
        maxWidth: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1rem", lg: "1rem" },
          fontWeight: "400",
          mb: 0.2,
        }}
      >
        Stream Raid
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "0.7rem" },
          color: "white",
          mb: 1,
          fontWeight:300
        }}
      >
Search for Streamers you want to raid      </Typography>

<Typography
        sx={{
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1rem", lg: "0.5rem" },
          fontWeight: "500",
          mb: 0.2,
          width:"100%",
          color:"grey"
        }}
      >
        Stream raiding functionality lets you combine your viewers with another Streamer’s viewers and co-join the stream live together,
      </Typography>

      <Box sx={{ mb: "4%" }}>
        <Box sx={{ position: "relative", mt: "2%" }}>
          <Search
            size={18}
            color="white"
            style={{ position: "absolute", left: "5px", top: "50%", transform: "translateY(-50%)" }}
          />
          <input
            type="text"
            placeholder="Type your text here..."
            style={{
              width: "100%",
              height: "4vh",
              backgroundColor: "#11172C",
              borderRadius: "8px",
              border: "none",
              color: "white",
              padding: "8px 40px",
              fontSize: "70%",
            }}
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, flexWrap: "wrap" }}>
        <Button
          sx={{
            backgroundColor: "#6C5DD3",
            color: "white",
            borderRadius: "8px",
            padding: { xs: "8px 12px", sm: "8px 14px", md: "8px 12px" },
            fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.7rem" },
            textTransform: "none",
            "&:hover": { backgroundColor: "#5A4FCF" },
          }}
        >
          i am hosting
        </Button>
        <Button
          sx={{
            backgroundColor: "#FF5C5C",
            color: "white",
            borderRadius: "8px",
            padding: { xs: "8px 12px", sm: "8px 14px", md: "8px 12px" },
            fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.7rem" },
            textTransform: "none",
            "&:hover": { backgroundColor: "#E04B4B" },
          }}
        >
          i am rating
        </Button>
      </Box>
    </Box>
  );
};

export default StreamRaid;
