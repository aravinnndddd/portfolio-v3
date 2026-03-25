import React from "react";
import Hero from "../components/Hero";
import SelectedWork from "../components/SelectedWork";
import VideoScrub from "../components/VideoScrub";
import Skills from "../components/Skills";
import Journey from "../components/Journey";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <SelectedWork />
      <VideoScrub />
      <Skills />
      <Journey />
    </>
  );
};

export default Home;
