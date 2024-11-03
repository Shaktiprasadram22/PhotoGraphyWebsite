// src/components/Footer.js
import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

function Footer({ onLogout, isAuthenticated }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout(); // Call the logout function from App.js
    navigate("/login"); // Redirect to login page
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Maa Tarini Photography</h3>
        <p>BBSR,ODISHA,PATIA,758021</p>
        <p>Contact us: +91 8917583070</p>
        <div className="social-links">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
        {isAuthenticated && (
          <button className="logout-button" onClick={handleLogoutClick}>
            Logout
          </button>
        )}
      </div>
    </footer>
  );
}

export default Footer;
