import React, { useEffect, useState } from "react";
import Hotels from "../../components/searchResult/Hotels";
import { useGetHotelsMutation } from "../../store/services/appServices";
import { Box, Divider, useTheme } from "@mui/material";
import { themeShadows } from "../../theme/shadows";
import Card from "./filters.js";
import { useSelector } from "react-redux";
import Events from "../../components/events/eventList";
function Index() {
  const [district, setDistrict] = useState("hotels");
  const theme = useTheme();
  const [handelFilter] = useGetHotelsMutation();
  const { hotels, places, events, trips } = useSelector(
    (state) => state.filter
  );

  useEffect(() => {
    handelFilter({ destination: district });
  }, [district]);
  return (
    <Box display="flex" sx={{ width: "90%", m: "0 auto", overFlow: "hidden" }}>
      <Card setDistrict={setDistrict} />
      <Box sx={{ width: 345 }} />
      <Box display={"flex"} flexDirection="column" width="90%">
        <div>
          {hotels.map((hotel) => {
            return <Hotels hotel={hotel} />;
          })}
        </div>
        <Divider></Divider>
        {events.map((event) => {
          return <Events event={event} />;
        })}
      </Box>
    </Box>
  );
}

export default Index;
