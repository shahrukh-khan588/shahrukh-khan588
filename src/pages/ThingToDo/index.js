import React from "react";
import { Box, Typography } from "@mui/material";
import ThingsToDo from "../../components/Things_to_do/head/Index";
import Gallery from "../../components/Things_to_do/gallery/Tabs";

function index() {
  return (
    <Box>
      <ThingsToDo />
      <Gallery/>
    </Box>
  );
}

export default index;
