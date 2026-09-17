import React from 'react';
import { Explanation, QuestionOption } from '../types/quiz';
import { CheckCircle2, XCircle, Lightbulb, BookOpen, Globe } from 'lucide-react';
import { FuriganaText } from './FuriganaText';
import { toRomaji } from '../utils/dekiruFurigana';

interface ExplanationBoxProps {
  explanation: Explanation;
  correctAnswerDisplay: string;
  questionTranslation: string;
  options?: QuestionOption[];
}

export const ExplanationBox: React.FC<ExplanationBoxProps> = ({
  explanation,
  correctAnswerDisplay,
  questionTranslation,
  options,
}) => {
  return (
    <div
      className="animate-fade-in"
      style={{
        marginTop: '1.25rem',
        borderRadius: '14px',
        border: '1px solid #c7d2fe',
        background: '#ffffff',
        overflow: 'hidden',
        boxShadow: '0 4px 16px -2px rgba(79, 70, 229, 0.08)',
      }}
    >
      {/* Header bar */}
      <div
        style={{
          background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
          color: '#ffffff',
          padding: '0.85rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.95rem' }}>
          <Lightbulb size={18} />
          <span>Pembahasan & Kunci Jawaban</span>
        </div>
        <div
          style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
            fontSize: '0.86rem',
            fontWeight: 600,
          }}
        >
          Kunci: <FuriganaText text={correctAnswerDisplay} />
        </div>
      </div>

      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* Indonesian Question Translation */}
        <div
          style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '0.75rem 1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
            <Globe size={13} color="#6366f1" /> Arti Soal (Bahasa Indonesia)
          </div>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#1e293b', fontWeight: 500 }}>
            {questionTranslation}
          </p>
        </div>

        {/* Why Correct */}
        <div
          style={{
            background: '#ecfdf5',
            border: '1px solid #a7f3d0',
            borderRadius: '10px',
            padding: '0.85rem 1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#065f46', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.35rem' }}>
            <CheckCircle2 size={16} color="#10b981" />
            <span>KENAPA JAWABAN INI BENAR:</span>
          </div>
          <div style={{ fontSize: '0.92rem', color: '#047857', lineHeight: 1.6 }}>
            <p style={{ margin: '0 0 0.4rem 0' }}>{explanation.whyCorrect}</p>
            {correctAnswerDisplay && (
              <div style={{ fontSize: '0.82rem', color: '#065f46', fontWeight: 600, fontStyle: 'italic' }}>
                🔤 {toRomaji(correctAnswerDisplay)}
              </div>
            )}
          </div>
        </div>

        {/* Why Incorrect (Options breakdown) */}
        {explanation.whyIncorrect && explanation.whyIncorrect.length > 0 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#991b1b', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              <XCircle size={16} color="#ef4444" />
              <span>KENAPA OPSI LAIN SALAH:</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {explanation.whyIncorrect.map((wItem) => (
                <div
                  key={wItem.optionId}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    background: '#fff1f2',
                    border: '1px solid #fecdd3',
                    borderRadius: '8px',
                    padding: '0.65rem 0.85rem',
                    fontSize: '0.88rem',
                  }}
                >
                  <span
                    style={{
                      background: '#f43f5e',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      padding: '0.1rem 0.45rem',
                      borderRadius: '9999px',
                      marginTop: '0.1rem',
                      flexShrink: 0,
                    }}
                  >
                    Opsi {wItem.optionId}
                  </span>
                  <div style={{ flex: 1, color: '#4c0519', lineHeight: 1.5 }}>
                    <div style={{ fontWeight: 700, color: '#881337', marginBottom: '0.15rem' }}>
                      <FuriganaText text={wItem.text} />
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#9f1239', fontWeight: 600, fontStyle: 'italic', marginBottom: '0.2rem' }}>
                      🔤 {toRomaji(wItem.text)}
                    </div>
                    <div>{wItem.reason}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Grammar / Vocabulary Point */}
        {explanation.grammarPoint && (
          <div
            style={{
              background: '#eff6ff',
              border: '1px solid #bfdbfe',
              borderRadius: '10px',
              padding: '0.85rem 1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#1e40af', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.35rem' }}>
              <BookOpen size={16} color="#3b82f6" />
              <span>POIN TATA BAHASA / CATATAN PENTING:</span>
            </div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#1d4ed8', lineHeight: 1.6 }}>
              {explanation.grammarPoint}
            </p>
          </div>
        )}

        {/* Options list translation if available */}
        {options && options.length > 0 && (
          <div style={{ borderTop: '1px dashed #e2e8f0', paddingTop: '0.85rem' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
              Daftar Arti Pilihan Jawaban:
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.5rem' }}>
              {options.map((opt) => (
                <div
                  key={opt.id}
                  style={{
                    fontSize: '0.85rem',
                    padding: '0.4rem 0.65rem',
                    background: opt.isCorrect ? '#ecfdf5' : '#f8fafc',
                    border: `1px solid ${opt.isCorrect ? '#a7f3d0' : '#e2e8f0'}`,
                    borderRadius: '6px',
                    color: opt.isCorrect ? '#065f46' : '#334155',
                  }}
                >
                  <strong>{opt.id}. {opt.text}</strong>: {opt.translation}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
