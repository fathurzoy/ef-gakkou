import React from 'react';
import { QuestionSource } from '../types/quiz';
import {
  GraduationCap,
  ArrowRight,
  Sparkles,
  BookMarked,
  Compass,
} from 'lucide-react';

interface SourceSelectionProps {
  onSelectSource: (source: QuestionSource) => void;
}

export const SourceSelection: React.FC<SourceSelectionProps> = ({ onSelectSource }) => {
  return (
    <div className="source-selection-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Portal Navbar Header */}
      <header className="app-header">
        <div className="header-inner" style={{ alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
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
                flexShrink: 0,
              }}
            >
              ⛩️
            </div>
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                Gakkou 日本語
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>
                Portal Latihan & Ujian Bahasa Jepang
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-content" style={{ maxWidth: '1120px', margin: '0 auto', padding: '2rem 1rem 3rem 1rem' }}>
        {/* Hero Section */}
        <div
          className="hero-card"
          style={{
            textAlign: 'center',
            padding: '2.5rem 1.5rem',
            background: 'radial-gradient(ellipse at top, #eef2ff 0%, #f8fafc 70%)',
            borderRadius: '24px',
            border: '1px solid #e2e8f0',
            marginBottom: '2.5rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#ffffff',
              padding: '0.5rem 1.25rem',
              borderRadius: '9999px',
              border: '1px solid #e0e7ff',
              boxShadow: '0 2px 8px rgba(79, 70, 229, 0.08)',
            }}
          >
            <Sparkles size={18} color="#4f46e5" />
            <h1
              className="hero-title"
              style={{
                fontSize: '1.35rem',
                fontWeight: 800,
                color: '#3730a3',
                margin: 0,
                lineHeight: 1.25,
              }}
            >
              Pilih Sumber Pembelajaran & Soal Ujian
            </h1>
          </div>
        </div>

        {/* 3 Main Choice Cards */}
        <div className="mode-cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
          {/* Card 1: Latihan & Review Ujian E-F (Active & Clickable) */}
          <div
            className="card card-hover"
            style={{
              padding: '2.25rem 1.75rem',
              border: '2px solid #6366f1',
              borderRadius: '22px',
              background: 'linear-gradient(180deg, #ffffff 0%, #f8faff 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.1)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Active / Available Badge */}
            <div
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: '#ecfdf5',
                color: '#065f46',
                border: '1px solid #a7f3d0',
                fontSize: '0.75rem',
                fontWeight: 800,
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#10b981',
                  display: 'inline-block',
                }}
              />
              Tersedia (60 Soal)
            </div>

            <div>
              {/* Icon */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.35rem',
                  boxShadow: '0 8px 18px rgba(79, 70, 229, 0.28)',
                }}
              >
                <GraduationCap size={30} />
              </div>

              {/* Sub-label */}
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#4f46e5',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.35rem',
                }}
              >
                長野国際文化学院 ・ 期末試験
              </div>

              {/* Title */}
              <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.75rem', lineHeight: 1.3 }}>
                Latihan & Review Ujian Bahasa Jepang E-F
              </h2>
            </div>

            {/* Action Button */}
            <button
              onClick={() => onSelectSource('ef')}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '0.9rem 1.25rem',
                fontSize: '1rem',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 14px rgba(79, 70, 229, 0.3)',
              }}
            >
              <span>Mulai Belajar / Ujian E-F</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Card 2: Ujian Dekiru Nihongo Per 3 Bab (Now Available!) */}
          <div
            className="card card-hover"
            style={{
              padding: '2.25rem 1.75rem',
              border: '2px solid #0ea5e9',
              borderRadius: '22px',
              background: 'linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 10px 25px -5px rgba(14, 165, 233, 0.12)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Available Badge */}
            <div
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: '#ecfdf5',
                color: '#065f46',
                border: '1px solid #a7f3d0',
                fontSize: '0.75rem',
                fontWeight: 800,
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#10b981',
                  display: 'inline-block',
                }}
              />
              Tersedia: Ujian 1 & 2 (65 Soal)
            </div>

            <div>
              {/* Icon */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.35rem',
                  boxShadow: '0 8px 18px rgba(14, 165, 233, 0.28)',
                }}
              >
                <BookMarked size={30} />
              </div>

              {/* Sub-label */}
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#0284c7',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.35rem',
                }}
              >
                できる日本語 ・ 復習テスト
              </div>

              {/* Title */}
              <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.75rem', lineHeight: 1.3 }}>
                Ujian Dekiru Nihongo (Per 3 Bab)
              </h2>
            </div>

            {/* Action Button */}
            <button
              onClick={() => onSelectSource('dekiru')}
              className="btn"
              style={{
                width: '100%',
                padding: '0.9rem 1.25rem',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                color: '#ffffff',
                boxShadow: '0 4px 14px rgba(14, 165, 233, 0.3)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span>Mulai Belajar / Ujian Dekiru</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Card 3: Belajar Situasi (場面で覚える日本語) */}
          <div
            className="card card-hover"
            style={{
              padding: '2.25rem 1.75rem',
              border: '2px solid #059669',
              borderRadius: '22px',
              background: 'linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 10px 25px -5px rgba(5, 150, 105, 0.12)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Badge */}
            <div
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: '#ecfdf5',
                color: '#065f46',
                border: '1px solid #a7f3d0',
                fontSize: '0.75rem',
                fontWeight: 800,
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#059669',
                  display: 'inline-block',
                }}
              />
              Baru: 2 Bagian (67 Situasi & Respons)
            </div>

            <div>
              {/* Icon */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.35rem',
                  boxShadow: '0 8px 18px rgba(5, 150, 105, 0.28)',
                }}
              >
                <Compass size={30} />
              </div>

              {/* Sub-label */}
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#059669',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.35rem',
                }}
              >
                場面で覚える日本語 ・ 状況と表現
              </div>

              {/* Title */}
              <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.75rem', lineHeight: 1.3 }}>
                Belajar Situasi & Pola Kalimat (場面で覚える)
              </h2>
            </div>

            {/* Action Button */}
            <button
              onClick={() => onSelectSource('situasi')}
              className="btn"
              style={{
                width: '100%',
                padding: '0.9rem 1.25rem',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
                color: '#ffffff',
                boxShadow: '0 4px 14px rgba(5, 150, 105, 0.3)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span>Mulai Belajar Situasi</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
