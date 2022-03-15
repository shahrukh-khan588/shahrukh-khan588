import React, { useEffect } from "react";
import { Paper, Box, Typography, Button } from "@mui/material";
import useStyles from "./styles";
import Event from "./Events";
import AOS from "aos";
import "aos/dist/aos.css";

function Index() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  return (
    <div>
      <Box
        className={classes.dicount_root}
        display="grid"
        alignItems="center"
      >
        <Box className={classes.content_main}>
          <Box className={classes.content_sub}>
            {" "}
            <Typography variant="h5" color="#fff">
              Adventure with us and get up to 15% discount
            </Typography>
            <Button variant="outlined">Explore More</Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Index;
