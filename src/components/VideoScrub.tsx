import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const VideoScrub: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Pre-load video metadata to get duration
    video.load();
    
    const handleLoadedMetadata = () => {
      const duration = video.duration;
      
      gsap.context(() => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            if (video) {
              // Sync video time with scroll progress
              video.currentTime = self.progress * duration;
            }
          },
        });
      }, containerRef);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    
    // In case video metadata is already loaded
    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-black flex flex-col items-center justify-center py-[20vh]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            src="https://assets.mixkit.io/videos/preview/mixkit-top-view-of-a-keyboard-and-a-mouse-40011-large.mp4"
            className="w-full h-full object-cover opacity-80"
            muted
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="z-10 text-center px-6">
          <span className="text-accent font-bold tracking-widest uppercase mb-4 block">Process</span>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4">
            How I Build
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-medium">
            Merging code with creativity. My process is a blend of logic and design.
          </p>
        </div>
      </div>
      
      {/* Spacer to allow for scrolling and scrubbing */}
      <div className="h-[200vh] w-full" />
    </section>
  );
};

export default VideoScrub;
