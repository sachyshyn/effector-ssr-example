import type { PropsWithChildren } from '@shared/lib/react';

export type BoxType = number;

export interface BoxProps extends PropsWithChildren {
  number: BoxType;
}
