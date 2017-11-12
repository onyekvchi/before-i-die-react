import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

export default class LoadingQuote extends Component {
  render() {
    return (
      <ShimmerWrap>
        <Shimmer top={0} left={0} height={30} width={15} />
        <Shimmer top={45} left={0} height={60} width={100} />
        <Shimmer top={115} left={0} height={60} width={45} />
      </ShimmerWrap>
    );
  }
}

const pulse = keyframes`
  0% { opacity: 0.05; }
  50% { opacity: 0.25; }
  100% { opacity: 0.05; }
`;

const ShimmerWrap = styled.div`
  height: 175px;
  width: 100%;
  position: relative;
`;

const Shimmer = styled.div`
  border-radius: 3px;
  position: absolute;
  left: ${props => props.left + "px"};
  top: ${props => props.top + "px"};
  height: ${props => props.height + "px"};
  width: ${props => props.width + "%"};
  background-color: black;
  animation: ${pulse} 3s infinite ease-in-out;

  @media (max-width: 500px) {
    height: ${props =>
      props.height >= 60 ? props.height * 0.75 + "px" : props.height + "px"};
    top: ${ props => props.top === 115 &&  "100px"}
  }
`;
