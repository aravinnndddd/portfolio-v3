import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projectsData } from "../data";
import { SITE_URL, updateMetaTags } from "../utils/seo";
import { ArrowUpRight, ArrowLeft, ExternalLink, Github, Terminal, Sparkles } from "lucide-react";

interface WorksPageProps {
  onBackHome: () => void;
  onLetBuildClick: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export default function WorksPage({
  onBackHome,
  onLetBuildClick,
  onNavigateSection,
}: WorksPageProps) {
  const [selectedTag, setSelectedTag] = useState<string>("ALL");

  useEffect(() => {
    updateMetaTags({
      title: "All Works | Aravind P - Portfolio Archive",
      description:
        "Full collection of web applications, open source experiments, and campus platforms engineered by Aravind P.",
      url: `${SITE_URL}/works`,
      keywords: [
        "Aravind P",
        "Projects",
        "React",
        "Next.js",
        "TypeScript",
        "MakeQR",
        "MakeItJoin",
        "cep-hall",
        "Pandaara Kothuk",
      ],
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const tags = ["ALL", "Next.js", "TypeScript", "React", "Web App", "Campus Tools"];

  const filteredProjects =
    selectedTag === "ALL"
      ? projectsData
      : projectsData.filter((p) =>
          p.tags.some((t) => t.toLowerCase().includes(selectedTag.toLowerCase()))
        );

  return (
    <div className="min-h-screen bg-[#ECEAE5] dark:bg-[#121212] text-black dark:text-white flex flex-col justify-between selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Header
        onLetBuildClick={onLetBuildClick}
        onNavigateSection={onNavigateSection}
      />

      <main className="w-full max-w-[1440px] mx-auto border-l border-r border-black dark:border-neutral-800 flex-1">
        {/* Top Control Strip */}
        <div className="flex flex-wrap items-center justify-between border-b border-black dark:border-neutral-800 px-6 md:px-12 py-3.5 bg-black/5 dark:bg-white/5 font-mono text-xs uppercase tracking-wider font-bold">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackHome}
              className="inline-flex items-center gap-2 px-3 py-1.5 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>RETURN TO HOME</span>
            </button>
            <span className="hidden sm:inline text-neutral-500">//</span>
            <span className="hidden sm:inline text-neutral-600 dark:text-neutral-400">
              ALL PROJECTS
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>STATUS: AVAILABLE</span>
            </div>
            <span className="text-neutral-500 hidden md:inline">|</span>
            <span className="text-neutral-600 dark:text-neutral-400 hidden md:inline">
              [{projectsData.length} PROJECTS]
            </span>
          </div>
        </div>

        {/* Hero Header Section */}
        <div className="p-6 md:p-12 border-b border-black dark:border-neutral-800 bg-[#ECEAE5] dark:bg-[#121212]">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-2 font-mono text-xs uppercase font-bold text-neutral-600 dark:text-neutral-400 mb-4 tracking-widest">
                <span>[02]</span>
                <span className="w-px h-3 bg-black dark:bg-white inline-block" />
                <span>PORTFOLIO &amp; WORKS</span>
              </div>

              <h1 className="font-condensed text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.84] text-black dark:text-white">
                SELECTED &amp;<br />
                FEATURED<br />
                PROJECTS.<span className="text-3xl lg:text-4xl font-light align-top ml-1">©</span>
              </h1>

              <p className="font-sans text-sm md:text-base text-neutral-700 dark:text-neutral-300 mt-6 max-w-xl leading-relaxed">
                A collection of web applications, student platforms, and developer tools built with
                React, Next.js, and TypeScript, focused on performance, clean design, and real-world use.
              </p>
            </div>

            {/* Quick Stats Column Right */}
            <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-4 pt-6 lg:pt-0 border-t lg:border-t-0 border-black/20 dark:border-neutral-800">
              <div className="p-4 border border-black dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70">
                <div className="font-condensed text-4xl font-black text-black dark:text-white leading-none">
                  0{projectsData.length}
                </div>
                <div className="font-mono text-[9px] uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-bold mt-1.5">
                  PROJECTS BUILT
                </div>
              </div>
              <div className="p-4 border border-black dark:border-neutral-800 bg-[#7C8D69] text-black">
                <div className="font-condensed text-4xl font-black leading-none">
                  3
                </div>
                <div className="font-mono text-[9px] uppercase tracking-wider font-bold mt-1.5">
                  COMMUNITIES
                </div>
              </div>
              <div className="p-4 border border-black dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70">
                <div className="font-condensed text-3xl font-black text-black dark:text-white leading-none uppercase">
                  ARTIST
                </div>
                <div className="font-mono text-[9px] uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-bold mt-1.5">
                  DRAWING &amp; ART
                </div>
              </div>
              <div className="p-4 border border-black dark:border-neutral-800 bg-black text-white dark:bg-white dark:text-black">
                <div className="font-condensed text-3xl font-black leading-none uppercase">
                  CREATIVE
                </div>
                <div className="font-mono text-[9px] uppercase tracking-wider font-bold mt-1.5">
                  UI &amp; CODE
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 mt-10 pt-6 border-t border-black/15 dark:border-white/15">
            <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-neutral-500 mr-2">
              FILTER BY:
            </span>
            {tags.map((tag) => {
              const count =
                tag === "ALL"
                  ? projectsData.length
                  : projectsData.filter((p) =>
                      p.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase()))
                    ).length;

              const isSelected = selectedTag === tag;

              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-wider font-bold border transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? "bg-[#7C8D69] text-black border-black dark:border-white shadow-xs scale-102"
                      : "bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-300 border-black dark:border-neutral-800 hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  <span>{tag}</span>
                  <span className="text-[10px] opacity-70">[{count}]</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-black dark:border-neutral-800">
          {filteredProjects.map((project, idx) => {
            const projectUrl = project.liveUrl || project.githubUrl || "#";
            const imgSrc = project.image || "/makeitjoin.png";

            return (
              <div
                key={project.id}
                className={`p-6 xl:p-8 flex flex-col justify-between border-b border-black dark:border-neutral-800 group hover:bg-black/5 dark:hover:bg-white/5 transition-all ${
                  idx % 3 !== 2 ? "xl:border-r" : ""
                } ${idx % 2 === 0 ? "md:border-r xl:border-r-0" : ""}`}
              >
                <div>
                  {/* Top Bar: Number + Status + Year */}
                  <div className="flex items-center justify-between font-mono text-xs font-bold text-neutral-600 dark:text-neutral-400 mb-4 pb-3 border-b border-black/10 dark:border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="text-black dark:text-white font-black">
                        [{project.number || `0${idx + 1}`}]
                      </span>
                      <span>//</span>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 uppercase">
                        {project.liveUrl ? "PRODUCTION" : "ACTIVE"}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-neutral-500">
                      {project.year || "2025"}
                    </span>
                  </div>

                  {/* Artwork Box with Hover Lift */}
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full aspect-16/10 overflow-hidden bg-[#161616] border border-black dark:border-neutral-700 mb-5 relative cursor-pointer"
                  >
                    <img
                      src={imgSrc}
                      alt={project.title}
                      className="w-full h-full object-cover object-top grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />

                    {/* Overlay badge */}
                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/80 text-white font-mono text-[9px] uppercase tracking-wider font-bold border border-white/20 backdrop-blur-xs">
                      {project.liveUrl ? "LIVE" : "CODE"}
                    </div>
                  </a>

                  {/* Title */}
                  <h3 className="font-condensed text-3xl xl:text-4xl font-black uppercase tracking-tight text-black dark:text-white group-hover:underline leading-none">
                    {project.title}
                  </h3>

                  {/* Tagline or Description */}
                  <p className="font-sans text-xs xl:text-sm text-neutral-600 dark:text-neutral-300 mt-2.5 leading-relaxed line-clamp-3">
                    {project.tagline ? (
                      <>
                        <span className="font-semibold text-black dark:text-white block mb-1">
                          {project.tagline}
                        </span>
                        <span>{project.description}</span>
                      </>
                    ) : (
                      project.description
                    )}
                  </p>

                  {/* Tech Tags as Micro Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 border border-black/20 dark:border-neutral-700 bg-white/70 dark:bg-black/50 font-mono text-[9px] uppercase tracking-wider text-black dark:text-white font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-6 mt-6 border-t border-black/15 dark:border-white/15 flex items-center justify-between gap-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-black text-white dark:bg-white dark:text-black font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#7C8D69] hover:text-black dark:hover:bg-[#7C8D69] dark:hover:text-black transition-colors cursor-pointer"
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <div className="font-mono text-xs text-neutral-500 uppercase">
                      IN DEVELOPMENT
                    </div>
                  )}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  ) : (
                    <a
                      href={projectUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 border border-black dark:border-white text-black dark:text-white hover:bg-[#7C8D69] hover:text-black transition-colors"
                      aria-label="Visit Site"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
