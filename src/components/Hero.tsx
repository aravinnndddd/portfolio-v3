import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, ArrowRight } from 'lucide-react';
import DcStatus from './DcStatus';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero reveal
      gsap.from(".hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5
      });

      // Parallax effect on video
      gsap.to(videoRef.current, {
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="home"
      ref={heroRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black z-10" />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 scale-110"
        >
          <source src="https://assets.mixkit.io/videos/preview/mixkit-abstract-modern-lines-and-dots-in-blue-23261-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-6 z-20 hero-content flex flex-col items-center text-center">
        <h2 className="text-xl md:text-2xl font-medium text-white/60 mb-4 tracking-wider">
          Hi, I’m Aravind
        </h2>
        
        <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tighter mb-8 leading-[0.9]">
          Aravind P
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
          A developer who loves coding, drawing, gaming, and learning new skills. 
          Currently diving deep into web development. Let’s build something amazing!
        </p>

        <div className="w-full mb-12">
           <DcStatus />
        </div>

        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <a 
            href="#work"
            className="group relative px-8 py-4 bg-white text-black rounded-full font-bold overflow-hidden transition-all hover:pr-12"
          >
            <span className="relative z-10">View My Work</span>
            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={20} />
          </a>
          
          <a 
            href="#contact"
            className="px-8 py-4 border border-white/20 text-white rounded-full font-bold hover:bg-white/5 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <ChevronDown size={32} className="text-white" />
      </div>

      {/* Subtle Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px]" />
    </section>
  );
};

export default Hero;
