import styled, { css } from "styled-components";

export const StyledHero = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  padding-bottom: 100px;
  align-items: center;
  background-color: ${props => props.bg};
  transition: background-color 15s;
  position: relative;
`;

export const Title = styled.h1`
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 15px;
  font-size: 2.1rem;
  font-weight: 500;
  font-family: "Miller Web", Georgia, times, serif;
`;

export const Overlay = styled.div`
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

export const Author = styled.div`
  font-size: 1.8rem;
  font-family: "Grafik Web";
  display: none;
`;

export const ScrollDownIndicator = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  border: 2px solid black;
  position: absolute;
  left: 45px;
  bottom: 45px;
  font-size: 2.1rem;
  font-weight: bold;
  transition: background-color 500ms cubic-bezier(0.4, 0, 0, 1),
    color 500ms cubic-bezier(0.4, 0, 0, 1),
    transform 500ms cubic-bezier(0.4, 0, 0, 1);
  cursor: pointer;

  &:hover {
    background-color: black;
    color: ${props => props.hoverColor || "white"};
    transform: rotate(180deg);
  }

  @media (max-width: 500px) {
    left: 15px;
    bottom: 15px;
    border-width: 0px;
    font-size: 2.7rem;
    color: rgba(0, 0, 0, 0.75);
  }
`;
