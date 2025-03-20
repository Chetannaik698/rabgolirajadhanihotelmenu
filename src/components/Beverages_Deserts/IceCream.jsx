import React from "react";

const IceCream = () => {
  return (
    <div className="menu-section">
      <h2 className="menu-heading">ICE CREAMS</h2>
      <ul className="menu-list">
        <li>
          <img
            src="/hangyo_ice_cream.jpg"
            alt="Hangyo Ice Cream"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Hangyo Ice Cream</span>
          <span class="item-price"></span>
        </li>
        <li>
          <img
            src="/dairy_day_ice_creams.jpg"
            alt="Dairy Day Ice Cream"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Dairy Day Ice Cream</span>
          <span class="item-price"></span>
        </li>
        <li>
          <img
            src="/gudbud_ice_cream.jpg"
            alt="Gudbud Ice Cream"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Gudbud Ice Cream</span>
          <span class="item-price"></span>
        </li>
      </ul>
    </div>
  );
};

export default IceCream;
