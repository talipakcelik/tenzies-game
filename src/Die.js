import React from "react";

export default function Die(props) {
  const holder = Number(props.value);
  return (
    <div onClick={props.hold}>
      <img
        src={`${process.env.PUBLIC_URL}/dice/${holder}.svg`}
        alt="broken"
        className={props.isHeld ? "filter" : ""}
      ></img>
    </div>
  );
}
