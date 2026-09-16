/**
 * Centralized Design System Palette
 * Synchronized with Tailwind CSS v4 @theme in src/index.css
 */
export const PALETTE = {
  primary: {
    DEFAULT: '#09C8FF',
    50: '#f0fbff',
    100: '#e0f7fe',
    200: '#b9f0fe',
    300: '#7ce4fd',
    400: '#36d4fa',
    500: '#09C8FF',
    600: '#00a0d4',
    700: '#007fa8',
    800: '#05688a',
    900: '#0a5673',
    950: '#03364c',
  },
  brand: {
    cyan: '#09C8FF',
    accent: '#4cd7ff',
    contrast: '#041a24',
  },
  surface: {
    canvas: '#08090d',
    card: '#0c0e14',
    elevated: '#121520',
    muted: '#11131b',
    hover: '#171b26',
    border: 'rgba(255, 255, 255, 0.08)',
    borderSubtle: 'rgba(255, 255, 255, 0.05)',
  },
} as const;

export type ThemePalette = typeof PALETTE;
