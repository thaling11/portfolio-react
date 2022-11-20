import React from "react";
import Header from "./components/Header";
import About from "./pages/About.js";
import Portfolio from "./pages/Portfolio.js";
import Resume from "./pages/Resume.js";
import Contact from "./pages/Contact.js";
import Footer from "./components/Footer/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div id="App" >
      <Header />
     
        <Routes>
          <Route path="/portfolio-react" element={<About/>} />
          <Route path="/portfolio-react" element={<About/>} />
          <Route path="/portfolio-react/portfolio" element={<Portfolio/>} />
          <Route path="/portfolio-react/contact" element={<Contact/>} />
          <Route path="/portfolio-react/resume" element={<Resume/>} />
        </Routes>
      <Footer />
      </div>

    </Router>
  );
}

export default App;
