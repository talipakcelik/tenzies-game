import React from "react";
import Die from "./Die";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = React.useState(allNewDice());

  const [tenzies, setTenzies] = React.useState(false);

  /**
   * Challenge: Tie off loose ends!
   * 1. If tenzies is true, Change the button text to "New Game"
   * 2. If tenzies is true, use the "react-confetti" package to
   *    render the <Confetti /> component 🎉
   *
   *    Hint: don't worry about the `height` and `width` props
   *    it mentions in the documentation.
   */

  // React.useEffect(() => {
  //   if (tenzies) {
  //     document.querySelector("button").textContent = "New Game";
  //   }
  // }, [tenzies]);

  React.useEffect(() => {
    if (
      dice.every((die) => die.isHeld) &&
      dice.every((die) => die.value === dice[0].value)
    ) {
      setTenzies(true);
      console.log("you won");
    }
  }, [dice]);

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
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="die-container">{diceElements}</div>
      <button onClick={roll}>{tenzies ? "New Game" : "Roll"}</button>
    </main>
  );
}

export default App;
