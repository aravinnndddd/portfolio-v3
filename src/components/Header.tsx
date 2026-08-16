import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "works",
        "skills",
        "services",
        "journey",
        "contact",
      ];
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

  const navLinks = [
    { label: "Works", id: "works" },
    { label: "Skills", id: "skills" },
    { label: "Services", id: "services" },
    { label: "Journey", id: "journey" },
  ];

  return (
    <header
      id="nav-header"
      className="fixed inset-x-0 top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 glass-nav transition-all duration-300"
    >
      {/* Top Reading Progress Bar */}
      <motion.div
        id="scroll-progress-indicator"
        className="h-0.75 bg-neutral-900 dark:bg-white origin-left"
        style={{ scaleX }}
      />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Custom Logo Brand */}
        <a href="/">
          <button
            id="logo-button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-lg font-extrabold tracking-tighter text-neutral-900 dark:text-white md:text-xl cursor-pointer"
          >
            ARAVIND P
          </button>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative py-1 font-sans text-sm font-medium tracking-wide transition-colors cursor-pointer duration-300 ${
                activeSection === link.id
                  ? "text-neutral-900 dark:text-white font-semibold"
                  : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.span
                  layoutId="indicator"
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-neutral-900 dark:bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer rounded-none"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              {theme === "dark" ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-neutral-700" />}
            </motion.div>
          </button>

          <small className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5 uppercase border border-neutral-200 dark:border-neutral-800">
            UTC+5:30
          </small>

          <button
            id="lets-build-cta"
            onClick={onLetBuildClick}
            className="group relative flex items-center justify-center gap-1 overflow-hidden bg-neutral-900 dark:bg-white px-6 py-2.5 font-mono text-xs uppercase tracking-widest text-white dark:text-neutral-900 transition-all cursor-pointer duration-300 hover:bg-neutral-800 dark:hover:bg-neutral-200 active:scale-95 rounded-none"
          >
            <span>Let's Build</span>
            <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Controls Trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 cursor-pointer rounded-none"
          >
            {theme === "dark" ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-neutral-700" />}
          </button>

          <button
            onClick={onLetBuildClick}
            className="bg-neutral-900 dark:bg-white px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white dark:text-neutral-900 rounded-none"
          >
            Build
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-neutral-900 dark:text-white cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          id="mobile-nav-panel"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute left-0 top-full w-full border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-6 py-6 shadow-md md:hidden"
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left font-sans text-base font-medium py-1 ${
                  activeSection === link.id
                    ? "text-neutral-900 dark:text-white font-semibold"
                    : "text-neutral-500 dark:text-neutral-400"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="h-px bg-neutral-200 dark:bg-neutral-800 my-2" />
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-neutral-400">
                AVAILABLE FOR JOBS Globally
              </span>
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white"
              >
                Get in Touch <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
