import React from 'react';
import { TextSegment } from '../types/dekiru';

interface SegmentFuriganaProps {
  segments: TextSegment[];
  className?: string;
  fontSize?: string;
}

export const SegmentFurigana: React.FC<SegmentFuriganaProps> = ({
  segments,
  className = '',
  fontSize,
}) => {
  if (!segments || segments.length === 0) return null;

  return (
    <span
      className={`furigana-text ${className}`}
      style={fontSize ? { fontSize } : undefined}
    >
      {segments.map((seg, index) => {
        if (seg.reading) {
          return (
            <ruby key={index} style={{ margin: '0 1px' }}>
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

        // Handle possible multiline string in text
        if (seg.text.includes('\n')) {
          const lines = seg.text.split('\n');
          return (
            <React.Fragment key={index}>
              {lines.map((line, lineIdx) => (
                <React.Fragment key={lineIdx}>
                  {lineIdx > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </React.Fragment>
          );
        }

        return <span key={index}>{seg.text}</span>;
      })}
    </span>
  );
};
