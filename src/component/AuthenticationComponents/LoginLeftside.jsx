import React from "react";
import { Box, Typography } from "@mui/material";
import { ExtremeDareCard } from "../../component/ExtremeDareCardHorizontal/ExtremeDareCard";
import icon from "../../assets/images/icon.png"; // Importing the icon image
import AddBoxIcon from '@mui/icons-material/AddBox';

const LoginLeftSide = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "20px",
        gap: 1,
         // Space between elements
      }}
    >
      {/* Title: Icon and Dare.Me */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1, // Space between icon and text
        }}
      >
        <img
          src={icon}
          alt="Icon"
          style={{
            width: "55px",
            height: "55px",
          }}
        />
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            textAlign: "center",
            fontFamily: "DM Sans",
          }}
        >
          Dare
          <Typography
            variant="h4"
            component="span"
            sx={{
              color: "red",
            }}
          >
            .Me
          </Typography>
        </Typography>
      </Box>

      <Typography
        variant="caption"
        sx={{
          color: "white",
          fontWeight: "400",
        }}
      >
        Watch crazy live streams
      </Typography>

      <ExtremeDareCard width="5%" height={75} />
      <ExtremeDareCard width="5%" height={75} />
      <ExtremeDareCard width="5%" height={75} />

      <Typography
        variant="caption"
        sx={{
          color: "white",
          fontWeight: "500",
          padding:"5px"
        }}
      >
        <AddBoxIcon
          
          alt="Small Icon"
          style={{
            width: "12px",
            height: "12px",
          
            top:"1px",
            position:"relative"
            

            
          }}
        />{" "}
        Find more streamers
      </Typography>
    </Box>
  );
};

export default LoginLeftSide;
