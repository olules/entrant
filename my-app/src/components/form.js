import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }
  render() {
    return (
      <div className="container">
        <input
          value={this.state.username}
          type="text"
          placeholder="Enter your username"
          className="form-control"
          onChange={this.userNameHandler}
        />
        <input
          value={this.state.password}
          type="password"
          placeholder="Enter your password"
          className="form-control"
          onChange={this.passwordHandler}
        />
        <button className="btn btn-primary">click me</button>
      </div>
    );
  }
}

export default Form;
