function Highlight(props) {
  return (
    <>
      <section className="highlight-clean">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Highlight</h2>
            <p className="text-center">
              Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
              Vestibulum nibh erat, pellentesque ut laoreet vitae.{" "}
            </p>
          </div>
          <div className="buttons">
            <a className="btn btn-primary" role="button" href="/#">
              Products
            </a>
            <button className="btn btn-light" type="button">
              More About US
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Highlight;
