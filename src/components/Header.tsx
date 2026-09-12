import React from 'react';
import { AppMode } from '../types/quiz';
import {
  GraduationCap,
  BookOpen,
  LayoutGrid,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Lightbulb,
  ArrowLeft,
} from 'lucide-react';

export interface HeaderProps {
  mode: AppMode;
  onSwitchMode: (mode: AppMode) => void;
  totalAnswered: number;
  totalCorrect: number;
  totalQuestions: number;
  onOpenDrawer: () => void;
  onResetProgress: () => void;
  onOpenTips: () => void;
  onBackToSourceSelect?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  mode,
  onSwitchMode,
  totalAnswered,
  totalCorrect,
  totalQuestions,
  onOpenDrawer,
  onResetProgress,
  onOpenTips,
  onBackToSourceSelect,
}) => {
  const totalIncorrect = totalAnswered - totalCorrect;
  const progressPercent = Math.round((totalAnswered / totalQuestions) * 100);

  return (
    <header className="app-header">
      <div className="header-inner">
        {/* Row 1: Top Bar on Mobile, Left + Center + Right on Desktop */}
        <div className="header-top-row">
          {/* Back button & Logo */}
          <div className="header-brand-group">
            {onBackToSourceSelect && (
              <button
                onClick={onBackToSourceSelect}
                className="btn btn-ghost"
                style={{
                  padding: '0.35rem 0.6rem',
                  borderRadius: '8px',
                  fontSize: '0.78rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  color: '#475569',
                  border: '1px solid #e2e8f0',
                  background: '#f8fafc',
                  height: '36px',
                  fontWeight: 600,
                  flexShrink: 0,
                }}
                title="Kembali ke Pilihan Sumber Soal"
              >
                <ArrowLeft size={14} />
                <span className="desktop-only">Ganti Sumber</span>
              </button>
            )}

            <button
              onClick={() => onSwitchMode('select')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: 0,
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.15rem',
                  boxShadow: '0 2px 8px rgba(79, 70, 229, 0.3)',
                  flexShrink: 0,
                }}
              >
                ⛩️
              </div>
              <div className="header-title-block">
                <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                  E-F 期末試験
                </div>
                <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>
                  Latihan & Review Ujian
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Center Mode Switcher Tabs */}
          <div
            className="desktop-only header-center-tabs"
            style={{
              background: '#f1f5f9',
              padding: '0.25rem',
              borderRadius: '9999px',
              border: '1px solid #e2e8f0',
            }}
          >
            <button
              onClick={() => onSwitchMode('exam')}
              className={`btn ${mode === 'exam' ? 'btn-primary' : 'btn-ghost'}`}
              style={{
                fontSize: '0.8rem',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                height: '34px',
                gap: '0.35rem',
              }}
            >
              <GraduationCap size={15} />
              <span>Mode Ujian</span>
            </button>

            <button
              onClick={() => onSwitchMode('review')}
              className={`btn ${mode === 'review' ? 'btn-primary' : 'btn-ghost'}`}
              style={{
                fontSize: '0.8rem',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                height: '34px',
                gap: '0.35rem',
              }}
            >
              <BookOpen size={15} />
              <span>Mode Belajar</span>
            </button>
          </div>

          {/* Right Action Icons (Common & Desktop stats) */}
          <div className="header-actions-group">
            {/* Desktop Score Badges */}
            {mode === 'exam' && (
              <div
                className="desktop-only"
                style={{
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.2rem',
                    color: '#059669',
                    background: '#ecfdf5',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '6px',
                    border: '1px solid #a7f3d0',
                  }}
                  title="Jumlah Benar"
                >
                  <CheckCircle2 size={13} /> {totalCorrect}
                </span>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.2rem',
                    color: '#dc2626',
                    background: '#fef2f2',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '6px',
                    border: '1px solid #fecaca',
                  }}
                  title="Jumlah Salah"
                >
                  <XCircle size={13} /> {totalIncorrect}
                </span>
              </div>
            )}

            {/* Question Drawer Button (Exam Mode) */}
            {mode === 'exam' && (
              <button
                onClick={onOpenDrawer}
                className="btn btn-secondary"
                style={{
                  fontSize: '0.78rem',
                  padding: '0.35rem 0.65rem',
                  borderRadius: '8px',
                  height: '34px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
                title="Daftar Soal 1-60"
              >
                <LayoutGrid size={15} color="#4f46e5" />
                <span className="desktop-only">Grid ({totalAnswered}/60)</span>
                <span className="mobile-only" style={{ fontWeight: 700 }}>{totalAnswered}/60</span>
              </button>
            )}

            {/* Tips & Trik Button */}
            <button
              onClick={onOpenTips}
              className="btn btn-secondary"
              style={{
                fontSize: '0.78rem',
                padding: '0.35rem 0.65rem',
                borderRadius: '8px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                background: '#fffbeb',
                borderColor: '#fde68a',
                color: '#b45309',
              }}
              title="Lihat Tips & Trik Mengerjakan Ujian"
            >
              <Lightbulb size={15} color="#d97706" />
              <span className="desktop-only">Tips & Trik</span>
              <span className="mobile-only">Tips</span>
            </button>

            {/* Reset button */}
            {totalAnswered > 0 && (
              <button
                onClick={onResetProgress}
                className="btn btn-ghost"
                style={{
                  padding: '0.35rem',
                  borderRadius: '8px',
                  height: '34px',
                  width: '34px',
                  color: '#94a3b8',
                }}
                title="Reset Semua Progres Ujian"
              >
                <RotateCcw size={15} />
              </button>
            )}
          </div>
        </div>

        {/* Row 2: Mobile Sub-Row with Mode Switcher & Stats */}
        <div className="mobile-only header-sub-row">
          <div className="header-mode-switcher">
            <button
              onClick={() => onSwitchMode('exam')}
              className={`btn ${mode === 'exam' ? 'btn-primary' : 'btn-ghost'}`}
            >
              <GraduationCap size={14} />
              <span>Mode Ujian</span>
            </button>

            <button
              onClick={() => onSwitchMode('review')}
              className={`btn ${mode === 'review' ? 'btn-primary' : 'btn-ghost'}`}
            >
              <BookOpen size={14} />
              <span>Mode Belajar</span>
            </button>
          </div>

          {/* Mobile Score Badges in Exam Mode */}
          {mode === 'exam' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.2rem',
                  color: '#059669',
                  background: '#ecfdf5',
                  padding: '0.25rem 0.45rem',
                  borderRadius: '6px',
                  border: '1px solid #a7f3d0',
                }}
                title="Jumlah Benar"
              >
                <CheckCircle2 size={12} /> {totalCorrect}
              </span>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.2rem',
                  color: '#dc2626',
                  background: '#fef2f2',
                  padding: '0.25rem 0.45rem',
                  borderRadius: '6px',
                  border: '1px solid #fecaca',
                }}
                title="Jumlah Salah"
              >
                <XCircle size={12} /> {totalIncorrect}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar (at very bottom of header) */}
      {mode === 'exam' && (
        <div style={{ height: '3px', background: '#e2e8f0', width: '100%', position: 'relative' }}>
          <div
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #4f46e5, #10b981)',
              width: `${progressPercent}%`,
              transition: 'width 0.3s ease',
            }}
          />
        </div>
      )}
    </header>
  );
};
