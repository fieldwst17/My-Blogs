import React from 'react'
import home from "../images/home.svg"

function Home() {
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
        <h1 className="title" style={titleStyle}>ยินดีต้องรับสู่เว็บไซต์ของฉัน</h1>
        <img src={home} alt="home"/>
    </div>
  )
}

export default Home
