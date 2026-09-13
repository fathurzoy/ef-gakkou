// Utility for checking written Japanese exam answers with high flexibility
// Accepts: Kanji, Hiragana, Katakana, Romaji, with or without punctuation, case-insensitive, flexible spacing

const ROMAJI_TO_HIRAGANA_MAP: [string, string][] = [
  ['kya', 'きゃ'], ['kyu', 'きゅ'], ['kyo', 'きょ'],
  ['sha', 'しゃ'], ['shu', 'しゅ'], ['sho', 'しょ'],
  ['cha', 'ちゃ'], ['chu', 'ちゅ'], ['cho', 'ちょ'],
  ['nya', 'にゃ'], ['nyu', 'にゅ'], ['nyo', 'にょ'],
  ['hya', 'ひゃ'], ['hyu', 'ひゅ'], ['hyo', 'ひょ'],
  ['mya', 'みゃ'], ['myu', 'みゅ'], ['myo', 'みょ'],
  ['rya', 'りゃ'], ['ryu', 'りゅ'], ['ryo', 'りょ'],
  ['gya', 'ぎゃ'], ['gyu', 'ぎゅ'], ['gyo', 'ぎょ'],
  ['ja', 'じゃ'], ['ju', 'じゅ'], ['jo', 'じょ'],
  ['bya', 'びゃ'], ['byu', 'びゅ'], ['byo', 'びょ'],
  ['pya', 'ぴゃ'], ['pyu', 'ぴゅ'], ['pyo', 'ぴょ'],
  ['ka', 'か'], ['ki', 'き'], ['ku', 'く'], ['ke', 'け'], ['ko', 'こ'],
  ['sa', 'さ'], ['shi', 'し'], ['si', 'し'], ['su', 'す'], ['se', 'せ'], ['so', 'そ'],
  ['ta', 'た'], ['chi', 'ち'], ['ti', 'ち'], ['tsu', 'つ'], ['tu', 'つ'], ['te', 'て'], ['to', 'と'],
  ['na', 'な'], ['ni', 'に'], ['nu', 'ぬ'], ['ne', 'ね'], ['no', 'の'],
  ['ha', 'は'], ['hi', 'ひ'], ['fu', 'ふ'], ['hu', 'ふ'], ['he', 'へ'], ['ho', 'ほ'],
  ['ma', 'ま'], ['mi', 'み'], ['mu', 'む'], ['me', 'め'], ['mo', 'も'],
  ['ya', 'や'], ['yu', 'ゆ'], ['yo', 'よ'],
  ['ra', 'ら'], ['ri', 'り'], ['ru', 'る'], ['re', 'れ'], ['ro', 'ろ'],
  ['wa', 'わ'], ['wo', 'を'], ['nn', 'ん'],
  ['ga', 'が'], ['gi', 'ぎ'], ['gu', 'ぐ'], ['ge', 'げ'], ['go', 'ご'],
  ['za', 'ざ'], ['ji', 'じ'], ['zi', 'じ'], ['zu', 'ず'], ['ze', 'ぜ'], ['zo', 'ぞ'],
  ['da', 'だ'], ['di', 'ぢ'], ['du', 'づ'], ['de', 'で'], ['do', 'ど'],
  ['ba', 'ば'], ['bi', 'び'], ['bu', 'ぶ'], ['be', 'べ'], ['bo', 'ぼ'],
  ['pa', 'ぱ'], ['pi', 'ぴ'], ['pu', 'ぷ'], ['pe', 'ぺ'], ['po', 'ぽ'],
  ['a', 'あ'], ['i', 'い'], ['u', 'う'], ['e', 'え'], ['o', 'お'],
];

export function romajiToHiragana(text: string): string {
  if (!text) return '';
  let str = text.toLowerCase().trim();

  // Convert double consonants to sokuon (っ)
  str = str.replace(/([bcdfghjklmpqrstvwxyz])\1/g, 'っ$1');

  // Convert standalone n before consonants or end of string to ん
  str = str.replace(/n(?=[bcdfghjklmpqrstvwxyz\s]|$)/g, 'ん');

  for (const [rom, hira] of ROMAJI_TO_HIRAGANA_MAP) {
    str = str.split(rom).join(hira);
  }

  return str;
}

