export const ALLOWED_COLOR_SCHEMES = ['light', 'dark'] as const;

export type ColorScheme = (typeof ALLOWED_COLOR_SCHEMES)[number];
