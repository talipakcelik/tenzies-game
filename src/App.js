import React from "react";
import Die from "./Die";

function App() {
  const [dice, setDice] = React.useState(allNewDice());

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

  /**
   * Challenge: Update the `holdDice` function to flip
   * the `isHeld` property on the object in the array
   * that was clicked, based on the `id` prop passed
   * into the function.
   *
   * Hint: as usual, there's > 1 way to accomplish this.
   * I'll be using `dice.map()` and checking for the `id`
   * of the die to determine which one to flip `isHeld` on,
   * but you can do whichever way makes the most sense to you.
   */

  const diceElements = dice.map((die, index) => (
    <Die
      key={index}
      value={die.value}
      isHeld={die.isHeld}
      hold={() => holdDice(index)}
    />
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
