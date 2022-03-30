import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../action/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product() {
  const [quan, setQuan] = useState(1);
  const productData = useSelector((state) => state.productReducer.productData);
  const dispatch = useDispatch();

  const add = (product, quan) => {
    if(quan > 0){
    dispatch(addToCart(product, quan));

    toast.success("item added to cart sucessfully", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }else{
    toast.error("enter valid quantity", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  };

  return (
    <div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={productData.image}
              alt="..."
              height="590px"
              width="450px"
            />
          </div>
          <div className="col-md-8 text-center">
            <div className="card-body ">
              <h5 className="card-header">{productData.title}</h5>
              <p className="card-text">{productData.description}</p>
              <p className="card-text ">category : {productData.category}</p>
              <p className="card-text ">Price : ${productData.price}</p>
            </div>
            <label> quantity : </label>

            <input
              type="number"
              onChange={(e) => setQuan(e.target.value)}
              value={quan}
            />
            <br />
            <br />
            <button
              className="btn btn-primary"
              onClick={() => add(productData, quan)}
            >
              add to cart
            </button>
            <Link className="btn btn-primary mx-2" to="/cart">
              view cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
