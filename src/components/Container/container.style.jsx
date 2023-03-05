import styled from "styled-components";

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2vh;
  margin-bottom: 2vh;
`;

export const ContainerComponent = styled.div`
  box-shadow: 2px -1px 10px 0px rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  background-color: #8ca7ff;
  width: 45%;
  @media only screen and (max-width: 825px) {
    width: 75%;
  }
  @media only screen and (max-width: 500px) {
    width: 90%;
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`;
