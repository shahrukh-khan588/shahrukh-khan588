import React, { useEffect } from "react";
import useStyles from "../styles";
import { Box, Typography, Paper } from "@mui/material";
import Svg from "./svg"
import AOS from "aos";
import "aos/dist/aos.css";
// import Select from "../../Ui_components/Select";
// import Button from "../../Ui_components/Button";

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  return (
    <>
    <div className={classes.root}>
      <Box maxWidth="50%" margin="auto 0px" textAlign="center" color="#fff">
        <Typography variant="h3">FOUND AMAZING MOUNTAIN TO EXPLORE</Typography>
        <Typography variant="body2" className={classes.subheading}>
          Start to getting bored with your activities ? it,s time to start your
          adventures
        </Typography>
        {/* <Paper className={classes.paper}>
          <Box display="flex" padding="10px" justifyContent="space-between">
            <Select />
            <Button title="Get Start" variant="outlined" />
          </Box>
        </Paper> */}
      </Box>
    </div>
    <Svg />  
    </>
  );
}
