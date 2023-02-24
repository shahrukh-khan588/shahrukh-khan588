import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import { Box, useTheme, Grid } from "@mui/material";
import * as Yup from "yup";
import Button from "../Ui_components/Button";
import TextField from "../Ui_components/TextField";
import Select from "../Ui_components/Select";
import { useAddHotels } from "../../hooks/useHotel";
import { grid } from "@mui/system";
import { DISTRICTS } from "../../store/constants";
import SearchBox from "./components/SearchBox";

// const ImageSelector = styled(TextField)({
//   "& legend": {
//     display: "none",
//   },
// });
// const FILE_SIZE = 2400 * 1600;
// const SUPPORTED_FORMATS = ["image/jpg", "image/png"];
const validationSchema = Yup.object({
  hotelName: Yup.string("Enter your hotelName").required(
    "hotelName is required"
  ),
  roomPrice: Yup.string("Enter your password").required(
    "Please enter the roomPrice"
  ),
  district: Yup.string("Enter your district").required(
    "Please Select the district"
  ),
  image: Yup.mixed().required("Image is Required"),
  // .test(
  //   "fileSize",
  //   "The image is too large, please upload an image below 5MB and below 2400x1600 dimension",
  //   (value) => value && value.size <= FILE_SIZE
  // )
  // .test(
  //   "fileFormat",
  //   "Please upload a JPG or PNG.",
  //   (value) => value && SUPPORTED_FORMATS.includes(value.type)
  // ),
});

function Register() {
  const theme = useTheme();
  const { handleHotels } = useAddHotels();
  const [image, setImage] = useState("");
  // const hiddenFileInput = useRef(null);
  const [coordinates, setCoordinates] = useState();
  const [searchError, setError] = useState("");
  const [address, setAddress] = useState({
    label: "",
    value: "",
  });

  const formik = useFormik({
    initialValues: {
      hotelName: "",
      roomPrice: "",
      image: "",
      district: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      handleHotels(values, image, coordinates, address.label);
    },
  });

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        sx={{
          border: `1px solid ${theme.palette.grey[500]}`,
          p: "1rem",
          mt: "5rem",
        }}
      >
        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            padding: "1rem",
          }}
        >
          <TextField
            sx={{ marginTop: "1rem" }}
            id="hotelName"
            name="hotelName"
            label="hotelName"
            type="text"
            value={formik.values.hotelName}
            onChange={formik.handleChange}
            error={formik.touched.hotelName && Boolean(formik.errors.hotelName)}
            helperText={formik.touched.hotelName && formik.errors.hotelName}
          />
          <TextField
            sx={{ marginTop: "1rem" }}
            id="roomPrice"
            name="roomPrice"
            label="roomPrice"
            type="number"
            value={formik.values.roomPrice}
            onChange={formik.handleChange}
            error={formik.touched.roomPrice && Boolean(formik.errors.roomPrice)}
            helperText={formik.touched.roomPrice && formik.errors.roomPrice}
          />

          <Box sx={{ width: "100%" }} className="input">
            <SearchBox
              setCoordinates={setCoordinates}
              coordinates={coordinates}
              setAddress={setAddress}
              address={address}
              helperText={searchError}
              error={searchError}
            />
          </Box>
          <TextField
            sx={{ marginTop: "1rem" }}
            id="image"
            name="image"
            label="image"
            type="file"
            value={formik.values.image}
            onChange={(e) => {
              formik.handleChange(e);
              setImage(e.target.files[0]);
            }}
            error={formik.touched.image && Boolean(formik.errors.image)}
            helperText={formik.touched.image && formik.errors.image}
          />
          <Select
            value={formik.values.district}
            error={formik.errors.district}
            sx={{ marginTop: "1rem", display: grid, gridTemplateColumn: "1fr" }}
            handleChange={(e) =>
              formik.setFieldValue("district", e.target.value)
            }
            label="Select District"
            placeholder="Select district"
            name="district"
            id="district"
            items={DISTRICTS}
          />
          <Button
            sx={{ marginTop: "1rem", backGroundColor: "#637bfd" }}
            variant="filled"
            type="submit"
            title={"Submit"}
            onClick={formik.handleSubmit}
            disabled={!formik.isValid}
          />
        </form>
      </Grid>
    </Grid>
  );
}
export default Register;
