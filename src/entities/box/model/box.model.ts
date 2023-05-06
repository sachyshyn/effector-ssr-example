import { createStore } from 'effector';
import { BoxType, getDefaultBoxes } from '../lib';

export const $boxes = createStore<BoxType[]>(getDefaultBoxes());
export const $boxesDescription = createStore<string>('');
