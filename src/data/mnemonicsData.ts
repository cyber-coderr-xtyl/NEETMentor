export interface MnemonicItem {
  id: string;
  subject: 'Biology' | 'Chemistry' | 'Physics';
  title: string;
  mnemonic: string;
  explanation: string;
  tags: string[];
}

export const MNEMONICS_DATA: MnemonicItem[] = [
  {
    id: 'mn-1',
    subject: 'Biology',
    title: 'Taxonomic Hierarchy Hierarchy Ranking',
    mnemonic: 'Keep Pond Clean Or Fish Get Sick',
    explanation: 'Kingdom > Phylum (or Division) > Class > Order > Family > Genus > Species.\n(Highest: Kingdom, Lowest: Species).',
    tags: ['Living World', 'Taxonomy', 'Class 11'],
  },
  {
    id: 'mn-2',
    subject: 'Biology',
    title: 'Stages of Prophase I of Meiosis',
    mnemonic: 'Lazy Zebra Plays Double Dance',
    explanation: 'Leptotene (beaded chromosomes) > Zygotene (synapsis, synaptonemal complex) > Pachytene (crossing over, recombinase) > Diplotene (chiasmata visible) > Diakinesis (terminalisation).',
    tags: ['Cell Division', 'Meiosis', 'High Yield'],
  },
  {
    id: 'mn-3',
    subject: 'Biology',
    title: 'Essential Amino Acids (10)',
    mnemonic: 'PVT TIM HALL',
    explanation: 'Phenylalanine, Valine, Threonine, Tryptophan, Isoleucine, Methionine, Histidine, Arginine (semi-essential in children), Leucine, Lysine.',
    tags: ['Biomolecules', 'Nutrition'],
  },
  {
    id: 'mn-4',
    subject: 'Biology',
    title: 'Atrioventricular Valves (Which Side is Which?)',
    mnemonic: 'LAB RAT',
    explanation: 'Left Atrium = Bicuspid (Mitral) valve.\nRight Atrium = Tricuspid valve.',
    tags: ['Human Circulation', 'Cardiology'],
  },
  {
    id: 'mn-5',
    subject: 'Chemistry',
    title: 'Electrochemical Activity Series (Displacement)',
    mnemonic: 'Please Stop Calling Me A Careless Zebra, Instead Try Learning How Copper Saves Gold',
    explanation: 'Potassium (K) > Sodium (Na) > Calcium (Ca) > Magnesium (Mg) > Aluminium (Al) > Carbon (C) > Zinc (Zn) > Iron (Fe) > Tin (Sn) > Lead (Pb) > Hydrogen (H) > Copper (Cu) > Silver (Ag) > Gold (Au).',
    tags: ['Redox', 'Inorganic'],
  },
  {
    id: 'mn-6',
    subject: 'Chemistry',
    title: 'Electronegativity Order (Top Elements)',
    mnemonic: 'FONClBrISCH',
    explanation: 'F (4.0) > O (3.5) > N (3.0) ≈ Cl (3.0) > Br (2.8) > I (2.5) ≈ S (2.5) ≈ C (2.5) > H (2.1).\nHydrogen bonding only occurs with F, O, N!',
    tags: ['Periodic Table', 'Bonding'],
  },
  {
    id: 'mn-7',
    subject: 'Chemistry',
    title: 'Le Chatelier & Pressure on Gas Equilibrium',
    mnemonic: 'High Pressure favors Few Moles',
    explanation: 'Increasing pressure shifts equilibrium toward the side with fewer gas moles (reducing volume and system stress).',
    tags: ['Equilibrium', 'Physical Chem'],
  },
  {
    id: 'mn-8',
    subject: 'Physics',
    title: 'Rolling Motion Acceleration Ranking (Same M, R down Incline)',
    mnemonic: 'Sphere > Disc > Shell > Ring (Super Doctors Save Real lives)',
    explanation: 'Smallest k²/R² rolls fastest:\nSolid Sphere (0.4) > Solid Disc (0.5) > Spherical Shell (0.67) > Ring / Hollow Cylinder (1.0).',
    tags: ['Rotational Motion', 'Mechanics'],
  },
  {
    id: 'mn-9',
    subject: 'Physics',
    title: 'Electromagnetic Wave Spectrum (Frequency Order)',
    mnemonic: 'Raging Martians Invaded Venus Using X-ray Guns',
    explanation: 'Increasing frequency / decreasing wavelength:\nRadio < Microwave < Infrared < Visible < Ultraviolet < X-rays < Gamma rays.',
    tags: ['Waves', 'EM Waves'],
  },
];
