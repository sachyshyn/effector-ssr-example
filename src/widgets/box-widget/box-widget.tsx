import { $boxes, Box } from '@entities/box';
import { ResetBoxesButton } from '@features/box/reset-boxes';
import { ShuffleBoxesButton } from '@features/box/shuffle-boxes';
import { Container, Heading, Wrapper } from '@shared/ui';
import { useStore } from 'effector-react';

export function BoxWidget() {
  const boxes = useStore($boxes);

  return (
    <section>
      <Container>
        <Heading type="h2">The content below has been shuffled on the client side</Heading>
      </Container>
      <Container>
        <Wrapper>
          <ShuffleBoxesButton />
          <ResetBoxesButton />
        </Wrapper>
      </Container>
      <Container className="mt-2">
        <Wrapper>
          {boxes.map((boxNumber) => (
            <Wrapper.Item key={boxNumber}>
              <Box number={boxNumber} />
            </Wrapper.Item>
          ))}
        </Wrapper>
      </Container>
    </section>
  );
}
