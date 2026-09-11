export type SectionId = 'I' | 'II' | 'III' | 'IV';

export interface QuestionOption {
  id: number;
  text: string;
  translation: string;
  isCorrect: boolean;
}

export interface IncorrectReason {
  optionId: number;
  text: string;
  reason: string;
}

export interface Explanation {
  whyCorrect: string;
  whyIncorrect?: IncorrectReason[];
  grammarPoint?: string;
  vocabularyNote?: string;
}

export interface ReadingPassage {
  id: string;
  title?: string;
  content: string; // contains {kanji|furigana} tags matching photo strictly
  translation: string;
  note?: string;
}

export interface Question {
  id: number;
  sectionId: SectionId;
  sectionTitle: string;
  subSectionTitle?: string;
  type: 'choice' | 'input' | 'fill-blank' | 'sentence-arrange';
  prompt?: string;
  questionText: string; // e.g. "このへやはとても（　）ですね。" with exact furigana markup {漢字|ふりがな}
  questionTranslation: string;
  passage?: ReadingPassage;
  options?: QuestionOption[];
  correctAnswer: number | string | { A: string; B: string };
  correctAnswerDisplay: string;
  explanation: Explanation;
  // For Part IV (B) sentence arrangement:
  sentenceContext?: {
    speakerA?: string;
    speakerATranslation?: string;
    speakerBLead?: string;
    items?: string[];
    speakerBEnd?: string;
    followUpA?: string;
    followUpATranslation?: string;
  };
}

export interface UserAnswerRecord {
  questionId: number;
  selectedOption?: number;
  textAnswer?: string;
  fillAnswer?: { A: string; B: string };
  isCorrect: boolean;
  answeredAt: string;
}

export type AppMode = 'select' | 'exam' | 'review';
