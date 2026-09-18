import React, { useState } from 'react';
import { FLASHCARDS_DATA, Flashcard } from '../data/flashcardsData';
import {
  RotateCw,
  CheckCircle2,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  Sparkles,
  HelpCircle,
  BookOpen,
  Award
} from 'lucide-react';

export const FlashcardsPage: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<'All' | 'Biology' | 'Physics' | 'Chemistry'>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // Local storage for mastered card IDs
  const [masteredIds, setMasteredIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('varun_mastered_flashcards');
    return saved ? JSON.parse(saved) : ['bio-1', 'chem-1'];
  });

  const filteredCards = FLASHCARDS_DATA.filter((card) => {
    if (selectedSubject === 'All') return true;
    return card.subject === selectedSubject;
  });

  const safeIndex = Math.min(currentIndex, Math.max(0, filteredCards.length - 1));
  const currentCard: Flashcard | undefined = filteredCards[safeIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setShowHint(false);
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setShowHint(false);
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setShowHint(false);
    const randomIndex = Math.floor(Math.random() * filteredCards.length);
    setCurrentIndex(randomIndex);
  };

  const toggleMastered = (id: string) => {
    let updated: string[];
    if (masteredIds.includes(id)) {
      updated = masteredIds.filter((item) => item !== id);
    } else {
      updated = [...masteredIds, id];
    }
    setMasteredIds(updated);
    localStorage.setItem('varun_mastered_flashcards', JSON.stringify(updated));
  };

  const isCurrentMastered = currentCard ? masteredIds.includes(currentCard.id) : false;

  return (
    <div className="space-y-12 pb-16 pt-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-['JetBrains_Mono'] text-xs text-[#4cd7f6] uppercase tracking-widest block mb-2 font-semibold">
            Active Recall System // Flashcards Hub
          </span>
          <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold text-white tracking-tight">
            NCERT Active Recall Flashcards
          </h1>
          <p className="font-['Manrope'] text-sm sm:text-base text-[#a3a8be] max-w-2xl mt-3 leading-relaxed">
            Spaced repetition deck for rapid concept recall across Biology anatomical mechanisms, Chemistry reagent reactions, and Physics rotational dynamics.
          </p>
        </div>

        {/* Progress Badge */}
        <div className="flex items-center gap-3 p-3 bg-[#14161f] rounded-2xl border border-white/10 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="font-['Space_Grotesk'] text-sm font-bold text-white">
              {masteredIds.length} / {FLASHCARDS_DATA.length} Mastered
            </div>
            <div className="font-['JetBrains_Mono'] text-xs text-[#a3a8be]">
              Active Retention Deck
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 p-1 bg-[#16181f] rounded-xl border border-white/10 text-xs font-['JetBrains_Mono']">
          {(['All', 'Biology', 'Chemistry', 'Physics'] as const).map((subj) => (
            <button
              key={subj}
              onClick={() => {
                setSelectedSubject(subj);
                setCurrentIndex(0);
                setIsFlipped(false);
                setShowHint(false);
              }}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                selectedSubject === subj
                  ? 'bg-[#635bff] text-white font-bold shadow-md shadow-[#635bff]/25'
                  : 'text-[#a3a8be] hover:text-white'
              }`}
            >
              {subj} ({subj === 'All' ? FLASHCARDS_DATA.length : FLASHCARDS_DATA.filter((c) => c.subject === subj).length})
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#a3a8be]">
          <span>Card {safeIndex + 1} of {filteredCards.length}</span>
          <button
            onClick={handleShuffle}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
            title="Random Card"
          >
            <Shuffle className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Flashcard Stage */}
      {currentCard ? (
        <div className="space-y-6">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="relative w-full min-h-[360px] sm:min-h-[400px] rounded-3xl p-8 bg-gradient-to-b from-[#161822] to-[#10121a] border border-white/15 hover:border-white/25 cursor-pointer shadow-2xl transition-all duration-300 flex flex-col justify-between group select-none"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={`text-[10px] font-['JetBrains_Mono'] font-bold px-2.5 py-1 rounded-md uppercase ${
                    currentCard.subject === 'Biology'
                      ? 'bg-[#4cd7f6]/20 text-[#4cd7f6]'
                      : currentCard.subject === 'Physics'
                      ? 'bg-[#c3c0ff]/20 text-[#c3c0ff]'
                      : 'bg-emerald-400/20 text-emerald-300'
                  }`}
                >
                  {currentCard.subject} • {currentCard.chapter}
                </span>
                {currentCard.highYield && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-['JetBrains_Mono'] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    <Sparkles className="w-3 h-3" /> High Yield
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#a3a8be]">
                <RotateCw className="w-3.5 h-3.5 text-[#4cd7f6] group-hover:rotate-180 transition-transform duration-500" />
                <span>{isFlipped ? 'Answer View' : 'Question View (Click to Flip)'}</span>
              </div>
            </div>

            {/* Card Body */}
            <div className="my-auto py-6">
              {!isFlipped ? (
                <div className="space-y-4">
                  <span className="text-xs font-['JetBrains_Mono'] text-[#70758e] uppercase tracking-wider block">
                    Target Concept Question:
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug">
                    {currentCard.front}
                  </h3>
                  {showHint && currentCard.hint && (
                    <div className="p-3.5 rounded-xl bg-amber-400/10 border border-amber-400/20 text-xs font-['Manrope'] text-amber-200 animate-fadeIn flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{currentCard.hint}</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  <span className="text-xs font-['JetBrains_Mono'] text-emerald-400 uppercase tracking-wider block">
                    NCERT Verified Solution:
                  </span>
                  <div className="font-['Manrope'] text-base sm:text-lg text-white leading-relaxed whitespace-pre-line bg-[#0c0e13]/60 p-6 rounded-2xl border border-white/5">
                    {currentCard.back}
                  </div>
                </div>
              )}
            </div>

            {/* Card Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-['JetBrains_Mono'] text-[#a3a8be]">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowHint(!showHint);
                }}
                className="hover:text-white text-amber-400 flex items-center gap-1.5"
              >
                <HelpCircle className="w-4 h-4" />
                <span>{showHint ? 'Hide Hint' : 'Reveal Hint'}</span>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMastered(currentCard.id);
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                  isCurrentMastered
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-white/5 hover:bg-white/10 text-white'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{isCurrentMastered ? 'Mastered Concept' : 'Mark as Mastered'}</span>
              </button>
            </div>
          </div>

          {/* Navigation Controls Bar */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrev}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#14161f] hover:bg-white/10 border border-white/10 text-white text-xs font-['JetBrains_Mono'] transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#635bff] hover:bg-[#5249e0] text-white text-xs font-['JetBrains_Mono'] font-bold shadow-lg shadow-[#635bff]/25 transition-all"
            >
              <RotateCw className="w-4 h-4" />
              <span>Flip Card</span>
            </button>

            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#14161f] hover:bg-white/10 border border-white/10 text-white text-xs font-['JetBrains_Mono'] transition-all"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="p-12 text-center text-[#a3a8be]">No cards found for this subject.</div>
      )}
    </div>
  );
};
