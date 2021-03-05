import styled from "styled-components";

export const Title = styled.span`
  font-size: 24px;
  color: #e6d5b8;
`;

export const List = styled.ol`
  font-size: 24px;
  line-height: 48px;
  color: #99a8b2;
  li:nth-child(1n + 4) {
    color: #1f6f8b;
  }
`;

export const ContainerList = styled.div`
  padding: 0 5px;
  text-align: left;
  width: 350px;
  height: 80%;
  overflow: auto;
  // Mobile L
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const BackArrow = styled.svg`
  background-image: url("/voltar.svg");
  width: 32px;
  height: 32px;
  :hover {
    cursor: pointer;
  }
  align-self: end;
`;
