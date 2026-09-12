import { dekiruExam1Data } from './dekiruExam1Data';
import { dekiruExam2Data } from './dekiruExam2Data';
import { DekiruExamData } from '../types/dekiru';

export interface DekiruExamMeta {
  id: string;
  title: string;
  subtitle: string;
  lessonRange: [number, number];
  badgeText: string;
  totalQuestions: number;
  totalSections: number;
  data: DekiruExamData;
}

export const dekiruExamsList: DekiruExamMeta[] = [
  {
    id: 'dekiru-review-1-3',
    title: 'Ujian 1 (Bab 1〜3)',
    subtitle: '『できる日本語初級』1〜3課 復習テスト',
    lessonRange: [1, 3],
    badgeText: 'Bab 1-3 • 35 Soal',
    totalQuestions: 35,
    totalSections: dekiruExam1Data.sections.length,
    data: dekiruExam1Data,
  },
  {
    id: 'dekiru-review-4-6',
    title: 'Ujian 2 (Bab 4〜6)',
    subtitle: '『できる日本語初級』4〜6課 復習テスト',
    lessonRange: [4, 6],
    badgeText: 'Bab 4-6 • 30 Soal',
    totalQuestions: 30,
    totalSections: dekiruExam2Data.sections.length,
    data: dekiruExam2Data,
  },
];

export const dekiruExamsMap: Record<string, DekiruExamData> = {
  'dekiru-review-1-3': dekiruExam1Data,
  'dekiru-review-4-6': dekiruExam2Data,
};
