import React from "react";
import Die from "./Die";

/**
 * Challenge:
 *
 * Create state to hold our array of numbers. (Initialize
 * the state by calling our `allNewDice` function so it
 * loads all new dice as soon as the app loads)
 *
 * Map over the state numbers array to generate our array
 * of Die elements and render those in place of our
 * manually-written 10 Die elements.
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

  return (
    <main>
      <div className="die-container">{diceElements}</div>
    </main>
  );
}

export default App;
