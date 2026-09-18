import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Stethoscope,
  Menu,
  X,
  Award,
  Flame,
  Clock,
  ChevronDown,
  Layers,
  TrendingUp,
  Brain,
  Lightbulb,
  FileSpreadsheet,
  BookOpen,
  Compass,
  GraduationCap,
  Users,
  HelpCircle
} from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setMoreDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const primaryNav = [
    { label: 'Overview', path: '/' },
    { label: 'Subjects', path: '/subjects' },
    { label: 'Doubt Section', path: '/doubts' },
    { label: 'Flashcards', path: '/flashcards' },
    { label: 'Mock Analytics', path: '/analytics' },
    { label: 'Daily Quiz', path: '/quiz' },
  ];

  const secondaryNav = [
    { label: 'Doubt Desk & Clinic', path: '/doubts', icon: HelpCircle, desc: 'PCB question clarification & traps' },
    { label: 'Weightage Matrix', path: '/matrix', icon: FileSpreadsheet, desc: 'Class 11 chapter priority matrix' },
    { label: 'High-Yield Mnemonics', path: '/mnemonics', icon: Lightbulb, desc: 'Memory shortcuts & formulas' },
    { label: 'Medical Journal', path: '/journal', icon: BookOpen, desc: 'Clinical reflections & biophysics' },
    { label: 'Study Tools', path: '/tools', icon: Clock, desc: 'Pomodoro timer & DPP counter' },
    { label: 'Strategy & Traps', path: '/strategy', icon: Compass, desc: '3 Pillars & error traps' },
    { label: 'Target Colleges', path: '/colleges', icon: GraduationCap, desc: 'AIIMS New Delhi & book stack' },
    { label: 'Peer Connect', path: '/connect', icon: Users, desc: 'Telegram & peer discussions' },
  ];

  const isSecondaryActive = secondaryNav.some((item) => item.path === location.pathname);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#111318]/95 backdrop-blur-xl border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between gap-4">
        {/* Logo & Identity */}
        <div className="flex items-center gap-3 shrink-0">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#635bff]/20 border border-[#635bff]/40 flex items-center justify-center text-[#c3c0ff] group-hover:border-[#635bff] group-hover:scale-105 transition-all shadow-[0_0_15px_rgba(99,91,255,0.25)]">
              <Stethoscope className="w-5 h-5 text-[#4cd7f6]" />
            </div>
            <div className="flex flex-col">
              <span className="font-['Space_Grotesk'] text-lg font-semibold tracking-tight text-white group-hover:text-[#c3c0ff] transition-colors">
                Varun Thakur
              </span>
              <span className="text-[11px] font-['JetBrains_Mono'] text-[#a3a8be] -mt-0.5">
                Class 11 PCB • NEET Aspirant
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 p-1 bg-[#0c0e13]/80 rounded-full border border-white/10 shadow-inner">
          {primaryNav.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-full text-xs font-medium font-['Manrope'] transition-all ${
                  isActive
                    ? 'bg-[#635bff] text-white shadow-md shadow-[#635bff]/30'
                    : 'text-[#c7c4d8] hover:text-white hover:bg-white/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* More Hubs Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium font-['Manrope'] transition-all ${
                isSecondaryActive || moreDropdownOpen
                  ? 'bg-white/15 text-white'
                  : 'text-[#c7c4d8] hover:text-white hover:bg-white/5'
              }`}
            >
              <span>More Hubs</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {moreDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 rounded-2xl bg-[#141620] border border-white/15 shadow-2xl p-2 z-50 animate-fadeIn">
                <div className="text-[10px] font-['JetBrains_Mono'] text-[#70758e] uppercase px-3 py-1.5 font-bold">
                  Dedicated Hubs
                </div>
                {secondaryNav.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-start gap-3 p-2.5 rounded-xl transition-colors ${
                        isActive ? 'bg-[#635bff]/20 text-white' : 'hover:bg-white/5 text-[#c7c4d8]'
                      }`}
                    >
                      <div className="p-1.5 rounded-lg bg-white/5 text-[#4cd7f6] shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white font-['Space_Grotesk']">
                          {item.label}
                        </div>
                        <div className="text-[11px] text-[#70758e] font-['Manrope']">
                          {item.desc}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Right CTA tools & Target Pill */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => navigate('/quiz')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#635bff]/15 hover:bg-[#635bff]/25 border border-[#635bff]/30 text-xs font-['JetBrains_Mono'] text-[#c3c0ff] transition-all"
            title="Take 10-MCQ Rapid Drill"
          >
            <Brain className="w-3.5 h-3.5 text-[#4cd7f6]" />
            <span>Daily Quiz</span>
          </button>

          <Link
            to="/colleges"
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#1e1f25] hover:bg-[#282a33] border border-white/10 font-['JetBrains_Mono'] text-xs text-[#a3a8be] transition-colors"
          >
            <Award className="w-3.5 h-3.5 text-[#4cd7f6]" />
            <span className="text-white font-medium">AIIMS DLI</span>
          </Link>

          {/* Avatar / Target Insignia Link */}
          <Link
            to="/"
            className="shrink-0 ring-2 ring-white/15 hover:ring-[#4cd7f6] rounded-full transition-all overflow-hidden bg-black flex items-center justify-center w-9 h-9"
            title="Target: AIIMS M.B.B.S"
          >
            <img
              src="/assets/aiims_mbbs.svg"
              alt="AIIMS M.B.B.S Target"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111318]/98 border-b border-white/10 px-6 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
          <div className="text-[10px] font-['JetBrains_Mono'] text-[#70758e] uppercase font-bold">
            Primary Academics
          </div>
          <div className="grid grid-cols-2 gap-2">
            {primaryNav.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl text-xs transition-colors font-['Manrope'] text-center ${
                    isActive
                      ? 'bg-[#635bff] text-white font-semibold'
                      : 'bg-white/5 text-[#c7c4d8] hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="text-[10px] font-['JetBrains_Mono'] text-[#70758e] uppercase font-bold pt-2 border-t border-white/10">
            Dedicated Hubs &amp; Tools
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {secondaryNav.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-xl text-xs transition-colors font-['Manrope'] flex items-center gap-2.5 ${
                      isActive
                        ? 'bg-[#635bff]/20 border border-[#635bff]/40 text-white font-semibold'
                        : 'bg-white/5 text-[#c7c4d8] hover:text-white'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 text-[#4cd7f6]" />
                  <span>{link.label}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
