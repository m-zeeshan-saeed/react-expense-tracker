import styled from "styled-components";

export const CardBlockWrapper = styled.span`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: ${(props) => props.cardJust} !important;
`;

export const CardBlockComponent = styled.span`
  width: 100%;
  box-shadow: 0px 0px 10px rgba(1, 1, 1, 0.1);
  border-radius: 0;
  margin: ${(props) => props.cardMar}px;
  background-color: ${(props) => props.headBg};
  margin-block-start: ${(props) => props.cardPadStart}em;
  margin-block-end: ${(props) => props.cardPadEnd}em;
  display: flex;
  flex-direction: ${(props) => props.cardFlexDir};
`;
