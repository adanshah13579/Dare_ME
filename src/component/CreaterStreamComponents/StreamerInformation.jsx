import React, { useState } from "react";
import { Box, FormControlLabel, Checkbox, Button, Typography } from "@mui/material";
import { Search } from "lucide-react";

const StreamerInformation = () => {
  const [language, setLanguage] = useState("English");
  const [restrictLanguage, setRestrictLanguage] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: "#1E2342",
        color: "white",
        padding: "5%",
        borderRadius: "12px",
        width: "100%",
        maxWidth: "100%",
        height:"100%"
      }}
    >
      {/* Header */}
      <Typography sx={{ textAlign: "center", fontSize: "100%", fontWeight: 400, mb: "4%" }}>
        Stream Information
      </Typography>

      {/* Stream Title */}
      <Box sx={{ mb: "4%" }}>
      <Typography sx={{ fontSize: "90%", color: "white" }}>Stream Title <span style={{ color: "gray" }}>(50 words)</span></Typography>
      <input
          type="text"
          placeholder="Type your text here..."
          style={{
            width: "100%",
            height: "6vh",
            backgroundColor: "#111428",
            borderRadius: "8px",
            border: "none",
            color: "white",
            padding: "8px",
            fontSize: "80%",
            marginTop: "2%",
          }}
        />
      </Box>

      {/* Stream Description */}
      <Box sx={{ mb: "2%" }}>
      <Typography sx={{ fontSize: "90%", color: "white" }}>Stream Description <span style={{ color: "gray" }}>(100 words)</span></Typography>
      <textarea
          placeholder="Type your text here..."
          style={{
            width: "100%",
            height: "8vh",
            backgroundColor: "#111428",
            borderRadius: "8px",
            border: "none",
            color: "white",
            padding: "8px",
            fontSize: "80%",
            marginTop: "2%",
            resize: "none",
          }}
        />
      </Box>

      {/* Category */}
      <Box sx={{ mb: "4%" }}>
        <Typography sx={{ fontSize: "90%", color: "white" }}>Category</Typography>
        <Box sx={{ position: "relative", mt: "2%" }}>
          <Search
            size={18}
            color="white"
            style={{ position: "absolute", left: "5px", top: "50%", transform: "translateY(-50%)" }}
          />
          <input
            type="text"
            placeholder="Type your text here..."
            style={{
              width: "100%",
              height: "4vh",
              backgroundColor: "#11172C",
              borderRadius: "8px",
              border: "none",
              color: "white",
              padding: "8px 40px",
              fontSize: "80%",
            }}
          />
        </Box>
      </Box>

      {/* Search Tags */}
      <Box sx={{ mb: "4%" }}>
        <Typography sx={{ fontSize: "90%", color: "white" }}>Search Tags</Typography>
        <Box sx={{ position: "relative", mt: "2%" }}>
          <Search
            size={18}
            color="white"
            style={{ position: "absolute", left: "5px", top: "50%", transform: "translateY(-50%)" }}
          />
          <input
            type="text"
            placeholder="Type your text here..."
            style={{
              width: "100%",
              height: "4vh",
              backgroundColor: "#11172C",
              borderRadius: "2px",
              border: "none",
              color: "white",
              padding: "8px 40px",
              fontSize: "80%",
            }}
          />
        </Box>
        {/* Tags */}
        <Box sx={{ display: "flex", gap: "8px", mt: "2%" }}>
          {["FPS", "Giveaways", "unidares"].map((tag) => (
            <Box key={tag} sx={{ px: "5px", py: "4px", backgroundColor: "#3A3F69", fontSize: "70%",fontWeight:300, borderRadius: "4px" }}>
              {tag}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Language */}
      <Box sx={{ mb: "1%" }}>
        <Typography sx={{ fontSize: "90%", color: "gray" }}>Language</Typography>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{
            width: "100%",
            height: "5vh",
            backgroundColor: "#11172C",
            borderRadius: "8px",
            border: "none",
            color: "white",
            padding: "8px",
            fontSize: "80%",
            marginTop: "2%",
          }}
        >
          {["English", "Spanish", "French", "German"].map((lang) => (
            <option key={lang} value={lang} style={{ color: "black" }}>
              {lang}
            </option>
          ))}
        </select>
        {/* Restrict Language Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              checked={restrictLanguage}
              onChange={(e) => setRestrictLanguage(e.target.checked)}
              sx={{ color: "white", transform: "scale(0.7)" }}
            />
          }
          label={<Typography sx={{ fontSize: "70%", color: "gray" }}>Restrict Language</Typography>}
          sx={{ mt: "1%" }}
        />
      </Box>

      {/* Submit Button */}
      <Button
        fullWidth
        variant="contained"
        sx={{ borderRadius:"10px",backgroundColor: "#5A4FCF", mt: "1%", height: "6vh", fontSize: "60%" }}
      >
        Update Information
      </Button>
    </Box>
  );
};

export default StreamerInformation;
