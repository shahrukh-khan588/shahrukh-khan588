import React from "react";
import useStyles from "../styles";
import { Box, Grid, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import storyMain from "../../../assets/mountains/story.jpg";

function Index() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Box>
            <Box>
              <Typography className={classes.span}>our stories</Typography>
              <p className={classes.mainHeading}>Of the Mountains Trip</p>
              <span className={classes.back}>Story</span>
            </Box>
            <Box>
              <Typography varient="body1" sx={{ lineHeight: "2.5rem" }}>
                Gilgit Baltistan, a region in northern Pakistan, is home to some
                of the world's highest and most majestic mountain ranges. The
                Karakoram mountain range, which runs through Gilgit Baltistan,
                is home to some of the highest peaks in the world, including K2,
                the second highest mountain on earth. The region's rugged
                terrain and stunning natural beauty make it a paradise for
                hikers, climbers, and adventure seekers. These ranges are home
                to a variety of wildlife, including ibex, snow leopards, and
                brown bears. The region's mountains are also an important source
                of water for the region and the surrounding areas, with numerous
                glacial lakes and rivers that provide water for irrigation and
                hydropower. Overall, Gilgit Baltistan's mountains are an
                integral part of the region's culture, history, and economy.
                They provide a unique and breathtaking natural beauty, as well
                as a rich cultural heritage and a variety of recreational
                opportunities.
              </Typography>
              <Box margin="32px 0px 0px 0px">
                <Box margin="16px 0px" display="flex">
                  {" "}
                  <DoneIcon sx={{ color: "#fcc465", marginRight: "16px" }} />
                  <Typography>Best Routes</Typography>
                </Box>
                <Box margin="16px 0px" display="flex">
                  {" "}
                  <DoneIcon sx={{ color: "#fcc465", marginRight: "16px" }} />
                  <Typography>Stay Areas</Typography>
                </Box>
                <Box margin="16px 0px" display="flex">
                  {" "}
                  <DoneIcon sx={{ color: "#fcc465", marginRight: "16px" }} />
                  <Typography>Your Safty</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <img src={storyMain} alt="story" />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Index;
