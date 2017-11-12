import React, { Component } from "react";
import styled from "styled-components";
import ReactTimeout from "react-timeout";

class Quote extends Component {
  state = {
    position: 0
  };

  type = () => {
    this.setState(
      prevState => ({
        position: prevState.position + 1
      }),
      this.next
    );
  };

  delayedType = () => {
    const delay = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
    this.props.setTimeout(this.type, delay);
  };

  next = () => {
    if (this.state.position < this.props.text.length) {
      this.delayedType(); // if there are more letters, type the next letter
    } else if (this.state.position === this.props.text.length) {
      this.props.setTimeout(this.delayedType, 2000); // if this is the last letter, wait a little
    } else {
      this.backspace(); // if we've finished typing all the letters, start deleting
    }
  };

  backspace = () => {
    this.setState(
      prevState => ({
        position: prevState.position - 1
      }),
      this.prev
    );
  };

  delayedBackspace = () => {
    this.props.setTimeout(this.backspace, 50);
  };

  prev = () => {
    if (this.state.position > 0) {
      this.delayedBackspace();
    } else {
      this.props.onDone();
    }
  };

  componentDidMount = () => {
    this.type();
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.text !== this.props.text) {
      this.props = nextProps;
      if (this.state.position === 0) {
        this.props.setTimeout(this.type, 1000);
      }
    }
  };

  render() {
    return (
      <QuoteStyle>{this.props.text.substr(0, this.state.position)}</QuoteStyle>
    );
  }
}

export default ReactTimeout(Quote);

const QuoteStyle = styled.h2`
  font-size: 4.8rem;
  font-weight: 500;
  min-height: 130px;
  line-height: 1.3;
  color: black;
  font-family: "Miller Web", Georgia, times, serif;

  @media (max-width: 500px) {
    font-size: 3.6rem;
  }
`;
