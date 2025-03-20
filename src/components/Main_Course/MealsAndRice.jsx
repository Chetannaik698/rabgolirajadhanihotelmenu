import React from "react";

const MealsAndRice = () => {
  return (
    <div className="menu-section">
      <h2 className="menu-heading">MEALS / RICE ITEMS</h2>
      <ul className="menu-list">
        <li>
          <img
            src="/south_indian_meal.jpg"
            alt="South Indian Special Meal"
            className="menu-item-img"
          />
          <span className="item-name">South Indian Special Meal</span>
          <span className="item-price">₹120</span>
        </li>
        <li>
          <img
            src="/north_indian_meal.jpg"
            alt="North Indian Special Meal"
            className="menu-item-img"
          />
          <span className="item-name">North Indian Special Meal</span>
          <span className="item-price">₹200</span>
        </li>
        <li>
          <img
            src="/dal_khichdi.jpg"
            alt="Dal Khichdi"
            className="menu-item-img"
          />
          <span className="item-name">Dal Khichdi</span>
          <span className="item-price">₹120</span>
        </li>
        <li>
          <img src="/curd_rice.jpg" alt="Curd Rice" className="menu-item-img" />
          <span className="item-name">Curd Rice</span>
          <span className="item-price">₹100</span>
        </li>
        <li>
          <img
            src="/veg_biryani.jpg"
            alt="Veg Khichdi"
            className="menu-item-img"
          />
          <span className="item-name">Veg Biryani</span>
          <span className="item-price">₹140</span>
        </li>
        <li>
          <img
            src="/jeera_rice.jpg"
            alt="Jeera Rice"
            className="menu-item-img"
          />
          <span className="item-name">Jeera Rice</span>
          <span className="item-price">₹100</span>
        </li>
        <li>
          <img src="/veg_pulao.jpg" alt="Veg Pulao" className="menu-item-img" />
          <span className="item-name">Veg Pulao</span>
          <span className="item-price">₹120</span>
        </li>
        <li>
          <img
            src="/veg_fried_rice.jpg"
            alt="Veg Fried Rice"
            className="menu-item-img"
          />
          <span className="item-name">Veg Fried Rice</span>
          <span className="item-price">₹120</span>
        </li>
        <li>
          <img
            src="/veg_noodels.jpg"
            alt="Veg Fried Rice"
            className="menu-item-img"
          />
          <span className="item-name">Veg Noodels</span>
          <span className="item-price">₹120</span>
        </li>
        <li>
          <img src="/ghee_rice.jpg" alt="Ghee Rice" className="menu-item-img" />
          <span className="item-name">Ghee Rice</span>
          <span className="item-price">₹120</span>
        </li>
        <li>
          <img
            src="/plain_rice.jpg"
            alt="Plain Rice"
            className="menu-item-img"
          />
          <span className="item-name">Plain Rice</span>
          <span className="item-price">₹35</span>
        </li>
        <li>
          <img
            src="/roti_curry.jpg"
            alt="Veg Khichdi"
            className="menu-item-img"
          />
          <span className="item-name">Roti Curry</span>
          <span className="item-price">₹100</span>
        </li>
      </ul>
    </div>
  );
};

export default MealsAndRice;
