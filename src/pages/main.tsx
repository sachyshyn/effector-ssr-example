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
    </main>
  );
}
