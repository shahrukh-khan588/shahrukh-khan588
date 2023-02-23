import React, { useEffect, useState } from "react";
import Hotels from "../../components/searchResult/Hotels";
import {
  useGetHotelsMutation,
  useGetTripsMutation,
} from "../../store/services/appServices";
import { Box, Divider, useTheme } from "@mui/material";
import { themeShadows } from "../../theme/shadows";
import Card from "./filters.js";
import { useSelector } from "react-redux";
import Events from "./Evenets";
import Trips from "./Trips";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

function Index() {
  const [district, setDistrict] = useState();
  const theme = useTheme();
  let history = useHistory();
  const classes = useStyles();
  const [handelFilter] = useGetHotelsMutation();
  const [handelGetTrips] = useGetTripsMutation();
  const { hotels, filterVal, events, trips } = useSelector(
    (state) => state.filter
  );
  const scrollevents = document.getElementById("events");
  const scrolltrips = document.getElementById("trips");

  useEffect(() => {
    handelFilter({ ...filterVal, destination: district });
    handelGetTrips({ location: filterVal.district });
  }, [district]);

  useEffect(() => {
    scrollevents?.scrollIntoView({
      behavior: "smooth",
    });
  }, [events, district]);

  useEffect(() => {
    if (!hotels?.length && !events.length && !trips.length) {
      history.push("/");
    }
  }, [hotels, events, trips]);

  useEffect(() => {
    scrolltrips?.scrollIntoView({
      behavior: "smooth",
    });
  }, [trips, district]);
  return (
    <Box
      display="flex"
      sx={{ width: "90%", m: "4rem auto 0 auto", overFlow: "hidden" }}
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
        {!!events.length && <div id="events" />}
        {events.map((event) => {
          return !!events && <Events event={event} />;
        })}
        {trips.length && <div id="trips" />}
        {trips?.map((trip) => {
          return !!trips && <Trips trip={trip} />;
        })}
      </Box>
    </Box>
  );
}

export default Index;
