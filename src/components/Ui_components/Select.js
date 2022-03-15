import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "200px",
    fontsize: "12px",
    border: "none",
    fontWeight: "500",
    backgroundColor: theme.palette.BG.secondary,
    borderRadius: "34px !important",
    "&:hover": {
      border: "none",
      backgroundColor: theme.palette.BG.secondary,
    },
    "&:focus": {
      border: "none",
      backgroundColor: theme.palette.BG.secondary,
    },
    "&:disabled": {
      background: theme.palette.primary.disable,
      color: theme.palette.white,
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
}));

export default function BasicSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel
          shrink={false}
          id="demo-simple-select-label"
          className={classes.select}
        >
          {age ? "" : "Destination"}
        </InputLabel>
        <Select
          className={classes.root}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Destination"
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value={"Hunza"}>Hunza</MenuItem>
          <MenuItem value={"Gigit"}>Gigit</MenuItem>
          <MenuItem value={"Sikardu"}>Sikardu</MenuItem>
          <MenuItem value={"Nager"}>Nager</MenuItem>
          <MenuItem value={"Chilas"}>Chilas</MenuItem>
          <MenuItem value={"Yaseen"}>Yaseen</MenuItem>
          <MenuItem value={"Gaizer"}>Gaizer</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
