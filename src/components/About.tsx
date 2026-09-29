import React, { useState } from 'react';
import { ArrowRight, Compass, Sparkles, Code2, Users, Target, Brain } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [selectedProgression, setSelectedProgression] = useState(0);

  const progressionDetails = [
    {
      title: 'Python',
      level: 'Learning',
      focus: 'Programming core & logic building',
      details:
        'Focusing on syntax fluency, function modularity, conditional decision trees, loops, and handling user input without relying on complex frameworks yet.',
    },
    {
      title: 'Web Development',
      level: 'Learning',
      focus: 'Frontend structures & interactivity',
      details:
        'Learning semantic HTML5 document structures, responsive modern CSS styling, and JavaScript logic to understand how backend ideas present cleanly on the web.',
    },
    {
      title: 'Generative AI',
      level: 'Learning',
      focus: 'Modern AI interfaces & prompts',
      details:
        'Studying modern generative model behaviors, practical prompt structuring, and understanding how engineers connect language models into software pipelines.',
    },
    {
      title: 'AI / ML',
      level: 'Exploring',
      focus: 'Mathematical principles & algorithms',
      details:
        'Beginning exploration into linear algebra, foundational statistics, data preprocessing, and understanding how machines learn patterns from data.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span>Background & Perspective</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            About Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            I am a first-semester B.Tech student at the beginning of my engineering path, with a focused ambition to become an AI Engineer.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-base">
            <p>
              I am currently pursuing a <strong>Bachelor of Technology in Computer Science and Engineering with a specialization in AI and Machine Learning</strong>. Being in my first semester, I recognize that great engineering begins with solid, patient foundations.
            </p>
            <p>
              I am actively learning Python, web development, and the fundamentals of Generative AI. What excites me most about computer science is the ability to turn abstract ideas and mathematical concepts into small, tangible, working programs.
            </p>
            <p>
              Beyond the classroom, participating in college <strong>hackathons and ideathons</strong> has been pivotal. These events challenge me to dissect real-world problems under pressure, collaborate constructively in teams, and articulate technical proposals clearly.
            </p>
            <p>
              My long-term aspiration is to develop into an <strong>AI Engineer</strong> who can design and build practical, reliable applications that genuinely assist people and solve concrete challenges in society.
            </p>

            {/* Guiding Principles */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm mb-1">
                  <Code2 className="w-4 h-4 text-slate-700" />
                  <span>Practical Construction</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Believing that programming syntax is best internalized by writing working scripts, debugging errors, and iterative improvement.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm mb-1">
                  <Users className="w-4 h-4 text-slate-700" />
                  <span>Collaborative Growth</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Valuing peer learning, team discussions in ideathons, and sharing discoveries openly with fellow engineering students.
                </p>
              </div>
            </div>
          </div>

          {/* Currently Learning Progression Box */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-slate-700" />
                  Currently Learning
                </h3>
                <span className="text-xs text-slate-500 font-medium">Foundation Sequence</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Visualizing my current study path rather than claiming mastery:
              </p>
            </div>

            {/* Visual Learning Progression Steps */}
            <div className="space-y-2">
              {progressionDetails.map((item, idx) => {
                const isSelected = selectedProgression === idx;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setSelectedProgression(idx)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      isSelected
                        ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50/60 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <span
                          className={`text-xs font-mono font-semibold ${
                            isSelected ? 'text-slate-300' : 'text-slate-400'
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <span className="text-sm font-semibold">{item.title}</span>
                      </div>
                      <span
                        className={`text-xs font-medium ${
                          isSelected ? 'text-slate-300' : 'text-slate-500'
                        }`}
                      >
                        {item.level}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Progression Detail Card */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-xs space-y-1.5">
              <div className="flex items-center justify-between text-slate-900 font-semibold">
                <span>{progressionDetails[selectedProgression].title} Focus:</span>
                <span className="text-slate-500 font-normal">
                  {progressionDetails[selectedProgression].level}
                </span>
              </div>
              <p className="text-slate-700 font-medium">
                {progressionDetails[selectedProgression].focus}
              </p>
              <p className="text-slate-600 leading-relaxed pt-1">
                {progressionDetails[selectedProgression].details}
              </p>
            </div>

            <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Goal: Build practical understanding through hands-on practice.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
