import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import DcStatus from './DcStatus';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial Entrance Animation
      const tl = gsap.timeline({ delay: 0.2 });
      tl.from(titleRef.current, { y: 50, opacity: 0, duration: 1.5, ease: "expo.out" });

      // Interactive Mouse Movement for Background Parallax
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const xPos = (clientX / innerWidth) - 0.5;
        const yPos = (clientY / innerHeight) - 0.5;

        gsap.to(titleRef.current, {
          x: -xPos * 60,
          y: -yPos * 30,
          duration: 0.8,
          ease: "power2.out"
        });
      };

      if (window.innerWidth > 768) {
        window.addEventListener('mousemove', handleMouseMove);
      }
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id='home'
      ref={heroRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Interactive Background Glow */}
      <div
        className="fixed top-0 left-0 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none z-0 blur-[150px] opacity-30 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(147,51,234,1) 0%, rgba(59,130,246,1) 100%)' }}
      />

      {/* Large Parallax Background Title - The Primary Focus */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <h1
          ref={titleRef}
          className="text-[15vw] font-black text-transparent stroke-text tracking-tighter uppercase whitespace-nowrap opacity-40 select-none"
          style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 1)' }}
        >
          ARAVIND P
        </h1>
      </div>
      <div className="absolute top-1/4 left-1/4 hidden md:block animate-bounce-slow">
        <span className="glass-dark px-4 py-2 rounded-full text-[10px] text-blue-400 border border-blue-500/30">FRONTEND ARCHITECT</span>
      </div>
      <div className="absolute bottom-1/3 right-1/4 hidden md:block animate-bounce-slow" style={{ animationDelay: '1s' }}>
        <span className="glass-dark px-4 py-2 rounded-full text-[10px] text-purple-400 border border-purple-500/30">LET'S CONNECT!</span>
      </div>


      {/* Bottom Interface - Responsive layout */}
      <div className="absolute bottom-10 w-full px-10 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-0 z-40">
        <div className="hidden md:flex flex-col gap-2">
          <p className="text-white/40 text-[10px] tracking-[0.4em] font-bold">SCROLL TO EXPLORE</p>
          <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent ml-4" />
        </div>

        <div className="scale-90 md:scale-100 origin-bottom-left transition-transform duration-500">
          <DcStatus />
        </div>

        <div className="text-left md:text-right">
          <p className="text-white font-black text-3xl md:text-5xl tracking-tighter leading-none mb-2">DEVELOPER</p>
          <p className="text-white/40 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">BASED IN KERALA, INDIA</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;