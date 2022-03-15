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
               Hello my name is Shahrukh khan from Gilgit Baltistan.
               professionally i am a mountaineer.
               i  smutted all the mountains located in gilgit baltistan.
               like K-2, rakaposhi and famous mountains in G-B.
               you can Visit mountains and know nature more closer.
               and it feels us god near around us.
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
