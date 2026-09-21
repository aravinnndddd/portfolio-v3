import { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FilterBar from "../components/FilterBar";
import Works from "../components/Works";
import AboutBento from "../components/AboutBento";
import CommunityEvents from "../components/CommunityEvents";
import ContactSection from "../components/ContactSection";
import Skills from "../components/Skills";
import JourneyTimeline from "../components/JourneyTimeline";
import ServicesList from "../components/ServicesList";
import Footer from "../components/Footer";
import { projectsData } from "../data";
import {
  addStructuredData,
  getPersonSchema,
  getWebSiteSchema,
  getItemListSchema,
  getBreadcrumbSchema,
  SITE_URL,
  updateMetaTags,
} from "../utils/seo";

interface HomePageProps {
  onViewAllWorks: () => void;
  onLetBuildClick: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export default function HomePage({
  onViewAllWorks,
  onLetBuildClick,
  onNavigateSection,
}: HomePageProps) {
  const [activeFilter, setActiveFilter] = useState("FEATURED WORK");
  const [showExtendedDetails, setShowExtendedDetails] = useState(false);

  useEffect(() => {
    updateMetaTags({
      title: "Aravind P - Portfolio",
      description:
        "Portfolio of Aravind P, Developer, Builder & Community Organizer at College of Engineering Perumon. Specializing in high-performance React, Next.js, and TypeScript applications.",
      url: SITE_URL,
      keywords: [
        "Aravind P",
        "aravinnndddd",
        "Aravind P portfolio",
        "Aravind P developer",
        "Frontend Developer",
        "UI Architect",
        "React Developer",
        "Next.js Portfolio",
        "TypeScript Developer",
        "GDG On Campus Lead",
        "College of Engineering Perumon",
        "MakeQR",
        "MakeItJoin",
        "cep-hall",
        "Pandaara Kothuk",
      ],
    });

    addStructuredData(getPersonSchema(), "person-schema");
    addStructuredData(getWebSiteSchema(), "website-schema");
    addStructuredData(getItemListSchema(projectsData), "projects-schema");
    addStructuredData(
      getBreadcrumbSchema([{ name: "Home", url: "/" }]),
      "breadcrumb-schema"
    );
  }, []);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    if (filter === "EVENTS") {
      const el = document.getElementById("experience");
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        window.scrollTo({ top: elementRect - bodyRect - offset, behavior: "smooth" });
      }
    } else if (filter === "FEATURED WORK" || filter === "OPEN SOURCE") {
      const el = document.getElementById("projects");
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        window.scrollTo({ top: elementRect - bodyRect - offset, behavior: "smooth" });
      }
    } else if (filter === "THOUGHTS") {
      const el = document.getElementById("about");
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        window.scrollTo({ top: elementRect - bodyRect - offset, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#ECEAE5] dark:bg-[#121212] text-black dark:text-white flex flex-col justify-between selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* Sticky Modular Header */}
      <Header
        onLetBuildClick={onLetBuildClick}
        onNavigateSection={(id) => {
          if (id === "skills" || id === "services" || id === "journey") {
            setShowExtendedDetails(true);
          }
          onNavigateSection(id);
        }}
      />

      {/* Main Grid Wrapper with 1px outer borders */}
      <main className="w-full max-w-[1440px] mx-auto border-l border-r border-black dark:border-neutral-800 flex-1">
        {/* [01] Hero Section */}
        <Hero onViewWorkClick={onViewAllWorks} />

        {/* Dynamic Editorial Brutalist Marquee Ticker */}
        <div className="w-full overflow-hidden whitespace-nowrap border-b border-black dark:border-neutral-800 bg-black text-white dark:bg-white dark:text-black py-2.5 font-mono text-[11px] uppercase tracking-widest font-bold select-none">
          <div className="animate-marquee gap-8 items-center">
            <span>BUILD WHAT MATTERS</span>
            <span>✦</span>
            <span>DEVELOPER &amp; COMMUNITY LEAD</span>
            <span>✦</span>
            <span>KERALA, INDIA [UTC +5:30]</span>
            <span>✦</span>
            <span>ORGANIZER @ GDG ON CAMPUS CEP</span>
            <span>✦</span>
            <span>OPEN FOR COLLABORATION</span>
            <span>✦</span>
            <span>BUILD WHAT MATTERS</span>
            <span>✦</span>
            <span>DEVELOPER &amp; COMMUNITY LEAD</span>
            <span>✦</span>
            <span>IEEE SB CE PERUMON TECHNICAL COORDINATOR</span>
            <span>✦</span>
            <span>KERALA, INDIA [UTC +5:30]</span>
            <span>✦</span>
            <span>ORGANIZER @ GDG ON CAMPUS CEP</span>
            <span>✦</span>
            <span>OPEN FOR COLLABORATION</span>
            <span>✦</span>
          </div>
        </div>

        {/* Sub-bar Filter Banner */}
        <FilterBar
          activeFilter={activeFilter}
          onFilterChange={handleFilterClick}
          onCtaClick={onLetBuildClick}
        />

        {/* [02] Featured Projects */}
        <Works
          projects={projectsData}
          onViewAllWorks={onViewAllWorks}
          showViewAllButton={true}
        />

        {/* [03] About Me Bento (Stats + Stack + Quote) */}
        <AboutBento
          onMoreAboutMeClick={() => {
            const next = !showExtendedDetails;
            setShowExtendedDetails(next);
            if (next) {
              setTimeout(() => {
                document.getElementById("extended-dossier")?.scrollIntoView({ behavior: "smooth" });
              }, 60);
            }
          }}
        />

        {/* [03.X] Extended Detail Dossier (Skills + Services + Journey in Swiss Brutalist Style) */}
        {showExtendedDetails && (
          <div
            id="extended-dossier"
            className="border-b border-black dark:border-neutral-800 bg-[#ECEAE5] dark:bg-[#121212] p-6 md:p-12 space-y-12"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-black dark:border-neutral-800 font-mono text-xs uppercase font-bold tracking-wider">
              <div className="flex items-center gap-2 text-neutral-800 dark:text-neutral-200">
                <span className="h-2 w-2 rounded-full bg-[#7C8D69]" />
                <span>[03.X] // MORE ABOUT ME — SKILLS, SERVICES &amp; EXPERIENCE</span>
              </div>
              <button
                onClick={() => setShowExtendedDetails(false)}
                className="px-3.5 py-1.5 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer"
              >
                CLOSE [×]
              </button>
            </div>

            <Skills />
            <ServicesList />
            <JourneyTimeline />

            <div className="pt-4 flex justify-center border-t border-black/15 dark:border-white/15">
              <button
                onClick={() => {
                  setShowExtendedDetails(false);
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#7C8D69] hover:text-black transition-colors cursor-pointer"
              >
                COLLAPSE DOSSIER &amp; RETURN TO OVERVIEW ↑
              </button>
            </div>
          </div>
        )}

        {/* [04] Community & Events */}
        <CommunityEvents />

        {/* [05] Let's Connect */}
        <ContactSection />
      </main>

      {/* Bottom Editorial Footer */}
      <Footer />
    </div>
  );
}
