import { makeStyles } from "@mui/styles"
import {themeShadows} from '../../../theme/shadows'

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "90%",
    padding: "10px",
    margin: " 20px auto",
  },
  subheading: {
    margin: "20px",
  },
  img: {
    width: "100%",
    height: "80%",
    objectFit: "cover",
    borderRadius: "24px 24px 0px 0px",
  },
  imgwrapper: {
    minWidth: "300px",
    height: "400px",
    borderRadius: "24px 24px 0px 0px",
    boxShadow:themeShadows().z8
  },
  squreimg: {
    height: "100px",
    width: "100px",
    borderRadius: "24px",
  },
  content_main: {
    position: "relative",
    zIndex: "1",
    opacity: "0.4",
    width: "100%",
    backgroundColor: "black",
    textAlign: "center",
    height: "100%",
    display: "grid",
    alignItems: "center",
    borderRadius: "24px",
  },
  content_sub: {
    position: "relative",
    zIndex: "2",
  },
  avatar: {
    position: "relative",
    top: "-37px",
    left: "-23px",
    width: "100%",
  },
  btnHire: {
    position: "relative",
    top: "27px",
    left: "146px",
  },
}))
export default useStyles
