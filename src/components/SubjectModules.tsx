import React, { useState } from 'react';
import { SubjectModule } from '../types';
import { SUBJECT_MODULES } from '../data/portfolioData';
import { BookOpen, FileText, ChevronRight, Check, Sparkles, ExternalLink, Bookmark, Layers } from 'lucide-react';

interface SubjectModulesProps {
  onOpenRevisionNotes: (subject: SubjectModule) => void;
  onOpenFormulaMatrix: (subjectName?: string) => void;
  onOpenTrapLog: (subjectName?: string) => void;
}

export const SubjectModules: React.FC<SubjectModulesProps> = ({
  onOpenRevisionNotes,
  onOpenFormulaMatrix,
  onOpenTrapLog,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'biology' | 'physics' | 'chemistry'>('all');

  const filteredModules =
    activeTab === 'all'
      ? SUBJECT_MODULES
      : SUBJECT_MODULES.filter((m) => m.id === activeTab);

  return (
    <section className="py-20 border-t border-white/10 relative" id="modules">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#635bff]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="font-['JetBrains_Mono'] text-xs text-[#c3c0ff] uppercase tracking-widest block mb-2 font-semibold">
            Index 01 // Academics
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Subject Modules &amp; Syllabus Progress
          </h2>
        </div>
        <div className="flex flex-col md:items-end">
          <p className="font-['JetBrains_Mono'] text-xs text-[#a3a8be] max-w-sm md:text-right mb-4">
            NCERT line-by-line synthesis, rigorous numerical problem sets, and exemplar mastery across Class 11 PCB.
          </p>

          {/* Subject Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-[#16181f] rounded-lg border border-white/10 text-xs font-['JetBrains_Mono']">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1 rounded-md transition-colors ${
                activeTab === 'all'
                  ? 'bg-[#635bff] text-white font-medium'
                  : 'text-[#a3a8be] hover:text-white'
              }`}
            >
              All (3)
            </button>
            <button
              onClick={() => setActiveTab('biology')}
              className={`px-3 py-1 rounded-md transition-colors ${
                activeTab === 'biology'
                  ? 'bg-[#4cd7f6] text-[#003640] font-bold'
                  : 'text-[#a3a8be] hover:text-white'
              }`}
            >
              Biology (360M)
            </button>
            <button
              onClick={() => setActiveTab('physics')}
              className={`px-3 py-1 rounded-md transition-colors ${
                activeTab === 'physics'
                  ? 'bg-[#c3c0ff] text-[#1d00a5] font-bold'
                  : 'text-[#a3a8be] hover:text-white'
              }`}
            >
              Physics (180M)
            </button>
            <button
              onClick={() => setActiveTab('chemistry')}
              className={`px-3 py-1 rounded-md transition-colors ${
                activeTab === 'chemistry'
                  ? 'bg-[#acedff] text-[#001f26] font-bold'
                  : 'text-[#a3a8be] hover:text-white'
              }`}
            >
              Chemistry (180M)
            </button>
          </div>
        </div>
      </div>

      {/* Modules List */}
      <div className="space-y-12">
        {filteredModules.map((module, index) => {
          const isFlipped = index % 2 === 1;

          return (
            <article
              key={module.id}
              className="bg-[#14161e] rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left (or Right) Content Column */}
                <div
                  className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
                    isFlipped ? 'order-1 lg:order-2' : ''
                  }`}
                >
                  <div>
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span
                        className="font-['JetBrains_Mono'] text-xs font-semibold px-2.5 py-1 rounded-md uppercase"
                        style={{
                          backgroundColor: `${module.accentColor}20`,
                          color: module.accentColor,
                        }}
                      >
                        {module.weightage}
                      </span>
                      <span className="font-['JetBrains_Mono'] text-xs text-[#a3a8be] bg-white/5 px-2 py-1 rounded">
                        Syllabus Covered: <strong className="text-white">{module.overallProgress}%</strong>
                      </span>
                      <span className="font-['JetBrains_Mono'] text-[10px] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                        {module.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-[#c3c0ff] transition-colors">
                      {module.title}
                    </h3>
                    <p className="font-['Manrope'] text-sm sm:text-base text-[#a3a8be] mb-6 leading-relaxed">
                      {module.description}
                    </p>

                    {/* Topic Progress Bars */}
                    <div className="space-y-3 mb-6 bg-[#0c0e13]/60 p-4 rounded-xl border border-white/5">
                      <div className="text-[11px] font-['JetBrains_Mono'] text-[#70758e] uppercase tracking-wider mb-2">
                        Core Chapter Milestones
                      </div>
                      {module.topics.slice(0, 3).map((topic) => (
                        <div key={topic.name}>
                          <div className="flex justify-between text-xs font-['JetBrains_Mono'] mb-1">
                            <span className="text-[#e2e2e9] flex items-center gap-1.5 truncate max-w-[80%]">
                              {topic.highYield && (
                                <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                              )}
                              <span className="truncate">{topic.name}</span>
                            </span>
                            <span className="text-[#c3c0ff] font-semibold">
                              {topic.progress}%
                            </span>
                          </div>
                          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-700"
                              style={{
                                width: `${topic.progress}%`,
                                backgroundColor: module.accentColor,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Topic Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {module.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-['JetBrains_Mono'] text-[11px] px-2.5 py-1 rounded bg-[#1e2029] border border-white/5 text-[#c7c4d8]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                    <button
                      onClick={() => onOpenRevisionNotes(module)}
                      className="inline-flex items-center gap-1.5 text-xs font-['JetBrains_Mono'] font-medium text-[#c3c0ff] hover:text-white bg-[#635bff]/15 hover:bg-[#635bff]/30 px-3.5 py-2 rounded-lg border border-[#635bff]/30 transition-all"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[#4cd7f6]" />
                      <span>Open Revision Notes</span>
                    </button>

                    <button
                      onClick={() => onOpenFormulaMatrix(module.title.split(' ')[0])}
                      className="inline-flex items-center gap-1.5 text-xs font-['JetBrains_Mono'] text-[#a3a8be] hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-lg border border-white/10 transition-all"
                    >
                      <FileText className="w-3.5 h-3.5 text-amber-400" />
                      <span>Formula Sheet</span>
                    </button>

                    <button
                      onClick={() => onOpenTrapLog(module.title.split(' ')[0])}
                      className="inline-flex items-center gap-1.5 text-xs font-['JetBrains_Mono'] text-[#a3a8be] hover:text-white bg-white/5 hover:bg-white/10 px-3 py-2 rounded-lg border border-white/10 transition-all"
                    >
                      <Bookmark className="w-3.5 h-3.5 text-rose-400" />
                      <span>Exam Traps</span>
                    </button>
                  </div>
                </div>

                {/* Right (or Left) Dashboard Metric Card */}
                <div
                  className={`lg:col-span-5 bg-[#0e1017] p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 border-white/10 relative overflow-hidden ${
                    isFlipped ? 'order-2 lg:order-1 lg:border-r' : 'lg:border-l'
                  }`}
                >
                  <div className="space-y-6">
                    {/* Top Log Meta */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <div>
                        <div className="font-['Space_Grotesk'] text-lg font-bold text-white">
                          {module.id === 'biology' && 'Zoology & Botany Log'}
                          {module.id === 'physics' && 'Mechanics & Formula Matrix'}
                          {module.id === 'chemistry' && 'Organic & Physical Vault'}
                        </div>
                        <div className="font-['JetBrains_Mono'] text-xs text-[#a3a8be]">
                          Target: {module.id === 'biology' ? '350+ / 360' : '165+ / 180'} marks
                        </div>
                      </div>
                      <span
                        className="font-['JetBrains_Mono'] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase"
                        style={{
                          backgroundColor: `${module.accentColor}20`,
                          color: module.accentColor,
                        }}
                      >
                        {module.badge}
                      </span>
                    </div>

                    {/* Dual Stats Boxes */}
                    <div className="grid grid-cols-2 gap-3 font-['JetBrains_Mono'] text-xs">
                      <div className="p-3.5 bg-[#161822] rounded-xl border border-white/5">
                        <div className="text-[#70758e] text-[10px] uppercase mb-1">
                          {module.metrics.primaryTitle}
                        </div>
                        <div className="text-white font-['Space_Grotesk'] text-base font-bold">
                          {module.metrics.primaryValue}
                        </div>
                        <div className="text-[#4cd7f6] text-[10px] mt-1">
                          {module.metrics.primarySub}
                        </div>
                      </div>

                      <div className="p-3.5 bg-[#161822] rounded-xl border border-white/5">
                        <div className="text-[#70758e] text-[10px] uppercase mb-1">
                          {module.metrics.secondaryTitle}
                        </div>
                        <div className="text-white font-['Space_Grotesk'] text-base font-bold">
                          {module.metrics.secondaryValue}
                        </div>
                        <div className="text-[#c3c0ff] text-[10px] mt-1">
                          {module.metrics.secondarySub}
                        </div>
                      </div>
                    </div>

                    {/* Active Chapter Details */}
                    <div className="p-4 bg-[#161822] rounded-xl border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-['JetBrains_Mono'] text-[10px] text-[#70758e] uppercase">
                          Active Revision Chapter
                        </span>
                        <span className="font-['JetBrains_Mono'] text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">
                          {module.activeChapter.number}
                        </span>
                      </div>
                      <div className="font-['Manrope'] text-sm text-white font-semibold mb-2">
                        {module.activeChapter.title}
                      </div>
                      <ul className="space-y-1.5 font-['JetBrains_Mono'] text-[11px] text-[#a3a8be]">
                        {module.activeChapter.keyPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#4cd7f6] mt-0.5">›</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-['JetBrains_Mono'] text-[#a3a8be]">
                    <span>Weekly Revision Cadence</span>
                    <span className="text-emerald-400 font-medium">On Track (Cycle 4)</span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
