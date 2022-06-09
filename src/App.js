import React from "react";
import Die from "./Die";

/**
 * Challenge: Add conditional styling to the Die component
 * so that if it's held (isHeld === true), its background color
 * changes to a light green (#59E391)
 *
 * Remember: currently the Die component has no way of knowing
 * if it's "held" or not.
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
    <Die key={index} value={die.value} isHeld={die.isHeld} />
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
