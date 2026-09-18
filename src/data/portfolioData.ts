import { SubjectModule, FormulaItem, ErrorTrap, TargetCollege, BookResource } from '../types';

export const SUBJECT_MODULES: SubjectModule[] = [
  {
    id: 'biology',
    title: 'Biology (Zoology & Botany)',
    subtitle: 'NCERT Line-by-Line Mastery & High-Yield Physiology',
    code: 'BIO-11',
    weightage: 'Core Weightage • 360/720',
    totalMarks: 360,
    overallProgress: 88,
    color: 'from-emerald-500/20 to-teal-500/10',
    accentColor: '#4cd7f6',
    badge: 'High Yield • 50% NEET Total',
    description:
      'Rigorous line-by-line NCERT reading with sticky margin annotations, anatomical pathway diagrams, flashcards for organ systems, and active recall drills.',
    topics: [
      { name: 'Diversity in the Living World & Plant Kingdom', progress: 94, ncertStatus: 'Completed', highYield: true },
      { name: 'Structural Organisation in Animals & Plants', progress: 86, ncertStatus: 'Completed', highYield: false },
      { name: 'Cell: The Unit of Life & Cell Cycle Division', progress: 92, ncertStatus: 'Completed', highYield: true },
      { name: 'Plant Physiology (Photosynthesis, Respiration, PGRs)', progress: 84, ncertStatus: 'In Progress', highYield: true },
      { name: 'Human Physiology (Circulation, Excretion, Neural, Endocrine)', progress: 82, ncertStatus: 'In Progress', highYield: true },
    ],
    tags: ['NCERT Line-by-Line', 'Anki Flashcards', 'Zoology Anatomies', 'Botany C3/C4 Pathways', 'MTG 3800+ MCQs'],
    activeChapter: {
      number: 'Chapter 18 & 19',
      title: 'Body Fluids & Circulation / Excretory Products and Elimination',
      keyPoints: [
        'ECG cardiac cycle waveforms: P-wave (atrial depolarisation), QRS complex (ventricular depolarisation), T-wave (ventricular repolarisation).',
        'Counter-current multiplier in Loop of Henle and Vasa Recta maintaining medullary interstitial osmolarity gradient (300 to 1200 mOsmol/L).',
        'RAAS system: Renin-Angiotensin-Aldosterone and ANF (Atrial Natriuretic Factor) counter-regulatory mechanism.'
      ]
    },
    metrics: {
      primaryTitle: 'NCERT REVISIONS',
      primaryValue: '4 Complete Cycles',
      primarySub: 'Highlighted & 100% Margin Notes',
      secondaryTitle: 'MTG FINGERTIPS',
      secondaryValue: '3,800+ MCQs',
      secondarySub: 'Accuracy rate: 94.6%',
    }
  },
  {
    id: 'physics',
    title: 'Physics (Mechanics & Waves)',
    subtitle: 'Conceptual Derivations, Calculus Vectors & Speed Problem Solving',
    code: 'PHY-11',
    weightage: 'Problem Solving • 180/720',
    totalMarks: 180,
    overallProgress: 84,
    color: 'from-violet-500/20 to-indigo-500/10',
    accentColor: '#c3c0ff',
    badge: 'Numerical Intensive',
    description:
      'Rigorous conceptual grounding in Kinematics, Newtonian Mechanics, Work Energy Power, Rotational Dynamics, and Gravitation. Daily 40 timed MCQs target with mistake logbook.',
    topics: [
      { name: 'Units, Dimensions & Mathematical Tools (Calculus & Vectors)', progress: 98, ncertStatus: 'Completed', highYield: true },
      { name: 'Kinematics in 1D & 2D (Projectile & Relative Motion)', progress: 95, ncertStatus: 'Completed', highYield: true },
      { name: 'Laws of Motion & Friction Dynamics (NLM, Pulley constraints)', progress: 92, ncertStatus: 'Completed', highYield: true },
      { name: 'Work, Energy, Power & Collisions', progress: 88, ncertStatus: 'Completed', highYield: true },
      { name: 'System of Particles & Rotational Motion (Torque, Rolling)', progress: 80, ncertStatus: 'In Progress', highYield: true },
      { name: 'Gravitation, Mechanical Properties & Thermodynamics', progress: 76, ncertStatus: 'In Progress', highYield: false },
    ],
    tags: ['H.C. Verma Vol 1', 'Formula Wall Matrix', 'Calculus Shortcuts', 'Constraint Relations', 'Daily 40 MCQs'],
    activeChapter: {
      number: 'Chapter 07',
      title: 'Rotational Motion & Moment of Inertia Theorems',
      keyPoints: [
        'Parallel Axis Theorem (I = I_cm + Md²) and Perpendicular Axis Theorem (Iz = Ix + Iy for planar laminas).',
        'Pure rolling condition without slipping: v_cm = ωR, with acceleration a_cm = αR.',
        'Total kinetic energy in rolling = KE_trans + KE_rot = 1/2 M v² (1 + k²/R²).'
      ]
    },
    metrics: {
      primaryTitle: 'HC VERMA CONCEPTS',
      primaryValue: 'Vol 1 Solved',
      primarySub: 'Objective I & II 100% verified',
      secondaryTitle: 'NEET PYQ DRILL',
      secondaryValue: '15 Years (2010-24)',
      secondarySub: 'Average speed: 1.1 min/MCQ',
    }
  },
  {
    id: 'chemistry',
    title: 'Chemistry (Physical & Organic Fundamentals)',
    subtitle: 'Reaction Mechanisms, Hybridisation & Thermodynamic Calculations',
    code: 'CHEM-11',
    weightage: 'Balanced Mastery • 180/720',
    totalMarks: 180,
    overallProgress: 86,
    color: 'from-cyan-500/20 to-blue-500/10',
    accentColor: '#acedff',
    badge: 'Physical • Organic • Inorganic',
    description:
      'Equal mastery of stoichiometry, atomic orbitals, molecular orbital theory (MOT), thermodynamic spontaneity (ΔG = ΔH - TΔS), and General Organic Chemistry (GOC) reaction intermediates.',
    topics: [
      { name: 'Some Basic Concepts (Mole, Limiting Reagent, Normality)', progress: 96, ncertStatus: 'Completed', highYield: true },
      { name: 'Structure of Atom (Quantum Numbers, De Broglie, Photoelectric)', progress: 94, ncertStatus: 'Completed', highYield: true },
      { name: 'Chemical Bonding & Molecular Structure (VSEPR, Hybridisation, MOT)', progress: 95, ncertStatus: 'Completed', highYield: true },
      { name: 'Thermodynamics & Chemical/Ionic Equilibrium', progress: 81, ncertStatus: 'In Progress', highYield: true },
      { name: 'General Organic Chemistry (GOC - Inductive, Resonance, Carbocations)', progress: 90, ncertStatus: 'In Progress', highYield: true },
      { name: 'Hydrocarbons (Alkanes, Alkenes, Alkynes, Aromaticity)', progress: 78, ncertStatus: 'In Progress', highYield: false },
    ],
    tags: ['GOC Reaction Matrix', 'MOT Bond Order Charts', 'MS Chouhan Organic', 'N. Awasthi Physical', 'NCERT Exemplars'],
    activeChapter: {
      number: 'Chapter 04 & 12',
      title: 'Chemical Bonding (MOT) & General Organic Chemistry (GOC)',
      keyPoints: [
        'Molecular Orbital Theory: For ≤14 electrons (B2, C2, N2) π2px = π2py < σ2pz; For >14 electrons (O2, F2) σ2pz < π2px = π2py.',
        'Carbocation stability order: 3° allylic/benzylic > 3° alkyl > 2° alkyl > 1° alkyl (governed by Hyperconjugation α-H and resonance).',
        'Thermodynamic spontaneity criterion: ΔG < 0 (Spontaneous process at constant T and P).'
      ]
    },
    metrics: {
      primaryTitle: 'MS CHOUHAN GOC',
      primaryValue: 'Level 1 & 2',
      primarySub: 'Resonance, Acidity & Carbocations',
      secondaryTitle: 'PHYSICAL NUMERICALS',
      secondaryValue: 'N. Awasthi Graded',
      secondarySub: 'Accuracy rate: 91.2%',
    }
  }
];

