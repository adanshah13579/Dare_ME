import React from "react";
import { Box, Typography, Button } from "@mui/material";
import str5 from "../../assets/images/str5.png";
import colors from "../../style/color";

const RectangleCard = ({
  imageSrc = str5,
  title = "Keep Up!", // New default title for the stamp
  subTitle = "Fast Dares", // Updated heading
  watchingCount = "1.4K",
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens, horizontally on larger screens
        width: "100%",
        maxWidth: { xs: "100%", sm: "320px", md: "380px" },
        borderRadius: "8px", // Rounded corners
        boxShadow: 2, // Add a shadow for better visibility
        marginBottom: "16px",
        overflow: "hidden",
        backgroundColor: colors.greycardcolor,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "row" },
          width: "100%",
          backgroundColor: colors.greycardcolor,
          borderRadius: "8px",
        }}
      >
        {/* Image Section */}
        <Box
          component="img"
          src={imageSrc}
          alt="Card Image"
          sx={{
            width: { xs: "40%", sm: "45%", md: "50%" },
            height: "auto",
            objectFit: "cover",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
          }}
        />

        {/* Text Section */}
        <Box
          sx={{
            padding: { xs: "11px 12px", sm: "13px 16px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
           
            width: { xs: "100%", sm: "55%", md: "50%" },
          }}
        >
          {/* Blue Transparent Stamp */}
          <Box
            sx={{
              display: "inline-block",
              backgroundColor: "rgba(30, 144, 255, 0.2)", // Transparent blue background
              color: "#1E90FF", // Blue text
              fontSize: { xs: "10px", sm: "12px" },
              padding: "2px 6px",
              borderRadius: "4px",
              alignSelf: "flex-start", // Align to the top-left corner
              marginBottom: "8px",
            }}
          >
            {title}
          </Box>

          {/* Heading */}
          <Typography
            variant="h6"
            sx={{
              color: colors.textColor,
              fontWeight: "bold",
              fontSize: { xs: "14px", sm: "16px", md: "16px" },
              marginBottom: "8px",
            }}
          >
            {subTitle}
          </Typography>

          {/* Watching count with green dot */}
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
            <Box
              sx={{
                width: "6px",
                height: "6px",
                backgroundColor: "green",
                borderRadius: "50%",
                marginRight: "8px",
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "grey",
                fontSize: { xs: "12px", sm: "14px", md: "14px" },
              }}
            >
              {watchingCount} watching
            </Typography>
          </Box>

          {/* Follow Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: " #E4E4E41A",
              "&:hover": { backgroundColor: "#5742a1" },
              width: { xs: "70%", sm: "90%" },
              marginLeft: { xs: "5%", sm: "0" },
              textTransform: "none",
              padding: "8px 12px", // Increased padding for a comfortable look
              fontSize: { xs: "12px", sm: "14px", md: "14px" },
              borderRadius: "12px", // Increased border radius
            }}
          >
            Follow
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RectangleCard;
