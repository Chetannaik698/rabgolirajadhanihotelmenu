import React from "react";

const Staters = () => {
  return (
    <div className="menu-section">
      <h2 className="menu-heading">STATERS</h2>
      <ul className="menu-list">
        <li>
          <img
            src="/chicken_chilly.jpg"
            alt="Chicken Chilly"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Chicken Chilly</span>
          <span class="item-price">₹180</span>
        </li>
        <li>
          <img
            src="/chicken_65.jpg"
            alt="Chicken 65"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Chicken 65</span>
          <span class="item-price">₹170</span>
        </li>
        <li>
          <img
            src="/chicken_kabab.jpg"
            alt="Chicken Kabab"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Chicken Kabab</span>
          <span class="item-price">₹170</span>
        </li>
        <li>
          <img
            src="/chicken_sukka.jpg"
            alt="Chicken Sukka"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Chicken Sukka</span>
          <span class="item-price">₹180</span>
        </li>
        <li>
          <img
            src="/chicken_pepper_dry.jpg"
            alt="Chicken Pepper Dry"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Chicken Pepper Dry</span>
          <span class="item-price">₹180</span>
        </li>
        <li>
          <img
            src="/chicken_lollypop.jpg"
            alt="Chicken Lollypop"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Chicken Lollypop</span>
          <span class="item-price">₹180</span>
        </li>
      </ul>
    </div>
  );
};

export default Staters;
