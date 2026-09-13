import React, { useState, useEffect } from 'react';
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
  Send,
  Edit3,
  Sparkles,
} from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  userAnswer?: UserAnswerRecord;
  totalQuestions: number;
  onSelectOption: (optionId: number) => void;
  onSubmitTextAnswer?: (answer: string) => void;
  onSubmitFillAnswer?: (answer: { A: string; B: string }) => void;
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
  onSubmitTextAnswer,
  onSubmitFillAnswer,
  onNextQuestion,
  onPrevQuestion,
  hasPrev,
  hasNext,
  onOpenDrawer,
  onResetSingleQuestion,
}) => {
  const [showQuestionTranslation, setShowQuestionTranslation] = useState(false);
  const [showExplanation, setShowExplanation] = useState(true);
  const [textInput, setTextInput] = useState('');
  const [fillAInput, setFillAInput] = useState('');
  const [fillBInput, setFillBInput] = useState('');

  const isAnswered = !!userAnswer;
  const isWrittenQuestion = question.type && question.type !== 'choice';

  // Sync inputs when question changes or when user answers
  useEffect(() => {
    setShowExplanation(true);

    if (userAnswer?.textAnswer !== undefined) {
      setTextInput(userAnswer.textAnswer);
    } else {
      setTextInput('');
    }

    if (userAnswer?.fillAnswer) {
      setFillAInput(userAnswer.fillAnswer.A || '');
      setFillBInput(userAnswer.fillAnswer.B || '');
    } else {
      setFillAInput('');
      setFillBInput('');
    }
  }, [question.id, userAnswer]);

  const handleSingleTextSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (isAnswered || !textInput.trim()) return;
    if (onSubmitTextAnswer) {
      onSubmitTextAnswer(textInput.trim());
    }
  };

  const handleFillSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (isAnswered || (!fillAInput.trim() && !fillBInput.trim())) return;
    if (onSubmitFillAnswer) {
      onSubmitFillAnswer({ A: fillAInput.trim(), B: fillBInput.trim() });
    }
  };

  return (
    <div className="card shadow-lg border-slate-200 card-responsive-padding" style={{ padding: '1.5rem' }}>
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span
            className="badge badge-indigo"
            style={{ fontSize: '0.8rem', padding: '0.3rem 0.65rem' }}
          >
            {question.sectionId === 'I' && 'Bagian I: 文法語彙'}
            {question.sectionId === 'II' && 'Bagian II: 読解'}
            {question.sectionId === 'III' && 'Bagian III: 漢字'}
            {question.sectionId === 'IV' && 'Bagian IV: 記述'}
          </span>
          <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>
            {question.subSectionTitle}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={onOpenDrawer}
            className="btn btn-secondary"
            style={{ fontSize: '0.78rem', padding: '0.3rem 0.65rem', borderRadius: '9999px' }}
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
          <FuriganaText text={question.prompt} />
        </div>
      )}

      {/* Question Text with Furigana */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '0.85rem 0.4rem',
          marginBottom: '0.85rem',
        }}
      >
        <div
          className="question-text-mobile"
          style={{
            fontSize: '1.35rem',
            fontWeight: 600,
            lineHeight: 2.2,
            color: '#0f172a',
            whiteSpace: 'pre-line',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '30px',
              height: '30px',
              borderRadius: '8px',
              background: '#4f46e5',
              color: '#ffffff',
              fontSize: '0.9rem',
              fontWeight: 800,
              marginRight: '0.55rem',
              verticalAlign: 'middle',
              flexShrink: 0,
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
                whiteSpace: 'pre-line',
              }}
            >
              {question.questionTranslation}
            </div>
          )}
        </div>
      </div>

      {/* QUESTION INTERACTION AREA */}

      {/* Type 1: Multiple Choice Questions (No. 1 to 42) */}
      {(!question.type || question.type === 'choice') && (
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
      )}

      {/* Type 2: Single Written Text Input (No. 43 to 52 - Cara Baca Kanji) */}
      {question.type === 'input' && (
        <form onSubmit={handleSingleTextSubmit} className="written-input-container">
          <label className="written-input-label">
            <Edit3 size={17} color="#4f46e5" />
            <span>Ketik Cara Baca Kanji (Hiragana / Kanji / Romaji):</span>
          </label>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              disabled={isAnswered}
              placeholder="Contoh: でんしゃ atau densha atau 電車"
              className="written-input-field"
              autoComplete="off"
              autoCapitalize="none"
              style={{
                flex: '1 1 220px',
                borderColor: isAnswered
                  ? userAnswer?.isCorrect
                    ? '#10b981'
                    : '#ef4444'
                  : undefined,
              }}
            />

            {!isAnswered && (
              <button
                type="submit"
                disabled={!textInput.trim()}
                className="btn btn-primary"
                style={{
                  padding: '0.75rem 1.25rem',
                  fontSize: '0.95rem',
                  opacity: textInput.trim() ? 1 : 0.5,
                  cursor: textInput.trim() ? 'pointer' : 'not-allowed',
                }}
              >
                <Send size={16} /> Periksa
              </button>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.65rem', fontSize: '0.8rem', color: '#64748b' }}>
            <Sparkles size={14} color="#6366f1" />
            <span>Bebas dijawab dengan Hiragana, Kanji, atau Romaji (huruf alfabet biasa). Tekan Enter untuk mengirim.</span>
          </div>
        </form>
      )}

      {/* Type 3: Fill-in-the-Blank Dual Input (No. 53 to 55 - Bagian A & B) */}
      {question.type === 'fill-blank' && (
        <form onSubmit={handleFillSubmit} className="written-input-container">
          <div className="fill-dual-grid">
            <div>
              <label className="written-input-label">
                <span style={{ background: '#4f46e5', color: '#ffffff', width: '20px', height: '20px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>A</span>
                <span>Isian Bagian (A):</span>
              </label>
              <input
                type="text"
                value={fillAInput}
                onChange={(e) => setFillAInput(e.target.value)}
                disabled={isAnswered}
                placeholder="Contoh: 中 / naka / 映画"
                className="written-input-field"
                autoComplete="off"
                autoCapitalize="none"
              />
            </div>

            <div>
              <label className="written-input-label">
                <span style={{ background: '#4f46e5', color: '#ffffff', width: '20px', height: '20px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>B</span>
                <span>Isian Bagian (B):</span>
              </label>
              <input
                type="text"
                value={fillBInput}
                onChange={(e) => setFillBInput(e.target.value)}
                disabled={isAnswered}
                placeholder="Contoh: さいふ / saifu / 見に"
                className="written-input-field"
                autoComplete="off"
                autoCapitalize="none"
              />
            </div>
          </div>

          {!isAnswered && (
            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="submit"
                disabled={!fillAInput.trim() && !fillBInput.trim()}
                className="btn btn-primary"
                style={{
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.95rem',
                  opacity: fillAInput.trim() || fillBInput.trim() ? 1 : 0.5,
                }}
              >
                <Send size={16} /> Periksa Jawaban (A) & (B)
              </button>
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.65rem', fontSize: '0.8rem', color: '#64748b' }}>
            <Sparkles size={14} color="#6366f1" />
            <span>Tuliskan kata yang pas untuk melengkapi (A) dan (B). Boleh menggunakan Hiragana, Kanji, atau Romaji.</span>
          </div>
        </form>
      )}

      {/* Type 4: Sentence Arrange Written Input (No. 56 to 60 - Susun 3 Kata Kunci) */}
      {question.type === 'sentence-arrange' && (
        <form onSubmit={handleSingleTextSubmit} className="written-input-container">
          {question.sentenceContext?.items && (
            <div style={{ marginBottom: '0.85rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.45rem' }}>
                Urutan kata kunci yang harus digunakan:
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                {question.sentenceContext.items.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <span className="keyword-badge">{item}</span>
                    {idx < (question.sentenceContext?.items?.length ?? 0) - 1 && (
                      <span style={{ color: '#94a3b8', fontWeight: 700 }}>→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          <label className="written-input-label">
            <Edit3 size={17} color="#4f46e5" />
            <span>Tuliskan Kalimat Lengkap Respon:</span>
          </label>

          <textarea
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            disabled={isAnswered}
            placeholder="Tuliskan respon kalimat lengkap di sini... Boleh menggunakan Hiragana, Kanji, atau Romaji (huruf biasa)"
            className="written-textarea"
            autoComplete="off"
            autoCapitalize="none"
            style={{
              borderColor: isAnswered
                ? userAnswer?.isCorrect
                  ? '#10b981'
                  : '#ef4444'
                : undefined,
            }}
          />

          {!isAnswered && (
            <div style={{ marginTop: '0.85rem', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="submit"
                disabled={!textInput.trim()}
                className="btn btn-primary"
                style={{
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.95rem',
                  opacity: textInput.trim() ? 1 : 0.5,
                }}
              >
                <Send size={16} /> Periksa Kalimat
              </button>
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.65rem', fontSize: '0.8rem', color: '#64748b' }}>
            <Sparkles size={14} color="#6366f1" />
            <span>Bebas menulis dengan Hiragana, Kanji, atau Romaji (contoh: kono fuku yori ano fuku no hou ga ii to omoimasu). Tanda baca dan spasi bersifat fleksibel!</span>
          </div>
        </form>
      )}

      {/* Answer status alert (Migii Style instant feedback) */}
      {isAnswered && (
        <div
          className="animate-fade-in"
          style={{
            padding: '0.85rem 1rem',
            borderRadius: '12px',
            background: userAnswer.isCorrect ? '#ecfdf5' : '#fef2f2',
            border: `1.5px solid ${userAnswer.isCorrect ? '#a7f3d0' : '#fecaca'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.25rem',
            gap: '0.65rem',
            maxWidth: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', minWidth: 0, flex: '1 1 180px' }}>
            {userAnswer.isCorrect ? (
              <>
                <CheckCircle2 size={24} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ minWidth: 0, wordBreak: 'break-word' }}>
                  <strong style={{ color: '#065f46', fontSize: '1rem', display: 'block' }}>
                    正解！ Jawaban Anda Benar!
                  </strong>
                  {isWrittenQuestion && (
                    <span style={{ display: 'block', fontSize: '0.85rem', color: '#047857', marginTop: '0.2rem' }}>
                      {userAnswer.fillAnswer ? (
                        <>Jawaban Anda: (A) <strong>{userAnswer.fillAnswer.A}</strong>, (B) <strong>{userAnswer.fillAnswer.B}</strong></>
                      ) : (
                        <>Jawaban Anda: <strong>{userAnswer.textAnswer}</strong></>
                      )}
                    </span>
                  )}
                  <span style={{ display: 'block', fontSize: '0.8rem', color: '#059669', marginTop: '0.2rem' }}>
                    Kunci Resmi: <strong>{question.correctAnswerDisplay}</strong>
                  </span>
                </div>
              </>
            ) : (
              <>
                <XCircle size={24} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ minWidth: 0, wordBreak: 'break-word' }}>
                  <strong style={{ color: '#991b1b', fontSize: '1rem', display: 'block' }}>
                    不正解！ Jawaban Anda Salah.
                  </strong>
                  {isWrittenQuestion && (
                    <span style={{ display: 'block', fontSize: '0.85rem', color: '#991b1b', marginTop: '0.2rem' }}>
                      {userAnswer.fillAnswer ? (
                        <>Jawaban Anda: (A) "{userAnswer.fillAnswer.A}", (B) "{userAnswer.fillAnswer.B}"</>
                      ) : (
                        <>Jawaban Anda: "{userAnswer.textAnswer}"</>
                      )}
                    </span>
                  )}
                  <span style={{ display: 'block', fontSize: '0.82rem', color: '#b91c1c', marginTop: '0.2rem' }}>
                    Jawaban yang tepat: <strong>{question.correctAnswerDisplay}</strong>
                  </span>
                </div>
              </>
            )}
          </div>

          {onResetSingleQuestion && (
            <button
              onClick={onResetSingleQuestion}
              className="btn btn-secondary"
              style={{ fontSize: '0.75rem', padding: '0.3rem 0.6rem', flexShrink: 0, whiteSpace: 'nowrap', borderRadius: '8px' }}
              title="Coba jawab ulang soal ini"
            >
              <RotateCcw size={14} /> Coba Lagi
            </button>
          )}
        </div>
      )}

      {/* Navigation Bar - PLACED ABOVE Sembunyikan Pembahasan as requested! */}
      <div
        className="nav-footer-mobile"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '1.25rem',
          borderTop: '1px solid #f1f5f9',
          paddingTop: '1rem',
          gap: '0.5rem',
        }}
      >
        <button
          onClick={onPrevQuestion}
          disabled={!hasPrev}
          className="btn btn-secondary"
          style={{ opacity: hasPrev ? 1 : 0.4, cursor: hasPrev ? 'pointer' : 'not-allowed' }}
        >
          <ChevronLeft size={16} />
          <span className="desktop-only">Sebelumnya</span>
          <span className="mobile-only">Prev</span>
        </button>

        <button
          onClick={onOpenDrawer}
          className="btn btn-ghost"
          style={{ fontSize: '0.82rem' }}
        >
          <HelpCircle size={15} />
          <span className="desktop-only">Daftar Soal</span>
          <span className="mobile-only">Grid</span>
        </button>

        <button
          onClick={onNextQuestion}
          disabled={!hasNext}
          className="btn btn-primary"
          style={{ opacity: hasNext ? 1 : 0.5, cursor: hasNext ? 'pointer' : 'not-allowed' }}
        >
          <span className="desktop-only">Selanjutnya</span>
          <span className="mobile-only">Next</span>
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Toggle Explanation Button if answered (directly below Selanjutnya / nav bar) */}
      {isAnswered && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.75rem', marginBottom: '0.25rem' }}>
          <button
            type="button"
            onClick={() => setShowExplanation((prev) => !prev)}
            style={{
              background: 'none',
              border: 'none',
              color: '#4f46e5',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'underline',
              padding: '0.25rem 0.5rem',
            }}
          >
            {showExplanation ? '▲ Sembunyikan Pembahasan' : '▼ Buka Pembahasan & Kunci'}
          </button>
        </div>
      )}

      {/* Explanation Box - Shown when answered and expanded */}
      {isAnswered && showExplanation && (
        <>
          <ExplanationBox
            explanation={question.explanation}
            correctAnswerDisplay={question.correctAnswerDisplay}
            questionTranslation={question.questionTranslation}
            options={question.options}
          />

          {/* Secondary Bottom Navigation if user scrolled to the bottom of the explanation */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '1rem',
              paddingTop: '0.75rem',
              borderTop: '1px dashed #e2e8f0',
            }}
          >
            <button
              onClick={onPrevQuestion}
              disabled={!hasPrev}
              className="btn btn-secondary"
              style={{ fontSize: '0.82rem', padding: '0.4rem 0.8rem', opacity: hasPrev ? 1 : 0.4 }}
            >
              <ChevronLeft size={14} />
              <span>Sebelumnya</span>
            </button>

            <button
              onClick={onNextQuestion}
              disabled={!hasNext}
              className="btn btn-primary"
              style={{ fontSize: '0.82rem', padding: '0.4rem 0.8rem', opacity: hasNext ? 1 : 0.5 }}
            >
              <span>Selanjutnya</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
