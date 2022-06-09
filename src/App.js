import React from "react";
import Die from "./Die";

function App() {
  function allNewDice() {
    const random = Array(10)
      .fill()
      .map(() => Math.ceil(Math.random() * 6));

    return random;
  }

  return (
    <main>
      <div className="die-container">
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
      </div>
    </main>
  );
}

export default App;
