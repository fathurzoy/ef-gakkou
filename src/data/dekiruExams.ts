import { dekiruExam1Data } from './dekiruExam1Data';
import { dekiruExam2Data } from './dekiruExam2Data';
import { dekiruExam3Data } from './dekiruExam3Data';
import { dekiruExam4Data } from './dekiruExam4Data';
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
    subtitle: '1〜3課 復習テスト',
    lessonRange: [1, 3],
    badgeText: 'Bab 1-3 • 35 Soal',
    totalQuestions: 35,
    totalSections: dekiruExam1Data.sections.length,
    data: dekiruExam1Data,
  },
  {
    id: 'dekiru-review-4-6',
    title: 'Ujian 2 (Bab 4〜6)',
    subtitle: '4〜6課 復習テスト',
    lessonRange: [4, 6],
    badgeText: 'Bab 4-6 • 30 Soal',
    totalQuestions: 30,
    totalSections: dekiruExam2Data.sections.length,
    data: dekiruExam2Data,
  },
  {
    id: 'dekiru-review-7-9',
    title: 'Ujian 3 (Bab 7〜9)',
    subtitle: '7〜9課 復習テスト',
    lessonRange: [7, 9],
    badgeText: 'Bab 7-9 • 31 Soal',
    totalQuestions: 31,
    totalSections: dekiruExam3Data.sections.length,
    data: dekiruExam3Data,
  },
  {
    id: 'dekiru-review-13-15',
    title: 'Ujian 4 (Bab 13〜15)',
    subtitle: '13〜15課 復習テスト',
    lessonRange: [13, 15],
    badgeText: 'Bab 13-15 • 34 Soal',
    totalQuestions: 34,
    totalSections: dekiruExam4Data.sections.length,
    data: dekiruExam4Data,
  },
];

export const dekiruExamsMap: Record<string, DekiruExamData> = {
  'dekiru-review-1-3': dekiruExam1Data,
  'dekiru-review-4-6': dekiruExam2Data,
  'dekiru-review-7-9': dekiruExam3Data,
  'dekiru-review-13-15': dekiruExam4Data,
};
