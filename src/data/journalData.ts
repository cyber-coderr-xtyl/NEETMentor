export interface JournalArticle {
  id: string;
  title: string;
  category: 'Cardiovascular' | 'Nephrology' | 'Neuro-Biophysics' | 'Medical Philosophy';
  readTime: string;
  date: string;
  abstract: string;
  content: string[];
  neetConnection: string;
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-1',
    title: 'The Biophysics of Hemodialysis & Countercurrent Osmolarity',
    category: 'Nephrology',
    readTime: '4 min read',
    date: '12 September 2025',
    abstract: 'Why understanding the Henle loop medullary gradient in Class 11 Biology is direct preparation for artificial renal replacement therapy in intensive care.',
    content: [
      'While studying NCERT Chapter 19 (Excretory Products & Their Elimination), the countercurrent multiplier mechanism initially seemed like an abstract diagram of arrows and osmolarities ranging from 300 to 1200 mOsm/L.',
      'However, connecting this to modern dialysis machines reveals the genius of biological design. The hemodialyzer is essentially an external artificial glomerulus and nephron loop. Blood flows in one direction through semipermeable hollow fibers, while dialysate fluid flows countercurrently on the outside.',
      'The principle remains identical: countercurrent flow maintains a continuous concentration gradient across the entire path length, preventing equilibrium and maximizing clearance of urea, creatinine, and excess potassium ions.',
      'Medicine isn’t just memorizing definitions—it is the direct engineering of human biophysics to save lives when organic systems fail.',
    ],
    neetConnection: 'Directly reinforces NCERT lines on the juxtamedullary nephrons, vasa recta hairpin loops, and ADH/RAAS hormonal volume regulation.',
  },
  {
    id: 'art-2',
    title: 'Decoding the Electrocardiogram: Vectors Meet Cardiac Electrophysiology',
    category: 'Cardiovascular',
    readTime: '5 min read',
    date: '28 August 2025',
    abstract: 'How Physics electric dipole vectors explain why Lead II shows the tallest R-wave during ventricular depolarization.',
    content: [
      'In Biology, we learn: P wave = atrial depolarization, QRS complex = ventricular depolarization, T wave = ventricular repolarization. But why does the standard Lead II ECG record the most pronounced upward deflection during the QRS wave?',
      'The answer is pure Physics mechanics and vector resolution. The heart’s anatomical electrical axis points downward, forward, and to the left (roughly along the line connecting the right shoulder to the left leg).',
      'Lead II measures the electrical potential difference along precisely this anatomical axis. When the main wavefront of ventricular depolarization spreads down the bundle of His and Purkinje fibers, the dipole vector is directly parallel to Lead II.',
      'By projecting the cardiac vector onto Einthoven’s triangle, an abnormal ECG axis immediately hints at ventricular hypertrophy or bundle branch block. Physics and Biology are not two distinct subjects—they are one coherent language.',
    ],
    neetConnection: 'Covers NCERT Circulation: SAN action potential speed, AV bundle delay, and clinical ECG standard lead interpretation.',
  },
  {
    id: 'art-3',
    title: 'Why AIIMS New Delhi: The Privilege of Tertiary Clinical Immersion',
    category: 'Medical Philosophy',
    readTime: '3 min read',
    date: '15 August 2025',
    abstract: 'Reflections on the relentless daily 8.5-hour study routine and the medical vision driving every solved MCQ.',
    content: [
      'Preparing for NEET is often reduced to cutoffs, mock percentiles, and negative marking matrices. But during late-night study hours, when solving 100 physics mechanics problems feels exhausting, the true motivator is never just an exam rank.',
      'At AIIMS New Delhi, a physician does not merely treat conventional illnesses; they encounter rare genetic disorders, refractory cardiovascular emergencies, and groundbreaking clinical trials. The hospital corridor sees patients from the most impoverished rural districts of India receiving world-class tertiary care.',
      'Every minute spent analyzing a biochemical pathway or resolving friction vectors builds the diagnostic stamina needed when a patient’s life depends on rapid, accurate judgment.',
      'To earn the stethoscope at the country’s premier institute requires unwavering discipline today. That is the covenant I make with myself every morning at 6:00 AM.',
    ],
    neetConnection: 'The North Star guiding the Class 11 & 12 NEET preparation journey.',
  },
];
