import React from "react";
import image from "../../Assets/profile-picture.jpeg";

const About = () => {
  return (
    <div id="about">
      <div>
        <h2 id="name-header">Tori Haling</h2>
      </div>
      <img src={image} id="profile-picture" />
      <p id="about-bio">
        Welcome! I'm a full stack web developer based in Denver, CO. I have a
        background in healthcare with a passion for building and designing
        applications that have a meaningful impact. In addition to web
        development, I enjoy rock climbing, camping, and reading.{" "}
      </p>
    </div>
  );
};

export default About;
