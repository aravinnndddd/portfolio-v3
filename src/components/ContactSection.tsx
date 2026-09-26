import React, { useState } from "react";
import { ArrowUpRight, Send, X } from "lucide-react";

const contactEmail = "aravindlernskills@gmail.com";

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailSubject = subject || `Project inquiry from ${name || "Portfolio Website"}`;
    const mailBody = [
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      "",
      message || "No message provided",
    ].join("\n");

    const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    window.location.href = mailtoUrl;
    setIsModalOpen(false);
  };

  return (
    <section
      id="contact"
      className="w-full border-b border-black dark:border-neutral-800 bg-[#ECEAE5] dark:bg-[#121212]"
    >
      {/* Mobile Layout */}
      <div className="block lg:hidden">
        <div
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-between p-6 border-b border-black dark:border-neutral-800 cursor-pointer"
        >
          <div>
            <span className="font-mono text-xs font-bold text-neutral-500 dark:text-neutral-400 block mb-1">
              [06]
            </span>
            <h2 className="font-condensed text-3xl font-black uppercase tracking-tight text-black dark:text-white">
              LET&apos;S WORK TOGETHER
            </h2>
          </div>
          <ArrowUpRight className="h-5 w-5 text-black dark:text-white" />
        </div>

        <div className="p-6 border-b border-black dark:border-neutral-800">
          <p className="font-sans text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
            Have an idea, opportunity, or just want to say hi? I&apos;m always open to interesting conversations.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#7C8D69] hover:bg-[#71815E] text-black font-mono text-xs uppercase tracking-wider font-bold border border-black dark:border-neutral-800 transition-colors cursor-pointer"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* Social Bar */}
        <div className="flex items-center justify-around p-4 border-b border-black dark:border-neutral-800">
          <a
            href="https://github.com/aravinnndddd"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-black dark:text-white hover:opacity-70"
            aria-label="GitHub"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://medium.com/@aravindlernskills"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-black dark:text-white hover:opacity-70"
            aria-label="Medium"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/aravind-p-832849331/"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-black dark:text-white hover:opacity-70"
            aria-label="LinkedIn"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88M7.86 18.5V10.13H5.07V18.5h2.79z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/aravinnndddd"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-black dark:text-white hover:opacity-70"
            aria-label="Instagram"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://x.com/aravinnndddd"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-black dark:text-white hover:opacity-70"
            aria-label="X Twitter"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href={`mailto:${contactEmail}`}
            className="p-2 text-black dark:text-white hover:opacity-70"
            aria-label="Email"
          >
            <svg className="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Desktop Layout (Matches Image 2 Desktop) */}
      <div className="hidden lg:grid grid-cols-12 items-stretch min-h-[160px]">
        {/* Left Title */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="col-span-2 p-8 border-r border-black dark:border-neutral-800 flex flex-col justify-between cursor-pointer group"
        >
          <span className="font-mono text-xs font-bold text-neutral-600 dark:text-neutral-400">
            [06]
          </span>
          <h2 className="font-condensed text-4xl xl:text-5xl font-black uppercase tracking-tight leading-[0.9] text-black dark:text-white">
            LET&apos;S<br />CONNECT
          </h2>
          <div className="pt-2">
            <ArrowUpRight className="h-5 w-5 text-black dark:text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>

        {/* Center Prompt & Button */}
        <div className="col-span-5 p-8 border-r border-black dark:border-neutral-800 flex flex-col justify-between">
          <p className="font-sans text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-md">
            Have an idea, opportunity, or just want to say hi?<br />
            I&apos;m always open to interesting conversations.
          </p>

          <div className="pt-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#7C8D69] hover:bg-[#71815E] text-black font-mono text-xs uppercase tracking-wider font-bold border border-black dark:border-neutral-800 transition-colors cursor-pointer"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Social Icons Strip */}
        <div className="col-span-3 p-8 border-r border-black dark:border-neutral-800 flex items-center justify-center gap-6">
          <a
            href="https://github.com/aravinnndddd"
            target="_blank"
            rel="noreferrer"
            className="text-black dark:text-white hover:opacity-60 transition-opacity"
            aria-label="GitHub"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://medium.com/@aravindlernskills"
            target="_blank"
            rel="noreferrer"
            className="text-black dark:text-white hover:opacity-60 transition-opacity"
            aria-label="Medium"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/aravind-p-832849331/"
            target="_blank"
            rel="noreferrer"
            className="text-black dark:text-white hover:opacity-60 transition-opacity"
            aria-label="LinkedIn"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88M7.86 18.5V10.13H5.07V18.5h2.79z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/aravinnndddd"
            target="_blank"
            rel="noreferrer"
            className="text-black dark:text-white hover:opacity-60 transition-opacity"
            aria-label="Instagram"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://x.com/aravinnndddd"
            target="_blank"
            rel="noreferrer"
            className="text-black dark:text-white hover:opacity-60 transition-opacity"
            aria-label="X Twitter"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href={`mailto:${contactEmail}`}
            className="text-black dark:text-white hover:opacity-60 transition-opacity"
            aria-label="Email"
          >
            <svg className="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>

        {/* Right Inverted Solid Black Card */}
        <div className="col-span-2 bg-black text-white p-8 flex flex-col justify-between">
          <div className="font-condensed text-2xl xl:text-3xl font-black uppercase tracking-tight leading-tight">
            SOMETHING<br />
            GREAT<br />
            TOGETHER.
          </div>
          <div className="w-8 h-0.5 bg-white mt-4" />
        </div>
      </div>

      {/* Interactive Modal keeping full Contact Form Functional */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-lg bg-[#ECEAE5] dark:bg-[#161616] border-2 border-black dark:border-white p-6 sm:p-8 shadow-2xl text-black dark:text-white">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-1 hover:bg-black/10 dark:hover:bg-white/10"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6">
              <span className="font-mono text-xs uppercase font-bold text-neutral-600 dark:text-neutral-400">
                [05] CONTACT
              </span>
              <h3 className="font-condensed text-3xl font-black uppercase tracking-tight mt-1">
                SEND A MESSAGE
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block uppercase font-bold mb-1">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full border border-black dark:border-neutral-700 bg-white dark:bg-black px-3 py-2.5 outline-none font-sans text-sm"
                />
              </div>

              <div>
                <label className="block uppercase font-bold mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full border border-black dark:border-neutral-700 bg-white dark:bg-black px-3 py-2.5 outline-none font-sans text-sm"
                />
              </div>

              <div>
                <label className="block uppercase font-bold mb-1">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Project inquiry"
                  className="w-full border border-black dark:border-neutral-700 bg-white dark:bg-black px-3 py-2.5 outline-none font-sans text-sm"
                />
              </div>

              <div>
                <label className="block uppercase font-bold mb-1">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Tell me a little about your project..."
                  className="w-full border border-black dark:border-neutral-700 bg-white dark:bg-black px-3 py-2.5 outline-none font-sans text-sm resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-mono text-xs uppercase font-bold tracking-wider hover:opacity-90 cursor-pointer"
                >
                  <span>SEND VIA EMAIL</span>
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
