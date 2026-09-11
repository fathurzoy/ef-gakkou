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
} from 'lucide-react';

interface HeaderProps {
  mode: AppMode;
  onSwitchMode: (mode: AppMode) => void;
  totalAnswered: number;
  totalCorrect: number;
  totalQuestions: number;
  onOpenDrawer: () => void;
  onResetProgress: () => void;
  onOpenTips: () => void;
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
}) => {
  const totalIncorrect = totalAnswered - totalCorrect;
  const progressPercent = Math.round((totalAnswered / totalQuestions) * 100);

  return (
    <header className="app-header">
      <div className="header-inner">
        {/* Logo and Home Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                boxShadow: '0 2px 8px rgba(79, 70, 229, 0.3)',
              }}
            >
              ⛩️
            </div>
            <div className="header-title-block">
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                E-F 期末試験
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>
                Latihan & Review Ujian
              </div>
            </div>
          </button>
        </div>

        {/* Center Mode Switcher Tabs */}
        <div
          style={{
            display: 'flex',
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

        {/* Right Stats and Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {/* Quick Score Badges (visible in exam mode) */}
          {mode === 'exam' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
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
                  padding: '0.25rem 0.55rem',
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
                  padding: '0.25rem 0.55rem',
                  borderRadius: '6px',
                  border: '1px solid #fecaca',
                }}
                title="Jumlah Salah"
              >
                <XCircle size={13} /> {totalIncorrect}
              </span>
            </div>
          )}

          {/* Question Drawer Button */}
          {mode === 'exam' && (
            <button
              onClick={onOpenDrawer}
              className="btn btn-secondary"
              style={{
                fontSize: '0.8rem',
                padding: '0.4rem 0.75rem',
                borderRadius: '8px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
              title="Daftar Soal 1-60"
            >
              <LayoutGrid size={16} color="#4f46e5" />
              <span>Grid ({totalAnswered}/60)</span>
            </button>
          )}

          {/* Tips & Trik Button */}
          <button
            onClick={onOpenTips}
            className="btn btn-secondary"
            style={{
              fontSize: '0.8rem',
              padding: '0.4rem 0.75rem',
              borderRadius: '8px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              background: '#fffbeb',
              borderColor: '#fde68a',
              color: '#b45309',
            }}
            title="Lihat Tips & Trik Mengerjakan Ujian"
          >
            <Lightbulb size={16} color="#d97706" />
            <span>Tips & Trik</span>
          </button>

          {/* Reset button */}
          {totalAnswered > 0 && (
            <button
              onClick={onResetProgress}
              className="btn btn-ghost"
              style={{
                padding: '0.4rem',
                borderRadius: '8px',
                height: '36px',
                width: '36px',
                color: '#94a3b8',
              }}
              title="Reset Semua Progres Ujian"
            >
              <RotateCcw size={16} />
            </button>
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
