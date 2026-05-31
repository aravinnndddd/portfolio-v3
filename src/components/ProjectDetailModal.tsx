import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ExternalLink,
  Github,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Calendar,
  User,
  Briefcase,
} from "lucide-react";
import { Project } from "../types";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "engineering">(
    "overview",
  );

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 select-none">
        {/* Backdrop overlay closely representing the Snow aesthetic */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0c0d10]"
        />

        {/* Modal structure */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white border border-[#e5e5e5] ambient-shadow p-6 md:p-10 text-black no-scrollbar [border-radius:4px]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 p-2 text-[#5e5e5e] hover:text-black cursor-pointer bg-neutral-100 hover:bg-neutral-200 transition-colors rounded-full"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Subtitle Badge */}
          <span className="font-mono text-[10px] text-neutral-500 bg-neutral-100 px-2.5 py-1 border border-neutral-200 uppercase tracking-widest">
            {project.number}
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mt-4 text-black uppercase">
            {project.title}
          </h2>

          <p className="font-sans text-[#5e5e5e] text-base md:text-lg mt-3 font-light leading-relaxed">
            {project.description}
          </p>

          {/* Project Image */}
          <div className="mt-8 aspect-[21/9] w-full overflow-hidden border border-[#e5e5e5] bg-neutral-100 relative group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-101"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Tabs header */}
          <div className="flex border-b border-[#e5e5e5] mt-8 gap-6 font-mono text-xs uppercase tracking-wider">
            <button
              className={`pb-3 border-b-2 font-bold cursor-pointer transition-colors duration-200 ${"border-black text-black"}`}
            >
              Overview & Specs
            </button>
          </div>

          {/* Tab contents */}
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Specs list */}
              <div className="space-y-5 border-r border-dashed border-neutral-200 pr-4">
                <h4 className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-widest">
                  Project Specifications
                </h4>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-[#5e5e5e]">
                    <User className="h-4 w-4" />
                    <span className="font-semibold text-black">Client:</span>
                    <span className="ml-auto text-right text-xs">
                      {project.client}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#5e5e5e]">
                    <Calendar className="h-4 w-4" />
                    <span className="font-semibold text-black">Timeline:</span>
                    <span className="ml-auto text-right text-xs">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <h5 className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2.5">
                    TECH STACK DEFINED
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] bg-neutral-100 text-black px-2 py-0.5 border border-neutral-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Narrative overview */}
              <div className="col-span-2 space-y-6">
                <div>
                  <h4 className="font-display text-lg font-bold flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-purple-600" /> Executive
                    Summary
                  </h4>
                  <p className="text-sm md:text-base text-[#5e5e5e] leading-relaxed mt-2">
                    This system was meticulously built utilizing a custom clean
                    UI setup tailored around speed metrics and visual
                    refinement. Every aspect, from responsive grid allocations
                    to micro-actions, is handcrafted to maximize key interaction
                    patterns.
                  </p>
                </div>

                <div className="pt-4 flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-black text-white font-mono text-xs uppercase tracking-widest px-5 py-3 transition-colors hover:bg-neutral-800"
                    >
                      Launch Project <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-black text-black font-mono text-xs uppercase tracking-widest px-5 py-3 transition-colors hover:bg-neutral-50"
                    >
                      Inspect Code <Github className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
