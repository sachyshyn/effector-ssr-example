import { Wrapper } from '../container';
import { Link } from '@shared/lib/router';
import type { PropsWithChildren } from '@shared/lib/react';
import { ROUTES } from '@shared/config';

export function BaseLayout(props: PropsWithChildren) {
  return (
    <>
      <Wrapper>
        <Wrapper.Item>
          <Link to={ROUTES.MAIN}>Link to main page</Link>
        </Wrapper.Item>
        <Wrapper.Item>
          <Link to={ROUTES.SECONDARY}>Link to secondary page</Link>
        </Wrapper.Item>
      </Wrapper>
      {props.children}
    </>
  );
}
