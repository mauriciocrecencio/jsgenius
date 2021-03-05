import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/user";
import api from "../../services/api";
import { Button } from "../../styles/global";
import {
  ContainerButtonInput,
  Input,
  Score,
  ScoreNumber,
  Title,
  X,
} from "./styles";

const Endgame = () => {
  const history = useHistory();
  const context = useContext(UserContext);
  const { user, setUser } = context;
  const { name, score } = user;

  const handlePage = () => {
    history.push("/");
  };

  const handleDisableButton = (shouldDisable) => {
    if (shouldDisable) {
      document.getElementById("post").style.opacity = "30%";
      document.getElementById("post").style.pointerEvents = "none";
    } else {
      document.getElementById("post").style.opacity = "100%";
      document.getElementById("post").style.pointerEvents = "click";
    }
  };

  const postUserOnRanking = async () => {
    handleDisableButton(true);
    const data = {
      name,
      score,
    };
    await api
      .post("/save", data)
      .then(() => {
        handleDisableButton(false);
        history.push("/ranking");
      })
      .catch((err) => {
        handleDisableButton(false);
        window.alert(err);
      });
  };
  return (
    <>
      <X onClick={handlePage}></X>
      <Title>Fim do jogo</Title>
      <Score>
        score
        <ScoreNumber>{user.score}</ScoreNumber>
      </Score>
      <ContainerButtonInput>
        <Input
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="Digite seu nome"
        ></Input>
        <Button id="post" onClick={postUserOnRanking}>
          Salvar Ranking
        </Button>
      </ContainerButtonInput>
    </>
  );
};

export default Endgame;
