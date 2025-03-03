import { Box, Typography, Avatar } from "@mui/material";
import Tag1 from "../../assets/images/Tag1.svg"
import Tag2 from "../../assets/images/Tag2.svg"
import Tag3 from "../../assets/images/Tag3.svg"
import Tag4 from "../../assets/images/Tag4.svg"
import Tag5 from "../../assets/images/Tag5.svg"
import Tag6 from "../../assets/images/Tag6.svg"

const tags = [
  { icon: Tag1, tag: "#weird", count: "82,645", description: "Posted by this tag" },
  { icon: Tag2, tag: "#darecoin", count: "65,523", description: "Posted • Trending" },
  { icon: Tag3, tag: "#cool", count: "51,354", description: "Trending in England" },
  { icon: Tag4, tag: "#weird", count: "48,029", description: "Posted by this tag" },
  { icon: Tag5, tag: "#funny", count: "51,354", description: "Trending in Australia" },
  { icon: Tag6, tag: "#crazy", count: "82,645", description: "Posted by this tag" },
];

const PopularTags = () => {
  return (
    <Box p={2} bgcolor="#1D2244" borderRadius={4} sx={{width:"100%"}} color="white">
      <Typography  mb={2} sx={{fontSize:"18px"}}>
        Popular Tags
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
          <Typography fontSize={14}>{item.tag}</Typography>
            <Typography fontSize={10} color="#B0B3D6">
              {item.count} {item.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default PopularTags;
