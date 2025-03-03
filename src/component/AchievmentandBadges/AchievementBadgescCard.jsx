import React from 'react';
import { Box, Typography } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'; // Badge Icon

const BadgeCard = ({ badge }) => {
  return (
    <Box sx={badgeBoxStyle}>
      <WorkspacePremiumIcon sx={{ color: "#3F8CFF", fontSize: 30 }} />
      <Typography sx={{ color: "#3F8CFF", mt: 1 }}>{badge}</Typography>
    </Box>
  );
};

const badgeBoxStyle = {
  bgcolor: "#1E1E2F",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  p: 2,
  borderRadius: "8px",
};

export default BadgeCard;
