import { $boxes } from '@entities/box';
import { shuffleArray } from '@shared/lib/helpers';
import { createEvent } from 'effector';

const shuffleButtonClicked = createEvent();
$boxes.on(shuffleButtonClicked, shuffleArray);

shuffleButtonClicked();

export { shuffleButtonClicked };
