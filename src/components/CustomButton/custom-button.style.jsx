import styled from "styled-components";

export const CustomButtonWrapper = styled.span`
  display: block;
  width: 65%;
  margin: 0 auto;
`;

export const CustomButtonComponent = styled.span`
  & > button {
    width: 100%;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0px 0px 10px 2px rgba(1, 1, 1, 0.25);
    outline: none;
    border: 2px solid rgba(${(props) => props.color}, 1);
    color: rgba(${(props) => props.color}, 1);
    font-weight: bold;
    font-family: "Sansita Swashed";
    font-size: 17px;
    border-radius: 3px;
    padding: 5px;
    cursor: pointer;
  }
`;
