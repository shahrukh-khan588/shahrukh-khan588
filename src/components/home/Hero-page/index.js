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
          <Typography color="primary" className={classes.TypicalStyle}>
            Travel{" "}
          </Typography>
          <Box margin="0px 16px">
            <Typography className={classes.TypicalStyle} color={"#fff"}>
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
