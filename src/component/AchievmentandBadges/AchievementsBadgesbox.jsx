import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // Trophy Icon
import BadgeCard from './AchievementBadgescCard';
import colors from '../../style/color';

export default function AchievementsBadges() {
  // Data for achievements and badges
  const achievements = [...Array(5)].map((_, index) => `Achievement ${index + 1}`);
  const badges = [...Array(5)].map((_, index) => `Badge ${index + 1}`);

  return (
    <Box sx={{ width: "100%", bgcolor: colors.background, p: 3, borderRadius: "10px" }}>

      {/* Title with Divider in front */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        
        <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold" }}>
          MY ACHIEVEMENTS & BADGES
        </Typography>
        <Divider sx={{ flex: 1, bgcolor: "#fff", height: "2px", ml: 2 }} />
      </Box>

      {/* Achievements Section */}
      <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2, flexWrap: "wrap" }}>
        {[...Array(4)].map((_, index) => (
          <Box key={`achievement-${index}`} sx={achievementBoxStyle}>
            <EmojiEventsIcon sx={{ color: "#FFC107", fontSize: 30 }} />
            <Typography sx={{ color: "#FFC107", mt: 1 }}>Achievement {index + 1}</Typography>
          </Box>
        ))}
      </Box>

      {/* Badges Section */}
      <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2, flexWrap: "wrap", mt: 4 }}>
        {badges.map((badge, index) => (
          <BadgeCard key={`badge-${index}`} badge={badge} />
        ))}
      </Box>
    </Box>
  );
}

// Styles for Achievements Section
const achievementBoxStyle = {
  bgcolor: "#1E1E2F",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  p: 2,
  borderRadius: "8px",
};
