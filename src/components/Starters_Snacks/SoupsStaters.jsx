import React from "react";

const SoupsStaters = () => {
  return (
    <div className="menu-section">
      <h2 className="menu-heading">SOUPS STATERS</h2>
      <ul className="menu-list">
        <li>
          <img
            src="/tomato_soup.jpg"
            alt="Tomato Soup"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Tomato Soup</span>
          <span className="item-price">₹80</span>
        </li>
        <li>
          <img
            src="/veg_manchow_soup.jpg"
            alt="Veg Manchow Soup"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Veg Manchow Soup</span>
          <span className="item-price">₹100</span>
        </li>
        <li>
          <img
            src="/gobi_manchurian.jpg"
            alt="Gobi Manchurian / Gobi Chilly"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Gobi Manchurian / Gobi Chilly</span>
          <span className="item-price">₹120</span>
        </li>
        <li>
          <img
            src="/paneer_manchurian.jpg"
            alt="Paneer Manchurian / Chilly"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Paneer Manchurian / Chilly</span>
          <span className="item-price">₹160</span>
        </li>
        <li>
          <img
            src="/mushroom_chilly.jpg"
            alt="Mushroom Chilly / Manchurian"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Mushroom Chilly / Manchurian</span>
          <span className="item-price">₹150</span>
        </li>
        <li>
          <img
            src="/baby_corn_chilly.jpg"
            alt="Baby Corn Chilly / Manchurian"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Baby Corn Chilly / Manchurian</span>
          <span className="item-price">₹150</span>
        </li>
        <li>
          <img
            src="/finger_chips.jpg"
            alt="Finger Chips"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Finger Chips</span>
          <span className="item-price">₹80</span>
        </li>
        <li>
          <img
            src="/masala_papad.jpg"
            alt="Masala Papad"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Masala Papad</span>
          <span className="item-price">₹60</span>
        </li>
      </ul>
    </div>
  );
};

export default SoupsStaters;
