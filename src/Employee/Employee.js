import React, { Component } from "react";
import "./Employee.css";

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
      <div className="EmployeeWidget">
        <h2>Employee component</h2>
        Hello {this.props.name}
        <p>Welcome onboard!!</p>
        <br />
        <button className="Button" onClick={this.switchContext}>Switch status</button>
        <p>Status - {this.state.status}</p>
      </div>
    );
  }
}

// export default Employee;
