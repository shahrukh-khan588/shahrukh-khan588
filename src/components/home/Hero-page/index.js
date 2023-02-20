import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import useStyles from "./styles";
import Typical from "react-typical";
import Hunza from "../../../assets/hunza.mp4";
// import '~animate.css';

import Searchbar from "./search_bar";

function Hero_page() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <section style={{ height: "100vh", position: "relative" }}>
        <Box>
          <video
            src={Hunza}
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              position: "absolute",
              top: "-90px",
              zIndex: "-1",
            }}
          />
        </Box>
        <Box
          sx={{
            background: "#c8e6c9",
            position: "absolute",
            bottom: "-39px",
            width: "100%",
            borderRadius: "65px 65px 65px 0",
          }}
          pt={5}
        >
          <Searchbar />
        </Box>
        <Box
          display="flex"
          alignItems={"center"}
          sx={{ position: "absolute", left: 27, top: 228 }}
        >
          <Typography color="primary" variant="h1">
            Travel{" "}
          </Typography>
          <Box margin="0px 16px">
            <Typography variant="h1" color={"#fff"}>
              <Typical
                steps={[
                  " with good Knowledge",
                  1000,
                  " with  Friends",
                  1000,
                  " and Enjoy",
                  1000,
                  " with  Families",
                  1000,
                  " and be happy",
                  1000,
                ]}
                loop={Infinity}
              />
            </Typography>
          </Box>
        </Box>
      </section>
    </div>
  );
}

export default Hero_page;
