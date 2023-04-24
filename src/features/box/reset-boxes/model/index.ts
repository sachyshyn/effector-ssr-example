import { $boxes, getDefaultBoxes } from '@entities/box';
import { createEvent } from 'effector';

const boxesResetted = createEvent();
$boxes.on(boxesResetted, () => getDefaultBoxes());

export { boxesResetted };
