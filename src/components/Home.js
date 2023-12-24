import React from 'react'
import home from "../images/home.svg"

function Home() {
  return (
    <div className="container">
        <h1 className="title">ยินดีต้องรับสู่เว็บไซต์ของฉัน</h1>
        <img src={home} alt="home"/>
    </div>
  )
}

export default Home
