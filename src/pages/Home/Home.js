import React from "react";
import AboutCep from "./AboutCep";
import ChooseUs from "./ChooseUs";
import Hero from "./Hero";
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
    </>
  );
}

export default Home;
