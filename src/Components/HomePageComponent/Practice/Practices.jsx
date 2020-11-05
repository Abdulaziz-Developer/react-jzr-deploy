import React from "react";
import Practice from "./Practice";
import HangMan from "./imgs/rocket.png";
import "./Practice.css";

const Practices = (props) => {
  return (
    <div className="practice-container" id="challenge">
      <div className="practice-cards">
        <Practice title="Play Hang Man" img={HangMan} path="challenge1" />
        <Practice title="Play Hang Man" img={HangMan} path="challenge2" />
      </div>
    </div>
  );
};

export default Practices;
