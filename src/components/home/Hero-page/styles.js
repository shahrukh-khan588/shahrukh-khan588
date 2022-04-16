import { makeStyles } from "@mui/styles"
import Image from "../../../assets/images/bkimage.png"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Image})`,
    width: "100%",
    color: theme.palette.secondary.contrastText,
    background: "#333",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  warper: {
    // display:"flex",
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    width: "90%",
    margin: "auto",
  },
  content: {
    marginTop: "150px",
  },
  img: {
    marginTop: "130px",
  },
  heading: {
    color: `${theme.palette.secondary.main}`,
  },
  hero_image: {
    maxWidth: "100%",
    height: "auto",
  },
  subheading: {
    fontFamily: "Volkhov !important",
    fontStyle: "normal",
    fontWeight: "bold !important",
    fontSize: "4rem !important",
    lineHeight: "89px",
    letterSpacing: "-0.04em",
    color: "#fff",
  },
  span: {
    fontStyle: "normal",
    fontWeight: "bold !important",
    fontSize: "72px",
    lineHeight: "89px",
    color: `${theme.palette.primary.main} !important`,
  },
  paper: {
    width: "80%",
    margin: "auto",
    padding: "20px 10px",
    position: "relative",
    top: "36px",
    color: `${theme.palette.primary.main} !important`,
  },
}))
export default useStyles
