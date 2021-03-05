import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
  color: #e6d5b8;
  font-size: 48px;
`;

export const Score = styled.p`
  text-align: center;
  color: #e6d5b8;
`;
export const ScoreNumber = styled(Score)`
  font-size: 70px;
`;

export const Input = styled.input`
  margin: 10px 0;
  width: 320px;
  height: 80px;
  font-size: 20px;
  border: 1px solid #1f6f8b;
  border-radius: 10px;
  padding-left: 20px;
  // Mobile S
  @media (max-width: 350px) {
    width: 98%;
  }
`;

export const X = styled.svg`
  align-self: flex-end;
  width: 32px;
  height: 32px;
  background-image: url("/fechar.svg");
  :hover {
    cursor: pointer;
  }
`;

export const ContainerButtonInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // Mobile S
  @media (max-width: 350px) {
    width: 100%;
  }
`;
