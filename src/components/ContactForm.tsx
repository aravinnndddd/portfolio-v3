import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Github, Instagram, Send } from "lucide-react";

const contactEmail = "aravindlernskills@gmail.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailSubject =
      subject || `Project inquiry from ${name || "my website"}`;
    const mailBody = [
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      "",
      message || "No message provided",
    ].join("\n");

    const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 text-black border-t border-neutral-200"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-4">
            <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-black rounded-full" />
              Contact
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">
              Let&apos;s talk about <br />
              <span className="text-outline">your next project.</span>
            </h2>
            <p className="text-neutral-600 leading-relaxed max-w-md">
              Send a quick message and I&apos;ll get back with a clear reply.
              Keep it simple: your name, email, and a short summary of what you
              need.
            </p>
          </div>

          <div className="space-y-3 text-sm text-neutral-700">
            <a
              href={`mailto:${contactEmail}`}
              className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white px-4 py-3 hover:border-black transition-colors"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-50 border border-neutral-200">
                <Mail className="h-4 w-4 text-black" />
              </span>
              <span>
                <span className="block font-semibold text-black">Email</span>
                <span className="block text-neutral-500">{contactEmail}</span>
              </span>
            </a>

            <a
              href="https://github.com/aravinnndddd"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white px-4 py-3 hover:border-black transition-colors"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-50 border border-neutral-200">
                <Github className="h-4 w-4 text-black" />
              </span>
              <span>
                <span className="block font-semibold text-black">GitHub</span>
                <span className="block text-neutral-500">
                  github.com/aravinnndddd
                </span>
              </span>
            </a>

            <a
              href="https://instagram.com/aravinnndddd"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white px-4 py-3 hover:border-black transition-colors"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-50 border border-neutral-200">
                <Instagram className="h-4 w-4 text-black" />
              </span>
              <span>
                <span className="block font-semibold text-black">
                  Instagram
                </span>
                <span className="block text-neutral-500">@aravinnndddd</span>
              </span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg border border-neutral-200 bg-white p-6 md:p-10 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-black placeholder:text-neutral-400 outline-none transition-colors focus:border-black"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-black placeholder:text-neutral-400 outline-none transition-colors focus:border-black"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium text-neutral-700"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Project inquiry"
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-black placeholder:text-neutral-400 outline-none transition-colors focus:border-black"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-neutral-700"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me a little about your project, timeline, and goals."
                  rows={7}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-black placeholder:text-neutral-400 outline-none transition-colors focus:border-black resize-none"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-neutral-500">
                  This will open your email app with the message prefilled.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
