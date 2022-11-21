import React from "react";
import Header from "./components/Header";
import About from "./pages/About/index.js";
import Portfolio from "./pages/Portfolio/index.js";
import Resume from "./pages/Resume/index.js";
import Contact from "./pages/Contact/index.js";
import Footer from "./components/Footer/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router >
      <div id="App" >
      <Header />
        <Routes>
          <Route path="/portfolio-react" element={<About/>} />
          <Route path="/portfolio-react" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
      <Footer />
      </div>

    </Router>
  );
}

export default App;
