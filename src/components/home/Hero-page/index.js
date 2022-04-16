import React from "react"
import { Box, Typography } from "@mui/material"
import useStyles from "./styles"
import Typical from "react-typical"
import hero_image from "../../../assets/images/hero.png"
// import '~animate.css';

import Searchbar from "./search_bar"

function Hero_page() {
  const classes = useStyles()
  return (
    <div>
      <Box className={classes.root}>
        <div className={classes.warper}>
          <div className={classes.content}>
            <Box display="flex">
              <Box>
                {" "}
                <h2 className={`${classes.span} `} data-aos="fade-right">
                  Travel{" "}
                </h2>
              </Box>
              <Box margin="0px 16px">
                <Typography variant="h1" className={classes.subheading}>
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
            <Box
              marginTop="90px"
              width="90%"
              display="flex"
              justifyContent="space-between"
            >
              <Box width="60%">
                <Typography variant="subtitle1">
                  We provide complete information about famous tourist places,
                  and provides complete descriptions of (hotels, restaurants,
                  tourist attractions, historical attractions, hilly areas,
                  lakes, green areas, festivals, basic necessities such as food
                  Markets) according to you Budget..
                </Typography>
              </Box>
              <Typography variant="h5"></Typography>
            </Box>
          </div>
          <div className={classes.img}>
            <img
              data-aos="fade-left"
              src={hero_image}
              alt={"hero"}
              className={`${classes.hero_image}`}
            />
          </div>
        </div>
        <Box>
          {" "}
          <Searchbar />
        </Box>
      </Box>
    </div>
  )
}

export default Hero_page
