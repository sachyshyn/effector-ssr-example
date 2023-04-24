import type { PropsWithChildren } from '@shared/lib/react';

function Container(props: PropsWithChildren) {
  return <div className="container">{props.children}</div>;
}
function Wrapper(props: PropsWithChildren) {
  return <div className="wrapper">{props.children}</div>;
}

function WrapperItem(props: PropsWithChildren) {
  return <div className="wrapper__item">{props.children}</div>;
}

Wrapper.Item = WrapperItem;

export { Wrapper, Container };
