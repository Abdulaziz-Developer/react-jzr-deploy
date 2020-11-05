import React from "react";
import { NavLink } from "react-router-dom";

import * as userService from "../services/userService";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }
  submit = async () => {
    const { username, email, password } = this.state;

    const user = {
      username: username,
      email: email,
      password: password,
    };
    console.log("sumbit user", user);

    try {
      const resUser = await userService.register(user);
      console.log("backend res", resUser);
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { email } = this.state;

    const { username } = this.state;

    const { password } = this.state;
    return (
      <>
        <section className="form-section">
          <form method="POST" id="REGform">
            <legend>
              <div className="container">
                <div className="sign-up">
                  <h1>Sign Up</h1>
                </div>
                <div className="input__div">
                  <h2>Username</h2>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    id="username"
                    name="username"
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="input__div">
                  <h2>Email</h2>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
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
                    value={password}
                    id="password"
                    name="password"
                    onChange={this.handleChange}
                  ></input>
                  <NavLink exact to="/login">
                    <p>Already have an account ?</p>
                  </NavLink>
                </div>
                <div onClick={this.submit} className="submit-btn">
                  Register
                </div>
                <div className="submit-cube"></div>
              </div>
            </legend>
          </form>
          <div className="pink-cube"></div>
        </section>
      </>
    );
  }
}
export default Register;

//////////////////////////////
// code i might use later ////
//////////////////////////////

// onClick={() => this.props.Submiting()}

// let inputUsername = document.querySelector("#username").value
// let inputEmail = document.querySelector("email").value
// let inputPassword = document.querySelector("password").value
// let data = {username:inputUsername , email:inputEmail, password:inputPassword }
// const options = {
//     method:'POST',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify(data)
// }
// fetch("/api", options)
//
//const user = {
//   username: username,
//   email: email,
//   password: password,
// };
// console.log("sumbit user", user);

// try {
//   const resUser = await userService.register(user);
//   console.log("backend res", resUser);
// } catch (error) {
//   console.log(error);
// }
