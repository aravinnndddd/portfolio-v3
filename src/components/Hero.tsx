import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, ArrowRight, MessageSquare } from 'lucide-react';
import DcStatus from './DcStatus';
import meImg from '../assets/me.png'; // Use the Blue/Purple edited version here

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial Entrance Animation
      const tl = gsap.timeline({ delay: 0.2 });
      tl.from(profileRef.current, { scale: 0.8, opacity: 0, duration: 1.5, ease: "expo.out" })
        .from(titleRef.current, { y: 50, opacity: 0, duration: 1 }, "-=1");

      // Interactive Mouse Movement
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        // Calculate offset percentages (-0.5 to 0.5)
        const xPos = (clientX / innerWidth) - 0.5;
        const yPos = (clientY / innerHeight) - 0.5;

        // 1. Tilt the Profile Image (3D Effect)
        gsap.to(profileRef.current, {
          rotationY: xPos * 20, // subtle 3D tilt
          rotationX: -yPos * 20,
          x: xPos * 30,
          y: yPos * 30,
          duration: 0.6,
          ease: "power2.out"
        });

        // 2. Parallax the Background Title (Opposite direction)
        gsap.to(titleRef.current, {
          x: -xPos * 100,
          y: -yPos * 50,
          duration: 0.8,
          ease: "power2.out"
        });

        // 3. Follower Glow

      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] cursor-none"
    >
      {/* Interactive Background Glow */}
      <div

        className="fixed top-0  left-0 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 blur-[120px] opacity-40 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(147,51,234,1) 0%, rgba(59,130,246,1) 100%)' }}
      />

      {/* Large Parallax Background Title */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        <h1
          ref={titleRef}
          className="text-[15vw] font-black text-transparent stroke-text tracking-tighter uppercase whitespace-nowrap opacity-20"
          style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.80)' }}
        >
          ARAVIND P
        </h1>
      </div>

      <div className="container mx-auto px-6 z-20 flex flex-col items-center">


        {/* Floating Labels around the image */}
        <div className="absolute top-1/4 left-1/4 hidden md:block animate-bounce-slow">
          <span className="glass-dark px-4 py-2 rounded-full text-[10px] text-blue-400 border border-blue-500/30">FRONTEND ARCHITECT</span>
        </div>
        <div className="absolute bottom-1/3 right-1/4 hidden md:block animate-bounce-slow" style={{ animationDelay: '1s' }}>
          <span className="glass-dark px-4 py-2 rounded-full text-[10px] text-purple-400 border border-purple-500/30">LET'S CONNECT!</span>
        </div>
      </div>

      {/* Bottom Interface */}
      <div className="absolute bottom-12 w-full px-12 flex justify-between items-end z-40">
        <div className="flex flex-col gap-2">
          <p className="text-white/40 text-[10px] tracking-[0.3em]">SCROLL TO EXPLORE</p>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent self-center" />
        </div>
        <DcStatus />
        <div className="text-right">
          <p className="text-white font-bold text-lg">DEVELOPER</p>
          <p className="text-white/40 text-[10px]">BASED IN KERALA</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;