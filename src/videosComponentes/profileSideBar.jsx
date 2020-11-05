import React, { Component } from "react";
import profileImage from "./css/profile.png";
import ProgressCounter from "./progressCounter";
import "./css/profileSideBar.css";
class ProfileSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  donePercent = () => {
    let done = 0;
    this.props.userData.forEach((userD) =>
      userD.completed == true ? (done += 33) : (done += 0)
    );
    return done;
  };
  render() {
    this.donePercent();
    return (
      <div className="profileSideBar-container">
        <div className="profile-container">
          <img src={profileImage} width={80} />
          <h4>{this.props.name}</h4>
          <div className="cards-container">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </div>
        <div className="progress-items-container">
          <h2>تطورك في هذا الكورس</h2>
          <ProgressCounter done={this.donePercent()} />
        </div>
      </div>
    );
  }
}

export default ProfileSideBar;
