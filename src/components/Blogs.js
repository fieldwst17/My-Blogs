import React, { useState, useEffect } from "react";
import blogs from "../data/blogs";
import { Link } from "react-router-dom";
import "./Blogs.css";

function Blogs() {

  // State
  const [search, setSerch] = useState("");
  const [filterBlog, setfilterBlog] = useState([]);

  // Effect
  useEffect(() => {
    //กรองข้อมูลชื่อ่บทความ
    const result = blogs.filter((item) => item.title.includes(search));
    setfilterBlog(result);
  }, [search]);

  return (
    <div className="blogs-container">
      <div className="form-control">
        <input
          type="text"
          placeholder="ค้นหา"
          className="input input-bordered w-24 md:w-auto"
          value={search}
          onChange={(e) => setSerch(e.target.value)}
        />
      </div>

      <article>
        <div className="card-table">
          {filterBlog.map((blogs) => (
            <Link to={`/blog/${blogs.id}`} key={blogs.id} className="link">
              <div className="card-blogs">
                <img src={blogs.image_url} alt={blogs.title} />
                <h3>{blogs.title}</h3>
                <p className="content">{blogs.content.substring(0, 50)}</p>
                <hr />
              </div>
            </Link>
          ))}
        </div>
      </article>
    </div>
  );
}

export default Blogs;
