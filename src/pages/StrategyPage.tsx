import React, { useState } from 'react';
import { PreparationStrategy } from '../components/PreparationStrategy';
import { ERROR_TRAPS } from '../data/portfolioData';
import { ErrorTrap } from '../types';
import { AlertTriangle, ShieldAlert, CheckCircle2, Clock, Calendar, Compass, ShieldCheck } from 'lucide-react';
import { ErrorTrapModal } from '../components/ErrorTrapModal';

export const StrategyPage: React.FC = () => {
  const [trapModalOpen, setTrapModalOpen] = useState(false);
  const [activeSubjectFilter, setActiveSubjectFilter] = useState<string>('All');

  const filteredTraps = ERROR_TRAPS.filter((trap) => {
    if (activeSubjectFilter === 'All') return true;
    return trap.subject.toLowerCase() === activeSubjectFilter.toLowerCase();
  });

  const examTimeSlots = [
    { subject: 'Biology (Zoology + Botany)', questions: '90 Questions (out of 100)', allottedTime: '45 Minutes', speed: '30s / Question', color: 'text-[#4cd7f6]' },
    { subject: 'Chemistry (Physical + Organic)', questions: '45 Questions (out of 50)', allottedTime: '50 Minutes', speed: '65s / Question', color: 'text-emerald-400' },
    { subject: 'Physics (Mechanics + Waves)', questions: '45 Questions (out of 50)', allottedTime: '65 Minutes', speed: '85s / Question', color: 'text-[#c3c0ff]' },
    { subject: 'OMR Bubbling & Revision', questions: 'Audit marked reviews', allottedTime: '40 Minutes', speed: 'Zero Mistake Check', color: 'text-amber-400' },
  ];

  return (
    <div className="space-y-16 pb-16 pt-4">
      {/* Header */}
      <div className="pb-8 border-b border-white/10">
        <span className="font-['JetBrains_Mono'] text-xs text-amber-400 uppercase tracking-widest block mb-2 font-semibold">
          Preparation Blueprint // Page 04
        </span>
        <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Strategy &amp; Error Trap Directory
        </h1>
        <p className="font-['Manrope'] text-sm sm:text-base text-[#a3a8be] max-w-2xl mt-3 leading-relaxed">
          The deterministic scientific methodology developed to build unwavering conceptual retention, eliminate silly negative marking, and excel under the 200-minute NTA exam pressure.
        </p>
      </div>

      {/* 3 Pillars Section */}
      <PreparationStrategy onOpenTrapLog={() => setTrapModalOpen(true)} />

      {/* Exam Time Management Architecture */}
      <section className="pt-8 border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="font-['JetBrains_Mono'] text-xs text-[#635bff] uppercase tracking-widest block mb-1">
              Exam Hall Strategy
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white">
              3 Hours 20 Minutes (200 Min) Allocation Blueprint
            </h2>
          </div>
          <span className="font-['JetBrains_Mono'] text-xs text-[#4cd7f6] bg-[#4cd7f6]/10 px-3 py-1.5 rounded-lg border border-[#4cd7f6]/20">
            Sunday 2:00 PM – 5:20 PM Simulation
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {examTimeSlots.map((slot, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#14161f] border border-white/10 flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#70758e] uppercase block mb-1">
                  Phase 0{idx + 1}
                </span>
                <h3 className="font-['Space_Grotesk'] text-base font-bold text-white mb-1">
                  {slot.subject}
                </h3>
                <p className="font-['JetBrains_Mono'] text-xs text-[#a3a8be]">
                  {slot.questions}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 space-y-1">
                <div className={`font-['Space_Grotesk'] text-xl font-bold ${slot.color}`}>
                  {slot.allottedTime}
                </div>
                <div className="font-['JetBrains_Mono'] text-[11px] text-[#70758e]">
                  Target Pace: {slot.speed}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* In-Depth Error Logbook & Trap Catalog */}
      <section className="pt-8 border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="font-['JetBrains_Mono'] text-xs text-rose-400 uppercase tracking-widest block mb-1 font-semibold">
              Anti-Negative Marking Catalog
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white">
              NEET Error Logbook &amp; Trick Question Directory
            </h2>
          </div>

          {/* Subject Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-[#16181f] rounded-xl border border-white/10 text-xs font-['JetBrains_Mono']">
            {['All', 'Physics', 'Chemistry', 'Biology'].map((subj) => (
              <button
                key={subj}
                onClick={() => setActiveSubjectFilter(subj)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeSubjectFilter.toLowerCase() === subj.toLowerCase()
                    ? 'bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30'
                    : 'text-[#a3a8be] hover:text-white'
                }`}
              >
                {subj}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTraps.map((trap) => (
            <div
              key={trap.id}
              className="p-6 rounded-2xl bg-[#14161f] border border-white/10 hover:border-white/20 transition-all space-y-4 shadow-xl"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-['JetBrains_Mono'] px-2.5 py-1 rounded bg-white/10 text-[#c7c4d8] font-semibold uppercase">
                  {trap.subject} • {trap.chapter}
                </span>
                <span className="text-[10px] font-['JetBrains_Mono'] text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                  Avoid -1 Trap
                </span>
              </div>

              <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white">
                {trap.trapTitle}
              </h3>

              <div className="grid grid-cols-1 gap-3 text-xs font-['Manrope']">
                <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/20 space-y-1">
                  <div className="font-['JetBrains_Mono'] text-[10px] text-rose-400 font-bold uppercase flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5" /> Frequent Pitfall
                  </div>
                  <p className="text-rose-200 leading-relaxed">{trap.commonMistake}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 space-y-1">
                  <div className="font-['JetBrains_Mono'] text-[10px] text-emerald-400 font-bold uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Correct Scientific Concept
                  </div>
                  <p className="text-emerald-200 leading-relaxed">{trap.correctConcept}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0c0e13] border border-white/5 font-['JetBrains_Mono'] text-xs text-[#4cd7f6] flex items-start gap-2">
                <span className="font-bold text-[#c3c0ff] shrink-0">Rule of Thumb:</span>
                <span>{trap.ruleOfThumb}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trap Modal */}
      <ErrorTrapModal
        isOpen={trapModalOpen}
        onClose={() => setTrapModalOpen(false)}
      />
    </div>
  );
};
