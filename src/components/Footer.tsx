import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="py-16 md:py-32 px-8 md:px-24 bg-black border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <span className="text-secondary text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-8 block opacity-50">
          Get In Touch
        </span>
        <h2 className="text-5xl md:text-[10rem] font-black text-white tracking-tighter mb-16 text-center leading-[0.8]">
          Let’s build
          <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "2px white" }}
          >
            together.
          </span>
        </h2>

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

          {/* <div className="flex gap-8">
            <a href="#" className="text-sm font-bold text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm font-bold text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
