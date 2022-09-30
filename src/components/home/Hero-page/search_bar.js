import * as React from "react";
import { Paper, Box } from "@mui/material";
import useStyles from "./styles";
import Button from "../../Ui_components/Button";
import Input from "../../Ui_components/TextField";
import Select from "../../Ui_components/Select";
import { themeShadows } from "../../../theme/shadows";
import { opacityColors } from "../../../theme/opacityColors";
import SearchIcon from "@mui/icons-material/Search";

export default function Searchbar() {
  const classes = useStyles();
  const shadow = themeShadows();
  return (
    <>
      <Paper
        className={classes.paper}
        sx={{
          borderRadius: "67px",
          boxShadow: shadow.success,
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          className={classes.box}
        >
          <Input label={"Your Budget"} />
          <Input label={"Number Of Persons"} />
          <Input label={"Number Of Days"} />
          <Select />
          <Button
            title={<SearchIcon />}
            sx={{ padding: "14px 21px !important", boxShadow:`${shadow.primary} !important` }}
          />
        </Box>
      </Paper>
    </>
  );
}
