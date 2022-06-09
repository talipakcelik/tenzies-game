import React from "react";
import Die from "./Die";

/**
 * Challenge: Create a function `holdDice` that takes
 * `id` as a parameter. For now, just have the function
 * console.log(id).
 * 
 * Then, figure out how to pass that function down to each
 * instance of the Die component so when each one is clicked,
 * it logs its own unique ID property. (Hint: there's more
 * than one way to make that work, so just choose whichever
 * you want)
 * 
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

  function holdDice (id) {
    console.log(id);
  }


  const diceElements = dice.map((die, index) => (
    <Die key={index} value={die.value} isHeld={die.isHeld} hold={() => holdDice(index)}/>
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

