import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    query: "",
    referenceImage: null,
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    alert("Form submitted, check the console for data!");
  };

  // Adjusting the ID to match the Navbar link for "Form"
  return (
    <form onSubmit={handleSubmit} className="contact-form" id="form">
      <h2>Contact Us</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Your Address"
        value={formData.address}
        onChange={handleChange}
      />
      <textarea
        name="query"
        placeholder="Your Queries"
        value={formData.query}
        onChange={handleChange}
      ></textarea>
      <label htmlFor="referenceImage" className="file-input-label">
        Upload a reference image of the type of photography you're interested in
        (e.g., wedding, portrait, event):
      </label>
      <input
        type="file"
        name="referenceImage"
        id="referenceImage"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
