import React, { useEffect } from "react";
import Hero from "../components/Hero";
import SelectedWork from "../components/SelectedWork";
// import Artworks from "../components/Artworks";
import Skills from "../components/Skills";
import Journey from "../components/Journey";
import {
  updateMetaTags,
  addStructuredData,
  getPersonSchema,
} from "../lib/seoUtils";

const Home: React.FC = () => {
  useEffect(() => {
    // Update meta tags for the home page
    updateMetaTags({
      title: "Aravind P - Portfolio",
      description:
        "Web Developer and Google Developer Group (GDG) Campus Organizer at College of Engineering Perumon. Explore my projects and professional journey.",
      image: "https://aravind-p.me/og-image.png",
      url: "https://aravind-p.me/",
      type: "website",
      keywords: [
        "Aravind P",
        "aravinnndddd",
        "Aravind portfolio",
        "Web Developer",
        "GDG Campus Organizer",
        "College of Engineering Perumon",
        "React developer",
        "TypeScript developer",
        "https://aravind-p.me",
        "https://github.com/aravinnndddd",
        "https://www.linkedin.com/in/aravind-p-832849331/",
        "https://instagram.com/aravinnndddd",
      ],
    });

    // Add structured data
    addStructuredData(getPersonSchema());
  }, []);

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
