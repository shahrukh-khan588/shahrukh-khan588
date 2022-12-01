import React, { useEffect, useState } from "react";
import Hotels from "../../components/searchResult/Hotels";
import { useGetHotelsMutation } from "../../store/services/appServices";
import { Box, Divider, useTheme } from "@mui/material";
import { themeShadows } from "../../theme/shadows";
import Card from "./filters.js";
import { useSelector } from "react-redux";
import Events from "./Evenets";
import Trips from "./Trips";
import useStyles from "./styles";

function Index() {
  const [district, setDistrict] = useState("hotels");
  const theme = useTheme();
  const classes = useStyles();
  const [handelFilter] = useGetHotelsMutation();
  const { hotels, places, events, trips } = useSelector(
    (state) => state.filter
  );
  const scrollevents = document.getElementById("events");
  const scrolltrips = document.getElementById("trips");

  useEffect(() => {
    handelFilter({ destination: district });
  }, [district]);

  useEffect(() => {
    scrollevents?.scrollIntoView({
      behavior: "smooth",
    });
  }, [events, district]);

  useEffect(() => {
    scrolltrips?.scrollIntoView({
      behavior: "smooth",
    });
  }, [trips, district]);
  return (
    <Box
      display="flex"
      sx={{ width: "90%", m: "0 auto", overFlow: "hidden" }}
      className={classes.Container}
    >
      <Card setDistrict={setDistrict} />
      <Box className={classes.middleSec}>
        <div>
          {hotels.map((hotel) => {
            return <Hotels hotel={hotel} />;
          })}
        </div>
        <Divider></Divider>
        {events.length && <div id="events" />}
        {events.map((event) => {
          return <Events event={event} />;
        })}
        {trips.length && <div id="trips" />}
        {trips?.map((trip) => {
          return <Trips trip={trip} />;
        })}
      </Box>
    </Box>
  );
}

export default Index;
