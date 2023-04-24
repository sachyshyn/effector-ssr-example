import { DEFAULT_BOX_AMOUNT } from './constants';

export function getDefaultBoxes(num: number = DEFAULT_BOX_AMOUNT) {
  return Array.from({ length: num }, (_, i) => i + 1);
}
