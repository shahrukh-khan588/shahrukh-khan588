import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import { Dialog, Box } from "@mui/material/";
import GoogleMapReact from "google-map-react";
import RoomIcon from "@mui/icons-material/Room";
import { Typography, Rating } from "@mui/material";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import ApartmentIcon from "@mui/icons-material/Apartment";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import StarsIcon from "@mui/icons-material/Stars";
export default function SimpleDialogDemo({ open, getLocation, setOpen }) {
  const handleClose = (value) => {
    setOpen(false);
  };
  const defaultProps = {
    center: {
      lat: hotel?.coordinates?.lat,
      lng: hotel?.coordinates?.lng,
    },
    zoom: 1,
  };
  return (
    <div>
      <Dialog
        onClose={handleClose}
        open={open}
        maxWidth="lg"
        fullWidth
        sx={{ minHeight: "70vh" }}
      >
        <DialogTitle>
          <Box display="flex" justifyContent={"space-between"}>
            <Box>
              <Box display="flex" alignItems={"center"} py="1rem">
                <ApartmentIcon color="primary" sx={{ mr: "1rem" }} />
                <Typography variant="h6" color="primary">
                  Hotel Name
                </Typography>
                :
                <Typography sx={{ ml: "1rem" }} variant="body1">
                  {/* {hotel?.hotelName} */}
                </Typography>
              </Box>
              <Box display="flex" alignItems={"center"} py="1rem">
                <AddLocationAltIcon color="primary" sx={{ mr: "1rem" }} />
                <Typography variant="h6" color="primary">
                  Adress
                </Typography>
                :
                <Typography sx={{ ml: "1rem" }} variant="body1">
                  {/* {hotel?.address} */}
                </Typography>
              </Box>
              <Box display="flex" alignItems={"center"} py="1rem">
                <MonetizationOnIcon color="primary" sx={{ mr: "1rem" }} />
                <Typography variant="h6" color="primary">
                  Room Price
                </Typography>
                :
                <Typography sx={{ ml: "1rem" }} variant="body1">
                  <span>PKR</span>
                  {/* {hotel?.roomPrice} */}
                </Typography>
              </Box>
              <Box display="flex" alignItems={"center"} py="1rem">
                <StarsIcon color="primary" sx={{ mr: "1rem" }} />
                <Typography variant="h6" color="primary">
                  Rating
                </Typography>
                :
                {/* <Rating name="read-only" value={hotel?.Rating} readOnly /> */}
              </Box>
            </Box>
            <img
              style={{
                borderRadius: "1rem",
                height: "300px",
                width: "300px",
              }}
              //   src={hotel?.image}
              alt={"hotels"}
            />
          </Box>
        </DialogTitle>
        <div
          style={{
            height: "250px",
            width: "100%",
            background: "#eee",
          }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAB_9gv95tthsqqFyrTzsq0ACRnJ2zNlvs",
            }}
            // center={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            yesIWantToUseGoogleMapApiInternals
          >
            {getLocation?.map((locationMarkers) => {
              return (
                <RoomIcon
                  fontSize="large"
                  style={{ fontSize: 40, fill: "red" }}
                  lat={locationMarkers?.coordinates.lat}
                  lng={locationMarkers?.coordinates.lng}
                />
              );
            })}
          </GoogleMapReact>
        </div>
      </Dialog>
    </div>
  );
}
