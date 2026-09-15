import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppMode } from '../types/quiz';
import {
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
  const navigate = useNavigate();
  const totalIncorrect = totalAnswered - totalCorrect;
  const progressPercent = Math.round((totalAnswered / totalQuestions) * 100);

  return (
    <header className="app-header">
      <div className="header-inner">
        {/* Top Bar: Left Brand & Back + Right Actions */}
        <div className="header-top-row">
          {/* Back button & Logo */}
          <div className="header-brand-group" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', minWidth: 0, flexShrink: 1 }}>
            <button
              onClick={() => {
                if (mode !== 'select') {
                  onSwitchMode('select');
                  navigate('/ef');
                } else if (onBackToSourceSelect) {
                  onBackToSourceSelect();
                } else {
                  navigate('/');
                }
              }}
              className="btn btn-ghost"
              style={{
                padding: '0.35rem 0.55rem',
                borderRadius: '8px',
                fontSize: '0.78rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                color: '#475569',
                border: '1px solid #e2e8f0',
                background: '#f8fafc',
                height: '34px',
                fontWeight: 600,
                flexShrink: 0,
              }}
              title={mode !== 'select' ? "Kembali ke Menu Pilihan Mode" : "Kembali ke Pilihan Sumber Soal"}
            >
              <ArrowLeft size={14} />
              <span className="desktop-only">
                {mode !== 'select' ? 'Pilih Mode' : 'Ganti Sumber'}
              </span>
            </button>

            <button
              onClick={() => {
                onSwitchMode('select');
                navigate('/ef');
              }}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: 0,
                textAlign: 'left',
                minWidth: 0,
              }}
              title="Kembali ke Menu Pilihan Mode"
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  boxShadow: '0 2px 8px rgba(79, 70, 229, 0.3)',
                  flexShrink: 0,
                }}
              >
                ⛩️
              </div>
              <div className="header-title-block" style={{ minWidth: 0, overflow: 'hidden' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  E-F 期末試験
                </div>
                <div style={{ fontSize: '0.68rem', color: mode === 'exam' ? '#4f46e5' : mode === 'review' ? '#0891b2' : '#64748b', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {mode === 'exam' ? 'Mode Ujian' : mode === 'review' ? 'Mode Belajar' : 'Latihan & Review'}
                </div>
              </div>
            </button>
          </div>

          {/* Right Action Icons */}
          <div className="header-actions-group" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexShrink: 0 }}>
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
                  fontSize: '0.75rem',
                  padding: '0.35rem 0.55rem',
                  borderRadius: '8px',
                  height: '34px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  flexShrink: 0,
                }}
                title="Daftar Soal 1-60"
              >
                <LayoutGrid size={14} color="#4f46e5" />
                <span style={{ fontWeight: 700 }}>{totalAnswered}/60</span>
              </button>
            )}

            {/* Tips & Trik Button */}
            <button
              onClick={onOpenTips}
              className="btn btn-secondary"
              style={{
                fontSize: '0.75rem',
                padding: '0.35rem 0.55rem',
                borderRadius: '8px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                background: '#fffbeb',
                borderColor: '#fde68a',
                color: '#b45309',
                flexShrink: 0,
              }}
              title="Lihat Tips & Trik Mengerjakan Ujian"
            >
              <Lightbulb size={14} color="#d97706" />
              <span className="desktop-only">Tips</span>
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
                  minWidth: '34px',
                  maxWidth: '34px',
                  color: '#94a3b8',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                title="Reset Semua Progres Ujian"
              >
                <RotateCcw size={14} />
              </button>
            )}
          </div>
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
