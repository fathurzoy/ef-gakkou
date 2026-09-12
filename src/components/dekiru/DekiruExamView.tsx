import React, { useState } from 'react';
import { dekiruExam1Data } from '../../data/dekiruExam1Data';
import { SegmentFurigana } from '../SegmentFurigana';
import {
  BookOpen,
  GraduationCap,
  ArrowLeft,
  Layers,
  BookMarked,
  Eye,
  RotateCcw,
  Sparkles,
  Copy,
  Check,
  Camera,
  PenTool,
  CheckCircle2,
  Lightbulb,
} from 'lucide-react';

interface DekiruExamViewProps {
  onBackToSourceSelect: () => void;
}

export const DekiruExamView: React.FC<DekiruExamViewProps> = ({ onBackToSourceSelect }) => {
  const [activeTab, setActiveTab] = useState<'study' | 'exam'>('study');
  const [selectedSection, setSelectedSection] = useState<number | 'ALL'>('ALL');

  // Interactive exam answers state
  // key: questionId -> value
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>({});
  const [revealedQuestions, setRevealedQuestions] = useState<Record<string, boolean>>({});
  const [expandedExplanations, setExpandedExplanations] = useState<Record<string, boolean>>({});
  const [copiedPromptSection, setCopiedPromptSection] = useState<string | null>(null);
  const [aiMode, setAiMode] = useState<Record<string, 'web' | 'photo'>>({
    'sec-7': 'web',
    'sec-5': 'web',
  });

  const toggleExpand = (qId: string) => {
    setExpandedExplanations((prev) => ({
      ...prev,
      [qId]: prev[qId] === undefined ? false : !prev[qId],
    }));
  };

  const handleSelectAnswer = (qId: string, answer: any) => {
    setUserAnswers((prev) => ({ ...prev, [qId]: answer }));
    setRevealedQuestions((prev) => ({ ...prev, [qId]: true }));
  };

  const handleResetExam = () => {
    if (window.confirm('Reset semua jawaban ujian Dekiru Nihongo?')) {
      setUserAnswers({});
      setRevealedQuestions({});
    }
  };

  const handleCopyPrompt = (sectionKey: string, promptText: string) => {
    navigator.clipboard.writeText(promptText);
    setCopiedPromptSection(sectionKey);
    setTimeout(() => {
      setCopiedPromptSection((prev) => (prev === sectionKey ? null : prev));
    }, 2500);
  };

  const filteredSections =
    selectedSection === 'ALL'
      ? dekiruExam1Data.sections
      : dekiruExam1Data.sections.filter((s) => s.section === selectedSection);

  return (
    <div className="dekiru-app-container animate-fade-in" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navbar */}
      <header className="app-header">
        <div className="header-inner">
          <div className="header-top-row">
            {/* Left: Back button + Title */}
            <div className="header-brand-group">
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

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.15rem',
                    boxShadow: '0 2px 8px rgba(14, 165, 233, 0.3)',
                    flexShrink: 0,
                  }}
                >
                  📚
                </div>
                <div className="header-title-block">
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                    できる日本語 初級
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>
                    1〜3課 復習テスト (Ujian Bab 1-3)
                  </div>
                </div>
              </div>
            </div>

            {/* Center: Mode Switcher */}
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
                onClick={() => setActiveTab('study')}
                className={`btn ${activeTab === 'study' ? 'btn-primary' : 'btn-ghost'}`}
                style={{
                  fontSize: '0.8rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  height: '34px',
                  gap: '0.35rem',
                }}
              >
                <BookOpen size={15} />
                <span>Mode Belajar & Pembahasan</span>
              </button>

              <button
                onClick={() => setActiveTab('exam')}
                className={`btn ${activeTab === 'exam' ? 'btn-primary' : 'btn-ghost'}`}
                style={{
                  fontSize: '0.8rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  height: '34px',
                  gap: '0.35rem',
                }}
              >
                <GraduationCap size={15} />
                <span>Mode Ujian Interaktif</span>
              </button>
            </div>

            {/* Right: Actions */}
            <div className="header-actions-group">
              <span className="badge badge-indigo" style={{ fontSize: '0.75rem', textTransform: 'none' }}>
                7 Seksi Soal
              </span>
              {Object.keys(userAnswers).length > 0 && activeTab === 'exam' && (
                <button
                  onClick={handleResetExam}
                  className="btn btn-ghost"
                  style={{
                    padding: '0.35rem',
                    borderRadius: '8px',
                    height: '34px',
                    width: '34px',
                    color: '#94a3b8',
                  }}
                  title="Reset Jawaban Ujian"
                >
                  <RotateCcw size={15} />
                </button>
              )}
            </div>
          </div>

          {/* Row 2 on Mobile/Tablet */}
          <div className="mobile-only header-sub-row">
            <div className="header-mode-switcher">
              <button
                onClick={() => setActiveTab('study')}
                className={`btn ${activeTab === 'study' ? 'btn-primary' : 'btn-ghost'}`}
              >
                <BookOpen size={14} />
                <span>Mode Belajar</span>
              </button>
              <button
                onClick={() => setActiveTab('exam')}
                className={`btn ${activeTab === 'exam' ? 'btn-primary' : 'btn-ghost'}`}
              >
                <GraduationCap size={14} />
                <span>Mode Ujian</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="main-content" style={{ maxWidth: '960px', margin: '0 auto', padding: '1.5rem 1rem 3rem 1rem' }}>
        {/* Banner */}
        <div
          className="card mb-6 card-responsive-padding"
          style={{
            padding: '1.5rem',
            background: 'linear-gradient(135deg, #312e81 0%, #4338ca 100%)',
            color: '#ffffff',
            marginBottom: '1.25rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.4rem' }}>
                <BookOpen size={22} color="#a5b4fc" />
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: '#ffffff' }}>
                  {dekiruExam1Data.exam.title}
                </h2>
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#c7d2fe', lineHeight: 1.5 }}>
                {activeTab === 'study'
                  ? 'Pelajari seluruh seksi soal ujian Dekiru Nihongo Bab 1-3 lengkap dengan furigana, terjemahan, kunci jawaban, dan langkah pengerjaan.'
                  : 'Simulasi mode ujian interaktif: pilih atau ketik jawaban Anda, lalu verifikasi mandiri atau gunakan bantuan AI.'}
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  background: 'rgba(255, 255, 255, 0.15)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {activeTab === 'study' ? '📖 Mode Belajar (Review)' : '⚡ Mode Ujian (Simulasi)'}
              </span>
            </div>
          </div>
        </div>

        {/* Filter and Section Selector Card */}
        <div
          className="card mb-6 card-responsive-padding"
          style={{
            padding: '1rem 1.25rem',
            marginBottom: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.25rem', flexShrink: 0 }}>
              <Layers size={13} /> Filter Bagian:
            </span>
            <div className="scroll-pills-row" style={{ flex: 1 }}>
              <button
                onClick={() => setSelectedSection('ALL')}
                className={`btn scroll-pill-btn ${selectedSection === 'ALL' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem', borderRadius: '9999px' }}
              >
                Semua Bagian (2-8)
              </button>
              {dekiruExam1Data.sections.map((sec) => (
                <button
                  key={sec.section}
                  onClick={() => setSelectedSection(sec.section)}
                  className={`btn scroll-pill-btn ${selectedSection === sec.section ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem', borderRadius: '9999px' }}
                >
                  Bagian {sec.section}: {sec.title}
                </button>
              ))}
            </div>
          </div>

          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
            Menampilkan <strong>{filteredSections.length}</strong> bagian soal
          </div>
        </div>

        {/* Sections Content List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {filteredSections.map((sec) => (
            <div
              key={sec.section}
              className="card"
              style={{
                borderRadius: '18px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                overflow: 'hidden',
              }}
            >
              {/* Section Header */}
              <div
                style={{
                  padding: '1rem 1.25rem',
                  background: 'linear-gradient(90deg, #f8fafc 0%, #f1f5f9 100%)',
                  borderBottom: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="badge badge-indigo">Bagian {sec.section}</span>
                    <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                      {sec.title} ({sec.titleReading})
                    </h2>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#475569', marginTop: '0.35rem' }}>
                    <strong>Petunjuk:</strong>{' '}
                    <SegmentFurigana segments={sec.instruction.segments} />
                  </div>
                </div>
              </div>

              {/* Section-Specific Elements */}

              {/* 1. Word Bank (Section 2) */}
              {sec.type === 'word-bank' && 'wordBank' in sec && (
                <div style={{ padding: '1rem 1.25rem', background: '#f8faff', borderBottom: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4338ca', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <BookMarked size={14} />
                    <span>Pilihan Kata Kerja (Word Bank a〜g):</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.5rem' }}>
                    {sec.wordBank.map((wb) => (
                      <div
                        key={wb.id}
                        style={{
                          background: '#ffffff',
                          padding: '0.45rem 0.75rem',
                          borderRadius: '8px',
                          border: '1px solid #c7d2fe',
                          fontSize: '0.88rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                        }}
                      >
                        <span style={{ fontWeight: 800, color: '#4f46e5' }}>{wb.id}.</span>
                        <SegmentFurigana segments={wb.content.segments} />
                        <span style={{ fontSize: '0.75rem', color: '#64748b' }}>({wb.meaningId})</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. Reading Passage (Section 8) */}
              {sec.type === 'reading-true-false' && 'passage' in sec && (
                <div style={{ padding: '1.25rem', background: '#fafaf9', borderBottom: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.65rem' }}>
                    <BookOpen size={16} color="#d97706" />
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#78350f' }}>
                      Wacana Bacaan (Reading Passage):
                    </span>
                  </div>
                  <div
                    style={{
                      background: '#ffffff',
                      padding: '1.25rem',
                      borderRadius: '12px',
                      border: '1px solid #fef3c7',
                      fontSize: '1.05rem',
                      lineHeight: 2.2,
                      color: '#1c1917',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                    }}
                  >
                    <SegmentFurigana segments={sec.passage.segments} />
                  </div>

                  {sec.readingStrategy && (
                    <div style={{ marginTop: '0.75rem', background: '#fffbeb', padding: '0.65rem 0.85rem', borderRadius: '8px', fontSize: '0.8rem', color: '#92400e' }}>
                      <strong>Strategi Menjawab:</strong>
                      <ul style={{ margin: '0.25rem 0 0 1rem', padding: 0 }}>
                        {sec.readingStrategy.map((st, i) => (
                          <li key={i}>{st}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* 3. Matching Choices Box (Section 6) */}
              {sec.type === 'dialogue-matching' && 'choices' in sec && (
                <div style={{ padding: '1rem 1.25rem', background: '#f8faff', borderBottom: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4338ca', marginBottom: '0.5rem' }}>
                    Pilihan Ekspresi Percakapan (a〜e):
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {sec.choices.map((ch) => (
                      <div
                        key={ch.id}
                        style={{
                          background: '#ffffff',
                          padding: '0.45rem 0.75rem',
                          borderRadius: '8px',
                          border: '1px solid #c7d2fe',
                          fontSize: '0.88rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                        }}
                      >
                        <span style={{ fontWeight: 800, color: '#4f46e5' }}>{ch.id}.</span>
                        <SegmentFurigana segments={ch.content.segments} />
                        <span style={{ fontSize: '0.78rem', color: '#64748b' }}>— {ch.meaningId}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Items List */}
              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {sec.items.map((item, itemIdx) => {
                  const isRevealed = activeTab === 'study' || revealedQuestions[item.id];
                  const userAnswer = userAnswers[item.id];

                  const isExpanded = expandedExplanations[item.id] !== false; // expanded by default in study mode

                  return (
                    <div
                      key={item.id}
                      className="card shadow-sm card-responsive-padding"
                      style={{
                        padding: '1.5rem',
                        borderLeft: '4px solid #4f46e5',
                        borderRadius: '14px',
                        background: '#ffffff',
                        borderTop: '1px solid #e2e8f0',
                        borderRight: '1px solid #e2e8f0',
                        borderBottom: '1px solid #e2e8f0',
                      }}
                    >
                      {/* Question Number & Tags */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '1rem',
                          borderBottom: '1px solid #f1f5f9',
                          paddingBottom: '0.65rem',
                          flexWrap: 'wrap',
                          gap: '0.5rem',
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
                            {itemIdx + 1}
                          </span>
                          {'grammarPoint' in item && item.grammarPoint && (
                            <span className="badge badge-indigo" style={{ fontSize: '0.75rem' }}>
                              {item.grammarPoint}
                            </span>
                          )}
                        </div>

                        {activeTab === 'exam' && !isRevealed && (
                          <button
                            onClick={() => setRevealedQuestions((prev) => ({ ...prev, [item.id]: true }))}
                            className="btn btn-ghost"
                            style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', color: '#64748b' }}
                          >
                            <Eye size={13} /> Intip Kunci
                          </button>
                        )}
                      </div>

                      {/* Question Text / Context */}
                      {'context' in item && item.context && (
                        <div style={{ fontSize: '0.82rem', color: '#b45309', background: '#fffbeb', padding: '0.4rem 0.65rem', borderRadius: '6px', marginBottom: '0.75rem', display: 'inline-block' }}>
                          💡 <strong>Situasi:</strong> {item.context.imageHint}
                        </div>
                      )}

                      {/* Question Sentence */}
                      {'question' in item && item.question && (
                        <div className="question-text-mobile" style={{ fontSize: '1.2rem', fontWeight: 600, lineHeight: 2.1, color: '#0f172a', marginBottom: '0.85rem' }}>
                          <SegmentFurigana segments={item.question.segments} />
                        </div>
                      )}

                      {/* Dialogue items (Section 5) */}
                      {'dialogue' in item && item.dialogue && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.85rem' }}>
                          {item.dialogue.map((turn, tIdx) => (
                            <div key={tIdx} style={{ fontSize: '1.08rem', lineHeight: 2, color: turn.speaker === '客' ? '#0369a1' : '#1e293b' }}>
                              <SegmentFurigana segments={turn.content.segments} />
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Reading statement (Section 8) */}
                      {'statement' in item && item.statement && (
                        <div className="question-text-mobile" style={{ fontSize: '1.2rem', fontWeight: 600, lineHeight: 2.1, color: '#0f172a', marginBottom: '0.85rem' }}>
                          <SegmentFurigana segments={item.statement.segments} />
                        </div>
                      )}

                      {/* INTERACTIVE CONTROLS (MODE UJIAN) */}
                      {activeTab === 'exam' && (
                        <div style={{ marginTop: '0.75rem', marginBottom: '0.75rem' }}>
                          {/* 1. Choices for Section 4 */}
                          {'choices' in item && Array.isArray(item.choices) && typeof item.choices[0] === 'string' && (
                            <div className="review-options-grid" style={{ marginBottom: '0.5rem' }}>
                              {item.choices.map((ch: string, cIdx: number) => {
                                const isSelected = userAnswer === ch;
                                const isCorrect = 'answer' in item && item.answer === ch;
                                const showCorrect = isRevealed && isCorrect;
                                const showWrong = isRevealed && isSelected && !isCorrect;

                                return (
                                  <button
                                    key={ch}
                                    type="button"
                                    onClick={() => handleSelectAnswer(item.id, ch)}
                                    style={{
                                      padding: '0.75rem 0.95rem',
                                      borderRadius: '10px',
                                      border: `2px solid ${
                                        showCorrect
                                          ? '#10b981'
                                          : showWrong
                                          ? '#ef4444'
                                          : isSelected
                                          ? '#4f46e5'
                                          : '#e2e8f0'
                                      }`,
                                      background: showCorrect
                                        ? '#ecfdf5'
                                        : showWrong
                                        ? '#fef2f2'
                                        : isSelected
                                        ? '#eef2ff'
                                        : '#ffffff',
                                      color: showCorrect
                                        ? '#065f46'
                                        : showWrong
                                        ? '#991b1b'
                                        : isSelected
                                        ? '#312e81'
                                        : '#1e293b',
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '0.65rem',
                                      cursor: 'pointer',
                                      textAlign: 'left',
                                      fontFamily: 'inherit',
                                      transition: 'all 0.15s ease',
                                    }}
                                  >
                                    <span
                                      style={{
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: showCorrect
                                          ? '#10b981'
                                          : showWrong
                                          ? '#ef4444'
                                          : isSelected
                                          ? '#4f46e5'
                                          : '#f1f5f9',
                                        color: isSelected || showCorrect || showWrong ? '#ffffff' : '#64748b',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.8rem',
                                        fontWeight: 700,
                                        flexShrink: 0,
                                      }}
                                    >
                                      {cIdx + 1}
                                    </span>
                                    <span style={{ fontSize: '1.05rem', fontWeight: isSelected || showCorrect ? 700 : 500 }}>
                                      {ch}
                                    </span>
                                    {showCorrect && (
                                      <div style={{ marginLeft: 'auto' }}>
                                        <CheckCircle2 size={18} color="#10b981" />
                                      </div>
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          )}

                          {/* 2. Word Bank Buttons for Section 2 */}
                          {sec.type === 'word-bank' && 'wordBank' in sec && (
                            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                              {sec.wordBank.map((wb) => {
                                const isSelected = userAnswer === wb.id;
                                const isCorrect =
                                  'answer' in item &&
                                  typeof item.answer === 'object' &&
                                  item.answer !== null &&
                                  'value' in item.answer &&
                                  (item.answer as { value: string }).value === wb.id;
                                let bg = '#ffffff';
                                let color = '#334155';
                                if (isRevealed) {
                                  if (isCorrect) {
                                    bg = '#ecfdf5';
                                    color = '#065f46';
                                  } else if (isSelected) {
                                    bg = '#fef2f2';
                                    color = '#991b1b';
                                  }
                                }

                                return (
                                  <button
                                    key={wb.id}
                                    onClick={() => handleSelectAnswer(item.id, wb.id)}
                                    className="btn btn-secondary"
                                    style={{
                                      padding: '0.4rem 0.75rem',
                                      fontSize: '0.85rem',
                                      borderRadius: '8px',
                                      background: bg,
                                      color: color,
                                      borderColor: isRevealed && isCorrect ? '#10b981' : '#cbd5e1',
                                    }}
                                  >
                                    <span style={{ fontWeight: 800 }}>{wb.id}.</span> {wb.content.text}
                                  </button>
                                );
                              })}
                            </div>
                          )}

                          {/* 3. Particle Input for Section 3 */}
                          {sec.type === 'particle-fill' && 'answer' in item && Array.isArray(item.answer) && (() => {
                            const particleAnswers = item.answer as string[];
                            return (
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                  {particleAnswers.map((correctAns: string, blankIdx: number) => {
                                    const currentVal = (userAnswers[item.id] && userAnswers[item.id][blankIdx]) || '';
                                    const isCorrect = currentVal.trim() === correctAns;
                                    let borderColor = '#cbd5e1';
                                    let bg = '#ffffff';
                                    if (isRevealed && currentVal) {
                                      borderColor = isCorrect ? '#10b981' : '#ef4444';
                                      bg = isCorrect ? '#ecfdf5' : '#fef2f2';
                                    }

                                    return (
                                      <div key={blankIdx} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                                        <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
                                          ({blankIdx + 1})
                                        </span>
                                        <input
                                          type="text"
                                          value={currentVal}
                                          placeholder="—"
                                          onChange={(e) => {
                                            const val = e.target.value;
                                            const arr = Array.isArray(userAnswers[item.id])
                                              ? [...userAnswers[item.id]]
                                              : new Array(particleAnswers.length).fill('');
                                            arr[blankIdx] = val;
                                            setUserAnswers((prev) => ({ ...prev, [item.id]: arr }));
                                          }}
                                          style={{
                                            width: '72px',
                                            padding: '0.4rem 0.6rem',
                                            borderRadius: '8px',
                                            border: `1.5px solid ${borderColor}`,
                                            background: bg,
                                            fontSize: '0.92rem',
                                            fontWeight: 700,
                                            textAlign: 'center',
                                          }}
                                        />
                                      </div>
                                    );
                                  })}
                                </div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                                  💡 Ketik partikel hiragana (e.g. に, で, を, へ, と) atau '×' jika tanpa partikel.
                                </div>
                              </div>
                            );
                          })()}

                          {/* 4. Dialogue Matching Choice Buttons for Section 6 */}
                          {sec.type === 'dialogue-matching' && 'choices' in sec && 'answer' in item && Array.isArray(item.answer) && (() => {
                            const matchingAnswers = item.answer as string[];
                            return (
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                  {matchingAnswers.map((correctAns: string, blankIdx: number) => {
                                    const currentChoice = (userAnswers[item.id] && userAnswers[item.id][blankIdx]) || '';
                                    return (
                                      <div key={blankIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#475569', minWidth: '60px' }}>
                                          Blank ({blankIdx + 1}):
                                        </span>
                                        <div style={{ display: 'inline-flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                                          {sec.choices.map((ch) => {
                                            const isSelected = currentChoice === ch.id;
                                            const isCorrect = ch.id === correctAns;
                                            let btnBg = '#ffffff';
                                            let border = '#cbd5e1';
                                            let textColor = '#334155';
                                            if (isRevealed) {
                                              if (isCorrect) {
                                                btnBg = '#ecfdf5';
                                                border = '#10b981';
                                                textColor = '#065f46';
                                              } else if (isSelected) {
                                                btnBg = '#fef2f2';
                                                border = '#ef4444';
                                                textColor = '#991b1b';
                                              }
                                            } else if (isSelected) {
                                              btnBg = '#e0e7ff';
                                              border = '#6366f1';
                                              textColor = '#3730a3';
                                            }

                                            return (
                                              <button
                                                key={ch.id}
                                                onClick={() => {
                                                  const arr = Array.isArray(userAnswers[item.id])
                                                    ? [...userAnswers[item.id]]
                                                    : new Array(matchingAnswers.length).fill('');
                                                  arr[blankIdx] = ch.id;
                                                  handleSelectAnswer(item.id, arr);
                                                }}
                                                className="btn"
                                                style={{
                                                  padding: '0.3rem 0.6rem',
                                                  fontSize: '0.82rem',
                                                  borderRadius: '6px',
                                                  background: btnBg,
                                                  borderColor: border,
                                                  color: textColor,
                                                  fontWeight: 700,
                                                }}
                                              >
                                                {ch.id}
                                              </button>
                                            );
                                          })}
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })()}

                          {/* 5. Dialogue Writing Text Input for Section 5 */}
                          {sec.type === 'dialogue-writing' && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                              <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#475569' }}>
                                ✍️ Tulis kalimat respon/pertanyaan Anda:
                              </label>
                              <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <input
                                  type="text"
                                  placeholder="Ketik kalimat bahasa Jepang di sini..."
                                  value={userAnswers[item.id] || ''}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    setUserAnswers((prev) => ({ ...prev, [item.id]: val }));
                                  }}
                                  style={{
                                    flex: 1,
                                    padding: '0.55rem 0.85rem',
                                    borderRadius: '10px',
                                    border: '1.5px solid #cbd5e1',
                                    fontSize: '0.95rem',
                                  }}
                                />
                              </div>
                            </div>
                          )}

                          {/* 6. Open Answer Text Input for Section 7 */}
                          {sec.type === 'open-answer' && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                              <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#475569' }}>
                                ✍️ Jawaban Anda (Ketik di sini untuk verifikasi AI otomatis):
                              </label>
                              <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <input
                                  type="text"
                                  placeholder="Ketik jawaban Anda dalam bahasa Jepang..."
                                  value={userAnswers[item.id] || ''}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    setUserAnswers((prev) => ({ ...prev, [item.id]: val }));
                                  }}
                                  style={{
                                    flex: 1,
                                    padding: '0.55rem 0.85rem',
                                    borderRadius: '10px',
                                    border: '1.5px solid #cbd5e1',
                                    fontSize: '0.95rem',
                                  }}
                                />
                              </div>
                            </div>
                          )}

                          {/* 7. True / False buttons for Section 8 */}
                          {sec.type === 'reading-true-false' && (
                            <div style={{ display: 'flex', gap: '0.65rem' }}>
                              {(['○', '×'] as const).map((opt) => {
                                const isSelected = userAnswer === opt;
                                const isCorrect = 'answer' in item && item.answer === opt;
                                let bg = '#ffffff';
                                let border = '#cbd5e1';
                                let color = '#334155';
                                if (isRevealed) {
                                  if (isCorrect) {
                                    bg = '#ecfdf5';
                                    border = '#10b981';
                                    color = '#065f46';
                                  } else if (isSelected) {
                                    bg = '#fef2f2';
                                    border = '#ef4444';
                                    color = '#991b1b';
                                  }
                                }

                                return (
                                  <button
                                    key={opt}
                                    onClick={() => handleSelectAnswer(item.id, opt)}
                                    className="btn btn-secondary"
                                    style={{
                                      padding: '0.5rem 1.25rem',
                                      fontSize: '1.05rem',
                                      fontWeight: 800,
                                      borderRadius: '10px',
                                      background: bg,
                                      borderColor: border,
                                      color: color,
                                    }}
                                  >
                                    {opt} {opt === '○' ? '(Benar)' : '(Salah)'}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Toggle Explanation Button (Always available in study mode, or when revealed in exam mode) */}
                      {isRevealed && (
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem', marginBottom: '0.25rem' }}>
                          <button
                            onClick={() => toggleExpand(item.id)}
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
                            {isExpanded ? '▲ Sembunyikan Pembahasan' : '▼ Buka Pembahasan & Kunci'}
                          </button>
                        </div>
                      )}

                      {/* ANSWERS & EXPLANATION BOX (Styled like ExplanationBox.tsx) */}
                      {isRevealed && isExpanded && (
                        <div
                          className="animate-fade-in"
                          style={{
                            marginTop: '0.85rem',
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

                            {/* Section 4 single choice display */}
                            {'answer' in item && typeof item.answer === 'string' && (
                              <div
                                style={{
                                  background: 'rgba(255,255,255,0.2)',
                                  padding: '0.2rem 0.65rem',
                                  borderRadius: '9999px',
                                  fontSize: '0.82rem',
                                  fontWeight: 600,
                                }}
                              >
                                Kunci: {item.answer}
                              </div>
                            )}
                          </div>

                          <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                            {/* Official Answer Box */}
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
                                <span>KUNCI JAWABAN RESMI:</span>
                              </div>

                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {/* Section 2 answer */}
                                {'answer' in item && typeof item.answer === 'object' && 'value' in item.answer && 'content' in item.answer && (
                                  <span className="badge badge-emerald" style={{ fontSize: '0.88rem' }}>
                                    <strong>{item.answer.value}.</strong>{' '}
                                    <SegmentFurigana segments={item.answer.content.segments} />
                                  </span>
                                )}

                                {/* Section 3 particle answer */}
                                {'answer' in item && Array.isArray(item.answer) && (
                                  <div style={{ display: 'inline-flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                                    {item.answer.map((ans: string, aIdx: number) => (
                                      <span key={aIdx} className="badge badge-emerald" style={{ fontSize: '0.85rem' }}>
                                        Blank {aIdx + 1}: <strong>{ans}</strong>
                                      </span>
                                    ))}
                                  </div>
                                )}

                                {/* Section 4 single string choice answer */}
                                {'answer' in item && typeof item.answer === 'string' && (
                                  <span className="badge badge-emerald" style={{ fontSize: '0.9rem' }}>
                                    {'answerRuby' in item && item.answerRuby ? (
                                      <SegmentFurigana segments={item.answerRuby.segments} />
                                    ) : (
                                      item.answer
                                    )}
                                  </span>
                                )}

                                {/* Section 5 dialogue answer */}
                                {'answer' in item && typeof item.answer === 'object' && 'segments' in item.answer && (
                                  <span className="badge badge-emerald" style={{ fontSize: '0.9rem' }}>
                                    <SegmentFurigana segments={item.answer.segments} />
                                  </span>
                                )}

                                {/* Section 7 open answer */}
                                {'paperAnswer' in item && item.paperAnswer && (
                                  <span className="badge badge-emerald" style={{ fontSize: '0.85rem' }}>
                                    Lembar Ujian: <SegmentFurigana segments={item.paperAnswer.segments} />
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Section 7 Sample Answers */}
                            {'sampleAnswers' in item && item.sampleAnswers && (
                              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '0.75rem 1rem' }}>
                                <strong style={{ fontSize: '0.82rem', color: '#475569' }}>Variasi Jawaban Lain:</strong>
                                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.35rem' }}>
                                  {item.sampleAnswers.map((sa, sIdx) => (
                                    <span key={sIdx} style={{ background: '#ffffff', padding: '0.25rem 0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.88rem' }}>
                                      <SegmentFurigana segments={sa.segments} />
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Indonesian Explanation */}
                            {'explanationId' in item && item.explanationId && (
                              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '0.85rem 1rem' }}>
                                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                                  💡 Penjelasan & Alasan
                                </div>
                                <p style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.6, margin: 0 }}>
                                  {item.explanationId}
                                </p>
                              </div>
                            )}

                            {/* Solving Steps */}
                            {'solvingSteps' in item && Array.isArray(item.solvingSteps) && item.solvingSteps.length > 0 && (
                              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '0.85rem 1rem' }}>
                                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#4f46e5', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                                  📝 Langkah Pengerjaan
                                </div>
                                <ol style={{ margin: '0.25rem 0 0 1.25rem', padding: 0, fontSize: '0.88rem', color: '#334155', lineHeight: 1.6 }}>
                                  {item.solvingSteps.map((step, sIdx) => (
                                    <li key={sIdx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* AI Verification & Prompt Copy Widget for Section 7 (Open Answers) */}
              {sec.section === 7 && (
                <div
                  style={{
                    margin: '0 1.25rem 1.25rem 1.25rem',
                    padding: '1.25rem',
                    background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
                    borderRadius: '14px',
                    border: '1.5px solid #c4b5fd',
                    boxShadow: '0 2px 8px rgba(124, 58, 237, 0.08)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Sparkles size={18} color="#7c3aed" />
                      <h3 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#4c1d95', margin: 0 }}>
                        Verifikasi Jawaban dengan AI (ChatGPT / Claude / Gemini)
                      </h3>
                    </div>
                    <span className="badge badge-indigo" style={{ fontSize: '0.72rem' }}>
                      Cek Tata Bahasa & Kealamian
                    </span>
                  </div>

                  <p style={{ fontSize: '0.82rem', color: '#5b21b6', margin: '0 0 1rem 0', lineHeight: 1.5 }}>
                    Pilih metode pengerjaan Anda di bawah ini, lalu klik salin prompt untuk mengecek ketepatan partikel, tata bahasa, dan kecocokan konteks di AI:
                  </p>

                  {/* Mode Tabs */}
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => setAiMode((prev) => ({ ...prev, 'sec-7': 'web' }))}
                      className="btn"
                      style={{
                        padding: '0.4rem 0.85rem',
                        fontSize: '0.82rem',
                        borderRadius: '8px',
                        background: (aiMode['sec-7'] || 'web') === 'web' ? '#7c3aed' : '#ffffff',
                        color: (aiMode['sec-7'] || 'web') === 'web' ? '#ffffff' : '#5b21b6',
                        border: '1px solid #7c3aed',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontWeight: 700,
                      }}
                    >
                      <PenTool size={14} />
                      Opsi 1: Jawab Langsung di Website
                    </button>

                    <button
                      onClick={() => setAiMode((prev) => ({ ...prev, 'sec-7': 'photo' }))}
                      className="btn"
                      style={{
                        padding: '0.4rem 0.85rem',
                        fontSize: '0.82rem',
                        borderRadius: '8px',
                        background: (aiMode['sec-7'] || 'web') === 'photo' ? '#7c3aed' : '#ffffff',
                        color: (aiMode['sec-7'] || 'web') === 'photo' ? '#ffffff' : '#5b21b6',
                        border: '1px solid #7c3aed',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontWeight: 700,
                      }}
                    >
                      <Camera size={14} />
                      Opsi 2: Tulis di Buku (Foto Lembar Jawaban)
                    </button>
                  </div>

                  {/* Prompt Preview Box */}
                  {(() => {
                    const mode = aiMode['sec-7'] || 'web';
                    let promptText = '';

                    if (mode === 'web') {
                      promptText = `Saya sedang belajar bahasa Jepang setara Dekiru Nihongo Bab 1-3. Tolong koreksi jawaban latihan saya untuk Bagian "あなたの答え" (Jawaban Bebas):\n\n` +
                        sec.items.map((it, idx) => {
                          const qText = 'question' in it ? it.question.text : '';
                          const ans = userAnswers[it.id] || '(belum dijawab)';
                          const sample = 'sampleAnswers' in it && Array.isArray(it.sampleAnswers) ? it.sampleAnswers.map(s => s.text).join(' / ') : '';
                          return `Soal ${idx + 1}: ${qText}\nJawaban Saya: ${ans}\n(Referensi Kunci/Contoh: ${sample})\n`;
                        }).join('\n') +
                        `\nTolong berikan evaluasi untuk setiap nomor:\n` +
                        `1. Apakah partikel, bentuk kata kerja (ます/ません/です), dan susunan kalimatnya sudah benar?\n` +
                        `2. Apakah kalimatnya terdengar alami bagi penutur asli Jepang?\n` +
                        `3. Jika ada kesalahan atau kalimat yang lebih alami, tolong beri pembetulan beserta penjelasannya dalam bahasa Indonesia.`;
                    } else {
                      promptText = `Saya melampirkan foto lembar jawaban tulisan tangan saya untuk Ujian Evaluasi Dekiru Nihongo Bab 1-3 Bagian 7 "あなたの答え" (Pertanyaan Terbuka):\n\n` +
                        sec.items.map((it, idx) => {
                          const qText = 'question' in it ? it.question.text : '';
                          const sample = 'sampleAnswers' in it && Array.isArray(it.sampleAnswers) ? it.sampleAnswers.map(s => s.text).join(' / ') : '';
                          return `Soal ${idx + 1}: ${qText} (Referensi: ${sample})`;
                        }).join('\n') +
                        `\n\nTolong periksa tulisan saya di foto ini:\n` +
                        `1. Bacakan kembali jawaban yang saya tulis di lembar foto tersebut.\n` +
                        `2. Evaluasi kebenaran tata bahasa, partikel, serta ketepatan karakter Kanji/Kana (apakah goresan dan penulisannya terbaca dengan baik).\n` +
                        `3. Berikan saran perbaikan atau variasi ungkapan yang lebih alami dalam bahasa Indonesia yang ramah dan mudah dipahami.`;
                    }

                    const isCopied = copiedPromptSection === 'sec-7';

                    return (
                      <div>
                        <div
                          style={{
                            background: '#ffffff',
                            borderRadius: '10px',
                            border: '1px solid #ddd6fe',
                            padding: '0.85rem',
                            fontFamily: 'monospace',
                            fontSize: '0.78rem',
                            color: '#334155',
                            maxHeight: '140px',
                            overflowY: 'auto',
                            whiteSpace: 'pre-wrap',
                            lineHeight: 1.5,
                            marginBottom: '0.75rem',
                          }}
                        >
                          {promptText}
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                          <span style={{ fontSize: '0.75rem', color: '#6d28d9' }}>
                            {mode === 'web'
                              ? '✨ Tip: Pastikan Anda sudah mengetik jawaban di kolom input soal di atas sebelum menyalin prompt.'
                              : '📷 Tip: Ambil foto buku catatan/lembar ujian Anda, lalu paste prompt ini bersama lampiran foto ke ChatGPT / Claude / Gemini.'}
                          </span>

                          <button
                            onClick={() => handleCopyPrompt('sec-7', promptText)}
                            className="btn btn-primary"
                            style={{
                              padding: '0.45rem 1rem',
                              fontSize: '0.85rem',
                              borderRadius: '8px',
                              background: isCopied ? '#10b981' : '#7c3aed',
                              borderColor: isCopied ? '#10b981' : '#7c3aed',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              fontWeight: 700,
                            }}
                          >
                            {isCopied ? <Check size={16} /> : <Copy size={16} />}
                            <span>{isCopied ? 'Prompt Berhasil Disalin!' : 'Salin Prompt AI'}</span>
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* AI Verification & Prompt Copy Widget for Section 5 (Shopping Dialogue Writing) */}
              {sec.section === 5 && (
                <div
                  style={{
                    margin: '0 1.25rem 1.25rem 1.25rem',
                    padding: '1.25rem',
                    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                    borderRadius: '14px',
                    border: '1.5px solid #bae6fd',
                    boxShadow: '0 2px 8px rgba(2, 132, 199, 0.08)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Sparkles size={18} color="#0284c7" />
                      <h3 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0369a1', margin: 0 }}>
                        Verifikasi Percakapan Belanja dengan AI
                      </h3>
                    </div>
                    <span className="badge badge-sky" style={{ fontSize: '0.72rem' }}>
                      Cek Konteks Percakapan
                    </span>
                  </div>

                  <p style={{ fontSize: '0.82rem', color: '#0369a1', margin: '0 0 1rem 0', lineHeight: 1.5 }}>
                    Verifikasi apakah kalimat pembeli/pertanyaan harga yang Anda tulis di Seksi 5 sudah sesuai konteks transaksi:
                  </p>

                  {/* Mode Tabs */}
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => setAiMode((prev) => ({ ...prev, 'sec-5': 'web' }))}
                      className="btn"
                      style={{
                        padding: '0.4rem 0.85rem',
                        fontSize: '0.82rem',
                        borderRadius: '8px',
                        background: (aiMode['sec-5'] || 'web') === 'web' ? '#0284c7' : '#ffffff',
                        color: (aiMode['sec-5'] || 'web') === 'web' ? '#ffffff' : '#0369a1',
                        border: '1px solid #0284c7',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontWeight: 700,
                      }}
                    >
                      <PenTool size={14} />
                      Opsi 1: Jawab Langsung di Website
                    </button>

                    <button
                      onClick={() => setAiMode((prev) => ({ ...prev, 'sec-5': 'photo' }))}
                      className="btn"
                      style={{
                        padding: '0.4rem 0.85rem',
                        fontSize: '0.82rem',
                        borderRadius: '8px',
                        background: (aiMode['sec-5'] || 'web') === 'photo' ? '#0284c7' : '#ffffff',
                        color: (aiMode['sec-5'] || 'web') === 'photo' ? '#ffffff' : '#0369a1',
                        border: '1px solid #0284c7',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontWeight: 700,
                      }}
                    >
                      <Camera size={14} />
                      Opsi 2: Tulis di Buku (Foto Lembar Jawaban)
                    </button>
                  </div>

                  {/* Prompt Preview Box */}
                  {(() => {
                    const mode = aiMode['sec-5'] || 'web';
                    let promptText = '';

                    if (mode === 'web') {
                      promptText = `Saya sedang belajar bahasa Jepang percakapan transaksi jual beli (Dekiru Nihongo Bab 2). Tolong periksa kalimat percakapan yang saya buat:\n\n` +
                        sec.items.map((it, idx) => {
                          const ans = userAnswers[it.id] || '(belum dijawab)';
                          const hint = 'context' in it && it.context ? it.context.imageHint : '';
                          const keyAns = 'answer' in it && typeof it.answer === 'object' && 'text' in it.answer ? it.answer.text : '';
                          return `Percakapan ${idx + 1}:\nSituasi: ${hint}\nJawaban Saya: ${ans}\nKunci Referensi: ${keyAns}\n`;
                        }).join('\n') +
                        `Tolong evaluasi apakah pemilihan kata penunjuk (これ / それ / あれ) dan pola kalimatnya (〜はいくらですか / 〜をください) sudah tepat sesuai situasi belanja.`;
                    } else {
                      promptText = `Saya melampirkan foto lembar jawaban tulisan tangan untuk latihan percakapan belanja Dekiru Nihongo Bab 2 Seksi 5.\n\n` +
                        `Tolong periksa foto tulisan tangan saya:\n` +
                        `1. Transkripsikan kalimat yang saya tulis di lembar foto.\n` +
                        `2. Evaluasi apakah ungkapan menanyakan harga dan meminta barang yang saya tulis sudah tepat.\n` +
                        `3. Berikan saran jika ada kesalahan penulisan huruf atau pilihan kata.`;
                    }

                    const isCopied = copiedPromptSection === 'sec-5';

                    return (
                      <div>
                        <div
                          style={{
                            background: '#ffffff',
                            borderRadius: '10px',
                            border: '1px solid #bae6fd',
                            padding: '0.85rem',
                            fontFamily: 'monospace',
                            fontSize: '0.78rem',
                            color: '#334155',
                            maxHeight: '140px',
                            overflowY: 'auto',
                            whiteSpace: 'pre-wrap',
                            lineHeight: 1.5,
                            marginBottom: '0.75rem',
                          }}
                        >
                          {promptText}
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                          <span style={{ fontSize: '0.75rem', color: '#0369a1' }}>
                            {mode === 'web'
                              ? '✨ Tip: Isi jawaban pada form di atas, lalu salin prompt ini untuk dikirimkan ke AI.'
                              : '📷 Tip: Ambil foto buku latihan belanja Anda, lalu kirim bersama prompt ini ke AI.'}
                          </span>

                          <button
                            onClick={() => handleCopyPrompt('sec-5', promptText)}
                            className="btn btn-primary"
                            style={{
                              padding: '0.45rem 1rem',
                              fontSize: '0.85rem',
                              borderRadius: '8px',
                              background: isCopied ? '#10b981' : '#0284c7',
                              borderColor: isCopied ? '#10b981' : '#0284c7',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              fontWeight: 700,
                            }}
                          >
                            {isCopied ? <Check size={16} /> : <Copy size={16} />}
                            <span>{isCopied ? 'Prompt Berhasil Disalin!' : 'Salin Prompt AI'}</span>
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
