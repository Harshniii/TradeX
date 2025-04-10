import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="row p-5">
        <div
          id="supportWrapper"
          className="d-flex justify-content-between align-items-center w-100"
        >
          <h4 className="mb-0">Support Portal</h4>
          <a href="#" className="text-decoration-none">
            Track Tickets
          </a>
        </div>
      </div>
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket.
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <a href="" className="me-3">
            {" "}
            Track account opening
          </a>
          <a href="" className="me-3">
            {" "}
            Track segment activation
          </a>
          <a href="" className="me-3">
            {" "}
            Intraday margins
          </a>
          <a href="" className="me-3">
            {" "}
            Kite user manual
          </a>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">
                {" "}
                Change in expiry day of NSE derivative contracts from April 04,
                2025 [Withheld]
              </a>
            </li>
            <li>
              <a href=""> Latest Intraday leverages and Square-off timings</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
