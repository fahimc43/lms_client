import React from "react";
import AboutCep from "./AboutCep";
import ChooseUs from "./ChooseUs";
import CountArea from "./CountArea";
import Hero from "./Hero";
import Offers from "./Offers";
import OshTopics from "./OshTopics";
import Programs from "./Programs";
import Upcoming from "./Upcoming";

function Home() {
  return (
    <>
      <Hero />
      <AboutCep />
      <Upcoming />
      <Programs />
      <ChooseUs />
      <CountArea />
      <Offers />
      <OshTopics />
    </>
  );
}

export default Home;
