import { Box, TextField, Button, Avatar, useMediaQuery } from "@mui/material";

const PostBar = () => {
  const isMobile = useMediaQuery("(max-width:600px)"); // Detect small screens

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // Ensures button stays at the end
        gap: 2,
        backgroundColor: "#1D2244",
        p: 1,
        borderRadius: 2,
        width: "100%",
      }}
    >
      {/* Profile Image */}
      <Avatar
        src="/path-to-profile-image.jpg"
        alt="User"
        sx={{ width: isMobile ? 32 : 40, height: isMobile ? 32 : 40 }}
      />

      {/* Input Field */}
      <TextField
        fullWidth
        placeholder="Let's share what’s on your mind..."
        variant="outlined"
        sx={{
          backgroundColor: "#21264A",
          borderRadius: 2,
          "& .MuiOutlinedInput-root": {
            "& fieldset": { border: "none" },
            "&:hover fieldset": { border: "none" },
            "&.Mui-focused fieldset": { border: "none" },
          },
          input: {
            color: "white",
            fontSize: isMobile ? "12px" : "14px", // Smaller font on mobile
          },
        }}
      />

      {/* Create Post Button (always stays at the right) */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FF4034",
          color: "white",
          px: isMobile ? 1.5 : 2.5, // Adjust padding for responsiveness
          py: isMobile ? 0.8 : 1.2,
          fontSize: isMobile ? "10px" : "12px", // Adjust font size
          minWidth: isMobile ? "90px" : "auto", // Keep button adaptable
          whiteSpace: "nowrap", // Prevent text wrapping
          "&:hover": { backgroundColor: "#D8342A" },
        }}
      >
        Create Post
      </Button>
    </Box>
  );
};

export default PostBar;
