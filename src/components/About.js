import React from "react";
import about from "../images/about.svg";

function About() {
  const titleStyle = {
    color: 'black',
    textDecoration: 'underline',
    textAlign: 'center',
    fontSize: '30px',
    marginTop: '30px',
    fontStyle: 'initial',
    fontFamily: '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    fontVariant: 'oblique',  // หรือใช้ fontVariant ถ้าคุณต้องการ font-style: oblique;
  };
  return (
    <div className="container">
      <h2 className="title" style={titleStyle}>About US</h2>
      <img src={about} alt="about" />
      <div className="about">
      <p>สวัสดีครับ ผมนายวงศธร พุ่มทอง สนใจในสายงานด้าน Front End </p>
      </div>
    </div>
  );
}

export default About;
