import React, { Component } from "react";

export default class Employee extends Component {
  constructor() {
    super();

    this.state = {
      isActive: true,
      status: "Working..",
    };
  }

  switchContext = () => {
    this.setState(() => ({
      status: this.state.isActive ? "Working" : "Sleeping",
      isActive: !this.state.isActive,
    }));
  };

  render() {
    return (
      <div>
        Hello {this.props.name}
        <p>Welcome onboard!!</p>
        <hr />
        <button onClick={this.switchContext}>Submit</button>
        <p>Status - {this.state.status}</p>
      </div>
    );
  }
}

// export default Employee;
