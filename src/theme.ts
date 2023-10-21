'use client';

import { ActionIcon, createTheme, rem } from '@mantine/core';

export const theme = createTheme({
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
