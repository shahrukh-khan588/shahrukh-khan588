import React, { useState } from "react";
import { useFormik } from "formik";
import { Paper, Box, Autocomplete } from "@mui/material";
import * as Yup from "yup";
import Button from "../../Ui_components/TextField";
import TextField from "../../Ui_components/TextField";
import Select from "../../Ui_components/Select";
import { useAddPlaces } from "../../../hooks/useAddPlaces";
import { DISTRICTS, INTRESTIN } from "../../../store/constants";
import SearchBox from "../components/SearchBox";

const validationSchema = Yup.object({
  PlaceName: Yup.string("Enter your PlaceName").required(
    "PlaceName is required"
  ),
  district: Yup.string("Enter district Name ").required(
    "Please enter the district"
  ),
  placeType: Yup.array()
    .min(1, "Please select at least one placeType")
    .required("Please enter the placeType"),
  image: Yup.string("Enter your image").required("Please Select the image"),
});

function Register() {
  const { handelPlaces } = useAddPlaces();
  const [image, setImage] = useState("");
  const [coordinates, setCoordinates] = useState();
  const [searchError, setError] = useState("");
  const [address, setAddress] = useState({
    label: "",
    value: "",
  });
  const formik = useFormik({
    initialValues: {
      PlaceName: "",
      placeType: "",
      district: "",
      image: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      handelPlaces(values, image, coordinates, address);
    },
  });

  return (
    <Box m="12rem auto" maxWidth="600px" padding="2rem">
      <Paper>
        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            padding: "3rem",
          }}
        >
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
            id="PlaceName"
            name="PlaceName"
            label="Place Name"
            type="text"
            value={formik.values.PlaceName}
            onChange={formik.handleChange}
            error={formik.touched.PlaceName && Boolean(formik.errors.PlaceName)}
            helperText={formik.touched.PlaceName && formik.errors.PlaceName}
          />

          <Autocomplete
            sx={{ my: "1rem" }}
            multiple
            id="tags-outlined"
            onChange={(event, values) => {
              formik.setFieldValue("placeType", values);
            }}
            options={INTRESTIN}
            getOptionLabel={(option) => option.label}
            defaultValue={[INTRESTIN[0]]}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                error={
                  formik.touched.placeType && Boolean(formik.errors.placeType)
                }
                helperText={formik.touched.placeType && formik.errors.placeType}
                value={formik.values.placeType}
                {...params}
                label="filterSelectedOptions"
                placeholder="Favorites"
              />
            )}
          />
          <Select
            sx={{ maxWidth: "unset" }}
            value={formik.values.district}
            handleChange={(e) =>
              formik.setFieldValue("district", e.target.value)
            }
            // error={formik.touched.placeType}
            boxSx={{ my: ".5rem" }}
            label="Select District"
            id="district"
            name="district"
            items={DISTRICTS}
          />

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
