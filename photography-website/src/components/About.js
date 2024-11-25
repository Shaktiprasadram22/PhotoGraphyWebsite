import React from "react";
import "./About.css"; // Make sure the CSS is updated accordingly

function About() {
  return (
    <div className="about-section">
      <h2 style={{ textAlign: "right", paddingRight: "30%" }}>About Me</h2>

      <div className="about-layout">
        <div className="about-image-container"></div>
        <div className="about-text">
          <p>
            Hello! I’m Sarthak, a <strong>small photographer</strong> from
            Odisha. I specialize in{" "}
            <em>cinematic shots and drone photography</em>, capturing stunning
            visuals with precision and creativity. With experience in cinematic
            and aerial shots, I am passionate about turning moments into lasting
            memories.
          </p>

          <button
            onClick={() => {
              /* function to show more details */
            }}
          >
            Read More
          </button>
          <p className="testimonial-quote">
            “[Capture the moment , Freeze the emotion in Your Picture]” - Client
            Beast
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
