import React from "react";
import { Typography, Box, Divider, Paper } from "@mui/material";
import useStyles from "./styles";
import moment from "moment";

function EventList({ event }) {
  const classes = useStyles();
  console.log(event);
  return (
    <div>
      <Paper
        display="flex"
        maxWidth="80%"
        my="1rem"
        className={classes.mainPaper}
      >
        <Box display="flex" flexDirection="column" textAlign="center">
          <Typography variant="h3" fontWeight="700">
            {/* {moment(event?.HeldDate)} */}
          </Typography>
          <Typography variant="h6">April</Typography>
        </Box>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          style={{ margin: "0rem 2rem" }}
        />
        <Box>
          <Typography variant="h6" fontWeight="700">
            {event?.EventName}
          </Typography>
          <Box>
            <Typography variant="body1">{event?.description}</Typography>
          </Box>
        </Box>
        <Box>
          <img className={classes.eventImg} src={event?.image} alt={"event"} />
        </Box>
      </Paper>
    </div>
  );
}

export default EventList;
