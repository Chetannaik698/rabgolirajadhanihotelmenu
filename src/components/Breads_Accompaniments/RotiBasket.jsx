import React from "react";

const RotiBasket = () => {
  return (
    <div className="menu-section">
      <h2 className="menu-heading">ROTI BASKET</h2>
      <ul className="menu-list">
        <li>
          <img
            src="/tandoori_roti.jpg"
            alt="Tandoori Roti"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Tandoori Roti</span>
          <span class="item-price">₹25</span>
        </li>
        <li>
          <img
            src="/butter_roti.jpg"
            alt="Butter Roti"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Butter Roti</span>
          <span class="item-price">₹30</span>
        </li>
        <li>
          <img
            src="/plain_nan.jpg"
            alt="Plain Nan"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Plain Nan</span>
          <span class="item-price">₹30</span>
        </li>
        <li>
          <img
            src="/butter_nan.jpg"
            alt="Butter Nan"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Butter Nan</span>
          <span class="item-price">₹40</span>
        </li>
        <li>
          <img
            src="/garlic_nan.jpg"
            alt="Garlic Nan"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Garlic Nan</span>
          <span class="item-price">₹60</span>
        </li>
        <li>
          <img
            src="/tawa_parota.jpg"
            alt="Tawa Parota"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Tawa Parota</span>
          <span class="item-price">₹20</span>
        </li>
        <li>
          <img
            src="/butter_kulcha.jpg"
            alt="Butter Kulcha"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Butter Kulcha</span>
          <span class="item-price">₹40</span>
        </li>
      </ul>
    </div>
  );
};

export default RotiBasket;
