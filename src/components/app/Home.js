import React, { Component } from "react";
import Hero from "./home/Hero/Hero";
import About from "./home/About/About";

const HomeStyle = {
  minHeight: "100%",
  width: "100%",
  background: "rgba(0,0,0,1)",
  overflow: "scroll"
};

export default class Home extends Component {
  render() {
    return (
      <div style={HomeStyle}>
        <Hero active={this.props.active}/>
        <About />
      </div>
    );
  }
}
