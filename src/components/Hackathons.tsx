import React from 'react';
import { HACKATHON_LESSONS } from '../data/portfolioData';
import { Lightbulb, Clock, Users, Presentation, Hammer, ArrowUpRight } from 'lucide-react';

export const Hackathons: React.FC = () => {
  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Lightbulb className="w-5 h-5 text-slate-800" />;
      case 1:
        return <Clock className="w-5 h-5 text-slate-800" />;
      case 2:
        return <Users className="w-5 h-5 text-slate-800" />;
      case 3:
        return <Presentation className="w-5 h-5 text-slate-800" />;
      case 4:
        return <Hammer className="w-5 h-5 text-slate-800" />;
      default:
        return <Lightbulb className="w-5 h-5 text-slate-800" />;
    }
  };

  return (
    <section id="hackathons" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span>Experiential Growth</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            Learning Through Building
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            As a first-semester student, hackathons and ideathons serve as an invaluable catalyst—transforming classroom theories into practical collaboration, rapid problem breakdown, and proactive execution.
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HACKATHON_LESSONS.map((lesson, idx) => (
            <div
              key={lesson.title}
              className={`bg-slate-50/70 border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-slate-300 transition-colors ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-2xs">
                    {getPillarIcon(idx)}
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-semibold">0{idx + 1}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {lesson.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {lesson.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-200/80">
                <div className="text-[11px] font-semibold text-slate-900 uppercase tracking-wider mb-0.5">
                  Core Takeaway
                </div>
                <p className="text-xs text-slate-700 italic">
                  &ldquo;{lesson.takeaway}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Candid Experience Summary Card */}
        <div className="mt-10 p-6 bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="text-xs font-mono text-emerald-400 font-medium">
              Student Mindset · Active Participant
            </div>
            <h4 className="text-lg font-bold text-white">
              Open to collaborative hackathon teams & student tech initiatives
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              I am always eager to join driven teams, brainstorm creative solution architectures, and contribute practical Python and frontend code under hackathon deadlines.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap self-start md:self-auto shrink-0 shadow-xs"
          >
            <span>Discuss Teaming Up</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
