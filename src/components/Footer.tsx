import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copy */}
          <div className="text-center md:text-left space-y-1">
            <div className="text-base font-bold text-white tracking-tight">
              Hemanth N.
            </div>
            <p className="text-xs text-slate-400">
              Built with curiosity and a passion for learning.
            </p>
            <p className="text-[11px] text-slate-500">
              © 2026 Hemanth N. · B.Tech CSE (AI/ML)
            </p>
          </div>

          {/* Links & Socials */}
          <div className="flex items-center space-x-6 text-xs">
            <a
              href="#home"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-slate-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#hackathons"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center space-x-4">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800"
              aria-label="GitHub Profile"
              title="Visit GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800"
              aria-label="LinkedIn Profile"
              title="Visit LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.52a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36M7.85 18.5V10.13H5.06V18.5h2.79z" />
              </svg>
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
