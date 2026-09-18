import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/quizData';
import {
  Clock,
  Award,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Zap
} from 'lucide-react';

export const QuizPage: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(500); // 50s per question * 10 = 500s

  useEffect(() => {
    if (quizFinished) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setQuizFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [quizFinished]);

  const currentQ: QuizQuestion = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (optionIndex: number) => {
    if (quizFinished) return;
    setUserAnswers((prev) => ({ ...prev, [currentIdx]: optionIndex }));
  };

  const handleFinish = () => {
    setQuizFinished(true);
  };

  const handleRestart = () => {
    setUserAnswers({});
    setCurrentIdx(0);
    setQuizFinished(false);
    setTimeLeft(500);
  };

  // Score calculation: +4 for correct, -1 for incorrect, 0 for unattempted
  let correctCount = 0;
  let wrongCount = 0;
  let unattemptedCount = 0;

  QUIZ_QUESTIONS.forEach((q, idx) => {
    const ans = userAnswers[idx];
    if (ans === undefined) {
      unattemptedCount++;
    } else if (ans === q.correctIndex) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  const totalScore = correctCount * 4 - wrongCount * 1;
  const maxScore = QUIZ_QUESTIONS.length * 4; // 40

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="space-y-12 pb-16 pt-4 max-w-4xl mx-auto">
      {/* Header */}
      <div className="pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-['JetBrains_Mono'] text-xs text-[#635bff] uppercase tracking-widest block mb-2 font-semibold">
            Diagnostic Test Arena // Daily MCQ Drill
          </span>
          <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold text-white tracking-tight">
            10-MCQ Rapid NEET Drill
          </h1>
          <p className="font-['Manrope'] text-sm sm:text-base text-[#a3a8be] max-w-2xl mt-3 leading-relaxed">
            Timed simulation adhering strictly to NTA NEET scoring standards: +4 marks for correct, -1 mark penalty for incorrect choices.
          </p>
        </div>

        {/* Timer Box */}
        <div className="flex items-center gap-3 p-3 bg-[#14161f] rounded-2xl border border-white/10 shrink-0">
          <Clock className="w-5 h-5 text-[#4cd7f6] animate-pulse" />
          <div>
            <div className="font-['Space_Grotesk'] text-lg font-bold text-white font-mono">
              {formatTime(timeLeft)}
            </div>
            <div className="font-['JetBrains_Mono'] text-[10px] text-[#a3a8be] uppercase">
              Remaining Time
            </div>
          </div>
        </div>
      </div>

      {!quizFinished ? (
        <div className="space-y-6">
          {/* Question Status Grid */}
          <div className="p-4 bg-[#14161f] rounded-2xl border border-white/10 flex items-center justify-between gap-2 overflow-x-auto">
            <span className="text-xs font-['JetBrains_Mono'] text-[#70758e] shrink-0">
              Questions:
            </span>
            <div className="flex items-center gap-1.5">
              {QUIZ_QUESTIONS.map((_, i) => {
                const isCurrent = i === currentIdx;
                const isAnswered = userAnswers[i] !== undefined;
                return (
                  <button
                    key={i}
                    onClick={() => setCurrentIdx(i)}
                    className={`w-8 h-8 rounded-lg font-['JetBrains_Mono'] text-xs transition-all ${
                      isCurrent
                        ? 'bg-[#635bff] text-white font-bold ring-2 ring-[#635bff]/50'
                        : isAnswered
                        ? 'bg-[#4cd7f6]/20 text-[#4cd7f6] border border-[#4cd7f6]/30'
                        : 'bg-white/5 text-[#a3a8be] hover:bg-white/10'
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
            <span className="text-xs font-['JetBrains_Mono'] text-[#4cd7f6] shrink-0">
              {Object.keys(userAnswers).length} / 10 Attempted
            </span>
          </div>

          {/* Question Card */}
          <div className="p-8 rounded-3xl bg-[#14161f] border border-white/10 shadow-2xl space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-['JetBrains_Mono'] px-3 py-1 rounded-md uppercase font-bold bg-white/10 text-[#c3c0ff]">
                Question {currentIdx + 1} of {QUIZ_QUESTIONS.length} • {currentQ.subject} ({currentQ.chapter})
              </span>
              <span className="text-xs font-['JetBrains_Mono'] text-[#a3a8be]">
                +4 / -1 Marking
              </span>
            </div>

            <h3 className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold text-white leading-relaxed">
              {currentQ.question}
            </h3>

            {/* Options List */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = userAnswers[currentIdx] === optIdx;
                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full text-left p-4 rounded-xl border font-['Manrope'] text-sm transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#635bff]/20 border-[#635bff] text-white font-semibold'
                        : 'bg-[#0c0e13] border-white/10 text-[#c7c4d8] hover:bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center font-['JetBrains_Mono'] text-xs border ${
                        isSelected ? 'bg-[#635bff] text-white border-[#635bff]' : 'border-white/20 text-[#a3a8be]'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{opt}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <button
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx((p) => p - 1)}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 text-xs font-['JetBrains_Mono'] text-white"
              >
                Previous
              </button>

              {currentIdx < QUIZ_QUESTIONS.length - 1 ? (
                <button
                  onClick={() => setCurrentIdx((p) => p + 1)}
                  className="px-5 py-2.5 rounded-xl bg-[#635bff] hover:bg-[#5249e0] text-xs font-['JetBrains_Mono'] font-bold text-white shadow-lg"
                >
                  Next Question
                </button>
              ) : (
                <button
                  onClick={handleFinish}
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-xs font-['JetBrains_Mono'] font-bold text-white shadow-lg shadow-emerald-500/30"
                >
                  Submit &amp; View Analysis
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="space-y-8 animate-fadeIn">
          {/* Scorecard */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#161824] to-[#10121a] border border-white/15 shadow-2xl text-center space-y-4">
            <span className="text-xs font-['JetBrains_Mono'] text-emerald-400 uppercase tracking-widest font-bold">
              Simulation Completed
            </span>
            <div className="font-['Space_Grotesk'] text-5xl sm:text-6xl font-bold text-white">
              {totalScore} <span className="text-xl text-[#70758e]">/ {maxScore}</span>
            </div>
            <p className="font-['Manrope'] text-sm text-[#a3a8be]">
              {totalScore >= 32
                ? 'Outstanding! AIIMS New Delhi contention tier mastery.'
                : totalScore >= 20
                ? 'Strong performance. Review negative marking traps below.'
                : 'Need conceptual consolidation. Re-read NCERT highlighted lines.'}
            </p>

            <div className="grid grid-cols-3 gap-3 max-w-md mx-auto pt-4 font-['JetBrains_Mono'] text-xs">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <span className="text-emerald-400 font-bold block text-lg">{correctCount}</span>
                <span className="text-[#a3a8be]">Correct (+{correctCount * 4})</span>
              </div>
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20">
                <span className="text-rose-400 font-bold block text-lg">{wrongCount}</span>
                <span className="text-[#a3a8be]">Incorrect (-{wrongCount})</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-white font-bold block text-lg">{unattemptedCount}</span>
                <span className="text-[#a3a8be]">Skipped (0)</span>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#635bff] hover:bg-[#5249e0] text-white font-['JetBrains_Mono'] text-xs font-bold shadow-lg transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Drill with Fresh Timer</span>
              </button>
            </div>
          </div>

          {/* Solutions & Analysis Breakdown */}
          <div className="space-y-4">
            <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">
              Line-by-Line NCERT Scientific Analysis
            </h3>

            {QUIZ_QUESTIONS.map((q, i) => {
              const userAns = userAnswers[i];
              const isCorrect = userAns === q.correctIndex;
              const isSkipped = userAns === undefined;

              return (
                <div
                  key={q.id}
                  className="p-6 rounded-2xl bg-[#14161f] border border-white/10 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-['JetBrains_Mono'] text-[#a3a8be]">
                      Question 0{i + 1} • {q.subject} ({q.chapter})
                    </span>
                    <span className={`text-xs font-['JetBrains_Mono'] px-2.5 py-0.5 rounded font-bold ${
                      isCorrect
                        ? 'bg-emerald-500/15 text-emerald-300'
                        : isSkipped
                        ? 'bg-white/10 text-white'
                        : 'bg-rose-500/15 text-rose-300'
                    }`}>
                      {isCorrect ? '+4 Marks' : isSkipped ? '0 Marks (Skipped)' : '-1 Mark Penalty'}
                    </span>
                  </div>

                  <h4 className="font-['Space_Grotesk'] text-base font-bold text-white">
                    {q.question}
                  </h4>

                  <div className="space-y-1.5 text-xs font-['Manrope']">
                    {q.options.map((opt, optI) => {
                      const isOptionCorrect = optI === q.correctIndex;
                      const isUserOption = optI === userAns;
                      return (
                        <div
                          key={optI}
                          className={`p-3 rounded-xl flex items-center justify-between ${
                            isOptionCorrect
                              ? 'bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 font-semibold'
                              : isUserOption
                              ? 'bg-rose-950/40 border border-rose-500/30 text-rose-200'
                              : 'bg-[#0c0e13] text-[#70758e]'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span>{String.fromCharCode(65 + optI)}.</span>
                            <span>{opt}</span>
                          </span>
                          {isOptionCorrect && <span className="font-['JetBrains_Mono'] text-[10px] text-emerald-400">Correct Choice</span>}
                          {!isOptionCorrect && isUserOption && <span className="font-['JetBrains_Mono'] text-[10px] text-rose-400">Your Choice</span>}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation & Trap */}
                  <div className="p-4 rounded-xl bg-[#0c0e13] border border-white/5 space-y-2 text-xs font-['Manrope'] text-[#c7c4d8]">
                    <div>
                      <strong className="text-white font-['Space_Grotesk']">Scientific Explanation:</strong>{' '}
                      {q.explanation}
                    </div>
                    <div className="text-amber-300 font-['JetBrains_Mono'] text-[11px] flex items-start gap-1.5 pt-1">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-400" />
                      <span>Examiner Trap: {q.examinerTrap}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
