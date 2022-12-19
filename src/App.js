import React, { useEffect, useState } from "react";
import Navbar from "./navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./UIpages/Home";
import Media from "./UIpages/Media";
import About from "./UIpages/About";
import Shop from "./UIpages/Shop";
import './navbar/Navbar.css'
import MediaHighlight from "./UXpages/MediaHighlight";
import Login from "./UIpages/Login";
import DevPage from "./UIpages/DevPage";

function App() {


  const [isCalledEffect, setIsCalledEffect] = useState(0);

  useEffect(() => {}, [isCalledEffect])
  return (
    <>
      <Router>
        <Navbar isCalledEffect={isCalledEffect} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/mediahighlight" element={<MediaHighlight />} />
          <Route path="/login" element={<Login isCalledEffect={isCalledEffect} setIsCalledEffect={setIsCalledEffect} />} />
          <Route path="/devPage" element={<DevPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
