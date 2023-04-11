import React, { useState } from "react";
import useStyles from "./styles";
import {
  Typography,
  Stack,
  Chip,
  Rating,
  Box,
  styled,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import Carousel from "react-material-ui-carousel";
import hunzaimg from "../../../assets/images/hunza.jpg";
import sikardu from "../../../assets/images/sikardu.jpg";
import astore from "../../../assets/images/astore.jpg";
import chilas from "../../../assets/images/chilas.jpg";
import phunder from "../../../assets/images/phunder.jpg";
import { Delete, ExpandMore, Mode } from "@mui/icons-material";

const districts = [
  {
    place: "Hunza",
    image: hunzaimg,
  },
  {
    place: "Gilgit",
    image:
      "https://i.pinimg.com/originals/b7/8e/dc/b78edc26da27e3a230600895c010fc8a.jpg",
  },
  {
    place: "Diamer",
    image: chilas,
  },
  {
    place: "Astore",
    image: astore,
  },
  {
    place: "Ghanche",
    image: "https://i.dawn.com/primary/2015/04/55320d3fb86be.jpg?r=377803836",
  },
  {
    place: "Ghizer",
    image: phunder,
  },
  {
    place: "Kharmang",
    image: "https://pbs.twimg.com/media/Dj1T6DuXcAAr4Ml.jpg",
  },
  {
    place: "Nagar",
    image: "https://i.dawn.com/primary/2015/05/555b12dae58fe.jpg",
  },
  {
    place: "Shigar",
    image: sikardu,
  },
];

const CursorWrapper = styled(Box)({
  "& .react-multi-carousel-item": {
    display: "grid",
    justifyContent: "center",
  },
  "& .react-multi-carousel-list": {
    height: "36rem",
  },
  "& .react-multi-carousel-track": {
    margin: "1rem 0",
  },
  "& .react-multi-carousel-dot-list": {
    margin: ".5rem 0",
  },
});

const Index = ({ place }) => {
  console.log(place, " = places");
  const classes = useStyles();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1448 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1448, min: 960 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 960, min: 0 },
      items: 1,
    },
  };

  const a = ["1", "13"];

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        overflowX: "hidden",
      }}
    >
      <Carousel autoPlay sx={{ width: "98%", margin: "auto" }}>
        {place.map((item) => (
          <div
            style={{
              backgroundImage: `url(${item?.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "15px",
              display: "flex",
              flexDirection: "column",
              width: "70%",
              marginInline: "auto",
              height: "50vh",
              justifyContent: "flex-end",
            }}
          >
            <Accordion className={classes.Accordions}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <AddLocationIcon sx={{ marginRight: ".4rem" }} />
                <Rating name="size-small" defaultValue={2} size="small" />
              </AccordionSummary>
              <AccordionDetails sx={{ marginInline: "auto" }}>
                <Typography>{item?.address?.label}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default Index;
