import React from "react";
import Hero from "../components/Hero";
import SelectedWork from "../components/SelectedWork";
// import Artworks from "../components/Artworks";
import Skills from "../components/Skills";
import Journey from "../components/Journey";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <SelectedWork />
      {/* <Artworks /> */}
      <Skills />
      <Journey />
    </>
  );
};

export default Home;
