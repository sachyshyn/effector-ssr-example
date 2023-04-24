import { shuffleButtonClicked } from '../model';

export function ShuffleBoxesButton() {
  return (
    <button type="button" onClick={() => shuffleButtonClicked()}>
      reset shuffle
    </button>
  );
}
