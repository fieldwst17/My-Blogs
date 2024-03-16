import React from "react";
import "./Card.css";

const Card = () => {

  const previewImg = {
    width: '700px',
    borderRadius: '10px',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  };

  return (
    <div>
      <h1>My Project</h1>

      {/* Table */}
      <div className="blogs-table">
        <div className="card-show">
          <img style={previewImg} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="cover"/>
          <h1>John Doe</h1>
          <p className="title">CEO & Founder, Example</p>
          <p>Harvard University</p>
          <button className="button"><span>Hover</span></button>
        </div>
      </div>
      {/* End */}
    </div>
  );
};

export default Card;