export const FORMULA_MATRIX: FormulaItem[] = [
  {
    id: 'f-phy-1',
    subject: 'Physics',
    chapter: 'Kinematics',
    title: 'Range & Max Height of Projectile',
    formula: 'R = (u² sin 2θ) / g   |   H_max = (u² sin² θ) / (2g)   |   T = (2u sin θ) / g',
    conditions: 'Constant gravitational field g, no air resistance, flat ground projection.',
    variables: 'u = initial velocity, θ = angle with horizontal, g = 9.8 m/s².',
    examTip: 'Maximum horizontal range occurs at θ = 45°. At θ = 45°, R_max = 4 × H_max!',
    highYield: true,
  },
  {
    id: 'f-phy-2',
    subject: 'Physics',
    chapter: 'Rotational Motion',
    title: 'Rolling Motion Acceleration on Incline',
    formula: 'a = (g sin θ) / (1 + k²/R²)',
    conditions: 'Pure rolling without sliding on incline of angle θ.',
    variables: 'k = radius of gyration, R = radius, g = gravity, θ = incline angle.',
    examTip: 'Smaller k²/R² reaches bottom first! Order of arrival: Solid Sphere (2/5) > Disc (1/2) > Hollow Sphere (2/3) > Ring (1).',
    highYield: true,
  },
  {
    id: 'f-phy-3',
    subject: 'Physics',
    chapter: 'Gravitation',
    title: 'Escape Velocity & Orbital Speed',
    formula: 'v_e = √(2GM/R) = √(2gR) ≈ 11.2 km/s   |   v_o = √(GM/R) = √(gR)',
    conditions: 'Surface of spherical mass M with radius R; v_e = √2 × v_o.',
    variables: 'G = gravitational constant, M = planet mass, R = radius.',
    examTip: 'Escape velocity is completely independent of the mass or angle of projection of the body!',
    highYield: true,
  },
  {
    id: 'f-chem-1',
    subject: 'Chemistry',
    chapter: 'Chemical Bonding',
    title: 'Bond Order Formula (MOT)',
    formula: 'Bond Order = (N_b - N_a) / 2',
    conditions: 'N_b = bonding electrons, N_a = anti-bonding electrons (marked with *).',
    variables: 'Higher bond order = higher bond strength, shorter bond length, higher stability.',
    examTip: 'Super-trick: 14 electrons = Bond Order 3.0. For each electron added or subtracted from 14, decrease bond order by 0.5! Note: CO+ has 13 electrons but bond order 3.5 (exception due to sp mixing).',
    highYield: true,
  },
  {
    id: 'f-chem-2',
    subject: 'Chemistry',
    chapter: 'Thermodynamics',
    title: 'Gibbs Free Energy & Spontaneity',
    formula: 'ΔG = ΔH - TΔS   |   ΔG° = -RT ln(K_eq) = -2.303 RT log(K_eq)',
    conditions: 'Constant temperature T (in Kelvin) and pressure P.',
    variables: 'ΔH = enthalpy change, ΔS = entropy change, K_eq = equilibrium constant.',
    examTip: 'If ΔH < 0 and ΔS > 0, reaction is spontaneous (ΔG < 0) at ALL temperatures! If ΔH > 0 and ΔS > 0, spontaneous only at HIGH temperatures.',
    highYield: true,
  },
  {
    id: 'f-chem-3',
    subject: 'Chemistry',
    chapter: 'Equilibrium',
    title: 'Relation Between K_p and K_c & pH Formula',
    formula: 'K_p = K_c (RT)^(Δn_g)   |   pH = -log[H+]   |   pH + pOH = 14 (at 25°C)',
    conditions: 'Δn_g = moles of gaseous products - moles of gaseous reactants.',
    variables: 'R = 0.0821 L·atm/(mol·K), T = temperature in K.',
    examTip: 'If Δn_g = 0 (e.g. H2 + I2 ⇌ 2HI), then K_p = K_c and volume changes do NOT shift equilibrium position.',
    highYield: true,
  },
  {
    id: 'f-bio-1',
    subject: 'Biology',
    chapter: 'Human Physiology',
    title: 'Cardiac Output & Stroke Volume',
    formula: 'Cardiac Output (CO) = Stroke Volume (SV) × Heart Rate (HR)',
    conditions: 'Standard healthy adult at rest: SV ≈ 70 mL, HR ≈ 72 bpm → CO ≈ 5040 mL ≈ 5 Litres/min.',
    variables: 'SV = End Diastolic Volume (EDV) - End Systolic Volume (ESV).',
    examTip: 'Athletes have higher stroke volume, hence lower resting heart rate while maintaining identical or superior cardiac output.',
    highYield: true,
  },
  {
    id: 'f-bio-2',
    subject: 'Biology',
    chapter: 'Cell Biology',
    title: 'Cell Cycle Phase Proportions & DNA Content',
    formula: 'G1 (2C DNA, 2n) → S Phase (4C DNA, 2n) → G2 (4C DNA, 2n) → Mitosis (2C, 2n in daughter cells)',
    conditions: 'Standard somatic eukaryotic cell cycle.',
    variables: 'C = quantity of DNA per cell, n = chromosome ploidy number.',
    examTip: 'CRITICAL TRAP: Chromosome number remains constant (2n) through S Phase! Only the DNA content doubles from 2C to 4C.',
    highYield: true,
  },
  {
    id: 'f-bio-3',
    subject: 'Biology',
    chapter: 'Plant Physiology',
    title: 'Calvin Cycle (C3) vs Hatch-Slack (C4) Energetics',
    formula: 'To produce 1 Glucose: C3 requires 18 ATP + 12 NADPH   |   C4 requires 30 ATP + 12 NADPH',
    conditions: 'Photosynthetic carbon fixation.',
    variables: 'RuBisCO is primary carboxylase in C3; PEPcase in mesophyll for C4.',
    examTip: 'C4 plants require 2 additional ATP per CO2 fixed (total 30 ATP vs 18 ATP), but completely avoid waste from photorespiration!',
    highYield: true,
  }
];

