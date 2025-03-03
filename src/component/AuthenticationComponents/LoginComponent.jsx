import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import colors from "../../style/color"; // Assuming you have a `colors` file.

const LoginComponent = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handlenav = (n) => {
    navigate(n); // Navigate to the route passed as argument
  };

  return (
    <Box
      sx={{
        width: "55%", // Default width
        minWidth: {
          xs: 280,  // For small screens
          sm: 240,  // For medium screens
          md: 300,  // For large screens
        },
        maxWidth: {
            xs: 280,  // For small screens
            sm: 240,  // For medium screens
            md: 300,  // For large screens
          },
        padding: 3,
        borderRadius: 7,
        backgroundColor: colors.greycardcolor, // Global background color
        boxShadow: 3,
        mx: "auto",
        my: 8,
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        position: "relative",
        color: "white", // White text globally
      }}
    >
      {/* Close icon */}
      <Box
        sx={{
          position: "absolute",
          top: 18,
          right: 25,
          cursor: "pointer",
          color: "white", // Close icon color
        }}
      >
        <CloseIcon sx={{ fontSize: "13px" }} />
      </Box>

      {/* Main Heading */}
      <Typography variant="h6" textAlign="start" fontFamily="Poppins" fontSize="22px">
        Sign In
      </Typography>

      {/* Subheading */}
      <Typography textAlign="start" sx={{ color: "grey", fontSize: "8px", marginBottom: "10px" }}>
        New user?{" "}
        <Typography
          component="span"
          sx={{
            color: "#3F8CFF", // Highlight color for "Create an account"
            cursor: "pointer",
            fontSize: "9px",
            marginLeft: "4px",
          }}
       onClick={()=>handlenav("/signup")} >
          Create an account
        </Typography>
      </Typography>

      {/* Email Input */}
      <Typography sx={{ color: "grey", fontSize: "9px" }}>Username or Email</Typography>
      <TextField
        fullWidth
        placeholder="Enter your username & email"
        size="small"
        sx={{
          height: 40,
          backgroundColor: "#E4E4E41A",
          borderRadius: 2,
          fontSize: "0.15rem", // Adjust input font size
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent", // Remove border color
          },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent", // Keep it transparent on hover
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent", // Transparent when focused
          },
          "& .MuiOutlinedInput-root": {
            color: "white", // White text color for input text
          },
          "& .MuiInputBase-input::placeholder": {
            color: "white", // White placeholder color
            fontSize: "0.6rem", // Adjust placeholder font size
            opacity: 0.5, // Placeholder opacity
          },
        }}
        inputProps={{
          style: { fontSize: "0.8rem" }, // Adjust input font size
        }}
      />

      {/* Password Input */}
      <Typography sx={{ color: "grey", fontSize: "9px" }}>Password</Typography>
      <TextField
        fullWidth
        placeholder="Enter your Password"
        size="small"
        sx={{
          height: 40,
          backgroundColor: "#E4E4E41A",
          borderRadius: 2,
          fontSize: "0.15rem", // Adjust input font size
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent", // Remove border color
          },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent", // Keep it transparent on hover
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent", // Transparent when focused
          },
          "& .MuiOutlinedInput-root": {
            color: "white", // White text color for input text
          },
          "& .MuiInputBase-input::placeholder": {
            color: "white", // White placeholder color
            fontSize: "0.6rem", // Adjust placeholder font size
            opacity: 0.5, // Placeholder opacity
          },
        }}
        inputProps={{
          style: { fontSize: "0.8rem" }, // Adjust input font size
        }}
      />

      {/* Continue Button */}
      <Button
        fullWidth
        sx={{
          height: 36, // Button height
          fontSize: "0.6rem", // Button text size
          backgroundColor: "#6C5DD3",
          color: "white",
          marginTop: "7px",
          padding: "2px 16px",
          borderRadius: "5px", // Adjust padding
        }}
      >
        Continue
      </Button>

      <Typography variant="caption" sx={{ color: "grey", fontSize: "9px" }}>
        or Continue with
      </Typography>

      {/* Google Sign Up Button */}
      <Button
        fullWidth
        sx={{
          height: 36, // Button height
          fontSize: "0.6rem", // Button text size
          backgroundColor: colors.bluebuttoncolor,
          color: "white",
          padding: "2px 16px",
          borderRadius: "5px", // Adjust padding
        }}
      >
        Google
      </Button>
    </Box>
  );
};

export default LoginComponent;
