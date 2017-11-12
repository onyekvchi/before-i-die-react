import styled, { css } from "styled-components";

export const HeroStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding-bottom: 100px;
  align-items: center;
  background-color: ${props => props.bg};
  transition: background-color 15s;
`;

export const Title = styled.h1`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 15px;
  font-size: 2.4rem;
  font-weight: 500;
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
