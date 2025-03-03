import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Leaderboard = ({ data ,user}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "900px",
        borderRadius: "12px",
        padding: "10px",
        color: "white",
        backdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          borderRadius: "10px",
          p: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          background: "radial-gradient(circle at top left, #EFEEEE52 30%, #EFEEEE0F 60%)",
          
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar src={data[0]?.avatar} sx={{ width: 50, height: 50, mr: 3 }} />
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {data[0]?.name}
            </Typography>
            <Typography variant="caption" sx={{ color: "white",fontSize:"15px !important" }}>
              #{data[0]?.id}
            </Typography>
          </Box>
        </Box>
       
        <Typography variant="h6" sx={{ fontWeight: 600, display: "flex", alignItems: "center" }}>
          <KeyboardArrowDownIcon sx={{ mr: 1 }} />
          Country Ranking: <span style={{ color: "#FFFFFFCC", marginLeft: "5px" }}>{user?.ranking || 248}</span>
        </Typography>
      </Box>

      {/* Table */}
      <TableContainer component={Paper} sx={{ background: "transparent", boxShadow: "none" , pl:3}}>
        <Table>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={{ color: "white", borderBottom: "none" }}>{row.rank}</TableCell>
                <TableCell sx={{ display: "flex", alignItems: "center", borderBottom: "none" }}>
                  <Avatar src={row.avatar} sx={{ width: 30, height: 30, mr: 3 }} />
                  <Typography variant="body2" sx={{ color: "white" }}>
                    {row.name}
                  </Typography>
                </TableCell>
                {!isMobile && <TableCell sx={{ color: "white", borderBottom: "none" }}>{row.id}</TableCell>}
                {!isMobile && <TableCell sx={{ color: "white", borderBottom: "none" }}>{row.country}</TableCell>}
                <TableCell sx={{ color: "white", borderBottom: "none" }}>{row.state}</TableCell>
                <TableCell sx={{ color: "white", borderBottom: "none" }}>{row.city}</TableCell>
                <TableCell sx={{ color: "white", borderBottom: "none" }}>{row.position}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Back Button */}
      <Box sx={{ mt: 1, textAlign: "start",ml: 3 }}>
        <IconButton sx={{ color: "white" }}>
          <ArrowBackIosNewIcon sx={{fontSize:"15px !important"}} />
        </IconButton>
        <Typography variant="body2" sx={{ display: "inline", ml: 1 }}>
          Back
        </Typography>
      </Box>
    </Box>
  );
};

export default Leaderboard;
