import React, { useState } from 'react';
import { MOCK_TEST_RECORDS, MockTestRecord } from '../data/mockAnalyticsData';
import {
  TrendingUp,
  Award,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Plus,
  ArrowUpRight,
  Sparkles,
  BarChart3,
  X
} from 'lucide-react';

export const AnalyticsPage: React.FC = () => {
  const [records, setRecords] = useState<MockTestRecord[]>(() => {
    const saved = localStorage.getItem('varun_mock_records');
    return saved ? JSON.parse(saved) : MOCK_TEST_RECORDS;
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [testName, setTestName] = useState('');
  const [syllabus, setSyllabus] = useState('');
  const [bio, setBio] = useState(340);
  const [phys, setPhys] = useState(150);
  const [chem, setChem] = useState(155);
  const [negatives, setNegatives] = useState(6);
  const [mistakeChapter, setMistakeChapter] = useState('');

  const handleAddRecord = (e: React.FormEvent) => {
    e.preventDefault();
    const total = Number(bio) + Number(phys) + Number(chem);
    const newRecord: MockTestRecord = {
      id: `mock-${Date.now()}`,
      testName: testName || 'Custom Sunday Mock',
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      syllabus: syllabus || 'Full Class 11 Cumulative',
      biologyScore: Number(bio),
      physicsScore: Number(phys),
      chemistryScore: Number(chem),
      totalScore: total,
      percentile: Number((95 + (total - 600) * 0.04).toFixed(1)),
      negativeMarks: Number(negatives),
      accuracy: Number(((total / 720) * 100).toFixed(1)),
      keyMistakeChapter: mistakeChapter || 'General calculation review',
      notes: 'Recorded in student study portal.',
    };

    const updated = [newRecord, ...records];
    setRecords(updated);
    localStorage.setItem('varun_mock_records', JSON.stringify(updated));
    setModalOpen(false);
    setTestName('');
    setSyllabus('');
    setMistakeChapter('');
  };

  const latestTest = records[0] || MOCK_TEST_RECORDS[0];
  const maxScoreEver = Math.max(...records.map((r) => r.totalScore));

  return (
    <div className="space-y-12 pb-16 pt-4">
      {/* Header */}
      <div className="pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-['JetBrains_Mono'] text-xs text-amber-400 uppercase tracking-widest block mb-2 font-semibold">
            Performance Analytics // Score Progression Hub
          </span>
          <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Sunday Mock Test Analytics
          </h1>
          <p className="font-['Manrope'] text-sm sm:text-base text-[#a3a8be] max-w-2xl mt-3 leading-relaxed">
            Rigorous tracking of full-syllabus simulated tests under strict NTA OMR conditions. Targeting consistent 700+ marks for AIIMS New Delhi.
          </p>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#635bff] hover:bg-[#5249e0] text-white text-xs font-['JetBrains_Mono'] font-bold shadow-lg shadow-[#635bff]/25 transition-all shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Log New Sunday Mock</span>
        </button>
      </div>

      {/* KPI Highlight Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Latest Score */}
        <div className="p-6 rounded-2xl bg-[#14161f] border border-white/10 space-y-2 shadow-xl">
          <div className="flex items-center justify-between text-[#a3a8be] font-['JetBrains_Mono'] text-xs">
            <span>Latest Mock Score</span>
            <span className="text-emerald-400 font-bold">Latest</span>
          </div>
          <div className="font-['Space_Grotesk'] text-3xl font-bold text-white flex items-baseline gap-2">
            <span>{latestTest.totalScore}</span>
            <span className="text-xs text-[#70758e]">/ 720</span>
          </div>
          <p className="text-[11px] font-['JetBrains_Mono'] text-[#4cd7f6]">
            {latestTest.percentile} Percentile ({latestTest.testName})
          </p>
        </div>

        {/* Peak Score */}
        <div className="p-6 rounded-2xl bg-[#14161f] border border-white/10 space-y-2 shadow-xl">
          <div className="flex items-center justify-between text-[#a3a8be] font-['JetBrains_Mono'] text-xs">
            <span>All-Time Peak Score</span>
            <Award className="w-4 h-4 text-amber-400" />
          </div>
          <div className="font-['Space_Grotesk'] text-3xl font-bold text-white flex items-baseline gap-2">
            <span>{maxScoreEver}</span>
            <span className="text-xs text-[#70758e]">/ 720</span>
          </div>
          <p className="text-[11px] font-['JetBrains_Mono'] text-amber-400">
            Target AIIMS Delhi: 705+ (Gap: {Math.max(0, 705 - maxScoreEver)} marks)
          </p>
        </div>

        {/* Negative Marks Suppression */}
        <div className="p-6 rounded-2xl bg-[#14161f] border border-white/10 space-y-2 shadow-xl">
          <div className="flex items-center justify-between text-[#a3a8be] font-['JetBrains_Mono'] text-xs">
            <span>Negative Marks (Penalty)</span>
            <span className="text-rose-400 font-bold">-1 Penalty</span>
          </div>
          <div className="font-['Space_Grotesk'] text-3xl font-bold text-rose-400 flex items-baseline gap-2">
            <span>-{latestTest.negativeMarks}</span>
            <span className="text-xs text-[#70758e]">Marks Lost</span>
          </div>
          <p className="text-[11px] font-['JetBrains_Mono'] text-emerald-400">
            Suppressed from -16 initially (68% reduction)
          </p>
        </div>

        {/* Accuracy */}
        <div className="p-6 rounded-2xl bg-[#14161f] border border-white/10 space-y-2 shadow-xl">
          <div className="flex items-center justify-between text-[#a3a8be] font-['JetBrains_Mono'] text-xs">
            <span>Accuracy Rate</span>
            <CheckCircle2 className="w-4 h-4 text-[#4cd7f6]" />
          </div>
          <div className="font-['Space_Grotesk'] text-3xl font-bold text-white">
            {latestTest.accuracy}%
          </div>
          <p className="text-[11px] font-['JetBrains_Mono'] text-[#c3c0ff]">
            172 / 180 Questions Validated
          </p>
        </div>
      </div>

      {/* Visual Progression Trend Chart (SVG Based) */}
      <div className="p-8 rounded-3xl bg-[#14161f] border border-white/10 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-['Space_Grotesk'] text-xl font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span>Score Trajectory to AIIMS Cutoff</span>
            </h2>
            <p className="font-['JetBrains_Mono'] text-xs text-[#a3a8be] mt-1">
              Tracking steady mark growth across Class 11 testing cycles.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-['JetBrains_Mono']">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#4cd7f6]" />
              <span className="text-[#a3a8be]">Actual Score</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-0.5 bg-amber-400" />
              <span className="text-amber-300">Target AIIMS (700)</span>
            </div>
          </div>
        </div>

        {/* Bar & Visual Progress Indicator */}
        <div className="space-y-4 pt-4">
          {records.slice(0, 6).map((test) => {
            const percentage = (test.totalScore / 720) * 100;
            return (
              <div key={test.id} className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-['JetBrains_Mono']">
                  <span className="text-white font-medium flex items-center gap-2">
                    <span>{test.testName}</span>
                    <span className="text-[#70758e]">({test.date})</span>
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-rose-400 text-[10px]">-{test.negativeMarks} Neg</span>
                    <span className="text-[#4cd7f6] font-bold">{test.totalScore} / 720</span>
                  </div>
                </div>

                <div className="relative w-full h-3 bg-white/5 rounded-full overflow-hidden flex">
                  {/* Biology slice */}
                  <div
                    style={{ width: `${(test.biologyScore / 720) * 100}%` }}
                    className="h-full bg-[#4cd7f6]"
                    title={`Bio: ${test.biologyScore}`}
                  />
                  {/* Physics slice */}
                  <div
                    style={{ width: `${(test.physicsScore / 720) * 100}%` }}
                    className="h-full bg-[#c3c0ff]"
                    title={`Phys: ${test.physicsScore}`}
                  />
                  {/* Chemistry slice */}
                  <div
                    style={{ width: `${(test.chemistryScore / 720) * 100}%` }}
                    className="h-full bg-[#acedff]"
                    title={`Chem: ${test.chemistryScore}`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between text-xs font-['JetBrains_Mono'] text-[#a3a8be]">
          <span>Legend: Cyan = Biology (360) • Soft Violet = Physics (180) • Light Teal = Chemistry (180)</span>
          <span className="text-emerald-400 font-semibold">+80 Marks Gained Over 5 Cycles</span>
        </div>
      </div>

      {/* Complete Historical Mock Log */}
      <div className="space-y-4">
        <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">
          Complete Test Audit Log ({records.length} Tests Recorded)
        </h3>

        <div className="space-y-3">
          {records.map((r) => (
            <div
              key={r.id}
              className="p-5 rounded-2xl bg-[#14161f] border border-white/10 hover:border-white/20 transition-all space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-['Space_Grotesk'] text-base font-bold text-white">
                      {r.testName}
                    </h4>
                    <span className="font-['JetBrains_Mono'] text-[10px] px-2 py-0.5 rounded bg-white/10 text-white">
                      {r.date}
                    </span>
                  </div>
                  <p className="font-['JetBrains_Mono'] text-xs text-[#a3a8be] mt-0.5">
                    Syllabus: {r.syllabus}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right font-['JetBrains_Mono']">
                    <span className="text-xs text-[#a3a8be] block">Total Score</span>
                    <span className="font-['Space_Grotesk'] text-xl font-bold text-white">
                      {r.totalScore} <span className="text-xs text-[#70758e]">/ 720</span>
                    </span>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20 font-bold">
                    {r.percentile}%ile
                  </span>
                </div>
              </div>

              {/* Subject score pill breakdown */}
              <div className="grid grid-cols-3 gap-2 font-['JetBrains_Mono'] text-xs pt-2 border-t border-white/5">
                <div className="p-2 rounded-lg bg-[#0c0e13]">
                  <span className="text-[#70758e] text-[10px] block">Biology</span>
                  <span className="text-[#4cd7f6] font-bold">{r.biologyScore} / 360</span>
                </div>
                <div className="p-2 rounded-lg bg-[#0c0e13]">
                  <span className="text-[#70758e] text-[10px] block">Physics</span>
                  <span className="text-[#c3c0ff] font-bold">{r.physicsScore} / 180</span>
                </div>
                <div className="p-2 rounded-lg bg-[#0c0e13]">
                  <span className="text-[#70758e] text-[10px] block">Chemistry</span>
                  <span className="text-[#acedff] font-bold">{r.chemistryScore} / 180</span>
                </div>
              </div>

              {/* Error analysis note */}
              <div className="p-3 rounded-xl bg-[#0c0e13] border border-white/5 font-['JetBrains_Mono'] text-xs flex items-start gap-2 text-[#a3a8be]">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Mistake Chapter:</strong> {r.keyMistakeChapter}.{' '}
                  <span className="text-[#70758e]">{r.notes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal to log test */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#12141c] border border-white/15 rounded-3xl w-full max-w-lg p-6 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white">
                Log New Sunday Mock Test Result
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#a3a8be]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddRecord} className="space-y-4 text-xs font-['JetBrains_Mono']">
              <div>
                <label className="text-[#a3a8be] block mb-1">Test Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Allen Leader Test 05"
                  value={testName}
                  onChange={(e) => setTestName(e.target.value)}
                  className="w-full bg-[#0c0e13] border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-[#4cd7f6]"
                />
              </div>

              <div>
                <label className="text-[#a3a8be] block mb-1">Syllabus Covered</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Full Unit 3 + Mechanics"
                  value={syllabus}
                  onChange={(e) => setSyllabus(e.target.value)}
                  className="w-full bg-[#0c0e13] border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-[#4cd7f6]"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-[#4cd7f6] block mb-1">Bio (/360)</label>
                  <input
                    type="number"
                    max={360}
                    min={0}
                    required
                    value={bio}
                    onChange={(e) => setBio(Number(e.target.value))}
                    className="w-full bg-[#0c0e13] border border-white/10 rounded-xl p-3 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[#c3c0ff] block mb-1">Phys (/180)</label>
                  <input
                    type="number"
                    max={180}
                    min={0}
                    required
                    value={phys}
                    onChange={(e) => setPhys(Number(e.target.value))}
                    className="w-full bg-[#0c0e13] border border-white/10 rounded-xl p-3 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[#acedff] block mb-1">Chem (/180)</label>
                  <input
                    type="number"
                    max={180}
                    min={0}
                    required
                    value={chem}
                    onChange={(e) => setChem(Number(e.target.value))}
                    className="w-full bg-[#0c0e13] border border-white/10 rounded-xl p-3 text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-rose-400 block mb-1">Negative Marks Lost</label>
                  <input
                    type="number"
                    min={0}
                    required
                    value={negatives}
                    onChange={(e) => setNegatives(Number(e.target.value))}
                    className="w-full bg-[#0c0e13] border border-white/10 rounded-xl p-3 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-white block mb-1">Projected Total</label>
                  <div className="p-3 bg-[#0c0e13] border border-white/10 rounded-xl text-white font-bold">
                    {bio + phys + chem} / 720
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[#a3a8be] block mb-1">Key Mistake / Area to Revise</label>
                <input
                  type="text"
                  placeholder="e.g. Rolling motion acceleration factor"
                  value={mistakeChapter}
                  onChange={(e) => setMistakeChapter(e.target.value)}
                  className="w-full bg-[#0c0e13] border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-[#4cd7f6]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#635bff] hover:bg-[#5249e0] text-white font-bold shadow-lg shadow-[#635bff]/25 transition-all mt-4"
              >
                Save to Sunday Test History
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
