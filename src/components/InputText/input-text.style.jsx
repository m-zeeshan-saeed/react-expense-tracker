import styled from "styled-components";

export const InputTextWrapper = styled.span`
  display: flex;
  width: 65%;
  margin: 0 auto;
  justify-content: center;
  & > input {
    box-shadow: 0px 0px 10px 2px rgba(1, 1, 1, 0.1);
    width: 100%;
    padding: 10px 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid lightgreen;
    font-family: Sansita Swashed;
  }
  & > input:hover {
    border: 1px solid yellow;
  }
  & > input:active {
    border: 1px solid orange;
  }
  & > input:focus {
    border: 1px solid orange;
    outline: none;
  }
`;
