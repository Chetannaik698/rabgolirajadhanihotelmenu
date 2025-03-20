import React from 'react'

const EggStaters = () => {
  return (
    <div className="menu-section">
      <h2 className="menu-heading">EGG STATERS</h2>
      <ul className="menu-list">
      <li>
  <img
    src="/egg_burji.jpg"
    alt="Egg Burji"
    className="menu-item-img"
    loading="lazy"
  />
  <span className="item-name">Egg Burji</span>
  <span class="item-price">₹60</span>
</li>
<li>
  <img
    src="/egg_omlet.jpg"
    alt="Egg Omlet"
    className="menu-item-img"
    loading="lazy"
  />
  <span className="item-name">Egg Omlet</span>
  <span class="item-price">₹60</span>
</li>
<li>
  <img
    src="/egg_chilly.jpg"
    alt="Egg Chilly"
    className="menu-item-img"
    loading="lazy"
  />
  <span className="item-name">Egg Chilly</span>
  <span class="item-price">₹100</span>
</li>
<li>
  <img
    src="/egg_pep_dry.jpg"
    alt="Egg Pepper Dry"
    className="menu-item-img"
    loading="lazy"
  />
  <span className="item-name">Egg Pep. Dry</span>
  <span class="item-price">₹110</span>
</li>
<li>
  <img
    src="/boiled_egg.jpg"
    alt="Boiled Egg (2 Egg)"
    className="menu-item-img"
    loading="lazy"
  />
  <span className="item-name">Boiled Egg (2 Egg)</span>
  <span class="item-price">₹40</span>
</li>

      </ul>
    </div>
  )
}

export default EggStaters
