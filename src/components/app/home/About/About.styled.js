import styled from "styled-components";

export const StyledAbout = styled.div`
  min-height: 100%;
  background: #f7f7f7;
  padding: 60px 0 150px;
  color: black;
  position: relative;
`;

export const Description = styled.div`
  font-size: 1.8rem;
  line-height: 1.6;
  max-width: 580px;
  margin: 105px auto 120px;

  @media (max-width: 500px) {
    margin: 0 0 45px 0;
    text-align: left;
  }

  p {
    margin-bottom: 30px;
  }
`;

export const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

export const GalleryImage = styled.div`
  margin: 5px;
  flex-grow: 1;
  height: 300px;
  width: 30%;
  background-color: #ddd;
  background-position: center;
  background-size: cover;

  @media (max-width: 500px) {
    height: 250px;
    width: 100%;
    margin: 15px 0;
  }
`;

export const FollowLink = styled.a`
  color: black;
  text-transform: uppercase;
  font-size: 1.4rem;
  padding-bottom: 4px;
  border-bottom: 2px solid #000;
  letter-spacing: 1px;
  display: inline-block;
  margin-top: 75px;
  text-align: center;
`;
