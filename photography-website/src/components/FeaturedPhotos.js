import React, { useState } from "react";
import "./FeaturedPhotos.css";
import PackageModal from "./PackageModal";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function FeaturedPhotos() {
  const packages = [
    {
      id: 1,
      title: "Basic Package",
      description:
        "Ideal for small events and family gatherings. Includes up to 2 hours of photography, 50 edited high-resolution images, online gallery for viewing and sharing.",
      price: "$100",
    },
    {
      id: 2,
      title: "Standard Package",
      description:
        "Perfect for birthdays and engagements. Includes 4 hours of coverage, 100 edited images, online gallery, and a 20-page photo album.",
      price: "$200",
    },
    {
      id: 3,
      title: "Premium Package",
      description:
        "Comprehensive package for weddings and major events. Full-day coverage, 200 edited images, online gallery, two 30-page photo albums, drone and cinematic photography included.",
      price: "$300",
    },
    {
      id: 4,
      title: "Adventure Package",
      description:
        "Tailored for outdoor enthusiasts and adventurers. Includes location scouting and full-day shooting in remote locations, plus 150 edited images.",
      price: "$350",
    },
    {
      id: 5,
      title: "Newborn Package",
      description:
        "Special sessions for newborns. Safe and comfortable settings, with props and costumes included. 30 edited images, plus a custom photo book.",
      price: "$250",
    },
    {
      id: 6,
      title: "Graduation Package",
      description:
        "Capture this milestone with professional portraits. Session includes cap and gown photos, plus candid ceremony coverage. 80 edited images.",
      price: "$150",
    },
    {
      id: 7,
      title: "Corporate Package",
      description:
        "Ideal for corporate portraits and events. Includes headshots for up to 10 executives and event coverage. 120 edited images delivered in digital format.",
      price: "$500",
    },
    {
      id: 8,
      title: "Pet Photography Package",
      description:
        "Capture your furry friends in their element. Includes a 2-hour session, 40 edited images, and custom pet portraits.",
      price: "$120",
    },
    {
      id: 9,
      title: "Real Estate Package",
      description:
        "Real estate photography to help market properties effectively. Includes interior and exterior shots, aerial views, and 25 high-quality edited images.",
      price: "$300",
    },
    {
      id: 10,
      title: "Elopement Package",
      description:
        "Perfect for intimate ceremonies and destination weddings. Includes up to 3 hours of coverage, 80 edited high-resolution images, and online gallery access.",
      price: "$400",
    },
    {
      id: 11,
      title: "Seasonal Mini Sessions",
      description:
        "Seasonally themed photo sessions perfect for holiday cards and quick family portraits. 30-minute sessions and 20 edited images included.",
      price: "$75",
    },
    {
      id: 12,
      title: "Commercial Product Photography",
      description:
        "High-quality product shots for catalog, online store, and marketing materials. Includes studio setup and 50 edited images.",
      price: "$500",
    },
  ];

  const [selectedPackage, setSelectedPackage] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleBooking = (pkg) => {
    console.log("Booking package: ", pkg.title);
    navigate("/payment"); // Navigate to the Payment page when booked
  };

  return (
    <div id="price" className="packages">
      <h2>Our Photography Packages</h2>
      <div className="cards">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="card"
            onClick={() => setSelectedPackage(pkg)}
          >
            <div className="card-content">
              <h3>{pkg.title}</h3>
              <p>{pkg.description}</p>
              <p className="price">{pkg.price}</p>
              <button
                className="book-now-btn"
                onClick={(e) => {
                  e.stopPropagation(); // Stops the card click event
                  handleBooking(pkg);
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedPackage && (
        <PackageModal
          packageDetails={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </div>
  );
}

export default FeaturedPhotos;
