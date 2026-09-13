import { UserAnswerRecord, AppMode, SectionId, QuestionSource } from '../types/quiz';

const STORAGE_KEYS = {
  QUESTION_SOURCE: 'ef_exam_source_v1',
  USER_ANSWERS: 'ef_exam_user_answers_v1',
  CURRENT_QUESTION_ID: 'ef_exam_current_q_v1',
  APP_MODE: 'ef_exam_app_mode_v1',
  ACTIVE_SECTION: 'ef_exam_active_section_v1',
  SHOW_TRANSLATION: 'ef_exam_show_translation_v1',
};

export const getStoredAnswers = (): Record<number, UserAnswerRecord> => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USER_ANSWERS);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error('Failed to load answers from localStorage', e);
    return {};
  }
};

export const saveUserAnswer = (answer: UserAnswerRecord): void => {
  try {
    const current = getStoredAnswers();
    current[answer.questionId] = answer;
    localStorage.setItem(STORAGE_KEYS.USER_ANSWERS, JSON.stringify(current));
  } catch (e) {
    console.error('Failed to save answer to localStorage', e);
  }
};

export const clearAllAnswers = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.USER_ANSWERS);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_QUESTION_ID);
  } catch (e) {
    console.error('Failed to clear answers from localStorage', e);
  }
};

export const getStoredAppMode = (): AppMode => {
  try {
    const mode = localStorage.getItem(STORAGE_KEYS.APP_MODE) as AppMode;
    return mode || 'select';
  } catch {
    return 'select';
  }
};

export const saveAppMode = (mode: AppMode): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.APP_MODE, mode);
  } catch (e) {
    console.error('Failed to save app mode', e);
  }
};

export const getStoredQuestionId = (defaultId: number = 1): number => {
  try {
    const id = localStorage.getItem(STORAGE_KEYS.CURRENT_QUESTION_ID);
    return id ? parseInt(id, 10) : defaultId;
  } catch {
    return defaultId;
  }
};

export const saveCurrentQuestionId = (id: number): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.CURRENT_QUESTION_ID, id.toString());
  } catch (e) {
    console.error('Failed to save question id', e);
  }
};

export const getStoredActiveSection = (): SectionId | 'ALL' => {
  try {
    const section = localStorage.getItem(STORAGE_KEYS.ACTIVE_SECTION) as SectionId | 'ALL';
    return section || 'ALL';
  } catch {
    return 'ALL';
  }
};

export const saveActiveSection = (section: SectionId | 'ALL'): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_SECTION, section);
  } catch (e) {
    console.error('Failed to save active section', e);
  }
};

export const getStoredQuestionSource = (): QuestionSource | null => {
  try {
    const src = localStorage.getItem(STORAGE_KEYS.QUESTION_SOURCE) as QuestionSource | null;
    return src === 'ef' || src === 'dekiru' || src === 'situasi' ? src : null;
  } catch {
    return null;
  }
};

export const saveQuestionSource = (source: QuestionSource | null): void => {
  try {
    if (source) {
      localStorage.setItem(STORAGE_KEYS.QUESTION_SOURCE, source);
    } else {
      localStorage.removeItem(STORAGE_KEYS.QUESTION_SOURCE);
    }
  } catch (e) {
    console.error('Failed to save question source', e);
  }
};
