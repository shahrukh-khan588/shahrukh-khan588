import React, { useEffect } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Avatar from "@mui/material/Avatar";
import { AvatarGroup, useTheme } from "@mui/material/";
import img from "../../../assets/images/hunza.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import useStyles from "./styles";
import { themeShadows } from "../../../theme/shadows";

export default function Events({ trip }) {
  const classes = useStyles();
  const theme = useTheme();
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  console.log(trip);
  return (
    <div>
      <Box width="100%" margin={"20px 0px"} justifyContent="space-between">
        <Paper elevation={0} variant="outlined" sx={{ padding: "10px" }}>
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              justifyContent="space-between"
              sx={{
                justifyContent: "space-between",
                display: "flex",
                width: "80%",
                borderRadius: "12px",
                margin: "1rem auto",
                border: `1px solid ${theme.palette.primary.main}`,
                minHeight: "7vh",
                padding: "20px 10px",
                boxShadow: themeShadows().primary,
              }}
            >
              <img src={img} alt="img" className={classes.squreimg} />
              <Box margin="0px 16px" textAlign="left">
                <Typography variant="h6">{trip?.with}</Typography>{" "}
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
                    />
                    <Typography variant="caption"> {trip?.to}</Typography>
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
                <Avatar
                  alt="Remy Sharp"
                  src={img}
                  sx={{ width: 24, height: 24 }}
                />
                <Avatar
                  alt="Travis Howard"
                  src={img}
                  sx={{ width: 28, height: 28 }}
                />
                <Avatar
                  alt="Cindy Baker"
                  src={img}
                  sx={{ width: 32, height: 32 }}
                />
                <Avatar
                  alt="Agnes Walker"
                  src={img}
                  sx={{ width: 34, height: 34 }}
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="/static/images/avatar/5.jpg"
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
