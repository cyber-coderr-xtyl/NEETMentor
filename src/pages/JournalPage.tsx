import React, { useState } from 'react';
import { JOURNAL_ARTICLES, JournalArticle } from '../data/journalData';
import {
  BookOpen,
  Calendar,
  Clock,
  Sparkles,
  ArrowRight,
  Stethoscope,
  HeartPulse,
  Brain,
  ChevronRight
} from 'lucide-react';

export const JournalPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(JOURNAL_ARTICLES[0]);

  const categories = ['All', 'Nephrology', 'Cardiovascular', 'Medical Philosophy'];

  const filtered = JOURNAL_ARTICLES.filter((art) => {
    if (selectedCategory === 'All') return true;
    return art.category === selectedCategory;
  });

  return (
    <div className="space-y-12 pb-16 pt-4">
      {/* Header */}
      <div className="pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-['JetBrains_Mono'] text-xs text-[#c3c0ff] uppercase tracking-widest block mb-2 font-semibold">
            Clinical Curiosity // Scholar Reflections
          </span>
          <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Medical Scholar Journal
          </h1>
          <p className="font-['Manrope'] text-sm sm:text-base text-[#a3a8be] max-w-2xl mt-3 leading-relaxed">
            Bridging Class 11 theoretical PCB concepts with real-world clinical pathophysiology, hospital medicine, and the personal ethos driving my pursuit of AIIMS New Delhi.
          </p>
        </div>

        <div className="flex items-center gap-3 p-3 bg-[#14161f] rounded-2xl border border-white/10 shrink-0">
          <Stethoscope className="w-5 h-5 text-[#4cd7f6]" />
          <div>
            <div className="font-['Space_Grotesk'] text-sm font-bold text-white">
              Varun Thakur
            </div>
            <div className="font-['JetBrains_Mono'] text-xs text-[#a3a8be]">
              Future Medical Scholar
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 p-1 bg-[#16181f] rounded-xl border border-white/10 text-xs font-['JetBrains_Mono'] w-fit">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg transition-all ${
              selectedCategory === cat
                ? 'bg-[#635bff] text-white font-bold shadow-md'
                : 'text-[#a3a8be] hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Two-Column Journal Layout: List on Left, Active Article Reader on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Article Index */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-['JetBrains_Mono'] text-[#70758e] uppercase tracking-wider block">
            Published Journal Entries ({filtered.length})
          </span>

          <div className="space-y-3">
            {filtered.map((art) => {
              const isActive = activeArticle?.id === art.id;
              return (
                <button
                  key={art.id}
                  onClick={() => setActiveArticle(art)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all space-y-2 block ${
                    isActive
                      ? 'bg-[#181b27] border-[#635bff] shadow-xl shadow-[#635bff]/10'
                      : 'bg-[#14161f] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-['JetBrains_Mono']">
                    <span className="text-[#4cd7f6] font-semibold">{art.category}</span>
                    <span className="text-[#70758e]">{art.readTime}</span>
                  </div>

                  <h3 className="font-['Space_Grotesk'] text-base font-bold text-white leading-snug">
                    {art.title}
                  </h3>

                  <p className="font-['Manrope'] text-xs text-[#a3a8be] line-clamp-2 leading-relaxed">
                    {art.abstract}
                  </p>

                  <div className="flex items-center justify-between pt-2 text-[10px] font-['JetBrains_Mono'] text-[#70758e]">
                    <span>{art.date}</span>
                    <span className="text-[#c3c0ff] flex items-center gap-1">
                      Read Entry <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Reader View */}
        <div className="lg:col-span-7">
          {activeArticle ? (
            <article className="p-8 rounded-3xl bg-[#14161f] border border-white/15 shadow-2xl space-y-6">
              {/* Header of reading pane */}
              <div className="space-y-3 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3 text-xs font-['JetBrains_Mono'] text-[#a3a8be]">
                  <span className="px-2.5 py-1 rounded bg-[#635bff]/20 text-[#c3c0ff] font-bold">
                    {activeArticle.category}
                  </span>
                  <span>•</span>
                  <span>{activeArticle.date}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                </div>

                <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {activeArticle.title}
                </h2>

                <div className="p-4 rounded-xl bg-[#0c0e13] border border-white/5 font-['Manrope'] text-sm italic text-[#c7c4d8] leading-relaxed">
                  "{activeArticle.abstract}"
                </div>
              </div>

              {/* Body Content */}
              <div className="space-y-4 font-['Manrope'] text-sm sm:text-base text-[#d1d5db] leading-relaxed">
                {activeArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* NEET Connection Callout */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#181b28] to-[#131520] border border-[#4cd7f6]/25 space-y-1.5 font-['JetBrains_Mono'] text-xs">
                <div className="flex items-center gap-2 text-[#4cd7f6] font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>Class 11 NEET Connection</span>
                </div>
                <p className="text-[#a3a8be] font-['Manrope'] text-xs leading-relaxed">
                  {activeArticle.neetConnection}
                </p>
              </div>
            </article>
          ) : (
            <div className="p-12 text-center text-[#a3a8be]">Select an entry to read.</div>
          )}
        </div>
      </div>
    </div>
  );
};
