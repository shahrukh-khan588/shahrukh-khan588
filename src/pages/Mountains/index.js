import React from "react"
import HeroSection from "../../components/mountains/Hero_Section"
import Story from "../../components/mountains/story"
import { makeStyles } from "@mui/styles"
import Gallery from "../../components/mountains/mountainGallery"
import Img from "../../assets/mountains/backg.jpg"

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: `url(${Img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}))
function index() {
  return (
    <div>
      <HeroSection />
      <Story />
      <Gallery />
    </div>
  )
}

export default index
