import React, { useState, useMemo, useEffect, useRef } from "react";
import { dekiruExamsList, dekiruExamsMap } from "../../data/dekiruExams";
import { SegmentFurigana } from "../SegmentFurigana";
import {
  BookOpen,
  GraduationCap,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Copy,
  Check,
  Camera,
  PenTool,
  CheckCircle2,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  X,
  Shuffle,
} from "lucide-react";
import { DekiruSection, DekiruExamData } from "../../types/dekiru";

interface DekiruExamViewProps {
  onBackToSourceSelect: () => void;
}

interface FlattenedExamQuestion {
  questionNumber: number;
  section: DekiruSection;
  item: any;
  itemIdx: number;
}

// Helpers for localStorage progress management
export const countAnswered = (answers: Record<string, any> | undefined | null): number => {
  if (!answers) return 0;
  return Object.values(answers).filter((v) => {
    if (v === undefined || v === null || v === "") return false;
    if (Array.isArray(v)) return v.some((item: any) => item && String(item).trim() !== "");
    if (typeof v === "object") return Object.values(v).some((item: any) => item && String(item).trim() !== "");
    return true;
  }).length;
};

export const loadDekiruProgress = (examId: string) => {
  try {
    const raw = localStorage.getItem(`dekiru_exam_progress_v1_${examId}`);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to load progress for", examId, e);
    return null;
  }
};

