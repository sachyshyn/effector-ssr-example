import { $boxes } from '@entities/box';
import { shuffleArray } from '@shared/lib/helpers';
import { createEvent } from 'effector';

const boxesShuffled = createEvent();
$boxes.on(boxesShuffled, shuffleArray);

export { boxesShuffled };
