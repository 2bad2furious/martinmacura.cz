'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { z } from 'zod';

import { ALLOWED_VALUES, ColorScheme } from '~/constants';
import { getOtherColorScheme } from '~/utils';

import { action } from './action';

const COOKIE_NAME = 'color-scheme';

export async function getColorScheme() {
    const { value } = cookies().get(COOKIE_NAME) ?? {};

    if (ALLOWED_VALUES.includes(value as any)) {
        return value as ColorScheme;
    }

    return null;
}

function setColorScheme(colorScheme: ColorScheme) {
    cookies().set(COOKIE_NAME, colorScheme);

    revalidatePath('/');
}

export const switchColorScheme = action(
    z.object({
        before: z.enum(ALLOWED_VALUES),
    }),
    ({ before }) => {
        const scheme = getOtherColorScheme(before);

        console.debug({ scheme, before });

        setColorScheme(scheme);
    },
);
