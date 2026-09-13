import React from 'react';
import { Lightbulb, CheckCircle2, XCircle, BookOpen, Globe, Sparkles } from 'lucide-react';
import { SmartFurigana } from '../../utils/dekiruFurigana';
import { RichExplanationData } from '../../data/dekiruRichExplanations';
import { SAMPLE_ANSWER_TRANSLATIONS } from '../../data/dekiruTranslations';

interface DekiruExplanationBoxProps {
  item: any;
  section?: any;
  richData: RichExplanationData;
  showFurigana?: boolean;
}

export const DekiruExplanationBox: React.FC<DekiruExplanationBoxProps> = ({
  item,
  section,
  richData,
  showFurigana = true,
}) => {
  const sampleAnswersList: any[] = (item?.sampleAnswers && Array.isArray(item.sampleAnswers) && item.sampleAnswers.length > 0)
    ? item.sampleAnswers
    : (section?.sampleAnswers && Array.isArray(section.sampleAnswers) && section.sampleAnswers.length > 0)
    ? section.sampleAnswers
    : [];
  const isSampleAnswerQuestion = sampleAnswersList.length > 0;

  return (
    <div
      className="card shadow-md animate-fade-in"
      style={{
        marginTop: '1.25rem',
        border: '2px solid #6366f1',
        borderRadius: '16px',
        overflow: 'hidden',
        background: '#ffffff',
      }}
    >
      {/* Header Banner */}
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Lightbulb size={20} color="#fbbf24" />
          <span style={{ fontWeight: 700, fontSize: '1rem', letterSpacing: '0.02em' }}>
            Pembahasan & Kunci Jawaban
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
          {section && section.section && (
            <span
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(4px)',
                padding: '0.2rem 0.65rem',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#ffffff',
              }}
            >
              Bagian {section.section}
            </span>
          )}
          {item.grammarPoint && (
            <span
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(4px)',
                padding: '0.2rem 0.65rem',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#ffffff',
              }}
            >
              Pola: {item.grammarPoint}
            </span>
          )}
        </div>
      </div>

      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* 1. Official Answer / Sample Answers Banner */}
        {isSampleAnswerQuestion ? (
          <div
            style={{
              background: '#ecfdf5',
              border: '1.5px solid #a7f3d0',
              borderRadius: '12px',
              padding: '0.85rem 1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#065f46', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.6rem' }}>
              <CheckCircle2 size={18} color="#10b981" />
              <span>CONTOH JAWABAN BENAR (PERTANYAAN BEBAS / TERBUKA):</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {sampleAnswersList.map((sAns: any, sIdx: number) => {
                const sText = typeof sAns === 'string' ? sAns : sAns.text;
                const sSegments = typeof sAns === 'object' && sAns.segments ? sAns.segments : null;
                const sTrans = SAMPLE_ANSWER_TRANSLATIONS[sText] || '';
                return (
                  <div
                    key={sIdx}
                    style={{
                      background: '#ffffff',
                      border: '1.5px solid #86efac',
                      borderRadius: '10px',
                      padding: '0.65rem 0.95rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.3rem',
                      boxShadow: '0 1px 3px rgba(16, 185, 129, 0.08)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          background: '#10b981',
                          color: '#ffffff',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          padding: '0.2rem 0.6rem',
                          borderRadius: '9999px',
                        }}
                      >
                        Contoh {sIdx + 1}
                      </span>
                      <div style={{ fontSize: '1.08rem', fontWeight: 600, color: '#065f46', lineHeight: 1.8 }}>
                        {sSegments ? (
                          <SmartFurigana segments={sSegments} showFurigana={showFurigana} />
                        ) : (
                          <SmartFurigana text={sText} showFurigana={showFurigana} />
                        )}
                      </div>
                    </div>
                    {sTrans && (
                      <div style={{ fontSize: '0.88rem', color: '#166534', fontWeight: 500, paddingLeft: '0.2rem' }}>
                        🇮🇩 <strong>Arti:</strong> {sTrans}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div
            style={{
              background: '#ecfdf5',
              border: '1.5px solid #a7f3d0',
              borderRadius: '12px',
              padding: '0.85rem 1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#065f46', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.4rem' }}>
              <CheckCircle2 size={18} color="#10b981" />
              <span>KUNCI JAWABAN RESMI:</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', fontSize: '1rem' }}>
              {/* Array answers (particle-fill, matching, etc.) */}
              {'answer' in item && Array.isArray(item.answer) && (
                <div style={{ display: 'inline-flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {item.answer.map((ans: any, aIdx: number) => (
                    <span key={aIdx} className="badge badge-emerald" style={{ fontSize: '0.88rem', padding: '0.35rem 0.75rem' }}>
                      Blank ({aIdx + 1}): <strong>{typeof ans === 'string' ? ans : ans.text || String(ans)}</strong>
                    </span>
                  ))}
                </div>
              )}

              {/* Word bank answer */}
              {'answer' in item && typeof item.answer === 'object' && item.answer !== null && 'value' in item.answer && 'content' in item.answer && (
                <span className="badge badge-emerald" style={{ fontSize: '0.92rem', padding: '0.4rem 0.85rem' }}>
                  <strong>{item.answer.value}.</strong>{' '}
                  <SmartFurigana segments={item.answer.content.segments} showFurigana={showFurigana} />
                </span>
              )}

              {/* Single string answer */}
              {'answer' in item && typeof item.answer === 'string' && (
                <span className="badge badge-emerald" style={{ fontSize: '0.95rem', padding: '0.35rem 0.85rem' }}>
                  {'answerRuby' in item && item.answerRuby ? (
                    <SmartFurigana segments={item.answerRuby.segments} showFurigana={showFurigana} />
                  ) : (
                    <SmartFurigana text={item.answer} showFurigana={showFurigana} />
                  )}
                </span>
              )}

              {/* Object with segments */}
              {'answer' in item && typeof item.answer === 'object' && item.answer !== null && 'segments' in item.answer && (
                <span className="badge badge-emerald" style={{ fontSize: '0.95rem', padding: '0.35rem 0.85rem' }}>
                  <SmartFurigana segments={item.answer.segments} showFurigana={showFurigana} />
                </span>
              )}

              {/* Multi-part dictionary answer */}
              {'answer' in item && typeof item.answer === 'object' && item.answer !== null && !('segments' in item.answer) && !('value' in item.answer) && !Array.isArray(item.answer) && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {Object.entries(item.answer).map(([k, ansObj]: any) => (
                    <div key={k} style={{ fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <strong style={{ color: '#4f46e5' }}>({k}):</strong>
                      {typeof ansObj === 'object' && ansObj !== null && 'segments' in ansObj ? (
                        <SmartFurigana segments={ansObj.segments} showFurigana={showFurigana} />
                      ) : (
                        <span className="badge badge-emerald">{String(ansObj)}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Safeguard fallback: if question lacks answer property */}
              {!('answer' in item && item.answer) && (
                <div style={{ fontSize: '0.92rem', color: '#166534', fontWeight: 500, lineHeight: 1.5 }}>
                  {richData?.whyCorrect || 'Pertanyaan terbuka / ikuti pola kalimat sesuai instruksi.'}
                </div>
              )}
            </div>
          </div>
        )}

        {/* 2. Completed Full Sentence if available */}
        {item.completed && item.completed.segments && (
          <div
            style={{
              background: '#f0fdf4',
              border: '1px solid #bbf7d0',
              borderRadius: '12px',
              padding: '0.85rem 1rem',
            }}
          >
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#166534', marginBottom: '0.3rem' }}>
              KALIMAT LENGKAP UTUH:
            </div>
            <div style={{ fontSize: '1.15rem', color: '#14532d', lineHeight: 2.2, fontWeight: 600 }}>
              <SmartFurigana segments={item.completed.segments} showFurigana={showFurigana} />
            </div>
          </div>
        )}

        {/* 3. Indonesian Question / Statement Translation */}
        <div
          style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '0.85rem 1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
            <Globe size={15} color="#4f46e5" />
            <span>Arti Soal / Kalimat (Bahasa Indonesia):</span>
          </div>
          <p style={{ margin: 0, fontSize: '0.96rem', color: '#1e293b', fontWeight: 500, lineHeight: 1.6 }}>
            {richData.questionTranslation}
          </p>
        </div>

        {/* 4. Why Correct */}
        <div
          style={{
            background: '#f0fdf4',
            border: '1px solid #86efac',
            borderRadius: '12px',
            padding: '0.9rem 1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#15803d', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.35rem' }}>
            <CheckCircle2 size={16} color="#16a34a" />
            <span>KENAPA JAWABAN INI BENAR:</span>
          </div>
          <p style={{ margin: 0, fontSize: '0.93rem', color: '#14532d', lineHeight: 1.65 }}>
            {richData.whyCorrect}
          </p>
        </div>

        {/* 5. Why Incorrect (Options Breakdown) */}
        {richData.whyIncorrect && richData.whyIncorrect.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#991b1b', fontWeight: 700, fontSize: '0.85rem' }}>
              <XCircle size={16} color="#ef4444" />
              <span>KENAPA OPSI LAIN SALAH:</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {richData.whyIncorrect.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    background: '#fff1f2',
                    border: '1px solid #fecdd3',
                    borderRadius: '10px',
                    padding: '0.7rem 0.9rem',
                    fontSize: '0.88rem',
                  }}
                >
                  <span
                    style={{
                      background: '#f43f5e',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '9999px',
                      marginTop: '0.1rem',
                      flexShrink: 0,
                    }}
                  >
                    {item.optionId ? `Opsi ${item.optionId}` : 'Opsi'}
                  </span>
                  <div style={{ flex: 1, color: '#4c0519', lineHeight: 1.55 }}>
                    <strong style={{ color: '#881337', marginRight: '0.35rem' }}>
                      <SmartFurigana text={item.text} showFurigana={showFurigana} />
                    </strong>
                    {item.translation && (
                      <span style={{ color: '#9f1239', fontSize: '0.82rem', marginRight: '0.4rem' }}>
                        ({item.translation}) —
                      </span>
                    )}
                    <span>{item.reason}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. Grammar Point / Note */}
        {richData.grammarPointDetail && (
          <div
            style={{
              background: '#eff6ff',
              border: '1px solid #bfdbfe',
              borderRadius: '12px',
              padding: '0.9rem 1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#1e40af', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.35rem' }}>
              <BookOpen size={16} color="#3b82f6" />
              <span>POIN TATA BAHASA & CATATAN PENTING:</span>
            </div>
            <p style={{ margin: 0, fontSize: '0.92rem', color: '#1d4ed8', lineHeight: 1.65 }}>
              {richData.grammarPointDetail}
            </p>
          </div>
        )}

        {/* 7. Tips & Tricks / Solving Steps */}
        {richData.tips && richData.tips.length > 0 && (
          <div
            style={{
              background: '#fdf4ff',
              border: '1px solid #f0abfc',
              borderRadius: '12px',
              padding: '0.85rem 1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#86198f', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.4rem' }}>
              <Sparkles size={16} color="#c026d3" />
              <span>TIPS & TRIK / CARA MENGANALISIS:</span>
            </div>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.88rem', color: '#701a75', lineHeight: 1.6 }}>
              {richData.tips.map((step, sIdx) => (
                <li key={sIdx} style={{ marginBottom: '0.25rem' }}>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 8. Options list translation grid if available */}
        {richData.optionsBreakdown && richData.optionsBreakdown.length > 0 && (
          <div style={{ borderTop: '1px dashed #e2e8f0', paddingTop: '0.85rem' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '0.45rem' }}>
              {item.sampleAnswers ? 'Bedah Contoh Jawaban & Terjemahan:' : 'Daftar Arti Pilihan Jawaban:'}
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '0.5rem' }}>
              {richData.optionsBreakdown.map((opt, idx) => (
                <div
                  key={idx}
                  style={{
                    fontSize: '0.85rem',
                    padding: '0.45rem 0.75rem',
                    background: opt.isCorrect ? '#ecfdf5' : '#f8fafc',
                    border: `1px solid ${opt.isCorrect ? '#a7f3d0' : '#e2e8f0'}`,
                    borderRadius: '8px',
                    color: opt.isCorrect ? '#065f46' : '#334155',
                  }}
                >
                  <strong>
                    {opt.optionId ? `${opt.optionId}. ` : ''}
                    <SmartFurigana text={opt.text} showFurigana={showFurigana} />
                  </strong>
                  : {opt.translation}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
