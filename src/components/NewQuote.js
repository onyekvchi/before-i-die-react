import React, { Component } from "react";
import styled, { css } from "styled-components";
import Container from "./Container";
import Spinner from "./Spinner";
import { postEntry } from "./../utils";

export default class NewQuote extends Component {
  state = {
    text: "",
    name: "",
    error: "",
    loading: false
  };

  componentDidMount = () => {
    this.textArea.focus();
  };

  componentDidUpdate = prevProps => {
    if (this.props.visible && !prevProps.visible) {
      this.textArea.focus();
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true, error: "" });

    postEntry({ text: this.state.text, name: this.state.name })
      .then(() => {
        // handle success
        this.setState({
          text: "",
          name: "",
          loading: false
        });
      })
      .catch(error => this.setState({ error: error.message, loading: false }));
  };

  setError = error => {
    this.setState({
      error
    });
  };

  render() {
    return (
      <NewQuoteStyle visible={this.props.visible}>
        <Container style={{ marginBottom: 90 }}>
          <Heading>Before I Die,</Heading>
          <form onSubmit={this.handleSubmit}>
            <Error show={this.state.error}>{this.state.error}</Error>

            <TextArea
              name="text"
              value={this.state.text}
              placeholder="I want to..."
              onChange={this.handleChange}
              innerRef={textarea => {
                this.textArea = textarea;
              }}
            />
            <Input
              name="name"
              value={this.state.name}
              placeholder="Your name (optional)"
              onChange={this.handleChange}
            />
            <Submit
              disabled={this.state.text.length < 12 || this.state.loading}
            >
              {this.state.loading ? (
                <Spinner color="white" size="20px" />
              ) : (
                <span>{this.state.error ? "Retry" : "Share"}</span>
              )}
            </Submit>
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

const Input = styled.input`
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

const Error = styled.div`
  padding: 12px 25px;
  font-size: 1.4rem;
  color: white;
  background-color: #fdf3f4;
  opacity: ${props => (props.show ? 1 : 0)};
  pointer-events: ${props => (props.show ? "auto" : "none")};
  margin-top: 25px;
  transition: all 300ms;
  color: black;
`;

const TextArea = styled.textarea`
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

const Heading = styled.h2`
  font-size: 2.1rem;
  color: rgba(0, 0, 0, 0.6);
  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

const Submit = styled.button`
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
