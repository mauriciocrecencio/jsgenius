import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { BackArrow, ContainerList, List, Title } from "./styles";

const Ranking = () => {
  const history = useHistory();
  const [ranking, setRanking] = useState([]);
  const getRanking = async () => {
    await api.get("/ranking").then((res) => setRanking(res.data));
  };
  useEffect(() => {
    getRanking();
  }, []);

  const handlePage = () => {
    history.push("/");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "350px",
        }}
      >
        <BackArrow onClick={handlePage}></BackArrow>
        <Title>Ranking</Title>
      </div>
      {ranking.length > 1 && (
        <ContainerList>
          <List>
            {ranking
              .sort((a, b) => b.score - a.score)
              .map((user, index) => (
                <li key={index}>
                  {index + 1}) {user.name}
                </li>
              ))}
          </List>
        </ContainerList>
      )}
    </>
  );
};

export default Ranking;
