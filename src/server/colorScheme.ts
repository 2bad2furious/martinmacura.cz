'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { z } from 'zod';

import { ALLOWED_COLOR_SCHEMES, ColorScheme } from '~/constants';
import { getOtherColorScheme } from '~/utils';

import { action } from './action';
import { formDataAction } from './formDataAction';

const COOKIE_NAME = 'color-scheme';

export async function getColorScheme() {
    const { value } = cookies().get(COOKIE_NAME) ?? {};

    if (ALLOWED_COLOR_SCHEMES.includes(value as any)) {
        return value as ColorScheme;
    }

    return null;
}

function _setColorScheme(colorScheme: ColorScheme) {
    cookies().set(COOKIE_NAME, colorScheme);

    revalidatePath('/');
}

export const setColorScheme = action(z.enum(ALLOWED_COLOR_SCHEMES), async scheme => {
    await new Promise(r => setTimeout(r, 2500));
    _setColorScheme(scheme);
});

export const switchColorScheme = formDataAction(
    z.object({
        before: z.enum(ALLOWED_COLOR_SCHEMES),
    }),
    ({ before }) => {
        const scheme = getOtherColorScheme(before);

        _setColorScheme(scheme);
    },
);
