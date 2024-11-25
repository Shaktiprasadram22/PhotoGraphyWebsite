import React, { useState } from "react";
import "./Services.css";

function Services() {
  const [openService, setOpenService] = useState(null);

  const toggleDescription = (id) => {
    setOpenService(openService === id ? null : id);
  };

  const services = [
    { id: 1, title: "Weddings" },
    { id: 2, title: "Corporate Events" },
    { id: 3, title: "Portraits" },
    { id: 4, title: "Event Photography" },
    { id: 5, title: "Lifestyle Photography" },
    { id: 6, title: "Fashion Photography" },
    { id: 7, title: "Food Photography" },
  ];

  return (
    <div className="services-section">
      <h2>Services I Offer</h2>
      <ul>
        {services.map((service) => (
          <li
            key={service.id}
            onClick={() => toggleDescription(service.id)}
            aria-expanded={openService === service.id}
          >
            <div className="service-header">
              <h3>{service.title}</h3>
            </div>
            {openService === service.id && (
              <div className="service-more-info show"></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
