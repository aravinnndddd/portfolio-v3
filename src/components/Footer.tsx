import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full mt-12 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-colors">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand Name link */}
        <button
          onClick={scrollToTop}
          className="font-display text-sm font-extrabold tracking-widest text-neutral-900 dark:text-white uppercase cursor-pointer"
        >
          ARAVIND P
        </button>

        {/* Center social links */}
        <div className="flex gap-8 font-mono text-[11px] uppercase tracking-wider font-bold">
          <a
            href="https://github.com/aravinnndddd"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aravind-p-832849331/"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/aravinnndddd"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            instagram
          </a>
        </div>

        {/* Copyright info with custom Back to Top active button */}
        <div className="flex items-center gap-6">
          <span className="font-sans text-xs text-neutral-400 dark:text-neutral-500">
            © 2026 Aravind P. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="group p-2.5 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-white bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white transition-all rounded-full cursor-pointer"
            aria-label="Back to Top of Page"
          >
            <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
