import styled from "styled-components";

export const HeadingWrapper = styled.span`
  display: flex;
  width: 92%;
  margin: 0 auto;
  justify-content: ${(props) => props.headJust} !important;
`;

export const HeadingComponent = styled.span`
  font-family: ${(props) => props.headFont};
  font-size: ${(props) => props.headSize}px;
  color: ${(props) => props.headColor};
  font-weight: ${(props) => props.headWeight};
  margin-block-start: ${(props) => props.headPadStart}em;
  margin-block-end: ${(props) => props.headPadEnd}em;
  padding-left: ${(props) => props.headPadLeft};
  padding-right: ${(props) => props.headPadRight};
`;
