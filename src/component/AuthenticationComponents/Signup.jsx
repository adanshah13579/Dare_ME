import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import colors from "../../style/color"; // Assuming you have a `colors` file.
import { useNavigate } from "react-router-dom";

const SignupComponent = () => {
  const navigate = useNavigate(); 

  const handlenav = (n) => {
    navigate(n); 
  };
  return (
    <Box
      sx={{
        width: "55%", // Default width
        minWidth: {
          xs: 280, // For small screens
          sm: 240, // For medium screens
          md: 300, // For large screens
        },
        maxWidth: {
          xs: 280, // For small screens
          sm: 240, // For medium screens
          md: 300, // For large screens
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
      <Typography
        variant="h6"
        textAlign="start"
        fontFamily="Poppins"
        fontSize="22px"
      >
        Sign up
      </Typography>

      {/* Subheading */}
      <Typography
        textAlign="start"
        sx={{ color: "grey", fontSize: "8px", marginBottom: "10px" }}
      >
        Already a user?{" "}
        <Typography
          component="span"
          sx={{
            color: "#3F8CFF", // Highlight color for "Create an account"
            cursor: "pointer",
            fontSize: "9px",
            marginLeft: "4px",
          }}
          onClick={()=>handlenav("/login")}
        >
          Login now
        </Typography>
      </Typography>

      {/* First and Last Name Inputs */}
      <Box
        sx={{
          display: "flex", // Arrange inputs in a row
          gap: 2, // Space between the inputs
          width: "100%", // Ensure inputs take up full width
        }}
      >
        {/* First Name */}
        <Box sx={{ flex: 1 }}>
          {" "}
          {/* Flex ensures equal width for both inputs */}
          <Typography sx={{ color: "grey", fontSize: "9px",marginBottom:"10px" }}>
            First Name
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter first name"
            size="small"
            sx={{
              height: 40,
              backgroundColor: "#E4E4E41A",
              borderRadius: 2,
              fontSize: "0.15rem",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
              "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "transparent",
                },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "transparent",
                },
              "& .MuiOutlinedInput-root": {
                color: "white",
              },
              "& .MuiInputBase-input::placeholder": {
                color: "white",
                fontSize: "0.6rem",
                opacity: 0.5,
              },
            }}
            inputProps={{
              style: { fontSize: "0.8rem" },
            }}
          />
        </Box>

        {/* Last Name */}
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ color: "grey", fontSize: "9px",marginBottom:"10px"  }}>
            Last Name
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter last name"
            size="small"
            sx={{
              height: 40,
              backgroundColor: "#E4E4E41A",
              borderRadius: 2,
              fontSize: "0.15rem",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
              "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "transparent",
                },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "transparent",
                },
              "& .MuiOutlinedInput-root": {
                color: "white",
              },
              "& .MuiInputBase-input::placeholder": {
                color: "white",
                fontSize: "0.6rem",
                opacity: 0.5,
              },
            }}
            inputProps={{
              style: { fontSize: "0.8rem" },
            }}
          />
        </Box>
      </Box>

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
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
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

export default SignupComponent;
