import { Box, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { makeStyles } from "@mui/styles";
import TextField from "../../Ui_components/TextField";
export default function SearchBox({
  setCoordinates,
  coordinates,
  address,
  setAddress,
  helperText,
  error,
  setMultiCordinates,
  multiCordinates,
}) {
  const classes = useStyles();

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);

    setCoordinates({
      lat: latLng.lat,
      lng: latLng.lng,
    });

    setMultiCordinates([
      ...multiCordinates,
      {
        label: value,
        lat: latLng.lat,
        lng: latLng.lng,
      },
    ]);

    setAddress({
      ...address,
      label: value,
    });
  };
  return (
    <Box my=".5rem" sx={{ width: "100%" }}>
      <PlacesAutocomplete
        value={address.label}
        onChange={(e) => setAddress({ ...address, value: e, label: e })}
        onSelect={handleSelect}
        shouldFetchSuggestions={address.value.length > 2}
        types={["lodging"]}
        componentRestrictions={{ country: "pk", administrativeArea: "gb" }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <Box>
            <TextField
              sx={{ my: ".5rem", display: "flex", width: "100%" }}
              {...getInputProps({
                placeholder: "Type address",
              })}
              autoFocus={true}
              placeholder="address"
              required={true}
              type="text"
              InputProps={{ style: { fontSize: 14 } }}
              helperText={address.label.length > 0 ? null : helperText}
              error={address.label.length > 0 ? null : error}
            />
            <Box className={classes.dropdown}>
              {loading && <CircularProgress />}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <Box
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <pre
                      style={{
                        textAlign: "left",
                        background: "#f0f0f0",
                        padding: 20,
                      }}
                    >
                      {suggestion.description}
                    </pre>
                  </Box>
                );
              })}
            </Box>
          </Box>
        )}
      </PlacesAutocomplete>
    </Box>
  );
}

const useStyles = makeStyles({
  dropdown: {
    position: "absolute",
    zIndex: 1000,
  },
});
