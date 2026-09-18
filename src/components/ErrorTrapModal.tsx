import React, { useState } from 'react';
import { ERROR_TRAPS } from '../data/portfolioData';
import { ErrorTrap } from '../types';
import { AlertTriangle, X, ShieldAlert, CheckCircle2, Filter } from 'lucide-react';

interface ErrorTrapModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export const ErrorTrapModal: React.FC<ErrorTrapModalProps> = ({
  isOpen,
  onClose,
  initialSubject,
}) => {
  const [filterSubject, setFilterSubject] = useState<string>(initialSubject || 'All');

  if (!isOpen) return null;

  const filteredTraps = ERROR_TRAPS.filter((trap) => {
    if (filterSubject === 'All') return true;
    return trap.subject.toLowerCase() === filterSubject.toLowerCase();
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#12141c] border border-white/15 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#161822]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">
                NEET Error Logbook &amp; Negative Marking Traps
              </h3>
              <p className="font-['JetBrains_Mono'] text-xs text-[#a3a8be] mt-0.5">
                Cataloged -1 mark pitfalls from 15+ years of AIPMT/NEET exam analysis.
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

        {/* Filter Bar */}
        <div className="px-6 py-3 border-b border-white/10 bg-[#0c0e13] flex items-center justify-between text-xs font-['JetBrains_Mono']">
          <span className="text-[#70758e]">Subject Trap Filter:</span>
          <div className="flex items-center gap-1.5 p-1 bg-[#181a24] rounded-lg border border-white/5">
            {['All', 'Physics', 'Chemistry', 'Biology'].map((subj) => (
              <button
                key={subj}
                onClick={() => setFilterSubject(subj)}
                className={`px-3 py-1 rounded-md transition-all ${
                  filterSubject.toLowerCase() === subj.toLowerCase()
                    ? 'bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30'
                    : 'text-[#a3a8be] hover:text-white'
                }`}
              >
                {subj}
              </button>
            ))}
          </div>
        </div>

        {/* Traps List */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {filteredTraps.map((trap) => (
            <div
              key={trap.id}
              className="p-5 rounded-xl bg-[#181a24] border border-white/10 space-y-3 hover:border-white/20 transition-all"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-['JetBrains_Mono'] px-2 py-0.5 rounded bg-white/10 text-[#c7c4d8] font-semibold uppercase">
                  {trap.subject} • {trap.chapter}
                </span>
                <span className="text-[10px] font-['JetBrains_Mono'] text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                  Avoid -1 Penalty
                </span>
              </div>

              <h4 className="font-['Space_Grotesk'] text-base font-bold text-white">
                {trap.trapTitle}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-['Manrope']">
                {/* Common Mistake */}
                <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-500/20 space-y-1">
                  <div className="font-['JetBrains_Mono'] text-[10px] text-rose-400 font-bold uppercase flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5" /> Frequent Mistake
                  </div>
                  <p className="text-rose-200 leading-relaxed">{trap.commonMistake}</p>
                </div>

                {/* Correct Concept */}
                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/20 space-y-1">
                  <div className="font-['JetBrains_Mono'] text-[10px] text-emerald-400 font-bold uppercase flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Correct Scientific Concept
                  </div>
                  <p className="text-emerald-200 leading-relaxed">{trap.correctConcept}</p>
                </div>
              </div>

              {/* Rule of Thumb */}
              <div className="p-3 rounded-lg bg-[#0c0e13] border border-white/5 font-['JetBrains_Mono'] text-xs text-[#4cd7f6] flex items-start gap-2">
                <span className="font-bold text-[#c3c0ff] shrink-0">Rule of Thumb:</span>
                <span>{trap.ruleOfThumb}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-[#161822] flex items-center justify-between text-xs font-['JetBrains_Mono'] text-[#70758e]">
          <span>Reviewing {filteredTraps.length} critical traps</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium"
          >
            Close Error Log
          </button>
        </div>
      </div>
    </div>
  );
};
