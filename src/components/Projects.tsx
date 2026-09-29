import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { Code, Terminal, CheckCircle2, Calculator, CreditCard, GraduationCap, ChevronRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'voter-eligibility':
        return <CheckCircle2 className="w-5 h-5 text-slate-700" />;
      case 'calculator':
        return <Calculator className="w-5 h-5 text-slate-700" />;
      case 'atm-management':
        return <CreditCard className="w-5 h-5 text-slate-700" />;
      case 'student-grade':
        return <GraduationCap className="w-5 h-5 text-slate-700" />;
      default:
        return <Code className="w-5 h-5 text-slate-700" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span>Foundational Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            Projects
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Beginner-level programming projects written in Python to practice foundational control flow, input handling, algorithms, and modular design.
          </p>
        </div>

        {/* 4 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Card Top: Clean unboxed metadata with typographic separators */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <span className="font-semibold text-slate-900">{project.technology}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span>Console Application</span>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-200/80">
                    {getProjectIcon(project.id)}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Clean Abstract Logic Blueprint Visual */}
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200/60 font-mono text-[11px] text-slate-600 space-y-1">
                  <div className="flex items-center justify-between text-slate-400 text-[10px] uppercase font-sans font-semibold">
                    <span>Core Logic Flow</span>
                    <Terminal className="w-3 h-3 text-slate-400" />
                  </div>
                  <div className="text-slate-700 truncate">
                    {project.id === 'voter-eligibility' && 'input(age) → if age >= 18 → Eligible else Ineligible'}
                    {project.id === 'calculator' && 'input(a, b, op) → execute_operation() → return result'}
                    {project.id === 'atm-management' && 'verify_pin() → while True: deposit | withdraw | balance'}
                    {project.id === 'student-grade' && 'aggregate_marks() → calculate % → assign_grade_bracket()'}
                  </div>
                </div>

                {/* Concepts list (unboxed clean text) */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
                  <span className="font-medium text-slate-700">Focus:</span>
                  {project.concepts.map((concept, idx) => (
                    <React.Fragment key={concept}>
                      <span>{concept}</span>
                      {idx < project.concepts.length - 1 && (
                        <span aria-hidden="true" className="text-slate-300">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Card Action */}
              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">Semester 1 Build</span>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-slate-700 transition-colors py-1.5 px-3 rounded-lg hover:bg-slate-100 focus-visible:outline-2"
                >
                  <span>View Project</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Note on Academic Projects */}
        <div className="mt-8 text-center text-xs text-slate-500 max-w-xl mx-auto">
          These projects showcase fundamental programming logic and syntax understanding. Click &quot;View Project&quot; to test interactive executions and inspect the underlying Python code.
        </div>
      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
