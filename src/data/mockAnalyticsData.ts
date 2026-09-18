export interface MockTestRecord {
  id: string;
  testName: string;
  date: string;
  syllabus: string;
  biologyScore: number; // Max 360
  physicsScore: number; // Max 180
  chemistryScore: number; // Max 180
  totalScore: number; // Max 720
  percentile: number;
  negativeMarks: number; // Deductions
  accuracy: number; // Percentage
  keyMistakeChapter: string;
  notes: string;
}

export const MOCK_TEST_RECORDS: MockTestRecord[] = [
  {
    id: 'mock-1',
    testName: 'Minor Diagnostic Test 01',
    date: '14 July 2025',
    syllabus: 'Living World, Units & Dim, Some Basic Concepts Chem',
    biologyScore: 320,
    physicsScore: 132,
    chemistryScore: 140,
    totalScore: 592,
    percentile: 94.2,
    negativeMarks: 16,
    accuracy: 86.4,
    keyMistakeChapter: 'Significant figures in Physics calculation',
    notes: 'Initial baseline test. Strong biology recall; made calculation mistakes in chemistry stoichiometry.',
  },
  {
    id: 'mock-2',
    testName: 'Minor Diagnostic Test 02',
    date: '28 July 2025',
    syllabus: 'Biological Classification, Motion in Straight Line, Atomic Structure',
    biologyScore: 335,
    physicsScore: 142,
    chemistryScore: 148,
    totalScore: 625,
    percentile: 96.8,
    negativeMarks: 12,
    accuracy: 89.8,
    keyMistakeChapter: 'de Broglie wavelength vs photon velocity',
    notes: 'Significant improvement in physics sign conventions. Biology taxonomy recall was crisp.',
  },
  {
    id: 'mock-3',
    testName: 'Monthly Cumulative Test 01',
    date: '18 August 2025',
    syllabus: 'Plant Kingdom, Motion in Plane, Periodic Trends & Bonding',
    biologyScore: 340,
    physicsScore: 148,
    chemistryScore: 154,
    totalScore: 642,
    percentile: 98.1,
    negativeMarks: 9,
    accuracy: 92.5,
    keyMistakeChapter: 'Relative velocity rain-man vector subtraction',
    notes: 'Crossed 640 mark boundary. Chemistry MOT questions answered with 100% accuracy.',
  },
  {
    id: 'mock-4',
    testName: 'Minor Diagnostic Test 04',
    date: '08 September 2025',
    syllabus: 'Animal Kingdom, NLM & Friction, Thermodynamics',
    biologyScore: 345,
    physicsScore: 152,
    chemistryScore: 158,
    totalScore: 655,
    percentile: 98.7,
    negativeMarks: 8,
    accuracy: 94.1,
    keyMistakeChapter: 'Reversible vs Irreversible adiabatic work sign',
    notes: 'Animal phylum symmetry questions scored full marks. Friction block-on-block mastered.',
  },
  {
    id: 'mock-5',
    testName: 'Major Term-1 Mock Simulation',
    date: '28 September 2025',
    syllabus: 'Morphology, WEP & Rotational, Chemical Equilibrium',
    biologyScore: 350,
    physicsScore: 158,
    chemistryScore: 164,
    totalScore: 672,
    percentile: 99.3,
    negativeMarks: 5,
    accuracy: 96.2,
    keyMistakeChapter: 'Rolling without slipping acceleration factor (k^2/R^2)',
    notes: 'Best performance so far! Only 5 negative marks across 180 questions. Within AIIMS New Delhi contention tier.',
  },
];
