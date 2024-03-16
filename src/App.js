import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import About from "./components/About";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Card from "./components/Card";
import Detail from "./components/Detail";

function App() {

  
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/card" element={<Card />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/home" element={<Navigate to="/"/>}></Route>
        <Route path="/info" element={<Navigate to="/about"/>}></Route>
        <Route path="/blog/:id" element={<Detail/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
