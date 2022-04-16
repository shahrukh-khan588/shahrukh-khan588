import { createTheme } from "@mui/material/styles"
import palette from "./palette"
import typography from "./typography"

const theme = createTheme({
  palette,
  typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})
export default theme
