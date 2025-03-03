import { Box, Typography, useMediaQuery } from "@mui/material";
import Mic from "../../assets/images/Mic.svg";
import Arrow from "../../assets/images/arrow.svg";

// Sample podcast data
const podcasts = [
  { title: "The Truth of Climate Change: An Honest Conversation", author: "Michele Hansen" },
  { title: "Police Brutality and Race: A Raw Dialogue", author: "James McKinven" },
  { title: "Depression is B.S: Let's discuss", author: "Mahfuzul Nabil" },
  { title: "The Hidden Epidemic: Mental Health in Today's Society", author: "Dr. Jubed" },
  { title: "The Unspoken Narrative of Child Labor Worldwide", author: "Jesse Hanley" },
  { title: "What’s really happening: Israel vs Palestine", author: "Courtland Allen" },
  
];

const PodcastList = () => {
  const isMobile = useMediaQuery("(max-width:600px)"); // Detect small screens

  return (
    <Box p={2} bgcolor="#1D2244" borderRadius={4} sx={{ width: "100%" }} color="white">
      {/* Header */}
         <Typography fontSize={isMobile ? 14 : 16} mb={2} display="flex" alignItems="center" >
            Uncensored Podcast
             <img src={Arrow} alt="Arrow" width={isMobile ? 14 : 18}  color="white"/>
           </Typography>

      {/* Podcast Items */}
      {podcasts.map((podcast, index) => (
        <Box
          key={index}
          display="flex"
          alignItems="center"
          gap={2}
          p={1}
          borderRadius={2}
          mb={1}
          sx={{
            bgcolor: "transparent",
            cursor: "pointer",
            "&:hover": { bgcolor: "#2A2F58" },
          }}
        >
          {/* Microphone Icon */}
          <img src={Mic} alt="Mic" width={isMobile ? 20 : 45} />

          {/* Podcast Details */}
          <Box flex={1}>
            <Typography fontSize={isMobile ? 8 : 9} sx={{ color: "white" }}>
              {podcast.title}
            </Typography>
            <Typography fontSize={isMobile ? 7 : 9} color="#97989D" mt={0.5}>
              by {podcast.author}
            </Typography>
          </Box>

          {/* Arrow Icon */}
          <img src={Arrow} alt="Arrow" width={isMobile ? 14 : 18} />
        </Box>
      ))}
    </Box>
  );
};

export default PodcastList;
