export interface Flashcard {
  id: string;
  subject: 'Biology' | 'Physics' | 'Chemistry';
  chapter: string;
  front: string;
  back: string;
  hint?: string;
  highYield?: boolean;
}

export const FLASHCARDS_DATA: Flashcard[] = [
  // Biology
  {
    id: 'bio-1',
    subject: 'Biology',
    chapter: 'Cell Cycle & Cell Division',
    front: 'At which checkpoint of the cell cycle is DNA integrity strictly verified before replication starts?',
    back: 'The G1/S Checkpoint (Restriction Point). Regulated by Cyclin D/CDK4 and p53. If DNA is damaged, p53 arrests the cell or triggers apoptosis.',
    hint: 'Occurs right before S-phase DNA replication.',
    highYield: true,
  },
  {
    id: 'bio-2',
    subject: 'Biology',
    chapter: 'Body Fluids & Circulation',
    front: 'What causes the "Lub" (first heart sound) and "Dub" (second heart sound)?',
    back: '• Lub: Closure of atrioventricular (Tricuspid & Bicuspid/Mitral) valves at the onset of ventricular systole.\n• Dub: Closure of semilunar (Aortic & Pulmonary) valves at the onset of ventricular diastole.',
    hint: 'Valve closures, not valve openings.',
    highYield: true,
  },
  {
    id: 'bio-3',
    subject: 'Biology',
    chapter: 'Excretory Products & Elimination',
    front: 'How does the Countercurrent Multiplier mechanism in the Henle Loop maintain medullary hyperosmolarity?',
    back: '• Descending limb: Permeable to water, impermeable to electrolytes (filtrate becomes hypertonic ~1200 mOsm/L).\n• Ascending limb: Impermeable to water, actively transports NaCl out into medullary interstitium.\n• Vasa recta countercurrent exchanger preserves the gradient.',
    hint: 'Descends water out; ascends salts out.',
    highYield: true,
  },
  {
    id: 'bio-4',
    subject: 'Biology',
    chapter: 'Biological Classification',
    front: 'What are Heterocysts in Cyanobacteria (e.g. Nostoc, Anabaena), and why are they oxygen-impermeable?',
    back: 'Specialized thick-walled nitrogen-fixing cells containing the enzyme Nitrogenase. Nitrogenase is irreversibly poisoned by molecular oxygen, so heterocysts lack PS II and maintain anaerobic conditions.',
    hint: 'Nitrogenase sensitivity to O2.',
    highYield: true,
  },
  {
    id: 'bio-5',
    subject: 'Biology',
    chapter: 'Plant Growth & Regulators',
    front: 'Which plant growth regulator induces the "Triple Response" in seedlings, and what are its three features?',
    back: 'Ethylene (gas hormone).\nTriple Response: (1) Inhibition of stem elongation, (2) Horizontal/radial swelling of the axis, (3) Exaggerated apical hook formation.',
    hint: 'Gaseous fruit ripener hormone.',
    highYield: false,
  },

  // Chemistry
  {
    id: 'chem-1',
    subject: 'Chemistry',
    chapter: 'Chemical Bonding (MOT)',
    front: 'Why is O₂ paramagnetic according to Molecular Orbital Theory, and where are the unpaired electrons located?',
    back: 'O₂ has 16 electrons. According to MOT, the last 2 electrons occupy degenerate anti-bonding orbitals: π*2px¹ and π*2py¹ with parallel spins (Hund\'s rule), creating a net magnetic moment (paramagnetic). Bond order = (10 - 6)/2 = 2.',
    hint: 'Check antibonding π* degenerate orbitals.',
    highYield: true,
  },
  {
    id: 'chem-2',
    subject: 'Chemistry',
    chapter: 'General Organic Chemistry (GOC)',
    front: 'Why is Picric Acid (2,4,6-trinitrophenol) strongly acidic (pKa ~ 0.38) even without a carboxylic (-COOH) group?',
    back: 'Three strong electron-withdrawing nitro groups (-NO₂) at ortho and para positions disperse the negative charge on the phenoxide oxygen through intense -M (resonance) and -I (inductive) effects, exceptionally stabilizing the conjugate base.',
    hint: 'Ortho and para nitro resonance stabilization.',
    highYield: true,
  },
  {
    id: 'chem-3',
    subject: 'Chemistry',
    chapter: 'Thermodynamics',
    front: 'State the condition for spontaneity in terms of Gibbs Free Energy (ΔG) and temperature for an endothermic reaction with positive entropy (ΔH > 0, ΔS > 0).',
    back: 'ΔG = ΔH - TΔS. For ΔG < 0 (spontaneous), TΔS must exceed ΔH. Therefore, the reaction is spontaneous ONLY at HIGH temperatures (T > ΔH / ΔS).',
    hint: 'Temperature must be sufficiently high.',
    highYield: true,
  },
  {
    id: 'chem-4',
    subject: 'Chemistry',
    chapter: 'Hydrocarbons',
    front: 'What is the difference in product regioselectivity between Markovnikov Addition and the Peroxide Effect (Kharasch)?',
    back: '• Standard Markovnikov (HBr, HCl, HI): Electrophilic addition via carbocation intermediate; H⁺ adds to C with more H; Br adds to more substituted carbon.\n• Peroxide Effect (Kharasch): ONLY applies to HBr (free radical mechanism). Br• radical adds to less substituted carbon to yield the more stable secondary/tertiary alkyl radical.',
    hint: 'Peroxide effect works ONLY with HBr, not HCl or HI.',
    highYield: true,
  },

  // Physics
  {
    id: 'phys-1',
    subject: 'Physics',
    chapter: 'Rotational Motion',
    front: 'What is the velocity of the center of mass of a cylinder of mass M and radius R rolling without slipping down an incline of height h?',
    back: 'v_cm = √[ (2gh) / (1 + k²/R²) ].\nFor a solid cylinder (I = 1/2 MR², so k²/R² = 1/2):\nv_cm = √[ (2gh) / (1 + 0.5) ] = √(4gh / 3).',
    hint: 'Conservation of mechanical energy: mgh = 1/2 mv² + 1/2 Iω².',
    highYield: true,
  },
  {
    id: 'phys-2',
    subject: 'Physics',
    chapter: 'Laws of Motion & Friction',
    front: 'In a bicycle being pedaled forward, what is the direction of friction on the rear wheel vs the front wheel?',
    back: '• Rear wheel (Driving wheel): Friction acts FORWARD (opposing the slipping tendency created by pedaling torque).\n• Front wheel (Driven wheel): Friction acts BACKWARD (provides the clockwise torque to make it roll without slipping).',
    hint: 'Rear is active driver; front is passive follower.',
    highYield: true,
  },
  {
    id: 'phys-3',
    subject: 'Physics',
    chapter: 'Work, Energy & Power',
    front: 'What is the minimum speed required at the lowest point of a vertical circle of radius R for a mass tied to a light string to complete the circle?',
    back: 'v_bottom = √(5gR).\nAt the topmost point, tension T ≥ 0, which requires v_top = √(gR). By conservation of mechanical energy: 1/2 m v_bottom² = 1/2 m v_top² + mg(2R) => v_bottom = √(5gR).',
    hint: 'Tension at the top must be ≥ 0.',
    highYield: true,
  },
  {
    id: 'phys-4',
    subject: 'Physics',
    chapter: 'Gravitation',
    front: 'At what depth d below the Earth\'s surface does acceleration due to gravity become g/4?',
    back: 'g_depth = g * (1 - d/R).\nSetting g/4 = g * (1 - d/R) => 1 - d/R = 1/4 => d/R = 3/4 => d = 3R/4 = 0.75 R.\n(Note: Unlike height where inverse square law applies, depth variation is strictly linear!).',
    hint: 'Variation with depth is linear: g\' = g(1 - d/R).',
    highYield: true,
  },
];
