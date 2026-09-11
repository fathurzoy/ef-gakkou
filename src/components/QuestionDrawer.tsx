import React, { useState } from 'react';
import { Question, SectionId, UserAnswerRecord } from '../types/quiz';
import { examSections } from '../data/examData';
import { X, CheckCircle2, XCircle } from 'lucide-react';

interface QuestionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  currentQuestionId: number;
  userAnswers: Record<number, UserAnswerRecord>;
  onSelectQuestion: (questionId: number) => void;
}

export const QuestionDrawer: React.FC<QuestionDrawerProps> = ({
  isOpen,
  onClose,
  questions,
  currentQuestionId,
  userAnswers,
  onSelectQuestion,
}) => {
  const [selectedSection, setSelectedSection] = useState<SectionId | 'ALL'>('ALL');

  if (!isOpen) return null;

  const filteredQuestions =
    selectedSection === 'ALL'
      ? questions
      : questions.filter((q) => q.sectionId === selectedSection);

  const totalAnswered = Object.keys(userAnswers).length;
  const totalCorrect = Object.values(userAnswers).filter((a) => a.isCorrect).length;
  const totalIncorrect = totalAnswered - totalCorrect;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        display: 'flex',
        justifyContent: 'flex-end',
        background: 'rgba(15, 23, 42, 0.5)',
        backdropFilter: 'blur(4px)',
      }}
      onClick={onClose}
    >
      <div
        className="animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          background: '#ffffff',
          boxShadow: '-4px 0 24px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '1.25rem',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#f8fafc',
          }}
        >
          <div>
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>
              Daftar Nomor Soal (1 - 60)
            </h3>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
              Pilih nomor untuk langsung berpindah soal
            </span>
          </div>

          <button
            onClick={onClose}
            className="btn btn-ghost btn-icon"
            style={{ borderRadius: '9999px' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Quick Stats Summary */}
        <div
          style={{
            padding: '0.85rem 1.25rem',
            background: '#ffffff',
            borderBottom: '1px solid #f1f5f9',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.5rem',
            textAlign: 'center',
          }}
        >
          <div style={{ background: '#f8fafc', padding: '0.5rem', borderRadius: '8px' }}>
            <span style={{ fontSize: '0.72rem', color: '#64748b', display: 'block' }}>DIJAWAB</span>
            <strong style={{ fontSize: '1.1rem', color: '#1e293b' }}>
              {totalAnswered} <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>/ 60</span>
            </strong>
          </div>
          <div style={{ background: '#ecfdf5', padding: '0.5rem', borderRadius: '8px' }}>
            <span style={{ fontSize: '0.72rem', color: '#047857', display: 'block' }}>BENAR</span>
            <strong style={{ fontSize: '1.1rem', color: '#059669' }}>{totalCorrect}</strong>
          </div>
          <div style={{ background: '#fef2f2', padding: '0.5rem', borderRadius: '8px' }}>
            <span style={{ fontSize: '0.72rem', color: '#b91c1c', display: 'block' }}>SALAH</span>
            <strong style={{ fontSize: '1.1rem', color: '#dc2626' }}>{totalIncorrect}</strong>
          </div>
        </div>

        {/* Section Tabs */}
        <div
          style={{
            display: 'flex',
            overflowX: 'auto',
            padding: '0.65rem 1rem',
            gap: '0.4rem',
            borderBottom: '1px solid #e2e8f0',
            background: '#f8fafc',
          }}
        >
          <button
            onClick={() => setSelectedSection('ALL')}
            className={`btn ${selectedSection === 'ALL' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem', borderRadius: '9999px', whiteSpace: 'nowrap' }}
          >
            Semua (60)
          </button>
          {examSections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setSelectedSection(sec.id)}
              className={`btn ${selectedSection === sec.id ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem', borderRadius: '9999px', whiteSpace: 'nowrap' }}
            >
              Bagian {sec.id} ({sec.count})
            </button>
          ))}
        </div>

        {/* Question Grid */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.25rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '0.75rem',
            alignContent: 'start',
          }}
        >
          {filteredQuestions.map((q) => {
            const ans = userAnswers[q.id];
            const isCurrent = q.id === currentQuestionId;

            let bgColor = '#ffffff';
            let borderColor = '#cbd5e1';
            let textColor = '#334155';
            let statusIcon = null;

            if (ans) {
              if (ans.isCorrect) {
                bgColor = '#ecfdf5';
                borderColor = '#10b981';
                textColor = '#065f46';
                statusIcon = <CheckCircle2 size={12} color="#10b981" />;
              } else {
                bgColor = '#fef2f2';
                borderColor = '#ef4444';
                textColor = '#991b1b';
                statusIcon = <XCircle size={12} color="#ef4444" />;
              }
            }

            if (isCurrent) {
              borderColor = '#4f46e5';
              bgColor = '#eef2ff';
              textColor = '#4338ca';
            }

            return (
              <button
                key={q.id}
                onClick={() => {
                  onSelectQuestion(q.id);
                  onClose();
                }}
                style={{
                  height: '52px',
                  borderRadius: '10px',
                  border: `2px solid ${borderColor}`,
                  background: bgColor,
                  color: textColor,
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.15rem',
                  position: 'relative',
                  transition: 'all 0.15s ease',
                  boxShadow: isCurrent ? '0 0 0 3px rgba(99, 102, 241, 0.25)' : 'none',
                }}
              >
                <span>{q.id}</span>
                <div style={{ height: '12px', display: 'flex', alignItems: 'center' }}>
                  {statusIcon || <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#cbd5e1' }} />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Legend Footer */}
        <div
          style={{
            padding: '0.85rem 1.25rem',
            borderTop: '1px solid #e2e8f0',
            background: '#f8fafc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            fontSize: '0.75rem',
            color: '#64748b',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
            Benar
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
            Salah
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#cbd5e1' }} />
            Belum
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', border: '2px solid #4f46e5' }} />
            Sedang dibuka
          </div>
        </div>
      </div>
    </div>
  );
};
