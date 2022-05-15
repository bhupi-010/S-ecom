import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getProduct, getProducts } from "../action/index";

export default function Products() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState(data);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    const GetProducts = async () => {
      // await axios.get(`${process.env.REACT_APP_API}`).then((res) => {
        await axios.get(`http://fakestoreapi.com/products`).then((res) => {
        setData(res.data);
        setFilterData(res.data);
        dispatch(getProducts(res.data));
        setLoading(false);
      });
    };
    GetProducts();
  }, [dispatch]);

  const showProduct = (item) => {
    dispatch(getProduct(item));
  };

  const filterProduct = (cate) => {
    setFilterData(data.filter((item) => item.category === cate));
  };

  return (
    <>
      {loading ? (
        <div className="text-center">
          <button className="btn btn-primary " type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        </div>
      ) : (
        <div>
          <div className="buttons d-flex justify-content-center mb-5 my-3">
            <button
              className="btn btn-outline-dark  mx-2"
              onClick={() => setFilterData(data)}
            >
              All
            </button>
            <button
              className="btn btn-outline-dark mx-2"
              onClick={() => filterProduct("men's clothing")}
            >
              men's clothing
            </button>
            <button
              className="btn btn-outline-dark mx-2"
              onClick={() => filterProduct("women's clothing")}
            >
              women's clothing
            </button>
            <button
              className="btn btn-outline-dark mx-2"
              onClick={() => filterProduct("electronics")}
            >
              electronics
            </button>
            <button
              className="btn btn-outline-dark mx-2"
              onClick={() => filterProduct("jewelery")}
            >
              jewelery
            </button>
          </div>

          <div id="back" className="row row-cols-1 row-cols-md-3 g-4">
            {filterData.map((item) => {
              const { title, id, image, price } = item;

              return (
                <div className="col " key={id}>
                  <div id="card" className="card ">
                    <div className="card-body text-center ">
                      <img
                        id="img"
                        src={image}
                        className="img-thumbnail"
                        alt="..."
                      ></img>
                      <h5 className="card-title">
                        {title.substring(0, 20)}....
                      </h5>
                      <p className="card-text">price : ${price}</p>

                      <Link
                        className="btn btn-primary"
                        to="/product"
                        onClick={() => showProduct(item)}
                      >
                        Buy
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