export const ERROR_TRAPS: ErrorTrap[] = [
  {
    id: 'trap-1',
    subject: 'Biology',
    chapter: 'Cell Division',
    trapTitle: 'Chromosome Count vs Chromatid / DNA Content in S Phase',
    commonMistake: 'Students write that chromosome number doubles from 2n to 4n during S phase.',
    correctConcept: 'Chromosome count remains strictly 2n. Only the amount of DNA per cell doubles from 2C to 4C because sister chromatids remain attached at the single centromere.',
    ruleOfThumb: 'Count centromeres to count chromosomes! One centromere = One chromosome, regardless of how many chromatids are attached.'
  },
  {
    id: 'trap-2',
    subject: 'Physics',
    chapter: 'Rotational Motion',
    trapTitle: 'Moment of Inertia: Tangent in Plane vs Perpendicular to Plane',
    commonMistake: 'Using I = 5/4 MR² for a tangent perpendicular to the circular ring instead of I = 2 MR².',
    correctConcept: 'For a ring: Diameter axis I_d = 1/2 MR². Tangent in plane = I_d + MR² = 3/2 MR². Perpendicular central axis I_z = MR². Tangent perpendicular to plane = MR² + MR² = 2 MR².',
    ruleOfThumb: 'Always draw the axis! Check if the question specifies "tangent in the plane" or "tangent perpendicular to the plane".'
  },
  {
    id: 'trap-3',
    subject: 'Chemistry',
    chapter: 'General Organic Chemistry (GOC)',
    trapTitle: 'Acidic Strength Order of Carboxylic Acids vs Phenols',
    commonMistake: 'Thinking picric acid (2,4,6-trinitrophenol) is weaker than benzoic acid because it is a phenol.',
    correctConcept: 'Picric acid has three strong -M (-R) and -I NO2 groups stabilizing the phenoxide ion through multiple resonating structures, making it far more acidic (pKa ≈ 0.38) than even acetic or benzoic acid!',
    ruleOfThumb: 'Three ortho/para nitro groups on phenol surpass standard carboxylic acid acidity. Picric acid dissolves in sodium bicarbonate (NaHCO3) releasing CO2!'
  },
  {
    id: 'trap-4',
    subject: 'Physics',
    chapter: 'Kinematics & NLM',
    trapTitle: 'Friction Direction on Driving Wheels vs Driven Wheels',
    commonMistake: 'Assuming friction is always backwards against the car motion on all tires.',
    correctConcept: 'On driving wheels (connected to engine torque), static friction acts FORWARD (it is what propels the vehicle). On non-driving/free rolling wheels, friction acts BACKWARD to provide rotational torque.',
    ruleOfThumb: 'Without forward friction on driving tires, the wheels would spin in place on ice!'
  },
  {
    id: 'trap-5',
    subject: 'Biology',
    chapter: 'Human Physiology (Circulation)',
    trapTitle: 'Myogenic Heart Regulation: Intrinsic vs Autonomic Influence',
    commonMistake: 'Believing the nervous system initiates the heartbeat.',
    correctConcept: 'The human heart is auto-excitable (myogenic), initiated by the SA Node (pacemaker). The autonomic nervous system (sympathetic and parasympathetic) only MODULATES heart rate and strength, it never initiates it.',
    ruleOfThumb: 'Sympathetic nerve releases noradrenaline (increases HR), Parasympathetic / Vagus releases acetylcholine (decreases HR).'
  }
];

