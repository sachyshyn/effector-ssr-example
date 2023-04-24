import { Container, Heading } from '@shared/ui';
import { BoxWidget } from '@widgets/box-widget';

export function MainPage() {
  return (
    <main>
      <Container>
        <Heading type="h1">Main Page</Heading>
      </Container>
      <Container>
        <p>This text has been generated on the client side</p>
      </Container>
      <BoxWidget />
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
