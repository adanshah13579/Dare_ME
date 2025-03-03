import React from "react";
import { Box } from "@mui/material";
import LoginComponent from "../../component/AuthenticationComponents/LoginComponent";
import { ExtremeDareCard } from "../../component/ExtremeDareCardHorizontal/ExtremeDareCard";
import LoginLeftSide from "../../component/AuthenticationComponents/LoginLeftside";

const LoginPage = () => {
  const backgroundImageUrl =
    "https://s3-alpha-sig.figma.com/img/a019/386e/00332f5ef33efa6e2c0bd933f4191093?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=okggxD2mREaoUc8FAthaG1DrX9SthIBbA3XlQXGjoBdJcSmvewHEZTJ6-1QHmGueupu1TmV-AxPjc2dVg6x-GZUAkykyv2Vs1cGvFU6yintfItprzMhlgYfd1dgFzMapwDNPtodHYi1GN1xA6bPkXxJD4tKxSwi6OFvdxOd-phM5jdqnvTBFkGpv9GHPZtmjt0~kMNZo-1SwB5gu5R69SoR0EWjfgu0vBwitCwKv7m6X6evxFzB6L9SUkY-TeomHE7nQ5mqTOBnnMsRmRWuiuoL-Ci7u71Undyo-0YnmO8~sUi1EipgreNsnpwp0B2Um8maMnwLHe-5qOldrN64yrA__";

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transform: "scale(1.2)",
        overflow: "hidden",
        "&::-webkit-scrollbar": {
          display: "none", // Hides scrollbar in WebKit browsers
        },
        scrollbarWidth: "none",
        display: "flex", // Using Flexbox for centering
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens, horizontally on larger screens
          width: "60%",
          height: "auto",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", sm: "flex" }, // Hide on small screens
            justifyContent: "center",
            width: { xs: "100%", sm: "50%" },
            height: "auto",
          }}
        >
          <LoginLeftSide />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",

            width: { xs: "100%", sm: "50%" },
            height: "auto",
          }}
        >
          <LoginComponent />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
