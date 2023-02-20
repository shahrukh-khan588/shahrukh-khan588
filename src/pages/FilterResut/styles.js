import { makeStyles } from "@mui/styles";
import { themeShadows } from "../../theme/shadows";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "50%",
    padding: "10px",
    margin: " 20px auto",
  },
  mainCard: {
    maxHeight: "90vh",
    maxWidth: 345,
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: "12px",
    "@media (max-width: 1000px)": {
      maxWidth: "100%",
    },
  },
  subheading: {
    margin: "20px",
  },
  mainPaper: {
    "&.MuiPaper-root": {
      justifyContent: "space-between",
      display: "flex",
      width: "80%",
      borderRadius: "12px",
      margin: "1rem auto",
      border: `1px solid ${theme.palette.primary.main}`,
      minHeight: "7vh",
      padding: "20px 10px",
      boxShadow: themeShadows().primary,
      "@media (max-width: 1000px)": {
        width: "100%",
      },
    },
  },
  Container: {
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
  middleSec: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    "@media (max-width: 1000px)": {
      width: "100%",
    },
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
    height: "150px",
    width: "150px",
    objectFit: "cover",
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
  svg: {
    width: "36.4%",
    zIndex: 999,
    top: "-304px",
    left: " -6.2%",
    position: "absolute",
    animation: "floaty3 15s ease-in-out infinite",
  },
  event: {
    maxWidth: "80%",
    margin: "5rem auto",
    display: "flex",
    justifyContent: "space-between",
  },

  heading: {
    fontsize: "24px",
  },
  eventImg: {
    width: "200px",
    height: "200px",
    borderRadius: "1.5rem",
  },
}));
export default useStyles;
