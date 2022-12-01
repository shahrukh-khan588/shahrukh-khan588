import React, { useEffect, useState } from "react";
import { Paper, Box, Radio, FormControlLabel } from "@mui/material";
import useStyles from "./styles";
import Button from "../../Ui_components/Button";
import TextField from "../../Ui_components/TextField";
import Select from "../../Ui_components/Select";
import { themeShadows } from "../../../theme/shadows";
import SearchIcon from "@mui/icons-material/Search";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import { useFormik } from "formik";
import { useGetHotelsMutation } from "../../../store/services/appServices";

const validationSchema = Yup.object({
  Budget: Yup.number("Enter your Budget")
    .required("Budget is required")
    .min(30000, "Budget must be more than Rs: 30,000"),
  Persons: Yup.number("Enter your Number Of Persons")
    .required("Please enter the Number Of Persons")
    .max(20, "Please Enter Persons less then 20"),
  Days: Yup.number("Enter Visting days").required("Please enter the location"),
  district: Yup.string("Enter your Destination").required(
    "Please Select the Destination"
  ),
});

export default function Searchbar() {
  const classes = useStyles();
  let history = useHistory();
  const shadow = themeShadows();
  const [handelFilter, result] = useGetHotelsMutation();

  const formik = useFormik({
    initialValues: {
      Budget: "",
      Persons: "",
      Days: "",
      district: "",
      vachiels: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setErrors, resetForm }) => {
      await handelFilter(values);
    },
  });

  useEffect(() => {
    if (result?.data?.length) {
      history.push("/result");
    }
  }, [result]);
  return (
    <>
      <Paper
        className={classes.paper}
        sx={{
          borderRadius: "67px",
          boxShadow: shadow.success,
        }}
      >
        <Box>
          <form
            className={classes.box}
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <TextField
              id="Budget"
              name="Budget"
              type="number"
              value={formik.values.Budget}
              onChange={formik.handleChange}
              error={formik.touched.Budget}
              helperText={formik.touched.Budget && formik.errors.Budget}
              label={"Your Budget"}
            />

            <TextField
              id="Persons"
              name="Persons"
              type="number"
              value={formik.values.Persons}
              onChange={formik.handleChange}
              error={formik.touched.Persons && Boolean(formik.errors.Persons)}
              helperText={formik.touched.Persons && formik.errors.Persons}
              label={"Number Of Persons"}
            />

            <TextField
              id="Days"
              name="Days"
              type="number"
              value={formik.values.Days}
              onChange={formik.handleChange}
              error={formik.touched.Days && Boolean(formik.errors.Days)}
              helperText={formik.touched.Days && formik.errors.Days}
              label={"Number Of Days"}
            />
            <Select
              value={formik.values.district}
              handleChange={(e) =>
                formik.setFieldValue("district", e.target.value)
              }
              error={formik.touched.district && Boolean(formik.errors.district)}
              label="Select Destination"
              id="district"
              name="district"
              items={["Hunza", "Skardu", "Gaizer", "Phunder"]}
            />
            <FormControlLabel
              checked={formik.values.vachiels}
              onChange={(e) =>
                formik.setFieldValue("vachiels", !formik.values.vachiels)
              }
              value="Ownvahicles"
              control={<Radio checkedIcon={<DirectionsCarFilledIcon />} />}
              label="Own vahicles"
            />
            <Button
              title={<SearchIcon />}
              sx={{ padding: "14px 21px !important" }}
              onClick={formik.handleSubmit}
              disabled={!formik.isValid}
            />
          </form>
        </Box>
      </Paper>
    </>
  );
}
