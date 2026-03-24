import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "makeQR",
    url: "https://www.makeqr.site/",
    description: "Create custom QR codes with colors, logos, and unique styles. Built for simple, reliable QR creation.",
    image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=2070&auto=format&fit=crop",
    video: "https://assets.mixkit.io/videos/preview/mixkit-opening-a-qr-code-on-a-smartphone-40291-large.mp4",
  },
  {
    title: "Kochi DevFest 2025",
    url: "https://www.devfestkochi.in/",
    description: "The official website for Google DevFest Kochi 2025, a premier developer conference.",
    image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070&auto=format&fit=crop",
    video: "https://assets.mixkit.io/videos/preview/mixkit-hands-of-a-man-working-on-a-laptop-40040-large.mp4",
  },
  {
    title: "Discord Echo Bot",
    url: "https://github.com/aravinnndddd/Discord-Echo",
    description: "Show your live Discord status, coding activity, and Spotify presence on the web with a self-hosted API.",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cc0d41?q=80&w=2074&auto=format&fit=crop",
    video: "https://assets.mixkit.io/videos/preview/mixkit-hacker-typing-code-on-a-laptop-40332-large.mp4",
  }
];

const SelectedWork: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pin = gsap.fromTo(
        sectionRef.current,
        { x: 0 },
        {
          x: "-200vw",
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            pin: true,
            scrub: 1,
            end: () => `+=${sectionRef.current!.offsetWidth}`,
            invalidateOnRefresh: true,
          },
        }
      );
      return () => pin.kill();
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="overflow-hidden bg-black">
      <div ref={triggerRef}>
        <div className="h-screen flex items-center mb-[10vh] px-6">
           <h2 className="text-6xl md:text-9xl font-bold text-white tracking-tighter">
             Selected<br />Work
           </h2>
        </div>
        
        <div 
          ref={sectionRef} 
          className="flex flex-row w-[300vw] h-screen relative"
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="w-screen h-full flex items-center justify-center p-6 md:p-24"
            >
              <div className="group relative w-full h-full max-w-6xl overflow-hidden rounded-[2rem] glass-dark border border-white/5 flex flex-col md:flex-row shadow-2xl transition-transform hover:scale-[1.01] duration-500">
                {/* Project Media */}
                <div className="relative w-full md:w-3/5 h-[40vh] md:h-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-20 transition-opacity duration-700"
                  />
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Project Info */}
                <div className="w-full md:w-2/5 p-8 md:p-16 flex flex-col justify-center">
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-400 mb-10 leading-relaxed font-medium">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform"
                    >
                      Visit Site <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Magnetic Hover Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-purple-600 rounded-[2rem] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
