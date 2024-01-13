import React, { useState,useEffect } from "react";
import blogs from "../data/blogs";
import "./Blogs.css";
import { Link } from "react-router-dom";

function Blogs() {
  // State
  const [search, setSerch] = useState("");
  const [filterBlog, setfilterBlog] = useState([]);
  
  // Effect
  useEffect(() => {
      //กรองข้อมูลชื่อ่บทความ
      const result = blogs.filter((item)=>item.title.includes(search))
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
        {filterBlog.map((blogs) => (
          <Link to={`/blog/${blogs.id}`} key={blogs.id}>
            <div className="card">
              <h1 className="text-xl">{blogs.title}</h1>
              <p className="content">{blogs.content.substring(0, 300)}</p>
              <hr />
            </div>
          </Link>
        ))}
      </article>
    </div>
  );
}

export default Blogs;
