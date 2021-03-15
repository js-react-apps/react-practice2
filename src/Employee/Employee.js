import React, { Component } from "react";

class Employee extends Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
        <p>Welcome onboard!!</p>
      </div>
    );
  }
}

export default Employee;
