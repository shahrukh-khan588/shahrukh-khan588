import React from "react";
import { Box, Paper, Rating, Divider, Typography } from "@mui/material/";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import useGetResult from "../../store/GetResult";
function Hotels() {
  const { isLoading, hotels, HandleGetResult } = useGetResult();
  return (
    <>
      {hotels.map((item, index) => {
        return (
          <Box display="flex">
            <Paper sx={{ display: "flex", padding: ".6rem", margin: "1rem 0" }}>
              <img
                style={{
                  borderRadius: "1rem",
                  height: "173px",
                  width: "200px",
                }}
                src={item.image}
                alt={"hotels"}
              />
              <Box
                ml="1rem"
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
              >
                <Typography variant="h4">{item.hotelName}</Typography>
                <Box display="flex" maxWidth="70%">
                  <Rating value={4.2} readOnly size="small" />
                  <Box display="flex" ml="1rem">
                    <LocationOnIcon fontSize="small" />
                    <Typography variant="caption" sx={{ marginLeft: ".3rem" }}>
                      {item.address}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="subtitle1">
                  Pearl-Continental Karachi is a part of -Continental Karachi is
                  a part of the largest chain of hotels in Contemporary... the
                  largest chain of hotels in Pakistan, 5-star accommodation with
                  free Wi-Fi, Contemporary...
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
                  PKR {item.roomPrice}
                </Typography>
                <Typography variant="caption" sx={{ marginTop: "1rem" }}>
                  1 Room/Night
                </Typography>
              </Box>
            </Paper>
          </Box>
        );
      })}
    </>
  );
}

export default Hotels;
