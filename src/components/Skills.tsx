import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Cpu, Database, Layout, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Skill {
  category: string;
  items: string[];
  Icon: LucideIcon;
}

const skills: Skill[] = [
  { category: "Frontend", items: ["React", "HTML5", "CSS3", "Tailwind"], Icon: Layout },
  { category: "Backend", items: ["Node.js", "REST API", "Express"], Icon: Cpu },
  { category: "Tools", items: ["VS Code", "GitHub", "Figma", "Vercel"], Icon: Zap },
  { category: "Database", items: ["Firebase", "Supabase", "SQL"], Icon: Database }
];

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-48 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-end mb-24">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase mb-4 block">Expertise</span>
            <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter">
              Skills &<br />Expertise
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              A comprehensive toolkit for modern web development, focused on performance and premium aesthetics.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-card glass-dark p-10 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-colors group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-500">
                <skill.Icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">{skill.category}</h3>
              <ul className="space-y-3">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-gray-400 font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
