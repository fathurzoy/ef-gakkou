import React, { useState, useMemo } from 'react';
import { Question, SectionId } from '../types/quiz';
import { examSections } from '../data/examData';
import { FuriganaText } from './FuriganaText';
import { ReadingPassage } from './ReadingPassage';
import { ExplanationBox } from './ExplanationBox';
import {
  Search,
  BookOpen,
  Filter,
  CheckCircle2,
  PlayCircle,
} from 'lucide-react';

interface ReviewListViewProps {
  questions: Question[];
  onStartExamAt: (questionId: number) => void;
}

export const ReviewListView: React.FC<ReviewListViewProps> = ({
  questions,
  onStartExamAt,
}) => {
  const [selectedSection, setSelectedSection] = useState<SectionId | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedExplanations, setExpandedExplanations] = useState<Record<number, boolean>>({});

  const toggleExpand = (id: number) => {
    setExpandedExplanations((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const matchesSection = selectedSection === 'ALL' || q.sectionId === selectedSection;
      if (!matchesSection) return false;

      if (!searchQuery.trim()) return true;

      const qLow = searchQuery.toLowerCase();
      const matchText = q.questionText.toLowerCase().includes(qLow);
      const matchTrans = q.questionTranslation.toLowerCase().includes(qLow);
      const matchOpt = q.options?.some(
        (o) => o.text.toLowerCase().includes(qLow) || o.translation.toLowerCase().includes(qLow)
      );
      const matchPassage = q.passage?.content.toLowerCase().includes(qLow) || q.passage?.translation.toLowerCase().includes(qLow);

      return matchText || matchTrans || matchOpt || matchPassage;
    });
  }, [questions, selectedSection, searchQuery]);

  return (
    <div className="review-list-view">
      {/* Banner */}
      <div
        className="card mb-6"
        style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, #312e81 0%, #4338ca 100%)',
          color: '#ffffff',
          marginBottom: '1.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
          <BookOpen size={24} color="#a5b4fc" />
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0 }}>
            Mode Belajar & Review Lengkap
          </h2>
        </div>
        <p style={{ margin: 0, fontSize: '0.95rem', color: '#c7d2fe', lineHeight: 1.6 }}>
          Pelajari 60 soal ujian E-F secara langsung lengkap dengan kunci jawaban resmi, furigana presisi, terjemahan Bahasa Indonesia, dan analisis detail kenapa jawaban tersebut benar serta kenapa opsi lain salah.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div
        className="card mb-6"
        style={{
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          {/* Search Input */}
          <div
            style={{
              flex: 1,
              minWidth: '220px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Search
              size={18}
              color="#94a3b8"
              style={{ position: 'absolute', left: '0.85rem', pointerEvents: 'none' }}
            />
            <input
              type="text"
              placeholder="Cari kanji, kosakata, pola tata bahasa, atau arti..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem 0.75rem 0.6rem 2.5rem',
                borderRadius: '10px',
                border: '1px solid #cbd5e1',
                fontSize: '0.9rem',
                fontFamily: 'inherit',
                outline: 'none',
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Filter size={14} /> Filter:
            </span>
            <button
              onClick={() => setSelectedSection('ALL')}
              className={`btn ${selectedSection === 'ALL' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.78rem', padding: '0.4rem 0.75rem', borderRadius: '9999px' }}
            >
              Semua ({questions.length})
            </button>
            {examSections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setSelectedSection(sec.id)}
                className={`btn ${selectedSection === sec.id ? 'btn-primary' : 'btn-secondary'}`}
                style={{ fontSize: '0.78rem', padding: '0.4rem 0.75rem', borderRadius: '9999px' }}
              >
                Bagian {sec.id}
              </button>
            ))}
          </div>
        </div>

        <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
          Menampilkan <strong>{filteredQuestions.length}</strong> soal
        </div>
      </div>

      {/* List of Questions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {filteredQuestions.map((question) => {
          const isExpanded = expandedExplanations[question.id] !== false; // expanded by default in study mode

          return (
            <div
              key={question.id}
              className="card shadow-sm"
              style={{ padding: '1.5rem', borderLeft: '4px solid #4f46e5' }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                  borderBottom: '1px solid #f1f5f9',
                  paddingBottom: '0.65rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      borderRadius: '8px',
                      background: '#4f46e5',
                      color: '#ffffff',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                    }}
                  >
                    {question.id}
                  </span>
                  <span className="badge badge-indigo" style={{ fontSize: '0.75rem' }}>
                    {question.sectionTitle}
                  </span>
                </div>

                <button
                  onClick={() => onStartExamAt(question.id)}
                  className="btn btn-secondary"
                  style={{ fontSize: '0.75rem', padding: '0.35rem 0.65rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                  title="Coba kerjakan soal ini di Mode Ujian"
                >
                  <PlayCircle size={14} color="#4f46e5" />
                  <span>Uji Soal Ini</span>
                </button>
              </div>

              {/* Passage if present */}
              {question.passage && <ReadingPassage passage={question.passage} />}

              {/* Question Text */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 600, lineHeight: 2, color: '#0f172a' }}>
                  <FuriganaText text={question.questionText} />
                </div>
                <div style={{ fontSize: '0.92rem', color: '#475569', marginTop: '0.35rem', fontStyle: 'italic' }}>
                  Arti: {question.questionTranslation}
                </div>
              </div>

              {/* Options Grid with highlighted answer */}
              {question.options && (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '0.65rem',
                    marginBottom: '1rem',
                  }}
                >
                  {question.options.map((opt) => (
                    <div
                      key={opt.id}
                      style={{
                        padding: '0.75rem 0.95rem',
                        borderRadius: '10px',
                        border: `2px solid ${opt.isCorrect ? '#10b981' : '#e2e8f0'}`,
                        background: opt.isCorrect ? '#ecfdf5' : '#ffffff',
                        color: opt.isCorrect ? '#065f46' : '#1e293b',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                      }}
                    >
                      <span
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: opt.isCorrect ? '#10b981' : '#f1f5f9',
                          color: opt.isCorrect ? '#ffffff' : '#64748b',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {opt.id}
                      </span>
                      <div>
                        <div style={{ fontSize: '1.05rem', fontWeight: opt.isCorrect ? 700 : 500 }}>
                          <FuriganaText text={opt.text} />
                        </div>
                        <div style={{ fontSize: '0.8rem', color: opt.isCorrect ? '#047857' : '#64748b' }}>
                          {opt.translation}
                        </div>
                      </div>
                      {opt.isCorrect && (
                        <div style={{ marginLeft: 'auto' }}>
                          <CheckCircle2 size={18} color="#10b981" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Toggle Explanation Button */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.5rem' }}>
                <button
                  onClick={() => toggleExpand(question.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#4f46e5',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                >
                  {isExpanded ? '▲ Sembunyikan Pembahasan' : '▼ Buka Pembahasan & Alasan'}
                </button>
              </div>

              {/* Explanation Box */}
              {isExpanded && (
                <ExplanationBox
                  explanation={question.explanation}
                  correctAnswerDisplay={question.correctAnswerDisplay}
                  questionTranslation={question.questionTranslation}
                  options={question.options}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
