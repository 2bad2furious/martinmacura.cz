import type { Metadata } from 'next';

import { ColorSchemePersistor, UIProvider } from '~/components';
import { DEFAULT_COLOR_SCHEME } from '~/constants';
import { getColorScheme } from '~/server';
import { fonts } from '~/styles';

export const metadata: Metadata = {
    title: 'Martin Macura',
    description: 'a guy',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const colorScheme = await getColorScheme();

    return (
        <html lang='en' data-mantine-color-scheme={colorScheme ?? DEFAULT_COLOR_SCHEME}>
            <body className={fonts.map(f => f.className).join(' ')}>
                <UIProvider colorScheme={colorScheme}>
                    <ColorSchemePersistor colorScheme={colorScheme} />
                    {children}
                </UIProvider>
            </body>
        </html>
    );
}
