import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Globe, Cpu, Lightbulb } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getCategoryIcon = (categoryTitle: string) => {
    switch (categoryTitle) {
      case 'Programming':
        return <Code className="w-4 h-4 text-slate-700" />;
      case 'Web Development':
        return <Globe className="w-4 h-4 text-slate-700" />;
      case 'Artificial Intelligence':
        return <Cpu className="w-4 h-4 text-slate-700" />;
      default:
        return <Lightbulb className="w-4 h-4 text-slate-700" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Learning':
        return 'text-blue-700 bg-blue-50/70 border-blue-200';
      case 'Exploring':
        return 'text-purple-700 bg-purple-50/70 border-purple-200';
      case 'Familiar':
        return 'text-emerald-700 bg-emerald-50/70 border-emerald-200';
      case 'Active Focus':
        return 'text-amber-800 bg-amber-50/70 border-amber-200';
      default:
        return 'text-slate-700 bg-slate-100 border-slate-200';
    }
  };

  const filteredCategories =
    activeTab === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title.toLowerCase().includes(activeTab));

  return (
    <section id="skills" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              <span>Technical Foundations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Skills & Focus Areas
            </h2>
            <p className="mt-3 text-base text-slate-600">
              An honest appraisal of my active learning curriculum. No artificial percentage meters—only genuine current proficiency states.
            </p>
          </div>

          {/* Functional filter segmented buttons (Permitted by constitution: interactive filter controls) */}
          <div className="inline-flex items-center p-1 bg-slate-100 rounded-lg self-start md:self-auto border border-slate-200/60">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Categories
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('programming')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'programming'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Programming
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('web')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'web'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Web Dev
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('intelligence')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'intelligence'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              AI
            </button>
          </div>
        </div>

        {/* Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-50/70 border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors"
            >
              {/* Category Title & Icon */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
                <div className="flex items-center space-x-2.5">
                  <div className="p-1.5 bg-white rounded-md border border-slate-200 shadow-xs">
                    {getCategoryIcon(category.title)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{category.title}</h3>
                    <p className="text-xs text-slate-500">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Skills List - adhering to Zero-Pill & Legibility */}
              <div className="space-y-3.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-white p-3.5 rounded-lg border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-slate-900">{skill.name}</span>
                      {/* Quiet state label with subtle border, avoiding overblown badges */}
                      <span
                        className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded border ${getStatusColor(
                          skill.status
                        )}`}
                      >
                        {skill.status}
                      </span>
                    </div>
                    {skill.description && (
                      <p className="text-xs text-slate-600 leading-normal">{skill.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Transparency note on skill tracking */}
        <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>
            <strong>Transparency Notice:</strong> Skill designations denote active learning status in semester 1 coursework and independent projects, not professional mastery.
          </span>
          <span className="text-slate-400 font-mono text-[11px] shrink-0">Updated Sept 2026</span>
        </div>
      </div>
    </section>
  );
};
