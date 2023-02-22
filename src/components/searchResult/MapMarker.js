import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Marker } from "react-google-maps";

export default function MapMarker(props) {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Marker
        position={{ lat: props.lat, lng: props.lng }}
        onMouseOver={() => setVisible(true)}
        onMouseOut={() => setVisible(false)}
        onClick={() => alert("HOTEL")}
        label={visible ? props.name : " "}
      >
        {visible && (
          <Box
            sx={{
              backgroundColor: "red",
              display: visible === true ? "block" : "none",
            }}
          >
            {/* <h3>{props.name}</h3> */}
          </Box>
        )}
      </Marker>
    </div>
  );
}