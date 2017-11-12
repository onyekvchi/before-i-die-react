import styled, { css } from "styled-components";

export const StyledNew = styled.div`
  padding: 120px;
  height: 100%;
  width: 100%;
  background-color: #fff;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9;
  transform: translateY(100%);
  transition: transform 600ms cubic-bezier(0.4, 0, 0, 1),
    -webkit-transform 600ms cubic-bezier(0.4, 0, 0, 1),
    opacity 600ms cubic-bezier(0.4, 0, 0, 1);
  transition-delay: 100ms;
  display: flex;
  align-items: center;

  ${props =>
    props.visible &&
    css`
      transform: translateX(0);
      transition-delay: 0ms;
    `};

  @media (max-width: 500px) {
    padding: 45px 0 15px;
  }
`;

export const Input = styled.input`
  padding: 15px 0;
  color: black;
  outline: none;
  margin-top: 8px;
  border: none;
  border-bottom: 1px solid #ddd;
  display: block;
  font-size: 1.6rem;
  width: 100%;
  max-width: 300px;

  @media (max-width: 500px) {
    font-size: 1.6rem;
    padding: 15px 0;
    width: 100%;
    max-width: 100%;
  }
`;

export const Error = styled.div`
  padding: 12px 25px;
  font-size: 1.4rem;
  background-color: #fdf3f4;
  opacity: ${props => (props.show ? 1 : 0)};
  pointer-events: ${props => (props.show ? "auto" : "none")};
  margin-bottom: 45px;
  transition: all 300ms;
  color: black;
`;

export const Success = styled.div`
  padding: 12px 25px;
  font-size: 1.4rem;
  color: white;
  background-color: #dff0d8;
  border-color: #d0e9c6;
  color: #3c763d;
  opacity: ${props => (props.show ? 1 : 0)};
  pointer-events: ${props => (props.show ? "auto" : "none")};
  margin-bottom: 45px;
  transition: all 300ms;
  border-radius: 3px;
`;

export const TextArea = styled.textarea`
  padding: 30px 0;
  border: 1px solid transparent;
  width: 100%;
  font-size: 4.8rem;
  outline: none;

  @media (max-width: 500px) {
    font-size: 3.2rem;
    padding: 15px 0;
  }
`;

export const Heading = styled.h2`
  font-size: 2.1rem;
  color: rgba(0, 0, 0, 0.6);
  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

export const Submit = styled.button`
  padding: 15px 36px;
  color: white;
  background: #2dba58;
  border-radius: 5px;
  display: inline-block;
  margin-top: 30px;
  text-align: center;
  border: none;
  font-size: 2.4rem;
  transition: all 300ms;
  cursor: pointer;
  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`;
