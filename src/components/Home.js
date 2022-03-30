import React from "react";

function Home() {
  return (
    <div className="item">
      <div className="card bg-dark text-light border-0">
        <img
          src="assets/bg.jpg"
          className="card-img"
          alt="background"
          height="593px"
          loading="lazy"
        />
        <div className="card-img-overlay d-flex  flex-column ">
          <h5 className="card-title display-3 mb-0 fw-bolder text-dark">
            New Year Sale
          </h5>
          <p className="card-text lead fs-2 text-dark ">
            Checkout all the Latest Products
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
