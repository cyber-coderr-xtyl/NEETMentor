import React from 'react';
import { Brain, HelpCircle, BarChart3, AlertTriangle, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface PreparationStrategyProps {
  onOpenTrapLog: () => void;
}

export const PreparationStrategy: React.FC<PreparationStrategyProps> = ({ onOpenTrapLog }) => {
  return (
    <section className="py-20 border-t border-white/10 relative" id="strategy">
      <div className="flex flex-col mb-12">
        <span className="font-['JetBrains_Mono'] text-xs text-[#c3c0ff] uppercase tracking-widest mb-2 font-semibold">
          Pillars // 03
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Academic Discipline &amp; Preparation Strategy
          </h2>
          <button
            onClick={onOpenTrapLog}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 font-['JetBrains_Mono'] text-xs transition-all shrink-0 self-start md:self-auto"
          >
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            <span>Open Error Logbook &amp; Exam Traps</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <p className="font-['Manrope'] text-sm sm:text-base text-[#a3a8be] max-w-2xl mt-4 leading-relaxed">
          A deterministic blueprint developed to eliminate cognitive drift, build surgical accuracy under timed constraints, and guarantee conceptual retention through Class 11 and Class 12.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pillar 1 */}
        <div className="bg-[#14161f] p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:bg-[#181a24] transition-all group border border-white/10 shadow-xl">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#635bff]/20 text-[#c3c0ff] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6 text-[#4cd7f6]" />
            </div>
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#70758e] uppercase block mb-1">
              01 / FOUNDATION
            </span>
            <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-3">
              Conceptual Rigor
            </h3>
            <p className="font-['Manrope'] text-sm text-[#a3a8be] mb-6 leading-relaxed">
              NCERT-centric theory deep dives with daily active recall and spaced repetition schedules to ensure zero blind spots across scientific terminology, scientist dates, and tabular values.
            </p>
          </div>

          <ul className="font-['JetBrains_Mono'] text-xs text-[#e2e2e9] space-y-2.5 pt-4 border-t border-white/10">
            <li className="flex items-center gap-2">
              <span className="text-[#4cd7f6] font-bold">›</span>
              <span>3-Stage Spaced Revision Cycle (Day 1, 7, 21)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#4cd7f6] font-bold">›</span>
              <span>Feynman Technique Note Formulation</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#4cd7f6] font-bold">›</span>
              <span>Diagram Redraws From Memory (Zero Cheating)</span>
            </li>
          </ul>
        </div>

        {/* Pillar 2 */}
        <div className="bg-[#14161f] p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:bg-[#181a24] transition-all group border border-white/10 shadow-xl">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#4cd7f6]/15 text-[#4cd7f6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <HelpCircle className="w-6 h-6 text-[#4cd7f6]" />
            </div>
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#70758e] uppercase block mb-1">
              02 / PRACTICE
            </span>
            <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-3">
              Daily Question Practice (DPPs)
            </h3>
            <p className="font-['Manrope'] text-sm text-[#a3a8be] mb-6 leading-relaxed">
              140+ MCQs daily across PYQs (Previous Year Questions) and standard question banks (H.C. Verma, N. Awasthi, MTG) to train instantaneous pattern recognition and eliminate calculation lag.
            </p>
          </div>

          <ul className="font-['JetBrains_Mono'] text-xs text-[#e2e2e9] space-y-2.5 pt-4 border-t border-white/10">
            <li className="flex items-center gap-2">
              <span className="text-[#c3c0ff] font-bold">›</span>
              <span>50 Bio + 45 Physics + 45 Chemistry / day</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#c3c0ff] font-bold">›</span>
              <span>Strict 50-Second Countdown per Physics MCQ</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#c3c0ff] font-bold">›</span>
              <span>Elimination Technique for Assertion-Reasoning</span>
            </li>
          </ul>
        </div>

        {/* Pillar 3 */}
        <div className="bg-[#14161f] p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:bg-[#181a24] transition-all group border border-white/10 shadow-xl">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#c3c0ff]/15 text-[#c3c0ff] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-6 h-6 text-[#c3c0ff]" />
            </div>
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#70758e] uppercase block mb-1">
              03 / TESTING &amp; AUDIT
            </span>
            <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-3">
              Mock Tests &amp; Error Analysis
            </h3>
            <p className="font-['Manrope'] text-sm text-[#a3a8be] mb-6 leading-relaxed">
              Weekly full-length Sunday mocks under strict 2:00 PM – 5:20 PM exam conditions, followed by rigorous post-exam audit categorizing errors into silly vs conceptual traps.
            </p>
          </div>

          <ul className="font-['JetBrains_Mono'] text-xs text-[#e2e2e9] space-y-2.5 pt-4 border-t border-white/10">
            <li className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">›</span>
              <span>Exact NTA 3 Hr 20 Min Timer Discipline</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">›</span>
              <span>2-Hour Post-Test Error Logbook Documentation</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">›</span>
              <span>Target Benchmark: Consistent 680+ / 720</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
