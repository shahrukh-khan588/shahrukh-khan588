import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import { Dialog, Box, Button } from "@mui/material/";
import { Typography, Rating } from "@mui/material";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import ApartmentIcon from "@mui/icons-material/Apartment";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import StarsIcon from "@mui/icons-material/Stars";
import GoogleMaps from "./GoogleMaps";

export default function SimpleDialogDemo({ setOpen, hotel, open }) {
  const handleClose = (value) => {
    setOpen(false);
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
                  {hotel?.hotelName}
                </Typography>
              </Box>
              <Box display="flex" alignItems={"center"} py="1rem">
                <AddLocationAltIcon color="primary" sx={{ mr: "1rem" }} />
                <Typography variant="h6" color="primary">
                  Adress
                </Typography>
                :
                <Typography sx={{ ml: "1rem" }} variant="body1">
                  {hotel?.address}
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
                  {hotel?.roomPrice}
                </Typography>
              </Box>
              <Box display="flex" alignItems={"center"} py="1rem">
                <StarsIcon color="primary" sx={{ mr: "1rem" }} />
                <Typography variant="h6" color="primary">
                  Rating
                </Typography>
                :
                <Rating name="read-only" value={hotel?.Rating} readOnly />
              </Box>
            </Box>
            <img
              style={{
                borderRadius: "1rem",
                height: "300px",
                width: "300px",
              }}
              src={hotel?.image}
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
          <GoogleMaps dest={hotel} />
        </div>
      </Dialog>
    </div>
  );
}
