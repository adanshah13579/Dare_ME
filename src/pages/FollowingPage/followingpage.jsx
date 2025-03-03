import {
  Box,
  Checkbox,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { ExtremeDareCard } from "../../component/ExtremeDareCardHorizontal/ExtremeDareCard";
import Stories from "../../component/Stories/Stories";
import MainLayout from "../../layouts/Mainlayout";
import colors from "../../style/color";
import VideoSlider from "../../component/VideoSlider/videoslider";
import ModernCard from "../../component/Maincard/maincard";
import { useState } from "react"; // Importing useState to manage state
import Followersuploaded from "../../component/Followersrecently/followersrecently";
import FollowerUploaded from "../../component/Followersrecently/followersrecently";

const FollowingPage = () => {
  const [personName, setPersonName] = useState([]); // State to manage selected items
  const names = ["John", "Jane", "Alice", "Bob"]; // Example list of names
  const MenuProps = {}; // Adjust or add your MenuProps as necessary

  const handleChange = (event) => {
    const value = event.target.value;
    setPersonName(value);
  };

  return (
    <MainLayout>
      <Stories grey_color="#242731" />

      <Box
        sx={{
          display: "flex", // Use flexbox layout
          flexDirection: "row", // Align items in a row
          flexWrap: "wrap", 
          gap: "10px", // Space between cards
          justifyContent: { xs: "center", sm: "start", lg: "start" }, // Align cards to the left
          width: "100%",
          padding: "20px",
          backgroundColor: colors?.background, // Full width of the parent container
        }}
      >
        <ExtremeDareCard backgroundColor={colors?.greycardcolor} />
        <ExtremeDareCard backgroundColor={colors?.greycardcolor} />
        <ExtremeDareCard backgroundColor={colors?.greycardcolor} />
      </Box>

      <VideoSlider />

      <FollowerUploaded/>


   
    </MainLayout>
  );
};

export default FollowingPage;
