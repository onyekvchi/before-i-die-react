import styled, { css } from "styled-components";

export const Toggle = styled.button`
  position: fixed;
  left: ${props => props.left && "45px"};
  right: ${props => props.right && 0};
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

  &:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    background-color: #101010;
    transform: scale(0.5);
    opacity: 0;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1),
      opacity 0.15s cubic-bezier(0.4, 0, 0, 1),
      background-color 0.3s cubic-bezier(0.4, 0, 0, 1),
      -webkit-transform 0.3s cubic-bezier(0.4, 0, 0, 1);
    border-radius: 35px;
    z-index: -1;
  }

  &:hover {
    &:after {
      transform: scaleX(1);
      opacity: 0.3;
    }
  }
`;

export const ToggleIcon = styled.span`
  width: 16px;
  height: 12px;
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
    right: 0;
    left: 0;
    display: block;
    border-top: 2px solid #101010;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1),
      -webkit-transform 0.3s cubic-bezier(0.4, 0, 0, 1);
    transform: translateZ(0);
  }

  ${Toggle}:hover & {
    transform: rotate(90deg);
  }

  ${props =>
    props.active && css`transform: rotate(90deg) translateX(1px);`} &:before {
    top: 0;
    ${props =>
      props.active &&
      css`
        transform: rotate(-45deg) translate(-4px, 3px);
        border-color: white;
      `};
  }

  &:after {
    bottom: 0;
    ${props =>
      props.active &&
      css`
        transform: rotate(45deg) translate(-4px, -3px);
        border-color: white;
      `};
  }
`;

export const ToggleIconWrap = styled.div`
  height: 50px;
  width: 50px;
  margin: 10px;
  border-radius: 70px;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1),
    background-color 0.3s cubic-bezier(0.4, 0, 0, 1),
    -webkit-transform 0.3s cubic-bezier(0.4, 0, 0, 1);
  ${props => props.active && css`background-color: #101010;`};
`;

export const ToggleLabel = styled.span`
  transform: translateX(-20px);
  opacity: 0;
  color: white;
  font-size: 1.8rem;
  opacity: 0;
  padding-left: 70px;
  padding-right: 30px;
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1),
    opacity 0.15s cubic-bezier(0.4, 0, 0, 1),
    -webkit-transform 0.3s cubic-bezier(0.4, 0, 0, 1);

  ${Toggle}:hover & {
    transform: translateX(0);
    opacity: 1;
    transition-delay: 0.05s;
  }
`;
