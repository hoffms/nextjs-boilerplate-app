import * as React from 'react';

export interface ShapeProps {
  width: number
  className?: string
}

const defaultProps = {
  viewBox: '0 0 32 32',
  fill: 'currentColor'
}

export const Shape1: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <circle cx="16" cy="16" r="8" />
  </svg>
)
Shape1.displayName = 'Shape1'

export const Shape2: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <rect x="8" y="8" width="16" height="16" rx="2" />
  </svg>
)
Shape2.displayName = 'Shape2'

export const Shape3: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <polygon points="16,4 28,28 4,28" />
  </svg>
)
Shape3.displayName = 'Shape3'

export const Shape4: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <polygon points="16,4 28,16 16,28 4,16" />
  </svg>
)
Shape4.displayName = 'Shape4'

export const Shape5: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <polygon points="16,4 24,12 24,20 16,28 8,20 8,12" />
  </svg>
)
Shape5.displayName = 'Shape5'

export const Shape6: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <path d="M16 4 L28 16 L16 28 L4 16 Z M16 8 L24 16 L16 24 L8 16 Z" />
  </svg>
)
Shape6.displayName = 'Shape6'

export const Shape7: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
)
Shape7.displayName = 'Shape7'

export const Shape8: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <rect x="6" y="6" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
)
Shape8.displayName = 'Shape8'

export const Shape9: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <polygon points="16,6 26,26 6,26" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
)
Shape9.displayName = 'Shape9'

export const Shape10: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <polygon points="16,6 26,16 16,26 6,16" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
)
Shape10.displayName = 'Shape10'

export const Shape11: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <path d="M8 16 L24 16 M16 8 L16 24" stroke="currentColor" strokeWidth="3" />
  </svg>
)
Shape11.displayName = 'Shape11'

export const Shape12: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <path d="M8 8 L24 24 M24 8 L8 24" stroke="currentColor" strokeWidth="3" />
  </svg>
)
Shape12.displayName = 'Shape12'

export const Shape13: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <circle cx="16" cy="16" r="6" />
    <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
)
Shape13.displayName = 'Shape13'

export const Shape14: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <rect x="10" y="10" width="12" height="12" />
    <rect x="6" y="6" width="20" height="20" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
)
Shape14.displayName = 'Shape14'

export const Shape15: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <polygon points="16,10 22,22 10,22" />
    <polygon points="16,6 26,26 6,26" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
)
Shape15.displayName = 'Shape15'

export const Shape16: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <polygon points="16,10 22,16 16,22 10,16" />
    <polygon points="16,6 26,16 16,26 6,16" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
)
Shape16.displayName = 'Shape16'

export const Shape17: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <path d="M8 16 A8 8 0 0 1 24 16 A8 8 0 0 1 8 16 Z" />
  </svg>
)
Shape17.displayName = 'Shape17'

export const Shape18: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <path d="M8 8 L24 8 L24 24 L8 24 Z" />
  </svg>
)
Shape18.displayName = 'Shape18'

export const Shape19: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <path d="M16 4 L28 16 L16 28 L4 16 Z" />
  </svg>
)
Shape19.displayName = 'Shape19'

export const Shape20: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <path d="M8 8 L24 8 L16 24 Z" />
  </svg>
)
Shape20.displayName = 'Shape20'

export const Shape21: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <circle cx="16" cy="16" r="4" />
    <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
)
Shape21.displayName = 'Shape21'

export const Shape22: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <rect x="8" y="8" width="16" height="16" />
    <rect x="12" y="12" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="1" />
  </svg>
)
Shape22.displayName = 'Shape22'

export const Shape23: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <polygon points="16,8 24,16 16,24 8,16" />
    <polygon points="16,12 20,16 16,20 12,16" fill="none" stroke="currentColor" strokeWidth="1" />
  </svg>
)
Shape23.displayName = 'Shape23'

export const Shape24: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <path d="M8 16 L24 16 M16 8 L16 24" stroke="currentColor" strokeWidth="2" />
    <circle cx="16" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
  </svg>
)
Shape24.displayName = 'Shape24'

export const Shape25: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <path d="M8 8 L24 24 M24 8 L8 24" stroke="currentColor" strokeWidth="2" />
    <circle cx="16" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
  </svg>
)
Shape25.displayName = 'Shape25'

export const Shape26: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <path d="M8 8 L24 8 L24 24 L8 24 Z" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M12 12 L20 12 M12 16 L20 16 M12 20 L20 20" stroke="currentColor" strokeWidth="1" />
  </svg>
)
Shape26.displayName = 'Shape26'

export const Shape27: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <path d="M16 4 L28 16 L16 28 L4 16 Z" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M12 12 L20 12 L20 20 L12 20 Z" />
  </svg>
)
Shape27.displayName = 'Shape27'

export const Shape28: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <path d="M8 8 L24 8 L16 24 Z" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="16" cy="14" r="3" />
  </svg>
)
Shape28.displayName = 'Shape28'

export const Shape29: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M12 12 L20 20 M20 12 L12 20" stroke="currentColor" strokeWidth="2" />
  </svg>
)
Shape29.displayName = 'Shape29'

export const Shape30: React.FC<ShapeProps> = ({ width, className }) => (
  <svg width={width} height={width} viewBox="0 0 32 32" fill="currentColor" className={className}>
    <path d="M8 8 L24 8 L24 24 L8 24 Z" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M8 8 L24 24 M24 8 L8 24" stroke="currentColor" strokeWidth="1" />
  </svg>
)
Shape30.displayName = 'Shape30' 