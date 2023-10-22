'use client';

import '@mantine/core/styles.css';

import { ActionIcon, createTheme, rem } from '@mantine/core';

import { fonts } from './fonts';

export const theme = createTheme({
    fontFamily: fonts.map(f => f.style.fontFamily).join(),
    primaryColor: 'indigo',
    headings: {
        sizes: {
            h2: {
                fontSize: '3.5rem',
                lineHeight: '1.1',
                fontWeight: '600',
            },
        },
    },
    components: {
        ActionIcon: ActionIcon.extend({
            // @ts-expect-error xxl missing in sizes
            styles: () => ({
                root: {
                    '--ai-size-xxl': rem(48),
                },
            }),
        }),
    },
});
