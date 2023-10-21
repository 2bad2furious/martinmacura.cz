import '@mantine/core/styles.css';

import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

import { UIProvider } from '~/components';
import { getColorScheme } from '~/server';

const inter = Urbanist({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata: Metadata = {
    title: 'Martin Macura',
    description: 'a guy',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const colorScheme = await getColorScheme();

    return (
        <html lang='en' data-mantine-color-scheme={colorScheme}>
            <body className={inter.className}>
                <UIProvider colorScheme={colorScheme}>{children}</UIProvider>
            </body>
        </html>
    );
}
