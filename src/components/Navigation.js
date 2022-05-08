import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="sidebar">
        <div className="id">
          <div className="idContent">
            <img src="./media/billGates.jpg" alt="profil-pic" />
            <h3>Jimmy Demortreux</h3>
          </div>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <NavLink
                to="/"
                className={(nav) => (nav.isActive ? "nav-acive" : "")}
              >
                <i className="fas fa-home"></i>
                <span>accueil</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/competences"
                className={(nav) => (nav.isActive ? "nav-acive" : "")}
              >
                <i className="fas fa-mountain"></i>
                <span>Compétences</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={(nav) => (nav.isActive ? "nav-acive" : "")}
              >
                <i className="fas fa-images"></i>
                <span>Portfolio</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={(nav) => (nav.isActive ? "nav-acive" : "")}
              >
                <i className="fas fa-address-book"></i>
                <span>contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/jimmy-demortreux-82852196/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/JimmyDmtrx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              {/* <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              > */}
              <i className="fab fa-twitter"></i>
              {/* </a> */}
            </li>
          </ul>
          <div className="signature">
            <p>Jimmy Demortreux - 2022</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
