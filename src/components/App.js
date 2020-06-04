import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import useLocalStorage from "./../hooks/useLocalStorage";
import HeroSection from "./Layout/HeroSection";
import Testimonial from "./Layout/Testimonial";
import Footer from "./Layout/Footer";
import Register from "./Auth/Register";

let App = () => {
  const [auth] = useLocalStorage("auth", "");
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
