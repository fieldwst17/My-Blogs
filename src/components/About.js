import React from "react";
import about from "../images/about.svg";

function About() {
  return (
    <div className="container">
      <h2 className="title">About US</h2>
      <img src={about} alt="about" />
      <div className="about">
      <p>สวัสดีครับ ผมนายวงศธร พุ่มทอง สนใจในสายงานด้าน Front End </p>
      </div>
    </div>
  );
}

export default About;
