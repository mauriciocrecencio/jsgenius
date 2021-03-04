import styled from "styled-components";

export const CurrentNumber = styled.div`
  border: 1px solid #e6d5b8;
  width: 30%;
  height: 30%;
  color: #e6d5b8;
  font-size: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const NumericKeyboardContainer = styled.div`
  width: 50%;
  height: 50%;
  display: grid;
  grid-template-columns: auto auto auto;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #1f6f8b;
    font-size: 50px;
    color: #99a8b2;
    :hover {
      cursor: pointer;
      background-color: #1f6f8b;
      color: #e6d5b8;
      transition: 0.4s;
    }
  }
`;
