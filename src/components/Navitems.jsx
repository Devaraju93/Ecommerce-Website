import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";

const Navitems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialTogle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // addevent Listener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });
  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* {header top starts} */}
      <div className={`header-top  d-md-none  ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me ">
              {" "}
              <span>Create Account</span>
            </Link>
            <Link to="/login">Create Account</Link>
          </div>
        </div>
      </div>

      {/* header bottom */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* logo */}
            <div className="logo-search-acte">
              <div className="logo">
              <Link to={"/"}>
              <img src={logo} alt="" />
              </Link>
              </div>

            </div>

            {/* menu area */}
            <div className="menu-area">
              <div className="menu">
               <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
               </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navitems;
