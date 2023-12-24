import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar bg-blue-300">
      <div className="flex-1">
        <Link to="/" className="text-xl hover:text-blue-500">
          My Blogs
        </Link>
      </div>
      <div className="flex-none no-animation">
        <ul className="menu menu-horizontal px-1 no-animation">
          <li>
            <details className="dropdown">
              <summary className="btn no-animation text-xl hover:text-blue-500 ">Menu</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <Link to="/" className="hover:text-blue-500">Home</Link>
                <Link to="/blogs" className="hover:text-blue-500">Article</Link>
                <Link to="/about" className="hover:text-blue-500">About</Link>{" "}
                <Link to="/card" className="hover:text-blue-500">Card</Link>{" "}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
