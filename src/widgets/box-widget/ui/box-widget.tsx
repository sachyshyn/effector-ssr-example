import { $boxes, $boxesDescription, Box } from '@entities/box';
import { ResetBoxesButton } from '@features/box/reset-boxes';
import { ShuffleBoxesButton, boxesShuffled } from '@features/box/shuffle-boxes';
import { Container, Heading, Wrapper } from '@shared/ui';
import { useStore } from 'effector-react';
import '../model';
import { useEffect } from '@shared/lib/react';

export function BoxWidget() {
  const boxes = useStore($boxes);
  const boxesDescription = useStore($boxesDescription);

  useEffect(() => {
    boxesShuffled();
  }, []);

  return (
    <section>
      <Container>
        <Heading type="h2">{boxesDescription}</Heading>
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
