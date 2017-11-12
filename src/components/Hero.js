import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Container from "./Container";
import Quote, { QuoteStyle } from "./Quote";
import { ToggleRight } from "./Toggle";
import { getQuotes } from "./../utils";
import About from "./About";
import { HeroStyle, Title, Author, Overlay } from "./Hero.style";
import LoadingQuote from "./LoadingQuote";

const AppStyle = {
  height: "100%",
  width: "100%",
  background: "rgba(0,0,0,1)",
  overflowY: "scroll"
};

class Hero extends Component {
  state = {
    position: 0,
    quotes: [],
    meta: {},
    bgPosition: 0,
    bg: ["#E51B26", "#FFF219", "#C0D537", "#B71A8C", "#19378F", "#5F6061"]
  };

  componentDidMount = () => {
    getQuotes().then(response => {
      this.setState({
        quotes: response
      });
    });

    this.bgInterval = setInterval(() => {
      let { bg, bgPosition } = this.state;
      bgPosition = bgPosition < bg.length - 1 ? bgPosition + 1 : 0;
      this.setState({
        bgPosition: bgPosition
      });
    }, 30000);
  };

  doneTyping = () => {
    this.setState((prevState, props) => ({
      position:
        prevState.position < prevState.quotes.length - 1
          ? prevState.position + 1
          : 0
    }));
  };

  toggleClicked = () => {
    const { active, history } = this.props;
    if (active) {
      history.push("/new");
    } else {
      history.push("/");
    }
  };

  overlayClicked = () => {
    this.props.history.push("/");
  };

  render() {
    const inactive = !this.props.active;
    const { bg, bgPosition } = this.state;
    return (
      <div style={AppStyle}>
        <HeroStyle bg={bg[bgPosition]}>
          <Container>
            {this.state.quotes.length > 0 ? (
              <div>
                <Title>#BeforeIDie</Title>
                <Quote
                  text={this.state.quotes[this.state.position].quote}
                  onDone={this.doneTyping}
                />
              </div>
            ) : (
              <LoadingQuote />
            )}
          </Container>
          <ToggleRight
            onClick={this.toggleClicked}
            label="Submit"
            active={this.props.location.pathname === "/new"}
          />
        </HeroStyle>
        <About />
      </div>
    );
  }
}

export default withRouter(Hero);
