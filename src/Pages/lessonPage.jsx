import React, { Component } from "react";
import LeftNav from "../videosComponentes/LeftNav";
import ResponsivePlayer from "../videosComponentes/ResponsivePlayer";
import ProfileSideBar from "../videosComponentes/profileSideBar";
import userData from "../userData.json";
import api from "../services/ImportingData"
class LessonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  finddata = () => {
    const path = this.props.location.pathname;
    const splitedPath = path.split("-");
    const nPath = splitedPath[0].replace("/", "");

    return this.props.data.filter((item) => item.id.includes(nPath));
  };

  findUserData = () => {
    const path = this.props.location.pathname;
    const splitedPath = path.split("-");
    const nPath = splitedPath[0].replace("/", "");

    //🎹just change the userData to the data from the backend
    // let jwty = jwt(JSON.stringify(localStorage.getItem("jwt")));
    // let id = jwty.sub
    console.log(api())
    return userData.filter((item) => item.title.includes(nPath));
  };

  handleCompleting = (obj, lesson) => {
    console.log("the lesson id", lesson);
    if (obj.played >= 0.7) {
      console.log("done");
      //🎹 add the code to toggle the value in the backend
      //you have the lesson name as a prameter => lesson3-1
    }
  };
  render() {
    return (
      <div className="videoPage-container">
        <LeftNav data={this.finddata()} />
        <ResponsivePlayer
          {...this.props}
          data={this.props.data}
          firstData={this.props.data[0]}
          onComplet={this.handleCompleting}
        />
        <ProfileSideBar userData={this.findUserData()} name="name" />{" "}
        {/*🍭🎹here also pass the user name in name */}
      </div>
    );
  }
}

export default LessonPage;
