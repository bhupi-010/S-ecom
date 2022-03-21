import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { config } from "./config/config";
import ProtectedRoute from "./components/ProtectedRoute";

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

          <ProtectedRoute path="/products" component={Products} />
          <ProtectedRoute path="/product" component={Product} />
          <ProtectedRoute path="/cart" component={Cart} />
          <ProtectedRoute path="*" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
