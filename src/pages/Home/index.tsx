import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../images/logo.png";
import ranking from "../../images/ranking.png";
import { Button } from "../../styles/global";

const Home = () => {
  const history = useHistory();
  const handlePage = (page) => {
    history.push(page);
  };
  return (
    <>
      <img
        style={{ cursor: "pointer" }}
        onClick={() => handlePage("/ranking")}
        src={ranking}
        alt="Ranking Icon"
      />
      <img src={logo} alt="JS Genius Logo" />
      <Button onClick={() => handlePage("/game")}>Iniciar Jogo</Button>
    </>
  );
};

export default Home;
