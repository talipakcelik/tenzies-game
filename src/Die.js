import React from "react";

export default function Die(props) {
  return (
    <div className={props.isHeld ? "die held" : "die"} onClick={props.hold}>
      <span>{props.value}</span>
    </div>
  );
}
