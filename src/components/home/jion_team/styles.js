import { makeStyles } from "@mui/styles";
import Discount from "../../../assets/mountains/discount.jpg";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "50%",
    padding: "10px",
    margin: " 20px auto",
  },
  subheading: {
    margin: "20px",
  },
  main: {
    background: "red",
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
  dicount_root: {
    backgroundImage: `url(${Discount})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "600px",
    maxWidth: "600px",
    borderRadius: "24px",
    boxShadow: "-11px -5px 36px 0px rgba(0,0,0,0.37)",
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
}));
export default useStyles;
