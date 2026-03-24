import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-12 text-center">
          Let’s build something<br />amazing together.
        </h2>
        
        <div className="flex gap-8 mb-16">
          <a href="#" className="p-4 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/10">
            <Github size={24} />
          </a>
          <a href="#" className="p-4 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/10">
            <Twitter size={24} />
          </a>
          <a href="#" className="p-4 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/10">
            <Linkedin size={24} />
          </a>
          <a href="mailto:aravind@example.com" className="p-4 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/10">
            <Mail size={24} />
          </a>
        </div>

        <div className="w-full h-px bg-white/10 mb-12" />

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 font-medium tracking-tight">
            © {new Date().getFullYear()} Aravind P. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-gray-500 font-medium">
            Built with <Heart size={16} className="text-red-500" /> using React & GSAP
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-sm font-bold text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm font-bold text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
