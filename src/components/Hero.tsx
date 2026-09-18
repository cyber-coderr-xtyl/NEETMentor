import React from 'react';
import { ArrowDownRight, ArrowRight, BookOpen, Clock, Activity, CheckCircle2, Sparkles, Target } from 'lucide-react';

interface HeroProps {
  onOpenTimer: () => void;
  onOpenScoreCalc: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTimer, onOpenScoreCalc }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden" id="overview">
      {/* Ambient Atmospheric Glows */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#635bff]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#4cd7f6]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-[#571bc1]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Bio & Academics */}
        <div className="lg:col-span-7 flex flex-col z-10">
          {/* Status Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1f25] border border-[#635bff]/30 text-[#c3c0ff] font-['JetBrains_Mono'] text-xs uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-ping" />
              11th PCB Major
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#c7c4d8] font-['JetBrains_Mono'] text-xs uppercase">
              <Target className="w-3.5 h-3.5 text-[#4cd7f6]" />
              Target: AIIMS New Delhi
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#c7c4d8] font-['JetBrains_Mono'] text-xs uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Daily Problem Solver
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Varun Thakur <span className="text-white/40 font-light">—</span> <br />
            <span className="bg-gradient-to-r from-white via-[#c3c0ff] to-[#4cd7f6] bg-clip-text text-transparent">
              Class 11 NEET Aspirant &amp; Future Medical Scholar
            </span>
          </h1>

          {/* Tagline & Context */}
          <p className="font-['Manrope'] text-base sm:text-lg text-[#a3a8be] max-w-2xl leading-relaxed mb-8">
            Navigating the Class 11 CBSE/NCERT curriculum with uncompromising conceptual rigor across Physics Mechanics, Chemistry Reaction Matrices, and Botany/Zoology line-by-line synthesis. Dedicated to clinical excellence and securing a seat at premier medical institutes like AIIMS New Delhi.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#modules"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#635bff] text-white font-['Manrope'] text-sm font-semibold shadow-lg shadow-[#635bff]/30 hover:bg-[#5249e0] hover:-translate-y-0.5 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore Subject Notes &amp; Formula Sheets</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenScoreCalc}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-['Manrope'] text-sm font-medium transition-all group"
            >
              <Target className="w-4 h-4 text-[#4cd7f6]" />
              <span>Simulate NEET Mock Score</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenTimer}
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-[#1e1f25] hover:bg-[#282a33] border border-white/10 text-[#acedff] font-['JetBrains_Mono'] text-xs transition-all"
            >
              <Clock className="w-4 h-4 text-[#4cd7f6]" />
              <span>50m Study Sprint</span>
            </button>
          </div>

          {/* Micro Trust Indicators */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs font-['JetBrains_Mono'] text-[#70758e]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#4cd7f6]" />
              <span>100% NCERT Exemplar &amp; PYQs</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>Zero Backlog Policy</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              <span>Weekly Sunday Full Mocks</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Profile / Goal Poster Card */}
        <div className="lg:col-span-5 flex justify-center z-10">
          <div className="relative w-full max-w-sm rounded-2xl p-3 bg-[#16181f]/90 border border-white/15 shadow-2xl shadow-black/60 group">
            <div className="relative w-full h-[450px] rounded-xl overflow-hidden bg-black flex items-center justify-center">
              <img
                src="/assets/aiims_mbbs.svg"
                alt="AIIMS M.B.B.S Target Goal Poster"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 pointer-events-none" />

              {/* Top Float Badge */}
              <div className="absolute top-4 left-4 right-4 p-3 bg-[#111318]/90 backdrop-blur-md rounded-xl border border-white/15 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4cd7f6] animate-pulse" />
                  <span className="font-['JetBrains_Mono'] text-xs text-white font-medium">
                    NEET 2026/27 TRACKER
                  </span>
                </div>
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#c3c0ff] uppercase bg-[#635bff]/20 border border-[#635bff]/30 px-2 py-0.5 rounded-md font-semibold">
                  Active Sprint
                </span>
              </div>

              {/* Middle Floating Badge: Focus Chapter */}
              <div className="absolute top-20 right-4 p-2.5 bg-[#0c0e13]/85 backdrop-blur-md rounded-lg border border-white/10 flex items-center gap-2">
                <span className="text-[10px] font-['JetBrains_Mono'] text-[#a3a8be]">Current:</span>
                <span className="text-[11px] font-['JetBrains_Mono'] text-[#acedff] font-semibold">Rotational Motion</span>
              </div>

              {/* Bottom Floating Stats Panel */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#111318]/95 backdrop-blur-md rounded-xl border border-white/15 shadow-xl">
                <div className="grid grid-cols-3 gap-2 text-center divide-x divide-white/10">
                  <div>
                    <span className="font-['JetBrains_Mono'] text-[10px] text-[#a3a8be] uppercase block">
                      Daily Study
                    </span>
                    <span className="font-['Space_Grotesk'] text-lg text-[#c3c0ff] font-bold">
                      8.5 Hrs
                    </span>
                  </div>
                  <div>
                    <span className="font-['JetBrains_Mono'] text-[10px] text-[#a3a8be] uppercase block">
                      NCERT Line/Line
                    </span>
                    <span className="font-['Space_Grotesk'] text-lg text-[#4cd7f6] font-bold">
                      92%
                    </span>
                  </div>
                  <div>
                    <span className="font-['JetBrains_Mono'] text-[10px] text-[#a3a8be] uppercase block">
                      Weekly DPPs
                    </span>
                    <span className="font-['Space_Grotesk'] text-lg text-[#d0bcff] font-bold">
                      700+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
