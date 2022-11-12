import React from "react";
import Header from "./components/Header/index";
import About from "./components/About/index";
import Portfolio from "./components/Portfolio/index";
import Resume from "./components/Resume/index";
import Contact from "./components/Contact/index";
// import Footer from "./components/Footer/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section>
        <Header />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Portfolio />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Resume />
      </section>
    </div>
  );
}

export default App;
