import { Box, Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import { Marker, InfoWindow } from "react-google-maps";

export default function Mapmarker(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Marker
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
      position={{ lat: props?.lat, lng: props?.lng }}
      icon={{
        url: props?.icon,
        scaledSize: new window.google.maps.Size(35, 38),
      }}
    >
      {isOpen && (
        <InfoWindow>
          <Box>
            <img
              src={props?.photo}
              style={{ minWidth: "150px", maxWidth: "500px" }}
            />
            <Typography
              sx={{ fontSize: "20px", color: "#000080", fontWeight: "500" }}
            >
              {props?.name}
            </Typography>
            <br />
            <Typography sx={{ fontSize: "15px" }}>{props?.address}</Typography>
            <br />
            <br />
            {props?.rating && (
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{
                    color: "#355e3b",
                    fontWeight: "500",
                    paddingRight: "5px",
                    fontSize: "15px",
                  }}
                >
                  Rating:
                </Typography>
                <Rating
                  defaultValue={3}
                  sx={{ mt: "3px", pr: "6px" }}
                  size="small"
                  value={props?.ratinug}
                  precision={0.5}
                  max={5}
                />
                <Typography sx={{ fontSize: "15px" }}>
                  ({props?.totalRating})
                </Typography>
              </Box>
            )}
          </Box>
        </InfoWindow>
      )}
    </Marker>
  );
}
