import React, { Component } from "react";
import styled from "styled-components";
import Container from "./Container";
import Spinner from "./Spinner";
import CSSTransitionGroup from "react-addons-css-transition-group";
import { getGalleryImages } from "./../utils";

export default class About extends Component {
  state = {
    images: []
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
      <AboutStyle>
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
              <div key="loader" style={{ textAlign: "center", paddingTop: "60px" }}>
                <Spinner />
              </div>
            )}
          </CSSTransitionGroup>
        </Container>
      </AboutStyle>
    );
  }
}

const renderImages = images => {
  return images.map(imageUrl => (
    <GalleryImage style={{ backgroundImage: `url(${imageUrl})` }} />
  ));
};

const AboutStyle = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;
  background: white;
  padding: 60px 0;
  color: black;
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
  height: 480px;
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