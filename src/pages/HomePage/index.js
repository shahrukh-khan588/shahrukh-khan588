import React from "react";
import HeroPage from "../../components/home/Hero-page/index";
import OurServices from "../../components/home/ourServices/ServicesGrid";
import Cities from "../../components/home/cities";
import ThingsToDo from "../../components/home/thingsToDo/index";
import PopularMountains from "../../components/home/Grid";
import { Box, Typography } from "@mui/material";
import Climber from "../../components/home/Climbers";
// import Team from "../../components/home/jion_team";
import circle from "../../assets/circle.png";

function Home() {
  // const [state] = useContext(ContactContextProvider);
  // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <div>
      <HeroPage />
      <OurServices />
      <Box position={"relative"} top="100" height={"0px"}>
        <img src={circle} alt="bg" />
      </Box>
      <Cities />
      <ThingsToDo />
      <PopularMountains />
      {/* <Team /> */}
      <Climber />
    </div>
  );
}

export default Home;
