import React, { useState } from 'react';
import { Question, UserAnswerRecord } from '../types/quiz';
import { FuriganaText } from './FuriganaText';
import { ReadingPassage } from './ReadingPassage';
import { ExplanationBox } from './ExplanationBox';
import {
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Globe,
  Check,
  RotateCcw,
} from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  userAnswer?: UserAnswerRecord;
  totalQuestions: number;
  onSelectOption: (optionId: number) => void;
  onNextQuestion: () => void;
  onPrevQuestion: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  onOpenDrawer: () => void;
  onResetSingleQuestion?: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  userAnswer,
  totalQuestions,
  onSelectOption,
  onNextQuestion,
  onPrevQuestion,
  hasPrev,
  hasNext,
  onOpenDrawer,
  onResetSingleQuestion,
}) => {
  const [showQuestionTranslation, setShowQuestionTranslation] = useState(false);
  const isAnswered = !!userAnswer;

  return (
    <div className="card shadow-lg border-slate-200" style={{ padding: '1.5rem' }}>
      {/* Top Section / Progress Meta */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #f1f5f9',
          paddingBottom: '0.85rem',
          marginBottom: '1.25rem',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <span
            className="badge badge-indigo"
            style={{ fontSize: '0.82rem', padding: '0.35rem 0.75rem' }}
          >
            {question.sectionId === 'I' && 'Bagian I: 文法語彙'}
            {question.sectionId === 'II' && 'Bagian II: 読解'}
            {question.sectionId === 'III' && 'Bagian III: 漢字'}
            {question.sectionId === 'IV' && 'Bagian IV: 記述'}
          </span>
          <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
            {question.subSectionTitle}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={onOpenDrawer}
            className="btn btn-secondary"
            style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', borderRadius: '9999px' }}
            title="Buka Daftar Nomor Soal"
          >
            Soal <strong>{question.id}</strong> / {totalQuestions}
          </button>
        </div>
      </div>

      {/* Reading passage if question has passage */}
      {question.passage && <ReadingPassage passage={question.passage} />}

      {/* Prompt Instruction */}
      {question.prompt && (
        <div
          style={{
            fontSize: '0.88rem',
            color: '#475569',
            fontWeight: 600,
            marginBottom: '0.75rem',
            background: '#f8fafc',
            padding: '0.45rem 0.85rem',
            borderRadius: '8px',
            borderLeft: '3px solid #6366f1',
          }}
        >
          {question.prompt}
        </div>
      )}

      {/* Question Text with Furigana */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '1.1rem 0.5rem',
          marginBottom: '1rem',
        }}
      >
        <div
          style={{
            fontSize: '1.35rem',
            fontWeight: 600,
            lineHeight: 2.2,
            color: '#0f172a',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: '#4f46e5',
              color: '#ffffff',
              fontSize: '0.95rem',
              fontWeight: 800,
              marginRight: '0.65rem',
              verticalAlign: 'middle',
            }}
          >
            {question.id}
          </span>
          <FuriganaText text={question.questionText} />
        </div>

        {/* Translation toggle button */}
        <div style={{ marginTop: '0.5rem' }}>
          <button
            onClick={() => setShowQuestionTranslation(!showQuestionTranslation)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#6366f1',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              padding: '0.2rem 0',
            }}
          >
            <Globe size={14} />
            {showQuestionTranslation ? 'Sembunyikan terjemahan soal' : 'Tampilkan terjemahan soal'}
          </button>

          {showQuestionTranslation && (
            <div
              className="animate-fade-in"
              style={{
                marginTop: '0.35rem',
                fontSize: '0.92rem',
                color: '#475569',
                background: '#f1f5f9',
                padding: '0.5rem 0.85rem',
                borderRadius: '8px',
                lineHeight: 1.5,
              }}
            >
              {question.questionTranslation}
            </div>
          )}
        </div>
      </div>

      {/* Options List (Migii Style instant feedback) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
        {question.options?.map((option) => {
          const isSelected = userAnswer?.selectedOption === option.id;
          const isCorrect = option.isCorrect;

          let btnClass = 'option-btn';
          let icon = null;

          if (isAnswered) {
            if (isSelected) {
              if (isCorrect) {
                btnClass += ' selected-correct';
                icon = <CheckCircle2 size={22} color="#10b981" />;
              } else {
                btnClass += ' selected-incorrect';
                icon = <XCircle size={22} color="#ef4444" />;
              }
            } else if (isCorrect) {
              // Highlight the true answer if user made a wrong choice
              btnClass += ' revealed-correct';
              icon = <Check size={20} color="#10b981" />;
            }
          }

          return (
            <button
              key={option.id}
              className={btnClass}
              onClick={() => onSelectOption(option.id)}
              disabled={isAnswered}
              style={{
                cursor: isAnswered ? 'default' : 'pointer',
              }}
            >
              <span className="option-num">{option.id}</span>
              <div style={{ flex: 1, textAlign: 'left' }}>
                <span
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: isSelected || (isAnswered && isCorrect) ? 700 : 500,
                    color: isSelected && !isCorrect ? '#991b1b' : isCorrect && isAnswered ? '#065f46' : '#1e293b',
                  }}
                >
                  <FuriganaText text={option.text} />
                </span>
                {isAnswered && (
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      color: isSelected && !isCorrect ? '#b91c1c' : isCorrect ? '#047857' : '#64748b',
                      marginTop: '0.2rem',
                    }}
                  >
                    {option.translation}
                  </span>
                )}
              </div>
              {icon && <div style={{ marginLeft: 'auto', alignSelf: 'center' }}>{icon}</div>}
            </button>
          );
        })}
      </div>

      {/* Answer status alert (Migii Style) */}
      {isAnswered && (
        <div
          className="animate-fade-in"
          style={{
            padding: '0.85rem 1rem',
            borderRadius: '10px',
            background: userAnswer.isCorrect ? '#ecfdf5' : '#fef2f2',
            border: `1px solid ${userAnswer.isCorrect ? '#a7f3d0' : '#fecaca'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            {userAnswer.isCorrect ? (
              <>
                <CheckCircle2 size={24} color="#10b981" />
                <div>
                  <strong style={{ color: '#065f46', fontSize: '1rem' }}>正解！ Jawaban Anda Benar!</strong>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: '#047857' }}>
                    Hebat! Pertahankan pemahaman konsep ini.
                  </span>
                </div>
              </>
            ) : (
              <>
                <XCircle size={24} color="#ef4444" />
                <div>
                  <strong style={{ color: '#991b1b', fontSize: '1rem' }}>不正解！ Jawaban Anda Salah.</strong>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: '#b91c1c' }}>
                    Jawaban yang tepat adalah: <strong>{question.correctAnswerDisplay}</strong>
                  </span>
                </div>
              </>
            )}
          </div>

          {onResetSingleQuestion && (
            <button
              onClick={onResetSingleQuestion}
              className="btn btn-secondary"
              style={{ fontSize: '0.78rem', padding: '0.35rem 0.65rem' }}
              title="Coba jawab ulang soal ini"
            >
              <RotateCcw size={14} /> Coba Lagi
            </button>
          )}
        </div>
      )}

      {/* Explanation Box - Automatically shown when answered */}
      {isAnswered && (
        <ExplanationBox
          explanation={question.explanation}
          correctAnswerDisplay={question.correctAnswerDisplay}
          questionTranslation={question.questionTranslation}
          options={question.options}
        />
      )}

      {/* Navigation Footer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '1.75rem',
          borderTop: '1px solid #f1f5f9',
          paddingTop: '1.25rem',
          gap: '0.75rem',
        }}
      >
        <button
          onClick={onPrevQuestion}
          disabled={!hasPrev}
          className="btn btn-secondary"
          style={{ opacity: hasPrev ? 1 : 0.4, cursor: hasPrev ? 'pointer' : 'not-allowed' }}
        >
          <ChevronLeft size={18} />
          <span>Sebelumnya</span>
        </button>

        <button
          onClick={onOpenDrawer}
          className="btn btn-ghost"
          style={{ fontSize: '0.85rem' }}
        >
          <HelpCircle size={16} />
          <span>Daftar Soal</span>
        </button>

        <button
          onClick={onNextQuestion}
          disabled={!hasNext}
          className="btn btn-primary"
          style={{ opacity: hasNext ? 1 : 0.5, cursor: hasNext ? 'pointer' : 'not-allowed' }}
        >
          <span>Selanjutnya</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};
