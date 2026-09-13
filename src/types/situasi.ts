export interface SituationItem {
  imageDescription: string;
  why: string;
  japanese: string;
  reading: string;
  meaning: string;
  response?: string;
  responseReading?: string;
  responseMeaning?: string;
}

export interface SectionPattern {
  form: string;
  meaning: string;
  example: string;
  exampleMeaning: string;
}

export interface CategoryEntry {
  id?: string;
  category: string;
  pattern?: string;
  meaning?: string;
  focus?: string[];
  patternDetail?: SectionPattern;
  situations: SituationItem[];
}

export interface QuickReferenceItem {
  condition: string;
  use: string;
  example: string;
  meaning: string;
}

export interface SituasiPage {
  page: number;
  title: string;
  subtitle?: string;
  description?: string;
  sourceNote?: string;
  studyMode?: string;
  entries: CategoryEntry[];
  quickReference: QuickReferenceItem[];
}
