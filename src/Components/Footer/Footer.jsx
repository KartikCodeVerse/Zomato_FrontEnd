import React from "react";
import apple_store from "../../assest/banner/As.png";
import play_store from "../../assest/banner/GP.png";

import "./Footer.css";
const Footer = () => {
  return (
    <section className="footer">
      <div className="sec-7">
        <div className="first">
          <div className="logo_img">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
              alt=""
            />
          </div>
          <div className="opt">
            <div className="opt-box">
              <div className="count">
                <i className="fa-solid fa-flag" />
                <span>India</span>
                <i className="fa-solid fa-chevron-down" />
              </div>
            </div>

            <div className="opt-box">
              <div className="lang">
                <i className="fa-solid fa-globe" />
                <span>English</span>
                <i className="fa-solid fa-chevron-down" />
              </div>
            </div>
          </div>
        </div>
        <div className="second">
          <div>
            <h4>ABOUT ZOMATO</h4>
            <a href="#">Who We Are</a>
            <a href="#">Blog</a>
            <a href="#">Work With Us</a>
            <a href="#">Investor Relations</a>
            <a href="#">Report Fraud</a>
            <a href="#">Press Kit</a>
            <a href="#">Contact Us</a>
          </div>
          <div>
            <h4>ZOMAVERSE</h4>
            <a href="#">Zomato</a>
            <a href="#">Blinkit</a>
            <a href="#">Feeding India</a>
            <a href="#">Hyperpure</a>
            <a href="#">Zomaland</a>
          </div>
          <div>
            <h4>FOR RESTAURANTS</h4>
            <a href="#">Partner With Us </a>
            <a href="#">Apps For You</a>
            <h4>FOR ENTERPRISES</h4>
            <a href="#">Zomato For Enterprise</a>
          </div>
          <div>
            <h4>LEARN MORE</h4>
            <a href="#">Privacy</a>
            <a href="#">Security</a>
            <a href="#">Terms</a>
            <a href="#">Sitemap</a>
          </div>
          <div className="social_cont">
            <h4>SOCIAL LINKS</h4>
            <div className="icon-box">
              <i className="fab fa-linkedin" style={{ color: "#000000" }} />
              <i className="fab fa-twitter" style={{ color: "#000000" }} />
              <i className="fab fa-instagram" style={{ color: "#000000" }} />
              <i className="fab fa-youtube" style={{ color: "#000000" }} />
              <i className="fab fa-facebook" style={{ color: " #000000" }} />
            </div>
            <div className="dwn-icon">
              <img src={apple_store} alt="" />
              <img src={play_store} alt="" />
            </div>
          </div>
        </div>
        <hr />
        <p className="third">
          &copy; By continuing past this page, you agree to our Terms of
          Service, Cookie Policy, Privacy Policy and Content Policies. All
          trademarks are properties
        </p>
      </div>
    </section>
  );
};

export default Footer;
