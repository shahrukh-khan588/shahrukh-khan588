import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Rating,
  Divider,
  Button,
  Typography,
  useTheme,
} from "@mui/material/";
import { themeShadows } from "../../theme/shadows";
import GoogleMap from "./map";
import ApartmentIcon from "@mui/icons-material/Apartment";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import StarsIcon from "@mui/icons-material/Stars";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import useStyles from "./styles";

export default function Hotels({ hotel }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <Box className={classes.hotelContainer}>
        <Box ml=".5rem" display="flex">
          <img
            style={{
              borderRadius: "1rem",
              height: "173px",
              width: "200px",
            }}
            src={hotel?.image}
            alt={"hotels"}
          />
          <Box
            width="100%"
            ml=".5rem"
            display={"flex"}
            flexDirection="column"
            height={"90%"}
            justifyContent="space-between"
          >
            <Box display="flex" alignItems={"center"}>
              <ApartmentIcon color="primary" sx={{ mr: "1rem" }} />
              <Typography variant="subtitle2" color="primary">
                Hotel Name
              </Typography>
              :
              <Typography sx={{ ml: "1rem" }} variant="body2">
                {hotel?.hotelName}
              </Typography>
            </Box>
            <Box display="flex" alignItems={"center"}>
              <LocationOnIcon color="primary" sx={{ mr: "1rem" }} />
              <Typography variant="subtitle2" color="primary">
                Adress
              </Typography>
              :
              <Typography sx={{ ml: "1rem" }} variant="body2">
                {hotel?.address}
              </Typography>
            </Box>
            <Box display="flex" alignItems={"center"}>
              <MonetizationOnIcon color="primary" sx={{ mr: "1rem" }} />
              <Typography variant="subtitle2" color="primary">
                Room Price
              </Typography>
              :
              <Typography sx={{ ml: "1rem" }} variant="body2">
                <span>PKR</span>
                {hotel?.roomPrice}
              </Typography>
            </Box>
            <Box display="flex" alignItems={"center"}>
              <StarsIcon color="primary" sx={{ mr: "1rem" }} />
              <Typography variant="subtitle2" color="primary">
                Rating
              </Typography>
              :
              <Rating name="read-only" value={hotel?.Rating} readOnly />
            </Box>
          </Box>
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
            PKR {hotel?.roomPrice}
          </Typography>
          <Typography variant="caption" sx={{ marginTop: "1rem" }}>
            1 Room/Night
          </Typography>
          <Button
            onClick={() => setOpen(true)}
            variant="outlined"
            sx={{
              textTransform: "none",
              borderRadius: "34px !important",
              mt: "1rem",
            }}
          >
            Get Location
          </Button>
        </Box>
        <GoogleMap open={open} hotel={hotel} setOpen={setOpen} />
      </Box>
    </>
  );
}
