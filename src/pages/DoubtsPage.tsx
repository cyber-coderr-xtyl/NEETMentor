import React, { useState, useEffect } from 'react';
import {
  HelpCircle,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  ThumbsUp,
  Search,
  PlusCircle,
  Filter,
  Sparkles,
  BookOpen,
  Send,
  Bookmark,
  BookmarkCheck,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Clock,
  Layers,
  Check,
  Zap,
  Tag
} from 'lucide-react';

interface DoubtComment {
  id: string;
  author: string;
  text: string;
  timestamp: string;
}

interface DoubtItem {
  id: string;
  title: string;
  subject: 'Physics' | 'Chemistry' | 'Biology';
  chapter: string;
  category: 'Numerical' | 'Conceptual Trap' | 'NCERT Line Ambiguity' | 'Derivation';
  question: string;
  contextOrStuck: string;
  solution: {
    coreConcept: string;
    steps: string[];
    ncertReference: string;
    examinerTrap: string;
  };
  upvotes: number;
  author: string;
  date: string;
  status: 'Resolved' | 'Under Review';
  comments: DoubtComment[];
}

const INITIAL_DOUBTS: DoubtItem[] = [
  {
    id: 'doubt-phy-1',
    title: 'Why does a solid sphere reach the bottom of an incline before a hollow sphere or ring?',
    subject: 'Physics',
    chapter: 'System of Particles & Rotational Motion',
    category: 'Numerical',
    question: 'Three bodies of equal mass M and radius R—a solid sphere, a solid cylinder, and a ring—are released from rest from the top of an inclined plane of inclination θ and height h. Which arrives first, and why does mass not matter?',
    contextOrStuck: 'I kept getting confused about whether heavier objects roll faster and how radius of gyration (k) plays into the acceleration formula.',
    solution: {
      coreConcept: 'Linear acceleration of a rolling body down an incline: a = (g sin θ) / (1 + I / (M R²)) = (g sin θ) / (1 + k² / R²).',
      steps: [
        'Pure rolling requires friction f_s to prevent slipping, which provides the torque τ = f_s · R = I · α.',
        'Linear equation: M g sin θ - f_s = M a. Rotational equation: f_s · R = I (a / R).',
        'Solving for acceleration gives a = (g sin θ) / (1 + k²/R²). Notice that mass M and radius R cancel out!',
        'Calculate k²/R² for each geometry: Solid Sphere = 2/5 (0.4) < Solid Cylinder = 1/2 (0.5) < Hollow Sphere = 2/3 (0.67) < Ring = 1 (1.0).',
        'Smallest k²/R² means maximum linear acceleration a and minimum transit time t = √(2s/a). Therefore: Solid Sphere arrives 1st, then Solid Cylinder, then Ring last.'
      ],
      ncertReference: 'NCERT Class 11 Physics Part 1, Chapter 7, Section 7.14 "Rolling Motion", Eq. 7.49.',
      examinerTrap: 'Examiner often gives different masses (e.g. 5kg ring vs 1kg solid sphere) to trick you. Mass has ZERO effect on pure rolling acceleration down the same slope!'
    },
    upvotes: 42,
    author: 'Varun Thakur',
    date: 'Sep 15, 2026',
    status: 'Resolved',
    comments: [
      {
        id: 'c1',
        author: 'Arjun K.',
        text: 'This exact question showed up in Allen Leader Test 4 and I got -1 because I picked cylinder! Crystal clear now.',
        timestamp: '2 days ago'
      }
    ]
  },
  {
    id: 'doubt-chem-1',
    title: 'Why is O₂ paramagnetic with 2 unpaired electrons if it has an even number (16) of electrons?',
    subject: 'Chemistry',
    chapter: 'Chemical Bonding & Molecular Structure',
    category: 'Conceptual Trap',
    question: 'According to Valence Bond Theory (Lewis structure), all electrons in O=O appear paired up. How does Molecular Orbital Theory (MOT) prove paramagnetism, and which orbitals hold the unpaired electrons?',
    contextOrStuck: 'VBT octet rule states oxygen shares 2 electron pairs and has complete octets, yet liquid oxygen is strongly attracted to magnetic poles.',
    solution: {
      coreConcept: 'Molecular Orbital Theory configuration for molecules with more than 14 electrons (Z > 7).',
      steps: [
        'Total electrons in O₂ = 16. The MO energy order for Z > 7 is: σ1s < σ*1s < σ2s < σ*2s < σ2pz < (π2px = π2py) < (π*2px = π*2py) < σ*2pz.',
        'Fill electrons up to σ2pz: (σ1s)² (σ*1s)² (σ2s)² (σ*2s)² (σ2pz)² (π2px)² (π2py)² = 14 electrons filled.',
        'The remaining 2 electrons must enter the degenerate antibonding orbitals: (π*2px) and (π*2py).',
        'By Hund\'s Rule of Maximum Multiplicity, they enter singly with parallel spins: (π*2px)¹ (π*2py)¹.',
        'Presence of 2 unpaired electrons in degenerate antibonding π* orbitals produces paramagnetism with magnetic moment μ = √(2(2+2)) = √8 ≈ 2.84 BM.'
      ],
      ncertReference: 'NCERT Class 11 Chemistry Part 1, Chapter 4, Section 4.7.4 "Electronic Configuration and Molecular Behaviour".',
      examinerTrap: 'Watch out for O₂⁻ (Superoxide) with 1 unpaired electron and O₂²⁻ (Peroxide) with 0 unpaired electrons (diamagnetic). NEET loves comparing bond orders: O₂⁺ (2.5) > O₂ (2.0) > O₂⁻ (1.5) > O₂²⁻ (1.0).'
    },
    upvotes: 38,
    author: 'Varun Thakur',
    date: 'Sep 12, 2026',
    status: 'Resolved',
    comments: []
  },
  {
    id: 'doubt-bio-1',
    title: 'Why does DNA content double to 4C during S-Phase while chromosome number stays 2n?',
    subject: 'Biology',
    chapter: 'Cell Cycle and Cell Division',
    category: 'NCERT Line Ambiguity',
    question: 'If DNA replication synthesizes an exact duplicate of each strand during S phase, why do textbooks say the chromosome number remains 2n rather than becoming 4n?',
    contextOrStuck: 'Always struggled with the difference between number of chromosomes vs number of chromatids and DNA content (C vs n).',
    solution: {
      coreConcept: 'Chromosome count is determined exclusively by the number of functional centromeres, NOT the number of sister chromatids.',
      steps: [
        'In G1 phase, each diploid chromosome consists of a single chromatid (1 centromere = 1 chromosome). Total = 2n chromosomes, 2C DNA.',
        'In S phase, DNA replicates, forming an identical sister chromatid attached at the SAME centromere.',
        'Because both sister chromatids remain physically joined at the single centromere, they are still counted as ONE single duplicated chromosome.',
        'Therefore, after S and G2 phase: Chromosome number remains 2n, but DNA content is doubled to 4C.',
        'The chromosome count only doubles to 4n during Anaphase of Mitosis, when the centromeres divide and sister chromatids separate into individual daughter chromosomes.'
      ],
      ncertReference: 'NCERT Class 11 Biology, Chapter 10, Page 163: "If the initial amount of DNA is denoted as 2C then it increases to 4C. However, there is no increase in the chromosome number; if the cell had diploid or 2n number of chromosomes at G1, even after S phase the number of chromosomes remains the same, i.e., 2n."',
      examinerTrap: 'NEET Question: "A root tip cell has 16 chromosomes in G1. How many chromosomes and chromatids are present at G2?" Answer: 16 chromosomes, 32 chromatids. Don\'t write 32 chromosomes!'
    },
    upvotes: 56,
    author: 'Varun Thakur',
    date: 'Sep 10, 2026',
    status: 'Resolved',
    comments: [
      {
        id: 'c2',
        author: 'Dr. Sneha Roy',
        text: 'The centromere rule is the cleanest way to teach this. Kudos!',
        timestamp: '4 days ago'
      }
    ]
  },
  {
    id: 'doubt-phy-2',
    title: 'Minimum velocity at top of a vertical circle: String vs Massless Rigid Rod',
    subject: 'Physics',
    chapter: 'Work, Energy and Power',
    category: 'Derivation',
    question: 'What is the minimum speed required at the highest point of a vertical circular trajectory of radius R for (a) a mass tied to a light string, and (b) a mass attached to a light rigid rod?',
    contextOrStuck: 'Why is v_top = 0 allowed for a rod but causes a string to fail?',
    solution: {
      coreConcept: 'Constraint condition: A string can only support tension (T ≥ 0, cannot withstand compression), whereas a rigid rod can support both tension and compression (normal thrust).',
      steps: [
        'For String: At the apex, centripetal force is provided by T + mg = m(v_top)²/R.',
        'To prevent slackening, tension T must be ≥ 0. Critical limit is T = 0 at the top.',
        'Setting T = 0: mg = m(v_top)²/R ⟹ v_top = √(g R). Energy conservation then gives v_bottom = √(5 g R).',
        'For Rigid Rod: The rod can support the mass even when velocity drops to zero because it does not slacken (rod can exert upward normal force).',
        'Critical condition at top for rod: v_top = 0. By conservation of mechanical energy: 1/2 m (v_bottom)² = m g (2 R) ⟹ v_bottom = √(4 g R) = 2√(g R).'
      ],
      ncertReference: 'NCERT Class 11 Physics Part 1, Chapter 6, Section 6.12 "Motion in a Vertical Circle".',
      examinerTrap: 'Always check the wording in NEET: "string" implies v_bottom = √(5gR), whereas "rigid light rod" or "wire in a tube" implies v_bottom = √(4gR).'
    },
    upvotes: 29,
    author: 'Varun Thakur',
    date: 'Sep 08, 2026',
    status: 'Resolved',
    comments: []
  },
  {
    id: 'doubt-bio-2',
    title: 'Counter-Current Mechanism: Why is the Ascending Limb impermeable to water?',
    subject: 'Biology',
    chapter: 'Excretory Products and their Elimination',
    category: 'Conceptual Trap',
    question: 'Why does the thin/thick ascending limb of the loop of Henle maintain complete impermeability to water while actively pumping NaCl out into the medullary interstitium?',
    contextOrStuck: 'If the surrounding medullary fluid has high osmolarity (up to 1200 mOsmol/L), osmosis would normally force water out. Why doesn\'t this occur in the ascending limb?',
    solution: {
      coreConcept: 'Functional specialization of epithelial tight junctions and lack of aquaporin water channels in the ascending limb.',
      steps: [
        'The descending limb has abundant Aquaporin-1 channels and is freely permeable to water but impermeable to electrolytes. Water leaves, concentrating tubular filtrate to 1200 mOsmol/L at the hairpin turn.',
        'The ascending limb completely lacks aquaporin water channels and possesses tightly sealed claudin junctions that physically prevent transcellular and paracellular water transit.',
        'The thick ascending limb active Na⁺/K⁺/2Cl⁻ cotransporter (NKCC2) vigorously pumps ions into the interstitial tissue.',
        'Because salt leaves without water following, the tubular fluid becomes progressively dilute (hypotonic ~200 mOsmol/L) while the interstitium becomes hyperosmotic.',
        'This gradient is then leveraged by the Collecting Duct to resorb water under ADH/Vasopressin control.'
      ],
      ncertReference: 'NCERT Class 11 Biology, Chapter 19, Page 294, Section 19.3 "Function of the Tubules - Henle\'s Loop".',
      examinerTrap: 'NEET Statement Question: "Filtrate gets diluted as it moves up the ascending limb." TRUE! Because electrolytes are transported out while water cannot follow.'
    },
    upvotes: 47,
    author: 'Varun Thakur',
    date: 'Sep 05, 2026',
    status: 'Resolved',
    comments: []
  },
  {
    id: 'doubt-chem-2',
    title: 'Thermodynamics: Why is ΔS_surr = -ΔH_sys / T only valid at constant T and P?',
    subject: 'Chemistry',
    chapter: 'Chemical Thermodynamics',
    category: 'Derivation',
    question: 'In spontaneous reaction criteria ΔS_total = ΔS_sys + ΔS_surr, we substitute ΔS_surr = -ΔH_sys / T. What thermodynamic conditions justify this substitution?',
    contextOrStuck: 'Why is heat absorbed by surroundings considered reversible (q_surr,rev = -q_sys)?',
    solution: {
      coreConcept: 'Surroundings act as an infinitely large heat reservoir, so heat exchange causes infinitesimal temperature fluctuation (dT ≈ 0), rendering the process reversible for surroundings.',
      steps: [
        'By definition of entropy: dS_surr = dq_surr,rev / T.',
        'Because the surroundings are massive, heat transferred to/from them is transferred reversibly at constant temperature T_surr = T.',
        'By first law of thermodynamics, heat gained by surroundings equals heat lost by system: q_surr = -q_sys.',
        'At constant pressure and when only expansion work is done, q_sys,P = ΔH_sys.',
        'Therefore, dq_surr,rev = -ΔH_sys. Substituting yields: ΔS_surr = -ΔH_sys / T.',
        'Multiplying ΔS_total = ΔS_sys - ΔH_sys / T by -T yields Gibbs equation: -T ΔS_total = ΔH_sys - T ΔS_sys = ΔG_sys.'
      ],
      ncertReference: 'NCERT Class 11 Chemistry Part 1, Chapter 6, Section 6.6 "Gibbs Energy Change and Spontaneity".',
      examinerTrap: 'Spontaneity requires ΔS_total > 0 or ΔG_sys < 0 (at constant T and P). If pressure is not constant, ΔG < 0 is NOT a valid spontaneity criterion!'
    },
    upvotes: 31,
    author: 'Varun Thakur',
    date: 'Sep 02, 2026',
    status: 'Resolved',
    comments: []
  }
];

