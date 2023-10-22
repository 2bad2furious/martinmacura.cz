'use client';

import { startTransition, useEffect } from 'react';
import { useMantineColorScheme } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

import { ColorScheme } from '~/constants';
import { setColorScheme } from '~/server';

interface ColorSchemePersistorProps {
    colorScheme: ColorScheme | null;
}

export const ColorSchemePersistor = ({ colorScheme: serverColorScheme }: ColorSchemePersistorProps) => {
    const { colorScheme: currentColorScheme } = useMantineColorScheme();
    const computedColorScheme = useColorScheme();

    useEffect(() => {
        if (serverColorScheme !== currentColorScheme) {
            startTransition(() => {
                void setColorScheme(currentColorScheme === 'auto' ? computedColorScheme : currentColorScheme);
            });
        }
    }, [currentColorScheme, serverColorScheme, computedColorScheme]);

    return null;
};
