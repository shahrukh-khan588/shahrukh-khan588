import React from "react";
import useStyles from "./styles";
import { Typography, Stack, Chip, Rating, Box } from "@mui/material";
import AddLocationIcon from "@mui/icons-material/AddLocation";

const Index = ({ place }) => {
  console.log(place, "asd");
  const classes = useStyles();
  return (
    <div>
      <div className={classes.sub_container}>
        <img src={place.image} alt="hnz" className={classes.img} />
        <Box className={classes.detail}>
          <Box
            display="flex"
            alignItems="center"
            padding="1rem"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems={"center"}>
              <AddLocationIcon sx={{ marginRight: ".4rem" }} />
              <Typography variant="subtitle1" className={classes.titles}>
                {place.PlaceName}
              </Typography>
            </Box>
            <Rating name="size-small" defaultValue={2} size="small" />
          </Box>

          <Box display="flex" alignItems="center" padding="1rem">
            <AddLocationIcon sx={{ marginRight: ".4rem" }} />
            <Typography variant="subtitle1" className={classes.titles}>
              {place?.address?.label}
            </Typography>
          </Box>

          <Stack
            direction="row"
            spacing={1}
            px="1rem"
            pb="1rem"
            display={"flex"}
            flexWrap="wrap"
          >
            {place?.placeType.map((label, i) => {
              return (
                <Chip
                  label={label?.label}
                  color="primary"
                  variant="outlined"
                  key={i}
                />
              );
            })}
          </Stack>
        </Box>
      </div>
    </div>
  );
};

export default Index;
