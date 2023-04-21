import { Container, Wrapper, Heading } from '@shared/ui';

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
            <Wrapper.Item>
              <div className="content-item flex flex--centered">1</div>
            </Wrapper.Item>
            <Wrapper.Item>
              <div className="content-item flex flex--centered">2</div>
            </Wrapper.Item>
            <Wrapper.Item>
              <div className="content-item flex flex--centered">3</div>
            </Wrapper.Item>
            <Wrapper.Item>
              <div className="content-item flex flex--centered">4</div>
            </Wrapper.Item>
            <Wrapper.Item>
              <div className="content-item flex flex--centered">5</div>
            </Wrapper.Item>
            <Wrapper.Item>
              <div className="content-item flex flex--centered">6</div>
            </Wrapper.Item>
            <Wrapper.Item>
              <div className="content-item flex flex--centered">7</div>
            </Wrapper.Item>
            <Wrapper.Item>
              <div className="content-item flex flex--centered">8</div>
            </Wrapper.Item>
            <Wrapper.Item>
              <div className="content-item flex flex--centered">9</div>
            </Wrapper.Item>
          </Wrapper>
        </Container>
      </section>
      <section>
        <Container>
          <Heading type="h2">The element animation has been randomly chosen on the cliend side</Heading>
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
