import { makeStyles } from "@mui/styles"
import {themeShadows} from '../../../theme/shadows'
const useStyles = makeStyles((theme) => ({
  main: {
    margin: "50px auto",
    width: "90%",
    height: "500px",
    color: theme.palette.secondary.contrastText,
  },
  sub_container: {
    maxWidth: "424.84px",
    height: "auto",
    boxShadow: themeShadows().z12,
  },
  detail: {
    maxWidth: "100%",
    height: "auto",
    background: "#FFFFF",
    margin: "-14px 0px 0px 0px",
    color: "#333",
    boxShadow: themeShadows().z12,
    borderRadius: " 0px 0px 24px 24px",
  },
  img: {
    maxWidth: "100%",
    height: "350px",
    objectFit: "cover",
    borderRadius: "24px 24px 0px 0px ",
  },
  titles: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "124.5%",
    color: "#5E6282",
  },
  Carousel: {
    position: "absolute",
  },
}))
export default useStyles
