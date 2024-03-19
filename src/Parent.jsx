import React, {Component} from "react";
import Child from "./Child";
import Demo1 from "./Demo";
import {Sample} from "./Sample"; // You can import a component with any name. Allows multiple instance of the same component.

export default class Parent extends Component {
  state = {
    a: 'Hello'
  };

  render() {
    return (
        <div>
          <h3>Parent: Hi, I'm Parent Component</h3>
          <p>Parent.state.a = {this.state.a}</p>

          <Child Title="Child: I am text from Parent Component"></Child>
          <Demo1 Title="Demo: I am Text for function Component"></Demo1>
          <Sample></Sample>
        </div>
    )
  }
}
