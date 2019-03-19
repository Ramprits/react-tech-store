import React, { Component, Fragment } from "react";
import "./App.css";
import { Router, Switch } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Product from "./pages/ProductPage";
import ProductDetail from "./pages/SiggleProductPage";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Router path="/" exact component={Home} />
          <Router path="/about" component={About} />
          <Router path="/contact" component={Contact} />
          <Router path="/products" component={Product} />
          <Router path="/product/:id" component={ProductDetail} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
