import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Box, Rating, Divider, Typography, useTheme } from "@mui/material/";
import { themeShadows } from "../../theme/shadows";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Hotels({ hotel }) {
  const theme = useTheme();

  return (
    <>
      <Box
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
        <img
          style={{
            borderRadius: "1rem",
            height: "173px",
            width: "200px",
          }}
          src={hotel.image}
          alt={"hotels"}
        />
        <Box
          ml="1rem"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
        >
          <Typography variant="h4">{hotel.hotelName}</Typography>
          <Box display="flex" maxWidth="70%">
            <Rating value={4.2} readOnly size="small" />
            <Box display="flex" ml="1rem">
              <LocationOnIcon fontSize="small" />
              <Typography variant="caption" sx={{ marginLeft: ".3rem" }}>
                {hotel.address}
              </Typography>
            </Box>
          </Box>
          <Typography variant="subtitle1">
            {hotel?.desccription || "No description"}
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ margin: "0px .6rem" }}
        />
        <Box
          p="1rem"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
        >
          <Typography variant="h6" whiteSpace="nowrap">
            PKR {hotel.roomPrice}
          </Typography>
          <Typography variant="caption" sx={{ marginTop: "1rem" }}>
            1 Room/Night
          </Typography>
        </Box>
      </Box>
    </>
  );
}
