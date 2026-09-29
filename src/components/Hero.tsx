import React from 'react';
import { ArrowDown, ExternalLink, Terminal, Sparkles, BookOpen, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Custom clean SVG icons for GitHub and LinkedIn for crisp representation
const GitHubIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.52a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36M7.85 18.5V10.13H5.06V18.5h2.79z" />
  </svg>
);

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-slate-200/80 bg-white overflow-hidden"
    >
      {/* Subtle architectural background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Zero-Pill Status Header: Clean unboxed metadata with typographic separators */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 tracking-normal">
              <span className="text-slate-900 font-semibold">B.Tech CSE (AI/ML)</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Semester 1</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-emerald-700">Actively Learning & Building</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-700">
                {PERSONAL_INFO.heroIntro}
              </h2>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance">
                {PERSONAL_INFO.heroHeadline}
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* Action Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shadow-xs focus-visible:outline-2"
              >
                View My Projects
              </button>
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-2"
              >
                Connect With Me
              </button>

              {/* Direct Social Links with exact URLs */}
              <div className="flex items-center pl-2 space-x-2 border-l border-slate-200 ml-1">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="GitHub Profile"
                  title="Visit Hemanth's GitHub"
                >
                  <GitHubIcon className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="LinkedIn Profile"
                  title="Visit Hemanth's LinkedIn"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Credibility / Foundations Note */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                Honest student portfolio
              </span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-slate-400" />
                Foundational Python & Web Dev
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-slate-400" />
                Hackathon participant
              </span>
            </div>
          </div>

          {/* Right Column: Clean Technical Snapshot Card (honest, academic, developer-oriented) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 text-slate-100 rounded-xl p-5 shadow-lg border border-slate-800 font-mono text-xs leading-relaxed">
              {/* Terminal header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="ml-2 text-slate-400 font-sans text-xs">hemanth_profile.py</span>
                </div>
                <span className="text-slate-400 text-[11px] font-sans">Python 3.12</span>
              </div>

              {/* Code snippet showing genuine student profile state */}
              <div className="space-y-1.5 text-slate-300">
                <p>
                  <span className="text-indigo-400">class</span>{' '}
                  <span className="text-amber-300">EngineeringStudent</span>:
                </p>
                <p className="pl-4">
                  name = <span className="text-emerald-300">&quot;Hemanth N.&quot;</span>
                </p>
                <p className="pl-4">
                  program = <span className="text-emerald-300">&quot;B.Tech CSE (AI/ML)&quot;</span>
                </p>
                <p className="pl-4">
                  semester = <span className="text-sky-300">1</span>
                </p>
                <p className="pl-4">
                  aspirations = [<span className="text-emerald-300">&quot;AI Engineering&quot;</span>,{' '}
                  <span className="text-emerald-300">&quot;Problem Solving&quot;</span>]
                </p>
                <p className="pl-4">
                  active_learning = [
                </p>
                <p className="pl-8 text-slate-400">
                  <span className="text-emerald-300">&quot;Python Fundamentals&quot;</span>,
                </p>
                <p className="pl-8 text-slate-400">
                  <span className="text-emerald-300">&quot;Web Dev (HTML/CSS/JS)&quot;</span>,
                </p>
                <p className="pl-8 text-slate-400">
                  <span className="text-emerald-300">&quot;Generative AI Principles&quot;</span>
                </p>
                <p className="pl-4">]</p>
                <p className="pl-4">
                  mindset = <span className="text-emerald-300">&quot;Learn by building & hackathons&quot;</span>
                </p>
              </div>

              {/* Bottom quick execution preview */}
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between font-sans">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Status: Actively Coding Daily
                </span>
                <span className="text-slate-500">2026 Academic Year</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
