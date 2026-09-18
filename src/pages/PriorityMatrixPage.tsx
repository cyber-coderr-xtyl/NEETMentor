import React, { useState } from 'react';
import { CHAPTER_MATRIX_DATA, ChapterMatrixItem } from '../data/priorityMatrixData';
import {
  Layers,
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileSpreadsheet,
  Award,
  BookOpen
} from 'lucide-react';

export const PriorityMatrixPage: React.FC = () => {
  const [matrixData, setMatrixData] = useState<ChapterMatrixItem[]>(() => {
    const saved = localStorage.getItem('varun_matrix_chapters');
    return saved ? JSON.parse(saved) : CHAPTER_MATRIX_DATA;
  });

  const [selectedTier, setSelectedTier] = useState<number | 'All'>('All');
  const [selectedSubject, setSelectedSubject] = useState<'All' | 'Biology' | 'Physics' | 'Chemistry'>('All');

  const toggleStatus = (id: string) => {
    const nextStatusMap: Record<ChapterMatrixItem['varunStatus'], ChapterMatrixItem['varunStatus']> = {
      'Mastered': 'In Progress',
      'In Progress': 'Revision Pending',
      'Revision Pending': 'Mastered',
    };

    const updated = matrixData.map((item) => {
      if (item.id === id) {
        return { ...item, varunStatus: nextStatusMap[item.varunStatus] };
      }
      return item;
    });

    setMatrixData(updated);
    localStorage.setItem('varun_matrix_chapters', JSON.stringify(updated));
  };

  const filtered = matrixData.filter((item) => {
    const matchesTier = selectedTier === 'All' || item.tier === selectedTier;
    const matchesSubj = selectedSubject === 'All' || item.subject === selectedSubject;
    return matchesTier && matchesSubj;
  });

  const masteredCount = matrixData.filter((i) => i.varunStatus === 'Mastered').length;
  const inProgressCount = matrixData.filter((i) => i.varunStatus === 'In Progress').length;
  const totalDPPs = matrixData.reduce((acc, curr) => acc + curr.dppCount, 0);

  return (
    <div className="space-y-12 pb-16 pt-4">
      {/* Header */}
      <div className="pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-['JetBrains_Mono'] text-xs text-emerald-400 uppercase tracking-widest block mb-2 font-semibold">
            Strategic Roadmap // High-Yield Weightage Matrix
          </span>
          <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold text-white tracking-tight">
            NEET Chapter Weightage &amp; Backlog Matrix
          </h1>
          <p className="font-['Manrope'] text-sm sm:text-base text-[#a3a8be] max-w-2xl mt-3 leading-relaxed">
            Prioritizing chapters by actual historical NTA question density. Click any chapter status to cycle between Mastered, In Progress, and Revision Pending.
          </p>
        </div>

        {/* Aggregate Stats */}
        <div className="flex items-center gap-3 p-3 bg-[#14161f] rounded-2xl border border-white/10 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="font-['Space_Grotesk'] text-sm font-bold text-white">
              {masteredCount} of {matrixData.length} Mastered
            </div>
            <div className="font-['JetBrains_Mono'] text-xs text-[#a3a8be]">
              {totalDPPs.toLocaleString()} Cumulative DPPs Solved
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Tier Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-[#16181f] rounded-xl border border-white/10 text-xs font-['JetBrains_Mono']">
          <button
            onClick={() => setSelectedTier('All')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              selectedTier === 'All' ? 'bg-[#635bff] text-white font-bold' : 'text-[#a3a8be] hover:text-white'
            }`}
          >
            All Tiers
          </button>
          <button
            onClick={() => setSelectedTier(1)}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              selectedTier === 1 ? 'bg-amber-500 text-white font-bold' : 'text-[#a3a8be] hover:text-white'
            }`}
          >
            Tier 1 (High Yield &gt;6%)
          </button>
          <button
            onClick={() => setSelectedTier(2)}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              selectedTier === 2 ? 'bg-[#4cd7f6] text-slate-900 font-bold' : 'text-[#a3a8be] hover:text-white'
            }`}
          >
            Tier 2 (Core 4-5%)
          </button>
          <button
            onClick={() => setSelectedTier(3)}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              selectedTier === 3 ? 'bg-[#c3c0ff] text-slate-900 font-bold' : 'text-[#a3a8be] hover:text-white'
            }`}
          >
            Tier 3 (Tactical 2-3%)
          </button>
        </div>

        {/* Subject Filter */}
        <div className="flex items-center gap-1.5 p-1 bg-[#16181f] rounded-xl border border-white/10 text-xs font-['JetBrains_Mono']">
          {(['All', 'Biology', 'Chemistry', 'Physics'] as const).map((subj) => (
            <button
              key={subj}
              onClick={() => setSelectedSubject(subj)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedSubject === subj
                  ? 'bg-white/20 text-white font-bold'
                  : 'text-[#a3a8be] hover:text-white'
              }`}
            >
              {subj}
            </button>
          ))}
        </div>
      </div>

      {/* Matrix Table */}
      <div className="rounded-3xl bg-[#14161f] border border-white/10 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-[#161824] text-[11px] font-['JetBrains_Mono'] text-[#70758e] uppercase tracking-wider">
                <th className="py-4 px-6">Tier &amp; Subject</th>
                <th className="py-4 px-6">Chapter Name</th>
                <th className="py-4 px-6">Exam Weightage</th>
                <th className="py-4 px-6">Solved DPPs</th>
                <th className="py-4 px-6">NCERT Reads</th>
                <th className="py-4 px-6 text-right">Status (Click to Toggle)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-['Manrope'] text-sm">
              {filtered.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    {/* Tier & Subject */}
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-5 h-5 rounded-md flex items-center justify-center font-['JetBrains_Mono'] text-[10px] font-bold ${
                            item.tier === 1
                              ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                              : item.tier === 2
                              ? 'bg-[#4cd7f6]/20 text-[#4cd7f6] border border-[#4cd7f6]/30'
                              : 'bg-[#c3c0ff]/20 text-[#c3c0ff] border border-[#c3c0ff]/30'
                          }`}
                        >
                          T{item.tier}
                        </span>
                        <span className="font-['JetBrains_Mono'] text-xs text-[#a3a8be]">
                          {item.subject}
                        </span>
                      </div>
                    </td>

                    {/* Chapter Name */}
                    <td className="py-4 px-6 font-semibold text-white">
                      {item.name}
                    </td>

                    {/* Exam Weightage */}
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="font-['JetBrains_Mono'] text-xs">
                        <span className="text-white font-bold">{item.neetWeightagePercent}%</span>
                        <span className="text-[#70758e] block text-[10px]">{item.expectedQuestions}</span>
                      </div>
                    </td>

                    {/* Solved DPPs */}
                    <td className="py-4 px-6 whitespace-nowrap font-['JetBrains_Mono'] text-xs text-[#acedff]">
                      {item.dppCount} Questions
                    </td>

                    {/* NCERT Reads */}
                    <td className="py-4 px-6 whitespace-nowrap font-['JetBrains_Mono'] text-xs text-[#a3a8be]">
                      {item.ncertReadings}x Thorough Reads
                    </td>

                    {/* Status Button */}
                    <td className="py-4 px-6 whitespace-nowrap text-right">
                      <button
                        onClick={() => toggleStatus(item.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-['JetBrains_Mono'] text-xs font-bold border transition-all ${
                          item.varunStatus === 'Mastered'
                            ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25'
                            : item.varunStatus === 'In Progress'
                            ? 'bg-[#4cd7f6]/15 border-[#4cd7f6]/30 text-[#4cd7f6] hover:bg-[#4cd7f6]/25'
                            : 'bg-rose-500/15 border-rose-500/30 text-rose-300 hover:bg-rose-500/25'
                        }`}
                      >
                        {item.varunStatus === 'Mastered' && <CheckCircle2 className="w-3.5 h-3.5" />}
                        {item.varunStatus === 'In Progress' && <Clock className="w-3.5 h-3.5" />}
                        {item.varunStatus === 'Revision Pending' && <AlertCircle className="w-3.5 h-3.5" />}
                        <span>{item.varunStatus}</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
