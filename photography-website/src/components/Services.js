import React, { useState } from "react";
import "./Services.css";

function Services() {
  const [openService, setOpenService] = useState(null);

  const toggleDescription = (id) => {
    setOpenService(openService === id ? null : id);
  };

  const services = [
    {
      id: 1,
      title: "Weddings",
      description:
        "Capture your special day with professional photography. Packages start at $XYZ.",
      moreInfo:
        "Includes full-day coverage, multiple photographers, and a custom album.",
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/85/Wedding_icon.png",
    },
    {
      id: 2,
      title: "Corporate Events",
      description:
        "Professional services for corporate events, conferences, and gatherings.",
      moreInfo:
        "Detailed coverage of all key moments, edited images in digital format.",
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Corporate_icon.png",
    },
    {
      id: 3,
      title: "Portraits",
      description:
        "Personalized sessions that reflect your personality in unique settings.",
      moreInfo:
        "Options include studio sessions, outdoor settings, or at-home shoots.",
      icon: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Portrait_icon.png",
    },
    {
      id: 4,
      title: "Event Photography",
      description:
        "Capture every moment of your special events, large or small.",
      moreInfo:
        "Includes social gatherings, public events, and private parties.",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Event_icon.png",
    },
    {
      id: 5,
      title: "Lifestyle Photography",
      description:
        "Document the beauty of daily life with candid and staged shots.",
      moreInfo: "Ideal for families and social media influencers.",
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/77/Lifestyle_icon.png",
    },
    {
      id: 6,
      title: "Fashion Photography",
      description: "Fashion shoots for brands, magazines, and runway events.",
      moreInfo: "Studio and on-location shoots available.",
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Fashion_icon.png",
    },
    {
      id: 7,
      title: "Food Photography",
      description: "Stunning images for menus, blogs, and marketing materials.",
      moreInfo: "Special lighting and styling techniques used.",
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Food_icon.png",
    },
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
              <img
                src={service.icon}
                alt={service.title}
                className="service-icon"
                onError={(e) => {
                  e.target.src =
                    "https://upload.wikimedia.org/wikipedia/commons/5/55/Default_icon.png"; // Fallback icon
                }}
              />
              <h3>{service.title}</h3>
            </div>
            <p>{service.description}</p>
            {openService === service.id && (
              <div className="service-more-info show">
                <p>{service.moreInfo}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
