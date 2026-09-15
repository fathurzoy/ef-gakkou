import { dekiruExam1Data } from './dekiruExam1Data';
import { dekiruExam2Data } from './dekiruExam2Data';
import { dekiruExam3Data } from './dekiruExam3Data';
import { dekiruExam4Data } from './dekiruExam4Data';
import { dekiruExam5Data } from './dekiruExam5Data';
import { dekiruExamYellow1Data } from './dekiruExamYellow1Data';
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
    id: 'dekiru-review-10-12',
    title: 'Ujian 4 (Bab 10〜12)',
    subtitle: '10〜12課 模擬復習テスト',
    lessonRange: [10, 12],
    badgeText: 'Bab 10-12 • 35 Soal',
    totalQuestions: 35,
    totalSections: dekiruExam4Data.sections.length,
    data: dekiruExam4Data,
  },
  {
    id: 'dekiru-review-13-15',
    title: 'Ujian 5 (Bab 13〜15)',
    subtitle: '13〜15課 復習テスト',
    lessonRange: [13, 15],
    badgeText: 'Bab 13-15 • 34 Soal',
    totalQuestions: 34,
    totalSections: dekiruExam5Data.sections.length,
    data: dekiruExam5Data,
  },
  {
    id: 'dekiru-kuning-1-3',
    title: 'Ujian Buku Kuning (Bab 1〜3)',
    subtitle: '初級2（黄色） 1〜3課 総合復習テスト',
    lessonRange: [1, 3],
    badgeText: 'Buku Kuning • Bab 1-3 • 84 Soal',
    totalQuestions: 84,
    totalSections: dekiruExamYellow1Data.sections.length,
    data: dekiruExamYellow1Data,
  },
];

export const dekiruExamsMap: Record<string, DekiruExamData> = {
  'dekiru-review-1-3': dekiruExam1Data,
  'dekiru-review-4-6': dekiruExam2Data,
  'dekiru-review-7-9': dekiruExam3Data,
  'dekiru-review-10-12': dekiruExam4Data,
  'dekiru-review-13-15': dekiruExam5Data,
  'dekiru-kuning-1-3': dekiruExamYellow1Data,
};

export const resolveDekiruExamId = (param?: string | null): string | null => {
  if (!param) return null;
  const clean = param.trim().toLowerCase();
  if (dekiruExamsMap[clean]) return clean;
  if (clean === '1' || clean === 'exam1' || clean === 'ujian1' || clean === 'ujian-1' || clean === 'bab-1-3') return 'dekiru-review-1-3';
  if (clean === '2' || clean === 'exam2' || clean === 'ujian2' || clean === 'ujian-2' || clean === 'bab-4-6') return 'dekiru-review-4-6';
  if (clean === '3' || clean === 'exam3' || clean === 'ujian3' || clean === 'ujian-3' || clean === 'bab-7-9') return 'dekiru-review-7-9';
  if (clean === '4' || clean === 'exam4' || clean === 'ujian4' || clean === 'ujian-4' || clean === 'bab-10-12') return 'dekiru-review-10-12';
  if (clean === '5' || clean === 'exam5' || clean === 'ujian5' || clean === 'ujian-5' || clean === 'bab-13-15') return 'dekiru-review-13-15';
  if (
    clean === 'kuning' ||
    clean === 'kuning1' ||
    clean === 'kuning-1' ||
    clean === 'yellow' ||
    clean === 'yellow1' ||
    clean === 'yellow-1' ||
    clean === 'exam-kuning-1' ||
    clean === 'bab-kuning-1-3' ||
    clean === 'buku-kuning' ||
    clean === 'dekiru-kuning-1-3'
  ) return 'dekiru-kuning-1-3';
  return null;
};

export const getDekiruSlug = (examId: string): string => {
  const map: Record<string, string> = {
    'dekiru-review-1-3': 'exam1',
    'dekiru-review-4-6': 'exam2',
    'dekiru-review-7-9': 'exam3',
    'dekiru-review-10-12': 'exam4',
    'dekiru-review-13-15': 'exam5',
    'dekiru-kuning-1-3': 'kuning1',
  };
  return map[examId] || examId;
};


