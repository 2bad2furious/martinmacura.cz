'use client';

import { ActionIconProps, useMantineColorScheme } from '@mantine/core';

import { switchColorScheme } from '~/server';

import { SubmitButton } from './SubmitButton';

type ColorSchemeSwitchButtonProps = ActionIconProps;

export const ColorSchemeSwitchButton = (props: ColorSchemeSwitchButtonProps) => {
    const { colorScheme } = useMantineColorScheme();

    return (
        <form action={switchColorScheme}>
            <input type='hidden' value={colorScheme} name='before' />
            <SubmitButton {...props} />
        </form>
    );
};
