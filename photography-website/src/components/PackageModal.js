import React from "react";
import "./PackageModal.css"; // Ensure to create appropriate CSS for modal

function PackageModal({ packageDetails, onClose }) {
  if (!packageDetails) return null; // Renders nothing if no package details are passed

  // Function to stop propagation of click events inside modal content
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-backdrop show" onClick={onClose}>
      <div className="modal-content show" onClick={stopPropagation}>
        <h2>{packageDetails.title}</h2>
        <p>{packageDetails.description}</p>
        <p className="price">{packageDetails.price}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PackageModal;
