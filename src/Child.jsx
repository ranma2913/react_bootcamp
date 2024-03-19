import React, {Component} from "react";

export default class Child extends Component {
  render() {
    return (
        <div>
          <h3>Child: Hi, I'm Child Component</h3>
          <p>{this.props.Title}</p>
        </div>
    )
  }
}
