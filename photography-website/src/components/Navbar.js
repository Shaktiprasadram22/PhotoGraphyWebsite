// src/components/Navbar.js
import React from "react";
import "./Navbar.css";

function Navbar() {
  const handleNavLinkClick = (event, id) => {
    event.preventDefault(); // Prevent default link behavior
    const targetElement = document.getElementById(id);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <a href="/" onClick={(e) => handleNavLinkClick(e, "home")}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" onClick={(e) => handleNavLinkClick(e, "contact")}>
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a href="#price" onClick={(e) => handleNavLinkClick(e, "price")}>
            Price
          </a>
        </li>
        <li className="nav-item">
          <a href="#form" onClick={(e) => handleNavLinkClick(e, "form")}>
            Form
          </a>
        </li>
        <li className="nav-item">
          <a href="#shop" onClick={(e) => handleNavLinkClick(e, "shop")}>
            Shop
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
