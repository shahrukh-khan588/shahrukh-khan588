import { makeStyles } from "@mui/styles";
import Image from "../../assets/mountains/backg.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Image})`,
    width: "100%",
    position: "relatives",
    background: "#333",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "70vh",
    display: "grid",
    placeItems: "center",
  },
  main: {
    width: "80%",
    margin: "0px auto",
  },
  svg: {
    position: "relative",
    top: "-307px",
  },
  span: {
    color: " #fcc465",
    fontSize: "16px",
    fontWeight: 800,
    position: "absolute",
    bottom: "0",
    textTransform: "uppercase",
  },
  mainHeading: {
    fontSize: "48px",
    marginTop: "5px",
  },
  back: {
    top: "-158px",
    fontSize: "120px",
    fontWeight: "bolder",
    left: "-5px",
    opacity: 0.05,
    position: "relative",
    textTransform: "uppercase",
  },
  content: {
    fontSize: "32px",
    lineHeight: "16px",
  },
  tabRoot: {
    position: "relative",
    width: "80%",
    margin: "0px auto",
  },
  galleryImg: {
    width: "300px",
    height: "400px",
    objectFit: "cover",
    borderRadius: "10px",
  },
}));
export default useStyles;
