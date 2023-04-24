import { boxesResetted } from '../model';

export function ResetBoxesButton() {
  return (
    <button type="button" onClick={() => boxesResetted()}>
      reset shuffle
    </button>
  );
}
