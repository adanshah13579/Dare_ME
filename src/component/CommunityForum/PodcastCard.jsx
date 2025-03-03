import { Box, Typography, Avatar, IconButton, Chip } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import community from "../../assets/images/community.png";

const PostCard = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      bgcolor="#1D2244"
      borderRadius={4}
      p={2}
      gap={2}
      width="100%"
    >
      {/* Left - Image */}
      <Box width={{ xs: "100%", sm: "120px" }} height="120px" borderRadius={2} overflow="hidden">
        <img
          src={community}
          alt="Post Thumbnail"
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 8 }}
        />
      </Box>

      {/* Right - Content */}
      <Box flex={1} display="flex" flexDirection="column" gap={1.5} >
        {/* Title & Heart Icon */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontSize={12} fontWeight="400" color="white">
            TIFU by walking out Christmas morning
          </Typography>
          <IconButton sx={{ color: "#ccc", p: 0 }}>
            <FavoriteBorderIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Tags */}
        <Box display="flex" gap={1} mt={0.5} flexWrap="wrap">
          {["christmas", "I fucked up", "santa"].map((tag, index) => (
            <Chip key={index} label={tag} size="small" sx={{ bgcolor: "#21264A", color: "#ccc", fontSize: 8 }} />
          ))}
        </Box>

        {/* Profile & Stats */}
        <Box display="flex" alignItems="center" justifyContent="space-between">
          {/* Profile */}
          <Box display="flex" alignItems="center" gap={1}>
            <Avatar src="https://via.placeholder.com/40" sx={{ width: 32, height: 32 }} />
            <Box>
              <Typography fontSize={12} color="white">
                wildnshit
              </Typography>
              <Typography fontSize={10} color="#aaa">
                3 weeks ago
              </Typography>
            </Box>
          </Box>

          {/* Stats */}
          <Box display="flex" alignItems="center" gap={2} color="#ccc">
            <Typography  fontSize={10}>651,324 Views</Typography>
            <Typography  fontSize={10}>36,654 Likes</Typography>
            <Typography  fontSize={10}>56 comments</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PostCard;
