import { makeStyles } from "@mui/styles";
import { themeShadows } from "../../theme/shadows";

const useStyles = makeStyles((theme) => ({
  hotelContainer: {
    justifyContent: "space-between",
    display: "flex",
    width: "80%",
    borderRadius: "12px",
    margin: "1rem auto",
    border: `1px solid ${theme.palette.primary.main}`,
    minHeight: "7vh",
    padding: "20px 10px",
    boxShadow: themeShadows().primary,
    "@media (max-width: 1100px)": {
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
  },
}));
export default useStyles;
