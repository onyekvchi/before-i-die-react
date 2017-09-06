import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import styled, { css } from "styled-components";
import Container from "./Container";
import Quote from "./Quote";
import { QuoteStyle } from "./Quote";
import { ToggleLeft, ToggleRight } from "./Toggle";
// import Type from "react-typing-animation";
import { getQuotes } from "./../utils";

class Hero extends Component {
  state = {
    position: 0,
    quotes: {},
    meta: {}
  };

  componentDidMount = () => {
    getQuotes().then(response => this.setState({
      quotes: response.quotes,
      meta: response.meta
    }));
  };

  doneTyping = () => {
    this.setState({
      position:
        this.state.position === this.state.quotes.length - 1
          ? 0
          : this.state.position + 1
    });
  };

  leftToggleClicked = () => {
    const { active, history } = this.props;
    if (active) {
      history.push("/about");
    } else {
      history.push("/");
    }
  };

  rightToggleClicked = () => {
    const { active, history } = this.props;
    if (active) {
      history.push("/new");
    } else {
      history.push("/");
    }
  };

  overlayClicked = () => {
    this.props.history.push("/");
  };

  finishedTyping = () => {
    this.setState(
      {
        position:
          this.state.position === this.state.quotes.length - 1
            ? 0
            : this.state.position++
      },
      console.log(this.state.position)
    );
  };

  render() {
    const inactive = !this.props.active;
    return (
      <HeroStyle>
        <Container>
          <Title>#BeforeIDie</Title>
          {this.state.quotes.length > 0 && (
            <Quote
              pause={inactive}
              text={this.state.quotes[this.state.position].quote}
              onDone={this.doneTyping}
            />
          )}

          {/* <Type speed={100} onFinishedTyping={this.finishedTyping}>
            <QuoteStyle>
              {this.state.sentences[this.state.position]}
              <Type.Delay ms={3000} />
              <Type.Backspace count={this.state.sentences[this.state.position].length} />
            </QuoteStyle>
          </Type> */}

          {/* <Author>Onyekachi Mbaike</Author> */}
        </Container>
        <ToggleLeft
          onClick={this.leftToggleClicked}
          label="About"
          active={inactive}
        />
        <ToggleRight
          onClick={this.rightToggleClicked}
          label="Submit"
          active={inactive}
        />
        <Overlay active={inactive} onClick={this.overlayClicked} />
      </HeroStyle>
    );
  }
}

export default withRouter(Hero);

const HeroStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding-bottom: 100px;
  align-items: center;
  background-color: #c7dbd9;
  background-color: #dcbbc0;
`;

const Title = styled.h1`
  color: rgba(0, 0, 0, 0.4);
  margin-bottom: 15px;
  font-size: 2.4rem;
  font-weight: 500;
  // font-family: Georgia;
  // font-style: italic;
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 300ms ease-in-out;

  ${props =>
    props.active &&
    css`
      opacity: 1;
      pointer-events: auto;
    `};
`;

// const Author = styled.div`
//   color: white;
//   font-size: 1.5rem;
//   opacity: 0.5;
//   transition: opacity 300ms;
//   &:hover {
//     opacity: 1;
//   }
// `;
