import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delCartItem } from "../action/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import StripeCheckoutButton from "./StripeCheckoutButton";


function Cart() {
  const cart = useSelector((state) => state.productReducer.cart);
  const grandTotal = useSelector((state) => state.productReducer.grandTotal);

  const dispatch = useDispatch();

  const del = (item,price) => {
    dispatch(delCartItem(item,price));
    toast.success(" product deleted sucessfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div>
      <h1 className="text-center">Shopping cart</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col">quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index = 0) => {
            const { product, quantity } = item;
            const { title, image, price, id } = product;
            return (
              <tr key={id}>
                <th scope="row">{++index}</th>
                <td>{title}</td>
                <td>
                  <img
                    src={image}
                    alt="imageLoading..."
                    height="50px"
                    width="50px"
                  />
                </td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{price * quantity}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => del(item,price)}
                  >
                    <i className="fa fa-trash fa-lg" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="total text-center">
      <h2>GrandTotal:{grandTotal > 0 ? grandTotal : 0}</h2>
      {/* <Link to="/checkout">
      <button className="btn btn-primary ">Checkout</button>
      </Link> */}
      <StripeCheckoutButton price={grandTotal} />

      </div>
    </div>
  );
}

export default Cart;
