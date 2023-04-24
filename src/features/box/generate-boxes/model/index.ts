import { $boxes, getDefaultBoxes } from '@entities/box';
import { shuffleArray } from '@shared/lib/helpers';
import { createEvent } from 'effector';

const shuffleButtonClicked = createEvent();
const shuffleResetted = createEvent();
$boxes.on(shuffleButtonClicked, shuffleArray).on(shuffleResetted, () => getDefaultBoxes());

shuffleButtonClicked();

export { shuffleButtonClicked, shuffleResetted };
