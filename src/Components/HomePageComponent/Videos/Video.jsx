import React from "react";
import { Link } from "react-router-dom";

const Video = (props) => {
  return (
    <div className="video-container">
      <Link to={props.path}>
        <div className="videos-right">
          <h3 className="video-title">{props.title}</h3>
          <p className="video-content">{props.content}</p>
        </div>
        <div className="videos-left">
          {/* <img className="small-logo" src="./icon.png" alt="" /> */}
          <img src={props.img} alt={props.img} className="video-background" />
        </div>
      </Link>
    </div>
  );
};

export default Video;
