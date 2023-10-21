export const ALLOWED_VALUES = ['light', 'dark'] as const;

export type ColorScheme = (typeof ALLOWED_VALUES)[number];
