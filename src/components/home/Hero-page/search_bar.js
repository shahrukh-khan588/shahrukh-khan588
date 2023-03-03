import React, { useEffect, useState } from "react";
import { Paper, Box, Radio, FormControlLabel } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
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
import {
  useGetHotelsMutation,
  useGetTripsMutation,
  useGetPlacesMutation,
} from "../../../store/services/appServices";
import { DISTRICTS, INTRESTIN } from "../../../store/constants";
import { useToastContext, ADD } from "../../../store/responseMessage";
import { useAuthUser } from "@react-query-firebase/auth";
import { auth } from "../../../firebase";
import { useDispatch } from "react-redux";
import { handelCalculatedBudget } from "../../../store/slices/user";

const validationSchema = Yup.object({
  Budget: Yup.number("Enter your Budget")
    .required("Budget is required")
    .min(30000, "Budget must be more than Rs: 30,000"),
  Persons: Yup.number("Enter Persons")
    .required("Enter Number Of Persons")
    .min(1, "Enter Number at least 1  Persons")
    .max(20, "Please Enter Persons less then 20"),
  Days: Yup.number("Enter Visting days")
    .required("days are require")
    .min(1, "Enter Number at least 1  Persons"),
  district: Yup.string("Enter your Destination").required(
    "Please Select the Destination"
  ),
});

export default function Searchbar() {
  const classes = useStyles();
  let history = useHistory();
  const dispath = useDispatch();
  const { toastDispatch } = useToastContext();
  const user = useAuthUser("user", auth);
  const shadow = themeShadows();
  const [loader, setloader] = useState(false);
  const [handelFilter, result] = useGetHotelsMutation();
  const [handelGetTrips, data] = useGetTripsMutation();
  const [handelGetPlaces, places] = useGetPlacesMutation();
  const [errormessage, setErrormessage] = useState("");

  const handelAPi = async (values) => {
    await handelFilter(values);
    await handelGetTrips(values);
    await handelGetPlaces(values);
    setloader(false);
  };

  const validSearch = async (values) => {
    if (user.data) {
      let bdgt = values.Budget / values.Persons;
      let hotelBudget = ((bdgt / 100) * 30) / values.Days;
      let mealCost = ((bdgt / 100) * 20) / values.Days;
      let transportationCost = ((bdgt / 100) * 30) / values.Days;
      let activityCost = ((bdgt / 100) * 20) / values.Days;

      const finalbudget =
        hotelBudget + mealCost + transportationCost + activityCost;

      dispath(
        handelCalculatedBudget({
          total: finalbudget,
          hotelCost: hotelBudget,
          mealCost: mealCost,
          transportationCost: transportationCost,
          activityCost: activityCost,
        })
      );

      finalbudget !== 30000
        ? setErrormessage(
            `Your budget should be more than ${
              30000 * values.Persons * values.Days
            }`
          )
        : handelAPi(values);
      setloader(false);
    } else {
      history.push("/login");
    }
  };

  const formik = useFormik({
    initialValues: {
      Budget: "",
      Persons: "",
      Days: "",
      district: "",
      vachiels: false,
      intrest: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setErrors, resetForm }) => {
      setloader(true);
      await validSearch(values);
    },
  });

  useEffect(() => {
    if (result?.data?.length || data?.data?.length || places?.data?.length) {
      history.push("/result");
    }
  }, [result, data, places]);

  useEffect(() => {
    {
      !!errormessage &&
        toastDispatch({
          type: ADD,
          payload: {
            content: { message: errormessage },
            type: "error",
          },
        });
    }
  }, [errormessage]);

  return (
    <>
      <Paper
        className={classes.paper}
        sx={{
          borderRadius: "50px",
          boxShadow: shadow.success,
        }}
      >
        <Box>
          <form className={classes.Box} onSubmit={formik.handleSubmit}>
            <TextField
              id="Budget"
              name="Budget"
              type="number"
              value={formik.values.Budget}
              onChange={formik.handleChange}
              error={formik.touched.Budget && Boolean(formik.errors.Budget)}
              helperText={formik.touched.Budget && formik.errors.Budget}
              label={"Your Budget"}
              className={classes.Input}
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
              className={classes.Input}
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
              className={classes.Input}
            />
            <Select
              value={formik.values.intrest}
              handleChange={(e) =>
                formik.setFieldValue("intrest", e.target.value)
              }
              error={formik.touched.interest && Boolean(formik.errors.intrest)}
              style={{ width: "auto" }}
              label="Select Intrest"
              id="intrest"
              name="intrest"
              items={INTRESTIN}
            />
            <Select
              value={formik.values.district}
              handleChange={(e) =>
                formik.setFieldValue("district", e.target.value)
              }
              error={!!formik.touched.district && !!formik.errors.district}
              helperText={formik.touched.district && formik.errors.district}
              label="Select Destination"
              id="district"
              name="district"
              items={DISTRICTS}
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
              disabled={loader}
              isLoading={loader}
              title={<SearchIcon />}
              sx={{ padding: "14px 21px !important" }}
              onClick={formik.handleSubmit}
            />
          </form>
        </Box>
      </Paper>
    </>
  );
}
