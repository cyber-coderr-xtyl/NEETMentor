import React, { useState } from 'react';
import { SUBJECT_MODULES } from '../data/portfolioData';
import { SubjectModule } from '../types';
import { BookOpen, FileText, Sparkles, Bookmark, CheckCircle, Clock, ChevronRight, Layers } from 'lucide-react';
import { FormulaMatrixModal } from '../components/FormulaMatrixModal';
import { RevisionNotesModal } from '../components/RevisionNotesModal';
import { ErrorTrapModal } from '../components/ErrorTrapModal';

export const SubjectsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'biology' | 'physics' | 'chemistry'>('all');

  // Modal states
  const [formulaModalOpen, setFormulaModalOpen] = useState(false);
  const [formulaInitialSubject, setFormulaInitialSubject] = useState<string | undefined>(undefined);

  const [revisionModalOpen, setRevisionModalOpen] = useState(false);
  const [selectedSubjectForNotes, setSelectedSubjectForNotes] = useState<SubjectModule | null>(null);

  const [trapModalOpen, setTrapModalOpen] = useState(false);
  const [trapInitialSubject, setTrapInitialSubject] = useState<string | undefined>(undefined);

  const filteredModules =
    activeTab === 'all'
      ? SUBJECT_MODULES
      : SUBJECT_MODULES.filter((m) => m.id === activeTab);

  const openFormula = (subjectName?: string) => {
    setFormulaInitialSubject(subjectName || 'All');
    setFormulaModalOpen(true);
  };

  const openNotes = (subject: SubjectModule) => {
    setSelectedSubjectForNotes(subject);
    setRevisionModalOpen(true);
  };

  const openTrap = (subjectName?: string) => {
    setTrapInitialSubject(subjectName || 'All');
    setTrapModalOpen(true);
  };

  return (
    <div className="space-y-12 pb-16 pt-4">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-white/10 gap-6">
        <div>
          <span className="font-['JetBrains_Mono'] text-xs text-[#4cd7f6] uppercase tracking-widest block mb-2 font-semibold">
            Dedicated Academic Hub // Page 02
          </span>
          <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Subjects &amp; Syllabus Modules
          </h1>
          <p className="font-['Manrope'] text-sm sm:text-base text-[#a3a8be] max-w-2xl mt-3 leading-relaxed">
            Class 11 PCB complete curriculum tracking: NCERT line-by-line reading, MTG Fingertips question sets, H.C. Verma Mechanics, and Organic GOC reaction mechanisms.
          </p>
        </div>

        {/* Action Controls & Subject Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
          <button
            onClick={() => openFormula('All')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#635bff] hover:bg-[#5249e0] text-white text-xs font-['JetBrains_Mono'] font-semibold shadow-lg shadow-[#635bff]/25 transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-white" />
            <span>Open Formula Matrix</span>
          </button>

          <div className="flex items-center gap-1 p-1 bg-[#16181f] rounded-xl border border-white/10 text-xs font-['JetBrains_Mono']">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'all'
                  ? 'bg-white/10 text-white font-bold'
                  : 'text-[#a3a8be] hover:text-white'
              }`}
            >
              All (3)
            </button>
            <button
              onClick={() => setActiveTab('biology')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'biology'
                  ? 'bg-[#4cd7f6] text-[#003640] font-bold'
                  : 'text-[#a3a8be] hover:text-white'
              }`}
            >
              Biology (360M)
            </button>
            <button
              onClick={() => setActiveTab('physics')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'physics'
                  ? 'bg-[#c3c0ff] text-[#1d00a5] font-bold'
                  : 'text-[#a3a8be] hover:text-white'
              }`}
            >
              Physics (180M)
            </button>
            <button
              onClick={() => setActiveTab('chemistry')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
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

      {/* Subject Modules Listing */}
      <div className="space-y-12">
        {filteredModules.map((module, index) => {
          const isFlipped = index % 2 === 1;

          return (
            <article
              key={module.id}
              className="bg-[#14161e] rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Content Side */}
                <div
                  className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
                    isFlipped ? 'order-1 lg:order-2' : ''
                  }`}
                >
                  <div>
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span
                        className="font-['JetBrains_Mono'] text-xs font-semibold px-3 py-1 rounded-md uppercase"
                        style={{
                          backgroundColor: `${module.accentColor}20`,
                          color: module.accentColor,
                        }}
                      >
                        {module.weightage}
                      </span>
                      <span className="font-['JetBrains_Mono'] text-xs text-[#a3a8be] bg-white/5 px-2.5 py-1 rounded">
                        Completion: <strong className="text-white">{module.overallProgress}%</strong>
                      </span>
                      <span className="font-['JetBrains_Mono'] text-[10px] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 font-bold">
                        {module.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-[#c3c0ff] transition-colors">
                      {module.title}
                    </h2>
                    <p className="font-['Manrope'] text-sm sm:text-base text-[#a3a8be] mb-6 leading-relaxed">
                      {module.description}
                    </p>

                    {/* Chapter Breakdown */}
                    <div className="space-y-3 mb-6 bg-[#0c0e13]/60 p-5 rounded-2xl border border-white/5">
                      <div className="flex items-center justify-between text-[11px] font-['JetBrains_Mono'] text-[#70758e] uppercase tracking-wider mb-2">
                        <span>Chapter Curriculum Breakdown</span>
                        <span>{module.topics.length} Syllabus Units</span>
                      </div>

                      {module.topics.map((topic) => (
                        <div key={topic.name} className="py-1">
                          <div className="flex justify-between text-xs font-['JetBrains_Mono'] mb-1">
                            <span className="text-[#e2e2e9] flex items-center gap-2 truncate max-w-[80%]">
                              {topic.highYield ? (
                                <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                              ) : (
                                <CheckCircle className="w-3 h-3 text-[#4cd7f6] shrink-0" />
                              )}
                              <span className="truncate">{topic.name}</span>
                            </span>
                            <span className="text-[#c3c0ff] font-semibold">
                              {topic.progress}%
                            </span>
                          </div>
                          <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
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
                          className="font-['JetBrains_Mono'] text-[11px] px-2.5 py-1 rounded-md bg-[#1e2029] border border-white/5 text-[#c7c4d8]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                    <button
                      onClick={() => openNotes(module)}
                      className="inline-flex items-center gap-2 text-xs font-['JetBrains_Mono'] font-semibold text-white bg-[#635bff] hover:bg-[#5249e0] px-4 py-2.5 rounded-xl shadow-lg transition-all"
                    >
                      <BookOpen className="w-4 h-4 text-[#4cd7f6]" />
                      <span>Open Revision Notes</span>
                    </button>

                    <button
                      onClick={() => openFormula(module.title.split(' ')[0])}
                      className="inline-flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#c7c4d8] hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-xl border border-white/10 transition-all"
                    >
                      <FileText className="w-4 h-4 text-amber-400" />
                      <span>Formula Sheet</span>
                    </button>

                    <button
                      onClick={() => openTrap(module.title.split(' ')[0])}
                      className="inline-flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#c7c4d8] hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-xl border border-white/10 transition-all"
                    >
                      <Bookmark className="w-4 h-4 text-rose-400" />
                      <span>Exam Traps</span>
                    </button>
                  </div>
                </div>

                {/* Dashboard Metrics Column */}
                <div
                  className={`lg:col-span-5 bg-[#0e1017] p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 border-white/10 relative overflow-hidden ${
                    isFlipped ? 'order-2 lg:order-1 lg:border-r' : 'lg:border-l'
                  }`}
                >
                  <div className="space-y-6">
                    {/* Log Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <div>
                        <div className="font-['Space_Grotesk'] text-lg font-bold text-white">
                          {module.id === 'biology' && 'Zoology & Botany Log'}
                          {module.id === 'physics' && 'Mechanics & Waves Matrix'}
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

                    {/* Dual Stats */}
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

                    {/* Active Focus Chapter Spotlight */}
                    <div className="p-5 bg-[#161822] rounded-2xl border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-['JetBrains_Mono'] text-[10px] text-[#70758e] uppercase">
                          Active Revision Chapter
                        </span>
                        <span className="font-['JetBrains_Mono'] text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded font-semibold">
                          {module.activeChapter.number}
                        </span>
                      </div>
                      <div className="font-['Manrope'] text-sm text-white font-semibold mb-2">
                        {module.activeChapter.title}
                      </div>
                      <ul className="space-y-2 font-['JetBrains_Mono'] text-[11px] text-[#a3a8be]">
                        {module.activeChapter.keyPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#4cd7f6] mt-0.5">›</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer note */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-['JetBrains_Mono'] text-[#a3a8be]">
                    <span>Revision Cadence</span>
                    <span className="text-emerald-400 font-medium">On Track (Cycle 4)</span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Modals */}
      <FormulaMatrixModal
        isOpen={formulaModalOpen}
        onClose={() => setFormulaModalOpen(false)}
        initialSubject={formulaInitialSubject}
      />

      <RevisionNotesModal
        subject={selectedSubjectForNotes}
        onClose={() => {
          setRevisionModalOpen(false);
          setSelectedSubjectForNotes(null);
        }}
      />

      <ErrorTrapModal
        isOpen={trapModalOpen}
        onClose={() => setTrapModalOpen(false)}
        initialSubject={trapInitialSubject}
      />
    </div>
  );
};
