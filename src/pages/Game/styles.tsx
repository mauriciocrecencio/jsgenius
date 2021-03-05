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
  // Laptop L
  @media (max-width: 1440px) {
    width: 40%;
    height: 40%;
  }
  // Laptop
  @media (max-width: 1024px) {
    width: 40%;
  }
  // Tablet
  @media (max-width: 768px) {
    width: 50%;
  }
  // Mobile L
  @media (max-width: 500px) {
    width: 60%;
  }
  // Mobile S
  @media (max-width: 400) {
    width: 75%;
  }
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
  // Laptop L
  @media (max-width: 1440px) {
    width: 60%;
    height: 55%;
  }
  // Laptop
  @media (max-width: 1024px) {
    width: 70%;
  }
  // Tablet
  @media (max-width: 768px) {
    width: 70%;
  }
  // Mobile L
  @media (max-width: 500px) {
    width: 90%;
  }

  // Mobile S
  @media (max-width: 350px) {
    width: 95%;
  }
`;
