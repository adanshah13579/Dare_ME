import React from "react";
import { Box, Button, Typography } from "@mui/material";

const StreamTestCard = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#161A36",
        color: "white",
        padding: { xs: "1.5rem", sm: "1.5rem", md: "1.5rem", lg: "1.5rem" },
        borderRadius: 3,
        textAlign: "center",
        margin: "auto",
        maxWidth: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1rem", lg: "1rem" },
          fontWeight: "500",
          mb: 2,
        }}
      >
        Stream Live or Stream Test
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "0.7rem" },
          color: "#B0B0C3",
          mb: 3,
        }}
      >
        You Are Currently Live
      </Typography>

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
          Live Stream Test
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
          End Live Stream
        </Button>
      </Box>
    </Box>
  );
};

export default StreamTestCard;
