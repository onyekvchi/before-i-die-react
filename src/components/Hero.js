import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import styled, { css } from "styled-components";
import Container from "./Container";
import Quote from "./Quote";
import { QuoteStyle } from "./Quote";
import { ToggleLeft, ToggleRight } from "./Toggle";
import { getQuotes } from "./../utils";
import About from "./About";

const AppStyle = {
  height: "100%",
  width: "100%",
  background: "rgba(0,0,0,1)",
  overflowY: "scroll"
};

class Hero extends Component {
  state = {
    position: 0,
    quotes: {},
    meta: {}
  };

  componentDidMount = () => {
    getQuotes().then(response =>
      this.setState({
        quotes: response.quotes,
        meta: response.meta
      })
    );
  };

  doneTyping = () => {
    this.setState({
      position:
        this.state.position === this.state.quotes.length - 1
          ? 0
          : this.state.position + 1
    });
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
      <div style={AppStyle}>
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

            <Author>Onyekachi Mbaike</Author>
          </Container>
          <ToggleRight
            onClick={this.rightToggleClicked}
            label="Submit"
            active={this.props.location.pathname === "/new"}
          />
          <Overlay active={inactive} onClick={this.overlayClicked} />
        </HeroStyle>
        <About />
      </div>
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
  font-style: italic;
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

const Author = styled.div`
  font-size: 1.8rem;
  font-family: "Grafik Web";
  display: none;
`;
