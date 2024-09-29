// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="containerGod">
          <Header />
          <Routes>
            {/* Cambia Switch por Routes */}
            <Route path="/" element={<Home />} />{" "}
            {/* Cambia component por element */}
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
