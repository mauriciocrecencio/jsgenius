import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    background-color: #1C2B2D;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Robot', sans-serif;
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
`;

export const Button = styled.button`
  width: 320px;
  height: 80px;
  background-color: #1f6f8b;
  border: 1px solid #e6d5b8;
  border-radius: 10px;
  color: #e6d5b8;
  font-size: 20px;
`;
