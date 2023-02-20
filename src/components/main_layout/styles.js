import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    color: "#fff",
    justifyContent: " space-between",
  },
  links: {
    display: "flex",
    justifyContent: " space-between",
    outline: "none",
    "& > *": {
      listStyle: "none",
      "&:hover": {
        borderBottom: "1px solid #fff",
        cursor: "pointer",
        color: theme.palette.secondary.main,
      },
    },
  },
  icon: {
    width: "20px",
    margin: "5px 0px 0px 7px",
    "&:hover": {
      cursor: "pointer",
      color: theme.palette.secondary.main,
    },
  },
  root: {
    background: "rgb(18,23,23)",
    // eslint-disable-next-line no-dupe-keys
    background:
      "linear-gradient(0deg, rgba(18,23,23,1) 0%, rgba(34,193,195,1) 100%)",
    width: "100%",
    height: "auto",
    marginTop: "190px",
    borderRadius: "25px 0px 0px 0px",
  },
  input: {
    outline: "none",
    padding: "10px",
    height: "40px",
    width: "70%",
    borderRadius: "25px",
    outLine: "none",
  },
  img: {
    maxWidth: "602px",
    position: "relative",
    top: "-64px",
    left: "31px",
  },
  ul: {
    "& > *": {
      listStyle: "none",
      margin: "10px 0px 10px 0px",
      fontSize: "14px",
      fontWeight: "300",
      "&:hover": {
        cursor: "pointer",
        color: theme.palette.secondary.main,
      },
    },
  },
  heading: {
    color: "#fff",
    margin: " 0px 0px 0px 39px",
  },
}));

export default useStyles;
