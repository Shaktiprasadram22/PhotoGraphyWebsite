import React, { useState } from "react";
import "./Payment.css"; // Ensure your CSS is linked

function Payment() {
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    upiId: "",
    useUpi: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setPaymentData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(paymentData);
    setIsSubmitted(true); // Set the submitted state to true to trigger the transition
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
