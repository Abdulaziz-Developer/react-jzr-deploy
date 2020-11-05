import React from "react";
import infoitemss from "./infoitems.json";

const Infoitems = () => {
  const Items = infoitemss.map((infoitem) => {
    return (
      <div className="info-item" key={infoitem.img}>
        <img src={infoitem.img} alt={infoitem.img} className="info-image" />
        <p className="infoitem-paragraph">{infoitem.description}</p>
      </div>
    );
  });
  return <>{Items}</>;
};

export default Infoitems;
