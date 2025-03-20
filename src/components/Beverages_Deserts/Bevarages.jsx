import React from "react";

const Bevarages = () => {
  return (
    <div className="menu-section">
      <h2 className="menu-heading">BEVERAGES</h2>
      <ul className="menu-list">
        <li>
          <img
            src="/tea.jpg"
            alt="Tea / Coffee"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Tea / Coffee</span>
          <span class="item-price">₹25</span>
        </li>
        <li>
          <img
            src="/milk.jpg"
            alt="Milk"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Milk</span>
          <span class="item-price">₹20</span>
        </li>
        <li>
          <img
            src="/soft_drinks.jpg"
            alt="Soft Drinks (200ml / 500ml / 2ltr)"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Soft Drinks (200ml / 500ml / 2ltr)</span>
          <span class="item-price"></span>
        </li>
        <li>
          <img
            src="/fresh_juice.jpg"
            alt="Fresh Juice / Milk Shake"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Fresh Juice / Milk Shake</span>
          <span class="item-price"></span>
        </li>
        <li>
          <img
            src="/mineral_water.jpg"
            alt="Mineral Water (1ltr / 2ltr)"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Mineral Water (1ltr / 2ltr)</span>
          <span class="item-price"></span>
        </li>
      </ul>
    </div>
  );
};

export default Bevarages;
