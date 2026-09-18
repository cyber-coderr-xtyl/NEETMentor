export interface SubjectTopic {
  name: string;
  progress: number;
  ncertStatus: 'Completed' | 'In Progress' | 'Revision Round 2';
  highYield: boolean;
}

export interface SubjectModule {
  id: 'biology' | 'physics' | 'chemistry';
  title: string;
  subtitle: string;
  code: string;
  weightage: string;
  totalMarks: number;
  overallProgress: number;
  color: string;
  accentColor: string;
  badge: string;
  description: string;
  topics: SubjectTopic[];
  tags: string[];
  activeChapter: {
    number: string;
    title: string;
    keyPoints: string[];
  };
  metrics: {
    primaryTitle: string;
    primaryValue: string;
    primarySub: string;
    secondaryTitle: string;
    secondaryValue: string;
    secondarySub: string;
  };
}

export interface FormulaItem {
  id: string;
  subject: 'Physics' | 'Chemistry' | 'Biology';
  chapter: string;
  title: string;
  formula: string;
  conditions: string;
  variables: string;
  examTip: string;
  highYield: boolean;
}

export interface ErrorTrap {
  id: string;
  subject: 'Physics' | 'Chemistry' | 'Biology';
  chapter: string;
  trapTitle: string;
  commonMistake: string;
  correctConcept: string;
  ruleOfThumb: string;
}

export interface TargetCollege {
  id: string;
  name: string;
  shortCode: string;
  city: string;
  state: string;
  neetCutoffRank: string;
  neetScoreTarget: string;
  mbbsSeats: number;
  specialtyHighlight: string;
  badge: string;
  motto: string;
}

export interface BookResource {
  id: string;
  title: string;
  authorOrPublisher: string;
  subject: 'Biology' | 'Physics' | 'Chemistry' | 'Test Series';
  status: 'Mastered' | 'Active Solving' | 'Revision Phase';
  edition: string;
  notes: string;
}

export interface PeerMessage {
  id: string;
  name: string;
  email: string;
  topic: string;
  subject: string;
  message: string;
  timestamp: string;
}
