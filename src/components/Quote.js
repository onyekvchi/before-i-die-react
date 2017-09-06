import React, { Component } from "react";
import styled from "styled-components";

export default class Quote extends Component {
  defaultProps = {
    pause: false
  };

  state = {
    position: 0
  };

  type = () => {
    if (!this.props.pause) {
      if (this.state.position > this.props.text.length) {
        this.clear();
      } else {
        this.next();
      }
    }
  };

  next = () => {
    const delay = Math.floor(Math.random() * (250 - 20 + 1)) + 20;
    this.typeTimeout = setTimeout(() => {
      this.setState({ position: this.state.position + 1 });
      this.type();
    }, delay); // randomly wait before typing next letter
  };

  clear = () => {
    // delay before deleting all letters from screen
    this.clearTimeout = setTimeout(() => {
      this.delete = setInterval(() => {
        this.setState(
          { position: this.state.position >= 1 ? this.state.position - 1 : 0 },
          this.checkClearInterval // clear delete interval when all letters have been deleted
        );
      }, 75);
    }, 2000);
  };

  checkClearInterval = () => {
    if (this.state.position === 0) {
      clearInterval(this.delete);
      this.props.onDone();
    }
  };

  componentDidMount = () => {
    this.type();
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ position: 0 }, () => {
      this.props = nextProps;
      setTimeout(() => this.type(), 500); // delay before starting the next sentence
    });
  };

  componentWillUnmount = () => {
    clearTimeout(this.typeTimeout);
    clearTimeout(this.clearTimeout);
  };

  render() {
    return (
      <QuoteStyle>{this.props.text.substr(0, this.state.position)}</QuoteStyle>
    );
  }
}

const QuoteStyle = styled.h2`
  font-size: 4.8rem;
  font-weight: 500;
  margin-bottom: 45px;
  min-height: 96px;
  transition: min-height 500ms;
  line-height: 1.3;
  // text-align: center;
  // font-family: Georgia;
`;
