import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav id="navbar" >
     
      <Link to={`/portfolio-react/about`}>
          About
        </Link>

        <Link to={`/portfolio-react/portfolio`}>
          Portfolio
        </Link>

        <Link to={`/portfolio-react/contact`}>
          Contact
        </Link>

        
        <Link to={`/portfolio-react/resume`}>
          Resume
        </Link>
      </nav>
    </div>
  );
};

export default Header;
