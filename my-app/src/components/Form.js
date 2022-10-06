import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      posts: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({posts:data}))
  }
  userNameHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  passwordHandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  render() {
    const { posts } = this.state;
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
        {posts.map((post) => (
          <h2 key={post.id}>{post.title}</h2>
        ))}
      </div>
    );
  }
}

export default Form;
