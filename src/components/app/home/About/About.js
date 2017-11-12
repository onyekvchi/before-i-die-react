import React, { Component } from "react";
import Container from "./../../widgets/Container";
import Spinner from "./../../widgets/Spinner";
import CSSTransitionGroup from "react-addons-css-transition-group";
import { getGalleryImages } from "./../../../../utils";
import {
  StyledAbout,
  Description,
  Gallery,
  FollowLink,
  GalleryImage
} from "./About.styled";

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
      <StyledAbout visible={this.props.visible} id="about">
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
                  <FollowLink
                    href="https://www.instagram.com/beforeidielagos/"
                    target="_blank"
                  >
                    View all images
                  </FollowLink>
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
      </StyledAbout>
    );
  }
}

export default About;

const renderImages = images => {
  return images.map((imageUrl, i) => (
    <GalleryImage key={i} style={{ backgroundImage: `url(${imageUrl})` }} />
  ));
};
