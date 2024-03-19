import React, {Component} from "react";

export class Sample extends Component {
  state = {
    a: 'Hello',
    count: 0
  };

  handleButtonClick = () => {
    console.log("Inside Button Click");
    this.setState({
      count: this.state.count + 1,
      a: "you clicked Button " + this.state.count + " times"
    });
  };

  render() {
    return (
        <div>
          <h3>Sample: Hi, I'm Sample Component</h3>
          <p>{this.state.a}</p>
          <button type="button" onClick={this.handleButtonClick}>Click Me</button>
        </div>
    )
  }
}
