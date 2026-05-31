import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full mt-12 border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand Name link */}
        <button
          onClick={scrollToTop}
          className="font-display text-sm font-extrabold tracking-widest text-black uppercase cursor-pointer"
        >
          ARAVIND P
        </button>

        {/* Center social links */}
        <div className="flex gap-8 font-mono text-[11px] uppercase tracking-wider font-bold">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 hover:text-black transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 hover:text-black transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 hover:text-black transition-colors"
          >
            Twitter
          </a>
        </div>

        {/* Copyright info with custom Back to Top active button */}
        <div className="flex items-center gap-6">
          <span className="font-sans text-xs text-neutral-400">
            © 2026 Aravind P. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="group p-2.5 border border-neutral-200 hover:border-black bg-white hover:bg-neutral-50 text-black transition-all rounded-full cursor-pointer"
            aria-label="Back to Top of Page"
          >
            <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
