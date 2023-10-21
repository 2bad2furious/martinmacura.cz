'use client';

import { useEffect, useRef } from 'react';
import { Title as MantineTitle } from '@mantine/core';
import { useDocumentTitle, useDocumentVisibility } from '@mantine/hooks';

import { getRandomTitle } from '~/utils';

interface TitleProps {
    initial: string;
}

export const Title = ({ initial }: TitleProps) => {
    const windowState = useDocumentVisibility();

    const titleRef = useRef(initial);

    useEffect(() => {
        if (windowState === 'hidden') {
            titleRef.current = getRandomTitle(titleRef.current);
        }
    }, [windowState]);

    const title = titleRef.current;

    useDocumentTitle(`${title} | Martin Macura`);

    return <MantineTitle order={2}>{title}</MantineTitle>;
};
