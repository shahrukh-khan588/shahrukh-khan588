import React, { useEffect } from "react";
import { Box, Typography, Button, Paper, useTheme } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import AOS from "aos";

import "aos/dist/aos.css";
import useStyles from "./styles";
import SimpleDialogDemo from "./Map";

export default function Events({ trip }) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const theme = useTheme();
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Box width="100%" margin={"20px 0px"} justifyContent="space-between">
        <Paper elevation={0} variant="outlined" className={classes.mainPaper}>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Box display="flex" justifyContent="space-between">
              <img src={trip?.image} alt="img" className={classes.squreimg} />
              <Box margin="0px 16px" textAlign="left">
                <Typography variant="h6">{trip?.TripName}</Typography>{" "}
                <Box
                  display="flex"
                  width="100%"
                  justifyContent="space-between"
                  marginTop="25px"
                >
                  <Box display="flex">
                    <LocationOnOutlinedIcon
                      fontSize="small"
                      sx={{ margin: "0px 3px 0px 0px" }}
                      onClick={() => setOpen(true)}
                    />
                    <SimpleDialogDemo
                      open={open}
                      getLocation={trip.cordinates}
                      setOpen={setOpen}
                    />

                    <Typography variant="caption"> {trip?.location}</Typography>
                  </Box>
                  <Box display="flex" margin="0px 12px">
                    <CalendarTodayIcon
                      sx={{ margin: "0px 3px 0px 0px", fontSize: 16 }}
                    />
                    <Typography variant="caption">Date: 10-Jan-22</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box alignSelf="center" height="103px">
              <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" sx={{ width: 24, height: 24 }} />
                <Avatar alt="Travis Howard" sx={{ width: 28, height: 28 }} />
                <Avatar alt="Cindy Baker" sx={{ width: 32, height: 32 }} />
                <Avatar alt="Agnes Walker" sx={{ width: 34, height: 34 }} />
                <Avatar
                  alt="Trevor Henderson"
                  src={trip.image}
                  sx={{ width: 32, height: 32 }}
                />
              </AvatarGroup>
              <Button
                variant="outlined"
                sx={{ margin: "16px 0px 0px 0px", borderRadius: "24px" }}
                size="small"
              >
                join
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
