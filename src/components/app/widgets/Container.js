import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 0 30px;
  max-width: 960px;
  max-width: ${props => props.xs && "320px"};
  max-width: ${props => props.sm && "600px"};
  margin: 0 auto;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

export default Container;
