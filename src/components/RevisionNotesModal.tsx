import React from 'react';
import { SubjectModule } from '../types';
import { X, BookOpen, CheckCircle, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';

interface RevisionNotesModalProps {
  subject: SubjectModule | null;
  onClose: () => void;
}

export const RevisionNotesModal: React.FC<RevisionNotesModalProps> = ({ subject, onClose }) => {
  if (!subject) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#12141c] border border-white/15 rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#161822]">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${subject.accentColor}20`, color: subject.accentColor }}
            >
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">
                  {subject.title} Revision Notes
                </h3>
                <span className="font-['JetBrains_Mono'] text-[10px] px-2 py-0.5 rounded bg-white/10 text-white">
                  {subject.code}
                </span>
              </div>
              <p className="font-['JetBrains_Mono'] text-xs text-[#a3a8be] mt-0.5">
                NCERT Line-by-Line Synthesis &amp; Active Recall Decks
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#a3a8be] hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm font-['Manrope'] text-[#e2e2e9]">
          {/* Active Chapter Spotlight */}
          <div className="p-5 rounded-xl bg-[#181a24] border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-['JetBrains_Mono'] text-xs text-[#4cd7f6] uppercase font-bold">
                Featured NCERT Focus Chapter
              </span>
              <span className="font-['JetBrains_Mono'] text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                {subject.activeChapter.number}
              </span>
            </div>
            <h4 className="font-['Space_Grotesk'] text-lg font-bold text-white">
              {subject.activeChapter.title}
            </h4>
            <div className="space-y-2 pt-2">
              {subject.activeChapter.keyPoints.map((pt, i) => (
                <div key={i} className="p-3 rounded-lg bg-[#0c0e13] border border-white/5 flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <span className="text-xs font-['Manrope'] text-[#c7c4d8] leading-relaxed">
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus Chapters Checklist */}
          <div>
            <h4 className="font-['Space_Grotesk'] text-base font-bold text-white mb-3 flex items-center gap-2">
              <span>Chapter Coverage &amp; Mastery Levels</span>
              <span className="text-xs font-['JetBrains_Mono'] text-[#a3a8be] font-normal">
                ({subject.topics.length} Units)
              </span>
            </h4>
            <div className="space-y-2">
              {subject.topics.map((t) => (
                <div
                  key={t.name}
                  className="p-3.5 rounded-xl bg-[#181a24] border border-white/5 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    {t.highYield ? (
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-[#4cd7f6] shrink-0" />
                    )}
                    <span className="font-medium text-white text-xs">{t.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[10px] font-['JetBrains_Mono'] px-2 py-0.5 rounded ${
                        t.ncertStatus === 'Completed'
                          ? 'bg-emerald-500/15 text-emerald-300'
                          : 'bg-[#635bff]/20 text-[#c3c0ff]'
                      }`}
                    >
                      {t.ncertStatus}
                    </span>
                    <span className="font-['Space_Grotesk'] font-bold text-xs text-white">
                      {t.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Varun's Personal Revision Note Strategy */}
          <div className="p-4 rounded-xl bg-[#635bff]/10 border border-[#635bff]/20 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#c3c0ff] shrink-0 mt-0.5" />
            <div>
              <div className="font-['Space_Grotesk'] text-sm font-bold text-white mb-1">
                Varun&apos;s Active Recall Protocol
              </div>
              <p className="text-xs text-[#a3a8be] leading-relaxed">
                Every chapter revision requires: (1) 15-minute blank sheet regurgitation of all formulas/diagrams, (2) 40 timed MCQs without referring to notes, (3) Recording any incorrect question into the physical error logbook before moving to the next subject.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-[#161822] flex items-center justify-between text-xs font-['JetBrains_Mono']">
          <span className="text-[#a3a8be]">Class 11 Science (PCB) • NEET Strategy</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium"
          >
            Close Notes
          </button>
        </div>
      </div>
    </div>
  );
};
