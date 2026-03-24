import React, { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { Analytics } from "@vercel/analytics/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import VideoScrub from "./components/VideoScrub";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  useEffect(() => {
    // Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-background text-foreground selection:bg-accent/30 selection:text-white">
      <Analytics />
      <Navbar />
      <Hero />
      <SelectedWork />
      <VideoScrub />
      <Skills />
      <Journey />
      <Footer />
    </main>
  );
};

export default App;
