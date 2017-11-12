import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "./app/Home";
import New from "./app/new/New";

const appStyle = {
  height: "100%",
  width: "100%",
  background: "rgba(0,0,0,1)"
};

class App extends Component {
  render() {
    return (
      <div style={appStyle}>
        <Route
          path="/"
          render={({ location }) => (
            <Home active={location.pathname === "/" && true} />
          )}
        />
        <Route
          path="/"
          render={({ location }) => (
            <New visible={location.pathname === "/new" && true} />
          )}
        />
      </div>
    );
  }
}

export default App;
