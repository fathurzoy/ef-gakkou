import React, { useState } from 'react';
import { ReadingPassage as ReadingPassageType } from '../types/quiz';
import { FuriganaText } from './FuriganaText';
import { BookOpen, Globe, ChevronDown, ChevronUp } from 'lucide-react';

interface ReadingPassageProps {
  passage: ReadingPassageType;
}

export const ReadingPassage: React.FC<ReadingPassageProps> = ({ passage }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <div className="card mb-6 border-indigo-100 bg-gradient-to-b from-indigo-50/40 to-white card-responsive-padding" style={{ borderColor: '#e0e7ff', background: '#fafbff', padding: '1.25rem', marginBottom: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <BookOpen size={18} />
          </div>
          <div>
            <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#1e1b4b', margin: 0 }}>
              {passage.title || 'Bacaan Wacana'}
            </h3>
            <span style={{ fontSize: '0.72rem', color: '#6366f1', fontWeight: 600 }}>
              読解テキスト (Wacana Ujian)
            </span>
          </div>
        </div>

        <button
          onClick={() => setShowTranslation(!showTranslation)}
          className="btn btn-secondary"
          style={{ fontSize: '0.78rem', padding: '0.35rem 0.65rem', borderRadius: '9999px', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
          title="Tampilkan Terjemahan Bahasa Indonesia"
        >
          <Globe size={13} color="#4f46e5" />
          <span className="desktop-only">{showTranslation ? 'Sembunyikan Terjemahan' : 'Terjemahan Wacana'}</span>
          <span className="mobile-only">{showTranslation ? 'Tutup Arti' : 'Arti Wacana'}</span>
          {showTranslation ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
        </button>
      </div>

      {/* Japanese passage text with precise furigana */}
      <div
        style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '1.25rem',
          fontSize: '1.1rem',
          lineHeight: '2.2',
          color: '#1e293b',
          whiteSpace: 'pre-line',
          boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.02)',
        }}
      >
        <FuriganaText text={passage.content} />
      </div>

      {/* Note if any */}
      {passage.note && (
        <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.65rem', fontStyle: 'italic' }}>
          {passage.note}
        </p>
      )}

      {/* Indonesian Translation Dropdown */}
      {showTranslation && (
        <div
          className="animate-fade-in"
          style={{
            marginTop: '0.85rem',
            padding: '1rem 1.25rem',
            background: '#f8fafc',
            border: '1px dashed #cbd5e1',
            borderRadius: '12px',
            fontSize: '0.92rem',
            lineHeight: '1.7',
            color: '#334155',
            whiteSpace: 'pre-line',
          }}
        >
          <div style={{ fontWeight: 700, color: '#4338ca', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem' }}>
            <Globe size={14} /> TERJEMAHAN BAHASA INDONESIA:
          </div>
          {passage.translation}
        </div>
      )}
    </div>
  );
};
