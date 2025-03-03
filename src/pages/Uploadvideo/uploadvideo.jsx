import React from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MainLayout from "../../layouts/Mainlayout";
import colors from "../../style/color";
import UploadBox from "../../component/UploadVideo/uploadbox";
import LiveBox from "../../component/UploadVideo/livevideobox";
import OtherWaysToUpload from "../../component/OtherwayUpload/otherwayupload";
import { ExtremeDareCard } from "../../component/ExtremeDareCardHorizontal/ExtremeDareCard";

const UploadVideo = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          width: "100%",
          p: 3,
          backgroundColor: colors.background,
          minHeight: "100%",
          pl: 6,
        }}
      >
        {/* Heading */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "white",
            mb: 2,
            alignSelf: "flex-start",
          }}
        >
          Upload Videos
        </Typography>

        {/* Responsive Layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Column for small screens, row for larger screens
            gap: 2,
          }}
        >
          {/* Left Box (Uploads) */}
          <Box
            sx={{
              width: { xs: "100%", md: "60%" },
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <UploadBox />
            <LiveBox />
          </Box>

          {/* Right Box (Other Ways + Playlist + Cards) */}
          <Box
            sx={{
              width: { xs: "100%", md: "30%" },
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <OtherWaysToUpload />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingX:2
              }}
            >
              <Typography
                sx={{ color: "white", fontWeight: "bold", fontSize: "17px" }}
              >
                Add to Playlist
              </Typography>
              <IconButton sx={{ color: "white" }}>
                <AddIcon />
              </IconButton>
            </Box>

            <ExtremeDareCard />
            <ExtremeDareCard />
            <ExtremeDareCard />

            <Button
                  variant="contained"
                  sx={{
                   
                    width:"60%",
                    height:"55px",
                    mt:2,
                    ml:6,
                    backgroundColor: "#E4E4E41A",
                    color: "white",
                    padding: "12px 20px",
                    borderRadius: "10px",
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: 600,
                    alignSelf:"start",
                    "&:hover": {
                      backgroundColor: "#FF6230",
                    },
                  }}
                >
                  Discover More
                </Button>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default UploadVideo;
