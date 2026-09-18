import React from 'react';
import { StudyTrackerTools } from '../components/StudyTrackerTools';
import { Clock, Calendar, CheckSquare, Sparkles, Flame, Shield, ArrowRight } from 'lucide-react';

export const StudyToolsPage: React.FC = () => {
  const dailySchedule = [
    { time: '06:00 AM – 07:30 AM', task: 'Biology NCERT Line-by-Line & Diagram Flashcards', focus: 'Active Recall', subject: 'Biology' },
    { time: '08:00 AM – 02:00 PM', task: 'CBSE Class 11 School / Core Lectures', focus: 'Concepts & Notes', subject: 'Academics' },
    { time: '03:30 PM – 05:00 PM', task: 'Physics Mechanics Numerical Practice (H.C. Verma Vol 1)', focus: 'Problem Solving', subject: 'Physics' },
    { time: '05:15 PM – 06:45 PM', task: 'Chemistry GOC / Chemical Bonding & Physical Practice', focus: 'Mechanisms & Numericals', subject: 'Chemistry' },
    { time: '07:30 PM – 09:30 PM', task: 'Daily 140+ MCQ Question Drill (Timed 50s/MCQ)', focus: 'Speed & Accuracy', subject: 'Mixed DPP' },
    { time: '09:45 PM – 10:30 PM', task: 'Error Logbook Documentation & Spaced Revision', focus: 'Audit & Anti-Trap', subject: 'Revision' },
  ];

  return (
    <div className="space-y-12 pb-16 pt-4">
      {/* Header */}
      <div className="pb-8 border-b border-white/10">
        <span className="font-['JetBrains_Mono'] text-xs text-[#635bff] uppercase tracking-widest block mb-2 font-semibold">
          Interactive Utilities // Page 03
        </span>
        <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Study Suite &amp; NEET Simulator
        </h1>
        <p className="font-['Manrope'] text-sm sm:text-base text-[#a3a8be] max-w-2xl mt-3 leading-relaxed">
          Interactive daily study tools: 50-minute deep concentration timer, real-time daily MCQ target counter, and NEET mock score forecasting engine.
        </p>
      </div>

      {/* Main Suite Tools (Focus Timer, DPP Counter, Mock Calculator) */}
      <StudyTrackerTools />

      {/* Additional Dedicated Content: Daily Timetable & Discipline Protocol */}
      <section className="pt-8 border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="font-['JetBrains_Mono'] text-xs text-[#4cd7f6] uppercase tracking-widest block mb-1">
              Time Architecture
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white">
              Varun&apos;s Daily NEET Preparation Timetable
            </h2>
          </div>
          <span className="font-['JetBrains_Mono'] text-xs text-[#a3a8be] bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
            Total Focus: 8.5 Hours / Day
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dailySchedule.map((slot, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-[#14161f] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#4cd7f6] font-semibold">
                    {slot.time}
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[10px] px-2 py-0.5 rounded bg-white/10 text-white">
                    {slot.subject}
                  </span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-sm font-bold text-white">
                  {slot.task}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-['JetBrains_Mono'] text-[#a3a8be] pt-2 border-t border-white/5">
                <span className="text-[#635bff] font-bold">Focus:</span>
                <span>{slot.focus}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