export const TARGET_COLLEGES: TargetCollege[] = [
  {
    id: 'aiims-delhi',
    name: 'All India Institute of Medical Sciences (AIIMS)',
    shortCode: 'AIIMS New Delhi',
    city: 'Ansari Nagar, New Delhi',
    state: 'Delhi',
    neetCutoffRank: 'AIR 1 - 55 (General)',
    neetScoreTarget: '710+ / 720',
    mbbsSeats: 125,
    specialtyHighlight: 'Apex tertiary medical center of India, cutting-edge surgical research, zero-tuition clinical residency.',
    badge: 'Dream Goal #1',
    motto: 'शरीरमाद्यं खलु धर्मसाधनम् (The body is the primary instrument of virtue)'
  },
  {
    id: 'mamc-delhi',
    name: 'Maulana Azad Medical College (MAMC)',
    shortCode: 'MAMC New Delhi',
    city: 'Bahadur Shah Zafar Marg, New Delhi',
    state: 'Delhi',
    neetCutoffRank: 'AIR 50 - 110 (All India)',
    neetScoreTarget: '700+ / 720',
    mbbsSeats: 250,
    specialtyHighlight: 'Associated with Lok Nayak & GB Pant Hospitals; unmatched patient clinical diversity in South Asia.',
    badge: 'Tier 1 Apex',
    motto: 'Excellence in Clinical Healing'
  },
  {
    id: 'jipmer-puducherry',
    name: 'Jawaharlal Institute of Postgraduate Medical Education & Research',
    shortCode: 'JIPMER Puducherry',
    city: 'Gorimedu, Puducherry',
    state: 'Puducherry',
    neetCutoffRank: 'AIR 80 - 250 (General)',
    neetScoreTarget: '690+ / 720',
    mbbsSeats: 200,
    specialtyHighlight: 'Institute of National Importance (INI) with world-class tropical medicine research & state-of-the-art trauma centers.',
    badge: 'INI Apex',
    motto: 'Forward to Health and Knowledge'
  },
  {
    id: 'kgmu-lucknow',
    name: "King George's Medical University (KGMU)",
    shortCode: 'KGMU Lucknow',
    city: 'Chowk, Lucknow',
    state: 'Uttar Pradesh',
    neetCutoffRank: 'AIR 500 - 1500 (All India)',
    neetScoreTarget: '675+ / 720',
    mbbsSeats: 250,
    specialtyHighlight: 'Century-old historic medical campus with 4,500+ beds and legendary clinical diagnostics training.',
    badge: 'Historic Elite',
    motto: 'Truth, Service & Clinical Mastery'
  },
  {
    id: 'afmc-pune',
    name: 'Armed Forces Medical College (AFMC)',
    shortCode: 'AFMC Pune',
    city: 'Wanowrie, Pune',
    state: 'Maharashtra',
    neetCutoffRank: 'Screening 640+ + ToELR / Interview',
    neetScoreTarget: '665+ / 720',
    mbbsSeats: 150,
    specialtyHighlight: 'Premier military medical academy commissioning officers directly into the Indian Armed Forces Medical Services (AFMS).',
    badge: 'Military Medical Corps',
    motto: 'सर्वे सन्तु निरामयाः (May all be free from illness)'
  }
];

