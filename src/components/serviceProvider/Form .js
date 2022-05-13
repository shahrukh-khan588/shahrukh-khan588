import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import { Paper, Box, styled, Typography } from "@mui/material";
import * as Yup from "yup";
import Button from "../Ui_components/Button";
import TextField from "../Ui_components/TextField";
import Select from "../Ui_components/Select";
import { useAddHotels } from "../../hooks/useHotel";
import { grid } from "@mui/system";
const ImageSelector = styled(TextField)({   
  "& legend": {
    display: "none",
  },
});
const FILE_SIZE = 2400 * 1600;
const SUPPORTED_FORMATS = ["image/jpg", "image/png"];
const validationSchema = Yup.object({
  hotelName: Yup.string("Enter your hotelName").required(
    "hotelName is required"
  ),
  roomPrice: Yup.string("Enter your password").required(
    "Please enter the roomPrice"
  ),
  address: Yup.string("Enter your address").required(
    "Please enter the address"
  ),
  district: Yup.string("Enter your district").required(
    "Please Select the district"
  ),
  image: Yup.mixed()
    .required("Image is Required")
    .test(
      "fileSize",
      "The image is too large, please upload an image below 5MB and below 2400x1600 dimension",
      (value) => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Please upload a JPG or PNG.",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
});

function Register() {
  const { handleHotels } = useAddHotels();
  const [image, setImage] = useState("");
  const hiddenFileInput = useRef(null);
  const formik = useFormik({
    initialValues: {
      hotelName: "",
      roomPrice: "",
      address: "",
      image: "",
      district: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      handleHotels(values, image);
    },
  });
  const handleClick = () => {
    hiddenFileInput?.current && hiddenFileInput?.current?.click();
  };
  return (
    <Box m="12rem auto" maxWidth="30%">
      <Paper elevation={6}>
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
          <TextField
            sx={{ marginTop: "1rem" }}
            id="address"
            name="address"
            label="address"
            type="text"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
          <Box display="grid" m="1rem 0" gridTemplateColumns="1fr 1fr">
            <ImageSelector
              fullWidth
              size="small"
              value={formik.values.image.name}
              inputProps={{ readOnly: true }}
              error={formik.touched.image && Boolean(formik.errors.image)}
              helperText={formik.touched.image && formik.errors.image}
            />
            <input
              style={{ display: "none" }}
              accept="image/*"
              placeholder="Add Image"
              id="contained-button-file"
              ref={hiddenFileInput}
              onChange={(e) => {
                formik.handleChange(e);
                setImage(e.target.files[0]);
              }}
              type="file"
            />
            <Button
              sx={{ textTransform: "none", width: "auto", marginLeft: "16px" }}
              title={"Add Image"}
              variant="outline"
              component="span"
              onClick={handleClick}
            ></Button>
          </Box>
          {formik.values.image && (
            <img
              alt="img"
              src={URL.createObjectURL(formik.values.image)}
              style={{
                marginBottom: "16px",
                height: "66pxP",
                width: "101px",
                borderRadius: "8px",
              }}
            />
          )}
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
            items={["Hunza", "Sikardu", "Gilgit", "Gaizer", "Chilas"]}
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
      </Paper>
    </Box>
  );
}
export default Register;
