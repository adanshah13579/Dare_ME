import React from "react";
import { Box, Typography } from "@mui/material";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LabelList } from "recharts";
import colors from "../../style/color";
import badge from "../../assets/images/badge.png";

const data = [
  { name: "Day 1", Subscriptions: 150, Followed: 80, ProfileVisits: 70 },
  { name: "Day 2", Subscriptions: 120, Followed: 95, ProfileVisits: 60 },
  { name: "Day 3", Subscriptions: 150, Followed: 85, ProfileVisits: 75 },
];

const AnalyticsDashboard = () => {
  return (
    <Box
      sx={{
        mt: 5,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "stretch", // Ensures both boxes stretch to the same height
        px: 2,
        gap: 3,
        backgroundColor: colors.background,
        marginLeft:{xs:"-1.5%",sm:"-1.5%",md:"-1.5%",lg:"-1.5%",xl:"-1%"}
      }}
    >
      {/* Left Box */}
      <Box sx={{ width: { xs: "100%", md: "30%" }, mb: { xs: 3, md: 0 }, display: "flex", flexDirection: "column", gap: 3 }}>
        <Box sx={{ backgroundColor: "#1E2342", p: 2, borderRadius: "15px", textAlign: "center", flexGrow: 1 }}>
          <Typography color="white" fontSize={14}>Followers Last Stream</Typography>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
            <img src={badge} alt="badge" style={{ width: "45px", height: "18px" }} />
            <Typography color="white" fontSize={40} fontWeight="bold">300</Typography>
          </Box>
        </Box>

        <Box sx={{ backgroundColor: "#1E2342", p: 2, borderRadius: "15px", textAlign: "center", flexGrow: 1 }}>
          <Typography color="white" fontSize={14}>Subs Last Stream</Typography>
          <Typography color="white" fontSize={40} fontWeight="bold">20</Typography>
        </Box>

        <Box sx={{ backgroundColor: "#1E2342", p: 2, borderRadius: "15px", textAlign: "center", flexGrow: 1 }}>
          <Typography color="white" fontSize={14}>Overall Performance</Typography>
          <Typography fontSize={35}>😊</Typography>
        </Box>
      </Box>

      {/* Right Box (Chart) */}
      <Box
        sx={{
          width: { xs: "100%", md: "100%" },
          backgroundColor: "#1E2342",
          borderRadius: "15px",
          p: 2,
          minHeight: "100%", // Matches height with left box
          display: "flex",
          flexDirection: "column",
          marginRight:"-1.5%"
        }}
      >
        <Typography color="white" textAlign="center" fontSize={16} mt={2}>Analytics Highlights</Typography>
        <Typography color="gray" textAlign="center" fontSize={12} mb={2}>Dec 1 - 8</Typography>

        <Box sx={{ flexGrow: 1 }}>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="white" tick={false} axisLine={false} />
              <YAxis stroke="white" tick={false} axisLine={false} />
              <Tooltip cursor={{ fill: "#1E2342" }} contentStyle={{ backgroundColor: "#333", color: "#fff" }} />
              <Legend wrapperStyle={{ color: "white" }} />
              <Bar dataKey="Subscriptions" fill="#00C853" barSize={30}>
                <LabelList dataKey="Subscriptions" position="top" fill="white" fontSize={12} />
              </Bar>
              <Bar dataKey="Followed" fill="#FFA000" barSize={30}>
                <LabelList dataKey="Followed" position="top" fill="white" fontSize={12} />
              </Bar>
              <Bar dataKey="ProfileVisits" fill="#D32F2F" barSize={30}>
                <LabelList dataKey="ProfileVisits" position="top" fill="white" fontSize={12} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default AnalyticsDashboard;
