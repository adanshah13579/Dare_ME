import { Box, Typography, Avatar } from "@mui/material";
import Pinned1 from "../../assets/images/Pinned1.svg"
import Pinned2 from "../../assets/images/Pinned2.svg"
import Pinned3 from "../../assets/images/Pinned3.svg"
import Pinned4 from "../../assets/images/Pinned4.svg"
import Pinned5 from "../../assets/images/Pinned5.svg"

const tags = [
  { icon: Pinned1, tag: "#dare", count: "82,645", description: "Posted by this tag" },
  { icon: Pinned2, tag: "#darecoin", count: "65,523", description: "Posted • Trending" },
  { icon: Pinned3, tag: "#funny", count: "51,354", description: "Trending in USA" },
  { icon: Pinned4, tag: "#crazy", count: "48,029", description: "Posted by this tag" },
  { icon: Pinned5, tag: "#cool", count: "82,645", description: "Trending in Singapore" },
];

const PinnedGroups = () => {
  return (
    <Box p={2} bgcolor="#1D2244" borderRadius={4} sx={{width:"100%"}} color="white">
      <Typography sx={{fontSize:"18px"}} mb={2}>
        Pinned Group 
      </Typography>

      {tags.map((item, index) => (
        <Box
          key={index}
          display="flex"
          alignItems="center"
          gap={2}
        //   p={1}
          borderRadius={1}
        //   bgcolor={index % 2 === 0 ? "transparent" : "#21264A"}
          mb={1}
        >
          <Avatar variant="square" sx={{ width: 42, height: 42 }} src={item.icon}  />

          <Box>
            <Typography fontSize={13}>{item.tag}</Typography>
            <Typography fontSize={10} color="#B0B3D6">
              {item.count} {item.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default PinnedGroups;
