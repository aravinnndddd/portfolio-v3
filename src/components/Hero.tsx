import { motion } from 'motion/react';
import { ArrowDown, CornerDownRight, MapPin, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToWorks = () => {
    const element = document.getElementById('works');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative flex min-h-[85vh] flex-col justify-center py-16 md:py-24">
      {/* Decorative architectural background line */}
      <div className="absolute right-10 top-0 hidden h-full w-[1px] bg-gradient-to-b from-[#e5e5e5] via-[#efefef] to-transparent md:block" />

      {/* Available Indicator */}
      <motion.div 
        id="availability-badge"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 inline-flex items-center gap-2.5 bg-neutral-100 border border-[#e5e5e5] px-3.5 py-1.5 w-fit hover:bg-neutral-200 transition-colors duration-300 [border-radius:9999px]"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-neutral-700">
          Available for Projects
        </span>
      </motion.div>

      {/* Hero Headings with stagger animation */}
      <div className="relative">
        <motion.p 
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.2em' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-3 flex items-center gap-2 font-medium"
        >
          <Sparkles className="h-3 w-3 text-neutral-400" />
          Frontend Architect
        </motion.p>

        {/* Brand Display Header */}
        <h1 className="font-display leading-none tracking-tight mb-8">
          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            className="block text-5xl sm:text-7xl md:text-[110px] font-extrabold text-black"
          >
            ARAVIND P
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.35, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="block text-5xl sm:text-7xl md:text-[110px] font-extrabold text-outline select-none"
          >
            DEVELOPER
          </motion.span>
        </h1>

        {/* Footer text of Hero with responsive layouts */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mt-12 pt-6 border-t border-dashed border-[#e5e5e5]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-lg space-y-4"
          >
            <p className="font-sans text-base md:text-lg text-[#5e5e5e] leading-relaxed">
              Crafting high-performance digital experiences with a focus on <strong className="text-black font-semibold">aesthetic restraint</strong> and <strong className="text-black font-semibold">technical precision</strong>. Specializing in highly interactive React applications.
            </p>
            <div className="flex items-center gap-2 text-neutral-600 font-mono text-xs">
              <MapPin className="h-3.5 w-3.5" />
              <span>Based in Kerala, India</span>
              <span className="text-neutral-300">|</span>
              <CornerDownRight className="h-3.5 w-3.5" />
              <span>Remote Worldwide</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-2 items-start md:items-end font-mono"
          >
            <button
              onClick={scrollToWorks}
              className="group flex flex-col items-start md:items-end gap-2 text-left md:text-right cursor-pointer"
            >
              <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase group-hover:text-black transition-colors duration-300">
                SCROLL TO EXPLORE
              </span>
              <div className="flex h-10 w-10 items-center justify-center border border-[#e5e5e5] bg-white text-black transition-transform duration-300 group-hover:translate-y-1 hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-full">
                <ArrowDown className="h-4 w-4 animate-bounce" />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
