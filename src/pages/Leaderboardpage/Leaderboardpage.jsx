import React from "react";
import { Box } from "@mui/material";
import MainLayout from "../../layouts/Mainlayout";
import Leaderboard from "../../component/LeaderBoard/leaderboard";
import colors from "../../style/color";
import rock from "../../assets/images/rock.png";

const LeaderboardPage = () => {
    const leaderboardData = [
        { rank: 1, name: "The Pebble", id: "12348", country: "Aus", state: "Nonya", city: "Biznuz", position: "#1", avatar: rock },
        { rank: 2, name: "The Pebble", id: "12349", country: "Thailand", state: "Bang", city: "Cock", position: "#2", avatar: rock },
        { rank: 3, name: "The Pebble", id: "12350", country: "Croatia", state: "State", city: "City", position: "#3", avatar: rock },
        { rank: 4, name: "The Pebble", id: "12351", country: "USA", state: "State", city: "City", position: "#4", avatar: rock },
        { rank: 5, name: "The Pebble", id: "12352", country: "Dubai", state: "Haram", city: "Land", position: "#5", avatar: rock },
        { rank: 6, name: "The Pebble", id: "12353", country: "New Zealand", state: "State", city: "City", position: "#6", avatar: rock },
        { rank: 7, name: "The Pebble", id: "12354", country: "Singapore", state: "State", city: "City", position: "#7", avatar: rock },
      ];
  return (
    <MainLayout>

    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: colors.background }}>
      <Leaderboard data={leaderboardData} />
    </Box>
    </MainLayout>
  );
};

export default LeaderboardPage;