export const DekiruExamView: React.FC<DekiruExamViewProps> = ({ onBackToSourceSelect }) => {
  // Exam selection state (null means show selection screen)
  const [selectedExamId, setSelectedExamId] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem("dekiru_active_exam_id_v1");
      if (saved && dekiruExamsMap[saved]) {
        return saved;
      }
      return null;
    } catch {
      return null;
    }
  });

  const [activeTab, setActiveTab] = useState<"study" | "exam">(() => {
    try {
      return (localStorage.getItem("dekiru_active_tab_v1") as "study" | "exam") || "exam";
    } catch {
      return "exam";
    }
  });
  const [selectedSection, setSelectedSection] = useState<number | "ALL">("ALL");
  const [progressRevision, setProgressRevision] = useState<number>(0);

  // Keep track of which exam is currently active in memory
  const currentLoadedExamRef = useRef<string | null>(selectedExamId);

  // Initial progress on mount for previously selected exam
  const initialProgress = useMemo(() => {
    if (!selectedExamId) return null;
    return loadDekiruProgress(selectedExamId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Single question navigation in exam mode
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(() => {
    return typeof initialProgress?.currentQuestionIndex === "number" ? initialProgress.currentQuestionIndex : 0;
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState<boolean>(false);
  const [isSectionMenuOpen, setIsSectionMenuOpen] = useState<boolean>(false);

  // Interactive exam answers state
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>(() => {
    return initialProgress?.userAnswers || {};
  });
  const [revealedQuestions, setRevealedQuestions] = useState<Record<string, boolean>>(() => {
    return initialProgress?.revealedQuestions || {};
  });
  const [expandedExplanations, setExpandedExplanations] = useState<Record<string, boolean>>(() => {
    return initialProgress?.expandedExplanations || {};
  });
  const [copiedPromptSection, setCopiedPromptSection] = useState<string | null>(null);
  const [aiMode, setAiMode] = useState<"web" | "photo">("web");

  // Auto-save progress effect whenever answers, revealed, or question index changes
  useEffect(() => {
    if (!selectedExamId || currentLoadedExamRef.current !== selectedExamId) return;
    try {
      const payload = {
        userAnswers,
        revealedQuestions,
        expandedExplanations,
        currentQuestionIndex,
        lastUpdated: Date.now(),
      };
      localStorage.setItem(`dekiru_exam_progress_v1_${selectedExamId}`, JSON.stringify(payload));
      localStorage.setItem("dekiru_active_exam_id_v1", selectedExamId);
    } catch (e) {
      console.error("Failed to auto-save dekiru progress", e);
    }
  }, [selectedExamId, userAnswers, revealedQuestions, expandedExplanations, currentQuestionIndex]);

  // Active exam data
  const currentExamData: DekiruExamData = useMemo(() => {
    if (selectedExamId && dekiruExamsMap[selectedExamId]) {
      return dekiruExamsMap[selectedExamId];
    }
    return dekiruExamsList[0].data;
  }, [selectedExamId]);

  // Flatten all questions across all sections of the active exam
  const allExamQuestions: FlattenedExamQuestion[] = useMemo(() => {
    const list: FlattenedExamQuestion[] = [];
    let counter = 1;
    currentExamData.sections.forEach((sec) => {
      sec.items.forEach((item, itemIdx) => {
        list.push({
          questionNumber: counter++,
          section: sec,
          item,
          itemIdx,
        });
      });
    });
    return list;
  }, [currentExamData]);

  const currentQ = allExamQuestions[currentQuestionIndex] || allExamQuestions[0];
  const totalQuestions = allExamQuestions.length;

  const handleSelectExam = (examId: string, initialTab: "study" | "exam" = "exam") => {
    currentLoadedExamRef.current = examId;
    setSelectedExamId(examId);
    setActiveTab(initialTab);
    try {
      localStorage.setItem("dekiru_active_exam_id_v1", examId);
      localStorage.setItem("dekiru_active_tab_v1", initialTab);
      const saved = loadDekiruProgress(examId);
      if (saved) {
        setUserAnswers(saved.userAnswers || {});
        setRevealedQuestions(saved.revealedQuestions || {});
        setExpandedExplanations(saved.expandedExplanations || {});
        setCurrentQuestionIndex(
          typeof saved.currentQuestionIndex === "number" ? Math.max(0, saved.currentQuestionIndex) : 0
        );
      } else {
        setUserAnswers({});
        setRevealedQuestions({});
        setExpandedExplanations({});
        setCurrentQuestionIndex(0);
      }
    } catch (e) {
      console.error("Failed to switch exam progress", e);
    }
    setSelectedSection("ALL");
    setProgressRevision((prev) => prev + 1);
  };

  const handleBackToExamSelection = () => {
    currentLoadedExamRef.current = null;
    setSelectedExamId(null);
    try {
      localStorage.removeItem("dekiru_active_exam_id_v1");
    } catch (e) {
      console.error(e);
    }
    setProgressRevision((prev) => prev + 1);
  };

  const toggleExpand = (qId: string) => {
    setExpandedExplanations((prev) => ({
      ...prev,
      [qId]: prev[qId] === undefined ? false : !prev[qId],
    }));
  };

  const handleSelectAnswer = (qId: string, answer: any) => {
    setUserAnswers((prev) => ({ ...prev, [qId]: answer }));

    // Check if the answer is complete before revealing:
    let isComplete = true;
    if (Array.isArray(answer)) {
      isComplete =
        answer.length > 0 &&
        answer.every((val) => val !== undefined && val !== null && String(val).trim() !== "");
    } else if (typeof answer === "object" && answer !== null) {
      const vals = Object.values(answer);
      isComplete =
        vals.length > 0 &&
        vals.every((val) => val !== undefined && val !== null && String(val).trim() !== "");
    } else if (answer === undefined || answer === null || String(answer).trim() === "") {
      isComplete = false;
    }

    if (isComplete) {
      setRevealedQuestions((prev) => ({ ...prev, [qId]: true }));
    }
  };

  const handleResetExam = (examIdToReset?: string) => {
    const targetId = examIdToReset || selectedExamId;
    if (!targetId) return;
    const examMeta = dekiruExamsMap[targetId];
    const examTitle = examMeta ? examMeta.exam.title : "ujian ini";
    if (window.confirm(`Reset semua jawaban dan kemajuan belajar pada ${examTitle}?`)) {
      if (targetId === selectedExamId) {
        setUserAnswers({});
        setRevealedQuestions({});
        setExpandedExplanations({});
        setCurrentQuestionIndex(0);
      }
      try {
        localStorage.removeItem(`dekiru_exam_progress_v1_${targetId}`);
      } catch (e) {
        console.error(e);
      }
      setProgressRevision((prev) => prev + 1);
    }
  };

  const handleCopyPrompt = (promptText: string) => {
    navigator.clipboard.writeText(promptText);
    setCopiedPromptSection("unified");
    setTimeout(() => {
      setCopiedPromptSection((prev) => (prev === "unified" ? null : prev));
    }, 2500);
  };

  const filteredSections =
    selectedSection === "ALL"
      ? currentExamData.sections
      : currentExamData.sections.filter((s) => s.section === selectedSection);

  // Check how many questions answered
  const answeredCount = countAnswered(userAnswers);

  // Build dynamic unified AI prompt based on subjective sections
  const aiSections = useMemo(() => {
    return currentExamData.sections.filter(
      (s) =>
        s.type === "dialogue-writing" ||
        s.type === "picture-writing" ||
        s.type === "dialogue-completion" ||
        s.type === "picture-dialogue" ||
        s.type === "casual-form" ||
        s.type === "open-answer"
    );
  }, [currentExamData]);

  const unifiedPromptText = useMemo(() => {
    const examTitle = currentExamData.exam.title;
    if (aiMode === "web") {
      let text = `Saya sedang belajar bahasa Jepang setara ${examTitle}. Tolong koreksi dan berikan evaluasi untuk jawaban latihan saya:\n\n`;

      aiSections.forEach((sec) => {
        text += `=== BAGIAN ${sec.section}: ${sec.title} (${sec.titleReading}) ===\n`;
        sec.items.forEach((it: any, idx: number) => {
          const ans = userAnswers[it.id] || "(belum dijawab)";
          let hint = "";
          if (it.context && "imageHint" in it.context) hint = it.context.imageHint;
          else if (it.visual && "description" in it.visual) hint = it.visual.description;

          let refKey = "";
          if (it.answer) {
            if (typeof it.answer === "string") refKey = it.answer;
            else if ("text" in it.answer) refKey = it.answer.text;
            else if (typeof it.answer === "object") {
              refKey = Object.entries(it.answer)
                .map(([k, v]: any) => `(${k}) ${v.text || v}`)
                .join(" ");
            }
          } else if (it.sampleAnswers && Array.isArray(it.sampleAnswers)) {
            refKey = it.sampleAnswers.map((s: any) => s.text).join(" / ");
          }

          let qLabel = `Soal ${idx + 1}`;
          if (it.question && it.question.text) qLabel += `: ${it.question.text}`;

          text += `${qLabel}\n`;
          if (hint) text += `- Situasi/Gambar: ${hint}\n`;
          text += `- Jawaban Saya: ${typeof ans === "object" ? JSON.stringify(ans) : ans}\n`;
          if (refKey) text += `- Referensi Kunci: ${refKey}\n`;
          text += "\n";
        });
      });

      text += "Tolong berikan evaluasi untuk setiap nomor di atas:\n";
      text += "1. Apakah tata bahasa, partikel, konjugasi bentuk kata kerja/sifat, dan susunannya sudah tepat?\n";
      text += "2. Apakah kalimatnya terdengar alami bagi penutur asli bahasa Jepang?\n";
      text += "3. Jika ada kesalahan atau kalimat yang lebih sopan/alami, berikan pembetulan beserta penjelasan ringkas dalam bahasa Indonesia yang ramah.";

      return text;
    } else {
      let text = `Saya melampirkan foto lembar jawaban tulisan tangan saya untuk ${examTitle}.\n\n`;

      aiSections.forEach((sec) => {
        text += `Daftar Soal Seksi ${sec.section} (${sec.title}):\n`;
        sec.items.forEach((it: any, idx: number) => {
          let hint = "";
          if (it.context && "imageHint" in it.context) hint = it.context.imageHint;
          else if (it.visual && "description" in it.visual) hint = it.visual.description;
          text += `- Soal ${idx + 1}${hint ? ` (Situasi/Gambar: ${hint})` : ""}\n`;
        });
        text += "\n";
      });

      text += "Tolong periksa foto tulisan tangan yang saya lampirkan ini:\n";
      text += "1. Bacakan kembali kalimat bahasa Jepang yang saya tulis di lembar foto tersebut.\n";
      text += "2. Evaluasi kebenaran tata bahasa, partikel, serta ketepatan penulisan karakter Kanji / Hiragana / Katakana.\n";
      text += "3. Berikan saran perbaikan atau variasi ungkapan yang lebih alami dalam bahasa Indonesia yang mudah dipahami.";

      return text;
    }
  }, [aiMode, userAnswers, aiSections, currentExamData]);

  // Helper renderer for Context
  const renderContextBox = (context: any) => {
    if (!context) return null;
    if ("imageHint" in context && context.imageHint) {
      return (
        <div style={{ fontSize: "0.85rem", color: "#b45309", background: "#fffbeb", padding: "0.45rem 0.75rem", borderRadius: "8px", marginBottom: "0.85rem", display: "inline-block" }}>
          💡 <strong>Situasi:</strong> {context.imageHint}
        </div>
      );
    }
    const refInfo = context.referenceDate || context.referenceRange || context.referenceYear;
    const targetInfo = context.date || context.range || context.year;
    if (refInfo || targetInfo) {
      return (
        <div style={{ fontSize: "0.88rem", color: "#1e40af", background: "#eff6ff", border: "1px solid #bfdbfe", padding: "0.55rem 0.9rem", borderRadius: "10px", marginBottom: "0.85rem", display: "inline-flex", gap: "1.25rem", flexWrap: "wrap", alignItems: "center" }}>
          {refInfo && <span>📅 <strong>Referensi:</strong> {refInfo}</span>}
          {targetInfo && <span>🎯 <strong>Target:</strong> <strong style={{ color: "#1d4ed8" }}>{targetInfo}</strong></span>}
        </div>
      );
    }
    return null;
  };

  // Helper renderer for Visual Description Hint
  const renderVisualBox = (visual: any) => {
    if (!visual || !visual.description) return null;
    return (
      <div style={{ fontSize: "0.85rem", color: "#065f46", background: "#ecfdf5", border: "1px solid #a7f3d0", padding: "0.45rem 0.75rem", borderRadius: "8px", marginBottom: "0.85rem", display: "inline-block" }}>
        🖼️ <strong>Petunjuk Gambar:</strong> {visual.description}
      </div>
    );
  };

  // Helper renderer for question interactive input controls
  const renderQuestionControls = (sec: DekiruSection, item: any) => {
    const isRevealed = activeTab === "study" || revealedQuestions[item.id];
    const userAnswer = userAnswers[item.id];

    return (
      <div style={{ marginTop: "0.75rem", marginBottom: "0.75rem" }}>
        {/* 1. Multiple Choice (Exam 1 Sec 4, Exam 4 Sec 1, Sec 4, Sec 8) */}
        {"choices" in item && Array.isArray(item.choices) && (
          <div className="review-options-grid" style={{ marginBottom: "0.5rem" }}>
            {item.choices.map((rawCh: any, cIdx: number) => {
              const chText = typeof rawCh === "string" ? rawCh : rawCh.text;
              const isSelected = userAnswer === chText;
              const correctAnsText = "answer" in item ? (typeof item.answer === "string" ? item.answer : item.answer?.text || "") : "";
              const isCorrect = correctAnsText === chText;
              const showCorrect = isRevealed && isCorrect;
              const showWrong = isRevealed && isSelected && !isCorrect;

              return (
                <button
                  key={cIdx}
                  type="button"
                  onClick={() => handleSelectAnswer(item.id, chText)}
                  style={{
                    padding: "0.75rem 0.95rem",
                    borderRadius: "10px",
                    border: "2px solid " + (showCorrect
                      ? "#10b981"
                      : showWrong
                      ? "#ef4444"
                      : isSelected
                      ? "#6366f1"
                      : "#e2e8f0"),
                    background: showCorrect
                      ? "#ecfdf5"
                      : showWrong
                      ? "#fef2f2"
                      : isSelected
                      ? "#f0f4ff"
                      : "#ffffff",
                    color: showCorrect ? "#065f46" : showWrong ? "#991b1b" : "#1e293b",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    width: "100%",
                  }}
                >
                  <span
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      background: isSelected || showCorrect ? "#6366f1" : "#f1f5f9",
                      color: isSelected || showCorrect ? "#ffffff" : "#64748b",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {cIdx + 1}
                  </span>
                  <span style={{ fontSize: "1.05rem", fontWeight: isSelected || showCorrect ? 700 : 500 }}>
                    {typeof rawCh === "object" && rawCh.segments ? (
                      <SegmentFurigana segments={rawCh.segments} />
                    ) : (
                      chText
                    )}
                  </span>
                  {showCorrect && (
                    <div style={{ marginLeft: "auto" }}>
                      <CheckCircle2 size={18} color="#10b981" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* 1b. Multi-blank Multiple Choice (Exam 3 Sec 5 q2, q3) */}
        {"choices" in item && !Array.isArray(item.choices) && typeof item.choices === "object" && item.choices !== null && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "0.5rem" }}>
            {Object.entries(item.choices as Record<string, string[]>).map(([bKey, opts], bIdx) => {
              const currentSelected = (userAnswers[item.id] && userAnswers[item.id][bIdx]) || "";
              const correctAns = Array.isArray(item.answer) ? item.answer[bIdx] : "";
              return (
                <div key={bKey} style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569" }}>
                    👉 Pilihan Bagian ({bIdx + 1}):
                  </span>
                  <div style={{ display: "inline-flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {opts.map((ch: string) => {
                      const isSelected = currentSelected === ch;
                      const isCorrect = correctAns === ch;
                      let bg = "#ffffff";
                      let border = "#cbd5e1";
                      let color = "#334155";
                      if (isRevealed) {
                        if (isCorrect) {
                          bg = "#ecfdf5";
                          border = "#10b981";
                          color = "#065f46";
                        } else if (isSelected) {
                          bg = "#fef2f2";
                          border = "#ef4444";
                          color = "#991b1b";
                        }
                      } else if (isSelected) {
                        bg = "#e0e7ff";
                        border = "#6366f1";
                        color = "#3730a3";
                      }

                      return (
                        <button
                          key={ch}
                          type="button"
                          onClick={() => {
                            const arr = Array.isArray(userAnswers[item.id])
                              ? [...userAnswers[item.id]]
                              : new Array(Object.keys(item.choices).length).fill("");
                            arr[bIdx] = ch;
                            handleSelectAnswer(item.id, arr);
                          }}
                          className="btn btn-secondary"
                          style={{
                            padding: "0.45rem 1rem",
                            borderRadius: "10px",
                            background: bg,
                            borderColor: border,
                            color: color,
                            fontWeight: 700,
                            fontSize: "0.95rem",
                          }}
                        >
                          {ch}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 2. Word Bank Buttons (Exam 1 Sec 2, Exam 2 Sec 5) */}
        {sec.type === "word-bank" && "wordBank" in sec && (
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {sec.wordBank.map((wb) => {
              const isSelected = userAnswer === wb.id;
              const isCorrect =
                "answer" in item &&
                typeof item.answer === "object" &&
                item.answer !== null &&
                "value" in item.answer &&
                (item.answer as { value: string }).value === wb.id;
              let bg = "#ffffff";
              let color = "#334155";
              if (isRevealed) {
                if (isCorrect) {
                  bg = "#ecfdf5";
                  color = "#065f46";
                } else if (isSelected) {
                  bg = "#fef2f2";
                  color = "#991b1b";
                }
              }

              return (
                <button
                  key={wb.id}
                  onClick={() => handleSelectAnswer(item.id, wb.id)}
                  className="btn btn-secondary"
                  style={{
                    padding: "0.45rem 0.85rem",
                    fontSize: "0.88rem",
                    borderRadius: "8px",
                    background: bg,
                    color: color,
                    borderColor: isRevealed && isCorrect ? "#10b981" : "#cbd5e1",
                  }}
                >
                  <span style={{ fontWeight: 800 }}>{wb.id}.</span> {wb.content.text}
                </button>
              );
            })}
          </div>
        )}

        {/* 3. Particle Input (Sec 3 or Sec 4) */}
        {sec.type === "particle-fill" && "answer" in item && Array.isArray(item.answer) && (() => {
          const particleAnswers = item.answer as string[];
          return (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
                {particleAnswers.map((correctAns: string, blankIdx: number) => {
                  const currentVal = (userAnswers[item.id] && userAnswers[item.id][blankIdx]) || "";
                  const isCorrect = currentVal.trim() === correctAns;
                  let borderColor = "#cbd5e1";
                  let bg = "#ffffff";
                  if (isRevealed) {
                    borderColor = isCorrect ? "#10b981" : "#ef4444";
                    bg = isCorrect ? "#ecfdf5" : "#fef2f2";
                  }

                  return (
                    <div key={blankIdx} style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                      <span style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 600 }}>
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
                            : new Array(particleAnswers.length).fill("");
                          arr[blankIdx] = val;
                          setUserAnswers((prev) => ({ ...prev, [item.id]: arr }));
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            setRevealedQuestions((prev) => ({ ...prev, [item.id]: true }));
                            setExpandedExplanations((prev) => ({ ...prev, [item.id]: true }));
                          }
                        }}
                        style={{
                          width: "72px",
                          padding: "0.4rem 0.6rem",
                          borderRadius: "8px",
                          border: "1.5px solid " + borderColor,
                          background: bg,
                          fontSize: "0.92rem",
                          fontWeight: 700,
                          textAlign: "center",
                        }}
                      />
                    </div>
                  );
                })}
              </div>
              <div style={{ fontSize: "0.75rem", color: "#64748b" }}>
                💡 Ketik partikel hiragana (e.g. に, で, を, へ, と, から, まで, が) atau × jika tanpa partikel. Tekan Enter atau klik tombol Lihat Jawaban di bawah untuk mengecek.
              </div>
            </div>
          );
        })()}

        {/* 4. Dialogue Matching Choice Buttons (Exam 1 Sec 6) */}
        {sec.type === "dialogue-matching" && "choices" in sec && "answer" in item && Array.isArray(item.answer) && (() => {
          const matchingAnswers = item.answer as string[];
          return (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {matchingAnswers.map((correctAns: string, blankIdx: number) => {
                  const currentChoice = (userAnswers[item.id] && userAnswers[item.id][blankIdx]) || "";
                  return (
                    <div key={blankIdx} style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569", minWidth: "60px" }}>
                        Blank ({blankIdx + 1}):
                      </span>
                      <div style={{ display: "inline-flex", gap: "0.35rem", flexWrap: "wrap" }}>
                        {sec.choices.map((ch) => {
                          const isSelected = currentChoice === ch.id;
                          const isCorrect = ch.id === correctAns;
                          let btnBg = "#ffffff";
                          let border = "#cbd5e1";
                          let textColor = "#334155";
                          if (isRevealed) {
                            if (isCorrect) {
                              btnBg = "#ecfdf5";
                              border = "#10b981";
                              textColor = "#065f46";
                            } else if (isSelected) {
                              btnBg = "#fef2f2";
                              border = "#ef4444";
                              textColor = "#991b1b";
                            }
                          } else if (isSelected) {
                            btnBg = "#e0e7ff";
                            border = "#6366f1";
                            textColor = "#3730a3";
                          }

                          return (
                            <button
                              key={ch.id}
                              onClick={() => {
                                const arr = Array.isArray(userAnswers[item.id])
                                   ? [...userAnswers[item.id]]
                                  : new Array(matchingAnswers.length).fill("");
                                arr[blankIdx] = ch.id;
                                handleSelectAnswer(item.id, arr);
                              }}
                              className="btn"
                              style={{
                                padding: "0.3rem 0.6rem",
                                fontSize: "0.82rem",
                                borderRadius: "6px",
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

        {/* 5. Time Vocabulary (Exam 2 Sec 2) */}
        {sec.type === "time-vocabulary" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569" }}>
              ✍️ Tulis kata waktu dalam hiragana:
            </label>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="text"
                placeholder="Contoh: きのう"
                value={userAnswers[item.id] || ""}
                onChange={(e) => {
                  const val = e.target.value;
                  setUserAnswers((prev) => ({ ...prev, [item.id]: val }));
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setRevealedQuestions((prev) => ({ ...prev, [item.id]: true }));
                    setExpandedExplanations((prev) => ({ ...prev, [item.id]: true }));
                  }
                }}
                style={{
                  maxWidth: "320px",
                  padding: "0.55rem 0.85rem",
                  borderRadius: "10px",
                  border: "1.5px solid #cbd5e1",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                }}
              />
            </div>
          </div>
        )}

        {/* 6. Antonym / Lawan Kata (Exam 2 Sec 3) */}
        {sec.type === "antonym" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569" }}>
              ✍️ Tulis lawan kata (atau kalimat lengkap berlawanan):
            </label>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="text"
                placeholder="Contoh: 少ない"
                value={userAnswers[item.id] || ""}
                onChange={(e) => {
                  const val = e.target.value;
                  setUserAnswers((prev) => ({ ...prev, [item.id]: val }));
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setRevealedQuestions((prev) => ({ ...prev, [item.id]: true }));
                    setExpandedExplanations((prev) => ({ ...prev, [item.id]: true }));
                  }
                }}
                style={{
                  flex: 1,
                  maxWidth: "400px",
                  padding: "0.55rem 0.85rem",
                  borderRadius: "10px",
                  border: "1.5px solid #cbd5e1",
                  fontSize: "0.95rem",
                }}
              />
            </div>
          </div>
        )}

        {/* 7. Counter Fill (Exam 2 Sec 6) */}
        {sec.type === "counter-fill" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569" }}>
              ✍️ Tulis hitungan dalam hiragana:
            </label>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="text"
                placeholder="Contoh: さんさつ"
                value={userAnswers[item.id] || ""}
                onChange={(e) => {
                  const val = e.target.value;
                  setUserAnswers((prev) => ({ ...prev, [item.id]: val }));
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setRevealedQuestions((prev) => ({ ...prev, [item.id]: true }));
                    setExpandedExplanations((prev) => ({ ...prev, [item.id]: true }));
                  }
                }}
                style={{
                  maxWidth: "320px",
                  padding: "0.55rem 0.85rem",
                  borderRadius: "10px",
                  border: "1.5px solid #cbd5e1",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                }}
              />
            </div>
          </div>
        )}

        {/* 8. Conjugation / Perubahan Bentuk (Exam 2 Sec 7, Exam 4 Sec 3) */}
        {sec.type === "conjugation" && (() => {
          const isMulti = Array.isArray(item.answer);
          if (isMulti) {
            const arrAnswers = item.answer as any[];
            return (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569" }}>
                  ✍️ Tulis perubahan bentuk kata untuk masing-masing bagian (1, 2):
                </label>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  {arrAnswers.map((_, bIdx) => {
                    const currentVal = (Array.isArray(userAnswers[item.id]) && userAnswers[item.id][bIdx]) || "";
                    return (
                      <div key={bIdx} style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
                        <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#4f46e5" }}>
                          ({bIdx + 1}):
                        </span>
                        <input
                          type="text"
                          placeholder="Contoh: 読み"
                          value={currentVal}
                          onChange={(e) => {
                            const val = e.target.value;
                            const arr = Array.isArray(userAnswers[item.id])
                              ? [...userAnswers[item.id]]
                              : new Array(arrAnswers.length).fill("");
                            arr[bIdx] = val;
                            setUserAnswers((prev) => ({ ...prev, [item.id]: arr }));
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              setRevealedQuestions((prev) => ({ ...prev, [item.id]: true }));
                              setExpandedExplanations((prev) => ({ ...prev, [item.id]: true }));
                            }
                          }}
                          style={{
                            maxWidth: "200px",
                            padding: "0.55rem 0.85rem",
                            borderRadius: "10px",
                            border: "1.5px solid #cbd5e1",
                            fontSize: "0.95rem",
                            fontWeight: 600,
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
          return (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569" }}>
                ✍️ Tulis perubahan bentuk kata:
              </label>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <input
                  type="text"
                  placeholder="Contoh: 読み"
                  value={userAnswers[item.id] || ""}
                  onChange={(e) => {
                    const val = e.target.value;
                    setUserAnswers((prev) => ({ ...prev, [item.id]: val }));
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setRevealedQuestions((prev) => ({ ...prev, [item.id]: true }));
                      setExpandedExplanations((prev) => ({ ...prev, [item.id]: true }));
                    }
                  }}
                  style={{
                    maxWidth: "320px",
                    padding: "0.55rem 0.85rem",
                    borderRadius: "10px",
                    border: "1.5px solid #cbd5e1",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                  }}
                />
              </div>
            </div>
          );
        })()}

        {/* 9. Picture Writing (Exam 2 Sec 8) */}
        {sec.type === "picture-writing" && (() => {
          const isMultiPart = "answer" in item && typeof item.answer === "object" && !("text" in item.answer);
          if (isMultiPart) {
            return (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569" }}>
                  ✍️ Tulis kalimat respon untuk masing-masing nomor (1, 2, 3):
                </label>
                {["1", "2", "3"].map((numKey) => {
                  const currentSubVal = (userAnswers[item.id] && userAnswers[item.id][numKey]) || "";
                  return (
                    <div key={numKey} style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                      <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#4f46e5" }}>
                        Bagian ({numKey}):
                      </span>
                      <input
                        type="text"
                        placeholder={`Ketik kalimat untuk bagian (${numKey})...`}
                        value={currentSubVal}
                        onChange={(e) => {
                          const val = e.target.value;
                          const existing = typeof userAnswers[item.id] === "object" ? { ...userAnswers[item.id] } : {};
                          existing[numKey] = val;
                          setUserAnswers((prev) => ({ ...prev, [item.id]: existing }));
                        }}
                        style={{
                          width: "100%",
                          padding: "0.55rem 0.85rem",
                          borderRadius: "10px",
                          border: "1.5px solid #cbd5e1",
                          fontSize: "0.95rem",
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            );
          }
          return (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569" }}>
                ✍️ Tulis kalimat respon berdasarkan gambar:
              </label>
              <input
                type="text"
                placeholder="Ketik kalimat bahasa Jepang di sini..."
                value={userAnswers[item.id] || ""}
                onChange={(e) => {
                  const val = e.target.value;
                  setUserAnswers((prev) => ({ ...prev, [item.id]: val }));
                }}
                style={{
                  width: "100%",
                  padding: "0.55rem 0.85rem",
                  borderRadius: "10px",
                  border: "1.5px solid #cbd5e1",
                  fontSize: "0.95rem",
                }}
              />
            </div>
          );
        })()}

        {/* 9b. Picture Vocabulary (Exam 3 Sec 2) */}
        {sec.type === "picture-vocabulary" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569" }}>
              ✍️ Tulis kata sesuai gambar:
            </label>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="text"
                placeholder="Contoh: カメラ"
                value={userAnswers[item.id] || ""}
                onChange={(e) => {
                  const val = e.target.value;
                  setUserAnswers((prev) => ({ ...prev, [item.id]: val }));
                }}
                style={{
                  maxWidth: "320px",
                  padding: "0.55rem 0.85rem",
                  borderRadius: "10px",
                  border: "1.5px solid #cbd5e1",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                }}
              />
            </div>
          </div>
        )}

        {/* 9c. Location & Existence (Exam 3 Sec 4) */}
        {sec.type === "location-existence" && (() => {
          const currentObj = typeof userAnswers[item.id] === "object" && userAnswers[item.id] !== null
            ? userAnswers[item.id]
            : { location: "", existence: "" };
          const correctLoc = item.answer?.location?.text || "";
          const correctExist = item.answer?.existence || "";
          const isLocCorrect = currentObj.location?.trim() === correctLoc;

          return (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {/* 1. Posisi / Lokasi */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569" }}>
                  ✍️ (1) Tulis posisi/lokasi dalam kanji/hiragana:
                </label>
                <input
                  type="text"
                  placeholder="Contoh: 上"
                  value={currentObj.location || ""}
                  onChange={(e) => {
                    const val = e.target.value;
                    setUserAnswers((prev) => ({
                      ...prev,
                      [item.id]: { ...currentObj, location: val },
                    }));
                  }}
                  style={{
                    maxWidth: "240px",
                    padding: "0.55rem 0.85rem",
                    borderRadius: "10px",
                    border: "1.5px solid " + (isRevealed && currentObj.location
                      ? isLocCorrect ? "#10b981" : "#ef4444"
                      : "#cbd5e1"),
                    background: isRevealed && currentObj.location
                      ? isLocCorrect ? "#ecfdf5" : "#fef2f2"
                      : "#ffffff",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                  }}
                />
              </div>

              {/* 2. Pilihan います / あります */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569" }}>
                  👉 (2) Pilih keberadaan (［います・あります］):
                </label>
                <div style={{ display: "inline-flex", gap: "0.5rem" }}>
                  {["います", "あります"].map((opt) => {
                    const isSelected = currentObj.existence === opt;
                    const isCorrect = opt === correctExist;
                    let bg = "#ffffff";
                    let border = "#cbd5e1";
                    let color = "#334155";
                    if (isRevealed) {
                      if (isCorrect) {
                        bg = "#ecfdf5";
                        border = "#10b981";
                        color = "#065f46";
                      } else if (isSelected) {
                        bg = "#fef2f2";
                        border = "#ef4444";
                        color = "#991b1b";
                      }
                    } else if (isSelected) {
                      bg = "#e0e7ff";
                      border = "#6366f1";
                      color = "#3730a3";
                    }

                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setUserAnswers((prev) => ({
                            ...prev,
                            [item.id]: { ...currentObj, existence: opt },
                          }));
                          setRevealedQuestions((prev) => ({ ...prev, [item.id]: true }));
                        }}
                        className="btn btn-secondary"
                        style={{
                          padding: "0.45rem 1.1rem",
                          borderRadius: "10px",
                          background: bg,
                          borderColor: border,
                          color: color,
                          fontWeight: 700,
                          fontSize: "0.92rem",
                        }}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })()}

        {/* 9d. Dialogue Completion (Exam 3 Sec 7) */}
        {sec.type === "dialogue-completion" && (() => {
          const currentAns = userAnswers[item.id] || {};
          const isDualText = item.answer && typeof item.answer === "object" && "1" in item.answer && "2" in item.answer;
          const hasParticleResponse = item.answer && typeof item.answer === "object" && "particle" in item.answer && "response" in item.answer;
          const isMultiChoiceOnly = item.choices && typeof item.choices === "object" && !Array.isArray(item.choices);
          const hasChoices = item.choices && Array.isArray(item.choices);

          return (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {/* If dual text blanks: (1) and (2) */}
              {isDualText && (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                  <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569" }}>
                    ✍️ Tulis kalimat untuk melengkapi percakapan:
                  </label>
                  {["1", "2"].map((numKey) => {
                    const val = typeof currentAns === "object" ? currentAns[numKey] || "" : "";
                    return (
                      <div key={numKey} style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                        <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#4f46e5" }}>
                          Bagian ({numKey}):
                        </span>
                        <input
                          type="text"
                          placeholder={numKey === "1" ? "Contoh: 食べに行きませんか" : "Contoh: 行きましょう"}
                          value={val}
                          onChange={(e) => {
                            const updated = typeof currentAns === "object" ? { ...currentAns } : {};
                            updated[numKey] = e.target.value;
                            setUserAnswers((prev) => ({ ...prev, [item.id]: updated }));
                          }}
                          style={{
                            width: "100%",
                            padding: "0.55rem 0.85rem",
                            borderRadius: "10px",
                            border: "1.5px solid #cbd5e1",
                            fontSize: "0.95rem",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              )}

              {/* If particle + response (e.g. q3) */}
              {hasParticleResponse && (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                  {hasChoices && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                      <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569" }}>
                        👉 Pilih partikel akhir (［{item.choices.join("・")}］):
                      </span>
                      <div style={{ display: "inline-flex", gap: "0.5rem" }}>
                        {item.choices.map((ch: string) => {
                          const isSelected = typeof currentAns === "object" && currentAns.particle === ch;
                          const isCorrect = item.answer.particle === ch;
                          let bg = "#ffffff";
                          let border = "#cbd5e1";
                          let color = "#334155";
                          if (isRevealed) {
                            if (isCorrect) {
                              bg = "#ecfdf5";
                              border = "#10b981";
                              color = "#065f46";
                            } else if (isSelected) {
                              bg = "#fef2f2";
                              border = "#ef4444";
                              color = "#991b1b";
                            }
                          } else if (isSelected) {
                            bg = "#e0e7ff";
                            border = "#6366f1";
                            color = "#3730a3";
                          }

                          return (
                            <button
                              key={ch}
                              type="button"
                              onClick={() => {
                                const updated = typeof currentAns === "object" ? { ...currentAns } : {};
                                updated.particle = ch;
                                setUserAnswers((prev) => ({ ...prev, [item.id]: updated }));
                                if (updated.response && String(updated.response).trim() !== "") {
                                  setRevealedQuestions((prev) => ({ ...prev, [item.id]: true }));
                                }
                              }}
                              className="btn btn-secondary"
                              style={{
                                padding: "0.45rem 1.1rem",
                                borderRadius: "10px",
                                background: bg,
                                borderColor: border,
                                color: color,
                                fontWeight: 700,
                              }}
                            >
                              {ch}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                    <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569" }}>
                      ✍️ Tulis kalimat respon untuk B:
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: ぜひ行きたいです"
                      value={typeof currentAns === "object" ? currentAns.response || "" : ""}
                      onChange={(e) => {
                        const updated = typeof currentAns === "object" ? { ...currentAns } : {};
                        updated.response = e.target.value;
                        setUserAnswers((prev) => ({ ...prev, [item.id]: updated }));
                      }}
                      style={{
                        width: "100%",
                        padding: "0.55rem 0.85rem",
                        borderRadius: "10px",
                        border: "1.5px solid #cbd5e1",
                        fontSize: "0.95rem",
                      }}
                    />
                  </div>
                </div>
              )}

              {/* If multi-choice only (e.g. q4 with blank1 and blank2) */}
              {isMultiChoiceOnly && (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                  {Object.entries(item.choices as Record<string, string[]>).map(([bKey, opts], bIdx) => {
                    const selectedVal = Array.isArray(currentAns) ? currentAns[bIdx] : (typeof currentAns === "object" ? currentAns[bKey] : "");
                    const correctVal = Array.isArray(item.answer) ? item.answer[bIdx] : "";
                    return (
                      <div key={bKey} style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                        <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569" }}>
                          👉 Pilihan Bagian ({bIdx + 1}):
                        </span>
                        <div style={{ display: "inline-flex", gap: "0.5rem" }}>
                          {opts.map((ch: string) => {
                            const isSelected = selectedVal === ch;
                            const isCorrect = correctVal === ch;
                            let bg = "#ffffff";
                            let border = "#cbd5e1";
                            let color = "#334155";
                            if (isRevealed) {
                              if (isCorrect) {
                                bg = "#ecfdf5";
                                border = "#10b981";
                                color = "#065f46";
                              } else if (isSelected) {
                                bg = "#fef2f2";
                                border = "#ef4444";
                                color = "#991b1b";
                              }
                            } else if (isSelected) {
                              bg = "#e0e7ff";
                              border = "#6366f1";
                              color = "#3730a3";
                            }

                            return (
                              <button
                                key={ch}
                                type="button"
                                onClick={() => {
                                  const arr = Array.isArray(currentAns)
                                    ? [...currentAns]
                                    : new Array(Object.keys(item.choices).length).fill("");
                                  arr[bIdx] = ch;
                                  handleSelectAnswer(item.id, arr);
                                }}
                                className="btn btn-secondary"
                                style={{
                                  padding: "0.45rem 1.1rem",
                                  borderRadius: "10px",
                                  background: bg,
                                  borderColor: border,
                                  color: color,
                                  fontWeight: 700,
                                }}
                              >
                                {ch}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* If single text without dual or particle (e.g. q2) */}
              {!isDualText && !hasParticleResponse && !isMultiChoiceOnly && (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569" }}>
                    ✍️ Tulis kalimat untuk melengkapi percakapan:
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: まだです"
                    value={typeof currentAns === "string" ? currentAns : currentAns.text || ""}
                    onChange={(e) => {
                      setUserAnswers((prev) => ({ ...prev, [item.id]: e.target.value }));
                    }}
                    style={{
                      maxWidth: "360px",
                      padding: "0.55rem 0.85rem",
                      borderRadius: "10px",
                      border: "1.5px solid #cbd5e1",
                      fontSize: "0.95rem",
                    }}
                  />
                </div>
              )}

              {/* If item also has choices with dual text (e.g. q5 with ［それから・じゃ］) */}
              {isDualText && hasChoices && (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", marginTop: "0.25rem" }}>
                  <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569" }}>
                    👉 Pilih kata sambung (［{item.choices.join("・")}］):
                  </span>
                  <div style={{ display: "inline-flex", gap: "0.5rem" }}>
                    {item.choices.map((ch: string) => {
                      const isSelected = typeof currentAns === "object" && currentAns.choice === ch;
                      const isCorrect = item.answer?.choice === ch;
                      let bg = "#ffffff";
                      let border = "#cbd5e1";
                      let color = "#334155";
                      if (isRevealed) {
                        if (isCorrect) {
                          bg = "#ecfdf5";
                          border = "#10b981";
                          color = "#065f46";
                        } else if (isSelected) {
                          bg = "#fef2f2";
                          border = "#ef4444";
                          color = "#991b1b";
                        }
                      } else if (isSelected) {
                        bg = "#e0e7ff";
                        border = "#6366f1";
                        color = "#3730a3";
                      }

                      return (
                        <button
                          key={ch}
                          type="button"
                          onClick={() => {
                            const updated = typeof currentAns === "object" ? { ...currentAns } : {};
                            updated.choice = ch;
                            setUserAnswers((prev) => ({ ...prev, [item.id]: updated }));
                            if (
                              updated.A &&
                              String(updated.A).trim() !== "" &&
                              updated.B &&
                              String(updated.B).trim() !== ""
                            ) {
                              setRevealedQuestions((prev) => ({ ...prev, [item.id]: true }));
                            }
                          }}
                          className="btn btn-secondary"
                          style={{
                            padding: "0.45rem 1.1rem",
                            borderRadius: "10px",
                            background: bg,
                            borderColor: border,
                            color: color,
                            fontWeight: 700,
                          }}
                        >
                          {ch}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })()}

        {/* 10. Dialogue Writing Text Input (Exam 1 Sec 5) */}
        {sec.type === "dialogue-writing" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569" }}>
              ✍️ Tulis kalimat respon/pertanyaan Anda:
            </label>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="text"
                placeholder="Ketik kalimat bahasa Jepang di sini..."
                value={userAnswers[item.id] || ""}
                onChange={(e) => {
                  const val = e.target.value;
                  setUserAnswers((prev) => ({ ...prev, [item.id]: val }));
                }}
                style={{
                  flex: 1,
                  padding: "0.55rem 0.85rem",
                  borderRadius: "10px",
                  border: "1.5px solid #cbd5e1",
                  fontSize: "0.95rem",
                }}
              />
            </div>
          </div>
        )}

        {/* 11. Open Answer Text Input (Exam 1 Sec 7, Exam 2 Sec 9) */}
        {sec.type === "open-answer" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569" }}>
              ✍️ Jawaban Anda (Ketik di sini untuk verifikasi AI otomatis):
            </label>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="text"
                placeholder="Ketik jawaban Anda dalam bahasa Jepang..."
                value={userAnswers[item.id] || ""}
                onChange={(e) => {
                  const val = e.target.value;
                  setUserAnswers((prev) => ({ ...prev, [item.id]: val }));
                }}
                style={{
                  flex: 1,
                  padding: "0.55rem 0.85rem",
                  borderRadius: "10px",
                  border: "1.5px solid #cbd5e1",
                  fontSize: "0.95rem",
                }}
              />
            </div>
          </div>
        )}

        {/* 11b. Grammar Choice (Exam 4 Sec 4) */}
        {sec.type === "grammar-choice" && "choiceBank" in sec && (() => {
          return (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569" }}>
                👉 Pilih bentuk tata bahasa yang tepat (a〜d):
              </label>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {sec.choiceBank.map((ch: any) => {
                  const isSelected = userAnswer === ch.id;
                  const isCorrect = item.choice === ch.id;
                  let bg = "#ffffff";
                  let border = "#cbd5e1";
                  let color = "#334155";
                  if (isRevealed) {
                    if (isCorrect) {
                      bg = "#ecfdf5";
                      border = "#10b981";
                      color = "#065f46";
                    } else if (isSelected) {
                      bg = "#fef2f2";
                      border = "#ef4444";
                      color = "#991b1b";
                    }
                  } else if (isSelected) {
                    bg = "#e0e7ff";
                    border = "#6366f1";
                    color = "#3730a3";
                  }

                  return (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => handleSelectAnswer(item.id, ch.id)}
                      className="btn btn-secondary"
                      style={{
                        padding: "0.5rem 0.95rem",
                        borderRadius: "10px",
                        background: bg,
                        borderColor: border,
                        color: color,
                        fontWeight: 700,
                        fontSize: "0.92rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <span style={{ color: isSelected || (isRevealed && isCorrect) ? "inherit" : "#4f46e5" }}>
                        {ch.id}.
                      </span>
                      <span>{ch.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })()}

        {/* 11c. Picture Dialogue (Exam 5 Sec 6) */}
        {sec.type === "picture-dialogue" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569" }}>
              ✍️ Tulis kalimat respon untuk melengkapi percakapan:
            </label>
            <input
              type="text"
              placeholder="Ketik kalimat bahasa Jepang di sini..."
              value={userAnswers[item.id] || ""}
              onChange={(e) => {
                const val = e.target.value;
                setUserAnswers((prev) => ({ ...prev, [item.id]: val }));
              }}
              style={{
                width: "100%",
                padding: "0.55rem 0.85rem",
                borderRadius: "10px",
                border: "1.5px solid #cbd5e1",
                fontSize: "0.95rem",
              }}
            />
          </div>
        )}

        {/* 11d. Casual Form Text Input (Exam 4 Sec 5) */}
        {sec.type === "casual-form" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569" }}>
              ✍️ Tulis bentuk kasual (フツウ形・カジュアル) yang tepat:
            </label>
            <input
              type="text"
              placeholder="Contoh: よく見る？"
              value={userAnswers[item.id] || ""}
              onChange={(e) => {
                const val = e.target.value;
                setUserAnswers((prev) => ({ ...prev, [item.id]: val }));
              }}
              style={{
                width: "100%",
                maxWidth: "420px",
                padding: "0.55rem 0.85rem",
                borderRadius: "10px",
                border: "1.5px solid #cbd5e1",
                fontSize: "0.95rem",
              }}
            />
          </div>
        )}

        {/* 12. True / False buttons (Exam 1 Sec 8, Exam 2 Sec 10) */}
        {sec.type === "reading-true-false" && (
          <div style={{ display: "flex", gap: "0.65rem" }}>
            {(["○", "×"] as const).map((opt) => {
              const isSelected = userAnswer === opt;
              const isCorrect = "answer" in item && item.answer === opt;
              let bg = "#ffffff";
              let border = "#cbd5e1";
              let color = "#334155";
              if (isRevealed) {
                if (isCorrect) {
                  bg = "#ecfdf5";
                  border = "#10b981";
                  color = "#065f46";
                } else if (isSelected) {
                  bg = "#fef2f2";
                  border = "#ef4444";
                  color = "#991b1b";
                }
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleSelectAnswer(item.id, opt)}
                  className="btn btn-secondary"
                  style={{
                    padding: "0.5rem 1.25rem",
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    borderRadius: "10px",
                    background: bg,
                    borderColor: border,
                    color: color,
                  }}
                >
                  {opt} {opt === "○" ? "(Benar)" : "(Salah)"}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  // Helper renderer for explanation box
  const renderExplanationBox = (item: any) => {
    return (
      <div
        className="animate-fade-in"
        style={{
          marginTop: "0.85rem",
          borderRadius: "14px",
          border: "1px solid #c7d2fe",
          background: "#ffffff",
          overflow: "hidden",
          boxShadow: "0 4px 16px -2px rgba(79, 70, 229, 0.08)",
        }}
      >
        {/* Header bar */}
        <div
          style={{
            background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
            color: "#ffffff",
            padding: "0.85rem 1.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 700, fontSize: "0.95rem" }}>
            <Lightbulb size={18} />
            <span>Pembahasan & Kunci Jawaban</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexWrap: "wrap" }}>
            {"grammarPoint" in item && item.grammarPoint && (
              <div
                style={{
                  background: "rgba(255,255,255,0.2)",
                  padding: "0.2rem 0.65rem",
                  borderRadius: "9999px",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                }}
              >
                Pola: {item.grammarPoint}
              </div>
            )}
            {"vocabularyPoint" in item && item.vocabularyPoint && (
              <div
                style={{
                  background: "rgba(255,255,255,0.2)",
                  padding: "0.2rem 0.65rem",
                  borderRadius: "9999px",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                }}
              >
                Poin: {item.vocabularyPoint}
              </div>
            )}
            {"choice" in item && item.choice && (
              <div
                style={{
                  background: "rgba(255,255,255,0.2)",
                  padding: "0.2rem 0.65rem",
                  borderRadius: "9999px",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                }}
              >
                Pilihan: ({item.choice})
              </div>
            )}
            {"answer" in item && typeof item.answer === "string" && (
              <div
                style={{
                  background: "rgba(255,255,255,0.2)",
                  padding: "0.2rem 0.65rem",
                  borderRadius: "9999px",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                }}
              >
                Kunci: {item.answer}
              </div>
            )}
            {"answer" in item && typeof item.answer === "object" && item.answer !== null && "text" in item.answer && (
              <div
                style={{
                  background: "rgba(255,255,255,0.2)",
                  padding: "0.2rem 0.65rem",
                  borderRadius: "9999px",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                }}
              >
                Kunci: {item.answer.text}
              </div>
            )}
          </div>
        </div>

        <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          {/* Official Answer Box */}
          <div
            style={{
              background: "#ecfdf5",
              border: "1px solid #a7f3d0",
              borderRadius: "10px",
              padding: "0.85rem 1rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#065f46", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.35rem" }}>
              <CheckCircle2 size={16} color="#10b981" />
              <span>KUNCI JAWABAN RESMI:</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
              {/* Choice if grammar-choice */}
              {"choice" in item && item.choice && (
                <span className="badge badge-indigo" style={{ fontSize: "0.88rem", fontWeight: 700 }}>
                  Pilihan: ({item.choice})
                </span>
              )}

              {/* Word Bank answer */}
              {"answer" in item && typeof item.answer === "object" && "value" in item.answer && "content" in item.answer && (
                <span className="badge badge-emerald" style={{ fontSize: "0.88rem" }}>
                  <strong>{item.answer.value}.</strong>{" "}
                  <SegmentFurigana segments={item.answer.content.segments} />
                </span>
              )}

              {/* Particle array answer or multi-blank SegmentContent[] */}
              {"answer" in item && Array.isArray(item.answer) && (
                <div style={{ display: "inline-flex", gap: "0.35rem", flexWrap: "wrap" }}>
                  {item.answer.map((ans: any, aIdx: number) => (
                    <span key={aIdx} className="badge badge-emerald" style={{ fontSize: "0.85rem" }}>
                      Blank {aIdx + 1}:{" "}
                      {typeof ans === "string" ? (
                        <strong>{ans}</strong>
                      ) : ans && typeof ans === "object" && "segments" in ans ? (
                        <SegmentFurigana segments={ans.segments} />
                      ) : (
                        <strong>{String(ans)}</strong>
                      )}
                    </span>
                  ))}
                </div>
              )}

              {/* Single string choice or true/false answer */}
              {"answer" in item && typeof item.answer === "string" && (
                <span className="badge badge-emerald" style={{ fontSize: "0.9rem" }}>
                  {"answerRuby" in item && item.answerRuby ? (
                    <SegmentFurigana segments={item.answerRuby.segments} />
                  ) : (
                    item.answer
                  )}
                </span>
              )}

              {/* Object with segments */}
              {"answer" in item && typeof item.answer === "object" && "segments" in item.answer && (
                <span className="badge badge-emerald" style={{ fontSize: "0.9rem" }}>
                  <SegmentFurigana segments={item.answer.segments} />
                  {"meaningId" in item && item.meaningId && (
                    <span style={{ marginLeft: "0.4rem", fontSize: "0.8rem", opacity: 0.85 }}>({item.meaningId})</span>
                  )}
                </span>
              )}

              {/* Multi-part or object answer (Exam 2 Sec 8, Exam 3 Sec 4, Sec 7) */}
              {"answer" in item && typeof item.answer === "object" && item.answer !== null && !("segments" in item.answer) && !("value" in item.answer) && !Array.isArray(item.answer) && (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  {Object.entries(item.answer).map(([k, ansObj]: any) => {
                    const label = k === "location" ? "Posisi / Lokasi" : k === "existence" ? "Keberadaan" : k === "particle" ? "Partikel" : k === "response" ? "Respon" : k === "choice" ? "Pilihan Kata" : `(${k})`;
                    return (
                      <div key={k} style={{ fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                        <strong style={{ color: "#4f46e5" }}>{label}:</strong>
                        {typeof ansObj === "object" && ansObj !== null && "segments" in ansObj ? (
                          <SegmentFurigana segments={ansObj.segments} />
                        ) : (
                          <span className="badge badge-emerald" style={{ fontSize: "0.85rem" }}>{String(ansObj)}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Antonym target answer */}
              {"targetAnswer" in item && item.targetAnswer && (
                <span className="badge badge-indigo" style={{ fontSize: "0.85rem" }}>
                  Target: <SegmentFurigana segments={item.targetAnswer.segments} />
                </span>
              )}

              {/* Counter Canonical Kanji */}
              {"canonical" in item && item.canonical && (
                <span className="badge badge-indigo" style={{ fontSize: "0.85rem" }}>
                  Kanji: <SegmentFurigana segments={item.canonical.segments} />
                </span>
              )}

              {/* Open answer paperAnswer */}
              {"paperAnswer" in item && item.paperAnswer && (
                <span className="badge badge-emerald" style={{ fontSize: "0.85rem" }}>
                  Lembar Ujian: <SegmentFurigana segments={item.paperAnswer.segments} />
                </span>
              )}
            </div>
          </div>

          {/* Sample Answers if present */}
          {"sampleAnswers" in item && item.sampleAnswers && (
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "0.75rem 1rem" }}>
              <strong style={{ fontSize: "0.82rem", color: "#475569" }}>Variasi Jawaban Lain:</strong>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginTop: "0.35rem" }}>
                {item.sampleAnswers.map((sa: any, sIdx: number) => (
                  <span key={sIdx} className="badge badge-ghost" style={{ fontSize: "0.82rem" }}>
                    <SegmentFurigana segments={sa.segments} />
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Accepted Variants if present */}
          {"acceptedVariants" in item && item.acceptedVariants && (
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "0.75rem 1rem" }}>
              <strong style={{ fontSize: "0.82rem", color: "#475569" }}>Variasi Jawaban yang Diterima:</strong>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginTop: "0.35rem" }}>
                {Array.isArray(item.acceptedVariants) ? (
                  item.acceptedVariants.map((av: any, avIdx: number) => (
                    <div key={avIdx} style={{ fontSize: "0.85rem" }}>
                      • <SegmentFurigana segments={av.segments} />
                    </div>
                  ))
                ) : (
                  Object.entries(item.acceptedVariants).map(([k, list]: any) => (
                    <div key={k} style={{ fontSize: "0.85rem" }}>
                      <strong>({k})</strong>{" "}
                      {list.map((v: any, vIdx: number) => (
                        <span key={vIdx} style={{ marginRight: "0.5rem" }}>
                          • <SegmentFurigana segments={v.segments} />
                        </span>
                      ))}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Completed Sentence if present */}
          {"completed" in item && item.completed && (
            <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "0.75rem 1rem" }}>
              <strong style={{ fontSize: "0.82rem", color: "#166534" }}>Kalimat Lengkap:</strong>
              <div style={{ fontSize: "1.05rem", marginTop: "0.35rem", color: "#14532d", lineHeight: 1.8 }}>
                <SegmentFurigana segments={item.completed.segments} />
              </div>
            </div>
          )}

          {/* Explanation Text */}
          {"explanationId" in item && item.explanationId && (
            <div style={{ fontSize: "0.9rem", color: "#334155", lineHeight: 1.65 }}>
              <p style={{ margin: 0 }}>
                <strong>Penjelasan:</strong> {item.explanationId}
              </p>
            </div>
          )}

          {/* Solving Steps */}
          {"solvingSteps" in item && item.solvingSteps && Array.isArray(item.solvingSteps) && (
            <div style={{ background: "#f8fafc", borderRadius: "10px", padding: "0.75rem 1rem", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginBottom: "0.35rem" }}>
                Langkah Analisis / Cara Mengerjakan:
              </div>
              <ol style={{ margin: 0, paddingLeft: "1.25rem", fontSize: "0.85rem", color: "#475569", lineHeight: 1.6 }}>
                {item.solvingSteps.map((step: string, sIdx: number) => (
                  <li key={sIdx}>{step}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    );
  };

  // =========================================================================
  // VIEW 1: EXAM SELECTION SCREEN (PILIH MAU UJIAN KE BERAPA)
  // =========================================================================
  if (!selectedExamId) {
    return (
      <div className="source-selection-container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {/* Navbar Header */}
        <header className="app-header">
          <div className="header-inner">
            <div className="header-top-row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
              <button
                onClick={onBackToSourceSelect}
                className="btn btn-ghost"
                style={{
                  padding: "0.35rem 0.65rem",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  border: "1px solid #e2e8f0",
                  background: "#f8fafc",
                }}
                title="Kembali ke Pilihan Sumber Soal"
              >
                <ArrowLeft size={16} />
                <span style={{ fontSize: "0.82rem", fontWeight: 600 }}>Sumber Soal</span>
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                    boxShadow: "0 2px 8px rgba(79, 70, 229, 0.25)",
                    flexShrink: 0,
                  }}
                >
                  ⛩️
                </div>
                <div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.2 }}>
                    Gakkou 日本語
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#64748b", fontWeight: 600 }}>
                    Portal Latihan & Ujian Bahasa Jepang
                  </div>
                </div>
              </div>

              <div className="desktop-only" style={{ width: "90px" }} />
            </div>
          </div>
        </header>

        {/* Selection Main Content */}
        <main className="main-content" style={{ maxWidth: "960px", margin: "0 auto", padding: "1.5rem 1rem 3rem 1rem", width: "100%" }}>
          {/* Hero Section */}
          <div
            className="hero-card"
            style={{
              textAlign: "center",
              padding: "1.75rem 1rem",
              background: "radial-gradient(ellipse at top, #eef2ff 0%, #f8fafc 70%)",
              borderRadius: "20px",
              border: "1px solid #e2e8f0",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "#ffffff",
                padding: "0.4rem 0.85rem",
                borderRadius: "9999px",
                border: "1px solid #e0e7ff",
                boxShadow: "0 2px 8px rgba(79, 70, 229, 0.08)",
                maxWidth: "100%",
              }}
            >
              <Sparkles size={16} color="#4f46e5" style={{ flexShrink: 0 }} />
              <h1
                className="hero-title"
                style={{
                  fontSize: "clamp(0.95rem, 3.8vw, 1.25rem)",
                  fontWeight: 800,
                  color: "#3730a3",
                  margin: 0,
                  lineHeight: 1.25,
                }}
              >
                Pilih Paket Ujian Dekiru Nihongo
              </h1>
            </div>
          </div>

          {/* Exam Cards Grid */}
          {(() => {
            return (
              <div className="mode-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.75rem" }}>
                {dekiruExamsList.map((examMeta, idx) => {
                  // Re-evaluate saved progress (depends on progressRevision)
                  void progressRevision;
                  const savedProg = loadDekiruProgress(examMeta.id);
                  const answeredProgCount = countAnswered(savedProg?.userAnswers);
                  const hasProgress = answeredProgCount > 0;

                  const cardThemes = [
                    { accent: "#4f46e5", light: "#f5f3ff", border: "#818cf8", shadow: "rgba(79, 70, 229, 0.3)" },
                    { accent: "#0284c7", light: "#f0f9ff", border: "#38bdf8", shadow: "rgba(2, 132, 199, 0.3)" },
                    { accent: "#059669", light: "#ecfdf5", border: "#34d399", shadow: "rgba(5, 150, 105, 0.3)" },
                    { accent: "#d97706", light: "#fffbeb", border: "#fbbf24", shadow: "rgba(217, 119, 6, 0.3)" },
                    { accent: "#8b5cf6", light: "#faf5ff", border: "#a78bfa", shadow: "rgba(139, 92, 246, 0.3)" },
                  ];
                  const theme = cardThemes[idx % cardThemes.length];
                  const accentColor = theme.accent;
                  const lightBg = theme.light;

                  return (
                    <div
                      key={examMeta.id}
                      className="card card-hover"
                      style={{
                        padding: "2.25rem 1.75rem",
                        border: `2px solid ${theme.border}`,
                        borderRadius: "22px",
                        background: "linear-gradient(180deg, #ffffff 0%, " + lightBg + " 100%)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.06)",
                        position: "relative",
                      }}
                    >
                      <div>
                        {/* Badge header */}
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                          <span
                            style={{
                              background: accentColor,
                              color: "#ffffff",
                              fontSize: "0.8rem",
                              fontWeight: 800,
                              padding: "0.35rem 0.75rem",
                              borderRadius: "9999px",
                            }}
                          >
                            {examMeta.title}
                          </span>
                          <span style={{ fontSize: "0.78rem", color: "#64748b", fontWeight: 700 }}>
                            {examMeta.totalQuestions} Soal
                          </span>
                        </div>

                        {/* Japanese Title */}
                        <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "1rem", lineHeight: 1.35 }}>
                          {examMeta.subtitle}
                        </h2>

                        {/* Saved Progress Badge if exists */}
                        {hasProgress ? (
                          <div
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.35rem",
                              background: "#ecfdf5",
                              color: "#065f46",
                              border: "1px solid #a7f3d0",
                              padding: "0.25rem 0.65rem",
                              borderRadius: "9999px",
                              fontSize: "0.76rem",
                              fontWeight: 700,
                              marginBottom: "1.25rem",
                            }}
                          >
                            <span>💾 Lanjut: {answeredProgCount} dari {examMeta.totalQuestions} soal terjawab</span>
                          </div>
                        ) : (
                          <div style={{ marginBottom: "1.25rem" }} />
                        )}
                      </div>

                      {/* Actions */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        <button
                          onClick={() => handleSelectExam(examMeta.id, "exam")}
                          className="btn btn-primary"
                          style={{
                            width: "100%",
                            padding: "0.85rem 1.25rem",
                            borderRadius: "12px",
                            fontSize: "0.95rem",
                            fontWeight: 700,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.5rem",
                            background: accentColor,
                            borderColor: accentColor,
                            boxShadow: `0 4px 14px ${theme.shadow}`,
                          }}
                        >
                          <GraduationCap size={18} />
                          <span>{hasProgress ? "Lanjutkan Mode Ujian" : "Mulai Mode Ujian"}</span>
                          <ArrowRight size={16} />
                        </button>

                        <button
                          onClick={() => handleSelectExam(examMeta.id, "study")}
                          className="btn btn-secondary"
                          style={{
                            width: "100%",
                            padding: "0.75rem 1.25rem",
                            borderRadius: "12px",
                            fontSize: "0.88rem",
                            fontWeight: 600,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.4rem",
                          }}
                        >
                          <BookOpen size={16} />
                          <span>Mode Belajar</span>
                        </button>

                        {hasProgress && (
                          <div style={{ display: "flex", justifyContent: "center", marginTop: "-0.25rem" }}>
                            <button
                              type="button"
                              onClick={() => handleResetExam(examMeta.id)}
                              style={{
                                background: "none",
                                border: "none",
                                color: "#94a3b8",
                                fontSize: "0.75rem",
                                cursor: "pointer",
                                textDecoration: "underline",
                                padding: "0.2rem",
                              }}
                            >
                              Reset progress ujian ini
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </main>
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: ACTIVE EXAM SCREEN (MODE UJIAN / MODE BELAJAR)
  // =========================================================================
  return (
    <div className="app-container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header className="app-header">
        <div className="header-inner">
          <div className="header-top-row">
            {/* Left: Back to Exam Selection & Exam Switcher */}
            <div className="header-brand-group" style={{ display: "flex", alignItems: "center", gap: "0.4rem", minWidth: 0, flexShrink: 1 }}>
              <button
                onClick={handleBackToExamSelection}
                className="btn btn-ghost"
                style={{ padding: "0.35rem 0.55rem", borderRadius: "8px", gap: "0.25rem", height: "34px", flexShrink: 0 }}
                title="Kembali ke Pilihan Ujian"
              >
                <ArrowLeft size={15} />
                <span className="desktop-only" style={{ fontSize: "0.78rem" }}>Pilih Ujian</span>
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", minWidth: 0 }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    flexShrink: 0,
                  }}
                >
                  ⛩️
                </div>
                <div style={{ minWidth: 0, overflow: "hidden" }}>
                  <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {currentExamData.exam.title.replace(/『できる日本語初級』/g, "").trim()}
                  </div>
                  <div style={{ fontSize: "0.68rem", color: activeTab === "exam" ? "#4f46e5" : "#0891b2", fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {(currentExamData.exam.id === 'dekiru-review-1-3'
                      ? "Ujian 1 (Bab 1-3)"
                      : currentExamData.exam.id === 'dekiru-review-4-6'
                      ? "Ujian 2 (Bab 4-6)"
                      : currentExamData.exam.id === 'dekiru-review-7-9'
                      ? "Ujian 3 (Bab 7-9)"
                      : currentExamData.exam.id === 'dekiru-review-10-12'
                      ? "Ujian 4 (Bab 10-12)"
                      : "Ujian 5 (Bab 13-15)") + (activeTab === "exam" ? " • Mode Ujian" : " • Mode Belajar")}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="header-actions-group" style={{ display: "flex", alignItems: "center", gap: "0.35rem", flexShrink: 0 }}>
              {/* Switch Exam Button */}
              <button
                onClick={() => {
                  const currentIdx = dekiruExamsList.findIndex((e) => e.id === selectedExamId);
                  const nextExam = dekiruExamsList[(currentIdx + 1) % dekiruExamsList.length];
                  handleSelectExam(nextExam.id, activeTab);
                }}
                className="btn btn-secondary"
                style={{
                  fontSize: "0.75rem",
                  padding: "0.35rem 0.55rem",
                  borderRadius: "8px",
                  gap: "0.3rem",
                  flexShrink: 0,
                  height: "34px",
                }}
                title="Pindah ke paket ujian berikutnya"
              >
                <Shuffle size={13} />
                <span className="desktop-only">Ganti Ujian</span>
              </button>

              {activeTab === "exam" ? (
                <button
                  onClick={() => setIsAiModalOpen(true)}
                  className="btn btn-secondary"
                  style={{
                    fontSize: "0.75rem",
                    padding: "0.35rem 0.55rem",
                    borderRadius: "8px",
                    color: "#7c3aed",
                    border: "1.5px solid #c4b5fd",
                    background: "#f5f3ff",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    fontWeight: 700,
                    flexShrink: 0,
                    height: "34px",
                  }}
                  title="Buka Verifikasi Jawaban AI Terpadu"
                >
                  <Sparkles size={14} color="#7c3aed" />
                  <span className="desktop-only">Verifikasi AI</span>
                  <span className="mobile-only">AI</span>
                </button>
              ) : (
                <span className="badge badge-indigo desktop-only" style={{ fontSize: "0.75rem", textTransform: "none", height: "34px", display: "inline-flex", alignItems: "center" }}>
                  {currentExamData.sections.length} Seksi Soal
                </span>
              )}

              {answeredCount > 0 && activeTab === "exam" && (
                <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", flexShrink: 0 }}>
                  <span
                    className="desktop-only"
                    style={{
                      fontSize: "0.72rem",
                      color: "#059669",
                      background: "#ecfdf5",
                      border: "1px solid #a7f3d0",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "6px",
                      fontWeight: 700,
                    }}
                    title="Semua jawaban Anda tersimpan otomatis di perangkat ini"
                  >
                    💾 Tersimpan
                  </span>
                  <button
                    onClick={() => handleResetExam()}
                    className="btn btn-ghost"
                    style={{
                      padding: "0.35rem",
                      borderRadius: "8px",
                      height: "34px",
                      width: "34px",
                      minWidth: "34px",
                      maxWidth: "34px",
                      color: "#94a3b8",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    title="Reset Jawaban Ujian Ini"
                  >
                    <RotateCcw size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="main-content" style={{ maxWidth: "960px", margin: "0 auto", padding: "1.5rem 1rem 3rem 1rem", width: "100%" }}>
        {/* Banner (Hanya di Mode Belajar agar card soal Mode Ujian lebih luas dan fokus) */}
        {activeTab === "study" && (
          <div
            className="card mb-6 card-responsive-padding"
            style={{
              padding: "1.5rem",
              background: "linear-gradient(135deg, #312e81 0%, #4338ca 100%)",
              color: "#ffffff",
              marginBottom: "1.25rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.4rem" }}>
                  <BookOpen size={22} color="#a5b4fc" />
                  <h2 style={{ fontSize: "1.25rem", fontWeight: 800, margin: 0, color: "#ffffff" }}>
                    {currentExamData.exam.title}
                  </h2>
                </div>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#c7d2fe", lineHeight: 1.5 }}>
                  Pelajari seluruh seksi soal ujian Dekiru Nihongo Bab {currentExamData.exam.lessonRange[0]}-{currentExamData.exam.lessonRange[1]} lengkap dengan furigana, terjemahan, kunci jawaban, dan langkah pengerjaan.
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    background: "rgba(255, 255, 255, 0.15)",
                    padding: "0.4rem 0.85rem",
                    borderRadius: "9999px",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  📖 Mode Belajar (Review List)
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================================= */}
        {/* MODE UJIAN (1 SOAL PER 1 HALAMAN DENGAN DRAWER & VERIFIKASI AI DI AKHIR)           */}
        {/* ================================================================================= */}
        {activeTab === "exam" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* Top Bar Navigation for Current Question */}
            <div
              className="card shadow-sm"
              style={{
                padding: "0.75rem 1.25rem",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "0.5rem",
                border: "1px solid #e2e8f0",
                background: "#ffffff",
                overflow: "visible",
                position: "relative",
                zIndex: 35,
              }}
            >
              {/* Section Dropdown Badge */}
              <div style={{ position: "relative", zIndex: 36 }}>
                <button
                  type="button"
                  onClick={() => setIsSectionMenuOpen(!isSectionMenuOpen)}
                  className="badge badge-indigo"
                  style={{
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    fontSize: "0.82rem",
                    padding: "0.35rem 0.75rem",
                    border: "1px solid #c7d2fe",
                    borderRadius: "9999px",
                    background: "#e0e7ff",
                    color: "#3730a3",
                    fontWeight: 700,
                  }}
                  title="Klik untuk pindah ke bagian lain"
                >
                  <span>Bagian {currentQ.section.section}: {currentQ.section.title}</span>
                  <ChevronDown
                    size={14}
                    style={{
                      transform: isSectionMenuOpen ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s",
                    }}
                  />
                </button>

                {isSectionMenuOpen && (
                  <>
                    <div
                      onClick={() => setIsSectionMenuOpen(false)}
                      style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 998,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "calc(100% + 6px)",
                        left: 0,
                        zIndex: 999,
                        background: "#ffffff",
                        border: "1px solid #e2e8f0",
                        borderRadius: "12px",
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                        minWidth: "280px",
                        padding: "0.4rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.2rem",
                      }}
                    >
                      <div
                        style={{
                          padding: "0.4rem 0.65rem",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          color: "#64748b",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        Pilih Bagian Soal
                      </div>
                      {currentExamData.sections.map((sec) => {
                        const isCurrent = sec.section === currentQ.section.section;
                        const targetIdx = allExamQuestions.findIndex((q) => q.section.section === sec.section);
                        const sectionQuestions = allExamQuestions.filter((q) => q.section.section === sec.section);
                        const qStart = sectionQuestions[0]?.questionNumber;
                        const qEnd = sectionQuestions[sectionQuestions.length - 1]?.questionNumber;

                        return (
                          <button
                            key={sec.section}
                            type="button"
                            onClick={() => {
                              if (targetIdx !== -1) {
                                setCurrentQuestionIndex(targetIdx);
                              }
                              setIsSectionMenuOpen(false);
                            }}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              padding: "0.5rem 0.75rem",
                              borderRadius: "8px",
                              border: "none",
                              background: isCurrent ? "#e0e7ff" : "transparent",
                              color: isCurrent ? "#3730a3" : "#334155",
                              fontWeight: isCurrent ? 700 : 500,
                              fontSize: "0.82rem",
                              cursor: "pointer",
                              textAlign: "left",
                              width: "100%",
                              transition: "background 0.15s",
                            }}
                            onMouseEnter={(e) => {
                              if (!isCurrent) e.currentTarget.style.background = "#f8fafc";
                            }}
                            onMouseLeave={(e) => {
                              if (!isCurrent) e.currentTarget.style.background = "transparent";
                            }}
                          >
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  width: "20px",
                                  height: "20px",
                                  borderRadius: "6px",
                                  background: isCurrent ? "#4f46e5" : "#e2e8f0",
                                  color: isCurrent ? "#ffffff" : "#475569",
                                  fontSize: "0.72rem",
                                  fontWeight: 700,
                                }}
                              >
                                {sec.section}
                              </span>
                              <span>{sec.title}</span>
                            </div>
                            <span style={{ fontSize: "0.72rem", color: isCurrent ? "#4f46e5" : "#94a3b8" }}>
                              Soal {qStart}{qEnd !== qStart ? `-${qEnd}` : ""}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>

              {/* Right: Drawer Opener Pill */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <button
                  onClick={() => setIsDrawerOpen(true)}
                  className="btn btn-secondary"
                  style={{ fontSize: "0.78rem", padding: "0.35rem 0.75rem", borderRadius: "9999px", display: "flex", alignItems: "center", gap: "0.35rem" }}
                  title="Buka Daftar Nomor Soal"
                >
                  <HelpCircle size={14} />
                  <span>Soal <strong>{currentQ.questionNumber}</strong> / {totalQuestions}</span>
                </button>
              </div>
            </div>

            {/* Instruction block */}
            <div style={{ padding: "0.65rem 1rem", background: "#f8fafc", borderRadius: "10px", border: "1px solid #e2e8f0", fontSize: "0.85rem", color: "#475569" }}>
              <strong>Petunjuk Bagian {currentQ.section.section}:</strong>{" "}
              {currentQ.section.instruction && currentQ.section.instruction.segments ? (
                <SegmentFurigana segments={currentQ.section.instruction.segments} />
              ) : (
                currentQ.section.instruction?.text || currentQ.section.title
              )}
            </div>

            {/* Section Specific Reading Passage (e.g. Exam 1 Sec 8, Exam 2 Sec 10, Exam 4 Sec 8, Exam 4 Sec 4) */}
            {"passage" in currentQ.section && currentQ.section.passage && (
              <div style={{ padding: "1rem", background: "#fafaf9", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.5rem" }}>
                  <BookOpen size={16} color="#d97706" />
                  <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#78350f" }}>
                    Wacana Bacaan (Reading Passage):
                  </span>
                </div>
                <div
                  style={{
                    background: "#ffffff",
                    padding: "1.1rem",
                    borderRadius: "10px",
                    border: "1px solid #fef3c7",
                    fontSize: "1.05rem",
                    lineHeight: 2.2,
                    color: "#1c1917",
                  }}
                >
                  <SegmentFurigana segments={currentQ.section.passage.segments} />
                </div>
              </div>
            )}

            {/* Section Specific Grammar Choice Bank (Exam 4 Sec 4) */}
            {currentQ.section.type === "grammar-choice" && "choiceBank" in currentQ.section && (
              <div style={{ padding: "0.85rem 1rem", background: "#f8faff", borderRadius: "12px", border: "1px solid #c7d2fe" }}>
                <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#4338ca", marginBottom: "0.4rem" }}>
                  Daftar Pilihan Pola Kalimat (a〜d):
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.4rem" }}>
                  {currentQ.section.choiceBank.map((ch: any) => (
                    <div
                      key={ch.id}
                      style={{
                        background: "#ffffff",
                        padding: "0.4rem 0.65rem",
                        borderRadius: "8px",
                        border: "1px solid #c7d2fe",
                        fontSize: "0.88rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <span style={{ fontWeight: 800, color: "#4f46e5" }}>{ch.id}.</span>
                      <span>{ch.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section Specific Dialogue Matching Expression Choices (Exam 1 Sec 6) */}
            {currentQ.section.type === "dialogue-matching" && "choices" in currentQ.section && (
              <div style={{ padding: "0.85rem 1rem", background: "#f8faff", borderRadius: "12px", border: "1px solid #c7d2fe" }}>
                <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#4338ca", marginBottom: "0.4rem" }}>
                  Pilihan Ekspresi Percakapan (a〜e):
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  {currentQ.section.choices.map((ch) => (
                    <div
                      key={ch.id}
                      style={{
                        background: "#ffffff",
                        padding: "0.35rem 0.65rem",
                        borderRadius: "6px",
                        border: "1px solid #e2e8f0",
                        fontSize: "0.85rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <span style={{ fontWeight: 800, color: "#4f46e5" }}>{ch.id}.</span>
                      <SegmentFurigana segments={ch.content.segments} />
                      <span style={{ fontSize: "0.72rem", color: "#64748b" }}>({ch.meaningId})</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Card Soal Aktif */}
            <div
              className="card shadow-sm card-responsive-padding"
              style={{
                padding: "1.75rem",
                borderRadius: "16px",
                borderLeft: "5px solid #4f46e5",
                background: "#ffffff",
                borderTop: "1px solid #e2e8f0",
                borderRight: "1px solid #e2e8f0",
                borderBottom: "1px solid #e2e8f0",
              }}
            >
              {/* Question Number Bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                  borderBottom: "1px solid #f1f5f9",
                  paddingBottom: "0.65rem",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "28px",
                      height: "28px",
                      borderRadius: "8px",
                      background: "#4f46e5",
                      color: "#ffffff",
                      fontSize: "0.85rem",
                      fontWeight: 800,
                    }}
                  >
                    {currentQ.questionNumber}
                  </span>
                </div>
              </div>

              {/* Context if present */}
              {"context" in currentQ.item && renderContextBox(currentQ.item.context)}

              {/* Visual Hint if present */}
              {"visual" in currentQ.item && renderVisualBox(currentQ.item.visual)}

              {/* Base verb if present (Exam 4 Sec 4) */}
              {"base" in currentQ.item && currentQ.item.base && (
                <div style={{ marginBottom: "1rem" }}>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#64748b", marginBottom: "0.3rem" }}>
                    Bentuk Dasar Kata Kerja:
                  </div>
                  <div style={{ fontSize: "1.35rem", fontWeight: 700, color: "#4f46e5" }}>
                    <SegmentFurigana segments={currentQ.item.base.segments} />
                  </div>
                </div>
              )}

              {/* Question Text if present */}
              {"question" in currentQ.item && currentQ.item.question && (
                <div className="question-text-mobile" style={{ fontSize: "1.25rem", fontWeight: 600, lineHeight: 2.1, color: "#0f172a", marginBottom: "1rem" }}>
                  <SegmentFurigana segments={currentQ.item.question.segments} />
                </div>
              )}

              {/* Dialogue items */}
              {"dialogue" in currentQ.item && currentQ.item.dialogue && (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem", marginBottom: "1rem" }}>
                  {currentQ.item.dialogue.map((turn: any, tIdx: number) => (
                    <div key={tIdx} style={{ fontSize: "1.1rem", lineHeight: 2, color: turn.speaker === "客" || turn.speaker === "A" ? "#0369a1" : "#1e293b" }}>
                      <strong style={{ marginRight: "0.4rem" }}>{turn.speaker}:</strong>
                      <SegmentFurigana segments={turn.content.segments} />
                    </div>
                  ))}
                </div>
              )}

              {/* Reading statement */}
              {"statement" in currentQ.item && currentQ.item.statement && (
                <div className="question-text-mobile" style={{ fontSize: "1.25rem", fontWeight: 600, lineHeight: 2.1, color: "#0f172a", marginBottom: "1rem" }}>
                  <SegmentFurigana segments={currentQ.item.statement.segments} />
                </div>
              )}

              {/* Interactive Controls for Current Question */}
              {renderQuestionControls(currentQ.section, currentQ.item)}

              {/* Navigation Bar - PLACED ABOVE Sembunyikan Pembahasan as requested */}
              <div
                className="nav-footer-mobile"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "1.25rem",
                  borderTop: "1px solid #f1f5f9",
                  paddingTop: "1rem",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                <button
                  onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentQuestionIndex === 0}
                  className="btn btn-secondary"
                  style={{ opacity: currentQuestionIndex === 0 ? 0.4 : 1, cursor: currentQuestionIndex === 0 ? "not-allowed" : "pointer" }}
                >
                  <ChevronLeft size={16} />
                  <span>Sebelumnya</span>
                </button>

                {/* Right side: Lihat Jawaban first if not yet revealed, otherwise Selanjutnya / Selesai */}
                {!revealedQuestions[currentQ.item.id] ? (
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <button
                      type="button"
                      onClick={() => setCurrentQuestionIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                      className="btn btn-ghost"
                      style={{ color: "#64748b", fontSize: "0.85rem", gap: "0.25rem", padding: "0.5rem 0.75rem" }}
                      title="Lewati soal ini tanpa melihat kunci jawaban"
                    >
                      <span>Lewati</span>
                      <ChevronRight size={14} />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setRevealedQuestions((prev) => ({ ...prev, [currentQ.item.id]: true }));
                        setExpandedExplanations((prev) => ({ ...prev, [currentQ.item.id]: true }));
                      }}
                      className="btn btn-primary"
                      style={{ background: "#4f46e5", borderColor: "#4f46e5", gap: "0.4rem" }}
                    >
                      <CheckCircle2 size={16} />
                      <span>Lihat Jawaban</span>
                    </button>
                  </div>
                ) : currentQuestionIndex < totalQuestions - 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentQuestionIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                    className="btn btn-primary"
                  >
                    <span>Selanjutnya</span>
                    <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsAiModalOpen(true)}
                    className="btn btn-primary"
                    style={{ background: "#7c3aed", borderColor: "#7c3aed", gap: "0.35rem" }}
                  >
                    <Sparkles size={16} />
                    <span>Selesai & Evaluasi AI</span>
                  </button>
                )}
              </div>

              {/* Toggle Explanation Button if revealed (placed directly below the Selanjutnya/Nav bar) */}
              {revealedQuestions[currentQ.item.id] && (
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "0.75rem", marginBottom: "0.25rem" }}>
                  <button
                    onClick={() => toggleExpand(currentQ.item.id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#4f46e5",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      textDecoration: "underline",
                      padding: "0.25rem 0.5rem",
                    }}
                  >
                    {expandedExplanations[currentQ.item.id] !== false
                      ? "▲ Sembunyikan Pembahasan"
                      : "▼ Buka Pembahasan & Kunci"}
                  </button>
                </div>
              )}

              {/* Explanation Box if revealed and expanded */}
              {revealedQuestions[currentQ.item.id] && expandedExplanations[currentQ.item.id] !== false && (
                <>
                  {renderExplanationBox(currentQ.item)}

                  {/* Secondary Bottom Navigation if user scrolled to bottom of explanation */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "1rem",
                      paddingTop: "0.75rem",
                      borderTop: "1px dashed #e2e8f0",
                    }}
                  >
                    <button
                      onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                      disabled={currentQuestionIndex === 0}
                      className="btn btn-secondary"
                      style={{ fontSize: "0.82rem", padding: "0.4rem 0.8rem", opacity: currentQuestionIndex === 0 ? 0.4 : 1 }}
                    >
                      <ChevronLeft size={14} />
                      <span>Sebelumnya</span>
                    </button>

                    {currentQuestionIndex < totalQuestions - 1 ? (
                      <button
                        type="button"
                        onClick={() => setCurrentQuestionIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                        className="btn btn-primary"
                        style={{ fontSize: "0.82rem", padding: "0.4rem 0.8rem" }}
                      >
                        <span>Selanjutnya</span>
                        <ChevronRight size={14} />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setIsAiModalOpen(true)}
                        className="btn btn-primary"
                        style={{ background: "#7c3aed", borderColor: "#7c3aed", fontSize: "0.82rem", padding: "0.4rem 0.8rem" }}
                      >
                        <Sparkles size={14} />
                        <span>Selesai</span>
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* ================================================================================= */}
        {/* MODE BELAJAR (DAFTAR SELURUH SOAL & PEMBAHASAN LENGKAP)                            */}
        {/* ================================================================================= */}
        {activeTab === "study" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Section Filter Pills */}
            <div className="card shadow-sm" style={{ padding: "0.85rem 1.25rem", borderRadius: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", overflowX: "auto", paddingBottom: "0.25rem" }}>
                <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#64748b", whiteSpace: "nowrap" }}>
                  Filter Seksi:
                </span>
                <button
                  onClick={() => setSelectedSection("ALL")}
                  className={"btn " + (selectedSection === "ALL" ? "btn-primary" : "btn-ghost")}
                  style={{ fontSize: "0.78rem", padding: "0.3rem 0.65rem", borderRadius: "9999px", whiteSpace: "nowrap" }}
                >
                  Semua Seksi ({currentExamData.sections.length})
                </button>
                {currentExamData.sections.map((sec) => (
                  <button
                    key={sec.section}
                    onClick={() => setSelectedSection(sec.section)}
                    className={"btn " + (selectedSection === sec.section ? "btn-primary" : "btn-ghost")}
                    style={{ fontSize: "0.78rem", padding: "0.3rem 0.65rem", borderRadius: "9999px", whiteSpace: "nowrap" }}
                  >
                    Bagian {sec.section}: {sec.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Sections Accordion / Cards List */}
            {filteredSections.map((sec) => {
              return (
                <div
                  key={sec.section}
                  className="card shadow-sm"
                  style={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid #e2e8f0",
                    background: "#ffffff",
                  }}
                >
                  {/* Section Header Bar */}
                  <div
                    style={{
                      background: "#f8faff",
                      padding: "1rem 1.25rem",
                      borderBottom: "1px solid #e2e8f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.2rem" }}>
                        <span className="badge badge-indigo" style={{ fontSize: "0.8rem" }}>
                          Bagian {sec.section}
                        </span>
                        <h3 style={{ fontSize: "1.1rem", fontWeight: 800, margin: 0, color: "#1e1b4b" }}>
                          {sec.title}
                        </h3>
                        {sec.titleReading && (
                          <span style={{ fontSize: "0.82rem", color: "#64748b" }}>
                            ({sec.titleReading})
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: "0.85rem", color: "#475569" }}>
                        {sec.instruction && sec.instruction.segments ? (
                          <SegmentFurigana segments={sec.instruction.segments} />
                        ) : (
                          sec.instruction?.text || sec.title
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Reading / Grammar Passage if present */}
                  {"passage" in sec && sec.passage && (
                    <div style={{ padding: "1.25rem", background: "#fafaf9", borderBottom: "1px solid #e2e8f0" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.65rem" }}>
                        <BookOpen size={16} color="#d97706" />
                        <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#78350f" }}>
                          Wacana Bacaan (Reading Passage):
                        </span>
                      </div>
                      <div
                        style={{
                          background: "#ffffff",
                          padding: "1.25rem",
                          borderRadius: "12px",
                          border: "1px solid #fef3c7",
                          fontSize: "1.05rem",
                          lineHeight: 2.2,
                          color: "#1c1917",
                          boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
                        }}
                      >
                        <SegmentFurigana segments={sec.passage.segments} />
                      </div>
                    </div>
                  )}

                  {/* Section Specific Grammar Choice Bank (Exam 4 Sec 4) */}
                  {sec.type === "grammar-choice" && "choiceBank" in sec && (
                    <div style={{ padding: "1rem 1.25rem", background: "#f8faff", borderBottom: "1px solid #e2e8f0" }}>
                      <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#4338ca", marginBottom: "0.5rem" }}>
                        Daftar Pilihan Pola Kalimat (a〜d):
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.5rem" }}>
                        {sec.choiceBank.map((ch: any) => (
                          <div
                            key={ch.id}
                            style={{
                              background: "#ffffff",
                              padding: "0.45rem 0.75rem",
                              borderRadius: "8px",
                              border: "1px solid #c7d2fe",
                              fontSize: "0.88rem",
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                            }}
                          >
                            <span style={{ fontWeight: 800, color: "#4f46e5" }}>{ch.id}.</span>
                            <span>{ch.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Dialogue matching choices if present */}
                  {sec.type === "dialogue-matching" && "choices" in sec && (
                    <div style={{ padding: "1rem 1.25rem", background: "#f8faff", borderBottom: "1px solid #e2e8f0" }}>
                      <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#4338ca", marginBottom: "0.5rem" }}>
                        Pilihan Ekspresi Percakapan (a〜e):
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                        {sec.choices.map((ch) => (
                          <div
                            key={ch.id}
                            style={{
                              background: "#ffffff",
                              padding: "0.45rem 0.75rem",
                              borderRadius: "8px",
                              border: "1px solid #c7d2fe",
                              fontSize: "0.88rem",
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                            }}
                          >
                            <span style={{ fontWeight: 800, color: "#4f46e5" }}>{ch.id}.</span>
                            <SegmentFurigana segments={ch.content.segments} />
                            <span style={{ fontSize: "0.75rem", color: "#64748b" }}>({ch.meaningId})</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Items List */}
                  <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {sec.items.map((item, itemIdx) => {
                      return (
                        <div
                          key={item.id}
                          className="card shadow-sm card-responsive-padding"
                          style={{
                            padding: "1.5rem",
                            borderLeft: "4px solid #4f46e5",
                            borderRadius: "14px",
                            background: "#ffffff",
                            borderTop: "1px solid #e2e8f0",
                            borderRight: "1px solid #e2e8f0",
                            borderBottom: "1px solid #e2e8f0",
                          }}
                        >
                          {/* Question Number & Tags */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              marginBottom: "1rem",
                              borderBottom: "1px solid #f1f5f9",
                              paddingBottom: "0.65rem",
                              flexWrap: "wrap",
                              gap: "0.5rem",
                            }}
                          >
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  width: "28px",
                                  height: "28px",
                                  borderRadius: "8px",
                                  background: "#4f46e5",
                                  color: "#ffffff",
                                  fontSize: "0.85rem",
                                  fontWeight: 800,
                                }}
                              >
                                {itemIdx + 1}
                              </span>
                            </div>
                          </div>

                          {/* Context */}
                          {"context" in item && renderContextBox(item.context)}

                          {/* Visual */}
                          {"visual" in item && renderVisualBox(item.visual)}

                          {/* Base verb if present (Exam 4 Sec 4) */}
                          {"base" in item && item.base && (
                            <div style={{ marginBottom: "0.85rem" }}>
                              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#64748b", marginBottom: "0.25rem" }}>
                                Bentuk Dasar Kata Kerja:
                              </div>
                              <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "#4f46e5" }}>
                                <SegmentFurigana segments={item.base.segments} />
                              </div>
                            </div>
                          )}

                          {/* Question Sentence */}
                          {"question" in item && item.question && (
                            <div className="question-text-mobile" style={{ fontSize: "1.2rem", fontWeight: 600, lineHeight: 2.1, color: "#0f172a", marginBottom: "0.85rem" }}>
                              <SegmentFurigana segments={item.question.segments} />
                            </div>
                          )}

                          {/* Dialogue items */}
                          {"dialogue" in item && item.dialogue && (
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "0.85rem" }}>
                              {item.dialogue.map((turn: any, tIdx: number) => (
                                <div key={tIdx} style={{ fontSize: "1.08rem", lineHeight: 2, color: turn.speaker === "客" || turn.speaker === "A" ? "#0369a1" : "#1e293b" }}>
                                  <strong style={{ marginRight: "0.4rem" }}>{turn.speaker}:</strong>
                                  <SegmentFurigana segments={turn.content.segments} />
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Reading statement */}
                          {"statement" in item && item.statement && (
                            <div className="question-text-mobile" style={{ fontSize: "1.2rem", fontWeight: 600, lineHeight: 2.1, color: "#0f172a", marginBottom: "0.85rem" }}>
                              <SegmentFurigana segments={item.statement.segments} />
                            </div>
                          )}

                          {/* Toggle Explanation Button */}
                          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "0.5rem", marginBottom: "0.25rem" }}>
                            <button
                              onClick={() => toggleExpand(item.id)}
                              style={{
                                background: "none",
                                border: "none",
                                color: "#4f46e5",
                                fontSize: "0.82rem",
                                fontWeight: 600,
                                cursor: "pointer",
                                textDecoration: "underline",
                              }}
                            >
                              {expandedExplanations[item.id] !== false
                                ? "▲ Sembunyikan Pembahasan"
                                : "▼ Buka Pembahasan & Kunci"}
                            </button>
                          </div>

                          {/* Explanation Box */}
                          {expandedExplanations[item.id] !== false && renderExplanationBox(item)}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* ========================================================================= */}
      {/* DRAWER: DAFTAR NOMOR SOAL                                                 */}
      {/* ========================================================================= */}
      {isDrawerOpen && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 100, display: "flex" }}>
          <div
            onClick={() => setIsDrawerOpen(false)}
            style={{ flex: 1, background: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(4px)" }}
          />

          <div
            className="card shadow-lg"
            style={{
              width: "100%",
              maxWidth: "360px",
              background: "#ffffff",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: 0,
              borderLeft: "1px solid #e2e8f0",
              overflow: "hidden",
            }}
          >
            {/* Drawer Header */}
            <div
              style={{
                padding: "1.25rem",
                borderBottom: "1px solid #e2e8f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#f8fafc",
              }}
            >
              <div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, margin: 0, color: "#0f172a" }}>
                  Daftar Soal Ujian (1 - {totalQuestions})
                </h3>
                <span style={{ fontSize: "0.78rem", color: "#64748b" }}>
                  Terjawab: {answeredCount} dari {totalQuestions}
                </span>
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="btn btn-ghost"
                style={{ padding: "0.4rem", borderRadius: "8px" }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Drawer Content */}
            <div style={{ flex: 1, overflowY: "auto", padding: "1.25rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.5rem" }}>
                {allExamQuestions.map((q) => {
                  const isCurrent = q.questionNumber - 1 === currentQuestionIndex;
                  const uAns = userAnswers[q.item.id];
                  const isAnswered =
                    uAns !== undefined &&
                    uAns !== "" &&
                    (Array.isArray(uAns)
                      ? uAns.some((v: any) => v && String(v).trim() !== "")
                      : typeof uAns === "object" && uAns !== null
                      ? Object.values(uAns).some((v: any) => v && String(v).trim() !== "")
                      : true);

                  let bg = "#ffffff";
                  let border = "#cbd5e1";
                  let color = "#334155";

                  if (isCurrent) {
                    bg = "#4f46e5";
                    border = "#4f46e5";
                    color = "#ffffff";
                  } else if (isAnswered) {
                    bg = "#ecfdf5";
                    border = "#10b981";
                    color = "#065f46";
                  }

                  return (
                    <button
                      key={q.item.id}
                      onClick={() => {
                        setCurrentQuestionIndex(q.questionNumber - 1);
                        setIsDrawerOpen(false);
                      }}
                      style={{
                        padding: "0.65rem 0.25rem",
                        borderRadius: "10px",
                        border: "1.5px solid " + border,
                        background: bg,
                        color: color,
                        fontWeight: 700,
                        fontSize: "0.92rem",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.15rem",
                        transition: "all 0.15s ease",
                      }}
                    >
                      <span>{q.questionNumber}</span>
                      <span style={{ fontSize: "0.62rem", opacity: 0.8 }}>
                        B{q.section.section}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drawer Footer */}
            <div style={{ padding: "1rem 1.25rem", borderTop: "1px solid #e2e8f0", background: "#f8fafc" }}>
              <button
                onClick={() => {
                  setIsDrawerOpen(false);
                  setIsAiModalOpen(true);
                }}
                className="btn btn-primary"
                style={{ width: "100%", borderRadius: "10px", background: "#7c3aed", borderColor: "#7c3aed", gap: "0.4rem" }}
              >
                <Sparkles size={16} />
                <span>Buka Verifikasi AI Terpadu</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: VERIFIKASI JAWABAN AI TERPADU                                      */}
      {/* ========================================================================= */}
      {isAiModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 110,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            background: "rgba(15, 23, 42, 0.7)",
            backdropFilter: "blur(6px)",
          }}
        >
          <div
            className="card shadow-2xl animate-scale-up"
            style={{
              width: "100%",
              maxWidth: "680px",
              maxHeight: "90vh",
              background: "#ffffff",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                background: "linear-gradient(135deg, #6b21a8 0%, #7c3aed 100%)",
                color: "#ffffff",
                padding: "1.25rem 1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                <Sparkles size={22} color="#f5d0fe" />
                <div>
                  <h3 style={{ margin: 0, fontSize: "1.15rem", fontWeight: 800 }}>
                    Evaluasi & Verifikasi AI Terpadu
                  </h3>
                  <div style={{ fontSize: "0.78rem", color: "#e9d5ff" }}>
                    {currentExamData.exam.title}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsAiModalOpen(false)}
                className="btn btn-ghost"
                style={{ padding: "0.35rem", color: "#ffffff", borderRadius: "8px" }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: "1.5rem", overflowY: "auto", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Mode Selection Tabs */}
              <div>
                <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "0.5rem" }}>
                  Pilih Cara Pengujian Jawaban Anda:
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  <button
                    type="button"
                    onClick={() => setAiMode("web")}
                    style={{
                      padding: "0.85rem 1rem",
                      borderRadius: "12px",
                      border: "2px solid " + (aiMode === "web" ? "#7c3aed" : "#e2e8f0"),
                      background: aiMode === "web" ? "#faf5ff" : "#ffffff",
                      color: aiMode === "web" ? "#581c87" : "#475569",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.4rem",
                      cursor: "pointer",
                      textAlign: "center",
                    }}
                  >
                    <PenTool size={20} color={aiMode === "web" ? "#7c3aed" : "#94a3b8"} />
                    <strong style={{ fontSize: "0.88rem" }}>Jawaban di Website</strong>
                    <span style={{ fontSize: "0.72rem", color: "#64748b" }}>
                      Otomatis merangkum ketikan Anda
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAiMode("photo")}
                    style={{
                      padding: "0.85rem 1rem",
                      borderRadius: "12px",
                      border: "2px solid " + (aiMode === "photo" ? "#7c3aed" : "#e2e8f0"),
                      background: aiMode === "photo" ? "#faf5ff" : "#ffffff",
                      color: aiMode === "photo" ? "#581c87" : "#475569",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.4rem",
                      cursor: "pointer",
                      textAlign: "center",
                    }}
                  >
                    <Camera size={20} color={aiMode === "photo" ? "#7c3aed" : "#94a3b8"} />
                    <strong style={{ fontSize: "0.88rem" }}>Jawaban di Buku (Foto)</strong>
                    <span style={{ fontSize: "0.72rem", color: "#64748b" }}>
                      Kirim foto lembar ke AI dengan prompt ini
                    </span>
                  </button>
                </div>
              </div>

              {/* Instruction description */}
              <div style={{ padding: "0.85rem 1rem", background: "#f8fafc", borderRadius: "10px", border: "1px solid #e2e8f0", fontSize: "0.85rem", color: "#475569" }}>
                {aiMode === "web" ? (
                  <span>
                    💡 <strong>Cara pakai:</strong> Salin prompt di bawah, buka ChatGPT / Claude / Gemini, lalu paste. AI akan mengevaluasi akurasi tata bahasa dan kealamian kalimat Anda.
                  </span>
                ) : (
                  <span>
                    📸 <strong>Cara pakai:</strong> Foto halaman jawaban tulisan tangan Anda, buka aplikasi AI (ChatGPT / Gemini / Claude), unggah fotonya lalu lampirkan prompt di bawah ini!
                  </span>
                )}
              </div>

              {/* Prompt Text Preview Box */}
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                  <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#334155" }}>
                    Prompt AI yang Sudah Diformat Siap Pakai:
                  </span>
                  <button
                    onClick={() => handleCopyPrompt(unifiedPromptText)}
                    className="btn btn-primary"
                    style={{
                      padding: "0.35rem 0.75rem",
                      fontSize: "0.78rem",
                      borderRadius: "8px",
                      background: copiedPromptSection === "unified" ? "#10b981" : "#7c3aed",
                      borderColor: copiedPromptSection === "unified" ? "#10b981" : "#7c3aed",
                      gap: "0.3rem",
                    }}
                  >
                    {copiedPromptSection === "unified" ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copiedPromptSection === "unified" ? "Tersalin!" : "Salin Prompt"}</span>
                  </button>
                </div>

                <textarea
                  readOnly
                  value={unifiedPromptText}
                  rows={8}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "10px",
                    border: "1px solid #cbd5e1",
                    background: "#f8fafc",
                    fontSize: "0.82rem",
                    fontFamily: "monospace",
                    lineHeight: 1.5,
                    resize: "vertical",
                  }}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div
              style={{
                padding: "1rem 1.5rem",
                borderTop: "1px solid #e2e8f0",
                background: "#f8fafc",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "0.65rem",
              }}
            >
              <button
                onClick={() => setIsAiModalOpen(false)}
                className="btn btn-ghost"
                style={{ fontSize: "0.85rem", padding: "0.45rem 1rem" }}
              >
                Tutup
              </button>
              <button
                onClick={() => handleCopyPrompt(unifiedPromptText)}
                className="btn btn-primary"
                style={{
                  fontSize: "0.85rem",
                  padding: "0.45rem 1.25rem",
                  borderRadius: "10px",
                  background: copiedPromptSection === "unified" ? "#10b981" : "#7c3aed",
                  borderColor: copiedPromptSection === "unified" ? "#10b981" : "#7c3aed",
                  gap: "0.4rem",
                }}
              >
                {copiedPromptSection === "unified" ? <Check size={15} /> : <Copy size={15} />}
                <span>{copiedPromptSection === "unified" ? "Berhasil Disalin!" : "Salin Prompt ke Clipboard"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
