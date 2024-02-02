import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import "./NavBar.css";

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [burgerClass, setBurgerClass] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const navbarStyle = {
    backgroundColor: scrolling ? "rgb(87, 5, 5)" : "transparent",
    transition: "background-color 0.3s ease",
  };
  const handleBurgerClick = () => {
    setBurgerClass(!burgerClass);
  };
  return (
    <div>
      <nav className="navbar" style={navbarStyle}>
        <div className="nav">
          <div>
            <h4>
              <Link to="/">Get The App</Link>
            </h4>
          </div>
          <div className="nav-items">
            <li>
              <Link to="/addres">Add Restaurant</Link>
            </li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </div>
          <div className={burgerClass ? "none" : "nav_burger"}>
            <GiHamburgerMenu onClick={handleBurgerClick} />
          </div>
        </div>
      </nav>
      <div className={burgerClass ? "burger-items" : "none"}>
        <RxCross2 onClick={handleBurgerClick} className="cross" />
        <li>Add Restaurant</li>
        <li>Log in</li>
        <li>Sign up</li>
      </div>
    </div>
  );
};

export default NavBar;
