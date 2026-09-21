import { ArrowUpRight } from "lucide-react";
import { servicesData } from "../data";

export default function ServicesList() {
  const customServices = [
    {
      title: "Portfolio Websites",
      description:
        "Custom, high-speed portfolio websites for developers, designers, and professionals looking to stand out online.",
      features: [
        "Unique modern layouts",
        "Smooth micro-animations",
        "Mobile & desktop responsive",
        "Search engine optimized (SEO)",
      ],
    },
    {
      title: "Landing Pages",
      description:
        "High-converting landing pages designed to showcase products, generate leads, and explain complex ideas clearly.",
      features: [
        "High conversion layout",
        "Fast page load times",
        "Contact form validation",
        "Google Analytics setup",
      ],
    },
    {
      title: "Web Applications",
      description:
        "Full-stack React and Next.js applications featuring interactive dashboards, user logins, and cloud databases.",
      features: [
        "React & Next.js architecture",
        "REST API integration",
        "Secure database connections",
        "User authentication",
      ],
    },
    {
      title: "UI & Frontend Development",
      description:
        "Turning design files (Figma / Adobe XD) into pixel-perfect, accessible, and clean frontend code.",
      features: [
        "Figma to clean code",
        "Tailwind CSS styling",
        "Cross-browser testing",
        "Reusable components",
      ],
    },
  ];

  return (
    <div id="services" className="w-full border border-black dark:border-neutral-800 bg-[#ECEAE5] dark:bg-[#121212]">
      {/* Header Banner */}
      <div className="p-6 md:p-10 border-b border-black dark:border-neutral-800">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-2 font-mono text-xs uppercase font-bold text-neutral-600 dark:text-neutral-400 mb-3 tracking-widest">
              <span>[03.2]</span>
              <span className="w-px h-3 bg-black dark:bg-white inline-block" />
              <span>WHAT I DO</span>
            </div>

            <h2 className="font-condensed text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[0.88] text-black dark:text-white">
              SERVICES &amp;<br />
              SOLUTIONS.
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <p className="font-sans text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Professional web development services to help you design, build, and launch fast,
              clean, and modern digital products.
            </p>
          </div>
        </div>
      </div>

      {/* 4-Column Modular Swiss Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-black dark:border-neutral-800">
        {customServices.map((service, index) => {
          const isLastCol = index === customServices.length - 1;
          const isRightCol2 = index % 2 === 1;

          return (
            <div
              key={service.title}
              className={`p-6 xl:p-8 flex flex-col justify-between border-b lg:border-b-0 border-black dark:border-neutral-800 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group ${
                !isLastCol ? "lg:border-r" : ""
              } ${!isRightCol2 ? "md:border-r lg:border-r-0" : ""}`}
            >
              <div>
                {/* Index + Tag */}
                <div className="flex items-center justify-between font-mono text-xs font-bold text-neutral-600 dark:text-neutral-400 mb-6 pb-3 border-b border-black/15 dark:border-white/15">
                  <span className="text-black dark:text-white font-extrabold text-sm">
                    0{index + 1}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider">
                    SERVICE // AVAILABLE
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-condensed text-2xl xl:text-3xl font-black uppercase tracking-tight text-black dark:text-white leading-none mb-3 group-hover:underline">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 pt-4 border-t border-black/10 dark:border-white/10 font-mono text-[11px] text-neutral-800 dark:text-neutral-200 font-semibold">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2">
                      <span className="text-neutral-400">✦</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-6 mt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                  READY TO BUILD
                </span>
                <div className="flex items-center justify-center h-7 w-7 border border-transparent group-hover:border-black dark:group-hover:border-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
