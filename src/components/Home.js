import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Home() {
 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div>
      <Slider {...settings} className="sli">
        <div className="item" style={{ width: 1365}}>
          <div className="card bg-dark text-light border-0">
            <img
              src="assets/bg.jpg"
              className="card-img"
              alt="background"
              height="538px"
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
        <div className="item" style={{ width: 1365 }}>
          <div className="card bg-dark text-light border-0">
            <img
              src="assets/bg1.jpg"
              className="card-img"
              alt="background"
              height="538px"
              loading="lazy"
            />
            <div className="card-img-overlay d-flex  flex-column ">
              <h5 className="card-title display-3 mb-0 fw-bolder text-light">
                Easy To Pay
              </h5>
              
            </div>
          </div>
        </div>
        <div className="item" style={{ width: 1365}}>
          <div className="card bg-dark text-light border-0">
            <img
              src="assets/bg3.jpg"
              className="card-img"
              alt="background"
              height="538px"
              loading="lazy"
            />
            <div className="card-img-overlay d-flex  flex-column ">
              <h5 className="card-title display-3 mb-0 fw-bolder text-dark">
                Trend
              </h5>
              <p className="card-text lead fs-2 text-dark ">
                Get Trending Product Here
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Home;
