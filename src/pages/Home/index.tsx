import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../styles/global";

const Home = () => {
  const history = useHistory();
  const handlePage = (page) => {
    history.push(page);
  };
  return (
    <>
      <img
        style={{ cursor: "pointer", alignSelf: "flex-end" }}
        onClick={() => handlePage("/ranking")}
        src={"/ranking.png"}
        alt="Ranking Icon"
      />
      <img src={"/logo.png"} alt="JS Genius Logo" />
      <Button onClick={() => handlePage("/game")}>Iniciar Jogo</Button>
    </>
  );
};

export default Home;
