import React from 'react';
import githubPic from '../../Assets/github-logo.jpg';
import linkedin from '../../Assets/linkedin.png';
import stackOverflow from '../../Assets/stack-overflow.jpeg';

const Footer = () => {
    return (
        <div id="footer">
            <a href='https://github.com/thaling11' target="blank"><img src={githubPic} className="footer-links"></img></a>
            <a href='https://www.linkedin.com/in/tori-haling-4083b313b/' target="blank"><img src={linkedin} className="footer-links"></img></a>
            <a href='https://stackexchange.com/users/25175406/tori-haling' target="blank"><img src={stackOverflow} className="footer-links"></img></a>
        </div>
    )
}




export default Footer;