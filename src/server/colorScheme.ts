'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect, RedirectType } from 'next/navigation';
import { z } from 'zod';

import { ALLOWED_COLOR_SCHEMES, ColorScheme } from '~/constants';
import { getOtherColorScheme } from '~/utils';

import { action } from './action';

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
}

export const setColorScheme = action(z.enum(ALLOWED_COLOR_SCHEMES), async scheme => {
    _setColorScheme(scheme);
    revalidatePath('/');
});

export const switchColorScheme = async (formData: FormData) => {
    const scheme = getOtherColorScheme(formData.get('before') as any);

    _setColorScheme(scheme);
    redirect('/', RedirectType.replace);
};
