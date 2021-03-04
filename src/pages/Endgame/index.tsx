import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/user";
import api from "../../services/api";
import { Button } from "../../styles/global";
import { Input, Score, ScoreNumber, Title, X } from "./styles";

const Endgame = () => {
  const history = useHistory();
  const context = useContext(UserContext);
  const { user, setUser } = context;
  const { name, score } = user;

  const handlePage = () => {
    history.push("/");
  };

  const postUserOnRanking = async () => {
    const data = {
      name,
      score,
    };
    await api.post("/save", data).then(() => history.push("/ranking"));
  };
  return (
    <>
      <X onClick={handlePage}></X>
      <Title>Fim do jogo</Title>
      <Score>
        score
        <ScoreNumber>{user.score}</ScoreNumber>
      </Score>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Input
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="Digite seu nome"
        ></Input>
        <Button onClick={postUserOnRanking}>Salvar Ranking</Button>
      </div>
    </>
  );
};

export default Endgame;
