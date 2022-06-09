import React from "react";
import Die from "./Die";

/**
 * Challenge: Update the array of numbers in state to be
 * an array of objects instead. Each object should look like:
 * { value: <random number>, isHeld: false }
 *
 * Making this change will break parts of our code, so make
 * sure to update things so we're back to a working state
 */

function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      const diceObj = { value: "", isHeld: false };
      diceObj.value = Math.ceil(Math.random() * 6);
      newDice.push(diceObj);
    }
    console.log(newDice);
    return newDice;
  }

  const diceElements = dice.map((die, index) => (
    <Die key={index} value={die.value} />
  ));

  function roll() {
    setDice(allNewDice());
  }

  return (
    <main>
      <div className="die-container">{diceElements}</div>
      <button onClick={roll}>Roll</button>
    </main>
  );
}

export default App;
