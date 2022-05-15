import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import CheckOut from "./components/CheckOut";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { config } from "./config/config";
import ProtectedRoute from "./components/ProtectedRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

initializeApp(config.firebaseConfig);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/home" component={Home} />
          <ProtectedRoute path="/checkout" component={CheckOut} />
          <ProtectedRoute path="/about" component={About} />
          <ProtectedRoute path="/contact" component={Contact} />
          <ProtectedRoute path="/products" component={Products} />
          <ProtectedRoute path="/product" component={Product} />
          <ProtectedRoute path="/cart" component={Cart} />
          <ProtectedRoute path="*" />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
