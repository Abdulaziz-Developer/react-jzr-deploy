import React from "react";
import { Link } from "react-router-dom";

const Practice = (props) => {
  return (
    <div className="practice-card">
      <Link to={`/challenge/${props.path}`}>
        <img src={props.img} alt={props.title} />
        <h2 className="card-title">{props.title}</h2>
      </Link>
    </div>
  );
};

export default Practice;
