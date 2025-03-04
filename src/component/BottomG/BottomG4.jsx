import React from "react";
import {Avatar, Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import nftlogo from "../../assets/images/nftlogo.svg";
import nftimage from "../../assets/images/nft.png";
import verified from "../../assets/images/verified.svg";
const data = [
  { name: "Dec 10", value: 5 },
  { name: "Dec 12", value: 12 },
  { name: "Dec 14", value: 7 },
  { name: "Dec 16", value: 14 },
  { name: "Dec 18", value: 9 },
];

const listings = [
  { price: "$34,250.32", amount: 2, from: "Ripper Head" },
  { price: "$12,327.87", amount: 1, from: "Rogily Wand" },
  { price: "$12,327.87", amount: 2, from: "Rogily Wand" },
];

const Component4 = () => {
  return (
    <Box sx={{ width: "100%",  mx: "auto", color: "white" }}>
      {/* Price History Section */}
      <Box
        sx={{
          backgroundColor: "#1C1A29",
          borderRadius: "12px",
          padding: "16px",
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6">Price history</Typography>
          <Select
            defaultValue="Last month"
            variant="outlined"
            sx={{
              backgroundColor: "#201A29",
              color: "#7455C9",
              borderRadius: "6px",
              fontSize: "10px",
              border:"1px solid #7455C9 ",
              height:"30px"
            }}
          >
            <MenuItem value="Last week">Last week</MenuItem>
            <MenuItem value="Last month">Last month</MenuItem>
            <MenuItem value="Last year">Last year</MenuItem>
          </Select>
        </Box>
        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={data}>
            <XAxis dataKey="name" tick={{ fill: "white" }} />
            <YAxis tick={{ fill: "white" }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#2A2838", color: "white", borderRadius: "8px" }}
            />
            <Line type="monotone" dataKey="value" stroke="#7A5AF8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      {/* Listings Section */}
      <Box
        sx={{
          backgroundColor: "#201A29",
          borderRadius: "12px",
          padding: "16px",
          mb: 2,
        }}
      >
        <Typography sx={{fontSize:"20px", my:0.5}}>Listings</Typography>
        <TableContainer component={Paper} sx={{ backgroundColor: "#201A29", borderRadius: "8px" }}>
          <Table>
            <TableHead sx={{border:"1px solid white"}}>
              <TableRow>
                <TableCell sx={{ color: "white" }}>Price</TableCell>
                <TableCell sx={{ color: "white" }}>Amount</TableCell>
                <TableCell sx={{ color: "white" }}>From</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
          

<TableBody>
  {listings.map((row, index) => (
    <TableRow key={index}>
      {/* Price with icon */}
      <TableCell sx={{ color: "white" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={nftlogo} alt="" style={{ width: "16px", height: "16px", marginRight: "6px" }} />
          {row.price}
        </Box>
      </TableCell>

      {/* Amount */}
      <TableCell sx={{ color: "white" }}>{row.amount}</TableCell>

      {/* From (User with Avatar) */}
      <TableCell sx={{ color: "white" }}>
        <Box sx={{ display: "flex", alignItems: "center",gap:"3px" }}>
          {/* <img src={nftimage} alt="" /> */}
          <Avatar
    src={nftimage}
    variant="square"
    sx={{
      width: 20,
      height: 20,
      border: "1px solid #00FFF0",
      borderRadius: "2px",
      marginLeft:"-10%"
    }}
  />
  <Avatar src={verified} sx={{ width: 16, height: 16 }} />
          {/* <Avatar src={row.avatar} sx={{ width: 24, height: 24, marginRight: 1 }} /> */}
          {row.from}
        </Box>
      </TableCell>

      {/* Buy Button */}
      <TableCell>
        <Button variant="contained" sx={{ backgroundColor: "#CEBDFE", color: "#3C1A9B" }}>
          Buy
        </Button>
      </TableCell>
    </TableRow>
  ))}
</TableBody>

          </Table>
        </TableContainer>
      </Box>

      {/* Offers Section */}
      <Box
        sx={{
          backgroundColor: "#1C1A29",
          borderRadius: "12px",
          padding: "16px",
          textAlign: "center",
        }}
      >
        <Typography variant="h6">Offers</Typography>
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          No offers yet. Be the first!
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#CEBDFE",
            mt: 2,
            borderRadius: "6px",
            fontWeight: "bold",
            color:"#3C1A9B"
          }}
        >
          Make Offer
        </Button>
      </Box>
    </Box>
  );
};

export default Component4;
