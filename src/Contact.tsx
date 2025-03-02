import React from "react";
import "./Contact.css";

import FahadAli_CV from "./assets/Fahad_Ali_CV.pdf";

const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      <h2 id="Contact-Portion">Contact Me</h2>
      <p>Let's connect! Reach out for collaborations or inquiries.</p>
      <div className="contact-info">
        <p>
          <strong>Phone:</strong> +92 303 4990830
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:fahadaliCSB8@gmail.com">fahadaliCSB8@gmail.com</a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="http://www.linkedin.com/in/fahadali0421"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/fahadali0421
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="http://github.com/FahadAli0421"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/FahadAli0421
          </a>
        </p>
      </div>

      <a href={FahadAli_CV} download className="download-cv">
        Download CV
      </a>
    </section>
  );
};

export default Contact;
