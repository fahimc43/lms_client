import React from "react";
import AboutCep from "./AboutCep";
import ChooseUs from "./ChooseUs";
import CountArea from "./CountArea";
import Hero from "./Hero";
import Offers from "./Offers";
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
    </>
  );
}

export default Home;
