import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header">
          <div className="contactBox">
            <h1>Contactez-moi</h1>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Paris</span>
              </li>
              <li>
                <i className="fas fa-mobile-alt"></i>
                <CopyToClipboard text="0625442118">
                  <span
                    className="clickInput"
                    onClick={() => {
                      alert("téléphone copié");
                    }}
                  >
                    06 25 44 21 18
                  </span>
                </CopyToClipboard>
              </li>
              <li>
                <i className="far fa-envelope"></i>
                <CopyToClipboard text="jim.dmtrx@live.fr">
                  <span
                    className="clickInput"
                    onClick={() => {
                      alert("Email copié");
                    }}
                  >
                    Jim.dmtrx@live.fr
                  </span>
                </CopyToClipboard>
              </li>
            </ul>
          </div>
        </div>
        <div className="socialNetworkContact">
          <ul>
            <a
              href="https://www.linkedin.com/in/jimmy-demortreux-82852196/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/JimmyDmtrx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
