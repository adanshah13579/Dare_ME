import React from "react";
import { Box, Typography } from "@mui/material";
import { Clock, Eye, UserPlus, PlusCircle, ShieldAlert } from "lucide-react";

const CurrentStats = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1E2342",
        borderRadius: "12px",
        padding: "4%",
        width: "100%",
        textAlign: "center",
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          color: "#fff",
          marginBottom: "5%",
          fontWeight: 400,
          fontSize: "110%",
        }}
      >
        Current Stats
      </Typography>

      {/* Stats Grid - 3 Rows, 2 Columns */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {/* Row 1 */}
        <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", px: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px", flex: 1, color: "#fff" }}>
            <Clock size={18} />
            <Typography fontSize="90%">6:20:45</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px", flex: 1, color: "#fff" }}>
            <PlusCircle size={18} />
            <Typography fontSize="90%">100 New Subs</Typography>
          </Box>
        </Box>

        {/* Row 2 */}
        <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", px: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px", flex: 1, color: "#fff" }}>
            <Eye size={18} />
            <Typography fontSize="90%">13.5k Views</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px", flex: 1, color: "#fff" }}>
            <ShieldAlert size={18} />
            <Typography fontSize="90%">5 Dares</Typography>
          </Box>
        </Box>

        {/* Row 3 */}
        <Box sx={{ display: "flex", px:2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px",color: "#fff" }}>
            <UserPlus size={18} />
            <Typography sx={{ display: "flex", alignItems: "center" }} fontSize="90%">
              300 New Follower
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CurrentStats;
