import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, MapPin, Sparkles, Code2, Globe } from 'lucide-react';

export default function Hero() {
  const scrollToWorks = () => {
    const element = document.getElementById('works');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative flex min-h-[75vh] flex-col justify-center py-10 md:py-16">
      {/* Subtle top index bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200/80 pb-4"
      >
        <div id="availability-badge" className="inline-flex items-center gap-2.5 bg-neutral-100 border border-neutral-200/80 px-3.5 py-1.5 rounded-full hover:bg-neutral-200/60 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-neutral-700">
            Available for Projects
          </span>
        </div>

        <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 flex items-center gap-2 font-medium">
          <span>01 // ARCHITECTURE & UI</span>
        </div>
      </motion.div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
        {/* Left Column: Hero Content & Main Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 flex flex-col justify-between"
        >
          <div>
            {/* <div className="flex items-center gap-2 text-neutral-500 font-mono text-xs uppercase tracking-widest mb-3">
              <Sparkles className="h-3.5 w-3.5 text-neutral-400" />
              <span>Frontend Developer & UI Architect</span>
            </div> */}

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.05] mb-6">
              Aravind P<span className="text-neutral-400 font-light">.</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl mb-8">
              Crafting high-performance web applications with a focus on <strong className="text-neutral-900 font-semibold">aesthetic restraint</strong>, speed, and <strong className="text-neutral-900 font-semibold">technical precision</strong>.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={scrollToWorks}
              className="inline-flex items-center gap-2 bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider px-5 py-3 rounded-full hover:bg-neutral-800 transition-all duration-200 shadow-xs cursor-pointer group"
            >
              <span>Explore Works</span>
              <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-white text-neutral-900 border border-neutral-300 font-mono text-xs uppercase tracking-wider px-5 py-3 rounded-full hover:bg-neutral-100 transition-all duration-200 cursor-pointer group"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-neutral-500" />
            </button>
          </div>
        </motion.div>

        {/* Right Column: Architectural Quick Specs Panel */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="lg:col-span-5 border border-neutral-200/80 bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col justify-between gap-6"
        >
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">QUICK SPECS</span>
              <Code2 className="h-4 w-4 text-neutral-400" />
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-start justify-between gap-4">
                <span className="text-neutral-400">LOCATION</span>
                <span className="text-neutral-800 text-right font-medium flex items-center gap-1.5">
                  <MapPin className="h-3 w-3 text-neutral-400" /> Kerala, IN (UTC+5:30)
                </span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <span className="text-neutral-400">CORE STACK</span>
                <span className="text-neutral-800 text-right font-medium">React • Next.js • TypeScript</span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <span className="text-neutral-400">FOCUS</span>
                <span className="text-neutral-800 text-right font-medium">Interactive Web Apps & UI Systems</span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <span className="text-neutral-400">EXPERIENCE</span>
                <span className="text-neutral-800 text-right font-medium">GDGoC Lead {'('}25-26{")"} • Freelancer</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-neutral-500 font-mono text-[11px]">
              <Globe className="h-3.5 w-3.5 text-neutral-400" />
              <span>Remote Worldwide</span>
            </div>

            <button
              onClick={scrollToWorks}
              className="group flex items-center gap-1.5 text-neutral-400 hover:text-neutral-900 transition-colors font-mono text-[11px] uppercase tracking-wider cursor-pointer"
            >
              <span>Scroll</span>
              <ArrowDown className="h-3 w-3 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
