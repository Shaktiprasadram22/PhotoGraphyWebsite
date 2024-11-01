import React from "react";

function CTA() {
  return (
    <div
      id="contact" // This ID matches the Navbar link for smooth scrolling
      style={{
        backgroundColor: "#ff6347",
        color: "white",
        padding: "40px",
        textAlign: "center",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h2>Ready to Capture Your Moments?</h2>
      <p>
        Connect with us today and let us help you keep your best memories
        forever.
      </p>
      <a
        href="mailto:your-email@example.com"
        style={{
          display: "inline-block",
          fontSize: "18px",
          padding: "10px 20px",
          backgroundColor: "white",
          color: "#ff6347",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          textDecoration: "none", // Remove underline from link
          transition: "all 0.3s ease",
        }}
      >
        Contact Us
      </a>
    </div>
  );
}

export default CTA;
