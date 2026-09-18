import React, { useState } from 'react';
import { TARGET_COLLEGES, BOOKS_MANIFEST } from '../data/portfolioData';
import { TargetCollege, BookResource } from '../types';
import { Award, BookOpen, CheckCircle2, ChevronRight, GraduationCap, MapPin, Sparkles, Star } from 'lucide-react';

export const TargetCollegesManifest: React.FC = () => {
  const [selectedCollege, setSelectedCollege] = useState<TargetCollege>(TARGET_COLLEGES[0]);
  const [bookList, setBookList] = useState<BookResource[]>(BOOKS_MANIFEST);

  const toggleBookStatus = (id: string) => {
    setBookList((prev) =>
      prev.map((book) => {
        if (book.id === id) {
          const nextStatus =
            book.status === 'Active Solving'
              ? 'Mastered'
              : book.status === 'Mastered'
              ? 'Revision Phase'
              : 'Active Solving';
          return { ...book, status: nextStatus };
        }
        return book;
      })
    );
  };

  return (
    <section className="py-20 border-t border-white/10 relative" id="target-colleges">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#4cd7f6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="bg-[#14161f] rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/10 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Mission, Target Institutions */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="font-['JetBrains_Mono'] text-xs text-[#c3c0ff] uppercase tracking-widest block mb-2 font-semibold">
                Vision &amp; Ambition // 04
              </span>
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Unwavering dedication to the medical calling &amp; clinical excellence.
              </h2>
              <div className="space-y-4 text-[#a3a8be] font-['Manrope'] text-sm sm:text-base leading-relaxed">
                <p>
                  Preparing for NEET-UG isn&apos;t simply about cracking a competitive cutoff; it is about cultivating the ironclad discipline, physical endurance, and deep scientific intuition required to serve human lives in medicine.
                </p>
                <p>
                  Balancing Class 11 CBSE school exams while mastering advanced competitive depth across Physics vector numericals, Organic reaction mechanisms, and exhaustive NCERT Zoology &amp; Botany syllabi.
                </p>
              </div>
            </div>

            {/* Target Medical Institutions Selectable List */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-['JetBrains_Mono'] text-xs text-[#70758e] uppercase tracking-wider">
                  Target Medical Institutions (Click to inspect)
                </span>
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#4cd7f6]">
                  NEET All India Quota
                </span>
              </div>

              {/* Institution Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {TARGET_COLLEGES.map((college) => {
                  const isSelected = selectedCollege.id === college.id;
                  return (
                    <button
                      key={college.id}
                      onClick={() => setSelectedCollege(college)}
                      className={`text-left p-3.5 rounded-xl border transition-all ${
                        isSelected
                          ? 'bg-[#1c1f2b] border-[#4cd7f6] shadow-lg shadow-[#4cd7f6]/10 ring-1 ring-[#4cd7f6]/50'
                          : 'bg-[#0f1118] border-white/5 hover:border-white/20 hover:bg-[#161822]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-['Space_Grotesk'] text-sm font-bold text-white flex items-center gap-1.5">
                          {college.shortCode}
                          {college.id === 'aiims-delhi' && (
                            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          )}
                        </span>
                        <span className="font-['JetBrains_Mono'] text-[10px] text-[#c3c0ff] bg-[#635bff]/20 px-2 py-0.5 rounded">
                          {college.neetScoreTarget}
                        </span>
                      </div>
                      <div className="text-[11px] font-['JetBrains_Mono'] text-[#70758e] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#4cd7f6]" />
                        <span>{college.city}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Institution Detail Spotlight */}
              <div className="p-5 rounded-2xl bg-[#0e1017] border border-[#4cd7f6]/30 shadow-inner">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-['Space_Grotesk'] text-base font-bold text-white">
                    {selectedCollege.name}
                  </span>
                  <span className="font-['JetBrains_Mono'] text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#4cd7f6]/20 text-[#acedff]">
                    Cutoff: {selectedCollege.neetCutoffRank}
                  </span>
                </div>
                <div className="text-xs font-['JetBrains_Mono'] text-[#4cd7f6] italic mb-3">
                  &ldquo;{selectedCollege.motto}&rdquo;
                </div>
                <p className="font-['Manrope'] text-xs sm:text-sm text-[#c7c4d8] leading-relaxed mb-3">
                  {selectedCollege.specialtyHighlight}
                </p>
                <div className="flex items-center gap-4 text-xs font-['JetBrains_Mono'] text-[#a3a8be] pt-2 border-t border-white/10">
                  <span>MBBS Intake: <strong className="text-white">{selectedCollege.mbbsSeats} Seats</strong></span>
                  <span>•</span>
                  <span>Target Score: <strong className="text-emerald-400">{selectedCollege.neetScoreTarget}</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: ASPIRANT_MANIFEST.md & Book Stack */}
          <div className="lg:col-span-5 bg-[#0b0d13] p-6 sm:p-7 rounded-2xl border border-white/15 shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-['JetBrains_Mono'] text-xs text-[#70758e]">
                ASPIRANT_MANIFEST.md
              </span>
            </div>

            {/* Book Stack List with Interactive Status */}
            <div className="space-y-3.5 font-['JetBrains_Mono'] text-xs">
              <div className="text-[11px] text-[#70758e] uppercase flex justify-between">
                <span>Curated Study Arsenal</span>
                <span className="text-[10px] text-[#a3a8be]">Click pill to cycle status</span>
              </div>

              {bookList.map((book) => (
                <div
                  key={book.id}
                  className="p-3 rounded-xl bg-[#14161f] border border-white/5 hover:border-white/15 transition-all"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-white truncate max-w-[70%]">
                      {book.title}
                    </span>
                    <button
                      onClick={() => toggleBookStatus(book.id)}
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-all cursor-pointer ${
                        book.status === 'Mastered'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : book.status === 'Active Solving'
                          ? 'bg-[#635bff]/20 text-[#c3c0ff] border border-[#635bff]/30'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      }`}
                      title="Click to toggle status"
                    >
                      {book.status}
                    </button>
                  </div>
                  <div className="text-[11px] text-[#4cd7f6] mb-1">
                    {book.authorOrPublisher} ({book.subject})
                  </div>
                  <p className="text-[11px] text-[#70758e] leading-snug font-['Manrope']">
                    {book.notes}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats Card */}
            <div className="mt-6 p-4 rounded-xl bg-[#14161f] border border-white/10 flex items-center justify-between">
              <div>
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#4cd7f6] uppercase block font-semibold">
                  Total Questions Solved
                </span>
                <span className="font-['Space_Grotesk'] text-xl font-bold text-white">
                  12,500+ Solved
                </span>
              </div>
              <div className="text-right">
                <span className="font-['JetBrains_Mono'] text-[10px] text-amber-400 uppercase block font-semibold">
                  Consistency
                </span>
                <span className="font-['Space_Grotesk'] text-xl font-bold text-amber-300">
                  98% Streak
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
