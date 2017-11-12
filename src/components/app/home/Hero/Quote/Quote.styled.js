import styled from "styled-components";

const StyledQuote = styled.h2`
  font-size: 4.8rem;
  font-weight: 500;
  min-height: 130px;
  line-height: 1.3;
  color: black;
  font-family: "Miller Web", Georgia, times, serif;

  @media (max-width: 500px) {
    font-size: 3.6rem;
  }
`;

export default StyledQuote;
