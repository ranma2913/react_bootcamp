import React from "react";

export default function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
  );
  return (
      <div>
        <h3>Demo: Hello From NumberList Component</h3>
        <ul>{listItems}</ul>
      </div>
  );
}
