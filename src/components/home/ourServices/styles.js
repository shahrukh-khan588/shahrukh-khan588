import { makeStyles } from "@mui/styles"
import {themeShadows} from "../../../theme/shadows"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    margin: "auto",
    position: "relative",
    top: "-300px",
  },
  mainheading: {
    color: "#fff",
  },
  paper: {
    height: "200px",
    background: "#FFFFFF",
    boxShadow:themeShadows().primary,
    borderRadius: "36px",
    padding: "10px !important",
  },
  img: {
    width: "50px",
    height: "50px",
    margin: "auto",
  },
  heading: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600 !important",
    fontSize: " 20px !important",
    lineHeight: " 27px !important",
    textAlign: "center",
    color: " #5E6282",
    margin: "10px 0px !important",
  },
  subheading: {
    fontFamily: "Poppins",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "16px !important",
    lineHeight: "26px !important",
    textAlign: "center !important",
    color: "#5E6282",
  },
}))
export default useStyles
