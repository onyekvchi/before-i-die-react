import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "./Container";
import Quote from "./Quote";

export default class Hero extends Component {
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

  render() {
    return (
      <HeroStyle>
        <Container>
          <Title>#BeforeIDie</Title>
          <Quote
            text={this.state.sentences[this.state.position]}
            onDone={this.doneTyping}
          />
          {/* <Author>Onyekachi Mbaike</Author> */}
        </Container>
        <BottomLink left>
          <Link to="/about">About</Link>
        </BottomLink>
				<BottomLink right>
          <Link to="/new">Submit</Link>
        </BottomLink>
      </HeroStyle>
    );
  }
}

const HeroStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding-bottom: 100px;
  align-items: center;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 15px;
  font-size: 2.8rem;
  font-weight: 500;
`;

const Author = styled.div`
  color: white;
  font-size: 1.5rem;
  opacity: 0.5;
  transition: opacity 300ms;
  &:hover {
    opacity: 1;
  }
`;

const BottomLink = styled.div`
  position: fixed;
  left: ${ props => props.left && 0};
  right: ${ props => props.right && 0};
  bottom: 0;
  font-size: 2.1rem;
  color: rgba(255, 255, 255, 0.4);
  transition: color 300ms;
  padding: 30px;
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;
