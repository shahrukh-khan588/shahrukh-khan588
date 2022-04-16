import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import useStyles from "../styles";
function EventList() {
  const classes=useStyles();
  return (
    <div>
      <Box display="flex" maxWidth="80%" margin="5rem auto">
        <Box display="flex" flexDirection='column' textAlign='center'>
          <Typography variant="h3" fontWeight='700'>
            21
          </Typography>
            <Typography variant="h6">April</Typography>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem  style={{margin:'0rem 2rem'}}/>
        <Box>
          <Typography variant="h6" fontWeight='700'>Event Name</Typography>
          <Box>
          <Typography variant="body1">
            Traditionally celebrated on the vernal equinox, many begin
            preparations for Nowruz weeks in advance. In the leadup to the
            holiday, people perform ritual dances and fill vessels in their home
            with water, which is associated with health, in an attempt to banish
            bad luck
          </Typography>
          </Box>
        </Box>
        <Box>
          <img className={classes.eventImg} src={'https://2.bp.blogspot.com/-60H1mhW85x8/VvPOwJFkzHI/AAAAAAAAAns/eS8U0s003_087J5uexIzKNaMUK4l-k7OQ/s640/11334238_882063165192767_2969380281667604204_o.jpg?w=164&h=164&fit=crop&auto=format'} alt={'event'}/>
          </Box>
      </Box>
    </div>
  );
}

export default EventList;
