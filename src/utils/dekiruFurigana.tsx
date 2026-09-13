import React from 'react';
import { TextSegment } from '../types/dekiru';

// Comprehensive dictionary of Dekiru Nihongo Kanji words and readings (Shokyu / N5-N4)
export const DEKIRU_KANJI_DICT: Record<string, string> = {
  // Pronouns & Demonstratives
  '私': 'わたし',
  '僕': 'ぼく',
  '彼': 'かれ',
  '彼女': 'かのじょ',
  '何': 'なん',
  '誰': 'だれ',
  '何時': 'なんじ',
  '何人': 'なんにん',
  '何歳': 'なんさい',

  // Family
  '父': 'ちち',
  '母': 'はは',
  '兄': 'あに',
  '姉': 'あね',
  '弟': 'おとうと',
  '妹': 'いもうと',
  '両親': 'りょうしん',
  '家族': 'かぞく',
  '妻': 'つま',
  '夫': 'おっと',

  // People & Occupations
  '人': 'ひと',
  '学生': 'がくせい',
  '留学生': 'りゅうがくせい',
  '先生': 'せんせい',
  '会社員': 'かいしゃいん',
  '社員': 'しゃいん',
  '銀行員': 'ぎんこういん',
  '医者': 'いしゃ',
  '友達': 'ともだち',
  '子ども': 'こども',
  '子供': 'こども',
  '男': 'おとこ',
  '女': 'おんな',
  '方': 'かた',

  // Time expressions
  '今': 'いま',
  '時': 'じ',
  '分': 'ふん',
  '半': 'はん',
  '朝': 'あさ',
  '昼': 'ひる',
  '晩': 'ばん',
  '夜': 'よる',
  '今日': 'きょう',
  '明日': 'あした',
  '昨日': 'きのう',
  '毎日': 'まいにち',
  '毎朝': 'まいあさ',
  '毎晩': 'まいばん',
  '午前': 'ごぜん',
  '午後': 'ごご',
  '月曜日': 'げつようび',
  '火曜日': 'かようび',
  '水曜日': 'すいようび',
  '木曜日': 'もくようび',
  '金曜日': 'きんようび',
  '土曜日': 'どようび',
  '日曜日': 'にちようび',
  '週': 'しゅう',
  '今週': 'こんしゅう',
  '来週': 'らいしゅう',
  '先週': 'せんしゅう',
  '週間': 'しゅうかん',
  '月': 'つき',
  '今月': 'こんげつ',
  '来月': 'らいげつ',
  '先月': 'せんげつ',
  '年': 'とし',
  '今年': 'ことし',
  '来年': 'らいねん',
  '去年': 'きょねん',

  // Places & Directions
  '学校': 'がっこう',
  '大学': 'だいがく',
  '会社': 'かいしゃ',
  '病院': 'びょういん',
  '銀行': 'ぎんこう',
  '郵便局': 'ゆうびんきょく',
  '図書館': 'としょかん',
  '美術館': 'びじゅつかん',
  '駅': 'えき',
  '空港': 'くうこう',
  '部屋': 'へや',
  '教室': 'きょうしつ',
  '食堂': 'しょくどう',
  '喫茶店': 'きっさてん',
  '国': 'くに',
  'お国': 'おくに',
  '日本': 'にほん',
  '東京': 'とうきょう',
  '家': 'うち',
  '町': 'まち',
  '上': 'うえ',
  '下': 'した',
  '前': 'まえ',
  '後': 'うしろ',
  '後ろ': 'うしろ',
  '中': 'なか',
  '外': 'そと',
  '隣': 'となり',
  '近く': 'ちかく',
  '間': 'あいだ',
  '右': 'みぎ',
  '左': 'ひだり',
  '北': 'きた',
  '南': 'みなみ',
  '東': 'ひがし',
  '西': 'にし',

  // Objects & Food
  '本': 'ほん',
  '辞書': 'じしょ',
  '雑誌': 'ざっし',
  '新聞': 'しんぶん',
  '手紙': 'てがみ',
  '車': 'くるま',
  '自転車': 'じてんしゃ',
  '電車': 'でんしゃ',
  '飛行機': 'ひこうき',
  '時計': 'とけい',
  '傘': 'かさ',
  '靴': 'くつ',
  '服': 'ふく',
  '写真': 'しゃしん',
  '机': 'つくえ',
  '椅子': 'いす',
  '水': 'みず',
  'お茶': 'おちゃ',
  '魚': 'さかな',
  '肉': 'にく',
  '卵': 'たまご',
  '野菜': 'やさい',
  '果物': 'くだもの',
  '料理': 'りょうり',
  '趣味': 'しゅみ',
  '読書': 'どくしょ',
  '旅行': 'りょこう',
  '音楽': 'おんがく',
  '映画': 'えいが',
  '仕事': 'しごと',
  '勉強': 'べんきょう',
  '宿題': 'しゅくだい',

  // Counters
  '枚': 'まい',
  '冊': 'さつ',
  '本（ほん）': 'ほん',
  '台': 'だい',
  '匹': 'ひき',
  '個': 'こ',
  '杯': 'はい',
  '回': 'かい',
  '度': 'ど',
  '階': 'かい',

  // Verbs (Masu & Dict forms)
  '行きます': 'いきます',
  '行きません': 'いきません',
  '行きました': 'いきました',
  '行かない': 'いかない',
  '行く': 'いく',
  '行って': 'いって',
  '来ます': 'きます',
  '来ません': 'きません',
  '帰ります': 'かえります',
  '食べます': 'たべます',
  '飲みます': 'のみます',
  '読みます': 'よみます',
  '書きます': 'かきます',
  '聞きます': 'ききます',
  '見ます': 'みます',
  '買います': 'かいます',
  '寝ます': 'ねます',
  '起きます': 'おきます',
  '働きます': 'はたらきます',
  '休みます': 'やすみます',
  '会います': 'あいます',
  '話します': 'はなします',
  '教えます': 'おしえます',
  '習います': 'ならいます',
  '貸します': 'かします',
  '借ります': 'かります',
  '切ります': 'きります',
  '送ります': 'おくります',
  '作ります': 'つくります',
  '散歩します': 'さんぽします',
  '買い物します': 'かいものします',
  '食事します': 'しょくじします',

  // Adjectives
  '大きい': 'おおきい',
  '小さい': 'ちいさい',
  '新しい': 'あたらしい',
  '古い': 'ふるい',
  '良い': 'よい',
  '悪い': 'わるい',
  '高い': 'たかい',
  '安い': 'やすい',
  '暑い': 'あつい',
  '寒い': 'さむい',
  '難しい': 'むずかしい',
  '易しい': 'やさしい',
  '美味しい': 'おいしい',
  '多い': 'おおい',
  '少ない': 'すくない',
  '静か': 'しずか',
  '有名': 'ゆうめい',
  '親切': 'しんせつ',
  '元気': 'げんき',
  '暇': 'ひま',
  '便利': 'べんり',
};

