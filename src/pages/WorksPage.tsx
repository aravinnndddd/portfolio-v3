import { useEffect } from "react";
import Header from "../components/Header";
import Works from "../components/Works";
import Footer from "../components/Footer";
import { Project } from "../types";
import { projectsData } from "../data";
import { SITE_URL, updateMetaTags } from "../utils/seo";

interface WorksPageProps {
  onSelectProject: (project: Project) => void;
  onBackHome: () => void;
  onLetBuildClick: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export default function WorksPage({
  onSelectProject,
  onBackHome,
  onLetBuildClick,
  onNavigateSection,
}: WorksPageProps) {
  useEffect(() => {
    updateMetaTags({
      title: "Works | Aravind P",
      description:
        "Explore my selected projects, case studies, and product builds across modern frontend and full-stack work.",
      url: `${SITE_URL}/works`,
      keywords: [
        "Aravind P",
        "Works",
        "Projects",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Portfolio",
      ],
    });
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-neutral-900 selection:text-white overflow-x-hidden antialiased">
      <div className="absolute top-0 left-0 w-full h-100 pointer-events-none bg-linear-to-b from-white/40 via-transparent to-transparent z-0" />

      <Header
        onLetBuildClick={onLetBuildClick}
        onNavigateSection={onNavigateSection}
      />

      <main className="grow w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <section className=" pb-20">
          <Works
            onSelectProject={onSelectProject}
            projects={projectsData}
            title="All"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
