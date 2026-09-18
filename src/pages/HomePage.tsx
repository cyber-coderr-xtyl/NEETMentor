import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Clock,
  Target,
  Award,
  Sparkles,
  Flame,
  CheckCircle2,
  Activity,
  Layers,
  GraduationCap,
  Users,
  Compass,
  TrendingUp,
  Brain,
  Lightbulb,
  FileSpreadsheet,
  Stethoscope,
  HelpCircle
} from 'lucide-react';
import { SUBJECT_MODULES, TARGET_COLLEGES } from '../data/portfolioData';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 sm:pt-12 pb-12 overflow-hidden" id="overview">
        {/* Ambient Glows */}
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#635bff]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#4cd7f6]/15 rounded-full blur-[130px] pointer-events-none" />

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

            {/* Tagline */}
            <p className="font-['Manrope'] text-base sm:text-lg text-[#a3a8be] max-w-2xl leading-relaxed mb-8">
              Navigating Class 11 CBSE/NCERT syllabus with uncompromising conceptual depth across Physics Mechanics, Chemistry Reaction Matrices, and Botany/Zoology line-by-line synthesis. Dedicated to medical excellence and targeting apex institutions like AIIMS New Delhi.
            </p>

            {/* Primary Navigation CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/subjects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#635bff] text-white font-['Manrope'] text-sm font-semibold shadow-lg shadow-[#635bff]/30 hover:bg-[#5249e0] hover:-translate-y-0.5 transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Subjects &amp; Syllabus</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/quiz"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-['Manrope'] text-sm font-medium transition-all group"
              >
                <Brain className="w-4 h-4 text-[#4cd7f6]" />
                <span>Daily 10-MCQ Diagnostic</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Badges */}
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

          {/* Right Column: Hero AIIMS M.B.B.S Goal Card */}
          <div className="lg:col-span-5 flex justify-center z-10">
            <div className="relative w-full max-w-sm rounded-2xl p-3 bg-[#16181f]/90 border border-white/15 shadow-2xl shadow-black/60 group">
              <div className="relative w-full h-[450px] rounded-xl overflow-hidden bg-black flex items-center justify-center">
                <img
                  src="/assets/aiims_mbbs.svg"
                  alt="AIIMS M.B.B.S Target Goal Poster"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge: Dream Medical College */}
                <div className="absolute top-4 left-4 right-4 p-2.5 bg-[#111318]/90 backdrop-blur-md rounded-xl border border-white/15 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-['JetBrains_Mono'] text-xs text-white font-medium">
                      NORTH STAR ASPIRATION
                    </span>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-amber-300 uppercase bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-md font-semibold">
                    AIR &lt; 50
                  </span>
                </div>

                {/* Badges on the image */}
                <div className="absolute bottom-4 inset-x-4 flex flex-col gap-2">
                  <div className="p-3 rounded-xl bg-[#111318]/90 backdrop-blur-md border border-white/15 shadow-lg">
                    <div className="flex items-center justify-between text-xs font-['JetBrains_Mono']">
                      <span className="text-[#a3a8be]">Current Academic Target</span>
                      <span className="text-emerald-400 font-bold">700+ NEET</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#635bff] to-[#4cd7f6] h-full w-[93%]" />
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-['JetBrains_Mono'] text-[#70758e] mt-1.5">
                      <span>Latest Mock: 672/720</span>
                      <span>Target: AIIMS New Delhi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEDICATED SECTIONS PREVIEW / PORTFOLIO DIRECTORY */}
      <section className="pt-8 border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="font-['JetBrains_Mono'] text-xs text-[#4cd7f6] uppercase tracking-widest block mb-1 font-semibold">
              Explore All Dedicated Hubs
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Separate Academic &amp; Interactive Pages
            </h2>
          </div>
          <p className="font-['JetBrains_Mono'] text-xs text-[#a3a8be]">
            Every domain of Varun's NEET preparation mapped into its own dedicated page.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Subjects */}
          <Link
            to="/subjects"
            className="p-6 rounded-2xl bg-[#14161f] border border-white/10 hover:border-[#4cd7f6]/50 transition-all group flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#4cd7f6]/15 text-[#4cd7f6] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#70758e] uppercase block mb-1">
                Dedicated Page
              </span>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2 group-hover:text-[#4cd7f6] transition-colors">
                Subjects &amp; Syllabus
              </h3>
              <p className="font-['Manrope'] text-xs text-[#a3a8be] leading-relaxed mb-4">
                Detailed breakdowns for Biology (360M), Physics (180M), and Chemistry (180M) with active revision units and formula cheat-sheets.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#4cd7f6] pt-3 border-t border-white/5">
              <span>View 3 Subject Modules</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card: Doubt Section & Concept Clinic */}
          <Link
            to="/doubts"
            className="p-6 rounded-2xl bg-[#14161f] border border-[#635bff]/30 hover:border-[#4cd7f6]/60 transition-all group flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#635bff]/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#635bff]/30 to-[#4cd7f6]/20 text-[#4cd7f6] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <HelpCircle className="w-6 h-6 text-[#4cd7f6]" />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#4cd7f6] uppercase font-bold">
                  New Hub // Page 13
                </span>
                <span className="px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 font-['JetBrains_Mono'] text-[10px]">
                  48+ Solved
                </span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2 group-hover:text-[#4cd7f6] transition-colors">
                NEET Doubt Desk &amp; Clinic
              </h3>
              <p className="font-['Manrope'] text-xs text-[#a3a8be] leading-relaxed mb-4">
                Interactive PCB doubt resolution with step-by-step mathematical proofs, NCERT line citations, examiner traps, and live doubt submission.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#4cd7f6] pt-3 border-t border-white/5">
              <span>Explore Solved Doubts &amp; Ask</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 2: Active Recall Flashcards */}
          <Link
            to="/flashcards"
            className="p-6 rounded-2xl bg-[#14161f] border border-white/10 hover:border-[#c3c0ff]/50 transition-all group flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#635bff]/20 text-[#c3c0ff] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6 text-[#c3c0ff]" />
              </div>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#70758e] uppercase block mb-1">
                Dedicated Page
              </span>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2 group-hover:text-[#c3c0ff] transition-colors">
                NCERT Flashcards Deck
              </h3>
              <p className="font-['Manrope'] text-xs text-[#a3a8be] leading-relaxed mb-4">
                Interactive 3D flip card active recall system covering cell checkpoints, hemodynamics, MOT paramagnetism, and rotational kinematics.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#c3c0ff] pt-3 border-t border-white/5">
              <span>Launch Flashcard Deck</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 3: Mock Test Analytics */}
          <Link
            to="/analytics"
            className="p-6 rounded-2xl bg-[#14161f] border border-white/10 hover:border-amber-400/50 transition-all group flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/15 text-amber-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-amber-400" />
              </div>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#70758e] uppercase block mb-1">
                Dedicated Page
              </span>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                Sunday Mock Analytics
              </h3>
              <p className="font-['Manrope'] text-xs text-[#a3a8be] leading-relaxed mb-4">
                Score progression audit (592 → 672/720), negative marking suppression logs, accuracy rates, and custom Sunday mock logging tool.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-amber-400 pt-3 border-t border-white/5">
              <span>View Score Progression</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 4: Daily Diagnostic Quiz */}
          <Link
            to="/quiz"
            className="p-6 rounded-2xl bg-[#14161f] border border-white/10 hover:border-emerald-400/50 transition-all group flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-400/15 text-emerald-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#70758e] uppercase block mb-1">
                Dedicated Page
              </span>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                10-MCQ Rapid Drill
              </h3>
              <p className="font-['Manrope'] text-xs text-[#a3a8be] leading-relaxed mb-4">
                Timed exam sprint with +4 / -1 NTA scoring engine, question status jumper grid, and deep examiner trap explanations.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-emerald-400 pt-3 border-t border-white/5">
              <span>Take Daily Drill</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 5: Chapter Priority Matrix */}
          <Link
            to="/matrix"
            className="p-6 rounded-2xl bg-[#14161f] border border-white/10 hover:border-[#acedff]/50 transition-all group flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#acedff]/15 text-[#acedff] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FileSpreadsheet className="w-6 h-6 text-[#acedff]" />
              </div>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#70758e] uppercase block mb-1">
                Dedicated Page
              </span>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2 group-hover:text-[#acedff] transition-colors">
                Weightage &amp; Backlog Matrix
              </h3>
              <p className="font-['Manrope'] text-xs text-[#a3a8be] leading-relaxed mb-4">
                Tier 1, 2, and 3 chapter prioritization ranked by NTA question percentages with interactive status toggles and solved DPP metrics.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#acedff] pt-3 border-t border-white/5">
              <span>Inspect Priority Matrix</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 6: High-Yield Mnemonics */}
          <Link
            to="/mnemonics"
            className="p-6 rounded-2xl bg-[#14161f] border border-white/10 hover:border-amber-300/50 transition-all group flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/15 text-amber-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-6 h-6 text-amber-300" />
              </div>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#70758e] uppercase block mb-1">
                Dedicated Page
              </span>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                High-Yield Mnemonics Wall
              </h3>
              <p className="font-['Manrope'] text-xs text-[#a3a8be] leading-relaxed mb-4">
                Memory engineering shortcuts for prophase stages, 10 essential amino acids, reactivity series, and inertia ranking with instant copy actions.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-amber-300 pt-3 border-t border-white/5">
              <span>Explore Memory Shortcuts</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 7: Medical Scholar Journal */}
          <Link
            to="/journal"
            className="p-6 rounded-2xl bg-[#14161f] border border-white/10 hover:border-[#4cd7f6]/50 transition-all group flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#4cd7f6]/15 text-[#4cd7f6] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Stethoscope className="w-6 h-6 text-[#4cd7f6]" />
              </div>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#70758e] uppercase block mb-1">
                Dedicated Page
              </span>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2 group-hover:text-[#4cd7f6] transition-colors">
                Medical Scholar Journal
              </h3>
              <p className="font-['Manrope'] text-xs text-[#a3a8be] leading-relaxed mb-4">
                Reflections connecting Class 11 theory with clinical hospital practice: Hemodialyzer countercurrent dynamics, ECG lead vectors, and "Why AIIMS".
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#4cd7f6] pt-3 border-t border-white/5">
              <span>Read Clinical Essays</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 8: Study Tools */}
          <Link
            to="/tools"
            className="p-6 rounded-2xl bg-[#14161f] border border-white/10 hover:border-[#635bff]/50 transition-all group flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#635bff]/20 text-[#c3c0ff] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6 text-[#c3c0ff]" />
              </div>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#70758e] uppercase block mb-1">
                Dedicated Page
              </span>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2 group-hover:text-[#c3c0ff] transition-colors">
                Study Tools &amp; Simulator
              </h3>
              <p className="font-['Manrope'] text-xs text-[#a3a8be] leading-relaxed mb-4">
                50-minute Focus Sprint Pomodoro timer, live daily 140 MCQ question counter, and NEET mock score predictor out of 720.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#c3c0ff] pt-3 border-t border-white/5">
              <span>Launch Study Utilities</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 9: Preparation Strategy */}
          <Link
            to="/strategy"
            className="p-6 rounded-2xl bg-[#14161f] border border-white/10 hover:border-amber-400/50 transition-all group flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/15 text-amber-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6 text-amber-400" />
              </div>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#70758e] uppercase block mb-1">
                Dedicated Page
              </span>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                Strategy &amp; Error Logbook
              </h3>
              <p className="font-['Manrope'] text-xs text-[#a3a8be] leading-relaxed mb-4">
                The 3 Pillars of NEET preparation, Feynman techniques, Sunday exam simulation rules, and negative marking trap catalog.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-amber-400 pt-3 border-t border-white/5">
              <span>Read Strategy &amp; Traps</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 10: Target Colleges */}
          <Link
            to="/colleges"
            className="p-6 rounded-2xl bg-[#14161f] border border-white/10 hover:border-emerald-400/50 transition-all group flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-400/15 text-emerald-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#70758e] uppercase block mb-1">
                Dedicated Page
              </span>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Target Colleges &amp; Books
              </h3>
              <p className="font-['Manrope'] text-xs text-[#a3a8be] leading-relaxed mb-4">
                Dream medical colleges (AIIMS Delhi, MAMC, JIPMER) cutoff ranks and the complete study arsenal book stack manifest.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-emerald-400 pt-3 border-t border-white/5">
              <span>Inspect Colleges &amp; Books</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 11: Study Connect */}
          <Link
            to="/connect"
            className="p-6 rounded-2xl bg-[#14161f] border border-white/10 hover:border-violet-400/50 transition-all group flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-violet-400/15 text-violet-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-violet-400" />
              </div>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#70758e] uppercase block mb-1">
                Dedicated Page
              </span>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                Study Connect &amp; Peer Doubts
              </h3>
              <p className="font-['Manrope'] text-xs text-[#a3a8be] leading-relaxed mb-4">
                Connect for peer study sessions, drop a physics numerical doubt, swap formulas, and join the Telegram circle.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-violet-400 pt-3 border-t border-white/5">
              <span>Connect with Varun</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};
