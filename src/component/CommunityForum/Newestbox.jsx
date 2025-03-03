import { Card, Box, Typography } from "@mui/material";
import StarIcon from "../../assets/images/StarIcon.svg";
import PostIcon from "../../assets/images/PostIcon.svg";
import FollowingIcon from "../../assets/images/FollowingIcon.svg";

const Newest = () => {
  return (
    <Box p={2} bgcolor="#1D2244" borderRadius={4} sx={{ width: "100%", maxWidth: "600px", margin: "auto" }} color="white">
      {/* Newest and Recent */}
      <Card sx={{ bgcolor: "transparent", color: "white", p: 2, display: "flex", alignItems: "center", gap: 2 }} elevation={0}>
        <img src={StarIcon} alt="" style={{ width: "16%" }} />
        <Box>
          <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
            Newest and Recent
          </Typography>
          <Typography fontSize={12} color="#B0B3D6">Find the latest update</Typography>
        </Box>
      </Card>

      {/* Popular Post Today */}
      <Card 
        sx={{ 
          bgcolor: "transparent",
          color: "white", 
          mb: 2, 
          p: 2, 
          display: "flex", 
          alignItems: "center", 
          gap: 2,
          
          
        }} 
        elevation={0}
      >
        <img src={PostIcon} alt="" style={{ width: "14%" }} />
        <Box>
          <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
            Popular Post Today
          </Typography>
          <Typography fontSize={12} color="#B0B3D6">Featured Posts by the community</Typography>
        </Box>
      </Card>

      {/* Following */}
      <Card sx={{ bgcolor: "transparent", color: "white", p: 2, display: "flex", alignItems: "center", gap: 2,  }} elevation={0}>
        <img src={FollowingIcon} alt="" style={{ width: "16%" }} />
        <Box width="100%">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>Following</Typography>
          
          </Box>
          <Typography fontSize={12} color="#B0B3D6">Explore from your favorite people</Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default Newest;
