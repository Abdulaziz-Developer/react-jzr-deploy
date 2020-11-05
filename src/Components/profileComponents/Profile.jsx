import React from "react";
import ProfileInfo from "./ProfileInfo";
import Header from "../HomePageComponent/Header/Header";

class Profile extends React.Component {
  logout = () => {
    localStorage.removeItem("jwt"); // this is how u remove an item from localstorage
    window.location.reload();
  };
  render() {
    return (
      <>
        <Header />

        <header className="profile-header">
          <div className="head"></div>
          <ProfileInfo user={this.props.user} />
        </header>
      </>
    );
  }
}

export default Profile;
