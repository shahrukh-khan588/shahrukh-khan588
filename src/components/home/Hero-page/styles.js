import { makeStyles } from "@mui/styles";
import Image from "../../../assets/images/bkimage.png";
import { themeShadows } from "../../../theme/shadows";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Image})`,
    width: "100%",
    color: theme.palette.primary.contrastText,
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
    color: `${theme.palette.grey[900]}`,
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
    // lineHeight: "89px",
    color: `${theme.palette.primary.main} !important`,
  },
  PaperContainer: {
    marginTop: "9vh !important",
    background: "#c8e6c9",
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      bottom: "5.2vh",
    },
    [theme.breakpoints.up("sm")]: {
      bottom: "-14vh",
    },
    width: "100%",
    borderRadius: "65px 65px 65px 0",
  },
  paper: {
    width: "92%",
    marginInline: "auto",
    border: `1px solid ${theme.palette.primary.main}`,
    minHeight: "7vh",
    padding: "20px 20px",
    position: "relative",
    top: "36px",
    boxShadow: themeShadows().primary,
    color: `${theme.palette.primary.main} !important`,
  },
  Box: {
    display: "flex",
    width: "100%",
    alignItems:'center',
    justifyContent: "space-evenly !important",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column !important",
    },
  },
  ThreeInputs: {
    display: "flex",
    flexWrap:'wrap',
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      width:'80%',
    },
    [theme.breakpoints.up('sm')]:{
      width:'85vw',
    }
  },
  Input: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "200px",
      marginBottom:'3px !important'
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "33.333% !important",
    },
  },
  Video: {
    width: "100%",
    position: "absolute",
    zIndex: "-1",
    [theme.breakpoints.down("sm")]: {
      marginTop: "7vh",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "-0.8vh",
    },
  },
  TypicalBlock: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    marginLeft: "27px",
    marginTop: "100px",
  },
  TypicalStyle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "55px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "90px !important",
    },
  },
}));
export default useStyles;
