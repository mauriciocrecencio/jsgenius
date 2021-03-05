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

  const handleKeyboardDisable = (shouldDisable) => {
    if (document.getElementById("keyboard") != null) {
      if (shouldDisable) {
        document.getElementById("keyboard").style.opacity = "30%";
        document.getElementById("keyboard").style.pointerEvents = "none";
        return;
      }
      document.getElementById("keyboard").style.opacity = "100%";
      document.getElementById("keyboard").style.pointerEvents = "auto";
    }
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
        handleKeyboardDisable(false);
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
      if (arraysAreEqual(sequence, userSequence)) {
        handleKeyboardDisable(true);

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
      <NumericKeyboardContainer id="keyboard">
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
