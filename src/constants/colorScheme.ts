export const ALLOWED_COLOR_SCHEMES = ['light', 'dark'] as const;

export const DEFAULT_COLOR_SCHEME: ColorScheme = ALLOWED_COLOR_SCHEMES[0];

export type ColorScheme = (typeof ALLOWED_COLOR_SCHEMES)[number];
