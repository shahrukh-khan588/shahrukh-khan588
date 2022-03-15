import * as React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Box, Typography, ImageList, ImageListItem } from "@mui/material/";
import { motion } from "framer-motion";
import useStyles from "../styles";

export default function StandardImageList() {
  const classes = useStyles();
  return (
    <Box display="flex" flexWrap="wrap">
      <Box position="relative">
        <ImageList
          sx={{ width: "100%", height: "auto" }}
          cols={3}
          rowHeight={"auto"}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
              className={classes.Gallery_img}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <Box className={classes.img_content}>
                <Box display="flex" margin="5px 0px">
                  {" "}
                  <LocationOnOutlinedIcon
                    fontSize="small"
                    sx={{ margin: "0px 10px 0px 0px", color: "black" }}
                  />{" "}
                  <Typography
                    variant="body1"
                    component={motion.p}
                    whileHover={{
                      scale: 1.3,
                      originX: 0,
                      fontWeight: 700,
                      color: "#fff",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    HUNZA
                  </Typography>
                </Box>
                <Typography
                  color="white"
                  variant="body1"
                  component={motion.p}
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    scale: 1.3,
                    originX: 0,
                    color: "",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  Most Of People Like Cold Desert
                </Typography>
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}

const itemData = [
  {
    img: "https://1.bp.blogspot.com/-068TUF_NQSc/VvUIe8KKByI/AAAAAAAAAq4/z-Cj-lCH0E4Zzzxj0yrv_Cy_rcUN5PZWw/s640/10293801_809581692443007_4822871210091315326_o.jpg",
    title: "Breakfast",
  },
  {
    img: "https://4.bp.blogspot.com/-poKjkWnxZGM/VvUJ-Bow-MI/AAAAAAAAArU/CzXOIRWlcooE4185ecwiJHLYU04g7JHZw/s1080/Shyok-River-Khaplu.jpg",
    title: "Burger",
  },
  {
    img: "https://1.bp.blogspot.com/-NG2Kq7HEK6A/VvPEXSTO_GI/AAAAAAAAAk8/_Sv-iX9ZEaMd67fpkWJsDA8loq1ZGTg9w/s640/10419468_884738134925270_6388956281283117671_n.jpg",
    title: "Camera",
  },
  {
    img: "https://2.bp.blogspot.com/-1IYTa2ZRquE/VvPGYBZE0QI/AAAAAAAAAlk/dVV4Y-vZcHEbAhLEGWNgZmhZ20kjA9_OQ/s640/12187918_946229122109504_5221925779685341195_n.jpg",
    title: "Coffee",
  },
  {
    img: "https://1.bp.blogspot.com/-8FW0BpIj1KQ/VvPMl4dAGoI/AAAAAAAAAnA/9Lb-WrbONcEUDMD7mXxnnZ8HiRjQhNSzg/s640/11411200_872128496186234_6325197101253894952_o.jpg",
    title: "Hats",
  },
  {
    img: "https://2.bp.blogspot.com/-CW0_TkjrEGg/VvPNTEY4-FI/AAAAAAAAAnU/wTcgD_sjCxYAwAYzIGjhWJQyMbfzCZjFg/s1600/11270315_871336699598747_2988148568502227008_o.jpg",
    title: "Honey",
  },
  {
    img: "https://2.bp.blogspot.com/-60H1mhW85x8/VvPOwJFkzHI/AAAAAAAAAns/eS8U0s003_087J5uexIzKNaMUK4l-k7OQ/s640/11334238_882063165192767_2969380281667604204_o.jpg",
    title: "Basketball",
  },
];
