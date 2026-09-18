import React, { useState } from 'react';
import { StudyConnect } from '../components/StudyConnect';
import { Users, Mail, MessageSquare, HelpCircle, CheckCircle, ArrowRight, BookOpen, Send } from 'lucide-react';
import { PeerMessage } from '../types';

interface ConnectPageProps {
  userEmail: string;
}

export const ConnectPage: React.FC<ConnectPageProps> = ({ userEmail }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Physics');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [inquiries, setInquiries] = useState<PeerMessage[]>(() => {
    const saved = localStorage.getItem('varun_peer_inquiries');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return [
      {
        id: 'msg-1',
        name: 'Aarav Sharma',
        email: 'aarav.neet26@gmail.com',
        subject: 'Physics',
        topic: 'Rotational Dynamics Moment of Inertia',
        message: 'Hey Varun! Loved your formula notes. Would love to collaborate on Sunday evening mock test analysis.',
        timestamp: 'Yesterday at 8:30 PM',
      },
      {
        id: 'msg-2',
        name: 'Pooja Iyer',
        email: 'pooja.med@gmail.com',
        subject: 'Chemistry',
        topic: 'GOC Hyperconjugation vs Inductive',
        message: 'Could you share the MS Chouhan error-log sheet? Preparing for Allen Leader test 04.',
        timestamp: '2 days ago',
      },
    ];
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const newInquiry: PeerMessage = {
      id: `msg-${Date.now()}`,
      name,
      email,
      subject,
      topic: topic || 'General Doubt',
      message,
      timestamp: 'Just now',
    };

    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('varun_peer_inquiries', JSON.stringify(updated));

    setSubmitted(true);
    setName('');
    setEmail('');
    setTopic('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  const peerGuidelines = [
    {
      title: 'Mutual Accountability',
      desc: 'Daily 10:30 PM check-in: share completed DPP counts and Sunday mock test percentile honestly.',
    },
    {
      title: 'Physics & Chemistry Numerical Swaps',
      desc: 'Send the exact question text, what approach you attempted, and where the calculation or concept stalled.',
    },
    {
      title: 'Zero Distraction Policy',
      desc: 'All study sessions strictly follow timed 50-minute blocks with microphones muted; discussion occurs only in breaks.',
    },
  ];

  return (
    <div className="space-y-16 pb-16 pt-4">
      {/* Header */}
      <div className="pb-8 border-b border-white/10">
        <span className="font-['JetBrains_Mono'] text-xs text-violet-400 uppercase tracking-widest block mb-2 font-semibold">
          Community &amp; Accountability // Page 06
        </span>
        <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Study Connect &amp; Peer Doubt Exchange
        </h1>
        <p className="font-['Manrope'] text-sm sm:text-base text-[#a3a8be] max-w-2xl mt-3 leading-relaxed">
          Open for peer accountability partners, physics numerical problem swaps, and formula notes sharing for Class 11 PCB aspirants aiming for NEET 2026/2027.
        </p>
      </div>

      {/* Main Study Connect Component */}
      <StudyConnect userEmail={userEmail} />

      {/* Direct Interactive Form & Guidelines Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-8 border-t border-white/10">
        {/* Left: Interactive Form */}
        <div className="lg:col-span-7 bg-[#14161f] p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#635bff]/20 text-[#c3c0ff] flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-[#4cd7f6]" />
            </div>
            <div>
              <h2 className="font-['Space_Grotesk'] text-xl font-bold text-white">
                Submit a Study Doubt or Proposal
              </h2>
              <p className="font-['JetBrains_Mono'] text-xs text-[#a3a8be]">
                Varun responds during his evening 10:00 PM review slot.
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">
                Doubt Successfully Logged!
              </h3>
              <p className="font-['Manrope'] text-xs text-[#c7c4d8]">
                Your question has been recorded in Varun&apos;s peer study log. Check the inquiries list below.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-['JetBrains_Mono'] text-[#a3a8be] block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Verma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#0c0e13] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
                  />
                </div>
                <div>
                  <label className="text-xs font-['JetBrains_Mono'] text-[#a3a8be] block mb-1">
                    Your Email or Telegram
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. rahul.neet@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0c0e13] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-['JetBrains_Mono'] text-[#a3a8be] block mb-1">
                    Subject
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#0c0e13] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
                  >
                    <option value="Physics">Physics (Mechanics/Waves)</option>
                    <option value="Chemistry">Chemistry (GOC/Physical)</option>
                    <option value="Biology">Biology (Physiology/Cell)</option>
                    <option value="General NEET">General NEET Mentorship</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-['JetBrains_Mono'] text-[#a3a8be] block mb-1">
                    Specific Chapter / Book
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. HC Verma Rotational Ex 14"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full bg-[#0c0e13] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-['JetBrains_Mono'] text-[#a3a8be] block mb-1">
                  Question or Message Details
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Paste numerical values, state your doubt or suggest a collaborative Sunday test review..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#0c0e13] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#635bff] hover:bg-[#5249e0] text-white text-xs font-semibold shadow-lg shadow-[#635bff]/25 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Submit to Varun&apos;s Peer Queue</span>
              </button>
            </form>
          )}
        </div>

        {/* Right: Study Guidelines & Active Feed */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#14161f] p-6 rounded-3xl border border-white/10 shadow-xl space-y-4">
            <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-[#4cd7f6]" />
              <span>Peer Study Code of Conduct</span>
            </h3>
            <div className="space-y-3">
              {peerGuidelines.map((g, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#0c0e13] border border-white/5 space-y-1">
                  <div className="font-['Space_Grotesk'] text-xs font-bold text-white">
                    {g.title}
                  </div>
                  <p className="font-['Manrope'] text-[11px] text-[#a3a8be] leading-relaxed">
                    {g.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#14161f] p-6 rounded-3xl border border-white/10 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white">
                Live Peer Queue ({inquiries.length})
              </h3>
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#4cd7f6]">
                Stored Locally
              </span>
            </div>
            <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
              {inquiries.map((inq) => (
                <div key={inq.id} className="p-3 rounded-xl bg-[#0c0e13] border border-white/5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-['Space_Grotesk'] text-xs font-bold text-white">
                      {inq.name}
                    </span>
                    <span className="font-['JetBrains_Mono'] text-[10px] px-2 py-0.5 rounded bg-white/10 text-[#c3c0ff]">
                      {inq.subject}
                    </span>
                  </div>
                  <div className="font-['JetBrains_Mono'] text-[10px] text-[#70758e]">
                    {inq.topic} • {inq.timestamp}
                  </div>
                  <p className="font-['Manrope'] text-xs text-[#a3a8be] leading-relaxed">
                    {inq.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
