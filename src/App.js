require('dotenv').config()
import React from "react";
import LoginPage from "./Pages/Login";
import "./App.css";
import RegisterPage from "./Pages/RegisterPage";
import ProfilePage from "./Pages/ProfilePage";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import LessonPage from "./Pages/lessonPage";
import data from "./data.json";
import HomePage from "./Pages/HomePage";
import axios from "axios";
import "./videosComponentes/css/page.css";
import ChallengePage from "./Pages/challengePage";

class App extends React.Component {
  state = {
    user: null,
  };
  componentDidMount = () => {
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwt"
    );
    axios
      .get(process.env.URL)
      .then((res) => {
        if (res.data.user !== "you dont have permission") {
          this.setState({
            user: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <>
        <BrowserRouter>
          <>
            {this.state.user ? (
              <>
                <Route
                  exact
                  path="/"
                  render={(props) => <HomePage user={this.state.user} />}
                />
                <Route
                  exact
                  path="/profile/user"
                  render={(props) => <ProfilePage user={this.state.user} />}
                />
                <Route
                  exact
                  path="/:id"
                  render={(props) => <LessonPage {...props} data={data} data2={this.state.data2} />}
                />
                <Route
                  exact
                  path="/challenge/:type"
                  render={(props) => <ChallengePage {...props} />}
                />
              </>
            ) : (
              <Redirect to="/login" />
            )}

            <Route
              exact
              path="/register"
              render={(props) => <RegisterPage user={this.state.user} />}
            />
            <Route
              exact
              path="/login"
              render={(props) => <LoginPage user={this.state.user} />}
            />
          </>
        </BrowserRouter>
      </>
    );
  }
}
export default App;