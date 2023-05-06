import { boxesShuffled } from '../model';

export function ShuffleBoxesButton() {
  return (
    <button type="button" onClick={() => boxesShuffled()}>
      shuffle boxes
    </button>
  );
}
