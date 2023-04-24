import type { PropsWithChildren } from '@shared/lib/react';

interface HeadingProps extends PropsWithChildren {
  type: 'h1' | 'h2';
}

export function Heading(props: HeadingProps) {
  return <props.type className={`heading heading--${props.type}`}>{props.children}</props.type>;
}
