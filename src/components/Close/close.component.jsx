import styled from "styled-components";

const CloseIcon = styled.span`
  @media only screen and (max-width: 350px) {
    display: flex;
    justify-content: center;
  }
  & > button {
    padding: 0;
    border: none;
    background-color: inherit;
    font-family: "Work Sans";
    font-size: ${(props) => props.clSize}px;
    color: ${(props) => props.clColor};
    font-weight: 900;
    margin-right: 15px;
    cursor: pointer;
    @media only screen and (max-width: 350px) {
      padding-left: 10%;
    }
  }
  & > button:active {
    border: none;
  }
  & > button:focus {
    outline: none;
  }
`;

function Close({ clSize, clColor, onClick }) {
  return (
    <CloseIcon className="close-icon" clSize={clSize} clColor={clColor}>
      <button onClick={onClick}>&times;</button>
    </CloseIcon>
  );
}

export default Close;
