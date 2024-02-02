import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <section className="header">
      <div className="head">
        <img
          className="logo"
          src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
          alt=""
        />
        <h3>Find the best restaurants, cafés and bars in India</h3>
        <div className="search">
          <i className="fa-solid fa-location-dot"></i>
          <p>Ywca, 1, Ashoka Rd, Hanu</p>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            placeholder="Search for restaurant, cuisine or a dish"
          />
        </div>
      </div>
      <div className="header-image">
        <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" />
      </div>
    </section>
  );
};

export default Header;
