import React from "react";
import "./Contact.css";
import "../../index.css"


const Contact = () => {
  return (
    <div className="contact-container">
      <div className="button-group">
       <a href='https://www.linkedin.com/in/owen-bartlett-7a539729a/'>
        <button className="contact-button">LinkedIn</button>
       </a>
       <a href='mailto:odbartlett1@gmail.com'>
        <button className="contact-button">odbartlett1@gmail.com</button>
       </a>
      </div>
    </div>
  );
};

export default Contact;
