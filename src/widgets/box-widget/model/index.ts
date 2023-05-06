import { boxesResetted } from '@features/box/reset-boxes';
import { boxesShuffled } from '@features/box/shuffle-boxes';
import { clientSideBoxesText, serverSideBoxesText, $boxesDescription } from '@entities/box';

$boxesDescription.on([boxesResetted, boxesShuffled], () =>
  import.meta.env.SSR ? serverSideBoxesText : clientSideBoxesText
);
