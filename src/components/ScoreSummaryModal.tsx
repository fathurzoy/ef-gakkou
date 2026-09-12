import React, { useEffect } from 'react';
import { UserAnswerRecord } from '../types/quiz';
import { allQuestions, examSections } from '../data/examData';
import confetti from 'canvas-confetti';
import {
  Trophy,
  RotateCcw,
  BookOpen,
  X,
} from 'lucide-react';

interface ScoreSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  userAnswers: Record<number, UserAnswerRecord>;
  onResetExam: () => void;
  onGoToReview: () => void;
}

export const ScoreSummaryModal: React.FC<ScoreSummaryModalProps> = ({
  isOpen,
  onClose,
  userAnswers,
  onResetExam,
  onGoToReview,
}) => {
  const totalQuestions = allQuestions.length; // 60
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = Object.values(userAnswers).filter((a) => a.isCorrect).length;
  const incorrectCount = answeredCount - correctCount;
  const percentage = answeredCount > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  // Calculate official test points based on exam sheet:
  // Part I (1-22): 各5点 = 110
  // Part II (23-32): 各8点 = 80
  // Part III A (33-42): 各3点 = 30
  // Part III B (43-52): 各4点 = 40
  // Part IV A (53-55): 各5点 = 15
  // Part IV B (56-60): 各5点 = 25
  // Total = 300 points
  let userPoints = 0;
  let totalMaxPoints = 300;

  for (let i = 1; i <= 60; i++) {
    const ans = userAnswers[i];
    let point = 0;
    if (i >= 1 && i <= 22) point = 5;
    else if (i >= 23 && i <= 32) point = 8;
    else if (i >= 33 && i <= 42) point = 3;
    else if (i >= 43 && i <= 52) point = 4;
    else if (i >= 53 && i <= 60) point = 5;

    if (ans && ans.isCorrect) {
      userPoints += point;
    }
  }

  useEffect(() => {
    if (isOpen && percentage >= 70) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // Confetti optional
      }
    }
  }, [isOpen, percentage]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(15, 23, 42, 0.6)',
        backdropFilter: 'blur(6px)',
        padding: '1rem',
      }}
      onClick={onClose}
    >
      <div
        className="animate-fade-in modal-dialog"
        style={{
          width: '100%',
          maxWidth: '520px',
          background: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            background: 'linear-gradient(135deg, #4338ca 0%, #312e81 100%)',
            color: '#ffffff',
            padding: '1.25rem 1.25rem',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>

          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              margin: '0 auto 0.75rem auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Trophy size={32} color="#fbbf24" />
          </div>

          <h2 style={{ fontSize: '1.45rem', fontWeight: 800, margin: '0 0 0.25rem 0' }}>
            Hasil Ujian E-F
          </h2>
          <p style={{ margin: 0, fontSize: '0.88rem', color: '#c7d2fe' }}>
            E-F 期末試験 読解・文法 練習用 (Nagano International Cultural College)
          </p>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.5rem', overflowY: 'auto' }}>
          {/* Score & Points Card */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginBottom: '1.25rem',
            }}
          >
            <div
              style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, display: 'block', textTransform: 'uppercase' }}>
                Total Poin Ujian
              </span>
              <strong style={{ fontSize: '1.9rem', color: '#4338ca', fontWeight: 800 }}>
                {userPoints}
                <span style={{ fontSize: '0.95rem', color: '#64748b', fontWeight: 500 }}>
                  /{totalMaxPoints}
                </span>
              </strong>
            </div>

            <div
              style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, display: 'block', textTransform: 'uppercase' }}>
                Akurasi Jawaban
              </span>
              <strong
                style={{
                  fontSize: '1.9rem',
                  fontWeight: 800,
                  color: percentage >= 70 ? '#059669' : '#d97706',
                }}
              >
                {percentage}%
              </strong>
            </div>
          </div>

          {/* Quick Stats: Benar, Salah, Belum */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.5rem',
              marginBottom: '1.5rem',
              textAlign: 'center',
            }}
          >
            <div style={{ background: '#ecfdf5', padding: '0.65rem', borderRadius: '10px', border: '1px solid #a7f3d0' }}>
              <span style={{ fontSize: '0.72rem', color: '#065f46', display: 'block', fontWeight: 700 }}>BENAR</span>
              <strong style={{ fontSize: '1.15rem', color: '#059669' }}>{correctCount}</strong>
            </div>
            <div style={{ background: '#fef2f2', padding: '0.65rem', borderRadius: '10px', border: '1px solid #fecaca' }}>
              <span style={{ fontSize: '0.72rem', color: '#991b1b', display: 'block', fontWeight: 700 }}>SALAH</span>
              <strong style={{ fontSize: '1.15rem', color: '#dc2626' }}>{incorrectCount}</strong>
            </div>
            <div style={{ background: '#f1f5f9', padding: '0.65rem', borderRadius: '10px', border: '1px solid #cbd5e1' }}>
              <span style={{ fontSize: '0.72rem', color: '#475569', display: 'block', fontWeight: 700 }}>BELUM</span>
              <strong style={{ fontSize: '1.15rem', color: '#334155' }}>{totalQuestions - answeredCount}</strong>
            </div>
          </div>

          {/* Breakdown per Section */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#334155', marginBottom: '0.65rem' }}>
              Rincian Per Bagian Soal:
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {examSections.map((sec) => {
                const secQuestions = allQuestions.filter((q) => q.sectionId === sec.id);
                const secAnswered = secQuestions.filter((q) => userAnswers[q.id]);
                const secCorrect = secQuestions.filter((q) => userAnswers[q.id]?.isCorrect);
                const secPercent =
                  secAnswered.length > 0 ? Math.round((secCorrect.length / secQuestions.length) * 100) : 0;

                return (
                  <div
                    key={sec.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.55rem 0.75rem',
                      background: '#f8fafc',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                    }}
                  >
                    <div>
                      <strong>Bagian {sec.id}</strong>: {sec.japaneseTitle}
                      <span style={{ fontSize: '0.75rem', color: '#64748b', marginLeft: '0.4rem' }}>
                        ({sec.range})
                      </span>
                    </div>
                    <div style={{ fontWeight: 700, color: secPercent >= 70 ? '#059669' : '#d97706' }}>
                      {secCorrect.length} / {secQuestions.length} ({secPercent}%)
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div
          style={{
            padding: '0.85rem 1.25rem',
            borderTop: '1px solid #e2e8f0',
            background: '#f8fafc',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => {
              onClose();
              onGoToReview();
            }}
            className="btn btn-primary"
            style={{ flex: '1 1 180px', padding: '0.75rem', borderRadius: '12px', fontSize: '0.9rem' }}
          >
            <BookOpen size={16} />
            <span>Lihat Pembahasan Lengkap</span>
          </button>

          <button
            onClick={onResetExam}
            className="btn btn-secondary"
            style={{ flex: '1 1 120px', padding: '0.75rem', borderRadius: '12px', fontSize: '0.9rem' }}
            title="Reset dan Ulangi Ujian dari Awal"
          >
            <RotateCcw size={16} />
            <span>Ulangi Ujian</span>
          </button>
        </div>
      </div>
    </div>
  );
};
