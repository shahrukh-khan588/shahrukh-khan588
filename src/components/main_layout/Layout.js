import * as React from "react";
import Header from "./Header";
import { Paper, Box, CircularProgress } from "@mui/material";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Box minHeight="70vh">{children}</Box>
      <Footer />
    </div>
  );
}
