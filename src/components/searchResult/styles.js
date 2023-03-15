import { makeStyles } from "@mui/styles";
import { themeShadows } from "../../theme/shadows";

const useStyles = makeStyles((theme) => ({
  hotelContainer: {
    justifyContent: "space-between",
    display: "flex",
    width: "95%",
    borderRadius: "12px",
    margin: "1rem auto",
    border: `1px solid ${theme.palette.primary.main}`,
    padding: "20px 10px",
    boxShadow: themeShadows().primary,
    // "@media (max-width: 1100px)": {
    //   width: "100%",
    // },

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
      maxWidth: "90%",
      height: "auto",
      background: "#fff",
      margin: "0 auto",
      color: "#333",
      boxShadow: themeShadows().primary,
      borderColor: theme.palette.primary.main,
      border: "1px solid",
      borderRadius: "16px",
      position: "relative",
      top: "-16%",
    },
    img: {
      maxWidth: "100%",
      height: "460px",
      objectFit: "cover",
      borderRadius: "16px",
    },
    titles: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "24px",
      lineHeight: "124.5%",
      color: "#5E6282",
    },
    Video: {
      widh: "100%",
      height: "100%",
    },
  },
}));
export default useStyles;
