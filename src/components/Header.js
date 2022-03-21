import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../action/index";
import { getAuth ,signOut } from "firebase/auth";
function Header() {
  const cartQuantity = useSelector(
    (state) => state.productReducer.cartQuantity
  );
  const email = useSelector((state) => state.productReducer.email);
  const loggedIn = useSelector((state) => state.productReducer.loggedIn);
  const auth = getAuth();

  const dispatch = useDispatch();

  const handleLogOut = () => {
    signOut(auth);
    dispatch(logOut());
    console.log("logged out");
  };

  return (
    <div>
      {loggedIn ? (
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
              <a className="navbar-brand fw-bold fs-5 text-light" href="/">
                Online-Shop
              </a>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                  <li className="nav-item ">
                    <Link className="nav-link  text-light" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link  text-light" to="/products">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-light" to="/">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-light" to="/">
                      Contact
                    </Link>
                  </li>
                </ul>
               
                  <Link to="/cart" className="btn btn-outline-light ms-2">
                    <i className="fa fa-solid fa-cart-arrow-down me-1 ">
                      {cartQuantity > 0 ? cartQuantity : null}
                    </i>
                    cart
                  </Link>
                  <div className=" ms-2 text-white text-center">
                    <i
                      className="fa fa-user-circle-o fa-lg"
                      aria-hidden="true"
                    ></i>
                    {loggedIn ? email : null}
                    <br />
                    <button className="btn btn-danger btn-sm" onClick={handleLogOut}>
                      Logout
                    </button>
                  </div>
                
              </div>
            </div>
          </nav>
        </header>
      ) : (
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
              <a className="navbar-brand fw-bold fs-5 text-light" href="/">
                Online-Shop
              </a>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              
                  <li className="nav-item">
                    <Link className="nav-link text-light" to="/">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-light" to="/">
                      Contact
                    </Link>
                  </li>
                </ul>
                <div className="buttons">
                  <Link to="/login" className="btn btn-outline-light">
                    <i className="fa fa-sign-in me-1"></i>
                    login
                  </Link>
                  <Link to="/register" className="btn btn-outline-light ms-2">
                    <i className="fa fa-user-plus me-1"></i>
                    register
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
      )}
    </div>
  );
}

export default Header;
