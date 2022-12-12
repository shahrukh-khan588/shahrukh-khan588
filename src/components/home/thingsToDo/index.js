import React, { useEffect } from "react";
import ImageListItem from "@mui/material/ImageListItem";
import {
  ImageListItemBar,
  Grid,
  Box,
  Checkbox,
  Typography,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useStyles from "./style";

export default function TitlebarImageList() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box key="Subheader" padding="30px 0px" textAlign="center">
        <Typography variant="h4" data-aos="fade-up" sx={{ margin: "50px 0px" }}>
          Things To Do
        </Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {itemData.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ImageListItem key={item.img} className={classes.img}>
              <img
                style={{ width: "100%" }}
                initial={{ opacity: "0.8" }}
                whileHover={{ opacity: "1" }}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <Checkbox
                      {...label}
                      icon={<FavoriteBorderIcon style={{ color: "#ffff" }} />}
                      checkedIcon={
                        <FavoriteIcon style={{ color: `#DF6951` }} />
                      }
                    />
                  </IconButton>
                }
              />
            </ImageListItem>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

const itemData = [
  {
    img: "https://www.ispo.com/sites/default/files/styles/content_width_desktop/public/2020-01/000135870.webp?itok=oVOTGXEX",
    title: "Skies",
    places: "@naltar ",
  },
  {
    img: "https://i1.wp.com/jagsnbrady.com/wp-content/uploads/2021/09/1-1.jpg?w=850&ssl=1",
    title: "Hiking",
    author: "hiking areas",
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/03/30/02/57/camping-1289930_960_720.jpg",
    title: "Camping",
    author: "@places where camping",
  },
  {
    img: "https://www.travelershorizon.pk/wp-content/uploads/2017/09/unnamed.jpg",
    title: "Boating",
    author: "@shishkat",
    cols: 2,
  },
  {
    img: "https://static.photocdn.pt/images/articles/2019/04/30/what_is_photography-1.jpg",
    title: "PhotoGraphy",
    author: "@duikar Hunza",
  },
  {
    img: "https://stablemanagement.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTcyNTIxMjM0NDU2NjUwODM1/trail-ride-pasture-woman-istock-amriphoto-1203381185-2400.webp",
    title: "Horse Riding",
    author: "@hjrc33",
    cols: 2,
  },
];
