import { PropsWithChildren } from 'react';
import { MantineProvider as RealMantineProvider } from '@mantine/core';

import { ColorScheme } from '~/constants';
import { theme } from '~/styles/theme';

interface UIProviderProps extends PropsWithChildren {
    colorScheme: ColorScheme | null;
}

export const UIProvider = ({ children, colorScheme }: UIProviderProps) => {
    return (
        <RealMantineProvider
            defaultColorScheme={colorScheme ?? 'auto'}
            forceColorScheme={colorScheme ?? undefined}
            theme={theme}
        >
            {children}
        </RealMantineProvider>
    );
};
