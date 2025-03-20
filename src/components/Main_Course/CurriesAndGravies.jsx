import React from "react";

const CurriesAndGravies = () => {
  return (
    <div className="menu-section">
      <h2 className="menu-heading">CURRIES AND GRAVIES</h2>
      <ul className="menu-list">
        <li>
          <img src="/dal_fry.jpg" alt="Dal Fry" className="menu-item-img" />
          <span className="item-name">Dal Fry</span>
          <span className="item-price">₹100</span>
        </li>
        <li>
          <img src="/dal_tadka.jpg" alt="Dal Tadka" className="menu-item-img" />
          <span className="item-name">Dal Tadka</span>
          <span className="item-price">₹120</span>
        </li>
        <li>
          <img
            src="/dal_kolhapuri.jpg"
            alt="Dal Kolhapuri"
            className="menu-item-img"
          />
          <span className="item-name">Dal Kolhapuri</span>
          <span className="item-price">₹120</span>
        </li>
        <li>
          <img
            src="/rajdhani_spl_curry.gif"
            alt="Rajdhani Spl. Curry"
            className="menu-item-img"
          />
          <span className="item-name">Rajdhani Spl. Curry</span>
          <span className="item-price">₹220</span>
        </li>
        <li>
          <img src="/veg_kadai.jpg" alt="Veg Kadai" className="menu-item-img" />
          <span className="item-name">Veg Kadai</span>
          <span className="item-price">₹150</span>
        </li>
        <li>
          <img
            src="/veg_hyderabadi.jpg"
            alt="Veg Hyderabadi"
            className="menu-item-img"
          />
          <span className="item-name">Veg Hyderabadi</span>
          <span className="item-price">₹150</span>
        </li>
        <li>
          <img
            src="/veg_kolhapuri.jpg"
            alt="Veg Kolhapuri"
            className="menu-item-img"
          />
          <span className="item-name">Veg Kolhapuri</span>
          <span className="item-price">₹150</span>
        </li>
        <li>
          <img
            src="/palak_paneer.jpg"
            alt="Palak Paneer"
            className="menu-item-img"
          />
          <span className="item-name">Palak Paneer</span>
          <span className="item-price">₹180</span>
        </li>
        <li>
          <img
            src="/paneer_butter_masala.jpg"
            alt="Paneer Butter Masala"
            className="menu-item-img"
          />
          <span className="item-name">Paneer Butter Masala</span>
          <span className="item-price">₹180</span>
        </li>
        <li>
          <img
            src="/mushroom_butter_masala.jpg"
            alt="Mushroom Butter Masala"
            className="menu-item-img"
          />
          <span className="item-name">Mushroom Butter Masala</span>
          <span className="item-price">₹180</span>
        </li>
        <li>
          <img
            src="/kaju_masala.jpg"
            alt="Kaju Masala"
            className="menu-item-img"
          />
          <span className="item-name">Kaju Masala</span>
          <span className="item-price">₹190</span>
        </li>
      </ul>
    </div>
  );
};

export default CurriesAndGravies;
