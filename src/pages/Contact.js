import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
  const [nameInput, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setContent(inputValue);
      console.log(content)
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !nameInput) {
      setErrorMessage("Invalid email, please try again");
      return;
    }

    if (!content) {
      setErrorMessage("Please enter a message");
      return;
    }

    setContent("");
    setEmail("");
    setName("");
  };

  return (
    <section id="contact">
      <h3>Contact</h3>
      <form>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleInputChange}
          value={nameInput}
        />
        <input
          id="email"
          name="email"
          type="text"
          onChange={handleInputChange}
          value={email}
        />
        <textarea
          id="content"
          name="content"
          type="text"
          onChange={handleInputChange}
          value={content}
        />
        <button type="button" id="submit-button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p >{errorMessage}</p>
        </div>
      )}
    </section>
  );
}

export default Contact;