// Strip punctuation, macrons, and fullwidth characters
export function cleanText(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .trim()
    // Convert macrons to standard romaji vowels (e.g. ō -> ou, ū -> uu)
    .replace(/ō/g, 'ou')
    .replace(/ū/g, 'uu')
    .replace(/ā/g, 'aa')
    .replace(/ī/g, 'ii')
    .replace(/ē/g, 'ee')
    // Fullwidth to halfwidth alphanumeric
    .replace(/[\uff01-\uff5e]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0xfee0))
    // Replace fullwidth spaces
    .replace(/\u3000/g, ' ')
    // Remove all punctuation
    .replace(/[。、.,!?:;'"~〜`\-–—/\\()（）[\]{}【】_]/g, '')
    // Normalize spaces
    .replace(/\s+/g, ' ')
    .trim();
}

// Strip all spaces as well (for compact Japanese comparison)
export function stripSpaces(text: string): string {
  return cleanText(text).replace(/\s+/g, '');
}

/**
 * Generates normalized variants of text (e.g. converting wo <-> o, wa <-> ha, kanji numbers <-> digits)
 */
function getNormalizedVariants(text: string): string[] {
  const base = cleanText(text);
  const variants = new Set<string>();
  if (!base) return [];

  variants.add(base);

  // Romaji particle variants: " wo " <-> " o ", " wa " <-> " ha "
  const withO = base.replace(/\bwo\b/g, 'o');
  const withWo = base.replace(/\bo\b/g, 'wo');
  const withWa = base.replace(/\bha\b/g, 'wa');
  const withHa = base.replace(/\bwa\b/g, 'ha');

  variants.add(withO);
  variants.add(withWo);
  variants.add(withWa);
  variants.add(withHa);

  // Number variants: 五分 <-> 5分 <-> 5-fun <-> 5 fun <-> gofun
  const numVariants = Array.from(variants).flatMap((v) => [
    v,
    v.replace(/五分/g, '5分').replace(/5分/g, '五分'),
    v.replace(/5\s*fun/g, 'gofun').replace(/5fun/g, 'gofun').replace(/gofun/g, '5分'),
  ]);

  for (const nv of numVariants) {
    variants.add(nv);
  }

  // Romaji long vowel: "hou" <-> "ho", "kou" <-> "ko", "dou" <-> "do", "tou" <-> "to"
  const longVowelVariants = Array.from(variants).flatMap((v) => [
    v,
    v.replace(/hou/g, 'ho'),
    v.replace(/kou/g, 'ko'),
    v.replace(/dou/g, 'do'),
    v.replace(/tou/g, 'to'),
    v.replace(/ginkou/g, 'ginko'),
    v.replace(/hokkaidou/g, 'hokkaido'),
    v.replace(/tanjoubi/g, 'tanjobi'),
  ]);

  for (const lv of longVowelVariants) {
    variants.add(lv);
  }

  return Array.from(variants);
}

export const isBatsuEquivalent = (val: string | undefined | null): boolean => {
  if (!val) return false;
  const s = String(val).trim().toLowerCase();
  return (
    s === 'x' ||
    s === '×' ||
    s === '✕' ||
    s === '✖' ||
    s === 'ｘ' ||
    s === 'Ｘ' ||
    s === '❌' ||
    s === '❎' ||
    s === 'batsu' ||
    s === 'ばつ' ||
    s === 'バツ' ||
    s === '-' ||
    s === 'ー' ||
    s === 'none' ||
    s === 'kosong' ||
    s === 'tidak ada' ||
    /^[xX×✕✖ｘＸ]$/.test(s)
  );
};

/**
 * Check whether a user's single text answer matches any of the accepted variations.
 * Tolerant to:
 * - Kanji / Hiragana / Katakana / Romaji
 * - Punctuation differences (. vs 。)
 * - Spacing differences
 * - Case insensitivity
 * - Any representation of 'x' / batsu
 */
export function checkSingleAnswer(userInput: string, acceptedList: string[]): boolean {
  if (!userInput || !acceptedList || acceptedList.length === 0) return false;

  // Universal check: If target expects batsu / x and user typed any batsu variant
  for (const accepted of acceptedList) {
    if (isBatsuEquivalent(accepted) && isBatsuEquivalent(userInput)) {
      return true;
    }
  }

  const userVariants = getNormalizedVariants(userInput);
  const userHira = romajiToHiragana(userInput);
  const userHiraVariants = getNormalizedVariants(userHira);

  // Collect all normalized forms of the user's input
  const allUserForms = new Set<string>();
  for (const uv of userVariants) {
    allUserForms.add(uv);
    allUserForms.add(stripSpaces(uv));
  }
  for (const uh of userHiraVariants) {
    allUserForms.add(uh);
    allUserForms.add(stripSpaces(uh));
  }

  for (const accepted of acceptedList) {
    const accVariants = getNormalizedVariants(accepted);
    const accHira = romajiToHiragana(accepted);
    const accHiraVariants = getNormalizedVariants(accHira);

    const allAccForms = new Set<string>();
    for (const av of accVariants) {
      allAccForms.add(av);
      allAccForms.add(stripSpaces(av));
    }
    for (const ah of accHiraVariants) {
      allAccForms.add(ah);
      allAccForms.add(stripSpaces(ah));
    }

    // Check intersection
    for (const uf of allUserForms) {
      if (allAccForms.has(uf)) return true;
    }
  }

  return false;
}

/**
 * Check fill-in-the-blank answer for Part IV A (Questions 53-55 with (A) and (B))
 */
export function checkFillBlankAnswer(
  fillInput: { A: string; B: string },
  acceptedA: string[],
  acceptedB: string[]
): boolean {
  if (!fillInput) return false;
  const matchA = checkSingleAnswer(fillInput.A, acceptedA);
  const matchB = checkSingleAnswer(fillInput.B, acceptedB);
  return matchA && matchB;
}
