import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Works from "../components/Works";
import Skills from "../components/Skills.tsx";
import ServicesList from "../components/ServicesList";
import JourneyTimeline from "../components/JourneyTimeline";
import ScrollReveal from "../components/ScrollReveal";

import Footer from "../components/Footer";
import { Project } from "../types";
import { projectsData } from "../data";
import ContactForm from "../components/ContactForm.tsx";
import {
  addStructuredData,
  getPersonSchema,
  SITE_URL,
  updateMetaTags,
} from "../utils/seo";

interface HomePageProps {
  onSelectProject: (project: Project) => void;
  onViewAllWorks: () => void;
  onLetBuildClick: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export default function HomePage({
  onSelectProject,
  onViewAllWorks,
  onLetBuildClick,
  onNavigateSection,
}: HomePageProps) {
  const featuredProjects = projectsData.slice(0, 3);

  useEffect(() => {
    updateMetaTags({
      title: "Aravind P | Frontend Developer",
      description:
        "I build fast, modern portfolio and product experiences with React, Next.js, Tailwind CSS, and TypeScript.",
      url: SITE_URL,
      keywords: [
        "Aravind P",
        "aravinnndddd",
        "Frontend Developer",
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Python",
        "Portfolio",
      ],
    });

    addStructuredData(getPersonSchema());
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-neutral-900 selection:text-white overflow-x-hidden antialiased">
      <div className="absolute top-0 left-0 w-full h-150 pointer-events-none bg-linear-to-b from-white/40 via-transparent to-transparent z-0" />

      <Header
        onLetBuildClick={onLetBuildClick}
        onNavigateSection={onNavigateSection}
      />

      <main className="grow w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-28 relative z-10">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>

        <ScrollReveal>
          <Works
            onSelectProject={onSelectProject}
            projects={featuredProjects}
            showViewAllButton={true}
            onViewAllWorks={onViewAllWorks}
            viewAllLabel="View All Works"
            showFooterCta={true}
            title="Selected"
            subtitle="Works"
          />
        </ScrollReveal>

        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        <ScrollReveal>
          <ServicesList />
        </ScrollReveal>
        <ScrollReveal>
          <JourneyTimeline />
        </ScrollReveal>
        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
