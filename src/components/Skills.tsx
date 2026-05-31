import { motion } from "motion/react";
import {
  Code,
  Terminal,
  Database,
  Globe,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { skillsData } from "../data";

export default function Skills() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code className="h-5 w-5 text-black" />;
      case "terminal":
        return <Terminal className="h-5 w-5 text-black" />;
      case "database":
        return <Database className="h-5 w-5 text-black" />;
      case "globe":
        return <Globe className="h-5 w-5 text-black" />;
      default:
        return <Code className="h-5 w-5 text-black" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-20 md:py-28 text-black border-t border-neutral-200"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-4">
            <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-black rounded-full" />
              Technical Arsenal
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">
              Skills & <br />
              <span className="text-outline">Expertise</span>
            </h2>
            <p className="text-neutral-600 leading-relaxed max-w-md">
              I build polished product experiences with a practical stack that
              stays fast, maintainable, and easy to extend.
            </p>
          </div>

          <div className="rounded-sm border border-neutral-200 bg-white p-5 shadow-sm space-y-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-bold flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-black" />
              What I optimize for
            </p>
            <div className="space-y-3 text-sm text-neutral-700">
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-black shrink-0" />
                <span>
                  Type-safe frontend architecture and reusable components.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-black shrink-0" />
                <span>
                  Fast, responsive layouts with strong visual hierarchy.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-black shrink-0" />
                <span>
                  Interfaces that feel intentional, sharp, and dependable.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-sm border border-neutral-200 bg-white p-6 md:p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-neutral-100">
                <div className="h-10 w-10 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center">
                  {getCategoryIcon(category.icon)}
                </div>
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest font-bold text-neutral-800">
                    {category.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1">
                    {category.items.length} core areas
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm text-neutral-700"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
