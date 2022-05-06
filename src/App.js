import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Collections from "./Pages/Collections";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Page404 from "./Pages/Page404";
import LCard from "./Components/LCard";
import ScrollToTop from "./ScrollToTop";
import Login from "./Pages/Login";


function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/collections" element={<Collections />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Page404 />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route
            path="/collection/:id/:title/:price"
            element={<LCard />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
