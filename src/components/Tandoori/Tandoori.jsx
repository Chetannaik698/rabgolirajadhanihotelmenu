import React from "react";

const Tandoori = () => {
  return (
    <div className="menu-section">
      <h2 className="menu-heading">TANDOORI</h2>
      <ul className="menu-list">
        <li>
          <img
            src="/chicken_tandoori_tikka.jpg"
            alt="Chicken Tandoori Tikka"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Chicken Tandoori Tikka</span>
          <span class="item-price">₹220</span>
        </li>
        <li>
          <img
            src="/tandoori_tandoori_kebab.jpg"
            alt="Tandoori Tandoori Kebab"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Tandoori Tandoori Kebab</span>
          <span class="item-price">₹190</span>
        </li>
        <li>
          <img
            src="/chicken_tandoori.jpg"
            alt="Chicken Tandoori"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Chicken Tandoori</span>
          <span class="item-price">Wgt.</span>
        </li>
        <li>
          <img
            src="/chicken_tandoori_half.jpg"
            alt="Chicken Tandoori Half"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Chicken Tandoori Half</span>
          <span class="item-price">Wgt.</span>
        </li>
        <li>
          <img
            src="/chicken_tandoori_kalmi.jpg"
            alt="Chicken Tandoori Kalmi"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Chicken Tandoori Kalmi</span>
          <span class="item-price">₹240</span>
        </li>
      </ul>
    </div>
  );
};

export default Tandoori;
