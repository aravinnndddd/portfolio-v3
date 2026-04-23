import React, { useState } from "react";
import { Github, Linkedin, Mail, Heart, Send } from "lucide-react";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Footer: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (status.type !== "idle") {
      setStatus({ type: "idle", message: "" });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus({
        type: "error",
        message: "Please fill in name, email, and message.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    const subject = trimmedSubject || `Portfolio message from ${trimmedName}`;

    try {
      setIsSubmitting(true);

      const response = await fetch(
        "https://formsubmit.co/ajax/aravindlernskills@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: trimmedName,
            email: trimmedEmail,
            subject,
            message: trimmedMessage,
          }),
        },
      );

      const result = (await response.json().catch(() => ({}))) as {
        success?: string;
        message?: string;
      };

      if (!response.ok || result.success !== "true") {
        throw new Error(result.message || "Unable to send message right now.");
      }

      setFormData(initialFormData);
      setStatus({
        type: "success",
        message: "Message sent successfully.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Failed to send. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      id="contact"
      className="py-16 md:py-32 px-8 md:px-24 bg-black border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <span className="text-secondary text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-8 block opacity-50">
          Get In Touch
        </span>
        <h2 className="text-5xl md:text-[10rem] font-black text-white tracking-tighter mb-10 md:mb-16 text-center leading-[0.8]">
          Let's build
          <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "2px white" }}
          >
            together.
          </span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl rounded-3xl border border-white/15 bg-white/5 p-5 md:p-8 backdrop-blur-xl mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.22em] text-white/55 font-bold">
                Name
              </span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-white/40"
                required
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.22em] text-white/55 font-bold">
                Email
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-white/40"
                required
              />
            </label>
          </div>

          <label className="mt-4 flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-[0.22em] text-white/55 font-bold">
              Subject
            </span>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What should I call this message?"
              className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-white/40"
            />
          </label>

          <label className="mt-4 flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-[0.22em] text-white/55 font-bold">
              Message
            </span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your idea or project"
              rows={6}
              className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-white/40 resize-y"
              required
            />
          </label>

          <div className="mt-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white text-black px-5 py-2.5 text-xs font-black uppercase tracking-[0.2em] transition-transform hover:scale-[1.02]"
            >
              <Send size={14} />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            <p
              className={`text-xs tracking-wide ${
                status.type === "error"
                  ? "text-red-300"
                  : status.type === "success"
                    ? "text-green-300"
                    : "text-white/40"
              }`}
            >
              {status.message || "Feel free to reach out"}
            </p>
          </div>
        </form>

        <div className="flex gap-8 mb-16">
          <a
            href="https://github.com/aravinnndddd"
            className="p-4 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/10"
          >
            <Github size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/aravind-p-832849331/"
            className="p-4 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/10"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:aravindlernskills@gmail.com"
            className="p-4 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/10"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="w-full h-px bg-white/10 mb-12" />

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 font-medium tracking-tight">
            © {new Date().getFullYear()} Aravind P. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-gray-500 font-medium">
            Built with <Heart size={16} className="text-red-500" /> by Me!
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
