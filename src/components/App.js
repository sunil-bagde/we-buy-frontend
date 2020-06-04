import React, { Fragment } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import useLocalStorage from "./../hooks/useLocalStorage";
import HeroSection from "./Layout/HeroSection";
import Testimonial from "./Layout/Testimonial";
import Footer from "./Layout/Footer";
import Register from "./Auth/Register";

let App = () => {
  const [auth, setAuth] = useLocalStorage("auth", "");
  return (
    <Router>
      <Route exact path="/">
        <HeroSection {...auth} />
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
