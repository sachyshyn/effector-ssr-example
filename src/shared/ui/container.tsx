import type { PropsWithChildren } from '@shared/lib/react';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

function Container(props: ContainerProps) {
  return <div className={`container ${props.className}`}>{props.children}</div>;
}
function Wrapper(props: ContainerProps) {
  return <div className={`wrapper ${props.className}`}>{props.children}</div>;
}

function WrapperItem(props: ContainerProps) {
  return <div className={`wrapper__item ${props.className}`}>{props.children}</div>;
}

Wrapper.Item = WrapperItem;

export { Wrapper, Container };
