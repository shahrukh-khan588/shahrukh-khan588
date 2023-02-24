import * as React from "react";
import Box from "@mui/material/Box";
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material/";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "200px",
    fontsize: "12px",
    // border: "none",
    fontWeight: "500",
    backgroundColor: theme.palette.background.default,
    borderRadius: "34px !important",
    "&:hover": {
      // border: "none",
      backgroundColor: theme.palette.background.default,
    },
    // "&:focus": {
    //   border: "none",
    //       backgroundColor: theme.palette.background.default,
    // },
    // "&:disabled": {
    //   background: theme.palette.grey[300],
    //   color: theme.palette.grey[300],
    // },
    // "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    //   border: "none",
    // },
  },
}));

export default function BasicSelect({
  items,
  handleChange,
  label,
  error,
  sx,
  boxSx,
}) {
  const classes = useStyles();

  return (
    <Box sx={{ minWidth: 200, ...boxSx }} fullWidth>
      <FormControl fullWidth error={!!error}>
        <InputLabel>{label}</InputLabel>
        <Select
          fullWidth
          className={classes.root}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={label}
          onChange={handleChange}
          sx={{ ...sx }}
        >
          {items?.map((item) => (
            <MenuItem value={item.label}>{item.label || ""}</MenuItem>
          ))}
        </Select>
        <FormHelperText>{error}</FormHelperText>
      </FormControl>
    </Box>
  );
}
