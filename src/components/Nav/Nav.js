import React, { useState } from "react";
import "./Nav.css";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  let menu;
  if (showMenu) {
    menu = (
      <div className="mobile-menu md:hidden">
        <a href="#" className="mobile-menu-item">
          Home
        </a>
        <a href="#" className="mobile-menu-item">
          About
        </a>
        <a href="#" className="mobile-menu-item">
          Work
        </a>
        <a href="#" className="mobile-menu-item">
          Skills
        </a>
        <a href="#" className="mobile-menu-item">
          Contact
        </a>

        <div className="social-media">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>
      </div>
    );
  }
  return (
    // Portfolio website

    // Navigation bar

    <div className="sticky top-0 nav-bar bg-indigo-600 py-3 w-full">
      <div className="flex justify-between items-center px-3 md:max-w-7xl md:mx-auto">
        <div className="nav-bar-left flex items-center space-x-8">
          <div className="nav-left-left">
            <a href="#">
              <img
                src="./logo.png"
                className="w-10 bg-gray-200 rounded"
                alt="Logo"
              ></img>
            </a>
          </div>

          <div className="nav-left-right md:block hidden">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
          </div>
        </div>
        <div className="nav-bar-right md:block hidden">
          <a href="#" className="nav-bar-right-item">
            <FaFacebookF className="text-white" />
          </a>
          <a href="#" className="nav-bar-right-item">
            <FaInstagram className="text-white" />
          </a>
          <a href="#" className="nav-bar-right-item">
            <FaLinkedin className="text-white" />
          </a>
          <a href="#contact" className="active">
            Contact
          </a>
        </div>

        <button
          className=" md:hidden border-0 bg-indigo-600"
          onClick={() => setShowMenu(!showMenu)}
        >
          <div>
            <FiMenu className="text-3xl text-white" />
          </div>
        </button>
      </div>

      {menu}
    </div>
  );
};

export default Nav;
