import * as React from "react";
import { Button, CircularProgress, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};
const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Raleway",
    textTransform: "uppercase",
    color: `${theme.palette.secondary.contrastText} !important`,
    background:`${theme.palette.primary.main} !important`,
    padding: "12px 34px !important",
    letterSpacing: "1px",
    margin: 0,
    border: `1px solid ${theme.palette.secondary.border}`,
    fontsize: "15px",
    fontWeight: "500",
    borderRadius: "34px !important",
    transition: "all 0.5s linear;",
    "&:focus": {
      transition: "all 0.3s ease 0s",
    },
    "&:disabled": {
      background: theme.palette.primary.disable,
      color: theme.palette.white,
    },
  },
}));

export default function BasicButtons(props) {
  const { type, onChange, isLoading, title, disabled, variant ,sx} = props;
  const classes = useStyles();
  return (
    <Button
    sx={{textTransform:'none',...sx}}
      component={motion.button}
      variants={buttonVariants}
      whileHover="hover"
      onClick={onChange}
      className={classes.root}
      variant={variant}
      type={type}
      disabled={disabled}
      {...props}
    >
      {isLoading ? <CircularProgress size={"22px"} color={"grey"} /> : <Typography fontWeight={700}>{title}</Typography>}
    </Button>
  );
}
