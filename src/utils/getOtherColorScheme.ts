import { ALLOWED_VALUES, ColorScheme } from '~/constants';

export function getOtherColorScheme(before: ColorScheme) {
    const i = ALLOWED_VALUES.indexOf(before);

    return ALLOWED_VALUES[(i + 1) % ALLOWED_VALUES.length];
}
