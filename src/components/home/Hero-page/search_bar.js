import * as React from "react"
import { Paper, Box } from "@mui/material"
import useStyles from "./styles"
import Button from "../../Ui_components/Button"
import Input from "../../Ui_components/TextField"
import Select from "../../Ui_components/Select"

export default function Searchbar() {
  const classes = useStyles()
  return (
    <>
      <Paper elevation={3} className={classes.paper} sx={{borderRadius:'67px'}}>
        <Box
          display="flex"
          alignItems='center'
          justifyContent="space-around"
          className={classes.box}
        >
          <Input label={"Your Budget"} />
          <Input label={"Number Of Persons"} />
          <Input label={"Number Of Days"} />
          <Select />
          <Button title={"Search"} />
        </Box>
      </Paper>
    </>
  )
}
