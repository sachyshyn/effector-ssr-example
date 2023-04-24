import type { BoxProps } from '../lib';

export function Box(props: BoxProps) {
  return <div className="content-item flex flex--centered">{props.number}</div>;
}
