import React from 'react';
import { AppMode, SectionId } from '../types/quiz';
import { examSections } from '../data/examData';
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  CheckCircle2,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  BookmarkCheck,
  Layers,
  Lightbulb,
} from 'lucide-react';

export interface ModeSelectionProps {
  onSelectMode: (mode: AppMode) => void;
  answeredCount: number;
  correctCount: number;
  totalQuestions: number;
  onResetProgress: () => void;
  onSelectSectionExam: (sectionId: SectionId) => void;
  onOpenTips: () => void;
  onBackToSourceSelect?: () => void;
}

export const ModeSelection: React.FC<ModeSelectionProps> = ({
  onSelectMode,
  answeredCount,
  correctCount,
  totalQuestions,
  onResetProgress,
  onSelectSectionExam,
  onOpenTips,
  onBackToSourceSelect,
}) => {
  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  return (
    <div className="mode-selection animate-fade-in" style={{ maxWidth: '840px', margin: '0 auto' }}>
      {/* Back to Source Selection */}
      {onBackToSourceSelect && (
        <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'flex-start' }}>
          <button
            onClick={onBackToSourceSelect}
            className="btn btn-secondary"
            style={{
              padding: '0.45rem 0.9rem',
              fontSize: '0.82rem',
              borderRadius: '9999px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#475569',
              border: '1px solid #cbd5e1',
              background: '#ffffff',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            }}
          >
            <ArrowLeft size={14} />
            <span>Kembali ke Pilihan Sumber Soal</span>
          </button>
        </div>
      )}

      {/* Hero Header */}
      <div
        className="hero-card"
        style={{
          textAlign: 'center',
          padding: '2rem 1.25rem 2.5rem 1.25rem',
          background: 'radial-gradient(ellipse at top, #eef2ff 0%, #f8fafc 70%)',
          borderRadius: '24px',
          border: '1px solid #e2e8f0',
          marginBottom: '2rem',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: '#ffffff',
            padding: '0.35rem 0.85rem',
            borderRadius: '9999px',
            border: '1px solid #e0e7ff',
            boxShadow: '0 2px 6px rgba(79, 70, 229, 0.08)',
            marginBottom: '0.85rem',
            maxWidth: '100%',
          }}
        >
          <span style={{ fontSize: '0.95rem' }}>⛩️</span>
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#4338ca', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            長野国際文化学院 ・ E-F 期末試験
          </span>
        </div>

        <h1
          className="hero-title"
          style={{
            fontSize: '2.1rem',
            fontWeight: 800,
            color: '#0f172a',
            lineHeight: 1.25,
            marginBottom: '0.75rem',
          }}
        >
          Latihan & Review Ujian Bahasa Jepang E-F
        </h1>
        <p
          className="hero-subtitle"
          style={{
            fontSize: '1rem',
            color: '#64748b',
            maxWidth: '620px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          Pilih mode belajar sesuai kenyamanan Anda: simulasi ujian interaktif ala aplikasi <strong>Migii JLPT</strong> dengan feedback warna instan, atau pelajari langsung materi dan pembahasan lengkap.
        </p>

        <div style={{ marginTop: '1.25rem' }}>
          <button
            onClick={onOpenTips}
            className="btn"
            style={{
              background: '#fffbeb',
              color: '#b45309',
              border: '1px solid #fde68a',
              borderRadius: '9999px',
              padding: '0.5rem 1.25rem',
              fontSize: '0.88rem',
              fontWeight: 700,
              boxShadow: '0 2px 6px rgba(245, 158, 11, 0.15)',
            }}
          >
            <Lightbulb size={16} color="#d97706" />
            <span>💡 Lihat Tips & Trik Ujian E-F</span>
          </button>
        </div>

        {/* Existing Progress Alert if any */}
        {answeredCount > 0 && (
          <div
            style={{
              marginTop: '1.25rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.85rem',
              background: '#ffffff',
              padding: '0.65rem 1rem',
              borderRadius: '16px',
              border: '1px solid #cbd5e1',
              boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
              flexWrap: 'wrap',
              justifyContent: 'center',
              maxWidth: '100%',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <BookmarkCheck size={16} color="#4f46e5" />
              <span style={{ fontSize: '0.82rem', color: '#334155' }}>
                Progres: <strong>{answeredCount}</strong> / {totalQuestions} soal
              </span>
            </div>
            <div style={{ fontSize: '0.82rem', color: '#059669', fontWeight: 700 }}>
              {accuracy}% ({correctCount} Benar)
            </div>
            <button
              onClick={onResetProgress}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#ef4444',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.2rem',
              }}
            >
              <RotateCcw size={12} /> Reset Ujian
            </button>
          </div>
        )}
      </div>

      {/* Mode Cards (The 2 Main Choices) */}
      <div className="mode-cards-grid">
        {/* Card 1: Mode Ujian (Exam Mode / Migii Style) */}
        <div
          className="card card-hover"
          style={{
            padding: '2rem 1.5rem',
            border: '2px solid #6366f1',
            borderRadius: '20px',
            background: 'linear-gradient(180deg, #ffffff 0%, #f8faff 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: '#e0e7ff',
              color: '#4338ca',
              fontSize: '0.75rem',
              fontWeight: 800,
              padding: '0.25rem 0.65rem',
              borderRadius: '9999px',
            }}
          >
            MIGII STYLE
          </div>

          <div>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: '#4f46e5',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
                boxShadow: '0 8px 16px rgba(79, 70, 229, 0.25)',
              }}
            >
              <GraduationCap size={28} />
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
              Mode Ujian
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Simulasi latihan interaktif. Tekan pilihan dan langsung ketahui hasilnya:
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#334155' }}>
                <CheckCircle2 size={16} color="#10b981" />
                <span><strong>Feedback Instan</strong>: Hijau (benar) atau Merah (salah).</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#334155' }}>
                <CheckCircle2 size={16} color="#10b981" />
                <span><strong>Pembahasan Muncul</strong>: Mengapa benar dan kenapa yang lain salah.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#334155' }}>
                <CheckCircle2 size={16} color="#10b981" />
                <span><strong>Penyimpanan Otomatis</strong>: Refresh halaman tidak akan menghapus jawaban.</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onSelectMode('exam')}
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', borderRadius: '12px' }}
          >
            <span>Mulai Ujian Interaktif</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Card 2: Mode Belajar / Review (Study Mode) */}
        <div
          className="card card-hover"
          style={{
            padding: '2rem 1.5rem',
            border: '2px solid #cbd5e1',
            borderRadius: '20px',
            background: 'linear-gradient(180deg, #ffffff 0%, #fafafa 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          <div>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: '#0ea5e9',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
                boxShadow: '0 8px 16px rgba(14, 165, 233, 0.25)',
              }}
            >
              <BookOpen size={28} />
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
              Mode Belajar & Review
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Pelajari langsung seluruh 60 soal tanpa harus menebak:
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#334155' }}>
                <Sparkles size={16} color="#0ea5e9" />
                <span><strong>Kunci Jawaban Terbuka</strong>: Langsung melihat jawaban resmi.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#0ea5e9' }}>
                <Sparkles size={16} color="#0ea5e9" />
                <span><strong>Terjemahan Bahasa Indonesia</strong>: Lengkap untuk soal, wacana, & opsi.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#0ea5e9' }}>
                <Sparkles size={16} color="#0ea5e9" />
                <span><strong>Analisis Tata Bahasa</strong>: Alasan opsi lain salah dan poin tata bahasa.</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onSelectMode('review')}
            className="btn btn-secondary"
            style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', borderRadius: '12px', border: '1px solid #cbd5e1' }}
          >
            <span>Buka Materi & Kunci Jawaban</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Sections Quick Start */}
      <div style={{ marginTop: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Layers size={20} color="#4f46e5" />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
            Pilih Berdasarkan Bagian Soal (Sections)
          </h3>
        </div>

        <div className="sections-grid">
          {examSections.map((sec) => (
            <div
              key={sec.id}
              className="card card-hover"
              style={{ padding: '1.25rem', cursor: 'pointer', border: '1px solid #e2e8f0' }}
              onClick={() => onSelectSectionExam(sec.id)}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span className="badge badge-indigo">Bagian {sec.id}</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b' }}>
                  {sec.range}
                </span>
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1e293b', margin: '0 0 0.25rem 0' }}>
                {sec.japaneseTitle}
              </h4>
              <div style={{ fontSize: '0.85rem', color: '#4f46e5', fontWeight: 600, marginBottom: '0.5rem' }}>
                {sec.title}
              </div>
              <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                {sec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
