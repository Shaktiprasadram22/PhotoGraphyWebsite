import React from "react";
import "./About.css"; // Make sure the CSS is updated accordingly

function About() {
  return (
    <div className="about-section">
      <h2 style={{ textAlign: "right", paddingRight: "30%" }}>About Me</h2>

      <div className="about-layout">
        <div className="about-image-container">
          <img
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="Professional Portrait"
            className="about-image"
          />
        </div>
        <div className="about-text">
          <p>
            Hello! I’m Billie, a <strong>professional photographer</strong>{" "}
            based in BBSR. I specialize in <em>wedding And cinematic</em>,
            capturing everything from 1 subjects to more subjects. With over 10
            of experience, my work has been recognized with Awards/Recognition,
            reflecting my commitment to capturing breathtaking moments.
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
