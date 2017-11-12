import React, { Component } from "react";
import Container from "./../widgets/Container";
import Spinner from "./../widgets/Spinner";
import { postEntry } from "./../../../utils";
import {
  Submit,
  Input,
  TextArea,
  Success,
  Error,
  Heading,
  StyledNew
} from "./New.styled";

export default class New extends Component {
  state = {
    text: "",
    name: "",
    error: "",
    success: false,
    loading: false
  };

  componentDidMount = () => {
    this.textArea.focus();
  };

  componentDidUpdate = prevProps => {
    if (this.props.visible && !prevProps.visible) {
      this.textArea.focus();
      this.setState({ success: false });
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
        this.setState({
          text: "",
          name: "",
          loading: false,
          success: true
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
      <StyledNew visible={this.props.visible}>
        <Container style={{ marginBottom: 200 }}>
          <Error show={this.state.error}>{this.state.error}</Error>
          <Success show={this.state.success}>
            Your wish was posted successfully!
          </Success>
          <Heading>Before I Die,</Heading>
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
      </StyledNew>
    );
  }
}
