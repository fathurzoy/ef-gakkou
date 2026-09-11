import React from 'react';

interface FuriganaTextProps {
  text: string;
  className?: string;
}

/**
 * Renders text with ruby furigana tags and underlines.
 * Format:
 *   {漢字|かんじ} -> <ruby>漢字<rt>かんじ</rt></ruby>
 *   <u>teks</u> -> <span className="underline decoration-2 font-medium">teks</span>
 */
export const FuriganaText: React.FC<FuriganaTextProps> = ({ text, className = '' }) => {
  if (!text) return null;

  // Split by markup regex: {kanji|reading} and <u>content</u>
  const regex = /(\{[^|{}]+\|[^}]+\}|<u>.*?<\/u>|\n)/g;
  const parts = text.split(regex);

  return (
    <span className={`furigana-text leading-relaxed ${className}`}>
      {parts.map((part, index) => {
        if (!part) return null;

        if (part === '\n') {
          return <br key={index} />;
        }

        // Check for furigana pattern: {kanji|furigana}
        if (part.startsWith('{') && part.endsWith('}') && part.includes('|')) {
          const inner = part.slice(1, -1);
          const [kanji, furigana] = inner.split('|');
          return (
            <ruby key={index} className="inline-block px-[1px] text-inherit">
              {kanji}
              <rt className="text-[0.62em] text-indigo-600 dark:text-indigo-400 select-none font-normal">
                {furigana}
              </rt>
            </ruby>
          );
        }

        // Check for underline pattern: <u>text</u>
        if (part.startsWith('<u>') && part.endsWith('</u>')) {
          const content = part.slice(3, -4);
          return (
            <span key={index} className="underline underline-offset-4 decoration-2 decoration-indigo-500 font-semibold text-indigo-700 dark:text-indigo-300">
              {content}
            </span>
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};
