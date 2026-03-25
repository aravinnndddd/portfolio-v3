import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Lenis from "lenis";
import { gsap } from "gsap";
import { Analytics } from "@vercel/analytics/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

const ScrollManager: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const reset = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    reset();
    const raf = requestAnimationFrame(reset);
    const timeoutId = window.setTimeout(reset, 50);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
};

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
    <Router>
      <main className="bg-background text-foreground selection:bg-accent/30 selection:text-white">
        <Analytics />
        <ScrollManager />

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
