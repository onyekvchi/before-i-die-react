import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

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
        <Switch>
          <Route path="/about" exact component={About}></Route>
          <Route path="/new" exact component={NewQuote}></Route>
          <Route path="/" component={Hero} />
        </Switch>
      </div>
    );
  }
}

export default App;
