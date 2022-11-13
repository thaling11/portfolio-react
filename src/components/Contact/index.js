import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("Name");
  const [email, setEmail] = useState("Email");
  const [content, setContent] = useState("Message");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  return (
    <section id="contact">
      <h3>Contact</h3>
      <div>
        <input
          id="name"
          name="name"
          type="text"
          defaultValue="Name"
          onChange={handleNameChange}
          value={name}
        />
        <input
          id="email"
          name="email"
          type="text"
          defaultValue="Email"
          onChange={handleEmailChange}
          value={email}
        />
        <input
          id="content"
          name="content"
          type="text"
          defaultValue="Message"
          onChange={handleContentChange}
          value={content}
        />
      </div>
    </section>
  );
};

export default Contact;
