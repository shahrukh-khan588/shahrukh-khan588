import { makeStyles } from "@mui/styles"
import Side from "../../assets/thingstodo/back.svg"
const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: `url(${Side})`,
    width: "100%",
  },
  hero_wraper: {
    margin: "200px auto",
    width: "80%",
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
  span: {
    color: " #fcc465",
    fontSize: "16px",
    fontWeight: 800,
    marginBottom: "-36px",
    marginTop: "-13px",
    textTransform: "uppercase",
  },
  Gallery_img: {
    borderRadius: "10px",
    objectFit: "cover",
    height: "auto",
    maxWidth: "500px",
    cursor: "pointer",
  },
  img_content: {
    position: "absolute",
    padding: "16px",
    top: 0,
  },
}))

export default useStyles
