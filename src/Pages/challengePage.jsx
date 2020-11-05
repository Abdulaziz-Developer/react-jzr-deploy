import React, { Component } from "react";
import ReactPlayer from "react-player";

class ChallengePage extends Component {
  render() {
    return (
      <div>
        <h1>Challenge page</h1>
        <ReactPlayer
          url="https://youtu.be/2GdRrjrhxFQ"
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
    );
  }
}

export default ChallengePage;
