import React from "react";
import Die from "./Die";

function App() {
  const [dice, setDice] = React.useState(allNewDice());

  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    return console.log("Dice state changed");
  }, [dice]);

  /**
   * Challenge:
   * 1. Add new state called `tenzies`, default to false. It
   *    represents whether the user has won the game yet or not.
   * 2. Add an effect that runs every time the `dice` state array
   *    changes. For now, just console.log("Dice state changed").
   */

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
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="die-container">{diceElements}</div>
      <button onClick={roll}>Roll</button>
    </main>
  );
}

export default App;
