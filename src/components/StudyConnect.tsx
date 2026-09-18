import React, { useState } from 'react';
import { Mail, Copy, Check, Users, MessageSquare, Send, ArrowUpRight, Share2, Sparkles, BookOpen } from 'lucide-react';
import { PeerMessage } from '../types';

interface StudyConnectProps {
  userEmail: string;
}

export const StudyConnect: React.FC<StudyConnectProps> = ({ userEmail }) => {
  const [copied, setCopied] = useState(false);
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  // Inquiry form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    subject: 'Physics',
    message: '',
  });

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

  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(userEmail).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const newMsg: PeerMessage = {
      id: `msg-${Date.now()}`,
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      topic: formData.topic || 'General NEET Query',
      message: formData.message,
      timestamp: 'Just now',
    };

    const updated = [newMsg, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('varun_peer_inquiries', JSON.stringify(updated));

    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setShowInquiryModal(false);
      setFormData({ name: '', email: '', topic: '', subject: 'Physics', message: '' });
    }, 2000);
  };

  return (
    <section className="py-20 border-t border-white/10 relative" id="study-connect">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-gradient-to-br from-[#161822] via-[#12141c] to-[#0d0f15] p-6 sm:p-10 lg:p-14 rounded-3xl shadow-2xl relative overflow-hidden border border-white/15">
        {/* Ambient Glow */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#635bff]/20 rounded-full blur-[140px] pointer-events-none" />

        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-8 z-10">
          <div>
            <span className="font-['JetBrains_Mono'] text-xs text-[#4cd7f6] uppercase tracking-widest block mb-2 font-semibold">
              Study Connect // 05
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white mb-4">
              Study Hard. Stay Humble. Crack NEET.
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-base text-[#a3a8be] max-w-lg leading-relaxed">
              Open for mutual accountability partners, peer study sessions, physics numerical doubt clearing, and formula swap in Class 11 PCB. Let&apos;s build true conceptual mastery together.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setShowInquiryModal(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#635bff] text-white font-['Manrope'] text-sm font-semibold shadow-lg shadow-[#635bff]/30 hover:bg-[#5249e0] hover:-translate-y-0.5 transition-all"
            >
              <Users className="w-4 h-4" />
              <span>Connect for Peer Study</span>
            </button>

            {/* Copyable Email Button */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-['JetBrains_Mono'] text-xs transition-all relative group"
              title="Click to copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300 font-semibold">Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#4cd7f6]" />
                  <span>{userEmail}</span>
                </>
              )}
            </button>
          </div>

          {/* Recent Peer Inquiries Ticker */}
          <div className="pt-6 border-t border-white/10">
            <div className="flex items-center justify-between text-xs font-['JetBrains_Mono'] text-[#70758e] mb-3">
              <span>Recent Peer Inquiries &amp; Questions ({inquiries.length})</span>
              <button
                onClick={() => setShowInquiryModal(true)}
                className="text-[#4cd7f6] hover:underline"
              >
                + Drop a Doubt
              </button>
            </div>
            <div className="space-y-2">
              {inquiries.slice(0, 2).map((inq) => (
                <div
                  key={inq.id}
                  className="p-3 rounded-xl bg-[#0c0e13]/80 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <div className="font-['Space_Grotesk'] text-xs font-bold text-white flex items-center gap-2">
                      <span>{inq.name}</span>
                      <span className="text-[10px] font-['JetBrains_Mono'] px-2 py-0.5 rounded bg-white/10 text-[#c3c0ff]">
                        {inq.subject}
                      </span>
                    </div>
                    <p className="text-[11px] font-['Manrope'] text-[#a3a8be] line-clamp-1">
                      {inq.message}
                    </p>
                  </div>
                  <span className="text-[10px] font-['JetBrains_Mono'] text-[#70758e] shrink-0">
                    {inq.timestamp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Base Location & Channels */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:items-end z-10">
          <div className="lg:text-right">
            <span className="font-['JetBrains_Mono'] text-xs text-[#70758e] uppercase block mb-1">
              Base Location &amp; Routine
            </span>
            <p className="font-['Manrope'] text-base text-white font-medium">
              India • CBSE Board &amp; NEET Track
            </p>
            <p className="font-['JetBrains_Mono'] text-xs text-[#4cd7f6] mt-0.5">
              IST (UTC+05:30) • Active Evening Focus (6 PM – 11 PM)
            </p>
          </div>

          <div className="space-y-3 w-full sm:w-auto">
            <span className="font-['JetBrains_Mono'] text-xs text-[#70758e] uppercase block mb-1">
              Peer Communities &amp; Channels
            </span>
            <div className="flex flex-col gap-2.5 w-full sm:w-80">
              <a
                href="#study-connect"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Telegram Study Group: @VarunNEET_PCB (Active for Class 11 PCB daily problem swaps).');
                }}
                className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[#0c0e13]/70 hover:bg-[#1b1e2a] text-[#c7c4d8] hover:text-white transition-all font-['JetBrains_Mono'] text-xs border border-white/5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#4cd7f6]" />
                  <span>Telegram Study Circle</span>
                </div>
                <div className="flex items-center gap-1 text-[#70758e]">
                  <span>@VarunNEET_PCB</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>

              <a
                href="#modules"
                className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[#0c0e13]/70 hover:bg-[#1b1e2a] text-[#c7c4d8] hover:text-white transition-all font-['JetBrains_Mono'] text-xs border border-white/5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#c3c0ff]" />
                  <span>Notion Formula Sheets</span>
                </div>
                <div className="flex items-center gap-1 text-[#70758e]">
                  <span>Public Notes</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Peer Study Modal */}
      {showInquiryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#161822] rounded-2xl border border-white/15 p-6 sm:p-8 max-w-lg w-full shadow-2xl relative">
            <button
              onClick={() => setShowInquiryModal(false)}
              className="absolute top-4 right-4 text-[#a3a8be] hover:text-white p-2 rounded-lg bg-white/5"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#635bff]/20 text-[#c3c0ff] flex items-center justify-center">
                <Users className="w-5 h-5 text-[#4cd7f6]" />
              </div>
              <div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">
                  Connect for Peer Study
                </h3>
                <p className="font-['JetBrains_Mono'] text-xs text-[#a3a8be]">
                  Drop a physics numerical doubt, chemistry question, or study request.
                </p>
              </div>
            </div>

            {submittedSuccess ? (
              <div className="p-8 text-center space-y-3">
                <Check className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-['Space_Grotesk'] text-lg font-bold text-white">
                  Message Sent to Varun!
                </h4>
                <p className="font-['Manrope'] text-xs text-[#a3a8be]">
                  Saved to Varun&apos;s peer log. He checks questions during his post-study review slot.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-['JetBrains_Mono'] text-[#70758e] block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aryan / Dr. Gupta"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0c0e13] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-['JetBrains_Mono'] text-[#70758e] block mb-1">
                      Your Email / Telegram
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0c0e13] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-['JetBrains_Mono'] text-[#70758e] block mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#0c0e13] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
                    >
                      <option value="Physics">Physics (Mechanics/Waves)</option>
                      <option value="Chemistry">Chemistry (GOC/Physical)</option>
                      <option value="Biology">Biology (Physiology/Cell)</option>
                      <option value="Accountability">Study Accountability Partner</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-['JetBrains_Mono'] text-[#70758e] block mb-1">
                      Specific Chapter / Topic
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rotational Motion / MOT"
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full bg-[#0c0e13] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-['JetBrains_Mono'] text-[#70758e] block mb-1">
                    Question, Doubt or Discussion Topic
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe your numerical doubt or proposed study schedule..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0c0e13] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowInquiryModal(false)}
                    className="px-4 py-2 rounded-xl text-xs text-[#a3a8be] hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#635bff] text-white text-xs font-semibold shadow-lg hover:bg-[#5249e0]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Doubt / Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
