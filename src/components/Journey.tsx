import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const events = [
  {
    year: "2025 – Present",
    title: "Freelancer",
    subtitle: "Web Developer",
    description:
      "Building and delivering custom web solutions for clients. Specializing in React, TypeScript, and modern web technologies.",
  },
  {
    year: "2025 – 2026",
    title: "GDG On Campus Organizer",
    subtitle: "College of Engineering Perumon",
    description:
      "Leading the Google Developer Group community, organizing events, workshops, and fostering tech collaboration among students.",
  },
  {
    year: "2024 – Present",
    title: "B.Tech in Computer Science",
    subtitle: "College of Engineering Perumon",
    description:
      "Deepening my knowledge in algorithms, data structures, and advanced software engineering.",
  },
  {
    year: "2022 – 2024",
    title: "Higher Secondary – Science",
    subtitle: "GVHSS Kottankulangara, Chavara",
    description:
      "Focused on Physics, Chemistry, and Mathematics with a strong foundation in problem solving.",
  },
  {
    year: "2022",
    title: "SSLC",
    subtitle: "GVHSS Kottankulangara, Chavara",
    description: "Completed secondary education with top honors.",
  },
];

const Journey: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".journey-item", {
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="py-24 md:py-48 px-8 md:px-24 bg-black relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-secondary text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 block opacity-50">
            Trajectory
          </span>
          <h2 className="text-6xl md:text-[10rem] font-black text-white tracking-tighter mb-8 leading-none">
            My{" "}
            <span
              className="text-transparent font-black"
              style={{ WebkitTextStroke: "2px white" }}
            >
              Journey
            </span>
          </h2>
        </div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-0 sm:left-1/2 top-4 bottom-4 w-px bg-white/10 sm:-translate-x-1/2" />

          {events.map((event, idx) => (
            <div
              key={idx}
              className="journey-item relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 group"
            >
              {/* Dot */}
              <div className="absolute left-[-4.5px] sm:left-1/2 top-2 sm:top-1/2 w-2.5 h-2.5 rounded-full bg-accent sm:-translate-x-1/2 sm:-translate-y-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10 group-hover:scale-150 transition-transform duration-500" />

              {/* Content Left */}
              <div
                className={`w-full sm:w-[45%] pl-8 sm:pl-0 ${idx % 2 === 0 ? "sm:text-right" : "sm:order-2 sm:text-left"}`}
              >
                <span className="text-sm font-bold text-accent font-mono mb-2 block">
                  {event.year}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-lg text-gray-300 font-medium mb-2">
                  {event.subtitle}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed max-w-sm ml-auto mr-0">
                  {event.description}
                </p>
              </div>

              {/* Spacer for centering */}
              <div className="hidden sm:block w-[10%]" />

              {/* Content Right (Empty for alternating) */}
              <div className="hidden sm:block w-[45%]" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-accent/5 rounded-full blur-[200px] pointer-events-none" />
    </section>
  );
};

export default Journey;
