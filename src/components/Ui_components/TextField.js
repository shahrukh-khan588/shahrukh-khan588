import React from "react"
import { makeStyles } from "@mui/styles"
import TextField from "@mui/material/TextField"

function GravityTextField(props) {
  const { error} = props
  const useStylesGravity = makeStyles((theme) => ({
    root: {
      '& .MuiFilledInput-root':{
        borderRadius: "40px",
      },
      border: "0px",
      borderWidth: "0px",
      borderColor: error
        ? theme.palette.error.main
        : theme.palette.primary.main,
      overflow: "hidden",
      borderRadius: "16px",
      backgroundColor: theme.palette.BG.secondary,
      transition: theme.transitions.create(["border-color"]),
      "&:hover": {
        backgroundColor: theme.palette.BG.secondary,
      },
      "&$focused": {
        backgroundColor: theme.palette.BG.secondary,
        // border: "1px solid",
        borderColor: error
          ? theme.palette.error.main
          : theme.palette.primary.main,
      },
    },
    focused: {},
  }))

  const classes = useStylesGravity()

  return (
    <TextField
      {...props}
      InputProps={{ ...props.InputProps, classes, disableUnderline: true }}
    />
  )
}

const useStyles = makeStyles((theme) => ({
  margin: {
    marginBottom: theme.spacing(1),
  },
}))

export default function CustomizedInputs(props) {
  const classes = useStyles()

  return (
    <GravityTextField
      className={classes.margin}
      variant="filled"
      autoComplete="off"
      {...props}
    />
  )
}
