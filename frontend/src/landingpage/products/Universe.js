import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="text-center">The Zerodha Universe</h1>
        <p className="text-center">
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>
        <div className="col-4 p-3 mt-3 p-5">
          <img src="images\smallcaseLogo.png" style={{ width: "40%" }} />
          <p className="text-small text-muted mt-4">
            Thematic investment platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images\streakLogo.png" style={{ width: "30%" }} />
          <p className="text-small text-muted mt-3">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images\sensibullLogo.svg" style={{ width: "40%" }} />
          <p className="text-small text-muted mt-4">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-3 p-5">
          <img src="images\zerodhaFundhouse.png" style={{ width: "40%" }} />
          <p className="text-small text-muted mt-3">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images\goldenpiLogo.png" style={{ width: "40%" }} />
          <p className="text-small text-muted mt-2">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images\dittoLogo.png" style={{ width: "25%" }} />
          <p className="text-small text-muted mt-3">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-2"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
