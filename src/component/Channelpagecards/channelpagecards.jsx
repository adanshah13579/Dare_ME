import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import VideoPageCard from '../VideoPageCard/videopageCard';

export default function ChannelPageCardGrid() {
  const [visibleCards, setVisibleCards] = useState(8); // Initial number of visible cards
  const totalCards = 10; // Total available cards

  const handleLoadMore = () => {
    setVisibleCards((prev) => prev + 6); // Load 6 more cards when clicking "Load More"
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column",justifyContent:"center" ,alignItems: "center", width: "100%" }}>
      {/* Video Cards Row */}
      <Box 
        sx={{ 
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "start", 
          gap: 5, // Adds spacing between cards
          width: "100%", 
          marginLeft:"5%",
        }}
      >
        {Array.from({ length: Math.min(visibleCards, totalCards) }).map((_, index) => (
          <VideoPageCard key={index} isCompact={true} />
        ))}
      </Box>

      {/* "Load More" Button Box (Separate Box for Centering) */}
      {visibleCards < totalCards && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3, width: "100%" }}>
          <Button 
            variant="contained" 
            sx={{ bgcolor: "#E4E4E41A", color: "#fff", borderRadius: "10px", p: 1,}}
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        </Box>
      )}
    </Box>
  );
}
