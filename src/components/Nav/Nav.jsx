import React from "react";
import logo from "../../assets/logo.png";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img src={logo} className="flash-logo" alt="logo" />
        <p className="flash-logo-text">FlashType</p>
      </div>
      <div className="nav-right">
        <a
          target="_blank"
          className="nav-github-link"
          href="https://github.com/dhwajsharma/flash-type-react"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Nav;
