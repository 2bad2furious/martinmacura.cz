import { Affix, Box, Stack } from '@mantine/core';

import { Buttons, Title } from '~/components';
import { getInitialTitle } from '~/server';

export default async function Home() {
    return (
        <Stack mih='100vh' align='center' justify='center' gap='xl' p='md'>
            <Title initial={await getInitialTitle()} />

            <Affix position={{ bottom: '2rem', right: '2rem' }} visibleFrom='md'>
                <Buttons />
            </Affix>
            <Box hiddenFrom='md'>
                <Buttons />
            </Box>
        </Stack>
    );
}
