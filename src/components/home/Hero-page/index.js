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
            style={{}}
            className={classes.Video}
          />
        </Box>
        <Box className={classes.PaperContainer}>
          <Searchbar />
        </Box>
        <Box className={classes.TypicalBlock}>
          <Box margin="0px 16px">
            <Typography className={classes.TypicalStyle} color={"#fff"}>
              <Typical
                steps={[
                  "Travel makes one modest",
                  1000,
                  "Adventure is worthwhile",
                  1000,
                  "To travel is to live",
                  1000,
                  "Not all those who wander are lost",
                  1000,
                  "Travel is fatal to prejudice, bigotry, and narrow-mindedness.",
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
