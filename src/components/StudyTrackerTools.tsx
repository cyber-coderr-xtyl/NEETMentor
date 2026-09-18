import React, { useState, useEffect } from 'react';
import { Clock, Play, Pause, RotateCcw, Flame, CheckCircle, Calculator, Target, Award, Sparkles } from 'lucide-react';

interface DailyQuestions {
  biology: number;
  physics: number;
  chemistry: number;
}

export const StudyTrackerTools: React.FC = () => {
  // --- 1. Focus Timer State ---
  const [timerSubject, setTimerSubject] = useState<'Biology' | 'Physics' | 'Chemistry' | 'Full Mock'>('Physics');
  const [timerMode, setTimerMode] = useState<'sprint50' | 'recall10' | 'rapid25'>('sprint50');
  const [timeLeft, setTimeLeft] = useState<number>(50 * 60);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [completedSessions, setCompletedSessions] = useState<number>(() => {
    return parseInt(localStorage.getItem('varun_completed_sessions') || '3', 10);
  });

  // Handle timer countdown
  useEffect(() => {
    let interval: any = null;
    if (timerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && timerRunning) {
      setTimerRunning(false);
      setCompletedSessions((c) => {
        const updated = c + 1;
        localStorage.setItem('varun_completed_sessions', updated.toString());
        return updated;
      });
      alert(`🎉 Excellent work! ${timerSubject} ${timerMode} study block complete! Take a brief stretch.`);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timeLeft, timerSubject, timerMode]);

  const switchMode = (mode: 'sprint50' | 'recall10' | 'rapid25') => {
    setTimerMode(mode);
    setTimerRunning(false);
    if (mode === 'sprint50') setTimeLeft(50 * 60);
    else if (mode === 'recall10') setTimeLeft(10 * 60);
    else if (mode === 'rapid25') setTimeLeft(25 * 60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // --- 2. Daily DPP Question Tracker State ---
  const [questions, setQuestions] = useState<DailyQuestions>(() => {
    const saved = localStorage.getItem('varun_daily_questions_v1');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return { biology: 42, physics: 36, chemistry: 38 };
  });

  const updateQuestions = (subject: keyof DailyQuestions, delta: number) => {
    setQuestions((prev) => {
      const nextVal = Math.max(0, prev[subject] + delta);
      const updated = { ...prev, [subject]: nextVal };
      localStorage.setItem('varun_daily_questions_v1', JSON.stringify(updated));
      return updated;
    });
  };

  const totalQuestions = questions.biology + questions.physics + questions.chemistry;
  const targetQuestions = 140;
  const percentComplete = Math.min(100, Math.round((totalQuestions / targetQuestions) * 100));

  // --- 3. Mock Score Calculator State ---
  const [bioScore, setBioScore] = useState<number>(345);
  const [physScore, setPhysScore] = useState<number>(165);
  const [chemScore, setChemScore] = useState<number>(170);

  const totalMockScore = bioScore + physScore + chemScore;

  const getTargetCollegeStatus = (score: number) => {
    if (score >= 710) {
      return {
        label: 'AIIMS New Delhi Safe Zone',
        color: 'text-emerald-400',
        bg: 'bg-emerald-400/10 border-emerald-400/30',
        rank: 'Projected AIR 1 - 50',
        tip: 'Top 0.001% level. Continue fine-tuning Physics calculation speed and obscure NCERT botany lines.',
      };
    }
    if (score >= 695) {
      return {
        label: 'AIIMS Delhi / MAMC / JIPMER Contender',
        color: 'text-[#4cd7f6]',
        bg: 'bg-[#4cd7f6]/10 border-[#4cd7f6]/30',
        rank: 'Projected AIR 50 - 200',
        tip: 'Extremely strong. Focus on error notebook traps in GOC and Rotational dynamics.',
      };
    }
    if (score >= 670) {
      return {
        label: 'Premier GMCs (KGMU, AFMC, VMMC) Qualified',
        color: 'text-[#c3c0ff]',
        bg: 'bg-[#c3c0ff]/10 border-[#c3c0ff]/30',
        rank: 'Projected AIR 200 - 1,200',
        tip: 'Great foundation. Push Biology toward 355+ and eliminate silly negative marking to reach 700+.',
      };
    }
    return {
      label: 'Strong National GMC Cutoff Track',
      color: 'text-amber-400',
      bg: 'bg-amber-400/10 border-amber-400/30',
      rank: 'Projected AIR 1,200 - 4,000',
      tip: 'Consolidate high-yield Class 11 mechanics and NCERT tables to leapfrog into 680+.',
    };
  };

  const collegeStatus = getTargetCollegeStatus(totalMockScore);

  return (
    <section className="py-20 border-t border-white/10 relative" id="study-tools">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="font-['JetBrains_Mono'] text-xs text-[#4cd7f6] uppercase tracking-widest block mb-2 font-semibold">
            Interactive Utilities // 02
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Study Suite &amp; NEET Simulator
          </h2>
        </div>
        <p className="font-['JetBrains_Mono'] text-xs text-[#a3a8be] max-w-sm md:text-right">
          Interactive focus timer, daily 140-MCQ question log, and real-time NEET score predictor.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* TOOL 1: FOCUS STUDY TIMER */}
        <div className="lg:col-span-4 bg-[#14161f] rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#635bff]/20 text-[#c3c0ff] flex items-center justify-center">
                  <Clock className="w-4 h-4 text-[#4cd7f6]" />
                </div>
                <div>
                  <h3 className="font-['Space_Grotesk'] text-base font-bold text-white">
                    NEET Focus Sprint
                  </h3>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#a3a8be]">
                    Active Session Engine
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-['JetBrains_Mono'] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                {completedSessions} Sprints Done
              </span>
            </div>

            {/* Subject Selector */}
            <div className="mb-4">
              <label className="text-[10px] font-['JetBrains_Mono'] text-[#70758e] uppercase block mb-1.5">
                Target Subject
              </label>
              <div className="grid grid-cols-4 gap-1 p-1 bg-[#0c0e13] rounded-lg border border-white/5 text-xs font-['JetBrains_Mono']">
                {(['Biology', 'Physics', 'Chemistry', 'Full Mock'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setTimerSubject(s)}
                    className={`py-1 text-[11px] rounded transition-all ${
                      timerSubject === s
                        ? 'bg-[#635bff] text-white font-semibold'
                        : 'text-[#a3a8be] hover:text-white'
                    }`}
                  >
                    {s === 'Full Mock' ? 'Mock' : s}
                  </button>
                ))}
              </div>
            </div>

            {/* Mode Selector */}
            <div className="flex items-center gap-1.5 mb-6 text-[11px] font-['JetBrains_Mono']">
              <button
                onClick={() => switchMode('sprint50')}
                className={`flex-1 py-1.5 rounded-lg border text-center transition-all ${
                  timerMode === 'sprint50'
                    ? 'bg-white/10 border-white/30 text-white font-semibold'
                    : 'border-white/5 text-[#70758e] hover:text-white'
                }`}
              >
                50m Sprint
              </button>
              <button
                onClick={() => switchMode('recall10')}
                className={`flex-1 py-1.5 rounded-lg border text-center transition-all ${
                  timerMode === 'recall10'
                    ? 'bg-white/10 border-white/30 text-white font-semibold'
                    : 'border-white/5 text-[#70758e] hover:text-white'
                }`}
              >
                10m Recall
              </button>
              <button
                onClick={() => switchMode('rapid25')}
                className={`flex-1 py-1.5 rounded-lg border text-center transition-all ${
                  timerMode === 'rapid25'
                    ? 'bg-white/10 border-white/30 text-white font-semibold'
                    : 'border-white/5 text-[#70758e] hover:text-white'
                }`}
              >
                25m Rapid
              </button>
            </div>

            {/* Digital Clock Display */}
            <div className="bg-[#0c0e13] rounded-2xl p-6 border border-white/10 text-center mb-6 relative overflow-hidden shadow-inner">
              <div className="absolute top-2 left-3 font-['JetBrains_Mono'] text-[10px] text-[#70758e] uppercase">
                {timerSubject} • {timerMode}
              </div>
              <div
                className={`font-['JetBrains_Mono'] text-5xl font-bold tracking-tight text-white my-2 ${
                  timerRunning ? 'text-[#4cd7f6]' : ''
                }`}
              >
                {formatTime(timeLeft)}
              </div>
              <div className="text-[11px] font-['JetBrains_Mono'] text-[#a3a8be] flex items-center justify-center gap-1.5">
                <span
                  className={`w-2 h-2 rounded-full ${
                    timerRunning ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                  }`}
                />
                <span>{timerRunning ? 'Concentration Locked' : 'Ready to begin'}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTimerRunning(!timerRunning)}
                className={`flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl font-['Manrope'] text-xs font-semibold shadow-lg transition-all ${
                  timerRunning
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
                    : 'bg-[#635bff] text-white hover:bg-[#5249e0] shadow-[#635bff]/25'
                }`}
              >
                {timerRunning ? (
                  <>
                    <Pause className="w-4 h-4" /> Pause Block
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" /> Start Deep Study
                  </>
                )}
              </button>
              <button
                onClick={() => {
                  setTimerRunning(false);
                  switchMode(timerMode);
                }}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[#a3a8be] hover:text-white transition-all"
                title="Reset timer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="pt-4 mt-5 border-t border-white/5 text-[11px] font-['JetBrains_Mono'] text-[#70758e] text-center">
            Rule: Zero mobile phone checks during 50-minute study blocks.
          </div>
        </div>

        {/* TOOL 2: DAILY QUESTION PRACTICE TRACKER */}
        <div className="lg:col-span-4 bg-[#14161f] rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-300 flex items-center justify-center">
                  <Flame className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-['Space_Grotesk'] text-base font-bold text-white">
                    Daily DPP Question Counter
                  </h3>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#a3a8be]">
                    Target: 140 MCQs / Day
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-['JetBrains_Mono'] bg-amber-400/10 text-amber-300 border border-amber-400/20 px-2 py-0.5 rounded-full">
                {percentComplete}% Done
              </span>
            </div>

            {/* Overall Progress Gauge */}
            <div className="bg-[#0c0e13] p-4 rounded-xl border border-white/5 mb-5">
              <div className="flex items-center justify-between mb-2 font-['JetBrains_Mono'] text-xs">
                <span className="text-[#a3a8be]">Solved Today:</span>
                <span className="text-white font-bold font-['Space_Grotesk'] text-lg">
                  {totalQuestions} <span className="text-[#70758e] font-normal text-xs">/ {targetQuestions} MCQs</span>
                </span>
              </div>
              <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-amber-400 via-[#635bff] to-[#4cd7f6] h-full rounded-full transition-all duration-500"
                  style={{ width: `${percentComplete}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-['JetBrains_Mono'] text-[#70758e] mt-2">
                <span>0</span>
                <span>Goal: 140 MCQs</span>
                <span>180+ Stretch</span>
              </div>
            </div>

            {/* Subject-Wise Counters */}
            <div className="space-y-3">
              {/* Biology */}
              <div className="p-3 bg-[#181a24] rounded-xl border border-white/5 flex items-center justify-between">
                <div>
                  <div className="font-['Space_Grotesk'] text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#4cd7f6]" />
                    Biology (Target: 50)
                  </div>
                  <div className="text-[10px] font-['JetBrains_Mono'] text-[#70758e]">
                    NCERT Fingertips &amp; PYQs
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuestions('biology', -5)}
                    className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 text-white font-['JetBrains_Mono'] text-xs flex items-center justify-center"
                  >
                    -5
                  </button>
                  <span className="font-['Space_Grotesk'] text-base font-bold text-[#4cd7f6] w-9 text-center">
                    {questions.biology}
                  </span>
                  <button
                    onClick={() => updateQuestions('biology', 5)}
                    className="w-7 h-7 rounded-lg bg-[#4cd7f6]/20 hover:bg-[#4cd7f6]/30 text-[#acedff] font-['JetBrains_Mono'] text-xs flex items-center justify-center font-bold"
                  >
                    +5
                  </button>
                </div>
              </div>

              {/* Physics */}
              <div className="p-3 bg-[#181a24] rounded-xl border border-white/5 flex items-center justify-between">
                <div>
                  <div className="font-['Space_Grotesk'] text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#c3c0ff]" />
                    Physics (Target: 45)
                  </div>
                  <div className="text-[10px] font-['JetBrains_Mono'] text-[#70758e]">
                    Mechanics &amp; HC Verma
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuestions('physics', -5)}
                    className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 text-white font-['JetBrains_Mono'] text-xs flex items-center justify-center"
                  >
                    -5
                  </button>
                  <span className="font-['Space_Grotesk'] text-base font-bold text-[#c3c0ff] w-9 text-center">
                    {questions.physics}
                  </span>
                  <button
                    onClick={() => updateQuestions('physics', 5)}
                    className="w-7 h-7 rounded-lg bg-[#635bff]/20 hover:bg-[#635bff]/30 text-[#c3c0ff] font-['JetBrains_Mono'] text-xs flex items-center justify-center font-bold"
                  >
                    +5
                  </button>
                </div>
              </div>

              {/* Chemistry */}
              <div className="p-3 bg-[#181a24] rounded-xl border border-white/5 flex items-center justify-between">
                <div>
                  <div className="font-['Space_Grotesk'] text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Chemistry (Target: 45)
                  </div>
                  <div className="text-[10px] font-['JetBrains_Mono'] text-[#70758e]">
                    GOC, MOT &amp; Stoichiometry
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuestions('chemistry', -5)}
                    className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 text-white font-['JetBrains_Mono'] text-xs flex items-center justify-center"
                  >
                    -5
                  </button>
                  <span className="font-['Space_Grotesk'] text-base font-bold text-emerald-400 w-9 text-center">
                    {questions.chemistry}
                  </span>
                  <button
                    onClick={() => updateQuestions('chemistry', 5)}
                    className="w-7 h-7 rounded-lg bg-emerald-400/20 hover:bg-emerald-400/30 text-emerald-300 font-['JetBrains_Mono'] text-xs flex items-center justify-center font-bold"
                  >
                    +5
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-5 border-t border-white/5 flex items-center justify-between text-[11px] font-['JetBrains_Mono'] text-[#a3a8be]">
            <span>Local Storage Synced</span>
            <button
              onClick={() => {
                const reset = { biology: 0, physics: 0, chemistry: 0 };
                setQuestions(reset);
                localStorage.setItem('varun_daily_questions_v1', JSON.stringify(reset));
              }}
              className="text-[#70758e] hover:text-white underline text-[10px]"
            >
              Reset Day
            </button>
          </div>
        </div>

        {/* TOOL 3: NEET MOCK SCORE CALCULATOR & TARGET ANALYZER */}
        <div className="lg:col-span-4 bg-[#14161f] rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#4cd7f6]/15 text-[#4cd7f6] flex items-center justify-center">
                  <Calculator className="w-4 h-4 text-[#4cd7f6]" />
                </div>
                <div>
                  <h3 className="font-['Space_Grotesk'] text-base font-bold text-white">
                    NEET Score Simulator
                  </h3>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#a3a8be]">
                    Target: 680 - 710 / 720
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-['JetBrains_Mono'] bg-[#635bff]/20 text-[#c3c0ff] px-2 py-0.5 rounded-full font-bold">
                Total: {totalMockScore}/720
              </span>
            </div>

            {/* Score Sliders */}
            <div className="space-y-4 mb-5">
              {/* Biology Slider */}
              <div>
                <div className="flex justify-between text-xs font-['JetBrains_Mono'] mb-1">
                  <span className="text-[#a3a8be]">Biology (Max 360)</span>
                  <span className="text-[#4cd7f6] font-bold">{bioScore} / 360</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="360"
                  step="5"
                  value={bioScore}
                  onChange={(e) => setBioScore(parseInt(e.target.value, 10))}
                  className="w-full accent-[#4cd7f6] cursor-pointer"
                />
              </div>

              {/* Physics Slider */}
              <div>
                <div className="flex justify-between text-xs font-['JetBrains_Mono'] mb-1">
                  <span className="text-[#a3a8be]">Physics (Max 180)</span>
                  <span className="text-[#c3c0ff] font-bold">{physScore} / 180</span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="180"
                  step="5"
                  value={physScore}
                  onChange={(e) => setPhysScore(parseInt(e.target.value, 10))}
                  className="w-full accent-[#635bff] cursor-pointer"
                />
              </div>

              {/* Chemistry Slider */}
              <div>
                <div className="flex justify-between text-xs font-['JetBrains_Mono'] mb-1">
                  <span className="text-[#a3a8be]">Chemistry (Max 180)</span>
                  <span className="text-emerald-400 font-bold">{chemScore} / 180</span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="180"
                  step="5"
                  value={chemScore}
                  onChange={(e) => setChemScore(parseInt(e.target.value, 10))}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Predicted Outcome Card */}
            <div className={`p-4 rounded-xl border ${collegeStatus.bg} space-y-2`}>
              <div className="flex items-center justify-between">
                <span className={`font-['Space_Grotesk'] text-sm font-bold ${collegeStatus.color}`}>
                  {collegeStatus.label}
                </span>
                <span className="font-['JetBrains_Mono'] text-[11px] font-bold px-2 py-0.5 rounded bg-black/40 text-white">
                  {collegeStatus.rank}
                </span>
              </div>
              <p className="font-['Manrope'] text-xs text-[#e2e2e9] leading-relaxed">
                {collegeStatus.tip}
              </p>
            </div>
          </div>

          <div className="pt-4 mt-5 border-t border-white/5 flex items-center justify-between text-[10px] font-['JetBrains_Mono'] text-[#70758e]">
            <span>Sunday Simulation Routine: 2:00 PM – 5:20 PM</span>
            <span className="text-[#4cd7f6]">NTA Marking (+4 / -1)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
