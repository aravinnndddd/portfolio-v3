import React, { useRef } from "react";
import DomeGallery from "./DomeGallery";

const artworkImages = [
  "/artworks/IMG_20240928_190908242.jpg",
  "/artworks/IMG_20241003_222519752.jpg",
  "/artworks/IMG_20241003_232222361.jpg",
  "/artworks/IMG_20241003_233228129.jpg",
  "/artworks/IMG_20241003_233232371~2.jpg",
  "/artworks/IMG_20241003_233236246.jpg",
  "/artworks/IMG_20241003_233239272.jpg",
  "/artworks/IMG_20241003_233243288.jpg",
  "/artworks/IMG_20241003_233246644~2.jpg",
  "/artworks/IMG_20241003_233250829.jpg",
  "/artworks/IMG_20241003_233257281.jpg",
  "/artworks/IMG_20241003_233304736.jpg",
  "/artworks/IMG_20241003_233314060.jpg",
  "/artworks/IMG_20241003_233322262.jpg",
];

const VideoScrub: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-black flex flex-col items-center justify-center py-[20vh]"
    >
      {/* Heading */}
      <div className="relative z-10 text-center px-6 mb-4">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
          I like to{" "}
          <span
            className="text-transparent font-black"
            style={{ WebkitTextStroke: "2px var(--accent)" }}
          >
            draw
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 font-medium">
          Here are some of them
        </p>
      </div>

      {/* Interactive Dome Gallery */}
      <div className="relative w-full h-screen bg-black">
        <div className="w-full h-full">
          <DomeGallery
            images={artworkImages}
            fit={1}
            minRadius={600}
            segments={22}
            grayscale={false}
            imageBorderRadius="20px"
            overlayBlurColor="#000000"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoScrub;
