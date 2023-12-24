import React from 'react'
import notfound from "../images/notfound.svg"

function NotFound() {
  return (
    <div className="container">
      <h2 className="title">ไม่พบหน้าเว็บไซต์ !</h2>
      <img src={notfound} alt="notfound" />
    </div>
  )
}

export default NotFound
