import React, { useEffect, useState } from "react";
import Hotels from "../../components/searchResult/Hotels";
// import {
//   useGetHotelsMutation,
//   useGetTripsMutation,
// } from "../../store/services/appServices";
import { Box, Chip, Divider, useTheme } from "@mui/material";
// import { themeShadows } from "../../theme/shadows";
import Card from "./filters.js";
import { useSelector } from "react-redux";
import Events from "./Evenets";
import Trips from "./Trips";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import Places from "./Places/index";

function Index() {
  const [district, setDistrict] = useState();
  const theme = useTheme();
  let history = useHistory();
  const classes = useStyles();
  // const [handelFilter] = useGetHotelsMutation();
  // const [handelGetTrips] = useGetTripsMutation();
  const { hotels, places, events, trips } = useSelector(
    (state) => state.filter
  );

  // useEffect(() => {
  //   handelFilter({ ...filterVal, destination: district });
  //   handelGetTrips({ location: filterVal.district });
  // }, [district]);

  useEffect(() => {
    if (!hotels?.length && !events.length && !trips.length) {
      history.push("/");
    }
  }, [hotels, events, trips]);
  return (
    <Box
      display="flex"
      sx={{ width: "90%", m: "4rem auto 0 auto", overFlow: "hidden" }}
      className={classes.Container}
    >
      <Card setDistrict={setDistrict} />
      <Box className={classes.middleSec}>
        {hotels.map((hotel) => {
          return <Hotels hotel={hotel} />;
        })}

        {!!events && (
          <Divider textAlign="left" sx={{ my: "1.5rem" }}>
            Events
          </Divider>
        )}
        {events.map((event) => {
          return !!events && <Events event={event} />;
        })}

        {!!trips.length > 1 && (
          <Divider textAlign="left" sx={{ my: "1.5rem" }}>
            Trips
          </Divider>
        )}
        {trips?.map((trip) => {
          return !!trips && <Trips trip={trip} />;
        })}

        {!!places && (
          <Divider textAlign="left" sx={{ my: "1.5rem" }}>
            Places
          </Divider>
        )}
        <Box
          width="100%"
          p="1.5rem"
          columnGap={"1rem"}
          overFlow="scroll"
          display="grid"
          alignItems={"center"}
        >
          {places?.map((place, i) => {
            return !!trips && <Places place={place} key={i} />;
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Index;
