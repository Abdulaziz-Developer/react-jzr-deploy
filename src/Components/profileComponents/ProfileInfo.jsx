import React from "react";
import YourName from "./YourName";
class ProfileInfo extends React.Component {
  logout = () => {
    localStorage.removeItem("jwt"); // this is how u remove an item from localstorage
    window.location.reload();
  };
  render() {
    return (
      <>
        <section className="Profile-Info">
          <div className="container">
            <div className="Info">
              <div className="pfp">{this.props.user.username}</div>
              <h1>{this.props.user.username}</h1>
              <h6>{this.props.user.email}</h6>
              <button
                className="logout-btn"
                style={{ cursor: "pointer" }}
                onClick={this.logout}
              >
                تسجيل خروج
              </button>
            </div>
            <div className="name-alphabet-container">
              <YourName />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ProfileInfo;
