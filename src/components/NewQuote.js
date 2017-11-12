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
        <Container>
          <h2>Before I Die,</h2>
          <form onSubmit={this.handleSubmit}>
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
            <Error show={this.state.error}>{this.state.error}</Error>
            <Submit
              disabled={this.state.text.length < 12 || this.state.loading}
            >
              {this.state.loading ? (
                <Spinner color="white" size="25px" />
              ) : (
                <span>{this.state.error ? "Retry" : "Submit"}</span>
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
  padding: 20px;
  color: black;
  outline: none;
  margin-top: 8px;
  border: 1px solid #ddd;
  border-radius: 3px;
  display: block;
  font-size: 1.6rem;
  width: 100%;
  max-width: 300px;

  @media(max-width: 500px) {
    font-size: 1.6rem;
    padding: 15px;
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
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-top: 25px;
  width: 100%;
  font-size: 6rem;
  outline: none;

  @media (max-width: 500px) {
    font-size: 2.1rem;
    padding: 15px;
  }
`;

const Submit = styled.button`
  padding: 12px 24px;
  color: white;
  background: black;
  border-radius: 100px;
  display: inline-block;
  margin-top: 30px;
  text-align: center;
  border: none;
  font-size: 1.6rem;
  transition: all 300ms;
  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`;
