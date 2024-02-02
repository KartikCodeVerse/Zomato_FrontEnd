import React from "react";
import mobimg from "../../assest/banner/kindpng_1521000.png";
import apple_store from "../../assest/banner/As.png";
import play_store from "../../assest/banner/GP.png";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="flex contact">
        <img src={mobimg} alt="" />

        <div className="address">
          <h2>Get The Zomato App</h2>
          <p>
            We will send you a link, open it on your phone to dwonload the app
          </p>
          <div className="flex radio">
            <div>
              <input type="radio" id="email" name="fill" defaultChecked  />
              <label htmlFor="email">Email </label>
            </div>
            <div>
              <input type="radio" id="phone" name="fill" defaultChecked  />
              <label htmlFor="phone">Phone</label>
            </div>
          </div>
          <div className="flex email">
            <input type="text" placeholder="Email" />
            <button>Share App Link</button>
          </div>
          <p className="download">Download app from</p>
          <div className="flex app">
            <img src={apple_store} alt="" />
            <img src={play_store} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
