import React from "react";
import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";

const Normalvideocard = () => {
  return (
    <Card
  sx={{
    display: "flex",
    flexDirection: "row",
    gap: 2,
    padding: "12px",
    backgroundColor: "#E4E4E41A",
    borderRadius: "12px",
    boxShadow: "none",
    overflow: "hidden",
    width: {
      xs: "90%", // Full width on extra-small screens
      sm: "65%",  // 90% width on small screens
      md: "70%",  // 70% width on medium screens
      lg: "85%",  // 85% width on large screens
    },
    height: {
      xs: "120px", // Consistent height for small screens
      sm: "130px",
      md: "130px",
      lg: "120px",
    },
    minWidth:"80%",
    "@media (max-width:600px)": {
      flexDirection: "row", // Keep the content in a single row
      flexWrap: "nowrap",  // Prevent wrapping
    },
  }}
>
  {/* Content here */}


      {/* Profile Image with Timestamp Overlay */}
      <Box
        sx={{
          position: "relative",
          width: "150px",
          height: "100px",
          borderRadius: "10px",
          backgroundImage:
            "url(https://s3-alpha-sig.figma.com/img/f0a2/144f/d7bcf674e5b31d84c3c08e7e3bcdbd35?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TC643WpDwdtZZxN4YSyxWv-JxzRMtG-5iTvySWprCRtdaWmpy7FkwqSTk6TXGssDu-pAT6jOvs6akcqqQsn1T~BFi0t~Dtgesy3fwcSOp~-ZPmSOkwSTsA-fIKJDxNzb3Id86t2EAJwKbVr0nfUDD1qv8O7xsHXs-jxC00kqu4UzNsCvcohY6XrzZO6VOJexV0pbtsp0R-GKd1oi7NSzjXU8qVMqCTsv3oXdD5tu4c8g~FnaQgdnp5QrtKHNTKMu4QsPT5HKapX1N7Hw2J6v2aN79ZDwCexlmJiCJRvETdF63LddwwIDAgu2Cf6bEkJ2gAsVUQ~2mKpZsFhFbPR-kQ__)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Timestamp */}
        <Typography
          variant="caption"
          sx={{
            position: "absolute",
            top: 3,
            left: 4,
            padding: "4px 8px",
            backgroundColor: "rgba(0, 0, 0, 0.48)",
            borderRadius: "4px",
            color: "white",
            fontSize: "8px",
            fontWeight: 300,
          }}
        >
          10:45 AM
        </Typography>
      </Box>

      {/* Message Content */}
      <CardContent
        sx={{
          padding: 0,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins",
            fontSize: "13px",
            fontWeight: 500,
            lineHeight: "18px",
            color: "white",
          }}
        >
          Weird dude tries chili challenge 🤣
        </Typography>

        {/* Green Dot and Caption */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "rgba(76, 175, 80, 1)", // Green dot
            }}
          ></Box>
          <Typography
            variant="caption"
            sx={{
              fontFamily: "Poppins",
              fontSize: "10px",
              fontWeight: 300,
              lineHeight: "16px",
              color: "grey",
            }}
          >
            3 months ago
          </Typography>
        </Box>

        {/* Avatar and Username */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1,  }}>
          <Avatar
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            sx={{ width: 21, height: 21 }}
          />
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Poppins",
              fontSize: "10px",
              fontWeight: 400,
              lineHeight: "12px",
              color: "white",
            }}
          >
            Username
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Normalvideocard;
