import React, { Component } from "react";
import styled from "styled-components";

import Container from "./Container";

export default class NewQuote extends Component {
    componentDidMount = () => {

    }
  render() {
    return (
      <NewQuoteStyle>
        <Container>
          <h2>Before I Die,</h2>
          <form>
            <TextArea placeholder="I want to..." name="quote"></TextArea>
            <Submit>Submit</Submit>
          </form>
        </Container>
      </NewQuoteStyle>
    );
  }
}

const NewQuoteStyle = styled.div`
  padding: 120px;
  height: 100%;
  width: 100%;
  background-color: #fff;
`;

const TextArea = styled.textarea`
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-top: 25px;
  width: 100%;
  font-size: 6rem;
  outline: none;
`;

const Submit = styled.button`
padding: 12px 24px;
color: white;
background: black;
border-radius: 100px;
display: inline-block;
margin-top: 75px;
text-align: center;
border: none;
font-size: 1.6rem;
`;
