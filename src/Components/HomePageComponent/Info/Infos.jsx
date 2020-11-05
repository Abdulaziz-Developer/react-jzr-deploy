import React from "react";
import Infoitems from "./Infoitems.jsx";
import "./infos.css";

const Infos = () => {
  return (
    <div className="info-container" id="info">
      <div className="info-header">
        <h2>الصمم وفقدان السمع</h2>
        <p>
          شخص غير قادر على السمع وكذلك شخص لديه سمع طبيعي - عتبات السمع 25
          ديسيبل أو أفضل في كلتا الأذنين .
        </p>
      </div>
      <div className="info-items">
        <Infoitems />
      </div>
    </div>
  );
};
export default Infos;
