import { ArrowUpRight, BookOpen } from "lucide-react";
import { blogPostsData, mediumProfileUrl } from "../data";

export default function BlogSection() {
  const posts = blogPostsData;
  const featuredPost = posts[0];

  return (
    <section
      id="blog"
      className="w-full border-b border-black dark:border-neutral-800 bg-[#ECEAE5] dark:bg-[#121212]"
    >
      {/* Mobile Blog Section */}
      <div className="block lg:hidden">
        <div className="flex items-center justify-between p-6 border-b border-black dark:border-neutral-800">
          <div>
            <span className="font-mono text-xs font-bold text-neutral-500 dark:text-neutral-400 block mb-1">
              [05]
            </span>
            <h2 className="font-condensed text-3xl font-black uppercase tracking-tight text-black dark:text-white">
              WRITING &amp; ESSAYS
            </h2>
          </div>
          <a
            href={mediumProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            aria-label="Medium Profile"
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Featured Post Card */}
        {featuredPost && (
          <div className="p-6 border-b border-black dark:border-neutral-800 flex flex-col gap-4">
            <div className="relative aspect-video w-full overflow-hidden border border-black dark:border-neutral-800 bg-black/5 dark:bg-white/5">
              <img
                src={featuredPost.coverImage || "/projects/makeitjoin.webp"}
                alt={featuredPost.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute top-2 left-2 bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 font-mono text-[9px] uppercase font-bold tracking-wider">
                FEATURED ESSAY
              </div>
            </div>

            <div className="flex items-center gap-3 font-mono text-[10px] uppercase font-bold text-neutral-600 dark:text-neutral-400">
              <span className="flex items-center gap-1 text-black dark:text-white">
                <BookOpen className="h-3 w-3" />
                {featuredPost.platform}
              </span>
              <span>•</span>
              <span>{featuredPost.publishedAt}</span>
              <span>•</span>
              <span>{featuredPost.readTime}</span>
            </div>

            <a
              href={featuredPost.url}
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <h3 className="font-condensed text-2xl font-black uppercase tracking-tight leading-snug text-black dark:text-white group-hover:underline">
                {featuredPost.title}
              </h3>
            </a>

            <p className="font-sans text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {featuredPost.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {featuredPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 font-mono text-[9px] uppercase tracking-wider text-neutral-700 dark:text-neutral-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={featuredPost.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between w-full px-4 py-3 bg-black text-white dark:bg-white dark:text-black font-mono text-xs uppercase font-bold tracking-wider hover:opacity-90 transition-opacity"
              >
                <span>READ ON MEDIUM</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}

        {/* Mobile View Profile Strip */}
        <div className="p-4 bg-black/5 dark:bg-white/5 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-neutral-700 dark:text-neutral-300">
            MEDIUM / @aravindlernskills
          </span>
          <a
            href={mediumProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[10px] uppercase font-bold tracking-wider text-black dark:text-white underline inline-flex items-center gap-1"
          >
            VIEW PROFILE <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* Desktop Blog Layout (12-col Grid) */}
      <div className="hidden lg:grid grid-cols-12 items-stretch min-h-[340px]">
        {/* Left Column: Title & Mission */}
        <div className="col-span-3 p-8 xl:p-10 border-r border-black dark:border-neutral-800 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-neutral-600 dark:text-neutral-400 block mb-4">
              [05]
            </span>
            <h2 className="font-condensed text-4xl xl:text-5xl font-black uppercase tracking-tight leading-[0.9] text-black dark:text-white mb-4">
              WRITING<br />&amp; ESSAYS
            </h2>
            <p className="font-sans text-xs xl:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-xs">
              Deconstructing software systems, community architecture, and design decisions. Notes and case studies published on Medium.
            </p>
          </div>

          <div className="pt-6">
            <a
              href={mediumProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase font-bold tracking-wider text-black dark:text-white hover:underline"
            >
              <span>FOLLOW ON MEDIUM</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Center Column: Featured Post Detail */}
        {featuredPost && (
          <div className="col-span-6 p-8 xl:p-10 border-r border-black dark:border-neutral-800 flex flex-col justify-between group">
            <div className="space-y-4">
              {/* Metadata Bar */}
              <div className="flex items-center justify-between border-b border-black/15 dark:border-white/15 pb-3">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase font-bold tracking-wider text-neutral-600 dark:text-neutral-400">
                  <span className="px-2 py-0.5 bg-black text-white dark:bg-white dark:text-black">
                    {featuredPost.platform}
                  </span>
                  <span>{featuredPost.publishedAt}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#7C8D69]">
                  LATEST DISPATCH
                </span>
              </div>

              {/* Title & Subtitle */}
              <a
                href={featuredPost.url}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <h3 className="font-condensed text-2xl xl:text-3xl font-black uppercase tracking-tight leading-tight text-black dark:text-white group-hover:underline">
                  {featuredPost.title}
                </h3>
              </a>

              <p className="font-sans text-xs xl:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {featuredPost.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {featuredPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 font-mono text-[10px] uppercase tracking-wider text-neutral-700 dark:text-neutral-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Read CTA Button */}
            <div className="pt-6 border-t border-black/15 dark:border-white/15 flex items-center justify-between">
              <a
                href={featuredPost.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white dark:bg-white dark:text-black font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#7C8D69] hover:text-black transition-colors"
              >
                <span>READ ARTICLE ON MEDIUM</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <span className="font-mono text-[10px] uppercase font-bold text-neutral-500 dark:text-neutral-400">
                12A4AB9BE7BA
              </span>
            </div>
          </div>
        )}

        {/* Right Column: Editorial Medium Callout */}
        <div className="col-span-3 bg-[#7C8D69] p-8 xl:p-10 flex flex-col justify-between text-black">
          <div>
            <div className="font-mono text-[10px] uppercase font-bold tracking-widest mb-3 opacity-80">
              MEDIUM PUBLICATION
            </div>
            <div className="font-condensed text-3xl xl:text-4xl font-black uppercase tracking-tight leading-[0.95] mb-4">
              STORIES<br />BEHIND<br />THE CODE.
            </div>
            <p className="font-sans text-xs leading-relaxed opacity-90">
              Technical breakdowns, product learnings, and honest retrospectives from shipping side-projects and community initiatives.
            </p>
          </div>

          <div className="pt-6 border-t border-black/20 space-y-3">
            <div className="font-mono text-[10px] uppercase font-bold tracking-wider">
              AUTHOR: ARAVIND P
            </div>
            <a
              href={mediumProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-black text-white font-mono text-xs uppercase font-bold tracking-wider hover:bg-neutral-800 transition-colors"
            >
              <span>VISIT PROFILE</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
