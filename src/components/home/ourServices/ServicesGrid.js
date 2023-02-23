import React, { useEffect } from "react";
import { Paper, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import places from "../../../assets/images/place.png";
import hotels from "../../../assets/images/5-stars.png";
import bus from "../../../assets/images/bus.png";
import accessory from "../../../assets/images/accessory.png";
import useStyles from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typography } from "@mui/material";

const svgVarients = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
function ServicesGrid() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  const classes = useStyles();
  return (
    <div style={{ height: "475px", marginTop:'50px'}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          // variants={svgVarients}
          initial="hidden"
          animate="visible"
          fill="#c8e6c9"
          fill-opacity="1"
          d="M0,96L40,96C80,96,160,96,240,133.3C320,171,400,245,480,277.3C560,309,640,299,720,272C800,245,880,203,960,160C1040,117,1120,75,1200,48C1280,21,1360,11,1400,5.3L1440,0L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <div className={classes.root}>
        <Box width="100%" textAlign="center" margin="30px 0px">
          <Box padding="10px 0px">
            <div>
              <Typography
                variant="h4"
                data-aos="fade-up"
                className={classes.mainheading}
              >
                Our Services
              </Typography>
            </div>
          </Box>
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 12, md: 12 }}
          data-aos="fade-up"
        >
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>
              <Box width="100%" textAlign="center">
                <img src={places} alt="place" className={classes.img} />
              </Box>
              <Typography className={classes.heading} variant="h5">
                Recommended places
              </Typography>
              <Typography className={classes.subheading}>
                We recommend best places in Gilgit Baltistan.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper} whileHover={{ y: 5 }}>
              <Box width="100%" textAlign="center">
                {" "}
                <img src={hotels} alt="place" className={classes.img} />
              </Box>
              <Typography className={classes.heading} variant="h5">
                Recommended Hotels
              </Typography>
              <Typography className={classes.subheading}>
                We recommend affordable hotels. according to your budget
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper} whileHover={{ y: 5 }}>
              <Box width="100%" textAlign="center">
                {" "}
                <img src={bus} alt="place" className={classes.img} />
              </Box>
              <Typography className={classes.heading} variant="h5">
                Best Transports
              </Typography>
              <Typography className={classes.subheading}>
                We provide details of best transport services for your
                travelling
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper} whileHover={{ y: 5 }}>
              <Box width="100%" textAlign="center">
                {" "}
                <img src={accessory} alt="place" className={classes.img} />
              </Box>
              <Typography className={classes.heading} variant="h5">
                Recommend Accessories
              </Typography>
              <Typography className={classes.subheading}>
                We recommend important accessories for yor trip according to
                your selected place.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ServicesGrid;
