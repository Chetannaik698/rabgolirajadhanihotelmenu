import React from "react";

const EggGravy = () => {
  return (
    <div className="menu-section">
      <h2 className="menu-heading">EGG GRAVY</h2>
      <ul className="menu-list">
        <li>
          <img
            src="/egg_masala.jpg"
            alt="Egg Masala"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Egg Masala</span>
          <span className="item-price">₹120</span>
        </li>
        <li>
          <img
            src="/egg_kolhapuri.jpg"
            alt="Egg Kolhapuri"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Egg Kolhapuri</span>
          <span className="item-price">₹120</span>
        </li>
      </ul>
    </div>
  );
};

export default EggGravy;
