import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import {
//   getFirestore,
//   collection,
//   getDocs,
//   setDoc,
//   doc,
// } from "firebase/firestore";
// import { getDatabase, ref, child, get } from "firebase/database";

function Home() {
  // const db = getFirestore();
  // getDocs(collection(db, "products"))
  //   .then((collection) => {
  //     let products = [];
  //     collection.forEach((doc) => {
  //       products.push(doc.data());
  //     });
  //     console.log(products);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // setDoc(doc(db, "products", "prod"), {
  //   name: "hello",
  //   roll: 3,
  // });

  // extra
  //   const dbRef = ref(getDatabase());
  // get(child(dbRef, `users/${userId}`)).then((snapshot) => {
  //   if (snapshot.exists()) {
  //     console.log(snapshot.val());
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });

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
