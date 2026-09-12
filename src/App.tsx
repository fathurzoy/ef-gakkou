import React, { useState } from 'react';
import { AppMode, SectionId, UserAnswerRecord, QuestionSource } from './types/quiz';
import { allQuestions, getQuestionById } from './data/examData';
import {
  getStoredAnswers,
  saveUserAnswer,
  clearAllAnswers,
  getStoredAppMode,
  saveAppMode,
  getStoredQuestionId,
  saveCurrentQuestionId,
  getStoredQuestionSource,
  saveQuestionSource,
} from './utils/storage';
import { Header } from './components/Header';
import { ModeSelection } from './components/ModeSelection';
import { QuestionCard } from './components/QuestionCard';
import { QuestionDrawer } from './components/QuestionDrawer';
import { ReviewListView } from './components/ReviewListView';
import { ScoreSummaryModal } from './components/ScoreSummaryModal';
import { TipsModal } from './components/TipsModal';
import { SourceSelection } from './components/SourceSelection';
import { DekiruExamView } from './components/dekiru/DekiruExamView';

export const App: React.FC = () => {
  // Source State: null means on main source selection screen
  const [questionSource, setQuestionSource] = useState<QuestionSource | null>(() => getStoredQuestionSource());

  // Application State
  const [appMode, setAppMode] = useState<AppMode>(() => getStoredAppMode());
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(() => getStoredQuestionId(1));
  const [userAnswers, setUserAnswers] = useState<Record<number, UserAnswerRecord>>(() => getStoredAnswers());
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState<boolean>(false);
  const [isTipsOpen, setIsTipsOpen] = useState<boolean>(false);

  // Source selection handlers
  const handleSelectSource = (source: QuestionSource) => {
    setQuestionSource(source);
    saveQuestionSource(source);
  };

  const handleBackToSourceSelect = () => {
    setQuestionSource(null);
    saveQuestionSource(null);
  };

  // Sync mode changes to storage
  const handleSwitchMode = (mode: AppMode) => {
    setAppMode(mode);
    saveAppMode(mode);
  };

  // Sync question ID changes to storage
  const handleSelectQuestion = (id: number) => {
    setCurrentQuestionId(id);
    saveCurrentQuestionId(id);
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

    // Check correctness:
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

  // Reset single question to retry
  const handleResetSingleQuestion = () => {
    setUserAnswers((prev) => {
      const next = { ...prev };
      delete next[currentQuestionId];
      // Update local storage
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
    handleSelectQuestion(sectionStartQuestions[sectionId] || 1);
    handleSwitchMode('exam');
  };

  // Start exam on a specific question from review view
  const handleStartExamAt = (questionId: number) => {
    handleSelectQuestion(questionId);
    handleSwitchMode('exam');
  };

  // Current active question
  const currentQuestion = getQuestionById(currentQuestionId) || allQuestions[0];
  const totalAnswered = Object.keys(userAnswers).length;
  const totalCorrect = Object.values(userAnswers).filter((a) => a.isCorrect).length;

  // If no source is selected yet, show the 2 choices landing page
  if (!questionSource) {
    return <SourceSelection onSelectSource={handleSelectSource} />;
  }

  // If Dekiru Nihongo is selected, show Dekiru Exam View
  if (questionSource === 'dekiru') {
    return <DekiruExamView onBackToSourceSelect={handleBackToSourceSelect} />;
  }

  return (
    <div className="app-container">
      {/* Top Header */}
      <Header
        mode={appMode}
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
        {/* View 1: Mode Selection (Landing screen) */}
        {appMode === 'select' && (
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

        {/* View 2: Mode Ujian (Exam Mode ala Migii JLPT) */}
        {appMode === 'exam' && (
          <div className="exam-mode animate-fade-in">
            <QuestionCard
              question={currentQuestion}
              userAnswer={userAnswers[currentQuestion.id]}
              totalQuestions={allQuestions.length}
              onSelectOption={handleSelectOption}
              onNextQuestion={handleNextQuestion}
              onPrevQuestion={handlePrevQuestion}
              hasPrev={currentQuestionId > 1}
              hasNext={currentQuestionId < allQuestions.length}
              onOpenDrawer={() => setIsDrawerOpen(true)}
              onResetSingleQuestion={handleResetSingleQuestion}
            />
          </div>
        )}

        {/* View 3: Mode Belajar & Review (Study Mode) */}
        {appMode === 'review' && (
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

export default App;
