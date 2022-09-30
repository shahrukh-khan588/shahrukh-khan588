import { makeStyles } from "@mui/styles"
import AvImage from "../../../assets/images/sikardu.jpg"


const useStyles = makeStyles((theme) => ({
  paper: {
    width: "50%",
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
    height: "400px",
    borderRadius: "24px 24px 0px 0px",
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
    padding: "4px",
    width: "80px",
    height: "80px",
    backgroundColor: theme.palette.primary.main,
    margin: "0px auto",
    position: "relative",
    top: "40px",
    borderRadius: "50%",
    display: "grid",
    justifyContent: "center",
  },
  av_warper: {
    width: "100%",
    height: "auto",
    borderRadius: "6px 6px 0px 0px",
    backgroundImage:`url${AvImage}`,
  },
  links: {
    height: "59px",
    cursor: "pointer",
    backgroundColor: " rgba(255, 255, 255, .15)",
    backdropFilter: " blur(5px)",
    width: "100%",
    borderRadius: "0px 0px 6px 6px",
  },
}))
export default useStyles
