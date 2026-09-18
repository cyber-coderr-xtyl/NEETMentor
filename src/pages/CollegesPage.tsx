import React from 'react';
import { TargetCollegesManifest } from '../components/TargetCollegesManifest';
import { Award, Compass, Flag, Shield, Sparkles, Star } from 'lucide-react';

export const CollegesPage: React.FC = () => {
  const milestoneRoadmap = [
    {
      phase: 'Phase 01: Class 11 Conceptual Consolidation',
      timeline: 'Current – Dec 2025',
      target: 'Zero Backlogs across Physics Mechanics, Chemistry GOC & Cell/Physiology. Minimum 12,000+ MCQs solved.',
      status: 'In Progress (Active Sprint)',
      badgeColor: 'bg-[#4cd7f6]/20 text-[#4cd7f6] border-[#4cd7f6]/30',
    },
    {
      phase: 'Phase 02: Class 12 Syllabus Sprint',
      timeline: 'Jan 2026 – Oct 2026',
      target: 'Complete Class 12 NCERT (Electrostatics, Optics, Genetics, Organic functional groups) alongside weekly Class 11 revision.',
      status: 'Upcoming',
      badgeColor: 'bg-[#635bff]/20 text-[#c3c0ff] border-[#635bff]/30',
    },
    {
      phase: 'Phase 03: Full Mock Test Marathon & AIIMS Delhi Push',
      timeline: 'Nov 2026 – April 2027',
      target: '50+ Full-length 720-mark Sunday test simulations, strict negative-marking analysis, targeting consistent 700+ marks.',
      status: 'Final Lap',
      badgeColor: 'bg-amber-400/20 text-amber-300 border-amber-400/30',
    },
  ];

  return (
    <div className="space-y-16 pb-16 pt-4">
      {/* Header */}
      <div className="pb-8 border-b border-white/10">
        <span className="font-['JetBrains_Mono'] text-xs text-emerald-400 uppercase tracking-widest block mb-2 font-semibold">
          Medical Aspirations // Page 05
        </span>
        <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Target Colleges &amp; Study Arsenal
        </h1>
        <p className="font-['Manrope'] text-sm sm:text-base text-[#a3a8be] max-w-2xl mt-3 leading-relaxed">
          The ultimate vision: Securing a general category rank under AIR 55 for All India Institute of Medical Sciences (AIIMS) New Delhi and other premier tertiary medical academies.
        </p>
      </div>

      {/* Target Colleges & Books Manifest Component */}
      <TargetCollegesManifest />

      {/* 2-Year Strategic Roadmap */}
      <section className="pt-8 border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="font-['JetBrains_Mono'] text-xs text-[#c3c0ff] uppercase tracking-widest block mb-1">
              Strategic Timeline
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white">
              NEET 2026/2027 Milestone Roadmap
            </h2>
          </div>
          <span className="font-['JetBrains_Mono'] text-xs text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-lg border border-amber-400/20">
            Target AIR: 1 – 50
          </span>
        </div>

        <div className="space-y-4">
          {milestoneRoadmap.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#14161f] border border-white/10 hover:border-white/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-['Space_Grotesk'] text-lg font-bold text-white">
                    {item.phase}
                  </span>
                  <span className={`font-['JetBrains_Mono'] text-[10px] px-2.5 py-0.5 rounded-full border font-semibold ${item.badgeColor}`}>
                    {item.status}
                  </span>
                </div>
                <p className="font-['Manrope'] text-sm text-[#a3a8be] max-w-2xl leading-relaxed">
                  {item.target}
                </p>
              </div>

              <div className="shrink-0 font-['JetBrains_Mono'] text-xs text-[#4cd7f6] bg-[#0c0e13] px-4 py-2 rounded-xl border border-white/5">
                {item.timeline}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
