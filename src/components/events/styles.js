import { makeStyles } from "@mui/styles";
import Back from "../../assets/images/background.svg";
const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: `url(${Back})`,
    width: "100%",
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
