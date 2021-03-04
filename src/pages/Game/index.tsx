import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/user";
import {
  ArrayOneToNine,
  arraysAreEqual,
  displayNumber,
  generateRandomNumber,
} from "../../services/gameFunctions";
import { numberTone } from "../../services/tone";
import { CurrentNumber, NumericKeyboardContainer } from "./styles";

const Game = () => {
  const [sequence, setSequence] = useState<number[]>([]);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const history = useHistory();
  const context = useContext(UserContext);

  const handlePage = () => {
    history.push("/endgame");
  };

  const startSequence = () => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < sequence.length) {
        numberTone();
        displayNumber(sequence[count]);
        count++;
      } else {
        clearInterval(interval);
        displayNumber("?");
      }
    }, 300);
    displayNumber("");
  };
  const checkSequences = () => {
    for (let count = 0; count < userSequence.length; count++) {
      if (userSequence[count] !== sequence[count]) return handlePage();
    }
    if (userSequence.length === sequence.length) {
      // displayNumber("?");
      if (arraysAreEqual(sequence, userSequence)) {
        context.setUser({ ...context.user, score: context.user.score + 1 });
        setSequence([...sequence, generateRandomNumber()]);
        setUserSequence([]);
      } else {
        handlePage();
      }
    }
  };

  const handleClick = (number) => {
    setUserSequence([...userSequence, number]);
    document.getElementById("display").textContent = String(number);
  };

  useEffect(() => {
    checkSequences();
  }, [userSequence]);

  useEffect(() => {
    setTimeout(() => startSequence(), 1000);
  }, [sequence]);

  useEffect(() => {
    // backgroundMusic();
    setSequence([...sequence, generateRandomNumber()]);
  }, []);

  return (
    <>
      <CurrentNumber id="display"></CurrentNumber>
      <NumericKeyboardContainer>
        {ArrayOneToNine.map((element, index) => (
          <div onClick={() => handleClick(element)} key={index}>
            {element}
          </div>
        ))}
      </NumericKeyboardContainer>
    </>
  );
};

export default Game;
