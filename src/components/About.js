import React, { Component } from "react";
import styled, { css } from "styled-components";
import Container from "./Container";
import Spinner from "./Spinner";
import CSSTransitionGroup from "react-addons-css-transition-group";
import { getGalleryImages } from "./../utils";

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
      <AboutStyle visible={this.props.visible}>
        <Container>
          <Description>
            <p>
              Before I Die is a global collaborative art project that invites
              people to contemplate death and reflect on their lives. Before I
              Die walls are created to make a space in communities to restore
              perspective and encourage sharing and, Over two thousand walls
              have been created around the world.
            </p>

            <p>
              We've built the first Before I Die Wall in Lagos at Freedom Park,
              Lagos Island. It will be open from September 18, 2017.
            </p>
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
                style={{
                  textAlign: "center",
                  paddingTop: "60px"
                }}
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
  min-height: 100%;
  background: #f7f7f7;
  padding: 60px 0 150px;
  color: black;
`;

const Description = styled.div`
  font-size: 1.6rem;
  line-height: 1.5;
  max-width: 540px;
  margin: 105px auto 120px;

  @media (max-width: 500px) {
    margin: 0 0 45px 0;
    text-align: left;
  }

  p {
    margin-bottom: 30px;
  }
`;

const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const GalleryImage = styled.div`
  margin: 3px;
  flex-grow: 1;
  height: 300px;
  width: 32%;
  background-color: #ddd;
  background-position: center;
  background-size: cover;

  @media (max-width: 500px) {
    height: 250px;
    width: 100%;
    margin: 15px 0;
  }
`;

const FollowLink = styled.a`
  padding: 15px 30px;
  color: white;
  font-size: 1.4rem;
  background: black;
  border-radius: 100px;
  display: inline-block;
  margin-top: 75px;
  text-align: center;
`;
