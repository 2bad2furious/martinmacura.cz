import { TITLES } from '~/constants';

export function getRandomTitle(before?: (typeof TITLES)[number]) {
    const available = TITLES.filter(t => t !== before);
    const i = Math.floor(Math.random() * available.length);

    return available[i];
}
