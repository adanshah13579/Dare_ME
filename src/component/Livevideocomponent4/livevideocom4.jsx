import React from "react";
import { Box } from "@mui/material";
import { ExtremeDareCard } from "../ExtremeDareCardHorizontal/ExtremeDareCard";

const Componentfour = () => (
  <Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" }, // Column for small screens, row for larger
    gap: 2,
    flexWrap: "wrap", // Allow the cards to wrap to the next line when necessary
    alignItems: { xs: "center", sm: "center" },
    justifyContent: { xs: "center", sm: "center", md: "start" },
    width: { xs: "100%", sm: "100%", md: "100%" },
    padding: 2,
  }}
>
  <ExtremeDareCard width="5%" height={75} />
  <ExtremeDareCard width="5%" height={75} />
  <ExtremeDareCard width="5%" height={75} />
</Box>

);

export default Componentfour;
