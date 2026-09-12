export interface TextSegment {
  text: string;
  reading?: string;
}

export interface SegmentContent {
  text: string;
  segments: TextSegment[];
}

export interface WordBankItem {
  id: string;
  content: SegmentContent;
  meaningId: string;
}

export interface SectionInstruction {
  text: string;
  segments: TextSegment[];
}

// Section 2 (Exam 1): Word Bank Item
export interface WordBankQuestionItem {
  id: string;
  question: SegmentContent;
  answer: {
    value: string;
    content: SegmentContent;
  };
  explanationId: string;
  solvingSteps: string[];
  grammarPoint: string;
}

// Particle Fill Item
export interface ParticleFillQuestionItem {
  id: string;
  question: SegmentContent;
  answer: string[];
  completed?: SegmentContent;
  explanationId: string;
  solvingSteps: string[];
  grammarPoint: string;
}

// Multiple Choice Item
export interface MultipleChoiceQuestionItem {
  id: string;
  question: SegmentContent;
  choices: string[];
  answer: string;
  answerRuby?: SegmentContent;
  explanationId: string;
  solvingSteps: string[];
  grammarPoint: string;
}

// Dialogue Writing Item
export interface DialogueTurn {
  speaker: string;
  content: SegmentContent;
}

export interface DialogueWritingQuestionItem {
  id: string;
  context?: {
    imageHint: string;
  };
  dialogue: DialogueTurn[];
  answer: SegmentContent;
  explanationId: string;
  solvingSteps: string[];
  grammarPoint: string;
}

// Dialogue Matching Choice
export interface MatchingChoice {
  id: string;
  content: SegmentContent;
  meaningId: string;
}

export interface DialogueMatchingQuestionItem {
  id: string;
  question: SegmentContent;
  answer: string[];
  explanationId: string;
  solvingSteps: string[];
  grammarPoint: string;
}

// Open Answer Item
export interface OpenAnswerQuestionItem {
  id: string;
  question: SegmentContent;
  paperAnswer: SegmentContent;
  sampleAnswers: SegmentContent[];
  explanationId: string;
  solvingSteps: string[];
  grammarPoint: string;
}

// Reading Comprehension True/False Item
export interface ReadingTrueFalseItem {
  id: string;
  isExample?: boolean;
  statement: SegmentContent;
  answer: '○' | '×';
  explanationId: string;
  solvingSteps?: string[];
  grammarPoint?: string;
}

// Exam 2 Specific Items
export interface TimeVocabularyQuestionItem {
  id: string;
  context: {
    date?: string;
    referenceDate?: string;
    range?: string;
    referenceRange?: string;
    year?: string;
    referenceYear?: string;
  };
  answer: SegmentContent;
  meaningId: string;
  explanationId: string;
  solvingSteps: string[];
  vocabularyPoint: string;
}

export interface AntonymQuestionItem {
  id: string;
  question: SegmentContent;
  answer: SegmentContent;
  targetAnswer: SegmentContent;
  explanationId: string;
  solvingSteps: string[];
  vocabularyPoint: string;
}

export interface CounterFillQuestionItem {
  id: string;
  question: SegmentContent;
  visual: {
    description: string;
  };
  answer: SegmentContent;
  canonical: SegmentContent;
  explanationId: string;
  solvingSteps: string[];
  vocabularyPoint: string;
}

export interface ConjugationQuestionItem {
  id: string;
  question: SegmentContent;
  answer: SegmentContent;
  completed?: SegmentContent;
  explanationId: string;
  solvingSteps: string[];
  grammarPoint: string;
}

export interface PictureWritingQuestionItem {
  id: string;
  visual: {
    description: string;
  };
  dialogue: DialogueTurn[];
  answer: SegmentContent | Record<string, SegmentContent>;
  acceptedVariants?: SegmentContent[] | Record<string, SegmentContent[]>;
  explanationId: string;
  solvingSteps: string[];
  grammarPoint: string;
}

// Section Discriminated Union
export type DekiruSection =
  | {
      section: number;
      title: string;
      titleReading: string;
      instruction: SectionInstruction;
      type: 'word-bank';
      score?: { earned: number; max: number };
      wordBank: WordBankItem[];
      items: WordBankQuestionItem[];
    }
  | {
      section: number;
      title: string;
      titleReading: string;
      instruction: SectionInstruction;
      type: 'particle-fill';
      score?: { earned: number; max: number };
      items: ParticleFillQuestionItem[];
    }
  | {
      section: number;
      title: string;
      titleReading: string;
      instruction: SectionInstruction;
      type: 'multiple-choice';
      score?: { earned: number; max: number };
      items: MultipleChoiceQuestionItem[];
    }
  | {
      section: number;
      title: string;
      titleReading: string;
      instruction: SectionInstruction;
      type: 'dialogue-writing';
      score?: { earned: number; max: number };
      items: DialogueWritingQuestionItem[];
    }
  | {
      section: number;
      title: string;
      titleReading: string;
      instruction: SectionInstruction;
      type: 'dialogue-matching';
      score?: { earned: number; max: number };
      choices: MatchingChoice[];
      items: DialogueMatchingQuestionItem[];
    }
  | {
      section: number;
      title: string;
      titleReading: string;
      instruction: SectionInstruction;
      type: 'open-answer';
      score?: { earned: number; max: number };
      grading?: string;
      items: OpenAnswerQuestionItem[];
    }
  | {
      section: number;
      title: string;
      titleReading: string;
      instruction: SectionInstruction;
      type: 'reading-true-false';
      score?: { earned: number; max: number };
      passage: SegmentContent;
      readingStrategy?: string[];
      items: ReadingTrueFalseItem[];
    }
  | {
      section: number;
      title: string;
      titleReading: string;
      instruction: SectionInstruction;
      type: 'time-vocabulary';
      score?: { earned: number; max: number };
      items: TimeVocabularyQuestionItem[];
    }
  | {
      section: number;
      title: string;
      titleReading: string;
      instruction: SectionInstruction;
      type: 'antonym';
      score?: { earned: number; max: number };
      items: AntonymQuestionItem[];
    }
  | {
      section: number;
      title: string;
      titleReading: string;
      instruction: SectionInstruction;
      type: 'counter-fill';
      score?: { earned: number; max: number };
      items: CounterFillQuestionItem[];
    }
  | {
      section: number;
      title: string;
      titleReading: string;
      instruction: SectionInstruction;
      type: 'conjugation';
      score?: { earned: number; max: number };
      items: ConjugationQuestionItem[];
    }
  | {
      section: number;
      title: string;
      titleReading: string;
      instruction: SectionInstruction;
      type: 'picture-writing';
      score?: { earned: number; max: number };
      items: PictureWritingQuestionItem[];
    };

export interface DekiruExamData {
  schemaVersion: string;
  book: string;
  exam: {
    id: string;
    title: string;
    lessonRange: [number, number];
    source: string;
    originalScore?: { earned: number; max: number };
    datasetScore?: { earned: number; max: number };
    audioSkipped: boolean;
    skippedSections: Array<{ section: number; reason: string }>;
  };
  furigana: {
    format: string;
    description: string;
    htmlExample: string;
  };
  sections: DekiruSection[];
}