export const DoubtsPage: React.FC = () => {
  const [doubts, setDoubts] = useState<DoubtItem[]>(() => {
    const saved = localStorage.getItem('varun_neet_doubts_feed');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse doubts', e);
      }
    }
    return INITIAL_DOUBTS;
  });

  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedDoubtId, setExpandedDoubtId] = useState<string | null>('doubt-phy-1');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('varun_bookmarked_doubts');
    return saved ? JSON.parse(saved) : ['doubt-phy-1', 'doubt-bio-1'];
  });
  const [userUpvoted, setUserUpvoted] = useState<Record<string, boolean>>({});

  // Ask a Doubt Form Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formName, setFormName] = useState('');
  const [formSubject, setFormSubject] = useState<'Physics' | 'Chemistry' | 'Biology'>('Physics');
  const [formChapter, setFormChapter] = useState('');
  const [formCategory, setFormCategory] = useState<'Numerical' | 'Conceptual Trap' | 'NCERT Line Ambiguity' | 'Derivation'>('Conceptual Trap');
  const [formQuestion, setFormQuestion] = useState('');
  const [formContext, setFormContext] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // New Comment State
  const [commentInputs, setCommentInputs] = useState<Record<string, string>>({});

  useEffect(() => {
    localStorage.setItem('varun_neet_doubts_feed', JSON.stringify(doubts));
  }, [doubts]);

  useEffect(() => {
    localStorage.setItem('varun_bookmarked_doubts', JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  const handleUpvote = (id: string) => {
    if (userUpvoted[id]) return; // already upvoted
    setDoubts(prev =>
      prev.map(d => (d.id === id ? { ...d, upvotes: d.upvotes + 1 } : d))
    );
    setUserUpvoted(prev => ({ ...prev, [id]: true }));
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleAddComment = (doubtId: string) => {
    const text = commentInputs[doubtId]?.trim();
    if (!text) return;

    const newComment: DoubtComment = {
      id: `c-${Date.now()}`,
      author: 'You (Peer Aspirant)',
      text,
      timestamp: 'Just now'
    };

    setDoubts(prev =>
      prev.map(d =>
        d.id === doubtId
          ? { ...d, comments: [...(d.comments || []), newComment] }
          : d
      )
    );

    setCommentInputs(prev => ({ ...prev, [doubtId]: '' }));
  };

  const handleSubmitDoubt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formQuestion.trim() || !formChapter.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newDoubt: DoubtItem = {
        id: `user-doubt-${Date.now()}`,
        title: formQuestion.length > 80 ? formQuestion.slice(0, 80) + '...' : formQuestion,
        subject: formSubject,
        chapter: formChapter,
        category: formCategory,
        question: formQuestion,
        contextOrStuck: formContext || 'Looking for NCERT breakdown and mathematical steps.',
        solution: {
          coreConcept: `Direct clarification queued for ${formSubject} (${formChapter}).`,
          steps: [
            'Question logged into Varun\'s active study queue.',
            'Step-by-step conceptual derivation in review.',
            'Cross-referencing NCERT Exemplar and Allen/Aakash test series error patterns.'
          ],
          ncertReference: `NCERT Class 11 ${formSubject} reference pending verification.`,
          examinerTrap: 'Awaiting verified examiner notes from Varun.'
        },
        upvotes: 1,
        author: formName.trim() || 'Anonymous Aspirant',
        date: 'Today',
        status: 'Under Review',
        comments: []
      };

      setDoubts([newDoubt, ...doubts]);
      setIsSubmitting(false);
      setFormSuccess(true);

      setTimeout(() => {
        setFormSuccess(false);
        setIsModalOpen(false);
        setFormQuestion('');
        setFormChapter('');
        setFormContext('');
        setFormName('');
      }, 1500);
    }, 600);
  };

  const filteredDoubts = doubts.filter(d => {
    const matchesSubject = selectedSubject === 'All' || d.subject === selectedSubject;
    const matchesSearch =
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.chapter.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.solution.coreConcept.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  return (
    <div className="space-y-12 pb-20">
      {/* 1. SECTION HEADER & STATS */}
      <section className="relative pt-6 sm:pt-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#635bff]/20 border border-[#635bff]/30 text-[#c3c0ff] font-['JetBrains_Mono'] text-xs uppercase font-semibold">
                <HelpCircle className="w-3.5 h-3.5 text-[#4cd7f6]" />
                Academic Support // Page 13
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-['JetBrains_Mono'] text-[11px] font-semibold">
                Active Resolution Desk
              </span>
            </div>
            <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold text-white tracking-tight">
              NEET PCB Doubt Desk &amp; Concept Clinic
            </h1>
            <p className="font-['Manrope'] text-sm sm:text-base text-[#a3a8be] max-w-3xl mt-3 leading-relaxed">
              Every question where conceptual friction occurs is a potential -1 or -5 mark penalty avoided. Deep dive into step-by-step mathematical proofs, NCERT line ambiguities, and examiner trick traps analyzed by Varun Thakur.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#635bff] to-[#4cd7f6] text-white font-['Space_Grotesk'] font-bold text-sm shadow-lg shadow-[#635bff]/30 hover:opacity-95 hover:scale-[1.02] transition-all"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Ask / Log a Doubt</span>
          </button>
        </div>

        {/* Highlight Stats Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="p-4 rounded-2xl bg-[#14161f] border border-white/10 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#4cd7f6]/15 text-[#4cd7f6] flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="font-['Space_Grotesk'] text-2xl font-bold text-white">48+</div>
              <div className="font-['JetBrains_Mono'] text-xs text-[#a3a8be]">Resolved In-Depth</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#14161f] border border-white/10 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-emerald-400/15 text-emerald-400 flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="font-['Space_Grotesk'] text-2xl font-bold text-white">100%</div>
              <div className="font-['JetBrains_Mono'] text-xs text-[#a3a8be]">NCERT Line Trace</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#14161f] border border-white/10 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-amber-400/15 text-amber-400 flex items-center justify-center">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="font-['Space_Grotesk'] text-2xl font-bold text-white">16 Traps</div>
              <div className="font-['JetBrains_Mono'] text-xs text-[#a3a8be]">Examiner Pitfalls</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#14161f] border border-white/10 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#635bff]/20 text-[#c3c0ff] flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="font-['Space_Grotesk'] text-2xl font-bold text-white">&lt; 2 Hours</div>
              <div className="font-['JetBrains_Mono'] text-xs text-[#a3a8be]">Peer Review Speed</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH CONTROLS */}
      <section className="p-4 rounded-2xl bg-[#14161f] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Subject Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {['All', 'Physics', 'Chemistry', 'Biology'].map(subj => (
            <button
              key={subj}
              onClick={() => setSelectedSubject(subj)}
              className={`px-4 py-2 rounded-xl font-['JetBrains_Mono'] text-xs font-semibold transition-all ${
                selectedSubject === subj
                  ? 'bg-[#635bff] text-white shadow-md shadow-[#635bff]/30'
                  : 'bg-[#0c0e13] text-[#a3a8be] hover:text-white border border-white/5'
              }`}
            >
              {subj === 'All' ? 'All Subjects' : subj}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#70758e]" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search doubt, chapter, keyword..."
            className="w-full bg-[#0c0e13] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-[#70758e] focus:outline-none focus:border-[#4cd7f6] transition-colors"
          />
        </div>
      </section>

      {/* 3. DOUBTS LISTING */}
      <section className="space-y-4">
        {filteredDoubts.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-[#14161f] border border-white/10 space-y-3">
            <HelpCircle className="w-12 h-12 text-[#70758e] mx-auto" />
            <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white">No Doubts Found</h3>
            <p className="font-['Manrope'] text-xs text-[#a3a8be] max-w-sm mx-auto">
              No matching questions found for "{searchQuery}". Be the first to ask this question!
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#635bff] text-white text-xs font-semibold"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Ask Doubt Now</span>
            </button>
          </div>
        ) : (
          filteredDoubts.map(doubt => {
            const isExpanded = expandedDoubtId === doubt.id;
            const isBookmarked = bookmarkedIds.includes(doubt.id);
            const hasUpvoted = userUpvoted[doubt.id];

            const subjectColor =
              doubt.subject === 'Physics'
                ? 'text-[#4cd7f6] bg-[#4cd7f6]/10 border-[#4cd7f6]/20'
                : doubt.subject === 'Chemistry'
                ? 'text-amber-300 bg-amber-400/10 border-amber-400/20'
                : 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';

            return (
              <div
                key={doubt.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#141620] border-[#635bff]/40 shadow-xl shadow-black/40'
                    : 'bg-[#14161f] border-white/10 hover:border-white/20'
                }`}
              >
                {/* Doubt Card Header */}
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-2.5 py-1 rounded-lg border font-['JetBrains_Mono'] text-[11px] font-bold uppercase ${subjectColor}`}>
                        {doubt.subject}
                      </span>
                      <span className="text-xs font-['JetBrains_Mono'] text-[#a3a8be] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
                        {doubt.chapter}
                      </span>
                      <span className="text-[11px] font-['JetBrains_Mono'] text-[#c3c0ff] px-2 py-0.5 rounded-md bg-[#635bff]/15">
                        {doubt.category}
                      </span>
                      {doubt.status === 'Resolved' ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-['JetBrains_Mono'] text-emerald-400 px-2 py-0.5 rounded-md bg-emerald-400/10">
                          <Check className="w-3 h-3" /> Resolved
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-['JetBrains_Mono'] text-amber-400 px-2 py-0.5 rounded-md bg-amber-400/10">
                          <Clock className="w-3 h-3" /> In Review
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Upvote Button */}
                      <button
                        onClick={() => handleUpvote(doubt.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-['JetBrains_Mono'] transition-all ${
                          hasUpvoted
                            ? 'bg-[#635bff] border-[#635bff] text-white shadow-sm'
                            : 'bg-white/5 border-white/10 text-[#c7c4d8] hover:bg-white/10 hover:text-white'
                        }`}
                        title="Helpful doubt / I had this question too"
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>{doubt.upvotes}</span>
                      </button>

                      {/* Bookmark Button */}
                      <button
                        onClick={() => toggleBookmark(doubt.id)}
                        className={`p-1.5 rounded-xl border transition-colors ${
                          isBookmarked
                            ? 'bg-amber-400/15 border-amber-400/30 text-amber-400'
                            : 'bg-white/5 border-white/10 text-[#70758e] hover:text-white'
                        }`}
                        title={isBookmarked ? 'Saved to Bookmarks' : 'Bookmark this concept'}
                      >
                        {isBookmarked ? (
                          <BookmarkCheck className="w-4 h-4" />
                        ) : (
                          <Bookmark className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Question Title */}
                  <h3 className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                    {doubt.title}
                  </h3>

                  {/* Question Body */}
                  <p className="font-['Manrope'] text-xs sm:text-sm text-[#c7c4d8] leading-relaxed mb-3">
                    {doubt.question}
                  </p>

                  {/* Context / Where stuck */}
                  <div className="p-3 rounded-xl bg-[#0c0e13] border border-white/5 text-xs font-['Manrope'] text-[#a3a8be] flex items-start gap-2.5 mb-4">
                    <span className="font-['JetBrains_Mono'] text-[#70758e] shrink-0 font-bold">STUCK POINT:</span>
                    <span>{doubt.contextOrStuck}</span>
                  </div>

                  {/* Card Bottom Bar & Toggle */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <div className="text-[11px] font-['JetBrains_Mono'] text-[#70758e]">
                      Logged by {doubt.author} • {doubt.date}
                    </div>

                    <button
                      onClick={() => setExpandedDoubtId(isExpanded ? null : doubt.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-['JetBrains_Mono'] text-[#4cd7f6] hover:text-[#7ae2f8] transition-colors"
                    >
                      <span>{isExpanded ? 'Hide Full Solution' : 'View Verified Solution'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded Detailed Solution Section */}
                {isExpanded && (
                  <div className="border-t border-white/10 bg-[#0e1017] p-5 sm:p-6 space-y-6 animate-fadeIn">
                    {/* Core Principle / Theorem */}
                    <div className="p-4 rounded-xl bg-[#1a1c26] border border-[#635bff]/30 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#c3c0ff] font-bold uppercase">
                        <Sparkles className="w-3.5 h-3.5 text-[#4cd7f6]" />
                        Core Physical / Biological Law
                      </div>
                      <div className="font-['Space_Grotesk'] text-sm sm:text-base font-semibold text-white leading-relaxed">
                        {doubt.solution.coreConcept}
                      </div>
                    </div>

                    {/* Step-by-Step Derivation */}
                    <div className="space-y-3">
                      <h4 className="font-['Space_Grotesk'] text-sm font-bold text-white flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#4cd7f6]" />
                        <span>Step-by-Step Conceptual Solution</span>
                      </h4>
                      <div className="space-y-2.5">
                        {doubt.solution.steps.map((step, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-3 rounded-xl bg-[#14161f] border border-white/5 text-xs sm:text-sm font-['Manrope'] text-[#d1d5db]"
                          >
                            <span className="w-5 h-5 rounded-full bg-[#635bff]/20 text-[#c3c0ff] font-['JetBrains_Mono'] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* NCERT Line Reference & Examiner Trap */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* NCERT Verbatim Line */}
                      <div className="p-4 rounded-xl bg-[#121820] border border-[#4cd7f6]/30 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#4cd7f6] font-semibold">
                          <BookOpen className="w-3.5 h-3.5" />
                          NCERT Textbook Authority
                        </div>
                        <p className="font-['Manrope'] text-xs text-[#a3a8be] leading-relaxed italic">
                          "{doubt.solution.ncertReference}"
                        </p>
                      </div>

                      {/* Examiner Trap */}
                      <div className="p-4 rounded-xl bg-[#201515] border border-red-500/30 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-red-400 font-semibold">
                          <AlertCircle className="w-3.5 h-3.5" />
                          Examiner Trap / Common Misconception
                        </div>
                        <p className="font-['Manrope'] text-xs text-[#e5a0a0] leading-relaxed">
                          {doubt.solution.examinerTrap}
                        </p>
                      </div>
                    </div>

                    {/* Peer Discussion & Comment Wall */}
                    <div className="pt-4 border-t border-white/10 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-['Space_Grotesk'] text-sm font-bold text-white flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-[#c3c0ff]" />
                          <span>Peer Discussion &amp; Follow-up Queries ({doubt.comments?.length || 0})</span>
                        </h4>
                        <span className="font-['JetBrains_Mono'] text-[11px] text-[#70758e]">
                          Open for clarification
                        </span>
                      </div>

                      {/* Comments List */}
                      {doubt.comments && doubt.comments.length > 0 && (
                        <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                          {doubt.comments.map(c => (
                            <div key={c.id} className="p-3 rounded-xl bg-[#14161f] border border-white/5 space-y-1">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-['Space_Grotesk'] font-bold text-white">{c.author}</span>
                                <span className="font-['JetBrains_Mono'] text-[10px] text-[#70758e]">{c.timestamp}</span>
                              </div>
                              <p className="font-['Manrope'] text-xs text-[#a3a8be] leading-relaxed">{c.text}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Add Comment Input */}
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={commentInputs[doubt.id] || ''}
                          onChange={e => setCommentInputs({ ...commentInputs, [doubt.id]: e.target.value })}
                          onKeyDown={e => {
                            if (e.key === 'Enter') {
                              handleAddComment(doubt.id);
                            }
                          }}
                          placeholder="Have a doubt about this step? Type follow-up query..."
                          className="flex-1 bg-[#0c0e13] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#70758e] focus:outline-none focus:border-[#4cd7f6]"
                        />
                        <button
                          onClick={() => handleAddComment(doubt.id)}
                          className="px-4 py-2.5 rounded-xl bg-[#635bff] hover:bg-[#5249e0] text-white text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Reply</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </section>

      {/* 4. MODAL: ASK / LOG A DOUBT */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl bg-[#141620] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h2 className="font-['Space_Grotesk'] text-xl font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#4cd7f6]" />
                  <span>Log a NEET Doubt for Resolution</span>
                </h2>
                <p className="font-['JetBrains_Mono'] text-xs text-[#a3a8be] mt-1">
                  Varun reviews and publishes detailed conceptual breakdowns daily.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#a3a8be] hover:text-white text-xs font-['JetBrains_Mono']"
              >
                ESC / Close
              </button>
            </div>

            {formSuccess ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">Doubt Successfully Logged!</h3>
                <p className="font-['Manrope'] text-xs text-[#c7c4d8]">
                  Your question has been added to the public review queue and saved locally.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitDoubt} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-['JetBrains_Mono'] text-[#a3a8be] block mb-1">
                      Your Name / Telegram
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Aryan (11th PCB)"
                      value={formName}
                      onChange={e => setFormName(e.target.value)}
                      className="w-full bg-[#0c0e13] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-['JetBrains_Mono'] text-[#a3a8be] block mb-1">
                      Subject *
                    </label>
                    <select
                      value={formSubject}
                      onChange={e => setFormSubject(e.target.value as any)}
                      className="w-full bg-[#0c0e13] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
                    >
                      <option value="Physics">Physics (Mechanics/Thermal)</option>
                      <option value="Chemistry">Chemistry (Bonding/Thermo/GOC)</option>
                      <option value="Biology">Biology (Cell/Physiology)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-['JetBrains_Mono'] text-[#a3a8be] block mb-1">
                      Chapter &amp; Topic *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Work Energy Power, Ex 21"
                      value={formChapter}
                      onChange={e => setFormChapter(e.target.value)}
                      className="w-full bg-[#0c0e13] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-['JetBrains_Mono'] text-[#a3a8be] block mb-1">
                      Category
                    </label>
                    <select
                      value={formCategory}
                      onChange={e => setFormCategory(e.target.value as any)}
                      className="w-full bg-[#0c0e13] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
                    >
                      <option value="Conceptual Trap">Conceptual Trap</option>
                      <option value="Numerical">Numerical / Calculation</option>
                      <option value="NCERT Line Ambiguity">NCERT Line Ambiguity</option>
                      <option value="Derivation">Formula Derivation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-['JetBrains_Mono'] text-[#a3a8be] block mb-1">
                    Question Statement / Problem Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide the exact question text, options, or values given in your DPP / mock test..."
                    value={formQuestion}
                    onChange={e => setFormQuestion(e.target.value)}
                    className="w-full bg-[#0c0e13] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
                  />
                </div>

                <div>
                  <label className="text-xs font-['JetBrains_Mono'] text-[#a3a8be] block mb-1">
                    Where did your thought process get stuck?
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. I used conservation of momentum instead of energy, getting negative value."
                    value={formContext}
                    onChange={e => setFormContext(e.target.value)}
                    className="w-full bg-[#0c0e13] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-xl bg-[#635bff] hover:bg-[#5249e0] text-white text-xs font-semibold shadow-lg shadow-[#635bff]/30 transition-all flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Post Doubt to Desk</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
