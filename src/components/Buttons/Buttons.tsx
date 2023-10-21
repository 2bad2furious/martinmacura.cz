import { ActionIcon, Affix, Stack } from '@mantine/core';

import { BUTTONS } from '~/constants';

import { ColorSchemeSwitchButton } from '../ColorSchemeSwitchButton';
import styles from './Buttons.module.css';

const defaultProps = {
    radius: 'md',
    size: 'xxl',
    variant: 'light',
    className: styles.button,
} as const;

export const Buttons = () => {
    return (
        <Affix position={{ bottom: '2rem', right: '2rem' }}>
            <Stack>
                {BUTTONS.map(({ icon, name, link }) => (
                    <ActionIcon key={name} component='a' href={link} target='_blank' {...defaultProps}>
                        {icon}
                    </ActionIcon>
                ))}
                <ColorSchemeSwitchButton {...defaultProps} />
            </Stack>
        </Affix>
    );
};
