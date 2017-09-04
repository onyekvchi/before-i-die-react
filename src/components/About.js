import React, { Component } from "react";
import styled, { css } from "styled-components";
import Container from "./Container";
import Spinner from "./Spinner";
import CSSTransitionGroup from "react-addons-css-transition-group";
import { getGalleryImages } from "./../utils";
import Transition from "react-transition-group/Transition";

class About extends Component {
  state = {
    images: [],
    visible: false
  };

  componentDidMount = () => {
    getGalleryImages().then(imageUrls => {
      this.setState({
        images: imageUrls
      });
    });
  };

  render() {
    return (
      <AboutStyle className="annoying" visible={this.props.visible}>
        <Container>
          <Description>
            #BeforeIDieLagos is a collaborative art project, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris.
          </Description>

          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            component="div"
          >
            {this.state.images.length !== 0 ? (
              <div key="gallery">
                <Gallery>{renderImages(this.state.images)}</Gallery>
                <div style={{ textAlign: "center" }}>
                  <FollowLink href="#">See more images</FollowLink>
                </div>
              </div>
            ) : (
              <div
                key="loader"
                style={{ textAlign: "center", paddingTop: "60px" }}
              >
                <Spinner />
              </div>
            )}
          </CSSTransitionGroup>
        </Container>
      </AboutStyle>
    );
  }
}

export default About;

const renderImages = images => {
  return images.map((imageUrl, i) => (
    <GalleryImage key={i} style={{ backgroundImage: `url(${imageUrl})` }} />
  ));
};

const AboutStyle = styled.div`
  height: 100%;
  width: 50%;
  overflow: scroll;
  background: white;
  padding: 60px 0;
  color: black;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
  opacity: 0;
  transform: translateX(-100%);
  transition: transform 500ms cubic-bezier(0.4, 0, 0, 1),
    -webkit-transform 500ms cubic-bezier(0.4, 0, 0, 1);

  ${props =>
    props.visible &&
    css`
      opacity: 1;
      transform: translateX(0);
    `};
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.8);
  left: 0; 
  top: 0;
  props
`;

const Description = styled.h2`
  font-size: 1.8rem;
  line-height: 1.6;
  max-width: 60%;
  width: 100%;
  //   text-align: justify;
  text-align: center;
  margin: 60px auto 75px;
`;

const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;
const GalleryImage = styled.div`
  margin: 3px;
  flex-grow: 1;
  height: 350px;
  width: 48%;
  background-color: #ddd;
  background-position: center;
  background-size: cover;
`;

const FollowLink = styled.a`
  padding: 12px 24px;
  color: white;
  background: black;
  border-radius: 100px;
  display: inline-block;
  margin-top: 75px;
  text-align: center;
`;
