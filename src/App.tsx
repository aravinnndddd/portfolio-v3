import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import SmoothScroll from "./components/SmoothScroll";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  const [isWorksPage, setIsWorksPage] = useState(
    () => window.location.pathname === "/works",
  );
  const [pendingSectionScroll, setPendingSectionScroll] = useState<
    string | null
  >(null);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsWorksPage(window.location.pathname === "/works");
    };

    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  useEffect(() => {
    if (isWorksPage || !pendingSectionScroll) {
      return;
    }

    const sectionId = pendingSectionScroll;
    const offset = 80;

    requestAnimationFrame(() => {
      const element = document.getElementById(sectionId);
      if (!element) {
        return;
      }

      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setPendingSectionScroll(null);
    });
  }, [isWorksPage, pendingSectionScroll]);

  const handleLetBuildScroll = () => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) {
      return;
    }

    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = contactSection.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    const formCard = contactSection.querySelector(".bg-white, .dark\\:bg-neutral-900");
    if (formCard) {
      formCard.classList.add("ring-2", "ring-black", "dark:ring-white");
      setTimeout(() => {
        formCard.classList.remove("ring-2", "ring-black", "dark:ring-white");
      }, 1500);
    }
  };

  const navigateToPath = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
    }

    setIsWorksPage(path === "/works");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateSection = (sectionId: string) => {
    if (sectionId === "works") {
      navigateToPath("/works");
      return;
    }

    if (isWorksPage) {
      setPendingSectionScroll(sectionId);
      navigateToPath("/");
      return;
    }

    const element = document.getElementById(sectionId);
    if (!element) {
      return;
    }

    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  return (
    <ThemeProvider>
      <SmoothScroll>
        {isWorksPage ? (
          <WorksPage
            onBackHome={() => navigateToPath("/")}
            onLetBuildClick={handleLetBuildScroll}
            onNavigateSection={handleNavigateSection}
          />
        ) : (
          <HomePage
            onViewAllWorks={() => navigateToPath("/works")}
            onLetBuildClick={handleLetBuildScroll}
            onNavigateSection={handleNavigateSection}
          />
        )}
      </SmoothScroll>
    </ThemeProvider>
  );
}
