import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  userEmail: string;
}

export const Footer: React.FC<FooterProps> = ({ userEmail }) => {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setIstTime(istString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#0c0e13] border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Col 1 */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#635bff]/20 border border-[#635bff]/30 flex items-center justify-center text-[#4cd7f6]">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <span className="font-['Space_Grotesk'] text-lg font-bold text-white">
                  Varun Thakur
                </span>
                <span className="font-['JetBrains_Mono'] text-xs text-[#c3c0ff] bg-[#635bff]/15 px-2 py-0.5 rounded">
                  NEET 2026/27 Quest
                </span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                Building medicine-grade conceptual depth, every single day.
              </h3>
              <p className="font-['Manrope'] text-xs sm:text-sm text-[#a3a8be] max-w-lg leading-relaxed">
                Class 11 Science (PCB) student preparing for the National Eligibility cum Entrance Test (NEET-UG). Striving for apex medical education and healthcare leadership.
              </p>
            </div>

            <div>
              <a
                href={`mailto:${userEmail}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#635bff] hover:bg-[#5249e0] text-white font-['Manrope'] text-xs font-semibold shadow-lg shadow-[#635bff]/20 transition-all"
              >
                <span>{userEmail}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6 md:items-end">
            <div className="md:text-right">
              <span className="font-['JetBrains_Mono'] text-xs text-[#70758e] uppercase block mb-1">
                Study Hub &amp; Live Time
              </span>
              <div className="flex items-center md:justify-end gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-['JetBrains_Mono'] text-xs text-white">New Delhi, India</span>
                <span className="font-['JetBrains_Mono'] text-xs text-[#a3a8be]">(IST UTC+05:30)</span>
              </div>
              <div className="font-['JetBrains_Mono'] text-sm text-[#4cd7f6] font-bold mt-1">
                {istTime || 'IST Active'}
              </div>
            </div>

            {/* Separate Pages Navigation Links */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end font-['JetBrains_Mono'] text-xs text-[#a3a8be] max-w-xl">
              <Link to="/" className="hover:text-white transition-colors">Overview</Link>
              <Link to="/subjects" className="hover:text-white transition-colors">Subjects &amp; Syllabus</Link>
              <Link to="/doubts" className="hover:text-[#4cd7f6] transition-colors font-semibold text-white">Doubt Section</Link>
              <Link to="/flashcards" className="hover:text-[#4cd7f6] transition-colors">Flashcards</Link>
              <Link to="/analytics" className="hover:text-[#4cd7f6] transition-colors">Mock Analytics</Link>
              <Link to="/quiz" className="hover:text-[#4cd7f6] transition-colors">Daily Quiz</Link>
              <Link to="/matrix" className="hover:text-[#4cd7f6] transition-colors">Weightage Matrix</Link>
              <Link to="/mnemonics" className="hover:text-[#4cd7f6] transition-colors">Mnemonics</Link>
              <Link to="/journal" className="hover:text-[#4cd7f6] transition-colors">Medical Journal</Link>
              <Link to="/tools" className="hover:text-white transition-colors">Study Tools</Link>
              <Link to="/strategy" className="hover:text-white transition-colors">Strategy &amp; Traps</Link>
              <Link to="/colleges" className="hover:text-white transition-colors">Target Colleges</Link>
              <Link to="/connect" className="hover:text-white transition-colors">Connect</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-['JetBrains_Mono'] text-xs text-[#70758e]">
          <p>© {new Date().getFullYear()} Varun Thakur. Class 11 PCB • All academic rights reserved.</p>
          <div className="flex items-center gap-3 text-[#a3a8be]">
            <span className="text-[#4cd7f6]">Target: AIIMS New Delhi</span>
            <span>•</span>
            <span>NEET 2026/27</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
