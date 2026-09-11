import React, { useState } from 'react';
import {
  Lightbulb,
  X,
  CheckCircle2,
} from 'lucide-react';

interface TipsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TipsModal: React.FC<TipsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'I' | 'II' | 'III' | 'IV'>('all');

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(15, 23, 42, 0.6)',
        backdropFilter: 'blur(6px)',
        padding: '1rem',
      }}
      onClick={onClose}
    >
      <div
        className="animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '680px',
          background: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            color: '#ffffff',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Lightbulb size={20} color="#ffffff" />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800 }}>
                Tips & Trik Lulus Ujian E-F
              </h3>
              <span style={{ fontSize: '0.78rem', color: '#fef3c7' }}>
                Panduan praktis mengerjakan 4 bagian soal dengan cepat dan akurat
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div
          style={{
            display: 'flex',
            overflowX: 'auto',
            padding: '0.65rem 1rem',
            gap: '0.4rem',
            borderBottom: '1px solid #e2e8f0',
            background: '#fffbeb',
          }}
        >
          <button
            onClick={() => setActiveTab('all')}
            className={`btn ${activeTab === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem', borderRadius: '9999px', whiteSpace: 'nowrap' }}
          >
            Semua Tips
          </button>
          <button
            onClick={() => setActiveTab('I')}
            className={`btn ${activeTab === 'I' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem', borderRadius: '9999px', whiteSpace: 'nowrap' }}
          >
            Bagian I: 文法語彙
          </button>
          <button
            onClick={() => setActiveTab('II')}
            className={`btn ${activeTab === 'II' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem', borderRadius: '9999px', whiteSpace: 'nowrap' }}
          >
            Bagian II: 読解
          </button>
          <button
            onClick={() => setActiveTab('III')}
            className={`btn ${activeTab === 'III' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem', borderRadius: '9999px', whiteSpace: 'nowrap' }}
          >
            Bagian III: 漢字
          </button>
          <button
            onClick={() => setActiveTab('IV')}
            className={`btn ${activeTab === 'IV' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem', borderRadius: '9999px', whiteSpace: 'nowrap' }}
          >
            Bagian IV: 記述
          </button>
        </div>

        {/* Modal Content */}
        <div style={{ padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Section I Tips */}
          {(activeTab === 'all' || activeTab === 'I') && (
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #fed7aa',
                borderRadius: '16px',
                padding: '1.25rem',
                boxShadow: '0 2px 8px rgba(245, 158, 11, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="badge badge-indigo">Bagian I (No. 1 ~ 22)</span>
                <strong style={{ fontSize: '1rem', color: '#9a3412' }}>Tata Bahasa & Kosakata (文法語彙)</strong>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <li style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.5, display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#f59e0b" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong>Kuasai Pasangan Kata Baku (Kolokasi)</strong>: Di soal ujian, sering muncul ungkapan tetap seperti <code>気をつける</code> (berhati-hati - Soal 10) dan <code>電話をかける</code> (menelepon - Soal 11). Jangan diartikan kata per kata.
                  </div>
                </li>
                <li style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.5, display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#f59e0b" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong>Pola Konjugasi V-masu (Stem)</strong>:
                    Pola <code>〜ながら</code> (sambil - Soal 3) wajib didahului stem kata kerja (<code>ききながら</code>). Begitu juga pola tujuan <code>〜に行く</code> (contoh: <code>見に行く</code> - Soal 54).
                  </div>
                </li>
                <li style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.5, display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#f59e0b" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong>Trik Keigo (Hormat vs Rendah Hati)</strong>:
                    Jika subjeknya adalah <em>diri sendiri</em> yang akan pergi/datang, gunakan <strong>Kenjougo</strong> yaitu <code>参る (まいります)</code> (Soal 21). Jika subjeknya orang lain/guru (Yamaguchi-sensei), gunakan <strong>Sonkeigo</strong> yaitu <code>いらっしゃる (いらっしゃいます)</code> (Soal 60).
                  </div>
                </li>
                <li style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.5, display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#f59e0b" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong>Jidoushi vs Tadoushi (Intransitif vs Transitif)</strong>:
                    Fenomena alam hujan reda menggunakan kata kerja otomatis: <code>雨がやむ (やみました)</code> (Soal 16). Bukan <em>やめる</em> karena <em>やめる</em> adalah berhenti sengaja dengan partikel <em>wo</em>.
                  </div>
                </li>
              </ul>
            </div>
          )}

          {/* Section II Tips */}
          {(activeTab === 'all' || activeTab === 'II') && (
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #bbf7d0',
                borderRadius: '16px',
                padding: '1.25rem',
                boxShadow: '0 2px 8px rgba(16, 185, 129, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="badge badge-emerald">Bagian II (No. 23 ~ 32)</span>
                <strong style={{ fontSize: '1rem', color: '#166534' }}>Pemahaman Bacaan (読解問題)</strong>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <li style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.5, display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong>Baca Pertanyaan Terlebih Dahulu (Scanning)</strong>:
                    Sebelum membaca wacana panjang, baca dulu apa yang ditanyakan (misal: kapan pergi? siapa yang membantu rumah?). Ini menghemat waktu hingga 50%!
                  </div>
                </li>
                <li style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.5, display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong>Waspadai Jebakan Urutan & Waktu</strong>:
                    Di Soal 29-30 (wawancara atlet Olimpiade), medali emas didapat pada Olimpiade <strong>ke-1</strong>. Kali ke-2 peringkat 6, kali ke-3 peringkat 8 namun merasa sangat puas. Pengecoh sering membalikkan tahun atau urutan medali.
                  </div>
                </li>
                <li style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.5, display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong>Cari Parafrasa Kalimat</strong>:
                    Kunci jawaban sering menggunakan sinonim. Contoh di wacana berita mobil (Soal 32): teks menyebut <code>中国での販売に力を入れています</code> (mencurahkan tenaga) yang di opsi diparafrasa menjadi <code>考えています</code> (memikirkan/fokus).
                  </div>
                </li>
              </ul>
            </div>
          )}

          {/* Section III Tips */}
          {(activeTab === 'all' || activeTab === 'III') && (
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #bfdbfe',
                borderRadius: '16px',
                padding: '1.25rem',
                boxShadow: '0 2px 8px rgba(59, 130, 246, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="badge badge-indigo">Bagian III (No. 33 ~ 52)</span>
                <strong style={{ fontSize: '1rem', color: '#1e40af' }}>Soal Kanji (漢字問題)</strong>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <li style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.5, display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#3b82f6" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong>Waspadai Kanji Mirip di Bagian A</strong>:
                    Perhatikan goresan tipis yang membedakan kanji bersaudara: <code>弟</code> (otouto) vs <code>兄</code> (ani); <code>走</code> (hashiru) vs <code>歩</code> (aruku); <code>体</code> (karada) vs <code>休</code> (yasumu).
                  </div>
                </li>
                <li style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.5, display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#3b82f6" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong>Hati-hati Perubahan Suara (Rendaku) di Bagian B</strong>:
                    Kanji <code>出口</code> dibaca <code>でぐち</code> (mengalami rendaku dari kuchi ke guchi, bukan <em>dekuchi</em>).
                  </div>
                </li>
                <li style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.5, display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#3b82f6" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong>Vokal Panjang (Chouon)</strong>:
                    Kanji <code>銀行</code> wajib ada huruf <em>う</em>: <code>ぎんこう</code> (bukan <em>ぎんこ</em>).
                  </div>
                </li>
              </ul>
            </div>
          )}

          {/* Section IV Tips */}
          {(activeTab === 'all' || activeTab === 'IV') && (
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #fecdd3',
                borderRadius: '16px',
                padding: '1.25rem',
                boxShadow: '0 2px 8px rgba(244, 63, 94, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="badge badge-rose">Bagian IV (No. 53 ~ 60)</span>
                <strong style={{ fontSize: '1rem', color: '#9f1239' }}>Menulis & Menyusun Kalimat (記述問題)</strong>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <li style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.5, display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#f43f5e" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong>Aturan Emas Urutan Kata (1 ➔ 2 ➔ 3)</strong>:
                    Di Bagian B (No. 56~60), tiga kata kunci yang diberikan <strong>wajib muncul secara berurutan</strong> dari kiri ke kanan. Anda tidak boleh menukar posisinya!
                  </div>
                </li>
                <li style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.5, display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#f43f5e" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong>Keinginan Orang Ketiga (〜たがる)</strong>:
                    Di Soal 58: untuk Tanaka-san (orang lain), tidak boleh menggunakan <em>〜たい</em>! Bentuk yang benar adalah <code>行きたがっていました</code>.
                  </div>
                </li>
                <li style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.5, display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#f43f5e" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong>Kata Kerja Memberi (Ageru vs Kureru)</strong>:
                    Di Soal 59: jika istri memberi dasi kepada saya (pembicara), kata kerja yang wajib digunakan adalah <code>くれる (くれた)</code>, bukan <em>あげる</em>.
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '1rem 1.5rem',
            borderTop: '1px solid #e2e8f0',
            background: '#f8fafc',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button
            onClick={onClose}
            className="btn btn-primary"
            style={{ padding: '0.6rem 1.25rem', borderRadius: '10px' }}
          >
            Mengerti & Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
