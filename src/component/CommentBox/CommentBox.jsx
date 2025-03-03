import { Box, IconButton, Divider, TextField, Button } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import MicIcon from "@mui/icons-material/Mic";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import colors from "../../style/color";

const Commentbox = () => {
  return (
    <Box
      sx={{
        position: "relative",
        bottom: 0,
        width: "100%",
        padding: "10px",
        backgroundColor: colors.greycardcolor,
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        maxWidth: { lg: "80%" },
      }}
    >
      {/* Icons Row */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left Side Icons */}
        <Box sx={{ display: "flex", gap: "10px" }}>
          <IconButton sx={{ color: "white" }}>
            <AttachFileIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <SentimentSatisfiedAltIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <MicIcon />
          </IconButton>
        </Box>

        {/* Right Side Add Icon */}
        <IconButton sx={{ color: "white" }}>
          <AddCircleIcon />
        </IconButton>
      </Box>

      {/* Input Field & Send Button */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "5px",
          gap: "10px",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message"
          InputProps={{
            sx: {
              height: "35px", // Adjusted height
              color: "white", // White text color
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent", // Remove blue border
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent", // No border on hover
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent", // No border on focus
              },
            },
          }}
          inputProps={{
            style: { fontSize: "10px" }, // Adjusted placeholder text size
          }}
          sx={{
            borderRadius: "12px",
            backgroundColor: "#444", // Grey background for input
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        />

        {/* Send Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: colors.buttoncolor,
            color: "white",
            borderRadius: "12px",
            height: "35px",
            minWidth: "100px",
            fontSize: "12px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: colors.greycardcolor, // Darker blue on hover
            },
          }}
        >
          Send
        </Button>
      </Box>

      {/* Divider */}
      <Divider sx={{ marginTop: "10px" }} />
    </Box>
  );
};

export default Commentbox;
