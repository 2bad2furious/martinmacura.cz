import { ALLOWED_COLOR_SCHEMES, ColorScheme } from '~/constants';

export function getOtherColorScheme(before: ColorScheme) {
    const i = ALLOWED_COLOR_SCHEMES.indexOf(before);

    return ALLOWED_COLOR_SCHEMES[(i + 1) % ALLOWED_COLOR_SCHEMES.length];
}
