import React from "react";

const Chinese = () => {
  return (
    <div className="menu-section">
      <h2 className="menu-heading">CHINESE</h2>
      <ul className="menu-list">
        <li>
          <img
            src="/chicken_fried_rice.jpg"
            alt="Chicken Fried Rice"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Chicken Fried Rice</span>
          <span class="item-price">₹150</span>
        </li>

        <li>
          <img
            src="/chicken_sezwan_fried_rice.jpg"
            alt="Chicken Sezwan Fried Rice"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Chicken Sezwan Fried Rice</span>
          <span class="item-price">₹160</span>
        </li>

        <li>
          <img
            src="/egg_fried_rice.jpg"
            alt="Egg Fried Rice"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Egg Fried Rice</span>
          <span class="item-price">₹120</span>
        </li>

        <li>
          <img
            src="/chicken_noodels.jpg"
            alt="Chicken Noodles"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Chicken Noodles</span>
          <span class="item-price">₹140</span>
        </li>

        <li>
          <img
            src="/egg_sezwan_fried_rice.jpg"
            alt="Egg Sezwan Fried Rice"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Egg Sezwan Fried Rice</span>
          <span class="item-price">₹140</span>
        </li>


        <li>
          <img
            src="/egg_noodels.jpg"
            alt="Egg Noodles"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Egg Noodles</span>
          <span class="item-price">₹120</span>
        </li>

        <li>
          <img
            src="/chicken_sezwan_noodels.jpg"
            alt="Chicken Sezwan Noodles"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Chicken Sezwan Noodles</span>
          <span class="item-price">₹160</span>
        </li>
      </ul>
    </div>
  );
};

export default Chinese;
