import { makeStyles } from "@mui/styles";
import { themeShadows } from "../../../theme/shadows";
const useStyles = makeStyles((theme) => ({
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
  Carousel: {
    position: "absolute",
  },
}));
export default useStyles;
