import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>interets</h3>
      <ul>
        <li className="hobby">
        <i class="fas fa-utensils"></i>
          <span>Gastronomie</span>
        </li>
        <li className="hobby">
        <i class="fas fa-wine-glass"></i>
          <span>Oenologie</span>
        </li>
        <li className="hobby">
          <i className="fas fa-globe"></i>
          <span>Voyage</span>
        </li>
        <li className="hobby">
        <i class="fas fa-gamepad"></i>
          <span>Jeux vidéos</span>
        </li>
        <li className="hobby">
        <i class="fas fa-music"></i>
          <span>musique</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
