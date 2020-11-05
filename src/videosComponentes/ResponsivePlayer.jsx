import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./css/responsive-player.css";

const ResponsivePlayer = (props) => {
  const [item, setData] = useState([props.data[0]]);
  const [oldKey, saveOldKey] = useState(props.firstData.id);
  useEffect(() => {
    let path = props.location.pathname;
    if (path != oldKey) {
      let currentData = props.data.filter((data) => `/${data.id}` === path);
      setData(currentData);
    }
    saveOldKey(path);
  });

  return (
    <React.Fragment>
      <div className="player-container">
        <h2 className="player-title">{item[0].title}</h2>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={item[0].url}
            width="100%"
            height="100%"
            controls={true}
            onProgress={(obj) => props.onComplet(obj, item[0].id)}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResponsivePlayer;
