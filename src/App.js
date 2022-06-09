import React from "react";
import Die from "./Die";

/**
 * Challenge: Create a `Roll Dice` button that will re-roll
 * all 10 dice
 *
 * Clicking the button should generate a new array of numbers
 * and set the `dice` state to that new array (thus re-rendering
 * the array to the page)
 */

function App() {
  const [dice, setDice] = React.useState(allNewDice());

  const diceElements = dice.map((die, index) => (
    <Die key={index} value={die} />
  ));

  function allNewDice() {
    const random = Array(10)
      .fill()
      .map(() => Math.ceil(Math.random() * 6));

    return random;
  }

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
