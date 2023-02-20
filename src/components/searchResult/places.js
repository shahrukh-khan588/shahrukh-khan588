import React from "react";
import { Typography, Box } from "@mui/material";
import useStyles from "./styles";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import hunzaimg from "../../../assets/images/hunza.jpg";
import Rating from "@mui/material/Rating";
const Places = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.sub_container}>
        <img src={hunzaimg} alt="hnz" className={classes.img} />
        <Box className={classes.detail}>
          <Box
            display="flex"
            alignItems="center"
            padding="30px 17px"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems={"center"}>
              <AddLocationIcon sx={{ marginRight: ".4rem" }} />
              <Typography variant="subtitle1" className={classes.titles}>
                HUnza
              </Typography>
            </Box>
            <Typography>test</Typography>
            <Rating name="size-small" defaultValue={2} size="small" />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Places;
