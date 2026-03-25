import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Menu, X } from "lucide-react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar: React.FC = () => {
  const [active, setActive] = useState("Home");
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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

  // Update active nav based on current route
  useEffect(() => {
    if (location.pathname === "/") {
      setActive("Home");
    } else if (location.pathname === "/works") {
      setActive("Work");
    }
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Work", path: "/works" },
    { label: "Skills", path: "/#skills" },
    { label: "Journey", path: "/#journey" },
    { label: "Contact", path: "/#contact" },
  ];

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    if (path.includes("#")) {
      const target = document.getElementById(path.split("#")[1]);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-6 py-4",
        visible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-4 md:px-6 py-3 rounded-full border border-white/10 shadow-lg backdrop-blur-xl">
        <div className="text-xl font-black tracking-tighter text-white uppercase italic">
          Aravind P
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => handleNavClick(link.path)}
              className={cn(
                "text-xs font-bold uppercase tracking-widest transition-all hover:text-white",
                active === link.label ? "text-white" : "text-white/40",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            onClick={() => handleNavClick(link.path)}
            className={cn(
              "text-3xl font-black uppercase tracking-tighter transition-all",
              active === link.label ? "text-white scale-110" : "text-white/20",
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
