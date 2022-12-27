import React from "react";
import useStyles from "../styles";
import { Box, Grid, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import dance from "../../../assets/thingstodo/dance.png";

function Index() {
  const classes = useStyles();
  return (
    <div className={classes.hero_wraper}>
      <Box margin="50px 0px 0px 0px">
        <Typography variant="h3" gutterBottom className={classes.mainHeading}>
          Find Amazing Things To Do In Gilgit Baltistan
        </Typography>
        <span className={classes.back}>ENJOY</span>
      </Box>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} ms={6}>
          <Box>
            <Box>
              <Typography varient="body1" sx={{ lineHeight: "2.5rem" }}>
                Gilgit-Baltistan is home to diversified cultures, ethnic groups,
                languages and backgrounds. Major cultural events include the
                Shandoor Polo Festival, Babusar Polo Festival and
                Jashn-e-Baharan or the Harvest Time Festival (Navroz).
                Traditional dances include: Old Man Dance in which more than one
                person wears old-style dresses; Cow Boy Dance (Payaloo) in which
                a person wears old style dress, long leather shoes and holds a
                stick in hand and the Sword Dance in which the participants show
                taking one sword in right and shield in left. One to six
                participants can dance in pairs.
              </Typography>
              <Box margin="32px 0px 0px 0px">
                {things.map((things) => (
                  <Box margin="16px 0px" display="flex">
                    {" "}
                    <DoneIcon sx={{ color: "#fcc465", marginRight: "16px" }} />
                    <Typography
                      whileHover={{
                        scale: 1.3,
                        originX: 0,
                        fontWeight: 700,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                    >
                      {things}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} ms={6}>
          <Box margin="0px 0px 50px 0px">
            <img
              src={dance}
              alt="story"
              style={{ maxWidth: "750px", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Index;

const things = [
  "Visit the Karakoram Highway",
  "Cultural Dance",
  "Boating",
  "Explore the region's wildlife",
  "Go hiking or trekking:",
  "Visit historical and cultural sites",
  "Enjoy outdoor activities",
  "Sample local cuisine",
];
