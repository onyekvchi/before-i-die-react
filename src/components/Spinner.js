import React from 'react';
import styled from 'styled-components';

const Spinner = ({ color, size }) => (
  <StyledSpinner color={color} size={size} viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="16"
      fill="none"
      strokeWidth="4"
    />
  </StyledSpinner>
);

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  width: ${props => props.size || "50px"};
  height: ${props => props.size || "50px"};
  
  & .path {
    stroke: black;
    stroke: ${props => props.color};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -20;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -100;
    }
  }
`;

export default Spinner;