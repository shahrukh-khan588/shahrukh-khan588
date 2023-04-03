import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Badge,
  Button,
  Paper,
  useTheme,
  IconButton,
  Chip,
  Stack,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HailIcon from "@mui/icons-material/Hail";
import AOS from "aos";
import DoneIcon from "@mui/icons-material/Done";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import "aos/dist/aos.css";
import useStyles from "./styles";
import SimpleDialogDemo from "./Map";

export default function Events({ trip }) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles(); // "@media (max-width: 1100px)": {
    //   width: "100%",
    // },
  const theme = useTheme();
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Box className={classes.TripsContainer} margin={"20px 0px"} justifyContent="space-between">
        <Paper elevation={0} variant="outlined" className={classes.mainPaper}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            width="100%"
          >
            <Box display="flex" justifyContent="space-between">
              <img src={trip?.image} alt="img" className={classes.squreimg} />
              <Box margin="0px 16px" textAlign="left">
                <Typography
                  variant="h6"
                  color="primary"
                  textTransform={"capitalize"}
                >
                  {trip?.TripName}
                </Typography>
                <Box
                  display="flex"
                  width="100%"
                  justifyContent="space-between"
                  marginTop="25px"
                >
                  <Box display="flex" alignItems={"center"} maxWidth='200px'>
                    <IconButton color="primary">
                      <LocationOnOutlinedIcon
                        fontSize="medium"
                        sx={{ margin: "0px 3px 0px 0px" }}
                        onClick={() => setOpen(true)}
                      />
                    </IconButton>
                    <SimpleDialogDemo
                      trip={trip}
                      open={open}
                      getLocation={trip.cordinates}
                      setOpen={setOpen}
                    />

                    <Stack direction="column" spacing={1}>
                      {trip?.cordinates.map((item, i) => {
                        return (
                          <Chip
                            key={i}
                            label={item?.label}
                            variant="outlined"
                            deleteIcon={<DoneIcon />}
                          />
                        );
                      })}
                    </Stack>
                  </Box>
                </Box>
                <Box display="flex" margin="1rem 0 0px 1rem">
                  <Typography variant="subtitle2" color="primary">
                    From:
                  </Typography>{" "}
                  <Typography variant="subtitle2" sx={{ ml: ".5rem" }}>
                    {trip?.from}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="primary"
                    sx={{ ml: "2rem" }}
                  >
                    To:
                  </Typography>{" "}
                  <Typography variant="subtitle2" sx={{ ml: ".5rem" }}>
                    {trip?.to}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              alignSelf="center"
              display="flex"
              flexDirection={"column"}
              mr="2rem"
            >
              <Button
                variant="outlined"
                sx={{ borderRadius: "24px" }}
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
