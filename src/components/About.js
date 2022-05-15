import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
// import { getDatabase, ref, child, get } from "firebase/database";

const About = () => {
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

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const db = getFirestore();
  const handlePro = () => {
    console.log(name, price, image, description);
    const ID = uuidv4();
    setDoc(doc(db, "Products", ID.toString()), {
        fname: name,
        fprice: parseInt(price), 
        fimage: image,
        fdescription: description,
      });
  };

  const showProducts = () => {
    getDocs(collection(db, "Products"))
      .then((collection) => {
        let products = [];
        collection.forEach((doc) => {
          products.push(doc.data());
        });
        console.log(products);
      })
      .catch((error) => {
        console.log(error);
      });
  
  }

  return (
    <div>
      <div>
        <h1>ADD PRODUCT</h1>
        <label> product name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>product description </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>product price</label>

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>product image</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button onClick={handlePro}>Add</button>
        <br />
        <button onClick={showProducts}>Add</button>
      </div>
    </div>
  );
};

export default About;
