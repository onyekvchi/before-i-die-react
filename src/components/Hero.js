import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Container from "./Container";
import Quote, { QuoteStyle } from "./Quote";
import { ToggleRight } from "./Toggle";
import { getQuotes, shuffle } from "./../utils";
import About from "./About";
import LoadingQuote from "./LoadingQuote";
import {
  HeroStyle,
  Title,
  Author,
  Overlay,
  ScrollDownIndicator
} from "./Hero.style";

const AppStyle = {
  height: "100%",
  width: "100%",
  background: "rgba(0,0,0,1)",
  overflowY: "scroll"
};

const backgrounds = [
  "#FDA67E",
  "#FD907E",
  "#E19E53",
  "#F9DA85",
  "#FBEFA4",
  "#FFF2DD",
  "#FAF9F1",
  "#E9FBFF",
  "#D4F7ED",
  "#D5EBED",
  "#85D6D1"
];

class Hero extends Component {
  state = {
    position: 0,
    quotes: [],
    bgPosition: 0,
    bg: shuffle(backgrounds)
  };

  componentDidMount = () => {
    getQuotes().then(response => {
      this.setState({
        quotes: shuffle(response)
      });
    });

    this.bgInterval = setInterval(() => {
      let { bg, bgPosition } = this.state;
      bgPosition = bgPosition < bg.length - 1 ? bgPosition + 1 : 0;
      this.setState({
        bgPosition: bgPosition
      });
    }, 30000);

    // immediately start transitioning
    this.setState(prevState => ({ bgPosition: prevState.bgPosition + 1 }));
  };

  goToNextQuote = () => {
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

  scrollToAboutSection = () => {
    document.getElementById("about").scrollIntoView({
      behavior: "smooth"
    });
  };

  render() {
    const inactive = !this.props.active;
    const { bg, bgPosition } = this.state;
    return (
      <div style={AppStyle}>
        <HeroStyle bg={bg[bgPosition]}>
          <Container>
            {this.state.quotes.length > 0 ? (
              <div key="content">
                <Title>Before I die,</Title>
                <Quote
                  text={this.state.quotes[this.state.position].quote}
                  onDone={this.goToNextQuote}
                />
              </div>
            ) : (
              <LoadingQuote key="loading" />
            )}
          </Container>
          <ToggleRight
            onClick={this.toggleClicked}
            label="Submit"
            active={this.props.location.pathname === "/new"}
          />
          <ScrollDownIndicator
            hoverColor={bg[bgPosition]}
            onClick={this.scrollToAboutSection}
          >
            ?
          </ScrollDownIndicator>
          <Overlay active={inactive} />
        </HeroStyle>
        <About />
      </div>
    );
  }
}

export default withRouter(Hero);