// Sort kanji by length descending so longer compound words match first
const SORTED_KANJI_KEYS = Object.keys(DEKIRU_KANJI_DICT).sort((a, b) => b.length - a.length);

/**
 * Automatically annotates a raw string with ruby furigana segments using the dictionary.
 */
export function annotateTextWithFurigana(text: string): TextSegment[] {
  if (!text) return [];

  // Check if string has any kanji
  const hasKanji = /[\u4e00-\u9faf]/.test(text);
  if (!hasKanji) {
    return [{ text }];
  }

  const segments: TextSegment[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    let matched = false;

    // Try to match from dictionary
    for (const key of SORTED_KANJI_KEYS) {
      if (remaining.startsWith(key)) {
        segments.push({
          text: key,
          reading: DEKIRU_KANJI_DICT[key],
        });
        remaining = remaining.slice(key.length);
        matched = true;
        break;
      }
    }

    if (!matched) {
      // If current character is not matching a dictionary word, take non-kanji run
      const nonKanjiMatch = remaining.match(/^[^\u4e00-\u9faf]+/);
      if (nonKanjiMatch) {
        segments.push({ text: nonKanjiMatch[0] });
        remaining = remaining.slice(nonKanjiMatch[0].length);
      } else {
        // Standalone kanji without dict match
        segments.push({ text: remaining[0] });
        remaining = remaining.slice(1);
      }
    }
  }

  return segments;
}

/**
 * Enriches TextSegment[] so that any segment with kanji but lacking reading is populated.
 */
export function enrichSegmentsWithFurigana(segments: TextSegment[] | undefined): TextSegment[] {
  if (!segments || segments.length === 0) return [];

  const result: TextSegment[] = [];
  for (const seg of segments) {
    if (seg.reading) {
      result.push(seg);
    } else if (/[\u4e00-\u9faf]/.test(seg.text)) {
      // Has kanji but no reading -> annotate!
      const annotated = annotateTextWithFurigana(seg.text);
      result.push(...annotated);
    } else {
      result.push(seg);
    }
  }

  return result;
}

interface SmartFuriganaProps {
  segments?: TextSegment[];
  text?: string;
  showFurigana?: boolean;
  className?: string;
  fontSize?: string;
}

/**
 * Smart Furigana component that supports:
 * - Direct SegmentContent or raw text
 * - Automatic dictionary enrichment for missing readings
 * - Global Furigana toggle (show/hide)
 */
export const SmartFurigana: React.FC<SmartFuriganaProps> = ({
  segments,
  text,
  showFurigana = true,
  className = '',
  fontSize,
}) => {
  let finalSegments: TextSegment[] = [];

  if (segments && segments.length > 0) {
    finalSegments = enrichSegmentsWithFurigana(segments);
  } else if (text) {
    finalSegments = annotateTextWithFurigana(text);
  }

  if (finalSegments.length === 0) return null;

  return (
    <span className={`smart-furigana ${className}`} style={fontSize ? { fontSize } : undefined}>
      {finalSegments.map((seg, idx) => {
        if (seg.reading && showFurigana) {
          return (
            <ruby key={idx} style={{ margin: '0 1px' }}>
              {seg.text}
              <rt
                style={{
                  fontFamily: 'var(--font-jp)',
                  fontSize: '0.58em',
                  lineHeight: 1,
                  textAlign: 'center',
                  color: '#4f46e5',
                  fontWeight: 600,
                  userSelect: 'none',
                }}
              >
                {seg.reading}
              </rt>
            </ruby>
          );
        }

        // Multiline split if newline
        if (seg.text.includes('\n')) {
          const lines = seg.text.split('\n');
          return (
            <React.Fragment key={idx}>
              {lines.map((line, lineIdx) => (
                <React.Fragment key={lineIdx}>
                  {lineIdx > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </React.Fragment>
          );
        }

        return <span key={idx}>{seg.text}</span>;
      })}
    </span>
  );
};
