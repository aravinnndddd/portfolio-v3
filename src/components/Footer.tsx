export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full border-t border-black dark:border-neutral-800 bg-[#ECEAE5] dark:bg-[#121212] transition-colors">
      <div className="w-full max-w-[1440px] mx-auto px-6 py-6 md:py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-black dark:text-white">
        {/* Brand Name link */}
        <button
          onClick={scrollToTop}
          className="font-condensed text-xl font-black tracking-tight uppercase cursor-pointer hover:opacity-75"
        >
          ARAVIND P
        </button>

        {/* Center motto */}
        <div className="font-mono text-[11px] uppercase tracking-widest font-bold text-neutral-700 dark:text-neutral-300">
          BUILD &nbsp;/&nbsp; LEARN &nbsp;/&nbsp; SHARE &nbsp;/&nbsp; REPEAT
        </div>

        {/* Copyright info */}
        <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
          &copy; 2026 ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
