import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

export const ExtremeDareCard = ({ width = "22%", height = 100 }) => {
  return (
    <Card
      sx={{
        width: width,
        minWidth: "260px",
        height: height,
        display: "flex",
        alignItems: "start",
        backgroundColor: "#E4E4E41A",
        boxShadow: "none",
        overflow: "hidden",
        marginLeft: "30px",
        gap: "10px",
        borderRadius: "12px",
        "@media (max-width:600px)": {
          maxWidth: "100%",
        },
        "@media (max-width:960px)": {
          maxWidth: "100%",
        },
      }}
    >
      {/* Dummy Image */}
      <Box
        sx={{
          width: 70,
          height: "100%",
          borderRadius: "10px",
          backgroundImage:
            "url(https://s3-alpha-sig.figma.com/img/f0a2/144f/d7bcf674e5b31d84c3c08e7e3bcdbd35?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TC643WpDwdtZZxN4YSyxWv-JxzRMtG-5iTvySWprCRtdaWmpy7FkwqSTk6TXGssDu-pAT6jOvs6akcqqQsn1T~BFi0t~Dtgesy3fwcSOp~-ZPmSOkwSTsA-fIKJDxNzb3Id86t2EAJwKbVr0nfUDD1qv8O7xsHXs-jxC00kqu4UzNsCvcohY6XrzZO6VOJexV0pbtsp0R-GKd1oi7NSzjXU8qVMqCTsv3oXdD5tu4c8g~FnaQgdnp5QrtKHNTKMu4QsPT5HKapX1N7Hw2J6v2aN79ZDwCexlmJiCJRvETdF63LddwwIDAgu2Cf6bEkJ2gAsVUQ~2mKpZsFhFbPR-kQ__)",
          backgroundSize: "cover",
          backgroundPosition: "start",
        }}
      />
      <CardContent
        sx={{
          padding: 0.5,
          flex: 1,
          marginLeft: "8px",
          marginTop: "10px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins",
            fontSize: "15px",
            fontWeight: 500,
            lineHeight: "16px",
            textAlign: "left",
            color: "white",
          }}
        >
          Extreme Dares
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontFamily: "Poppins",
            fontSize: "10px",
            fontWeight: 300,
            lineHeight: "16px",
            textAlign: "left",
            color: "grey",
          }}
        >
          online game
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "5px", // Add margin to space it a bit
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 117, 76, 1)",
              marginRight: "5px",
            }}
          ></span>
          <Typography
            variant="caption"
            sx={{
              fontFamily: "Poppins",
              fontSize: "11px",
              fontWeight: 300,
              lineHeight: "16px",
              textAlign: "left",
              color: "grey",
            }}
          >
            2.8K viewers
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
