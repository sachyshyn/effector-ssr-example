import { Container, Wrapper, Heading } from '@shared/ui';
import { Box } from '@entities/box';

const boxes = Array.from({ length: 9 }, (_, i) => i + 1);

export function MainPage() {
  return (
    <main>
      <Container>
        <Heading type="h1">Main Page</Heading>
      </Container>
      <Container>
        <p>This text has been generated on the client side</p>
      </Container>
      <section>
        <Container>
          <Heading type="h2">The content below has been shuffled on the client side</Heading>
        </Container>
        <Container>
          <Wrapper>
            {boxes.map((boxNumber) => (
              <Wrapper.Item key={boxNumber}>
                <Box number={boxNumber} />
              </Wrapper.Item>
            ))}
          </Wrapper>
        </Container>
      </section>
      <section className="mt-4">
        <Container>
          <Heading type="h2">The element animation has been randomly chosen on the client side</Heading>
        </Container>
        <Container>
          <div className="figure-wrapper">
            <div className="figure figure--square animated"></div>
            <div className="figure figure--circle animated"></div>
          </div>
        </Container>
      </section>
    </main>
  );
}
