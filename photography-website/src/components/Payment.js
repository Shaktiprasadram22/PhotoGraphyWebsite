import React, { useState } from "react";
import "./Payment.css";

function Payment() {
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    upiId: "",
    name: "",
    useUpi: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    // Handle specific input formats
    if (name === "cardNumber") {
      if (!/^\d*$/.test(value) || value.length > 16) return; // Allow only digits, max 16
    }
    if (name === "cvv") {
      if (!/^\d*$/.test(value) || value.length > 3) return; // Allow only digits, max 3
    }
    if (name === "expiryDate") {
      if (!/^\d{0,2}\/?\d{0,2}$/.test(value)) return; // Allow MM/YY format
    }
    if (name === "name") {
      if (!/^[a-zA-Z\s]*$/.test(value)) return; // Allow only alphabetic characters and spaces
    }

    setPaymentData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Additional validation (if needed) before submission
    console.log(paymentData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="confirmation-screen">
        <h1>Thank You!</h1>
        <p>Your transaction has been completed successfully.</p>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <h1>Payment Page</h1>
      <form onSubmit={handleSubmit} className="payment-form">
        {!paymentData.useUpi && (
          <>
            <div className="form-group">
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={paymentData.cardNumber}
                onChange={handleChange}
                maxLength="16"
                placeholder="1234 5678 9123 4567"
                required
              />
            </div>
            <div className="form-group">
              <label>Expiry Date (MM/YY)</label>
              <input
                type="text"
                name="expiryDate"
                value={paymentData.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="form-group">
              <label>Security Code (CVV)</label>
              <input
                type="text"
                name="cvv"
                value={paymentData.cvv}
                onChange={handleChange}
                maxLength="3"
                placeholder="123"
                required
              />
            </div>
            <div className="form-group">
              <label>Cardholder Name</label>
              <input
                type="text"
                name="name"
                value={paymentData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
          </>
        )}
        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="useUpi"
              checked={paymentData.useUpi}
              onChange={handleChange}
            />
            Use UPI Instead
          </label>
        </div>
        {paymentData.useUpi && (
          <div className="form-group">
            <label>UPI ID</label>
            <input
              type="text"
              name="upiId"
              value={paymentData.upiId}
              onChange={handleChange}
              placeholder="example@upi"
              required
            />
          </div>
        )}
        <button type="submit" className="submit-btn">
          Confirm Payment
        </button>
      </form>
    </div>
  );
}

export default Payment;
