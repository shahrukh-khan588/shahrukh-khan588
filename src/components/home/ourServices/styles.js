import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    margin: "auto",
    position: "relative",
    top: "-300px",
  },
  mainheading: {
    color: "#fff",
  },
  paper: {
    height: "200px",
    background: "#FFFFFF",
    boxShadow:
      "0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481) 1important",
    borderRadius: "36px",
    padding: "10px !important",
  },
  img: {
    width: "50px",
    height: "50px",
    margin: "auto",
  },
  heading: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600 !important",
    fontSize: " 20px !important",
    lineHeight: " 27px !important",
    textAlign: "center",
    color: " #5E6282",
    margin: "10px 0px !important",
  },
  subheading: {
    fontFamily: "Poppins",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "16px !important",
    lineHeight: "26px !important",
    textAlign: "center !important",
    color: "#5E6282",
  },
}))
export default useStyles
