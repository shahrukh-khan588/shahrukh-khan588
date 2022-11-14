import React from "react";
import HeroPage from "../../components/home/Hero-page/index";
import OurServices from "../../components/home/ourServices/ServicesGrid";
import Cities from "../../components/home/cities";
import ThingsToDo from "../../components/home/thingsToDo/index";
import PopularMountains from "../../components/home/Grid";
import { Box, Typography } from "@mui/material";
import Climber from "../../components/home/Climbers";
import Team from "../../components/home/jion_team";
import circle from "../../assets/circle.png";
import { motion, useScroll, useTransform } from "framer-motion";

function Home() {
  const { scrollYProgress } = useScroll();
  // const [state] = useContext(ContactContextProvider);
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <div>
      <HeroPage />
      <OurServices />
      <Box position={"relative"} top="100" height={"0px"}>
        <motion.img
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 100,
            bottom: 10,
          }}
          src={circle}
          alt="bg"
          style={{ scale }}
        />
      </Box>
      <Cities />
      <ThingsToDo />
      <PopularMountains />
      <Team />
      <Climber />
    </div>
  );
}

export default Home;
