import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import ProjectDetailModal from "./components/ProjectDetailModal";
import { Project } from "./types";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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

    const formCard = contactSection.querySelector(".bg-white");
    if (formCard) {
      formCard.classList.add("ring-2", "ring-black");
      setTimeout(() => {
        formCard.classList.remove("ring-2", "ring-black");
      }, 1500);
    }
  };

  const navigateToPath = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
    }

    setIsWorksPage(path === "/works");
    setSelectedProject(null);
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
    <>
      {isWorksPage ? (
        <WorksPage
          onSelectProject={setSelectedProject}
          onBackHome={() => navigateToPath("/")}
          onLetBuildClick={handleLetBuildScroll}
          onNavigateSection={handleNavigateSection}
        />
      ) : (
        <HomePage
          onSelectProject={setSelectedProject}
          onViewAllWorks={() => navigateToPath("/works")}
          onLetBuildClick={handleLetBuildScroll}
          onNavigateSection={handleNavigateSection}
        />
      )}

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
