import styled, { css } from "styled-components";

export const Toggle = styled.button`
  position: fixed;
  right: 45px;
  top: 45px;
  color: rgba(255, 255, 255, 0.4);
  transition: color 300ms;
  height: 70px;
  cursor: pointer;
  z-index: 4;
  appearance: none;
  border: none;
  border-radius: 35px;
  transition: transform 0.9s cubic-bezier(0.4, 0, 0, 1),
    -webkit-transform 0.9s cubic-bezier(0.4, 0, 0, 1);

  @media screen and (max-width: 500px) {
    right: 15px;
    top: 15px;
  }
`;

export const ToggleIcon = styled.span`
  width: 16px;
  height: 16px;
  position: relative;
  display: inline-block;
  transform: rotate(0deg);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1),
    -webkit-transform 0.3s cubic-bezier(0.4, 0, 0, 1);
  z-index: 3;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0px;
    top: 7px;
    height: 2px;
    width: 100%;
    background-color: black;
    display: block;
  }

  &:after {
    transform: rotate(90deg);
  }

  ${props =>
    props.active &&
    css`
      transform: rotate(-135deg);
      &:before,
      &:after {
        background-color: white;
      }
    `};
`;

export const ToggleIconWrap = styled.div`
  height: 50px;
  width: 50px;
  margin: 10px;
  border-radius: 70px;
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 300ms cubic-bezier(0.4, 0, 0, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0, 1),
    -webkit-transform 300ms cubic-bezier(0.4, 0, 0, 1);
  ${props => props.active && css`background-color: black;`};

  ${Toggle}:hover & {
    transform: ${props => !props.active && "rotate(-90deg)"};
  }
`;
