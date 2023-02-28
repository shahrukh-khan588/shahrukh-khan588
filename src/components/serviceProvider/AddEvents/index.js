import React, { useState } from "react";
import { useFormik } from "formik";
import { Paper, Box } from "@mui/material";
import * as Yup from "yup";
import Button from "../../Ui_components/TextField";
import TextField from "../../Ui_components/TextField";
import Select from "../../Ui_components/Select";
import { useAddEvents } from "../../../hooks/useAddEvenets";
import { DISTRICTS, INTRESTIN } from "../../../store/constants";
import SearchBox from "../components/SearchBox";

const validationSchema = Yup.object({
  EventName: Yup.string("Enter your EventName").required(
    "EventName is required"
  ),
  fromdate: Yup.string("Enter date").required("Date is required"),
  todate: Yup.string("Enter date").required("Date is required"),
  district: Yup.date("Enter your district").required(
    "Please enter the district"
  ),
  image: Yup.string("Enter your image").required("Please Select the image"),
  description: Yup.string("Please enter description here").required(
    "description is required"
  ),
  eventType: Yup.string("Please enter eventType here").required(
    "eventType is required"
  ),
});

function Register() {
  const { handelAddEvents } = useAddEvents();
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
      EventName: "",
      fromdate: "",
      todate: "",
      description: "",
      district: "",
      image: "",
      eventType: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values, "values");
      handelAddEvents(values, image, coordinates, address);
    },
  });

  return (
    <Box m="6rem auto" maxWidth="600px">
      <Paper>
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

          <TextField
            sx={{ marginTop: "1rem" }}
            id="EventName"
            name="EventName"
            label="EventName"
            type="text"
            value={formik.values.EventName}
            onChange={formik.handleChange}
            error={formik.touched.EventName && Boolean(formik.errors.EventName)}
            helperText={formik.touched.EventName && formik.errors.EventName}
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
          <TextField
            sx={{ marginTop: "1rem" }}
            id="description"
            name="description"
            label="Description"
            type="text"
            value={formik.values.description}
            onChange={formik.handleChange}
            multiline
            rows={4}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
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

          <Select
            boxSx={{ my: ".5rem" }}
            sx={{ maxWidth: "unset" }}
            value={formik.values.district}
            handleChange={(e) =>
              formik.setFieldValue("district", e.target.value)
            }
            // error={formik.touched.district}
            error={formik.touched.district && Boolean(formik.errors.district)}
            helperText={formik.touched.district && formik.errors.district}
            label="Select District"
            id="district"
            name="district"
            items={DISTRICTS}
          />
          <Select
            boxSx={{ my: ".5rem" }}
            value={formik.values.eventType}
            handleChange={(e) =>
              formik.setFieldValue("eventType", e.target.value)
            }
            error={formik.touched.eventType && Boolean(formik.errors.eventType)}
            helperText={formik.touched.eventType && formik.errors.eventType}
            sx={{ maxWidth: "unset" }}
            label="Select EventType"
            id="eventType"
            name="eventType"
            items={INTRESTIN}
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