export const BOOKS_MANIFEST: BookResource[] = [
  {
    id: 'b-1',
    title: 'NCERT Biology Class 11 (Vol I & II)',
    authorOrPublisher: 'NCERT National Council',
    subject: 'Biology',
    status: 'Mastered',
    edition: '2024-25 Rationalised',
    notes: '4 cycles of line-by-line reading completed. All scientist biographies and table data memorized.'
  },
  {
    id: 'b-2',
    title: 'NCERT at Your Fingertips (Biology)',
    authorOrPublisher: 'MTG Editorial Board',
    subject: 'Biology',
    status: 'Active Solving',
    edition: 'Latest NEET Edition',
    notes: 'Completed 3,800+ MCQs across Plant & Animal kingdoms, Cell biology, and Biomolecules.'
  },
  {
    id: 'b-3',
    title: 'Concepts of Physics (Vol 1 - Mechanics)',
    authorOrPublisher: 'Prof. H.C. Verma',
    subject: 'Physics',
    status: 'Mastered',
    edition: 'Bharati Bhawan',
    notes: 'Objective I & II thoroughly solved; worked-out examples for Rotational Dynamics & NLM completed.'
  },
  {
    id: 'b-4',
    title: 'Problems in Physical Chemistry for NEET',
    authorOrPublisher: 'N. Awasthi (Balaji)',
    subject: 'Chemistry',
    status: 'Active Solving',
    edition: 'Balaji Publications',
    notes: 'Level 1 & Level 2 stoichiometry, atomic structure, and thermodynamics problem sets solved.'
  },
  {
    id: 'b-5',
    title: 'Elementary Problems in Organic Chemistry',
    authorOrPublisher: 'M.S. Chouhan (Balaji)',
    subject: 'Chemistry',
    status: 'Active Solving',
    edition: 'Balaji Publications',
    notes: 'GOC resonance stability, inductive ranking, aromaticity, and carbocation rearrangement drills.'
  },
  {
    id: 'b-6',
    title: '36 Years Chapterwise NEET-AIPMT Solved Papers',
    authorOrPublisher: 'Arihant / MTG',
    subject: 'Test Series',
    status: 'Revision Phase',
    edition: '1988 - 2024',
    notes: 'Targeting 100% past question retention to preempt recurring NTA question patterns.'
  }
];
