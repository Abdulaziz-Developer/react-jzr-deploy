import React from "react";
import Video from "./Video";
import "./Videos.css";
import image2 from "./images/howToDeal.png";
import image1 from "./images/img1.png";
import image3 from "./images/img3.png";
const Videos = () => {
  return (
    <div className="videos-container" id="lessons">
      <Video
        title="حروف الإشاره"
        content="٤ فيديوهات"
        img={image1}
        path={"lesson1-1"}
      />
      <Video
        title="كيف تتعامل مع الصم والبكم"
        content="٤ فيدويوهات"
        img={image2}
        path={"lesson2-1"}
      />
      <Video
        title="التعابير بلغة الإشاره"
        content="٤ فيديوهات"
        img={image3}
        path={"lesson3-1"}
      />
    </div>
  );
};

export default Videos;
