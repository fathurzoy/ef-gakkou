import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { situasiPages } from '../../data/situasiData';
import {
  ArrowLeft,
  Volume2,
  Copy,
  Check,
  Search,
  Eye,
  EyeOff,
  Sparkles,
  BookOpen,
  HelpCircle,
  ChevronUp,
  BookmarkCheck,
  Layers,
  Lightbulb,
  X,
  Compass,
  MessageCircle,
  BookMarked,
} from 'lucide-react';

interface SituasiStudyViewProps {
  onBackToSourceSelect?: () => void;
}

export const SituasiStudyView: React.FC<SituasiStudyViewProps> = ({ onBackToSourceSelect }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  // Page selector: 'ALL' | 1 | 2 (synced with URL ?page=)
  const [selectedPage, setSelectedPage] = useState<'ALL' | 1 | 2>(() => {
    const pageParam = searchParams.get('page');
    if (pageParam === '1') return 1;
    if (pageParam === '2') return 2;
    return 'ALL';
  });

  // Tab view: 'situations' | 'quickRef' (synced with URL pathname)
  const isQuickRefRoute = location.pathname.endsWith('/quick-ref');
  const [activeTab, setActiveTab] = useState<'situations' | 'quickRef'>(
    isQuickRefRoute ? 'quickRef' : 'situations'
  );

  // Keep activeTab synced if location changes
  useEffect(() => {
    if (location.pathname.endsWith('/quick-ref')) {
      setActiveTab('quickRef');
    } else {
      setActiveTab('situations');
    }
  }, [location.pathname]);

  // Keep selectedPage synced if URL search params change
  useEffect(() => {
    const pageParam = searchParams.get('page');
    if (pageParam === '1') setSelectedPage(1);
    else if (pageParam === '2') setSelectedPage(2);
    else setSelectedPage('ALL');
  }, [searchParams]);

  const handleBack = () => {
    if (onBackToSourceSelect) {
      onBackToSourceSelect();
    }
    navigate('/');
  };

  const handleSelectTab = (tab: 'situations' | 'quickRef') => {
    setActiveTab(tab);
    const search = location.search;
    if (tab === 'quickRef') {
      navigate('/situasi/quick-ref' + search);
    } else {
      navigate('/situasi' + search);
    }
  };

  const handleSelectPage = (page: 'ALL' | 1 | 2) => {
    setSelectedPage(page);
    const newParams = new URLSearchParams(searchParams);
    if (page === 'ALL') {
      newParams.delete('page');
    } else {
      newParams.set('page', String(page));
    }
    setSearchParams(newParams, { replace: true });
  };
  
  // Category filter ('ALL' or category name)
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  
  // Search query
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Study helpers toggle
  const [showReading, setShowReading] = useState<boolean>(true);
  const [showMeaning, setShowMeaning] = useState<boolean>(true);
  const [selfTestMode, setSelfTestMode] = useState<boolean>(false);
  const [revealedItems, setRevealedItems] = useState<Record<string, boolean>>({});

  // Audio / Copy states
  const [playingKey, setPlayingKey] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // TTS Speech Synthesis
  const playJapaneseAudio = (text: string, key: string) => {
    if (!('speechSynthesis' in window)) {
      alert('Maaf, fitur suara tidak didukung oleh browser Anda.');
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.88; // Slightly slower for better learner comprehension

    utterance.onstart = () => setPlayingKey(key);
    utterance.onend = () => setPlayingKey(null);
    utterance.onerror = () => setPlayingKey(null);

    window.speechSynthesis.speak(utterance);
  };

  // Copy to clipboard
  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 1800);
  };

  // Toggle reveal for self-test mode
  const toggleReveal = (key: string) => {
    setRevealedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Filtered pages according to selectedPage
  const activePages = useMemo(() => {
    if (selectedPage === 'ALL') return situasiPages;
    return situasiPages.filter((p) => p.page === selectedPage);
  }, [selectedPage]);

  // List of all unique categories in current active pages
  const availableCategories = useMemo(() => {
    const list: { category: string; count: number; pageNum: number }[] = [];
    activePages.forEach((p) => {
      p.entries.forEach((e) => {
        list.push({
          category: e.category,
          count: e.situations.length,
          pageNum: p.page,
        });
      });
    });
    return list;
  }, [activePages]);

  // Filtered categories and situations
  const filteredPageEntries = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return activePages.map((pageData) => {
      const filteredEntries = pageData.entries
        .filter((entry) => {
          if (selectedCategory !== 'ALL' && entry.category !== selectedCategory) {
            return false;
          }
          return true;
        })
        .map((entry) => {
          if (!query) return entry;

          const catMatch =
            entry.category.toLowerCase().includes(query) ||
            (entry.pattern && entry.pattern.toLowerCase().includes(query)) ||
            (entry.meaning && entry.meaning.toLowerCase().includes(query)) ||
            (entry.focus && entry.focus.some((f) => f.toLowerCase().includes(query)));

          const matchedSituations = entry.situations.filter((sit) => {
            return (
              catMatch ||
              sit.imageDescription.toLowerCase().includes(query) ||
              sit.why.toLowerCase().includes(query) ||
              sit.japanese.toLowerCase().includes(query) ||
              sit.reading.toLowerCase().includes(query) ||
              sit.meaning.toLowerCase().includes(query) ||
              (sit.response && sit.response.toLowerCase().includes(query)) ||
              (sit.responseReading && sit.responseReading.toLowerCase().includes(query)) ||
              (sit.responseMeaning && sit.responseMeaning.toLowerCase().includes(query))
            );
          });

          return {
            ...entry,
            situations: matchedSituations,
          };
        })
        .filter((entry) => entry.situations.length > 0);

      return {
        ...pageData,
        entries: filteredEntries,
      };
    }).filter((p) => p.entries.length > 0);
  }, [activePages, selectedCategory, searchQuery]);

  // Total count of matching situations
  const totalMatchingSituations = useMemo(() => {
    return filteredPageEntries.reduce(
      (sum, p) => sum + p.entries.reduce((s, e) => s + e.situations.length, 0),
      0
    );
  }, [filteredPageEntries]);

  // Filtered Quick Reference
  const filteredQuickRef = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const allQuickRefs = activePages.flatMap((p) =>
      p.quickReference.map((item) => ({ ...item, pageNum: p.page }))
    );

    if (!query) return allQuickRefs;
    return allQuickRefs.filter((item) => {
      return (
        item.condition.toLowerCase().includes(query) ||
        item.use.toLowerCase().includes(query) ||
        item.example.toLowerCase().includes(query) ||
        item.meaning.toLowerCase().includes(query)
      );
    });
  }, [activePages, searchQuery]);

  return (
    <div className="situasi-study-page" style={{ minHeight: '100vh', background: '#f8fafc', color: '#0f172a' }}>
      {/* Top Sticky Header */}
      <header
        className="app-header"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #e2e8f0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
        }}
      >
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            padding: '0.75rem 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
          }}
        >
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="btn"
            style={{
              background: '#f1f5f9',
              color: '#334155',
              border: '1px solid #cbd5e1',
              padding: '0.5rem 0.85rem',
              borderRadius: '10px',
              fontSize: '0.85rem',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <ArrowLeft size={16} />
            <span className="hide-on-mobile">Portal Pilihan</span>
          </button>

          {/* Title in Header */}
          <div style={{ textAlign: 'center', flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: '1rem',
                fontWeight: 800,
                color: '#065f46',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              <Compass size={18} color="#059669" />
              <span>場面で覚える日本語</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>
              Belajar Situasi, Kondisi & Respons (Bagian 1 & 2)
            </div>
          </div>

          {/* Tab Selector Pill in Header */}
          <div
            style={{
              display: 'flex',
              background: '#e2e8f0',
              padding: '3px',
              borderRadius: '10px',
              flexShrink: 0,
            }}
          >
            <button
              onClick={() => handleSelectTab('situations')}
              style={{
                background: activeTab === 'situations' ? '#ffffff' : 'transparent',
                color: activeTab === 'situations' ? '#065f46' : '#64748b',
                fontWeight: activeTab === 'situations' ? 800 : 600,
                border: 'none',
                borderRadius: '8px',
                padding: '0.4rem 0.75rem',
                fontSize: '0.78rem',
                cursor: 'pointer',
                boxShadow: activeTab === 'situations' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                transition: 'all 0.15s ease',
              }}
            >
              <BookOpen size={14} />
              <span>Situasi</span>
            </button>
            <button
              onClick={() => handleSelectTab('quickRef')}
              style={{
                background: activeTab === 'quickRef' ? '#ffffff' : 'transparent',
                color: activeTab === 'quickRef' ? '#065f46' : '#64748b',
                fontWeight: activeTab === 'quickRef' ? 800 : 600,
                border: 'none',
                borderRadius: '8px',
                padding: '0.4rem 0.75rem',
                fontSize: '0.78rem',
                cursor: 'pointer',
                boxShadow: activeTab === 'quickRef' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                transition: 'all 0.15s ease',
              }}
            >
              <BookmarkCheck size={14} />
              <span>Quick Ref</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main style={{ maxWidth: '1080px', margin: '0 auto', padding: '1.25rem 1rem 4rem 1rem' }}>
        
        {/* Banner Hero */}
        <div
          style={{
            background: 'linear-gradient(135deg, #065f46 0%, #0d9488 100%)',
            borderRadius: '20px',
            padding: '1.75rem 1.25rem',
            color: '#ffffff',
            boxShadow: '0 10px 25px -5px rgba(5, 150, 105, 0.25)',
            marginBottom: '1.25rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              right: '-20px',
              bottom: '-25px',
              fontSize: '7rem',
              fontWeight: 900,
              color: 'rgba(255, 255, 255, 0.07)',
              userSelect: 'none',
              lineHeight: 1,
              fontFamily: 'var(--font-jp)',
            }}
          >
            場面
          </div>

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '820px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 700,
                marginBottom: '0.75rem',
              }}
            >
              <Sparkles size={14} />
              <span>Materi Baca Situasi, Pola Kalimat & Respons Percakapan</span>
            </div>

            <h1
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                lineHeight: 1.3,
                marginBottom: '0.5rem',
                letterSpacing: '-0.01em',
              }}
            >
              場面で覚える日本語 — 状況を見て、どう言う？
            </h1>

            <p
              style={{
                fontSize: '0.9rem',
                lineHeight: 1.55,
                color: '#e6fffa',
                marginBottom: '0.75rem',
              }}
            >
              Melihat kondisi nyata lalu memahami pola kalimat Jepang yang tepat, termasuk kalimat respons percakapan, ungkapan cuaca, gerakan tubuh, dan aturan larangan.
            </p>

            {/* Page Filter Tabs (Bagian 1 vs Bagian 2 vs Semua) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
              <button
                onClick={() => {
                  handleSelectPage('ALL');
                  setSelectedCategory('ALL');
                }}
                style={{
                  background: selectedPage === 'ALL' ? '#ffffff' : 'rgba(255, 255, 255, 0.18)',
                  color: selectedPage === 'ALL' ? '#065f46' : '#ffffff',
                  fontWeight: selectedPage === 'ALL' ? 800 : 600,
                  border: 'none',
                  borderRadius: '10px',
                  padding: '0.4rem 0.85rem',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  transition: 'all 0.15s ease',
                }}
              >
                <Layers size={14} />
                <span>Semua Materi (67 Situasi)</span>
              </button>

              <button
                onClick={() => {
                  handleSelectPage(1);
                  setSelectedCategory('ALL');
                }}
                style={{
                  background: selectedPage === 1 ? '#ffffff' : 'rgba(255, 255, 255, 0.18)',
                  color: selectedPage === 1 ? '#065f46' : '#ffffff',
                  fontWeight: selectedPage === 1 ? 800 : 600,
                  border: 'none',
                  borderRadius: '10px',
                  padding: '0.4rem 0.85rem',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  transition: 'all 0.15s ease',
                }}
              >
                <BookMarked size={14} />
                <span>Bagian 1: Pola & Konteks Dasar (29)</span>
              </button>

              <button
                onClick={() => {
                  handleSelectPage(2);
                  setSelectedCategory('ALL');
                }}
                style={{
                  background: selectedPage === 2 ? '#ffffff' : 'rgba(255, 255, 255, 0.18)',
                  color: selectedPage === 2 ? '#065f46' : '#ffffff',
                  fontWeight: selectedPage === 2 ? 800 : 600,
                  border: 'none',
                  borderRadius: '10px',
                  padding: '0.4rem 0.85rem',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  transition: 'all 0.15s ease',
                }}
              >
                <MessageCircle size={14} />
                <span>Bagian 2: Kondisi & Respons (38)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Toolbar: Search, Filters & Study Helpers */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '1rem',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
            marginBottom: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
          }}
        >
          {/* Search Box */}
          <div style={{ position: 'relative' }}>
            <Search
              size={18}
              color="#94a3b8"
              style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari pola kalimat, situasi, respons, kata kunci Jepang / Indonesia..."
              style={{
                width: '100%',
                padding: '0.65rem 2.25rem 0.65rem 2.5rem',
                borderRadius: '12px',
                border: '1px solid #cbd5e1',
                fontSize: '0.9rem',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s',
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4px',
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Toggle Switches (Mobile-friendly pills) */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.5rem',
              paddingTop: '0.25rem',
              borderTop: '1px solid #f1f5f9',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
              {/* Toggle Reading */}
              <button
                onClick={() => setShowReading((v) => !v)}
                style={{
                  padding: '0.4rem 0.75rem',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  borderRadius: '9999px',
                  border: showReading ? '1px solid #a7f3d0' : '1px solid #e2e8f0',
                  background: showReading ? '#ecfdf5' : '#f8fafc',
                  color: showReading ? '#065f46' : '#64748b',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                {showReading ? <Eye size={14} /> : <EyeOff size={14} />}
                <span>Cara Baca (Hiragana)</span>
              </button>

              {/* Toggle Meaning */}
              <button
                onClick={() => setShowMeaning((v) => !v)}
                style={{
                  padding: '0.4rem 0.75rem',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  borderRadius: '9999px',
                  border: showMeaning ? '1px solid #a7f3d0' : '1px solid #e2e8f0',
                  background: showMeaning ? '#ecfdf5' : '#f8fafc',
                  color: showMeaning ? '#065f46' : '#64748b',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                {showMeaning ? <Eye size={14} /> : <EyeOff size={14} />}
                <span>Arti Indonesia</span>
              </button>

              {/* Self Test Mode Toggle */}
              <button
                onClick={() => {
                  setSelfTestMode((v) => !v);
                  setRevealedItems({});
                }}
                style={{
                  padding: '0.4rem 0.75rem',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  borderRadius: '9999px',
                  border: selfTestMode ? '1px solid #fde68a' : '1px solid #e2e8f0',
                  background: selfTestMode ? '#fffbeb' : '#f8fafc',
                  color: selfTestMode ? '#b45309' : '#64748b',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
                title="Sembunyikan kalimat Jepang dan tebak pola terlebih dahulu!"
              >
                <Lightbulb size={14} />
                <span>Mode Uji Mandiri {selfTestMode ? 'Aktif' : ''}</span>
              </button>
            </div>

            {/* Quick stats indicator */}
            <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>
              {activeTab === 'situations' ? (
                <span>Menampilkan: <strong>{totalMatchingSituations}</strong> situasi</span>
              ) : (
                <span>Menampilkan: <strong>{filteredQuickRef.length}</strong> pola ringkas</span>
              )}
            </div>
          </div>

          {/* Category Pills (Only shown in 'situations' tab) */}
          {activeTab === 'situations' && (
            <div
              style={{
                display: 'flex',
                gap: '0.45rem',
                overflowX: 'auto',
                paddingBottom: '0.25rem',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
              }}
            >
              {/* All Category Pill */}
              <button
                onClick={() => setSelectedCategory('ALL')}
                style={{
                  flexShrink: 0,
                  padding: '0.45rem 0.85rem',
                  borderRadius: '10px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  border: selectedCategory === 'ALL' ? '1px solid #059669' : '1px solid #e2e8f0',
                  background: selectedCategory === 'ALL' ? '#059669' : '#f8fafc',
                  color: selectedCategory === 'ALL' ? '#ffffff' : '#334155',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <Layers size={13} />
                <span>Semua Kategori</span>
              </button>

              {/* Category Pills */}
              {availableCategories.map((item, idx) => {
                const isSelected = selectedCategory === item.category;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedCategory(item.category)}
                    style={{
                      flexShrink: 0,
                      padding: '0.45rem 0.85rem',
                      borderRadius: '10px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      border: isSelected ? '1px solid #059669' : '1px solid #e2e8f0',
                      background: isSelected ? '#059669' : '#f8fafc',
                      color: isSelected ? '#ffffff' : '#334155',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <span>{item.category}</span>
                    <span
                      style={{
                        marginLeft: '0.4rem',
                        fontSize: '0.7rem',
                        padding: '1px 6px',
                        borderRadius: '9999px',
                        background: isSelected ? 'rgba(255, 255, 255, 0.25)' : '#e2e8f0',
                        color: isSelected ? '#ffffff' : '#64748b',
                      }}
                    >
                      {item.count}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* TAB 1: SITUATIONS LIST */}
        {activeTab === 'situations' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {filteredPageEntries.length === 0 ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '3rem 1rem',
                  background: '#ffffff',
                  borderRadius: '16px',
                  border: '1px dashed #cbd5e1',
                  color: '#64748b',
                }}
              >
                <HelpCircle size={40} color="#94a3b8" style={{ marginBottom: '0.75rem' }} />
                <p style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>
                  Tidak ada situasi yang cocok dengan pencarian.
                </p>
                <p style={{ fontSize: '0.85rem' }}>Coba ubah kata kunci atau pilih kategori lain.</p>
              </div>
            ) : (
              filteredPageEntries.map((pageData) => (
                <div key={pageData.page} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                  {/* Page Divider Badge if showing ALL */}
                  {selectedPage === 'ALL' && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.5rem 0',
                        borderBottom: '2px solid #e2e8f0',
                      }}
                    >
                      <span
                        style={{
                          background: '#065f46',
                          color: '#ffffff',
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          padding: '0.25rem 0.75rem',
                          borderRadius: '8px',
                        }}
                      >
                        Bagian {pageData.page}
                      </span>
                      <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1e293b' }}>
                        {pageData.title}
                      </span>
                    </div>
                  )}

                  {pageData.entries.map((categoryGroup, catIndex) => (
                    <section
                      key={catIndex}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                      }}
                    >
                      {/* Category Header Card */}
                      <div
                        style={{
                          background: '#ffffff',
                          borderRadius: '16px',
                          padding: '1.15rem 1.25rem',
                          border: '1px solid #e2e8f0',
                          borderLeft: '5px solid #059669',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '0.75rem',
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              color: '#059669',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em',
                              marginBottom: '0.25rem',
                            }}
                          >
                            Bagian {pageData.page} ・ Kategori #{catIndex + 1}
                          </div>
                          <h2
                            style={{
                              fontSize: '1.2rem',
                              fontWeight: 800,
                              color: '#0f172a',
                              margin: 0,
                              lineHeight: 1.3,
                            }}
                          >
                            {categoryGroup.category}
                          </h2>
                          {categoryGroup.meaning && (
                            <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '0.25rem' }}>
                              {categoryGroup.meaning}
                            </div>
                          )}
                        </div>

                        {/* Pattern Badge or Focus Tags */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.35rem' }}>
                          {categoryGroup.pattern && (
                            <div
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                background: '#ecfdf5',
                                border: '1px solid #a7f3d0',
                                borderRadius: '10px',
                                padding: '0.35rem 0.75rem',
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: 'var(--font-jp)',
                                  fontSize: '0.98rem',
                                  fontWeight: 800,
                                  color: '#065f46',
                                }}
                              >
                                {categoryGroup.pattern}
                              </span>
                            </div>
                          )}

                          {categoryGroup.focus && (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                              {categoryGroup.focus.map((f, fIdx) => (
                                <span
                                  key={fIdx}
                                  style={{
                                    fontFamily: 'var(--font-jp)',
                                    fontSize: '0.78rem',
                                    fontWeight: 700,
                                    color: '#047857',
                                    background: '#ecfdf5',
                                    border: '1px solid #a7f3d0',
                                    borderRadius: '6px',
                                    padding: '2px 8px',
                                  }}
                                >
                                  {f}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Pattern Detail Formula Banner (if exists, e.g. Rules/Manners) */}
                      {categoryGroup.patternDetail && (
                        <div
                          style={{
                            background: '#f0fdf4',
                            border: '1px dashed #86efac',
                            borderRadius: '12px',
                            padding: '0.85rem 1rem',
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '0.5rem',
                          }}
                        >
                          <div>
                            <span
                              style={{
                                fontFamily: 'var(--font-jp)',
                                fontWeight: 800,
                                color: '#14532d',
                                fontSize: '0.95rem',
                                marginRight: '0.5rem',
                              }}
                            >
                              📌 Rumus: {categoryGroup.patternDetail.form}
                            </span>
                            <span style={{ fontSize: '0.84rem', color: '#166534', fontWeight: 600 }}>
                              ({categoryGroup.patternDetail.meaning})
                            </span>
                          </div>
                          <div style={{ fontSize: '0.82rem', color: '#15803d' }}>
                            Contoh: <strong style={{ fontFamily: 'var(--font-jp)' }}>{categoryGroup.patternDetail.example}</strong>{' '}
                            <em>({categoryGroup.patternDetail.exampleMeaning})</em>
                          </div>
                        </div>
                      )}

                      {/* Situations Grid inside Category */}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                          gap: '1rem',
                        }}
                      >
                        {categoryGroup.situations.map((sit, sitIndex) => {
                          const itemKey = `p${pageData.page}-${catIndex}-${sitIndex}`;
                          const responseKey = `p${pageData.page}-${catIndex}-${sitIndex}-resp`;
                          const isRevealed = revealedItems[itemKey];
                          const isHiddenForSelfTest = selfTestMode && !isRevealed;

                          return (
                            <div
                              key={sitIndex}
                              style={{
                                background: '#ffffff',
                                borderRadius: '16px',
                                border: '1px solid #e2e8f0',
                                padding: '1.25rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                                transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                              }}
                            >
                              {/* Top row: Situation Index + Action buttons */}
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  marginBottom: '0.85rem',
                                }}
                              >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                  <span
                                    style={{
                                      fontSize: '0.72rem',
                                      fontWeight: 800,
                                      background: '#f1f5f9',
                                      color: '#475569',
                                      padding: '2px 8px',
                                      borderRadius: '6px',
                                    }}
                                  >
                                    Situasi #{sitIndex + 1}
                                  </span>
                                  {sit.response && (
                                    <span
                                      style={{
                                        fontSize: '0.7rem',
                                        fontWeight: 700,
                                        background: '#e0f2fe',
                                        color: '#0369a1',
                                        padding: '2px 6px',
                                        borderRadius: '6px',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.2rem',
                                      }}
                                    >
                                      <MessageCircle size={11} />
                                      <span>+ Respons</span>
                                    </span>
                                  )}
                                </div>

                                {/* Audio & Copy Buttons for Main Sentence */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                  <button
                                    onClick={() => playJapaneseAudio(sit.japanese, itemKey)}
                                    title="Dengarkan pengucapan audio"
                                    style={{
                                      background: playingKey === itemKey ? '#ecfdf5' : '#f8fafc',
                                      color: playingKey === itemKey ? '#059669' : '#64748b',
                                      border: '1px solid',
                                      borderColor: playingKey === itemKey ? '#a7f3d0' : '#e2e8f0',
                                      borderRadius: '8px',
                                      width: '32px',
                                      height: '32px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      cursor: 'pointer',
                                      transition: 'all 0.15s ease',
                                    }}
                                  >
                                    <Volume2 size={16} />
                                  </button>

                                  <button
                                    onClick={() => handleCopy(sit.japanese, itemKey)}
                                    title="Salin kalimat Jepang"
                                    style={{
                                      background: copiedKey === itemKey ? '#ecfdf5' : '#f8fafc',
                                      color: copiedKey === itemKey ? '#059669' : '#64748b',
                                      border: '1px solid',
                                      borderColor: copiedKey === itemKey ? '#a7f3d0' : '#e2e8f0',
                                      borderRadius: '8px',
                                      width: '32px',
                                      height: '32px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      cursor: 'pointer',
                                      transition: 'all 0.15s ease',
                                    }}
                                  >
                                    {copiedKey === itemKey ? <Check size={16} /> : <Copy size={16} />}
                                  </button>
                                </div>
                              </div>

                              {/* Situation Context (Image description & Why) */}
                              <div
                                style={{
                                  background: '#f8fafc',
                                  border: '1px solid #e2e8f0',
                                  borderRadius: '12px',
                                  padding: '0.85rem 1rem',
                                  marginBottom: '1rem',
                                }}
                              >
                                <div
                                  style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '0.45rem',
                                    marginBottom: '0.4rem',
                                  }}
                                >
                                  <span style={{ fontSize: '1.05rem', lineHeight: 1 }}>🖼️</span>
                                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.4 }}>
                                    {sit.imageDescription}
                                  </div>
                                </div>

                                <div
                                  style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '0.45rem',
                                    paddingTop: '0.4rem',
                                    borderTop: '1px dashed #e2e8f0',
                                  }}
                                >
                                  <Lightbulb size={15} color="#d97706" style={{ flexShrink: 0, marginTop: '2px' }} />
                                  <div style={{ fontSize: '0.78rem', color: '#b45309', fontWeight: 600, lineHeight: 1.35 }}>
                                    {sit.why}
                                  </div>
                                </div>
                              </div>

                              {/* Japanese Statement Area */}
                              <div style={{ marginTop: 'auto' }}>
                                {isHiddenForSelfTest ? (
                                  <div
                                    onClick={() => toggleReveal(itemKey)}
                                    style={{
                                      background: '#fffbeb',
                                      border: '2px dashed #fcd34d',
                                      borderRadius: '12px',
                                      padding: '1.25rem 1rem',
                                      textAlign: 'center',
                                      cursor: 'pointer',
                                      marginBottom: '0.5rem',
                                    }}
                                  >
                                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#b45309', marginBottom: '0.25rem' }}>
                                      💡 Tebak Kalimat Jepang yang Cocok!
                                    </div>
                                    <div style={{ fontSize: '0.75rem', color: '#d97706' }}>
                                      Ketuk di sini untuk membuka jawaban
                                    </div>
                                  </div>
                                ) : (
                                  <div
                                    style={{
                                      background: '#ffffff',
                                      border: '1px solid #e2e8f0',
                                      borderRadius: '12px',
                                      padding: '0.9rem 1rem',
                                      marginBottom: '0.5rem',
                                    }}
                                  >
                                    {/* Japanese Text */}
                                    <div
                                      style={{
                                        fontFamily: 'var(--font-jp)',
                                        fontSize: '1.18rem',
                                        fontWeight: 700,
                                        color: '#0f172a',
                                        lineHeight: 1.5,
                                        marginBottom: showReading ? '0.35rem' : '0',
                                      }}
                                    >
                                      {sit.japanese}
                                    </div>

                                    {/* Reading (Hiragana) */}
                                    {showReading && (
                                      <div
                                        style={{
                                          fontFamily: 'var(--font-jp)',
                                          fontSize: '0.82rem',
                                          color: '#059669',
                                          fontWeight: 600,
                                          letterSpacing: '0.02em',
                                          lineHeight: 1.4,
                                          padding: '3px 6px',
                                          background: '#ecfdf5',
                                          borderRadius: '6px',
                                          display: 'inline-block',
                                        }}
                                      >
                                        {sit.reading}
                                      </div>
                                    )}
                                  </div>
                                )}

                                {/* Indonesian Meaning */}
                                {showMeaning && !isHiddenForSelfTest && (
                                  <div
                                    style={{
                                      fontSize: '0.84rem',
                                      color: '#334155',
                                      fontWeight: 600,
                                      lineHeight: 1.4,
                                      padding: '0.45rem 0.65rem',
                                      background: '#f8fafc',
                                      borderRadius: '8px',
                                      borderLeft: '3px solid #059669',
                                      marginBottom: sit.response ? '0.75rem' : '0',
                                    }}
                                  >
                                    {sit.meaning}
                                  </div>
                                )}

                                {/* Conversation Response Box (if present!) */}
                                {sit.response && !isHiddenForSelfTest && (
                                  <div
                                    style={{
                                      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                                      border: '1px solid #bae6fd',
                                      borderRadius: '12px',
                                      padding: '0.85rem 1rem',
                                      marginTop: '0.5rem',
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        marginBottom: '0.35rem',
                                      }}
                                    >
                                      <div
                                        style={{
                                          fontSize: '0.72rem',
                                          fontWeight: 800,
                                          color: '#0284c7',
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: '0.3rem',
                                        }}
                                      >
                                        <MessageCircle size={13} />
                                        <span>Respons / Balasan Lawan Bicara</span>
                                      </div>

                                      <button
                                        onClick={() => playJapaneseAudio(sit.response!, responseKey)}
                                        title="Dengarkan pengucapan respons"
                                        style={{
                                          background: playingKey === responseKey ? '#0284c7' : '#ffffff',
                                          color: playingKey === responseKey ? '#ffffff' : '#0284c7',
                                          border: '1px solid #bae6fd',
                                          borderRadius: '6px',
                                          width: '26px',
                                          height: '26px',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          cursor: 'pointer',
                                          transition: 'all 0.15s ease',
                                        }}
                                      >
                                        <Volume2 size={13} />
                                      </button>
                                    </div>

                                    {/* Japanese Response */}
                                    <div
                                      style={{
                                        fontFamily: 'var(--font-jp)',
                                        fontSize: '1.05rem',
                                        fontWeight: 700,
                                        color: '#0c4a6e',
                                        lineHeight: 1.4,
                                        marginBottom: showReading && sit.responseReading ? '0.25rem' : '0',
                                      }}
                                    >
                                      {sit.response}
                                    </div>

                                    {/* Response Hiragana Reading */}
                                    {showReading && sit.responseReading && (
                                      <div
                                        style={{
                                          fontFamily: 'var(--font-jp)',
                                          fontSize: '0.78rem',
                                          color: '#0369a1',
                                          fontWeight: 600,
                                          lineHeight: 1.35,
                                          marginBottom: '0.25rem',
                                        }}
                                      >
                                        {sit.responseReading}
                                      </div>
                                    )}

                                    {/* Response Meaning */}
                                    {showMeaning && sit.responseMeaning && (
                                      <div
                                        style={{
                                          fontSize: '0.8rem',
                                          color: '#075985',
                                          fontWeight: 600,
                                          fontStyle: 'italic',
                                          lineHeight: 1.35,
                                          paddingTop: '0.25rem',
                                          borderTop: '1px dashed #bae6fd',
                                        }}
                                      >
                                        "{sit.responseMeaning}"
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  ))}
                </div>
              ))
            )}
          </div>
        )}

        {/* TAB 2: QUICK REFERENCE CHEAT-SHEET */}
        {activeTab === 'quickRef' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '1.25rem',
                border: '1px solid #e2e8f0',
                borderLeft: '5px solid #059669',
              }}
            >
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>
                Ringkasan Cepat: Hubungan Kondisi & Pola Kalimat
              </h2>
              <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
                Gunakan tabel ini untuk mengingat kembali rumus pola kalimat berdasarkan kondisi yang ingin diungkapkan (Bagian 1 & 2).
              </p>
            </div>

            {/* Quick Ref Cards Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1rem',
              }}
            >
              {filteredQuickRef.map((item, qIdx) => {
                const qKey = `qref-${item.pageNum}-${qIdx}`;
                return (
                  <div
                    key={qIdx}
                    style={{
                      background: '#ffffff',
                      borderRadius: '16px',
                      border: '1px solid #e2e8f0',
                      padding: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                    }}
                  >
                    <div>
                      {/* Top row: Condition badge & Pattern */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '0.5rem',
                          marginBottom: '0.75rem',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <span
                            style={{
                              fontSize: '0.68rem',
                              fontWeight: 800,
                              background: '#f1f5f9',
                              color: '#64748b',
                              padding: '1px 6px',
                              borderRadius: '4px',
                            }}
                          >
                            B{item.pageNum}
                          </span>
                          <span
                            style={{
                              fontSize: '0.78rem',
                              fontWeight: 800,
                              color: '#065f46',
                              background: '#ecfdf5',
                              border: '1px solid #a7f3d0',
                              padding: '3px 10px',
                              borderRadius: '9999px',
                            }}
                          >
                            {item.condition}
                          </span>
                        </div>

                        <span
                          style={{
                            fontFamily: 'var(--font-jp)',
                            fontSize: '0.95rem',
                            fontWeight: 800,
                            color: '#0f172a',
                            background: '#f1f5f9',
                            padding: '3px 8px',
                            borderRadius: '8px',
                          }}
                        >
                          {item.use}
                        </span>
                      </div>

                      {/* Example Japanese sentence */}
                      <div
                        style={{
                          background: '#f8fafc',
                          borderRadius: '12px',
                          padding: '0.85rem 1rem',
                          border: '1px solid #e2e8f0',
                          marginBottom: '0.65rem',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '0.5rem',
                          }}
                        >
                          <div
                            style={{
                              fontFamily: 'var(--font-jp)',
                              fontSize: '1.08rem',
                              fontWeight: 700,
                              color: '#0f172a',
                              lineHeight: 1.4,
                            }}
                          >
                            {item.example}
                          </div>

                          <button
                            onClick={() => playJapaneseAudio(item.example, qKey)}
                            title="Dengarkan pengucapan audio"
                            style={{
                              background: playingKey === qKey ? '#ecfdf5' : '#ffffff',
                              color: playingKey === qKey ? '#059669' : '#64748b',
                              border: '1px solid #cbd5e1',
                              borderRadius: '8px',
                              width: '30px',
                              height: '30px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              flexShrink: 0,
                            }}
                          >
                            <Volume2 size={15} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Meaning */}
                    <div
                      style={{
                        fontSize: '0.84rem',
                        color: '#475569',
                        fontWeight: 600,
                        padding: '0.45rem 0.65rem',
                        background: '#f1f5f9',
                        borderRadius: '8px',
                        borderLeft: '3px solid #059669',
                      }}
                    >
                      {item.meaning}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: '#059669',
            color: '#ffffff',
            border: 'none',
            boxShadow: '0 4px 12px rgba(5, 150, 105, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 40,
            transition: 'transform 0.2s',
          }}
          title="Kembali ke atas"
        >
          <ChevronUp size={22} />
        </button>
      )}
    </div>
  );
};
