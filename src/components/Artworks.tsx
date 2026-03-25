import React from "react";

const artworkImages = [
  // "/artworks/IMG_20240928_190908242.jpg",
  "/artworks/IMG_20241003_222519752.webp",
  "/artworks/IMG_20241003_232222361.webp",
  "/artworks/IMG_20241003_233228129.webp",
  "/artworks/IMG_20241003_233232371~2.webp",
  "/artworks/IMG_20241003_233236246.webp",
  "/artworks/IMG_20241003_233239272.webp",
  "/artworks/IMG_20241003_233243288.webp",
  // "/artworks/IMG_20241003_233246644~2.jpg",
  // "/artworks/IMG_20241003_233250829.jpg",
  "/artworks/IMG_20241003_233257281.webp",
  "/artworks/IMG_20241003_233304736.webp",
  "/artworks/IMG_20241003_233314060.webp",
  "/artworks/IMG_20241003_233322262.webp",
];

const Artworks: React.FC = () => {
  const featuredImage = artworkImages[0];
  const sideImages = artworkImages.slice(1, 7);
  const stripImages = artworkImages.slice(7, 11);

  return (
    <section
      id="artworks"
      className="relative w-full bg-black py-24 md:py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-24">
        <div className="mb-12 md:mb-16 text-center">
          <span className="text-secondary text-[10px] md:text-xs tracking-[0.4em] uppercase mb-3 opacity-50 font-bold block">
            Visual Playground
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 leading-[0.9]">
            My
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px var(--accent)" }}
            >
              Artworks
            </span>
          </h2>
          <p className="text-base md:text-lg text-white/60 font-medium">
            Handpicked sketches and experiments from my visual diary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          <article className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 group min-h-88 md:min-h-136">
            <img
              src={featuredImage}
              alt="Featured artwork"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-[10px] tracking-[0.25em] font-bold text-white/60 uppercase mb-2">
                Featured Frame
              </p>
              <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight">
                The First Stroke Collection
              </h3>
            </div>
          </article>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6 auto-rows-[10rem] md:auto-rows-[12rem]">
            {sideImages.map((image, index) => (
              <article
                key={image}
                className={`relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 group ${index % 3 === 0 ? "row-span-2" : "row-span-1"}`}
              >
                <img
                  src={image}
                  alt={`Artwork ${index + 2}`}
                  className="w-full h-full object-cover opacity-75 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-80" />
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {stripImages.map((image, index) => (
            <article
              key={image}
              className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5 h-24 md:h-28"
            >
              <img
                src={image}
                alt={`Artwork strip ${index + 8}`}
                className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artworks;
