import styled from "styled-components";

export const CardWrapper = styled.span`
  display: flex;
  width: 65%;
  margin: 0 auto;
  justify-content: ${(props) => props.cardJust} !important;
`;

export const CardComponent = styled.span`
  width: 100%;
  box-shadow: 0px 0px 10px 2px rgba(1, 1, 1, 0.5);
  border-radius: 3px;
  border-right: ${(props) => props.cardBorder};
  padding: 5px;
  background-color: ${(props) => props.headBg};
  margin-block-start: ${(props) => props.cardPadStart}em;
  margin-block-end: ${(props) => props.cardPadEnd}em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: 350px) {
    flex-direction: column;
  }
`;
