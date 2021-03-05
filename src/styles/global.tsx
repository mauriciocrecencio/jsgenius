import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    background-color: #1C2B2D;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Robot', sans-serif;

      /* Disable Text Select */

  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
  }

  button, input {
    outline: 0;
  }

  button {
    cursor: pointer;
  }

`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled(Wrapper)`
  width: 50%;
  height: 80%;
  justify-content: space-between;

  // Laptop L
  @media (max-width: 1440px) {
    height: 90%;
  }
  // Laptop
  @media (max-width: 1024px) {
    width: 60%;
  }
  // Tablet
  @media (max-width: 768px) {
    width: 75%;
  }
  // Mobile L
  @media (max-width: 500px) {
    width: 90%;
  }
  // Mobile S
  @media (max-width: 320) {
    height: 80%;
  }
`;

export const Button = styled.button`
  width: 320px;
  height: 80px;
  background-color: #1f6f8b;
  border: 1px solid #e6d5b8;
  border-radius: 10px;
  color: #e6d5b8;
  font-size: 20px;
  // Mobile S
  @media (max-width: 350px) {
    width: 98%;
  }
`;
