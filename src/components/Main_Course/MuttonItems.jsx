import React from "react";

const MuttonItems = () => {
  return (
    <div className="menu-section">
      <h2 className="menu-heading">MUTTON ITEMS</h2>
      <ul className="menu-list">
        <li>
          <img
            src="/mutton_hyderabadi.jpg"
            alt="Mutton Hyderabadi"
            className="menu-item-img"
          />
          <span className="item-name">Mutton Hyderabadi</span>
          <span className="item-price">₹300</span>
        </li>
        <li>
          <img
            src="/mutton_masala.jpg"
            alt="Mutton Masala"
            className="menu-item-img"
          />
          <span className="item-name">Mutton Masala</span>
          <span className="item-price">₹290</span>
        </li>
        <li>
          <img
            src="/mutton_kolhapuri.jpg"
            alt="Mutton Kolhapuri"
            className="menu-item-img"
          />
          <span className="item-name">Mutton Kolhapuri</span>
          <span className="item-price">₹300</span>
        </li>
        <li>
          <img
            src="/mutton_kadai.jpg"
            alt="Mutton Kadai"
            className="menu-item-img"
          />
          <span className="item-name">Mutton Kadai</span>
          <span className="item-price">₹320</span>
        </li>
        <li>
          <img
            src="/mutton_sukka.jpg"
            alt="Mutton Sukka"
            className="menu-item-img"
          />
          <span className="item-name">Mutton Sukka</span>
          <span className="item-price">₹300</span>
        </li>
        <li>
          <img
            src="/mutton_chilly.jpg"
            alt="Mutton Chilly"
            className="menu-item-img"
          />
          <span className="item-name">Mutton Chilly</span>
          <span className="item-price">₹280</span>
        </li>
        <li>
          <img
            src="/mutton_pep_dry.jpg"
            alt="Mutton Pep. Dry"
            className="menu-item-img"
          />
          <span className="item-name">Mutton Pep. Dry</span>
          <span className="item-price">₹300</span>
        </li>
        <li>
          <img
            src="/mutton_ghee_roast.jpg"
            alt="Mutton Ghee Roast"
            className="menu-item-img"
          />
          <span className="item-name">Mutton Ghee Roast</span>
          <span className="item-price">₹330</span>
        </li>
      </ul>
    </div>
  );
};

export default MuttonItems;
