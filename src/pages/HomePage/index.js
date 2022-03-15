import React from "react";
import HeroPage from "../../components/home/Hero-page/index";
import OurServices from "../../components/home/ourServices/ServicesGrid";
import Cities from "../../components/home/cities";
import ThingsToDo from "../../components/home/thingsToDo/index";
import PopularMountains from "../../components/home/Grid";
import Climber from "../../components/home/Climbers";
import Team from "../../components/home/jion_team";

function Home() {
  return (
    <div>
      <HeroPage />
      <OurServices />
      <Cities />
      <ThingsToDo />
      <PopularMountains />
      <Team />
      <Climber />
    </div>
  );
}

export default Home;
