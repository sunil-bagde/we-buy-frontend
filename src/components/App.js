import React, { Fragment } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HeroSection from "./Layout/HeroSection";
import Testimonial from "./Layout/Testimonial";
import Footer from "./Layout/Footer";
import Register from "./Auth/Register";
console.log("Register", Register);

let App = () => {
  return (
    <Router>
      <Route exact path="/">
        <HeroSection />
        <Testimonial />
        <Footer />
      </Route>

      <Switch>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
