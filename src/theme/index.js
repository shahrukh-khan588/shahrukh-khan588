import palette from "./palette";
import { opacityColors } from "./opacityColors";
import { themeShadows } from "./shadows";
import { createTheme } from "@mui/material";

export default createTheme({
  palette,
  opacityColors,
  //@ts-ignore
  shadows: themeShadows,
  breakpoints: {
    values: {
      xs: 0,
      mxs: 300,
      xsm: 450,
      sm: 600,
      msm: 780,
      md: 850,
      mmd: 960,
      lg: 1200,
      xl: 1536,
    },
  },
});
