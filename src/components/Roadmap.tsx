import React from 'react';
import { ROADMAP_STAGES } from '../data/portfolioData';
import { ArrowDown, CheckCircle, Clock, Compass, Target } from 'lucide-react';

export const Roadmap: React.FC = () => {
  const getStageIndicator = (status: string) => {
    switch (status) {
      case 'Current Academic Focus':
        return {
          icon: <CheckCircle className="w-4 h-4 text-emerald-600" />,
          badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        };
      case 'Foundational Work':
        return {
          icon: <Clock className="w-4 h-4 text-blue-600" />,
          badgeColor: 'text-blue-700 bg-blue-50 border-blue-200',
        };
      case 'In Progress':
        return {
          icon: <Clock className="w-4 h-4 text-indigo-600" />,
          badgeColor: 'text-indigo-700 bg-indigo-50 border-indigo-200',
        };
      case 'Active Exploration':
        return {
          icon: <Compass className="w-4 h-4 text-purple-600" />,
          badgeColor: 'text-purple-700 bg-purple-50 border-purple-200',
        };
      default:
        return {
          icon: <Target className="w-4 h-4 text-slate-500" />,
          badgeColor: 'text-slate-600 bg-slate-100 border-slate-200',
        };
    }
  };

  return (
    <section id="roadmap" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span>Curriculum & Goals</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            My Learning Journey
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            This roadmap outlines my intentional learning trajectory from foundational computer science coursework toward my long-term aspiration of AI Engineering.
          </p>
        </div>

        {/* Vertical Timeline / Progressive Cards */}
        <div className="relative">
          {/* Central connecting guide line on desktop */}
          <div className="hidden lg:block absolute left-8 top-8 bottom-8 w-0.5 bg-slate-200 -z-0" />

          <div className="space-y-6">
            {ROADMAP_STAGES.map((stage) => {
              const indicator = getStageIndicator(stage.status);
              const isCurrent = stage.phase === 1 || stage.phase === 2;

              return (
                <div
                  key={stage.phase}
                  className={`relative bg-white rounded-xl border p-6 transition-all ${
                    isCurrent
                      ? 'border-slate-300 shadow-xs ring-1 ring-slate-900/5'
                      : 'border-slate-200/80 hover:border-slate-300'
                  } lg:ml-16`}
                >
                  {/* Floating Number Anchor for Desktop */}
                  <div className="hidden lg:flex absolute -left-16 top-6 w-8 h-8 rounded-full bg-white border-2 border-slate-800 items-center justify-center text-xs font-mono font-bold text-slate-900 shadow-xs -translate-x-1/2">
                    {stage.phase}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <span className="lg:hidden flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-mono font-bold">
                        {stage.phase}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                        {stage.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-mono px-2.5 py-0.5 rounded border flex items-center gap-1.5 ${indicator.badgeColor}`}
                      >
                        {indicator.icon}
                        <span>{stage.status}</span>
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {stage.description}
                  </p>

                  {/* Core Topics Checklist */}
                  <div className="pt-2">
                    <div className="text-[11px] font-semibold uppercase text-slate-400 tracking-wider mb-2">
                      Key Focal Points
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {stage.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-xs bg-slate-50 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-md"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clear Disclosure Notice */}
        <div className="mt-10 p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-500 leading-relaxed flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
          <p>
            <strong>Note on Progression:</strong> This roadmap visualizes my intended educational path and learning direction. It does not represent completed professional credentials, degrees, or certifications.
          </p>
        </div>
      </div>
    </section>
  );
};
