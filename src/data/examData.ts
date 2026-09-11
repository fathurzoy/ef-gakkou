import { Question, SectionId } from '../types/quiz';
import { questionsPart1 } from './questionsPart1';
import { questionsPart2 } from './questionsPart2';
import { questionsPart3 } from './questionsPart3';
import { questionsPart4 } from './questionsPart4';

export const allQuestions: Question[] = [
  ...questionsPart1,
  ...questionsPart2,
  ...questionsPart3,
  ...questionsPart4,
];

export interface SectionMeta {
  id: SectionId;
  title: string;
  japaneseTitle: string;
  range: string;
  count: number;
  description: string;
}

export const examSections: SectionMeta[] = [
  {
    id: 'I',
    title: 'Tata Bahasa & Kosakata',
    japaneseTitle: '文法語彙問題',
    range: 'No. 1 ~ 22',
    count: 22,
    description: 'Pilihan ganda kosakata, partikel, bentuk kata kerja, idiom, dan keigo',
  },
  {
    id: 'II',
    title: 'Pemahaman Bacaan',
    japaneseTitle: '読解問題',
    range: 'No. 23 ~ 32',
    count: 10,
    description: '4 Wacana komprehensif (cerita sushi, masa kecil, atlet olimpiade, berita mobil)',
  },
  {
    id: 'III',
    title: 'Soal Kanji',
    japaneseTitle: '漢字問題',
    range: 'No. 33 ~ 52',
    count: 20,
    description: 'Bagian A (Pilih kanji 33-42) & Bagian B (Cara baca hiragana 43-52)',
  },
  {
    id: 'IV',
    title: 'Menulis & Menyusun Kalimat',
    japaneseTitle: '記述問題',
    range: 'No. 53 ~ 60',
    count: 8,
    description: 'Bagian A (Lengkapi kata 53-55) & Bagian B (Susun 3 kata berurutan 56-60)',
  },
];

export const getQuestionById = (id: number): Question | undefined => {
  return allQuestions.find((q) => q.id === id);
};

export const getQuestionsBySection = (sectionId: SectionId | 'ALL'): Question[] => {
  if (sectionId === 'ALL') return allQuestions;
  return allQuestions.filter((q) => q.sectionId === sectionId);
};
