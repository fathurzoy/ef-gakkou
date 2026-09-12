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

// Section 2: Word Bank Item
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

// Section 3: Particle Fill Item
export interface ParticleFillQuestionItem {
  id: string;
  question: SegmentContent;
  answer: string[];
  explanationId: string;
  solvingSteps: string[];
  grammarPoint: string;
}

// Section 4: Multiple Choice Item
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

// Section 5: Dialogue Writing Item
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

// Section 6: Dialogue Matching Choice
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

// Section 7: Open Answer Item
export interface OpenAnswerQuestionItem {
  id: string;
  question: SegmentContent;
  paperAnswer: SegmentContent;
  sampleAnswers: SegmentContent[];
  explanationId: string;
  solvingSteps: string[];
  grammarPoint: string;
}

// Section 8: Reading Comprehension True/False Item
export interface ReadingTrueFalseItem {
  id: string;
  isExample?: boolean;
  statement: SegmentContent;
  answer: '○' | '×';
  explanationId: string;
  solvingSteps?: string[];
}

// Section Discriminated Union
export type DekiruSection =
  | {
      section: 2;
      title: string;
      titleReading: string;
      instruction: SectionInstruction;
      type: 'word-bank';
      score: { earned: number; max: number };
      wordBank: WordBankItem[];
      items: WordBankQuestionItem[];
    }
  | {
      section: 3;
      title: string;
      titleReading: string;
      instruction: SectionInstruction;
      type: 'particle-fill';
      score: { earned: number; max: number };
      items: ParticleFillQuestionItem[];
    }
  | {
      section: 4;
      title: string;
      titleReading: string;
      instruction: SectionInstruction;
      type: 'multiple-choice';
      score: { earned: number; max: number };
      items: MultipleChoiceQuestionItem[];
    }
  | {
      section: 5;
      title: string;
      titleReading: string;
      instruction: SectionInstruction;
      type: 'dialogue-writing';
      score: { earned: number; max: number };
      items: DialogueWritingQuestionItem[];
    }
  | {
      section: 6;
      title: string;
      titleReading: string;
      instruction: SectionInstruction;
      type: 'dialogue-matching';
      score: { earned: number; max: number };
      choices: MatchingChoice[];
      items: DialogueMatchingQuestionItem[];
    }
  | {
      section: 7;
      title: string;
      titleReading: string;
      instruction: SectionInstruction;
      type: 'open-answer';
      score: { earned: number; max: number };
      grading: string;
      items: OpenAnswerQuestionItem[];
    }
  | {
      section: 8;
      title: string;
      titleReading: string;
      instruction: SectionInstruction;
      type: 'reading-true-false';
      score: { earned: number; max: number };
      passage: SegmentContent;
      readingStrategy: string[];
      items: ReadingTrueFalseItem[];
    };

export interface DekiruExamData {
  schemaVersion: string;
  book: string;
  exam: {
    id: string;
    title: string;
    lessonRange: [number, number];
    source: string;
    originalScore: { earned: number; max: number };
    datasetScore: { earned: number; max: number };
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
