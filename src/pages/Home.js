import React from "react";
import AboutCep from "../components/AboutCep";
import ChooseUs from "../components/ChooseUs";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Programs from "../components/Programs";
import Upcoming from "../components/Upcoming";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutCep />
      <Upcoming />
      <Programs />
      <ChooseUs />
    </>
  );
}

export default Home;
