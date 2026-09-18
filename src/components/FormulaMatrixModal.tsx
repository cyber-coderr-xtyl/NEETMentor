import React, { useState } from 'react';
import { FORMULA_MATRIX } from '../data/portfolioData';
import { FormulaItem } from '../types';
import { Search, X, Sparkles, Copy, Check, Filter } from 'lucide-react';

interface FormulaMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export const FormulaMatrixModal: React.FC<FormulaMatrixModalProps> = ({
  isOpen,
  onClose,
  initialSubject,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<string>(initialSubject || 'All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const filteredFormulas = FORMULA_MATRIX.filter((item) => {
    const matchesSubject =
      selectedSubject === 'All' || item.subject.toLowerCase() === selectedSubject.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.chapter.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.examTip.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  const handleCopyFormula = (item: FormulaItem) => {
    navigator.clipboard.writeText(`${item.title}: ${item.formula} (Tip: ${item.examTip})`).then(() => {
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2500);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#12141c] border border-white/15 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#161822]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4cd7f6] animate-pulse" />
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">
                Formula Matrix &amp; High-Yield Cheat Sheet
              </h3>
            </div>
            <p className="font-['JetBrains_Mono'] text-xs text-[#a3a8be] mt-0.5">
              Class 11 NEET formulas with conditions of validity and examiner traps.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#a3a8be] hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Filters */}
        <div className="p-4 sm:p-6 border-b border-white/10 bg-[#0d0f15] flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Search bar */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#70758e] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search formulas, concepts, or chapters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#181a24] border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
            />
          </div>

          {/* Subject buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-[#181a24] rounded-xl border border-white/10 text-xs font-['JetBrains_Mono'] w-full sm:w-auto justify-center">
            {['All', 'Physics', 'Chemistry', 'Biology'].map((subj) => (
              <button
                key={subj}
                onClick={() => setSelectedSubject(subj)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedSubject.toLowerCase() === subj.toLowerCase()
                    ? 'bg-[#635bff] text-white font-semibold'
                    : 'text-[#a3a8be] hover:text-white'
                }`}
              >
                {subj}
              </button>
            ))}
          </div>
        </div>

        {/* Formulas Grid */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {filteredFormulas.length === 0 ? (
            <div className="text-center py-12 text-[#a3a8be] font-['JetBrains_Mono'] text-xs">
              No formulas found matching &quot;{searchQuery}&quot;. Try another search term.
            </div>
          ) : (
            filteredFormulas.map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-5 rounded-xl bg-[#181a24] border border-white/10 hover:border-white/20 transition-all space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-[10px] font-['JetBrains_Mono'] px-2 py-0.5 rounded-md font-bold uppercase ${
                          item.subject === 'Physics'
                            ? 'bg-[#c3c0ff]/20 text-[#c3c0ff]'
                            : item.subject === 'Chemistry'
                            ? 'bg-emerald-400/20 text-emerald-300'
                            : 'bg-[#4cd7f6]/20 text-[#4cd7f6]'
                        }`}
                      >
                        {item.subject} • {item.chapter}
                      </span>
                      {item.highYield && (
                        <span className="flex items-center gap-1 text-[10px] font-['JetBrains_Mono'] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                          <Sparkles className="w-3 h-3" /> High Yield
                        </span>
                      )}
                    </div>
                    <h4 className="font-['Space_Grotesk'] text-base font-bold text-white">
                      {item.title}
                    </h4>
                  </div>

                  <button
                    onClick={() => handleCopyFormula(item)}
                    className="shrink-0 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#a3a8be] hover:text-white border border-white/5 transition-all text-xs flex items-center gap-1"
                    title="Copy formula"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[10px] font-['JetBrains_Mono'] text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-['JetBrains_Mono']">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Mathematical Formula Display */}
                <div className="p-3.5 rounded-xl bg-[#0c0e13] border border-white/5 font-['JetBrains_Mono'] text-sm sm:text-base text-[#4cd7f6] font-semibold tracking-wide overflow-x-auto">
                  {item.formula}
                </div>

                {/* Conditions & Variables */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-['JetBrains_Mono'] text-[#a3a8be]">
                  <div className="p-2.5 rounded bg-black/20 border border-white/5">
                    <span className="text-[#70758e] block text-[10px] uppercase mb-0.5">
                      Applicability Condition:
                    </span>
                    <span>{item.conditions}</span>
                  </div>
                  <div className="p-2.5 rounded bg-black/20 border border-white/5">
                    <span className="text-[#70758e] block text-[10px] uppercase mb-0.5">
                      Variables &amp; Quantities:
                    </span>
                    <span>{item.variables}</span>
                  </div>
                </div>

                {/* High-Yield Tip */}
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 font-['Manrope'] flex items-start gap-2">
                  <span className="text-amber-400 font-bold font-['JetBrains_Mono']">⚡ EXAM TIP:</span>
                  <span>{item.examTip}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-[#161822] flex items-center justify-between text-xs font-['JetBrains_Mono'] text-[#70758e]">
          <span>Showing {filteredFormulas.length} curated formulas</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium"
          >
            Close Sheet
          </button>
        </div>
      </div>
    </div>
  );
};
