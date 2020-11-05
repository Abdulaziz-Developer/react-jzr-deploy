import React from "react";

import "./Hero.css";

import ReactPlayer from "react-player";
const Hero = () => {
  return (
    <div className="hero-section">
      <div className="top-hero-container">
        <div className="top right">
          <h2 className="hero-header">
            لغة الإشارة هي أنبل هدية أعطاها الله للصم
          </h2>
          <p className="hero-paragraph">لغتنا لا تختلف</p>
          <a href="/#" className="signup-button hide">
            إنشاء حساب
          </a>
        </div>
        <div className="bottom left">
          <a href="/#" className="signup-button show">
            إنشاء حساب
          </a>
          <ReactPlayer
            className="hero-video"
            url="https://youtu.be/2GdRrjrhxFQ"
            width="100%"
            height="100%"
            playing={true}
            controls={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
