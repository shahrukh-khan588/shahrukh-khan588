import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Paper, Box, Typography, Grid, Button } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import useStyles from "./styles";
import { themeShadows } from "../../../theme/shadows";

function Index() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  const classes = useStyles();
  const shadow = themeShadows();
  return (
    <Box width="90%" margin="auto" data-aos="fade-up">
      <Box padding="50px 0px" textAlign="center">
        <Typography variant="h4">Famous Places GilGit Baltistan</Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 12, md: 12 }}
      >
        {itemData.map((item, index) => (
          <Grid item xs={12} sm={12} md={6} key={index}>
            <Box display="flex">
              <Paper
                sx={{
                  boxShadow: shadow.warning,
                }}
                key={item.img}
                className={classes.imgwrapper}
                component={motion.div}
                whileHover={{ y: 3 }}
              >
                <img className={classes.img} src={item.img} alt={item.title} />
                <Box padding="10px">
                  <Box display="flex" margin="5px 0px">
                    {" "}
                    <LocationOnOutlinedIcon
                      fontSize="small"
                      sx={{ margin: "0px 10px 0px 0px" }}
                    />{" "}
                    <Typography
                      variant="caption"
                      component={motion.p}
                      whileHover={{
                        scale: 1.3,
                        originX: 0,
                        color: "",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                    >
                      {item.location}
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <StarOutlineOutlinedIcon
                      fontSize="small"
                      sx={{ margin: "0px 10px 0px 0px" }}
                    />
                    <Typography
                      variant="caption"
                      component={motion.p}
                      whileHover={{
                        scale: 1.3,
                        originX: 0,
                        color: "",
                      }}
                    >
                      4.5
                    </Typography>
                  </Box>
                </Box>
              </Paper>
              <Box
                margin="0px 16px"
                justifyContent="spacebetween"
                display="flex"
                textAlign="left"
                flexDirection="column"
              >
                <Typography
                  variant="h6"
                  sx={{ margin: "12px 0px" }}
                  textTransform="capitalize"
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ lineHeight: "36px", letterSpacing: "2px" }}
                >
                  This is located in sikardu and its famous for highest mountain
                  in pakistan people from all over the world come to visit. in
                  pakistan people from all over the world come to visit in
                  pakistan people from all over the world come to visit
                </Typography>
                <Box mt={"1rem"}>
                  <Button variant="outlined">Explore More</Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Index;

const itemData = [
  {
    img: "https://www.ispo.com/sites/default/files/styles/content_width_desktop/public/2020-01/000135870.webp?itok=oVOTGXEX",
    location: "hunza",
    name: "ice hockey",
  },
  {
    img: "https://i1.wp.com/jagsnbrady.com/wp-content/uploads/2021/09/1-1.jpg?w=850&ssl=1",
    location: "hunza",
    name: "K-2",
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/03/30/02/57/camping-1289930_960_720.jpg",
    location: "shandur",
    name: "polo hockey",
  },
  {
    img: "https://www.travelershorizon.pk/wp-content/uploads/2017/09/unnamed.jpg",
    location: "hunza",
    name: "boating",
  },
];
