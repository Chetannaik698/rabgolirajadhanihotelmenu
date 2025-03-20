import React from "react";

const SaladsCurd = () => {
  return (
    <div className="menu-section">
      <h2 className="menu-heading">SALAD & CURD</h2>
      <ul className="menu-list">
        <li>
          <img
            src="/green_salad.jpg"
            alt="Green Salad"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Green Salad</span>
          <span class="item-price">₹60</span>
        </li>
        <li>
          <img
            src="/curds.jpg"
            alt="Curd Rice"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Curds</span>
          <span class="item-price">₹25</span>
        </li>
        <li>
          <img
            src="/mix_raitha.jpg"
            alt="Raitha"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Mix Raitha</span>
          <span class="item-price">₹80</span>
        </li>
      </ul>
    </div>
  );
};

export default SaladsCurd;
