import { Flex } from '@mantine/core';

import { Buttons, Title } from '~/components';
import { getInitialTitle } from '~/server';

export default async function Home() {
    return (
        <Flex mih='100vh' align='center' justify='center'>
            <Title initial={await getInitialTitle()} />
            <Buttons />
        </Flex>
    );
}
