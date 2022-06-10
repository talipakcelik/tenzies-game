import React from "react";
import Die from "./Die";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = React.useState(allNewDice());

  const [tenzies, setTenzies] = React.useState(false);

  const [trackRolls, setTrackRolls] = React.useState(0);

  function resetGame() {
    setTenzies(false);
    setDice(allNewDice());
    setTrackRolls(0);
    setTime(0);
  }

  React.useEffect(() => {
    if (
      dice.every((die) => die.isHeld) &&
      dice.every((die) => die.value === dice[0].value)
    ) {
      setTenzies(true);
      setTimerOn(false);
    }
  }, [dice]);

  React.useEffect(() => {}, [tenzies]);

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      const diceObj = { value: "", isHeld: false, id: i };
      diceObj.value = Math.ceil(Math.random() * 6);
      newDice.push(diceObj);
    }

    return newDice;
  }

  function holdDice(id) {
    setDice((oldState) =>
      oldState.map((el) => {
        return el.id === id ? { ...el, isHeld: !el.isHeld } : el;
      })
    );
    if (dice.every((die) => die.isHeld === false)) {
      setTimerOn(true);
    }
  }

  const diceElements = dice.map((die, index) => (
    <Die
      key={index}
      value={die.value}
      isHeld={die.isHeld}
      hold={() => holdDice(index)}
    />
  ));

  function roll() {
    setDice((oldState) =>
      oldState.map((el) => {
        return el.isHeld ? el : { ...el, value: Math.ceil(Math.random() * 6) };
      })
    );
    setTrackRolls(trackRolls + 1);
    setTimerOn(true);
  }
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <main>
      {tenzies && <Confetti />}
      <div className="track-container">
        <div className="rolls-title">Number of Rolls </div>
        <div className="stopwatch-title">Elapsed Time</div>
        <div className="rolls-score">{trackRolls}</div>
        <div className="stopwatch-score">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="die-container">{diceElements}</div>
      <button onClick={tenzies ? resetGame : roll}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
