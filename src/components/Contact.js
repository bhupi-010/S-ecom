// import React from "react";
// import { useState } from "react";

// import { getDatabase, ref, child, get,set } from "firebase/database";

// const Contact = () => {

//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState("");
//   const [description, setDescription] = useState("");
//   const dbRef = ref(getDatabase());
//   const handlePro = () => {
//     console.log(name, price, image, description);

//     const db = getDatabase();
//     // set(ref(db,price.toString()), {
//     //     fname: name,
//     //     fprice: parseInt(price),
//     //     fimage: image,
//     //     fdescription: description,
//     //   });

//     set(ref(db, 'products/' + price.toString()), {
//         username: name,
//       Description: description,
//         profile_picture : image
//       });
//   };

//   const showProducts = () => {

//   get(child(dbRef, `products`)).then((product) => {
//     if (product.exists()) {
//       console.log(product.val());
//     } else {
//       console.log("No data available");
//     }
//   }).catch((error) => {
//     console.error(error);
//   });

//   }

//   return (
//     <div>
//       <div>
//         <h1>ADD PRODUCT</h1>
//         <label> product name</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <label>product description </label>
//         <input
//           type="text"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <label>product price</label>

//         <input
//           type="number"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//         />
//         <label>product image</label>
//         <input
//           type="text"
//           value={image}
//           onChange={(e) => setImage(e.target.value)}
//         />
//         <button onClick={()=>handlePro(price)}>Add</button>
//         <br />
//         <button onClick={showProducts}>Add</button>
//       </div>

//     </div>
//   );
// };

// export default Contact;

////////////////////////////////////////
// image upload to firebase
// import React, { useState } from "react";
// import { getStorage, ref, uploadBytes,getMetadata } from "firebase/storage";

// const Contact = () => {
//   const [image, setImage] = useState("");
//   const storage = getStorage();

//   const upload = () => {
//     if (image == null) return;
//     // Create the file metadata
//     console.log(image, image.name, "image properties");
//     // const Image =image.name

//     const file = image;
//     const path = `/images/${file.name}`;
//     console.log(path, "path");
//     const storageRef = ref(storage, path);
//     const metadata = {
//       contentType: "image/jpeg",
//     };

//     uploadBytes(storageRef, file, metadata);
//   };

// const download = () => {
//   const file = image;
//   const path = `/images/${file.name}`;
//   const forestRef = ref(storage, path);

//   // Get metadata properties
//   getMetadata(forestRef)
//     .then((metadata) => {
//       // Metadata now contains the metadata for 'images/forest.jpg'
//       console.log(metadata);
//     })
//     .catch((error) => {
//       // Uh-oh, an error occurred!
//       console.log(error);
//     });

// }

//   return (
//     <>
//       <div>Contact</div>
//       <div>
//         <center>
//           <input
//             type="file"
//             onChange={(e) => {
//               setImage(e.target.files[0]);
//             }}
//           />
//           <button onClick={upload}>Upload</button>
//           <button onClick={download}>download</button>
//         </center>
//       </div>
//     </>
//   );
// };

// export default Contact;

////////////////////////////////////
// firebase notification

import React from 'react'
import { getMessaging, getToken } from "firebase/messaging";


const Contact = () => {


 
    //  // Initialize Firebase
    const messaging = getMessaging();
  Notification.requestPermission().then((permission) => {
  if (permission === 'granted') {
  
    console.log('Notification permission granted.');
        getToken(messaging,{vapidKey: "BPjPjctY9X5o1wL-AW1ljx6wa3YrNvXnVVPCco0jCqnjMG2VnZ8jF3BNhOBph1ZOyK6gGc7x0qtWqYt6-dNfqdk"}).then((currentToken) => {
          if (currentToken) {
            console.log(currentToken);
          } else {
            // Show permission request.
            console.log('No Instance ID token available. Request permission to generate one.');
  
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
        });
  } else {
    console.log('Unable to get permission to notify.');
  }
  });


  return (
    <div>Contact</div>
  )
}

export default Contact