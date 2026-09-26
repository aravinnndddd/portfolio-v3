import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface HeaderProps {
  onLetBuildClick: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export default function Header({
  onLetBuildClick,
  onNavigateSection,
}: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "experience", "blog", "contact"];
      const viewportPoint = window.scrollY + 200;

      let current = "home";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const height = el.offsetHeight;
          if (viewportPoint >= top && viewportPoint < top + height) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);

    if (id === "contact") {
      onLetBuildClick();
      return;
    }

    if (onNavigateSection) {
      onNavigateSection(id);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { label: "HOME", id: "home", num: "01" },
    { label: "ABOUT", id: "about", num: "02" },
    { label: "PROJECTS", id: "projects", num: "03" },
    { label: "EXPERIENCE", id: "experience", num: "04" },
    { label: "BLOG", id: "blog", num: "05" },
    { label: "CONTACT", id: "contact", num: "06" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black dark:border-neutral-800 bg-[#ECEAE5] dark:bg-[#121212] transition-colors">
      <div className="w-full max-w-[1440px] mx-auto flex items-stretch justify-between">
        {/* Brand Section */}
        <div className="flex items-center border-r border-black dark:border-neutral-800">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="flex items-center px-4 md:px-6 py-3 md:py-4 gap-3 text-black dark:text-white group"
          >
            <span className="font-condensed text-2xl md:text-3xl font-extrabold tracking-tight uppercase leading-none">
              ARAVIND P
            </span>
          </a>

          <div className="flex flex-col justify-center px-3 sm:px-4 py-2 border-l border-black dark:border-neutral-800 text-[8px] sm:text-[9px] font-mono leading-tight tracking-wider text-black dark:text-neutral-300 uppercase">
            <span>STUDENT.</span>
            <span>BUILDER.</span>
            <span>COMMUNITY.</span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-stretch border-l border-black dark:border-neutral-800">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className={`px-5 py-3 font-mono text-xs uppercase tracking-wider font-semibold border-r border-black dark:border-neutral-800 transition-colors cursor-pointer flex items-center justify-center ${
                  isActive
                    ? "bg-[#7C8D69] text-black"
                    : "text-neutral-800 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA and Mobile Controls */}
        <div className="flex items-stretch">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="px-3 md:px-4 border-l border-black dark:border-neutral-800 flex items-center justify-center text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-neutral-800" />
            )}
          </button>

          {/* Desktop "LET'S TALK ↗" CTA */}
          <button
            onClick={onLetBuildClick}
            className="hidden md:flex items-center gap-1.5 px-6 py-4 bg-black text-white dark:bg-white dark:text-black font-mono text-xs uppercase tracking-widest font-bold border-l border-black dark:border-neutral-800 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            <span>LET&apos;S TALK</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
            className="flex lg:hidden items-center justify-center px-4 py-3 border-l border-black dark:border-neutral-800 text-black dark:text-white hover:bg-black/5 cursor-pointer"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Matches image 1 right exactly) */}
      {isOpen && (
        <div className="lg:hidden border-t border-black dark:border-neutral-800 bg-[#ECEAE5] dark:bg-[#121212] transition-all">
          <div className="flex flex-col">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center justify-between px-6 py-3.5 border-b border-black dark:border-neutral-800 font-mono text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer ${
                    isActive
                      ? "bg-[#7C8D69] text-black"
                      : "text-black dark:text-white hover:bg-black/5"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span className="text-[11px] text-black/60 dark:text-white/60">
                      {item.num}
                    </span>
                    <span className="text-sm font-extrabold">{item.label}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              );
            })}

            {/* Social Icons Strip & LET'S CONNECT */}
            <div className="flex items-stretch border-b border-black dark:border-neutral-800">
              <div className="flex-1 flex items-center gap-4 px-6 py-4">
                <a
                  href="https://github.com/aravinnndddd"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black dark:text-white hover:opacity-70"
                  aria-label="GitHub"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/aravind-p-832849331/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black dark:text-white hover:opacity-70"
                  aria-label="LinkedIn"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88M7.86 18.5V10.13H5.07V18.5h2.79z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/aravinnndddd"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black dark:text-white hover:opacity-70"
                  aria-label="Instagram"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/aravinnndddd"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black dark:text-white hover:opacity-70"
                  aria-label="X Twitter"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="mailto:aravindlernskills@gmail.com"
                  className="text-black dark:text-white hover:opacity-70"
                  aria-label="Email"
                >
                  <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
              </div>
              <button
                onClick={onLetBuildClick}
                className="px-4 py-3 border-l border-black dark:border-neutral-800 font-mono text-[10px] uppercase font-bold tracking-widest text-black dark:text-white hover:bg-black/5"
              >
                LET&apos;S CONNECT
              </button>
            </div>

            {/* Mobile Bottom Photo & Location Block */}
            <div className="grid grid-cols-2 border-b border-black dark:border-neutral-800">
              <div className="h-28 overflow-hidden border-r border-black dark:border-neutral-800">
                <img
                  src="/editorial/brutalist_arch.webp"
                  alt="Architecture"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="bg-[#7C8D69] p-3.5 flex flex-col justify-between text-black">
                <div className="font-mono text-[9px] uppercase tracking-wider font-bold leading-tight">
                  BASED IN<br />
                  KERALA, INDIA<br />
                  (UTC +5:30)
                </div>
                <div className="flex justify-end">
                  <ArrowUpRight className="h-4 w-4 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
