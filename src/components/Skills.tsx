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
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".skills-header > *", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      // Cards Entrance
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xc = rect.width / 2;
    const yc = rect.height / 2;

    const dx = x - xc;
    const dy = y - yc;

    // Spotlight effect using CSS variables
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    // 3D Tilt using GSAP
    gsap.to(card, {
      rotationY: dx / 15,
      rotationX: -dy / 15,
      scale: 1.02,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;

    gsap.to(card, {
      rotationY: 0,
      rotationX: 0,
      scale: 1,
      duration: 0.6,
      ease: "power3.out"
    });
  };

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-48 px-8 md:px-24 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-end mb-24 skills-header">
          <div>
            <span className="text-secondary text-[10px] md:text-xs font-black tracking-[0.5em] uppercase mb-6 block opacity-50">Technical Arsenal</span>
            <h2 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter leading-[0.8]">
              Skills &<br /><span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Expertise</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xl text-white/40 leading-relaxed font-medium">
              A comprehensive toolkit for modern web development, engineered for high-performance and premium user experiences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div 
              key={idx} 
              ref={(el) => { cardsRef.current[idx] = el; }}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
              className="skill-card glass-dark p-10 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden perspective-1000"
            >
              {/* Dynamic Spotlight Glow */}
              <div 
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)`
                }}
              />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-10 border border-white/10 group-hover:scale-110 group-hover:bg-accent/10 group-hover:text-accent group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-700">
                  <skill.Icon size={28} />
                </div>
                <h3 className="text-2xl font-black text-white mb-6 tracking-tight uppercase italic">{skill.category}</h3>
                <ul className="space-y-4">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-white/40 font-bold text-sm tracking-wide flex items-center gap-3 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/20 group-hover/item:bg-accent group-hover/item:scale-150 transition-all duration-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
