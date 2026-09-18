import React, { useState } from 'react';
import { MNEMONICS_DATA, MnemonicItem } from '../data/mnemonicsData';
import {
  Lightbulb,
  Copy,
  Check,
  Search,
  Sparkles,
  Bookmark,
  Share2
} from 'lucide-react';

export const MnemonicsPage: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<'All' | 'Biology' | 'Chemistry' | 'Physics'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredMnemonics = MNEMONICS_DATA.filter((item) => {
    const matchesSubject = selectedSubject === 'All' || item.subject === selectedSubject;
    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.mnemonic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.explanation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesQuery;
  });

  const handleCopy = (item: MnemonicItem) => {
    navigator.clipboard.writeText(`${item.title}: "${item.mnemonic}"\nExplanation: ${item.explanation}`);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-12 pb-16 pt-4">
      {/* Header */}
      <div className="pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-['JetBrains_Mono'] text-xs text-[#acedff] uppercase tracking-widest block mb-2 font-semibold">
            Memory Engineering // Mnemonics Wall
          </span>
          <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold text-white tracking-tight">
            High-Yield NEET Mnemonics
          </h1>
          <p className="font-['Manrope'] text-sm sm:text-base text-[#a3a8be] max-w-2xl mt-3 leading-relaxed">
            Proven cognitive shortcuts for high-stress recall: Prophase I sub-stages, essential amino acids, reactivity series, and rotational inertia rankings.
          </p>
        </div>

        <div className="flex items-center gap-2 p-2 bg-[#14161f] rounded-2xl border border-white/10 shrink-0">
          <Lightbulb className="w-5 h-5 text-amber-400" />
          <span className="font-['JetBrains_Mono'] text-xs text-white font-medium">
            {MNEMONICS_DATA.length} Standard Memory Formulas
          </span>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Subject Filter */}
        <div className="flex items-center gap-1.5 p-1 bg-[#16181f] rounded-xl border border-white/10 text-xs font-['JetBrains_Mono'] w-full sm:w-auto">
          {(['All', 'Biology', 'Chemistry', 'Physics'] as const).map((subj) => (
            <button
              key={subj}
              onClick={() => setSelectedSubject(subj)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedSubject === subj
                  ? 'bg-[#635bff] text-white font-bold shadow-md'
                  : 'text-[#a3a8be] hover:text-white'
              }`}
            >
              {subj}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-[#70758e] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search mnemonics or chapters..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#14161f] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs font-['JetBrains_Mono'] text-white focus:outline-none focus:border-[#4cd7f6]"
          />
        </div>
      </div>

      {/* Mnemonics Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMnemonics.map((item) => {
          const isCopied = copiedId === item.id;
          return (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-[#14161f] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-4 shadow-xl group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-['JetBrains_Mono'] px-2.5 py-0.5 rounded font-bold uppercase ${
                      item.subject === 'Biology'
                        ? 'bg-[#4cd7f6]/15 text-[#4cd7f6]'
                        : item.subject === 'Physics'
                        ? 'bg-[#c3c0ff]/15 text-[#c3c0ff]'
                        : 'bg-emerald-400/15 text-emerald-300'
                    }`}
                  >
                    {item.subject}
                  </span>

                  <button
                    onClick={() => handleCopy(item)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#a3a8be] hover:text-white transition-colors"
                    title="Copy Mnemonic"
                  >
                    {isCopied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <h3 className="font-['Space_Grotesk'] text-base font-bold text-white leading-snug">
                  {item.title}
                </h3>

                {/* The Catchphrase */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#1d202d] to-[#161824] border border-white/10">
                  <span className="text-[10px] font-['JetBrains_Mono'] text-[#70758e] uppercase block mb-1">
                    Mnemonic Catchphrase:
                  </span>
                  <div className="font-['Space_Grotesk'] text-base font-bold text-amber-300 tracking-wide">
                    "{item.mnemonic}"
                  </div>
                </div>

                {/* Explanation */}
                <div className="text-xs font-['Manrope'] text-[#a3a8be] leading-relaxed whitespace-pre-line pt-1">
                  {item.explanation}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-['JetBrains_Mono'] px-2 py-0.5 rounded bg-white/5 text-[#70758e]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
