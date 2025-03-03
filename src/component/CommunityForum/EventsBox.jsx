import { Box, Typography, Chip, useMediaQuery } from "@mui/material";
import Arrow from "../../assets/images/arrow.svg";

const events = [
  {
    date: { day: 7, month: "FEB" },
    title: "Dare EVERYONE",
    host: "Dare Me Admins",
    tags: ["dare", "everyone", "worldwide"],
  },
  {
    date: { day: 3, month: "FEB" },
    title: "Dare Drake & Nicki Minaj",
    host: "Adin Ross",
    tags: ["drake", "nicki minaj"],
  },
  {
    date: { day: 5, month: "FEB" },
    title: "Dare Andrew Tate",
    host: "Andrew Tate",
    tags: ["dare", "andrew tate", "worldwide"],
  },
];

const LiveEventsSoon = () => {
  const isMobile = useMediaQuery("(max-width:600px)"); // Detect small screens

  return (
    <Box p={3} bgcolor="#1D2244" borderRadius={4} color="white" width="100%">
      {/* Header */}
      <Typography fontSize={isMobile ? 14 : 16} mb={2} display="flex" alignItems="center">
        Live Events Soon
        <img src={Arrow} alt="Arrow" width={isMobile ? 14 : 18} color="white"/>
      </Typography>

      {/* Events List */}
      {events.map((event, index) => (
        <Box key={index} display="flex" gap={2} mb={2} bgcolor="transparent" borderRadius={2}>
          {/* Date Box */}
          <Box
            textAlign="center"
        
            bgcolor="#21264A"
            borderRadius={2}
            height={isMobile ? 60 : 75}
            width={isMobile ? 35 : 35}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography fontSize={isMobile ? 8: 10} color="#fff">
              {event.date.month}
            </Typography>
            <Typography fontWeight="bold" fontSize={isMobile ? 14 : 16} color="#5D95E8">
              {event.date.day}
            </Typography>
          </Box>

          {/* Event Details */}
          <Box flex={1}>
            <Typography fontSize={isMobile ? 12 : 14}>{event.title}</Typography>
            <Typography fontSize={isMobile ? 8 : 10} color="#97989D" mb={1}>
              Hosted by {event.host}
            </Typography>

            {/* Tags */}
            <Box display="flex" gap={0.5} flexWrap="wrap">
              {event.tags.map((tag, i) => (
                <Chip
                  key={i}
                  label={tag}
                  size="small"
                  sx={{
                    bgcolor: "#21264A",
                    color: "#858EAD",
                    fontSize: isMobile ? 5 : 7,
                    padding: "1px 4px",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default LiveEventsSoon;
