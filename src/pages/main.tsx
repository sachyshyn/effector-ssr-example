export function MainPage() {
  return (
    <main>
      <div className="container">
        <h1 className="heading heading--1">Main Page</h1>
      </div>
      <div className="container">
        <p>This text has been generated on the client side</p>
      </div>
      <section>
        <div className="container">
          <h2 className="heading heading--2">The content below has been shuffled on the client side</h2>
        </div>
        <div className="container wrapper">
          <div className="wrapper__item">
            <div className="content-item flex flex--centered">1</div>
          </div>
          <div className="wrapper__item">
            <div className="content-item flex flex--centered">2</div>
          </div>
          <div className="wrapper__item">
            <div className="content-item flex flex--centered">3</div>
          </div>
          <div className="wrapper__item">
            <div className="content-item flex flex--centered">4</div>
          </div>
          <div className="wrapper__item">
            <div className="content-item flex flex--centered">5</div>
          </div>
          <div className="wrapper__item">
            <div className="content-item flex flex--centered">6</div>
          </div>
          <div className="wrapper__item">
            <div className="content-item flex flex--centered">7</div>
          </div>
          <div className="wrapper__item">
            <div className="content-item flex flex--centered">8</div>
          </div>
          <div className="wrapper__item">
            <div className="content-item flex flex--centered">9</div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="heading heading--2">The element animation has been randomly chosen on the cliend side</h2>
        </div>
        <div className="container">
          <div className="figure-wrapper">
            <div className="figure figure--square animated"></div>
            <div className="figure figure--circle animated"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
