'use client';

import { ActionIcon, ActionIconProps } from '@mantine/core';
import { IconMoonFilled, IconSunHigh } from '@tabler/icons-react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

import styles from './SubmitButton.module.css';

type SubmitButtonProps = ActionIconProps;
export const SubmitButton = (props: SubmitButtonProps) => {
    const { pending } = useFormStatus();

    return (
        <ActionIcon {...props} loading={pending} type='submit' loaderProps={{ type: 'dots' }}>
            <IconMoonFilled className={styles.light} />
            <IconSunHigh className={styles.dark} />
        </ActionIcon>
    );
};
