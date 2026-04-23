import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Briefcase, Home, Mail, Menu, Route, Wrench, X } from "lucide-react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar: React.FC = () => {
  const [active, setActive] = useState("Home");
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (!isMenuOpen) {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isMenuOpen]);

  useEffect(() => {
    if (location.pathname === "/") {
      setActive("Home");
    } else if (location.pathname === "/works") {
      setActive("Works");
    }
  }, [location.pathname]);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, location.hash, closeMenu]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen, closeMenu]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Works", path: "/works" },
    { label: "Skills", path: "/#skills" },
    { label: "Journey", path: "/#journey" },
    { label: "Contact", path: "/#contact" },
  ];

  const mobileNavIcons: Record<string, React.ReactNode> = {
    Home: <Home size={18} />,
    Works: <Briefcase size={18} />,
    Skills: <Wrench size={18} />,
    Journey: <Route size={18} />,
    Contact: <Mail size={18} />,
  };

  const mobileNavDescriptions: Record<string, string> = {
    Home: "Back to landing",
    Works: "See selected projects",
    Skills: "Tools and strengths",
    Journey: "Experience timeline",
    Contact: "Ways to reach me",
  };

  const handleNavClick = (path: string, label: string) => {
    setActive(label);
    closeMenu();

    if (path.includes("#")) {
      const targetId = path.split("#")[1];
      window.setTimeout(() => {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 120);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-6 py-4",
        visible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between glass px-4 md:px-6 py-3 rounded-full border border-white/10 shadow-lg transition-all duration-300",
          isMenuOpen ? "backdrop-blur-sm" : "backdrop-blur-xl",
        )}
      >
        <div className="text-xl font-black tracking-tighter text-white uppercase italic">
          Aravind P
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => handleNavClick(link.path, link.label)}
              className={cn(
                "text-xs font-bold uppercase tracking-widest transition-all hover:text-white",
                active === link.label ? "text-white" : "text-white/40",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden flex items-center gap-2">
          <Link
            to="/works"
            onClick={() => handleNavClick("/works", "Works")}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] transition-all duration-300",
              location.pathname === "/works"
                ? "border-white bg-white text-black shadow-lg"
                : "border-white/20 bg-white/10 text-white hover:bg-white/20",
            )}
          >
            <Briefcase size={12} />
            Works
          </Link>

          <button
            type="button"
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] transition-all duration-300",
              isMenuOpen
                ? "border-white bg-white text-black shadow-[0_0_24px_rgba(255,255,255,0.25)]"
                : "border-white/20 bg-white/5 text-white hover:bg-white/15",
            )}
            onClick={isMenuOpen ? closeMenu : openMenu}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-500",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        <div
          className={cn(
            "relative mx-4 mt-24 rounded-3xl border border-white/20 bg-black/70 p-4 backdrop-blur-2xl transition-all duration-500",
            isMenuOpen ? "translate-y-0" : "-translate-y-3",
          )}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-white/50">
                Navigation
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/90">
                Quick access
              </p>
            </div>
            <button
              type="button"
              className="rounded-full border border-white/20 bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={16} />
            </button>
          </div>

          <div className="space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => handleNavClick(link.path, link.label)}
                className={cn(
                  "group flex items-center justify-between rounded-2xl border px-4 py-3.5 transition-all duration-300",
                  active === link.label
                    ? "border-white/70 bg-white/15 text-white shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
                    : "border-white/15 bg-white/5 text-white/80 hover:border-white/40 hover:bg-white/10",
                )}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <span className="inline-flex items-center gap-3">
                  <span
                    className={cn(
                      "rounded-xl p-2 transition-colors",
                      active === link.label ? "bg-white text-black" : "bg-white/10",
                    )}
                  >
                    {mobileNavIcons[link.label]}
                  </span>
                  <span>
                    <span className="block text-sm font-black uppercase tracking-[0.18em]">
                      {link.label}
                    </span>
                    <span className="block text-[10px] uppercase tracking-[0.18em] text-white/45">
                      {mobileNavDescriptions[link.label]}
                    </span>
                  </span>
                </span>
                <span className="text-xs uppercase tracking-[0.18em] text-white/40">
                  Go
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-4 text-center text-[10px] uppercase tracking-[0.32em] text-white/40">
            Explore. Build. Repeat.
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
