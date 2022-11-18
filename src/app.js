import React from "react";
import Header from "./components/Header";
import About from "./pages/About.js";
import Portfolio from "./pages/Portfolio.js";
import Resume from "./pages/Resume.js";
import Contact from "./pages/Contact.js";
// import Footer from "./components/Footer/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
     
        <Routes>
          <Route path="/" element= {<About/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
      
      </div>

    </Router>
  );
}

export default App;
