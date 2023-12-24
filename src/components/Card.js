import React from "react";
import blogs from "../data/blogs";

const Card = () => {
  return (
    <div>
      <div className="card-compact w-96 bg-base-100 shadow-xl">
        {/* Content */}
        {blogs.map((blogs) => (
          <content className="card-body items-center text-center" key={blogs.id}>
            <img src={blogs.image_url} alt="รูปภาพ"/>
            <h2 className="card-title">{blogs.title}</h2>
            <p>{blogs.content.substring(0,100)}</p>
            <div className="card-actions">
              <button className="btn btn-primary">อ่านเพิ่มเติม</button>
            </div>
          </content>
        ))}
      </div>
    </div>
  );
};

export default Card;
