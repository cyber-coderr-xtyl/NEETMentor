export interface QuizQuestion {
  id: string;
  subject: 'Biology' | 'Physics' | 'Chemistry';
  chapter: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  examinerTrap: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q-1',
    subject: 'Biology',
    chapter: 'Cell Cycle & Cell Division',
    question: 'During which phase of the eukaryotic cell cycle does the centriole duplicate in the cytoplasm?',
    options: ['G1 Phase', 'S Phase', 'G2 Phase', 'Metaphase'],
    correctIndex: 1,
    explanation: 'According to NCERT Class 11, DNA replication takes place in the nucleus, and the centriole duplicates in the cytoplasm during the S (Synthesis) Phase.',
    examinerTrap: 'Students often guess G2 because centrioles are used in M phase, but duplication occurs strictly in S phase!',
  },
  {
    id: 'q-2',
    subject: 'Biology',
    chapter: 'Body Fluids & Circulation',
    question: 'The cardiac impulse originates in the Sinoatrial Node (SAN) because:',
    options: [
      'It has the highest membrane resistance',
      'It generates the maximum frequency of action potentials (70–75/min)',
      'It is under direct voluntary motor nerve control',
      'It receives oxygenated blood before any other node',
    ],
    correctIndex: 1,
    explanation: 'The SAN acts as the primary pacemaker because it possesses self-excitation rhythmicity and generates the maximum frequency of action potentials (70-75/min), dictating heart pace.',
    examinerTrap: 'Option 3 is incorrect because heart contraction in humans is myogenic and involuntary.',
  },
  {
    id: 'q-3',
    subject: 'Biology',
    chapter: 'Biological Classification',
    question: 'Which of the following organisms are known as the "Chief Producers in the Oceans"?',
    options: ['Dinoflagellates', 'Diatoms (Chrysophytes)', 'Euglenoids', 'Cyanobacteria'],
    correctIndex: 1,
    explanation: 'NCERT verbatim line: "Diatoms are the chief ‘producers’ in the oceans." They possess indestructible siliceous cell walls forming diatomaceous earth.',
    examinerTrap: 'Many confuse Diatoms with Cyanobacteria because Cyanobacteria fix nitrogen, but Diatoms are the chief producers.',
  },
  {
    id: 'q-4',
    subject: 'Chemistry',
    chapter: 'Chemical Bonding',
    question: 'Which of the following diatomic species has the highest bond order?',
    options: ['O₂', 'O₂⁺', 'O₂⁻', 'O₂²⁻'],
    correctIndex: 1,
    explanation: 'O₂⁺ has 15 electrons. Electronic configuration: (σ1s)² (σ*1s)² (σ2s)² (σ*2s)² (σ2pz)² (π2px=π2py)⁴ (π*2px)¹. Bond order = (10 - 5)/2 = 2.5. O₂ is 2.0, O₂⁻ is 1.5, O₂²⁻ is 1.0.',
    examinerTrap: 'Removing an electron from an antibonding orbital increases the bond order and stability!',
  },
  {
    id: 'q-5',
    subject: 'Chemistry',
    chapter: 'General Organic Chemistry',
    question: 'Which of the following carbocations is most stable?',
    options: [
      'CH₃-CH₂⁺',
      '(CH₃)₂CH⁺',
      '(CH₃)₃C⁺',
      'CH₂=CH-CH₂⁺ (Allylic)',
    ],
    correctIndex: 2,
    explanation: '(CH₃)₃C⁺ (tert-butyl carbocation) possesses 9 hyperconjugative α-hydrogens, making it more stable than allyl cation at standard Class 11 examination reference.',
    examinerTrap: 'While allylic has resonance, tert-butyl with 9 hyperconjugation structures has higher thermodynamic stability than a primary allyl carbocation.',
  },
  {
    id: 'q-6',
    subject: 'Chemistry',
    chapter: 'Thermodynamics',
    question: 'For an isolated system undergoing a spontaneous process, the change in entropy (ΔS_system) is always:',
    options: ['Negative', 'Zero', 'Positive', 'Independent of state'],
    correctIndex: 2,
    explanation: 'Second Law of Thermodynamics: For an isolated system (no energy or matter exchange), spontaneous processes increase the randomness/entropy: ΔS_total = ΔS_system > 0.',
    examinerTrap: 'Do not confuse with a cyclic process where ΔS_state = 0.',
  },
  {
    id: 'q-7',
    subject: 'Physics',
    chapter: 'Rotational Motion',
    question: 'A solid sphere, a solid cylinder, and a hollow sphere of equal mass and radius roll down an incline without slipping. Which reaches the bottom first?',
    options: ['Solid Cylinder', 'Solid Sphere', 'Hollow Sphere', 'All reach simultaneously'],
    correctIndex: 1,
    explanation: 'Acceleration on an incline: a = g sinθ / (1 + k²/R²). The body with the smallest k²/R² has the greatest acceleration. Solid sphere k²/R² = 2/5 = 0.4. Solid cylinder = 0.5. Hollow sphere = 2/3 = 0.67. Hence, the solid sphere wins!',
    examinerTrap: 'The mass and radius cancel out; only the moment of inertia shape factor (k/R) determines the speed.',
  },
  {
    id: 'q-8',
    subject: 'Physics',
    chapter: 'Work, Energy & Power',
    question: 'A force F = (2 + 3x) N acts on a particle in the x-direction. The work done by this force during a displacement from x = 0 to x = 4 m is:',
    options: ['20 Joules', '32 Joules', '40 Joules', '12 Joules'],
    correctIndex: 1,
    explanation: 'W = ∫ F dx from 0 to 4 = [2x + 3x²/2] from 0 to 4 = (2*4 + 3*16/2) = 8 + 24 = 32 J.',
    examinerTrap: 'Do not use W = F * d with initial force F=2 N; variable force must be integrated!',
  },
  {
    id: 'q-9',
    subject: 'Physics',
    chapter: 'Laws of Motion',
    question: 'A man stands on a spring weighing machine inside a lift. If the cable breaks and the lift falls freely, the reading on the machine is:',
    options: ['mg', '2mg', 'Zero', 'mg/2'],
    correctIndex: 2,
    explanation: 'In free fall, downward acceleration a = g. Normal reaction N = m(g - a) = m(g - g) = 0. The spring machine reads the normal reaction force, which is zero (weightlessness).',
    examinerTrap: 'Students occasionally choose mg thinking gravity is still present; but the weighing scale measures Normal contact force N, not gravitational force.',
  },
  {
    id: 'q-10',
    subject: 'Biology',
    chapter: 'Morphology of Flowering Plants',
    question: 'In Pea plants (Pisum sativum), the type of aestivation seen in the corolla is:',
    options: ['Valvate', 'Twisted', 'Imbricate', 'Vexillary (Papilionaceous)'],
    correctIndex: 3,
    explanation: 'Papilionaceous / Vexillary aestivation consists of 5 petals: 1 large posterior Standard (vexillum), 2 lateral Wings (alae), and 2 anterior fused Keel (carina). Characteristic of Fabaceae.',
    examinerTrap: 'Cassia/Gulmohar have Imbricate; China rose has Twisted; Pea has Vexillary.',
  },
];
