import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import styled, { css } from "styled-components";
import Container from "./Container";
import Quote from "./Quote";
import ToggleLeft from "./Toggle";

class Hero extends Component {
  state = {
    position: 0,
    sentences: ["I want to be accepted by my family", "I want to enjoy life"]
  };

  doneTyping = () => {
    this.setState({
      position:
        this.state.position === this.state.sentences.length - 1
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

  render() {
    return (
      <HeroStyle>
        <Container>
          <Title>#BeforeIDie</Title>
          <Quote
            pause={!this.props.active}
            text={this.state.sentences[this.state.position]}
            onDone={this.doneTyping}
          />
          {/* <Author>Onyekachi Mbaike</Author> */}
        </Container>
        <ToggleLeft
          onClick={this.leftToggleClicked}
          label="About"
          active={!this.props.active}
        />
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
  // color: rgba(255, 255, 255, 0.2);
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 15px;
  font-size: 2.4rem;
  font-weight: 500;
  font-family: Georgia;
  font-style: italic;
  // text-align: center;
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
