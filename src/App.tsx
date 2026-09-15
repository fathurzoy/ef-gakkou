import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { AppMode, SectionId, UserAnswerRecord } from './types/quiz';
import { allQuestions, getQuestionById } from './data/examData';
import {
  getStoredAnswers,
  saveUserAnswer,
  clearAllAnswers,
  saveAppMode,
  getStoredQuestionId,
  saveCurrentQuestionId,
} from './utils/storage';
import { checkSingleAnswer, checkFillBlankAnswer } from './utils/answerChecker';
import { Header } from './components/Header';
import { ModeSelection } from './components/ModeSelection';
import { QuestionCard } from './components/QuestionCard';
import { QuestionDrawer } from './components/QuestionDrawer';
import { ReviewListView } from './components/ReviewListView';
import { ScoreSummaryModal } from './components/ScoreSummaryModal';
import { TipsModal } from './components/TipsModal';
import { SourceSelection } from './components/SourceSelection';
import { DekiruExamView } from './components/dekiru/DekiruExamView';
import { SituasiStudyView } from './components/situasi/SituasiStudyView';

interface EFExamAppProps {
  mode: AppMode;
}

const EFExamApp: React.FC<EFExamAppProps> = ({ mode }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Load initial question from URL ?q= if valid, or localStorage
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(() => {
    const qParam = searchParams.get('q');
    if (qParam) {
      const parsed = parseInt(qParam, 10);
      if (!isNaN(parsed) && parsed >= 1 && parsed <= allQuestions.length) {
        return parsed;
      }
    }
    return getStoredQuestionId(1);
  });

  const [userAnswers, setUserAnswers] = useState<Record<number, UserAnswerRecord>>(() => getStoredAnswers());
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState<boolean>(false);
  const [isTipsOpen, setIsTipsOpen] = useState<boolean>(false);

  // Sync mode with localStorage
  useEffect(() => {
    saveAppMode(mode);
  }, [mode]);

  // When in exam mode, sync URL search param ?q= with currentQuestionId
  useEffect(() => {
    if (mode === 'exam') {
      const qParam = searchParams.get('q');
      if (qParam) {
        const parsed = parseInt(qParam, 10);
        if (!isNaN(parsed) && parsed >= 1 && parsed <= allQuestions.length) {
          if (parsed !== currentQuestionId) {
            setCurrentQuestionId(parsed);
            saveCurrentQuestionId(parsed);
          }
          return;
        }
      }
      // If no valid ?q= param in exam mode, set it to current question ID
      setSearchParams({ q: String(currentQuestionId) }, { replace: true });
    }
  }, [mode, searchParams]);

  // Mode switcher handler
  const handleSwitchMode = (newMode: AppMode) => {
    saveAppMode(newMode);
    if (newMode === 'select') {
      navigate('/ef');
    } else if (newMode === 'exam') {
      navigate(`/ef/exam?q=${currentQuestionId}`);
    } else if (newMode === 'review') {
      navigate('/ef/review');
    }
  };

  // Sync question ID changes to storage & URL search params
  const handleSelectQuestion = (id: number) => {
    setCurrentQuestionId(id);
    saveCurrentQuestionId(id);
    if (mode === 'exam') {
      setSearchParams({ q: String(id) }, { replace: true });
    }
  };

  // Navigation handlers
  const handleNextQuestion = () => {
    if (currentQuestionId < allQuestions.length) {
      handleSelectQuestion(currentQuestionId + 1);
    } else {
      // Completed last question, show score summary!
      setIsSummaryOpen(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionId > 1) {
      handleSelectQuestion(currentQuestionId - 1);
    }
  };

  // Option selection in Exam Mode
  const handleSelectOption = (optionId: number) => {
    const currentQ = getQuestionById(currentQuestionId);
    if (!currentQ) return;

    const isCorrect = currentQ.correctAnswer === optionId;

    const record: UserAnswerRecord = {
      questionId: currentQuestionId,
      selectedOption: optionId,
      isCorrect,
      answeredAt: new Date().toISOString(),
    };

    saveUserAnswer(record);
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestionId]: record,
    }));
  };

  // Written single text answer submission (Q43-52 and Q56-60)
  const handleSubmitTextAnswer = (answer: string) => {
    const currentQ = getQuestionById(currentQuestionId);
    if (!currentQ) return;

    const accepted = currentQ.acceptedAnswers || [String(currentQ.correctAnswer)];
    const isCorrect = checkSingleAnswer(answer, accepted);

    const record: UserAnswerRecord = {
      questionId: currentQuestionId,
      textAnswer: answer,
      isCorrect,
      answeredAt: new Date().toISOString(),
    };

    saveUserAnswer(record);
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestionId]: record,
    }));
  };

  // Fill in the blanks dual submission (Q53-55)
  const handleSubmitFillAnswer = (answer: { A: string; B: string }) => {
    const currentQ = getQuestionById(currentQuestionId);
    if (!currentQ) return;

    const acceptedA = currentQ.acceptedAnswersA || [];
    const acceptedB = currentQ.acceptedAnswersB || [];
    const isCorrect = checkFillBlankAnswer(answer, acceptedA, acceptedB);

    const record: UserAnswerRecord = {
      questionId: currentQuestionId,
      fillAnswer: answer,
      isCorrect,
      answeredAt: new Date().toISOString(),
    };

    saveUserAnswer(record);
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestionId]: record,
    }));
  };

  // Reset single question to retry
  const handleResetSingleQuestion = () => {
    setUserAnswers((prev) => {
      const next = { ...prev };
      delete next[currentQuestionId];
      const stored = getStoredAnswers();
      delete stored[currentQuestionId];
      localStorage.setItem('ef_exam_user_answers_v1', JSON.stringify(stored));
      return next;
    });
  };

  // Reset all exam progress
  const handleResetAllProgress = () => {
    const confirm = window.confirm(
      'Apakah Anda yakin ingin mereset seluruh progres ujian? Semua jawaban yang tersimpan akan dihapus.'
    );
    if (confirm) {
      clearAllAnswers();
      setUserAnswers({});
      handleSelectQuestion(1);
      setIsSummaryOpen(false);
    }
  };

  // Start exam from a specific section
  const handleSelectSectionExam = (sectionId: SectionId) => {
    const sectionStartQuestions: Record<SectionId, number> = {
      I: 1,
      II: 23,
      III: 33,
      IV: 53,
    };
    const startQ = sectionStartQuestions[sectionId] || 1;
    handleSelectQuestion(startQ);
    navigate(`/ef/exam?q=${startQ}`);
  };

  // Start exam on a specific question from review view
  const handleStartExamAt = (questionId: number) => {
    handleSelectQuestion(questionId);
    navigate(`/ef/exam?q=${questionId}`);
  };

  const handleBackToSourceSelect = () => {
    navigate('/');
  };

  // Current active question
  const currentQuestion = getQuestionById(currentQuestionId) || allQuestions[0];
  const totalAnswered = Object.keys(userAnswers).length;
  const totalCorrect = Object.values(userAnswers).filter((a) => a.isCorrect).length;

  return (
    <div className="app-container">
      {/* Top Header */}
      <Header
        mode={mode}
        onSwitchMode={handleSwitchMode}
        totalAnswered={totalAnswered}
        totalCorrect={totalCorrect}
        totalQuestions={allQuestions.length}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onResetProgress={handleResetAllProgress}
        onOpenTips={() => setIsTipsOpen(true)}
        onBackToSourceSelect={handleBackToSourceSelect}
      />

      {/* Main App Body */}
      <main className="main-content">
        {/* View 1: Mode Selection (Landing screen at /ef) */}
        {mode === 'select' && (
          <ModeSelection
            onSelectMode={handleSwitchMode}
            answeredCount={totalAnswered}
            correctCount={totalCorrect}
            totalQuestions={allQuestions.length}
            onResetProgress={handleResetAllProgress}
            onSelectSectionExam={handleSelectSectionExam}
            onOpenTips={() => setIsTipsOpen(true)}
            onBackToSourceSelect={handleBackToSourceSelect}
          />
        )}

        {/* View 2: Mode Ujian (Exam Mode at /ef/exam) */}
        {mode === 'exam' && (
          <div className="exam-mode animate-fade-in">
            <QuestionCard
              question={currentQuestion}
              userAnswer={userAnswers[currentQuestion.id]}
              totalQuestions={allQuestions.length}
              onSelectOption={handleSelectOption}
              onSubmitTextAnswer={handleSubmitTextAnswer}
              onSubmitFillAnswer={handleSubmitFillAnswer}
              onNextQuestion={handleNextQuestion}
              onPrevQuestion={handlePrevQuestion}
              hasPrev={currentQuestionId > 1}
              hasNext={currentQuestionId < allQuestions.length}
              onOpenDrawer={() => setIsDrawerOpen(true)}
              onResetSingleQuestion={handleResetSingleQuestion}
            />
          </div>
        )}

        {/* View 3: Mode Belajar & Review (Study Mode at /ef/review) */}
        {mode === 'review' && (
          <ReviewListView
            questions={allQuestions}
            onStartExamAt={handleStartExamAt}
          />
        )}
      </main>

      {/* Question Drawer / Grid Modal (1 - 60) */}
      <QuestionDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        questions={allQuestions}
        currentQuestionId={currentQuestionId}
        userAnswers={userAnswers}
        onSelectQuestion={handleSelectQuestion}
      />

      {/* Score Summary Modal */}
      <ScoreSummaryModal
        isOpen={isSummaryOpen}
        onClose={() => setIsSummaryOpen(false)}
        userAnswers={userAnswers}
        onResetExam={handleResetAllProgress}
        onGoToReview={() => {
          setIsSummaryOpen(false);
          handleSwitchMode('review');
        }}
      />

      {/* Tips & Trik Modal */}
      <TipsModal
        isOpen={isTipsOpen}
        onClose={() => setIsTipsOpen(false)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <Routes>
      {/* 1. Portal Utama (Pilihan Sumber Belajar) */}
      <Route path="/" element={<SourceSelection />} />

      {/* 2. Ujian Akhir Bahasa Jepang E-F */}
      <Route path="/ef" element={<EFExamApp mode="select" />} />
      <Route path="/ef/exam" element={<EFExamApp mode="exam" />} />
      <Route path="/ef/review" element={<EFExamApp mode="review" />} />
      <Route path="/ef-exam/*" element={<Navigate to="/ef" replace />} />

      {/* 3. Ujian Dekiru Nihongo */}
      <Route path="/dekiru" element={<DekiruExamView />} />
      <Route path="/dekiru/:examId" element={<DekiruExamView />} />
      <Route path="/dekiru/:examId/:tab" element={<DekiruExamView />} />
      <Route path="/dekiru-nihongo/*" element={<Navigate to="/dekiru" replace />} />

      {/* 4. Belajar Situasi & Respons (場面で覚える日本語) */}
      <Route path="/situasi" element={<SituasiStudyView />} />
      <Route path="/situasi/quick-ref" element={<SituasiStudyView />} />

      {/* 5. Fallback ke Halaman Utama */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
