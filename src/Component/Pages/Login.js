import mainImage from "../../images/login-main-image.jpg";
import Logo from "../../images/shape-square-cube-box-mirror-image-png-favpng-edDhTpW31BmDMzLaAQEMHNMns.jpg";

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      hiddenpwd: "",
      _username: "",
      _password: "",
    };
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: this.state.password.concat(e.target.value.slice(-1)),
      hiddenpwd: e.target.value.replaceAll(/[a-zA-Z0-9 ]/g, "•"),
    });

    setTimeout(() => {
      if (this.state.hiddenpwd.length < this.state.password.length) {
        this.setState({
          password: this.state.password.slice(0, this.state.hiddenpwd.length),
        });
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      _username: this.state.username,
      _password: this.state.password,
      username: "",
      password: "",
      hiddenpwd: "",
    });

    setTimeout(() => {
      alert(
        "Username: " +
          this.state._username +
          "\nPassword: " +
          this.state._password
      );
    }, 200);
  };

  render() {
    return (
      <div>
        <div class="login-main-container">
          <img class="login-main-image" src={mainImage} alt="login-main" />
          <div class="login-container">
            <form class="login-box" onSubmit={this.handleSubmit}>
              <img src={Logo} alt="logo" class="logo" />
              <h2>Nhatrinh</h2>
              <input
                placeholder="Username"
                value={this.state.username}
                onChange={(e) => this.handleUsernameChange(e)}
              ></input>
              <input
                placeholder="Password"
                value={this.state.hiddenpwd}
                onChange={(e) => this.handlePasswordChange(e)}
              ></input>
              <button class="login-button" type="submit">
                Log in
              </button>
              <div class="line-break" />
              <Link to="/signup" class="signup-button">
                Create new account
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
