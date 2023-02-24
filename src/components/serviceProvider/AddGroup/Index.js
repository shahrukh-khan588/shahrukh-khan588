import React, { useState } from "react";
import { useFormik } from "formik";
import { Paper, Box } from "@mui/material";
import * as Yup from "yup";
import Button from "../../Ui_components/TextField";
import TextField from "../../Ui_components/TextField";
import Select from "../../Ui_components/Select";
import { useAddHotels } from "../../../hooks/useAddTrip";
import Chip from "@mui/material/Chip";
import { DISTRICTS } from "../../../store/constants";
import SearchBox from "../components/SearchBox";

const validationSchema = Yup.object({
  TripName: Yup.string("Enter your TripName").required("TripName is required"),
  ChargesPerPerson: Yup.string("Enter your ChargesPerPerson").required(
    "Please enter the ChargesPerPerson"
  ),
  location: Yup.string("Enter your location").required(
    "Please enter the location"
  ),
  image: Yup.string("Enter your image").required("Please Select the image"),
  fromdate: Yup.string("Enter date").required("Date is required"),
  todate: Yup.string("Enter date").required("Date is required"),
});

function Register() {
  const { handleHotels } = useAddHotels();
  const [image, setImage] = useState("");
  const [coordinates, setCoordinates] = useState();
  const [multiCordinates, setMultiCordinates] = useState([]);
  const [searchError, setError] = useState("");
  const [address, setAddress] = useState({
    label: "",
    value: "",
  });
  const formik = useFormik({
    initialValues: {
      TripName: "",
      ChargesPerPerson: "",
      location: "",
      image: "",
      fromdate: "",
      todate: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      handleHotels(values, image, multiCordinates);
    },
  });

  const handleDelete = (item) => {
    setMultiCordinates(multiCordinates.filter((e) => e.label !== item.label));
  };

  return (
    <Box m="12rem auto" maxWidth="600px">
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
          <Box sx={{ width: "100%" }} className="input">
            <SearchBox
              setCoordinates={setCoordinates}
              coordinates={coordinates}
              setAddress={setAddress}
              address={address}
              helperText={searchError}
              error={searchError}
              setMultiCordinates={setMultiCordinates}
              multiCordinates={multiCordinates}
            />
          </Box>
          <Box width="100%">
            {multiCordinates.length > 0 ? (
              multiCordinates?.map((e) => {
                return (
                  <Chip
                    sx={{ margin: "5px", padding: "5px" }}
                    label={e?.label}
                    variant="outlined"
                    onDelete={() => {
                      handleDelete(e);
                    }}
                  />
                );
              })
            ) : (
              <></>
            )}
          </Box>
          <TextField
            sx={{ marginTop: "1rem" }}
            id="TripName"
            name="TripName"
            label="TripName"
            type="text"
            value={formik.values.TripName}
            onChange={formik.handleChange}
            error={formik.touched.TripName && Boolean(formik.errors.TripName)}
            helperText={formik.touched.TripName && formik.errors.TripName}
          />
          <TextField
            sx={{ marginTop: "1rem" }}
            id="ChargesPerPerson"
            name="ChargesPerPerson"
            label="ChargesPerPerson"
            type="number"
            value={formik.values.ChargesPerPerson}
            onChange={formik.handleChange}
            error={
              formik.touched.ChargesPerPerson &&
              Boolean(formik.errors.ChargesPerPerson)
            }
            helperText={
              formik.touched.ChargesPerPerson && formik.errors.ChargesPerPerson
            }
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
          <TextField
            sx={{ marginTop: "1rem" }}
            id="fromdate"
            name="fromdate"
            label="From"
            type="date"
            value={formik.values.fromdate}
            onChange={formik.handleChange}
            error={formik.touched.fromdate && Boolean(formik.errors.fromdate)}
            helperText={formik.touched.fromdate && formik.errors.fromdate}
          />
          <TextField
            sx={{ marginTop: "1rem" }}
            id="todate"
            name="todate"
            label="To"
            type="date"
            value={formik.values.todate}
            onChange={formik.handleChange}
            error={formik.touched.todate && Boolean(formik.errors.todate)}
            helperText={formik.touched.todate && formik.errors.todate}
          />
          <Select
            value={formik.values.location}
            handleChange={(e) =>
              formik.setFieldValue("location", e.target.value)
            }
            // error={formik.touched.location}
            sx={{ marginTop: "1rem" }}
            label="Select District"
            id="location"
            name="location"
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
      </Paper>
    </Box>
  );
}
export default Register;
