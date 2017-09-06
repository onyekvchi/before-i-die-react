import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import TransitionGroup from "react-addons-transition-group";
import TransitionGroup from "react-transition-group/TransitionGroup";

import Hero from "./components/Hero";
import About from "./components/About";
import NewQuote from "./components/NewQuote";

const AppStyle = {
  height: "100%",
  width: "100%",
  background: "rgba(0,0,0,1)"
};

class App extends Component {
  render() {
    return (
      <div style={AppStyle}>
        <Route
          path="/"
          render={({ location }) => (
            <Hero active={location.pathname === "/" && true} />
          )}
        />
        <Route
          path="/"
          render={({ location }) => (
            <NewQuote visible={location.pathname === "/new" && true} />
          )}
        />
      </div>
    );
  }
}

export default App;
