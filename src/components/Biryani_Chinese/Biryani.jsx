import React from "react";

const Biryani = () => {
  return (
    <div className="menu-section">
      <h2 className="menu-heading">BIRIYANI</h2>
      <ul className="menu-list">
        <li>
          <img
            src="/chicken_biryani_full.jpg"
            alt="Chicken Biryani Full"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Chicken Biryani Full</span>
          <span class="item-price">₹180</span>
        </li>

        <li>
          <img
            src="/chicken_biryani_half.jpg"
            alt="Chicken Biryani Half"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Chicken Biryani Half</span>
          <span class="item-price">₹110</span>
        </li>

        <li>
          <img
            src="/mutton_biryani.jpg"
            alt="Mutton Biryani"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Mutton Biryani</span>
          <span class="item-price">₹280</span>
        </li>

        <li>
          <img
            src="/egg_biryani.jpg"
            alt="Egg Biryani"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Egg Biryani</span>
          <span class="item-price">₹120</span>
        </li>

        <li>
          <img
            src="/prawns_biryani.jpg"
            alt="Prawns Biryani"
            className="menu-item-img"
            loading="lazy"
          />
          <span className="item-name">Prawns Biryani</span>
          <span class="item-price">₹350</span>
        </li>
      </ul>
    </div>
  );
};

export default Biryani;
