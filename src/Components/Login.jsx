import React from "react";
import { NavLink } from "react-router-dom";

import * as userService from "../services/authServices";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        password: "",
      },
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <>
        <section>
          <form method="POST" id="REGform">
            <legend>
              <div className="container">
                <div className="sign-up">
                  <h1>Log in</h1>
                </div>

                <div className="input__div">
                  <h2>Email</h2>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    id="email"
                    name="email"
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="input__div">
                  <h2>Password</h2>
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    id="password"
                    name="password"
                    onChange={this.handleChange}
                  ></input>
                  <NavLink exact to="/register">
                    <p>Don't have an Account?</p>
                  </NavLink>
                </div>
                <div onClick={this.LogingIn} className="submit-btn">
                  log in <div className="submit-cube-login"></div>
                </div>
              </div>
              <div className="pink-cube"></div>
            </legend>
          </form>
        </section>
      </>
    );
  }
  LogingIn = async (e) => {
    try {
      const { data: jwt } = await userService.login(
        this.state.email,
        this.state.password
      );
      window.location.reload();
      localStorage.setItem("jwt", jwt);
    } catch (error) {
      console.log(error);
    }
  };
}

export default Login;