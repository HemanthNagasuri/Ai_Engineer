import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, MessageSquare, ExternalLink, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState<'github' | 'linkedin' | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<'general' | 'hackathon' | 'student' | 'project'>('general');
  const [noteCopied, setNoteCopied] = useState(false);

  const connectionTemplates = {
    general:
      "Hi Hemanth, I came across your portfolio and saw that you're pursuing B.Tech CSE (AI/ML). Would love to connect and keep in touch with your journey!",
    hackathon:
      "Hi Hemanth, I noticed your interest in hackathons and ideathons. Let's connect on LinkedIn—would be great to explore participating in upcoming student challenges together!",
    student:
      "Hey Hemanth, fellow engineering student here! Loved how you structured your learning roadmap and Python projects. Let's connect and share learnings.",
    project:
      "Hi Hemanth, I reviewed your foundation Python projects on your portfolio. Great focus on fundamental logic. Wishing you the best and looking forward to connecting!",
  };

  const handleCopyLink = (type: 'github' | 'linkedin', url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(type);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const handleCopyNote = () => {
    navigator.clipboard.writeText(connectionTemplates[selectedTopic]);
    setNoteCopied(true);
    setTimeout(() => setNoteCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span>Get in Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            Let&apos;s Connect
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            I&apos;m always open to connecting with fellow students, developers, builders, and people interested in AI and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Profile Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* LinkedIn Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-600 text-white rounded-lg">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.52a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36M7.85 18.5V10.13H5.06V18.5h2.79z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">LinkedIn Profile</h3>
                    <p className="text-xs text-slate-500">Professional networking & discussions</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 mb-4 break-all font-mono">
                {PERSONAL_INFO.socials.linkedin}
              </p>

              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <span>Open LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => handleCopyLink('linkedin', PERSONAL_INFO.socials.linkedin)}
                  className="px-3 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1"
                  title="Copy LinkedIn URL"
                >
                  {copiedLink === 'linkedin' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink === 'linkedin' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-slate-900 text-white rounded-lg">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">GitHub Profile</h3>
                    <p className="text-xs text-slate-500">Code repositories & activity</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 mb-4 break-all font-mono">
                {PERSONAL_INFO.socials.github}
              </p>

              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <span>Open GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => handleCopyLink('github', PERSONAL_INFO.socials.github)}
                  className="px-3 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1"
                  title="Copy GitHub URL"
                >
                  {copiedLink === 'github' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink === 'github' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Connection Note Generator */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-slate-700" />
                <h3 className="text-sm font-bold text-slate-900">
                  Ready-to-Send Connection Note
                </h3>
              </div>
              <span className="text-xs text-slate-500">For LinkedIn Invites</span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Planning to connect on LinkedIn? Choose your context below to generate a tailored note to include with your connection request:
            </p>

            {/* Topic selector */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() => setSelectedTopic('general')}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                  selectedTopic === 'general'
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                General Connect
              </button>
              <button
                type="button"
                onClick={() => setSelectedTopic('hackathon')}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                  selectedTopic === 'hackathon'
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Hackathons
              </button>
              <button
                type="button"
                onClick={() => setSelectedTopic('student')}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                  selectedTopic === 'student'
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Peer Student
              </button>
              <button
                type="button"
                onClick={() => setSelectedTopic('project')}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                  selectedTopic === 'project'
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Projects
              </button>
            </div>

            {/* Generated Note Box */}
            <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-3">
              <p className="text-xs text-slate-700 leading-relaxed italic">
                &ldquo;{connectionTemplates[selectedTopic]}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <span className="text-[11px] text-slate-400 font-mono">
                  {connectionTemplates[selectedTopic].length} characters
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyNote}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                  >
                    {noteCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{noteCopied ? 'Copied Note' : 'Copy Note'}</span>
                  </button>
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
                  >
                    <span>Paste on LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Promptly active on LinkedIn for student discussions and technical exchange.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
